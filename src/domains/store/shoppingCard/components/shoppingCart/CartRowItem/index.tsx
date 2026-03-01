"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { DeleteIcon } from "@/shared/components/icons/svgIcons";
import { TCartItemData } from "@/shared/types/shoppingCart";
import { modifyQuantity, remove } from "@/store/shoppingCart";
import Quantity from "../../quantity";

type TProps = {
  data: TCartItemData;
  onLinkClicked: () => void;
};

const CartRowItem = ({ data, onLinkClicked }: TProps) => {
  const { productName, productId, imgUrl, price, dealPrice = 0, quantity } = data;

  const dispatch = useDispatch();
  const router = useRouter();
  const handleQuantityChange = (isReduced: boolean) => {
    dispatch(modifyQuantity({ amount: isReduced ? -1 : 1, productId }));
  };
  const currentPrice = dealPrice === 0 ? price : dealPrice;

  const handleGoToPage = () => {
    router.push("/product/" + productId);
    onLinkClicked();
  };

  return (
    <div className="flex md:flex-row flex-col mt-5 mx-7 pb-5 justify-between gap-4 border-b border-gray-200">
      <div className={"w-[120px] h-[110px] relative cursor-pointer"} onClick={handleGoToPage}>
        <Image
          src={imgUrl}
          fill
          alt={productName}
          className="rounded-lg overflow-hidden border border-gray-200 object-contain"
        />
      </div>
      <h2 className={"mb-3 text-sm flex items-center justify-start text-gray-600 md:mb-6"} onClick={handleGoToPage}>
        {productName}
      </h2>
      <div className={"grid grid-cols-4 gap-4 w-full"}>
        <div className={"flex items-center justify-start"}>
          <span className="text-sm text-gray-500 ml-3">
            {quantity > 1
              ? `${quantity} x ${currentPrice.toLocaleString("en-us", {
                  maximumFractionDigits: 2,
                })} Ksh.`
              : ""}{" "}
          </span>
        </div>
        <div className={" flex items-center justify-start gap-4"}>
          {" "}
          <Quantity onChange={handleQuantityChange} quantity={quantity} iconWidth={8} />
        </div>
        <span className="text-lg text-gray-700 flex items-center justify-start">
          Ksh.
          {(quantity * currentPrice).toLocaleString("en-us", {
            minimumFractionDigits: 2,
          })}{" "}
        </span>

        <div className={"flex justify-between items-center mt-3"}>
          <button
            onClick={() => dispatch(remove(productId))}
            className="size-10 cursor-pointer rounded-md flex items-center justify-center transition-all duration-300 border border-white hover:border-gray-200 hover:bg-gray-100 active:border-gray-300 active:bg-gray-200"
          >
            <DeleteIcon width={16} className="stroke-red-500 fill-red-500 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartRowItem;
