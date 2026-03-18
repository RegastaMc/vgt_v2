/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAllBrands } from "@/actions/brands/brands";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { getCategorySpecs } from "@/actions/category/specifications";
import DropDownList from "@/shared/components/UI/dropDown";
import Input from "@/shared/components/UI/input";
import { TBrand } from "@/shared/types";
import { TGroupJSON } from "@/shared/types/categories";
import { TAddProductFormValues } from "@/shared/types/product";
import { TDropDown } from "@/shared/types/uiElements";
import { cn } from "@/shared/utils/styling";
import { ProductSpec, SpecGroup } from "prisma/src/lib/prisma/client";
import { Trash2, UploadCloud } from "lucide-react";

const categoryListFirstItem: TDropDown = {
  text: "Select A Category....",
  value: "",
};

const brandListFirstItem: TDropDown = {
  text: "Select A Brand....",
  value: "",
};

type TProps = {
  formValues: TAddProductFormValues;
  onChange: (props: TAddProductFormValues) => void;
  editMode?: boolean;
};

const ProductForm = ({ formValues: props, onChange, editMode }: TProps) => {
  const [categoryList, setCategoryList] = useState<TDropDown[]>([categoryListFirstItem]);
  const [brandList, setBrandList] = useState<TDropDown[]>([brandListFirstItem]);
  const [selectedCategoryListIndex, setSelectedCategoryListIndex] = useState(0);
  const [selectedBrandListIndex, setSelectedBrandListIndex] = useState(0);
  useEffect(() => {
    if (props.brandID && brandList.length > 0) {
      const index = brandList.findIndex((brand) => brand.value === props.brandID);

      setSelectedBrandListIndex(index !== -1 ? index : 0);
    }
  }, [props.brandID, brandList]);

  useEffect(() => {
    if (props.categoryID && categoryList.length > 0) {
      const index = categoryList.findIndex((category) => category.value === props.categoryID);
      setSelectedCategoryListIndex(index !== -1 ? index : 0);
    }
  }, [props.categoryID, categoryList]);

  const [categorySpecs, setCategorySpecs] = useState<SpecGroup[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategoryList(convertJSONtoDropdownList(result.res));
      }
    };

    const fetchBrands = async () => {
      const result = await getAllBrands();
      if (result.res) {
        setBrandList(convertBrandsToDropdownList(result.res));
      } else {
      }
    };

    const convertJSONtoDropdownList = (json: TGroupJSON[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [categoryListFirstItem];
      json.forEach((group) => {
        dropDownData.push({
          text: group.group.name,
          value: group.group.id,
        });
        group.categories.forEach((category) => {
          dropDownData.push({
            text: group.group.name + " - " + category.category.name,
            value: category.category.id,
          });
          category.subCategories.forEach((sub) => {
            dropDownData.push({
              text: group.group.name + " - " + category.category.name + " - " + sub.name,
              value: sub.id,
            });
          });
        });
      });

      return dropDownData;
    };

    const convertBrandsToDropdownList = (brandList: TBrand[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [brandListFirstItem];
      brandList.forEach((brand) => {
        dropDownData.push({
          text: brand.name,
          value: brand.id,
        });
      });

      return dropDownData;
    };

    fetchCategories();
    fetchBrands();
  }, []);

  const handleCategoryChange = (index: number) => {
    setSelectedCategoryListIndex(index);
    if (index === 0) {
      onChange({
        ...props,
        specifications: JSON.parse(JSON.stringify(props.specifications)),
        categoryID: "",
      });
      setCategorySpecs([]);
    } else {
      getSpecGroup(categoryList[index].value);
    }
  };

  const handleBrandChange = (index: number) => {
    setSelectedBrandListIndex(index);
    onChange({ ...props, brandID: brandList[index].value });
  };

  const getSpecGroup = async (categoryID: string) => {
    const response = await getCategorySpecs(categoryID);
    if (response.res) {
      const specArray: ProductSpec[] = [];
      response.res.forEach((item) => {
        specArray.push({
          id: "",
          specGroupID: item.id,
          specValues: item.specs.map((spec) => ""),
          productID: "",
        });
      });
      onChange({
        ...props,
        specifications: JSON.parse(JSON.stringify(specArray)),
        categoryID: categoryID,
      });
      setCategorySpecs(response.res);
    }
  };

  const handleSpecialFeatureChange = (index: number, value: string) => {
    const newArray = [...props.specialFeatures];
    newArray[index] = value;
    onChange({ ...props, specialFeatures: newArray });
  };

  const handleImageDelete = (publicId: string, field: any) => async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/delete-cld-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Image deleted successfully", { position: "top-center", duration: 4000 });
        field.onChange(field.value.filter((img: any) => img.publicId !== publicId));
      } else {
        toast.error(data?.error || "Failed to delete image");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, Please try again!");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 overflow-y-scroll md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md">
      {/* Header */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">{`${editMode ? "Edit" : "Add"} Product`}</h2>

      {/* Form grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" flex flex-col md:flex-row md:justify-between gap-2">
          <span>Product Name:</span>
          <Input
            type="text"
            className="w-[200px]"
            value={props.name}
            placeholder="Name..."
            onChange={(e) =>
              onChange({
                ...props,
                name: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="flex  flex-col md:flex-row justify-between">
          <span>Short Description:</span>
          <Input
            type="text"
            className="w-[200px]"
            value={props.desc}
            onChange={(e) =>
              onChange({
                ...props,
                desc: e.currentTarget.value,
              })
            }
            placeholder="Short Description..."
          />
        </div>
        <div className="flex  flex-col md:flex-row justify-between">
          <span>Special Features:</span>
          <div className="flex flex-col gap-2 mr-6">
            <Input
              type="text"
              value={props.specialFeatures[0]}
              onChange={(e) => handleSpecialFeatureChange(0, e.currentTarget.value)}
            />
            <Input
              type="text"
              value={props.specialFeatures[1]}
              onChange={(e) => handleSpecialFeatureChange(1, e.currentTarget.value)}
            />
            <Input
              type="text"
              value={props.specialFeatures[2]}
              onChange={(e) => handleSpecialFeatureChange(2, e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-between">
          <span>Price:</span>
          <Input
            type="number"
            className="w-[200px]"
            value={props.price}
            onChange={(e) =>
              onChange({
                ...props,
                price: e.currentTarget.value,
              })
            }
            placeholder="Ksh.0.00"
          />
        </div>
        <div className="flex   flex-col md:flex-row justify-between">
          <span>Discount Price:</span>
          <Input
            type="number"
            className="w-[200px]"
            value={props.salePrice}
            onChange={(e) =>
              onChange({
                ...props,
                salePrice: e.currentTarget.value,
              })
            }
            placeholder="Ksh.0.00"
          />
        </div>
        <div className="flex  flex-col md:flex-row justify-between">
          <span>Availability:</span>
          <div className="flex gap-2 items-center">
            <span
              className={cn(
                "select-none border rounded-sm px-3 py-1 ml-1 transition-colors duration-300",
                props.isAvailable
                  ? "text-gray-100 bg-green-500 border-green-500"
                  : "cursor-pointer hover:bg-gray-100 border border-gray-200",
              )}
              onClick={() => onChange({ ...props, isAvailable: true })}
            >
              In Stock
            </span>
            <span
              className={cn(
                "select-none border rounded-sm px-3 py-1 ml-1 transition-colors duration-300",
                !props.isAvailable
                  ? "text-gray-100 bg-red-500 hover:bg-red-500 border-red-500"
                  : "cursor-pointer hover:bg-gray-100 border border-gray-200",
              )}
              onClick={() => onChange({ ...props, isAvailable: false })}
            >
              Out Of Stock
            </span>
          </div>
        </div>
        <div className="flex   flex-col md:flex-row justify-between">
          <span>Brand:</span>
          <DropDownList
            data={brandList}
            width="200px"
            selectedIndex={selectedBrandListIndex}
            onChange={handleBrandChange}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <label htmlFor="images">Upload Product Images</label>
          <div className="flex flex-wrap gap-2 mt-2">
            <CldUploadWidget
              signatureEndpoint="/api/sign-upload"
              options={{
                uploadPreset: "shoppit",
                folder: "categories",
                maxFiles: 5,
                resourceType: "image",
                clientAllowedFormats: ["png", "jpeg", "jpg", "webp"],
                maxFileSize: 15000000,
                multiple: true,
              }}
              onSuccess={(result) => {
                const info = result?.info as {
                  secure_url?: string;
                  public_id?: string;
                };

                if (info?.secure_url && info?.public_id) {
                  const newImage = {
                    url: info.secure_url,
                    public_id: info.public_id,
                  };

                  onChange({
                    ...props,
                    images: [...props.images, newImage],
                  });
                }
              }}
            >
              {({ open }) => (
                <button
                  onClick={() => open()}
                  type="button"
                  className=" bg-gray-500 cursor-pointer flex flex-col items-center justify-center hover:opacity-90 text-white py-2 px-4 rounded-md"
                >
                  <UploadCloud width={20} />
                  <span>Upload Images</span>
                </button>
              )}
            </CldUploadWidget>
            <div className="flex  gap-1">
              {props.images.map((image, index) => (
                <div key={index} className="relative">
                  {image instanceof File ? (
                    <div>No image URL available</div>
                  ) : (
                    <Image
                      src={image.url}
                      alt={image.public_id}
                      width={100}
                      height={100}
                      className="w-28 h-32 object-cover rounded-md"
                    />
                  )}
                  <button
                    type="button"
                    className="absolute top-1 cursor-pointer right-1 bg-white rounded-full p-1 text-red-500 hover:text-red-700"
                    onClick={handleImageDelete(image instanceof File ? "" : image.public_id, {
                      value: props.images,
                      onChange: (imgs: any) => {
                        props.images = imgs;

                        onChange({ ...props, images: imgs });
                      },
                    })}
                  >
                    <Trash2 width={20} className="text-red-400 hover:text-red-700" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row justify-between">
          <span>Category</span>
          <DropDownList
            data={categoryList}
            width="430px"
            selectedIndex={selectedCategoryListIndex}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
      <div className="mt-5 border-t border-gray-200 w-full h-auto py-4 flex flex-col">
        <span className="text-base mb-4">Specifications:</span>
        <div className="flex-grow flex flex-col items-start gap-4 mb-6">
          {categorySpecs.length ? (
            <>
              {categorySpecs.map((specGroup, groupIndex) => (
                <div className="w-full flex flex-col p-3 rounded-md border border-gray-300" key={specGroup.id}>
                  <span className="w-full pb-3 mb-3 border-b border-gray-200">{specGroup.title}</span>
                  <>
                    {specGroup.specs.map((spec: any, specIndex: any) => (
                      <div
                        className="w-full flex items-center justify-between p-2 pl-4 rounded-md transition-colors duration-600 hover:bg-gray-100"
                        key={specIndex}
                      >
                        <span>{spec}</span>
                        <Input
                          type="text"
                          className="w-[200px]"
                          value={props.specifications[groupIndex]?.specValues[specIndex]}
                          onChange={(e) => {
                            props.specifications[groupIndex].specValues[specIndex] = e.currentTarget.value;
                            onChange({ ...props });
                          }}
                        />
                      </div>
                    ))}
                  </>
                </div>
              ))}
            </>
          ) : (
            <span>Can not Find! </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
