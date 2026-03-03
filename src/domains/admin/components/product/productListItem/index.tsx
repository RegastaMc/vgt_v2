"use client";
import { useState } from "react";

import { deleteProduct, editProduct, getOneProduct } from "@/actions/product/product";
import Button from "@/shared/components/UI/button";
import Popup from "@/shared/components/UI/popup";
import { TAddProductFormValues, TProductListItem } from "@/shared/types/product";
import toast from "react-hot-toast";
import ProductForm from "../productForm";

type TProps = {
  data: TProductListItem;
  requestReload: () => void;
};

const ProductListItem = ({ data, requestReload }: TProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showProductWindow, setShowProductWindow] = useState(false);
  const [formValues, setFormValues] = useState<TAddProductFormValues>({
    name: data.name,
    brandID: data.brandID || "", // Handle the case when brandID is not present
    specialFeatures: data.specialFeatures,
    isAvailable: data.isAvailable,
    desc: data.desc,
    price: data.price.toString(),
    salePrice: data.salePrice?.toString() || "",
    images: data.images,
    categoryID: data.category.id,
    specifications: data.specs,
  });

  const handleDelete = async () => {
    setIsLoading(true);

    const response = await deleteProduct(data.id);
    if (response.error) {
      toast.error(response.error || "Failed to delete product", { position: "bottom-center" });
      setIsLoading(false);
    }
    if (response.res) {
      toast.success("Product deleted successfully", { position: "bottom-center", duration: 6000 });
      setIsLoading(false);
      requestReload();
    }
  };
  const handleEditForm = async () => {
    setIsLoading(true);
    const product = await getOneProduct(data.id);
    if (product.error) {
      toast.error(product.error || "Failed to fetch product data", { position: "top-center" });
      setIsLoading(false);
    }
    if (product.res) {
      setFormValues({
        name: product.res.name || "",
        brandID: product.res.brandID || "", // Handle the case when brandID is not present

        specialFeatures: product.res.specialFeatures || ["", "", ""],
        isAvailable: product.res.isAvailable || false,
        desc: product.res.desc || "",
        price: product.res.price || "",
        salePrice: product.res.salePrice || "",
        images: product.res.images || [],
        categoryID: product.res.categoryID || "",
        specifications: product.res.specifications || [],
      });
    }

    const result = await editProduct(formValues, data.id);
    if (result.error) {
      toast.error(result.error || "Failed to edit product", { position: "top-center" });
      setIsLoading(false);
    }
    if (result.res) {
      toast.success("Product edited successfully", { position: "top-center", duration: 4000 });
      setIsLoading(false);
      setShowProductWindow(false);
      requestReload();
    }
  };

  return (
    <div className="w-full h-12 px-4 grid grid-cols-3 justify-between items-center text-sm text-gray-800 rounded-lg transition-colors duration-300 select-none hover:bg-gray-100">
      <span className={"styles.name"}>{data.name}</span>
      <span className={"styles.category"}>{data.category.name}</span>
      <div className="flex gap-2 justify-end">
        <Button onClick={() => setShowProductWindow(true)} className="bg-blue-500 hover:bg-blue-600 text-white">
          edit
        </Button>
        <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={() => setShowDelete(true)}>
          delete
        </Button>
      </div>
      {showDelete && (
        <Popup
          content={<span className="block text-center p-6 pb-10">Are You Sure?</span>}
          width="300px"
          isLoading={isLoading}
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDelete()}
          cancelBtnText="NO"
          confirmBtnText="YES"
        />
      )}
      {showProductWindow && (
        <Popup
          content={<ProductForm formValues={formValues} onChange={setFormValues} />}
          isLoading={isLoading}
          onCancel={() => setShowProductWindow(false)}
          onClose={() => setShowProductWindow(false)}
          onSubmit={() => handleEditForm()}
        />
      )}
    </div>
  );
};

export default ProductListItem;
