"use client";
import { getCartProducts } from "@/actions/product/product";
import { TCartListItemDB } from "@/shared/types/product";
import { TCartItemData } from "@/shared/types/shoppingCart";
import { RootState } from "@/store/shoppingCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const [cartItems, setCartItems] = useState<TCartItemData[]>();
  const localCartItems = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  useEffect(() => {
    const convertDBtoCartItems = (rawData: TCartListItemDB[]) => {
      const cartListItem: TCartItemData[] = [];
      rawData.forEach((item) => {
        cartListItem.push({
          productId: item.id,
          imgUrl: item.images[0].url,
          price: item.price,
          quantity: localCartItems.items.find((f) => f.productId === item.id)?.quantity || 0,
          productName: item.name,
          dealPrice: item.salePrice || undefined,
        });
      });
      if (cartListItem.length > 0) return cartListItem;
      return null;
    };
    const getProductsFromDB = async () => {
      const productsIDs = localCartItems.items.map((s) => s.productId);

      if (productsIDs?.length === 0) setCartItems([]);

      if (productsIDs) {
        const response = await getCartProducts(productsIDs);
        if (response.res) {
          const finalResult = convertDBtoCartItems(response.res);

          if (!finalResult) return;

          setCartItems(finalResult);
        }
      }
    };

    if (localCartItems) {
      getProductsFromDB();
    }
  }, [localCartItems]);

  return (
    <div className="lg:max-w-113.75 w-full">
      {/* <!-- order list box --> */}
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Order Summary</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* <!-- title --> */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">Product</h4>
            </div>
            <div>
              <h4 className="font-medium text-dark text-right">Subtotal</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartItems?.map((item, key) => (
            <div key={key} className="flex items-center justify-between py-5 border-b border-gray-3">
              <div>
                <p className="text-dark">{item.productName}</p>
              </div>
              <div>
                <p className="text-dark text-right">Ksh.{(item.dealPrice || item.price) * item.quantity}</p>
              </div>
            </div>
          ))}

          {/* <!-- total --> */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="font-medium text-lg text-dark">Total</p>
            </div>
            <div>
              <p className="font-medium text-lg text-dark text-right">
                Ksh.{cartItems?.reduce((total, item) => total + (item.dealPrice || item.price) * item.quantity, 0)}
              </p>
            </div>
          </div>

          {/* <!-- checkout button --> */}
          <button
            type="button"
            onClick={() => router.push("/checkout")}
            className="w-full flex justify-center font-medium text-white cursor-pointer bg-green-500 py-3 px-6 rounded-md ease-out duration-200 hover:bg-green-400 mt-7.5"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
