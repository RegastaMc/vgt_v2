"use client";
import { useState } from "react";

import { deleteProduct } from "@/actions/product/product";
import Button from "@/shared/components/UI/button";
import Popup from "@/shared/components/UI/popup";
import { TProductListItem } from "@/shared/types/product";
import toast from "react-hot-toast";

type TProps = {
  data: TProductListItem;
  requestReload: () => void;
};

const ProductListItem = ({ data, requestReload }: TProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="w-full h-12 px-4 grid grid-cols-3 justify-between items-center text-sm text-gray-800 rounded-lg transition-colors duration-300 select-none hover:bg-gray-100">
      <span className={"styles.name"}>{data.name}</span>
      <span className={"styles.category"}>{data.category.name}</span>
      <div className="flex gap-2 justify-end">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => console.log("edit product")}>
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
    </div>
  );
};

export default ProductListItem;
