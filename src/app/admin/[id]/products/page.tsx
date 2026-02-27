"use client";

import { useEffect, useState } from "react";

import { addProduct, getAllProducts } from "@/actions/product/product";
import ProductForm from "@/domains/admin/components/product/productForm";
import ProductListItem from "@/domains/admin/components/product/productListItem";
import Button from "@/shared/components/UI/button";
import Popup from "@/shared/components/UI/popup";
import { TAddProductFormValues, TProductListItem } from "@/shared/types/product";
import toast from "react-hot-toast";

const initialForm: TAddProductFormValues = {
  name: "",
  brandID: "",
  specialFeatures: ["", "", ""],
  isAvailable: false,
  desc: "",
  price: "",
  salePrice: "",
  images: [],
  categoryID: "",
  specifications: [],
};

const AdminProducts = () => {
  const [showProductWindow, setShowProductWindow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState<TAddProductFormValues>(initialForm);
  const [productsList, setProductsList] = useState<TProductListItem[]>([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const response = await getAllProducts();
    if (response.res) setProductsList(response.res);
  };

  const handleAddProduct = async () => {
    setIsLoading(true);
    const result = await addProduct(formValues);
    if (result.error) {
      toast.error(result.error || "Failed to add product", { position: "top-center" });
      setIsLoading(false);
    }
    if (result.res) {
      toast.success("Product added successfully", { position: "top-center", duration: 4000 });
      getProductsList();
      setIsLoading(false);
      setShowProductWindow(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center h-20 mb-8">
        <Button onClick={() => setShowProductWindow(true)}>Add new product</Button>
      </div>
      <div className="flex flex-col text-sm text-gray-800 bg-white rounded-lg shadow-md gap-4">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
        </table>
        {productsList.length ? (
          <>
            {productsList.map((product) => (
              <ProductListItem key={product.id} data={product} requestReload={getProductsList} />
            ))}
          </>
        ) : (
          <div>There is no product!</div>
        )}
      </div>
      {showProductWindow && (
        <Popup
          content={<ProductForm formValues={formValues} onChange={setFormValues} />}
          isLoading={isLoading}
          onCancel={() => setShowProductWindow(false)}
          onClose={() => setShowProductWindow(false)}
          onSubmit={() => handleAddProduct()}
          confirmBtnText="Add Product"
          title="Add New Product"
        />
      )}
    </div>
  );
};

export default AdminProducts;
