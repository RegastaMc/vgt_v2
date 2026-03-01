import React, { useState } from "react";
import Image from "next/image";

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("rider");
  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-300 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-gray-600">Shipping Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-4">
          {/* <label
            htmlFor='free'
            className='flex cursor-pointer select-none items-center gap-3.5'
          >
            <div className='relative'>
              <input
                type='checkbox'
                name='free'
                id='free'
                className='sr-only'
                onChange={() => setShippingMethod('free')}
              />
              {/* selectShipping === 'free' ? 'border-4 border-blue' : 'border border-gray-4' */}
          {/* <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  shippingMethod === 'free'
                    ? 'border-4 border-blue'
                    : 'border border-gray-4'
                }`}
              ></div>
            </div>
            Free Shipping
          </label> */}

          <label htmlFor="speedaf" className="flex cursor-pointer select-none items-center gap-3.5">
            <div className="relative">
              <input
                type="checkbox"
                name="speedaf"
                id="speedaf"
                className="sr-only"
                onChange={() => setShippingMethod("speedaf")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  shippingMethod === "speedaf" ? "border-4 border-blue-500 " : "border border-gray-400"
                }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-200 hover:border-transparent hover:shadow-none ${shippingMethod === "speedaf" ? "bg-gray-200 border-blue-500" : "bg-white border-gray-400"}`}
            >
              <div className="flex items-center">
                <div className="pr-4">
                  <Image src="/images/delivery/speedaf.jfif" alt="speedaf" width={64} height={18} />
                </div>

                <div className="border-l border-gray-400 pl-4">
                  <p className="font-semibold text-gray-500">Ksh.10.99</p>
                  <p className="text-sm">SpeedAf Express Shipping</p>
                </div>
              </div>
            </div>
          </label>

          <label htmlFor="rider" className="flex cursor-pointer select-none items-center gap-3.5">
            <div className="relative">
              <input
                type="checkbox"
                name="rider"
                id="rider"
                className="sr-only"
                onChange={() => setShippingMethod("rider")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  shippingMethod === "rider" ? "border-4 border-blue-500" : "border border-gray-400"
                }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 ${shippingMethod === "rider" ? "bg-gray-200" : "bg-white"} hover:border-transparent hover:shadow-none ${shippingMethod === "rider" ? "border-blue-500" : ""}`}
            >
              <div className="flex items-center">
                <div className="pr-4">
                  <Image src="/images/delivery/rider.png" alt="rider" width={64} height={20} />
                </div>

                <div className="border-l border-gray-400 pl-4">
                  <p className="font-semibold text-gray-500">Ksh.12.50</p>
                  <p className="text-sm">Our Rider Delivery</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
