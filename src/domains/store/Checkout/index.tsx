"use client";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import { TCartItemData } from "@/shared/types/shoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/shoppingCart";
import { TCartListItemDB } from "@/shared/types/product";
import { getCartProducts } from "@/actions/product/product";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<TCartItemData[]>();
  const localCartItems = useSelector((state: RootState) => state.cart);

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
    <>
      {/* <Breadcrumb title={'Checkout'} pages={['checkout']} /> */}
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-292.5 w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              {/* <!-- checkout left --> */}
              <div className="lg:max-w-167.5 w-full">
                {/* <!-- login box --> */}
                <Login />

                {/* <!-- billing details --> */}
                <Billing />

                {/* <!-- address box two --> */}
                {/* <Shipping /> */}

                {/* <!-- others note box --> */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                  <div>
                    <label htmlFor="notes" className="block mb-2.5">
                      Other Notes (optional)
                    </label>

                    <textarea
                      name="notes"
                      id="notes"
                      rows={5}
                      placeholder="Notes about your order, e.g. speacial notes for delivery."
                      className="rounded-md border border-gray-3 bg-gray-100 placeholder:text-gray-500 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-500/20"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* // <!-- checkout right --> */}
              <div className="max-w-113.75 w-full">
                {/* <!-- order list box --> */}
                <div className="bg-gray-200/70 shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-300 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-gray-500">Your Order</h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    {/* <!-- title --> */}
                    <div className="flex items-center justify-between py-5 border-b border-gray-300">
                      <div>
                        <h4 className="font-medium text-gray-500">Product</h4>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-500">Subtotal</h4>
                      </div>
                    </div>

                    {cartItems?.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center justify-between py-5 border-b border-gray-300"
                      >
                        <div>
                          <p className="text-gray-500">{item.productName}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-right">Ksh.{item.price}</p>
                        </div>
                      </div>
                    ))}

                    {/* <!-- product item --> */}
                    <div className="flex items-center justify-between py-5 border-b border-gray-300">
                      <div>
                        <p className="text-gray-500">Shipping Fee</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-right">Ksh.15.00</p>
                      </div>
                    </div>

                    {/* <!-- total --> */}
                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="font-medium text-lg text-gray-500">Total</p>
                      </div>
                      <div>
                        <p className="font-medium text-lg text-gray-500 text-right">
                          {(cartItems?.reduce((acc, item) => acc + item?.price * item?.quantity, 0) ?? 0) + 15}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- coupon box --> */}
                {/* <Coupon /> */}

                {/* <!-- shipping box --> */}
                <ShippingMethod />

                {/* <!-- payment box --> */}
                <PaymentMethod />

                {/* <!-- checkout button --> */}
                <button
                  type="submit"
                  className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-500 mt-7.5"
                >
                  Process to Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
