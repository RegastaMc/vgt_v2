import React, { useState } from "react";
import Image from "next/image";

const PaymentMethod = () => {
  const [payment, setPayment] = useState("bank");
  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-3">
          <label htmlFor="bank" className="flex cursor-pointer select-none items-center gap-4">
            <div className="relative">
              <input type="checkbox" name="bank" id="bank" className="sr-only" onChange={() => setPayment("bank")} />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "bank" ? "border-4 border-blue-500" : "border border-gray-400"
                }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-200 hover:border-transparent hover:shadow-none ${
                payment === "bank" ? "border-4 border-blue-500 bg-gray-200" : " border-gray-400 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/payment/bank.svg" alt="bank" width={29} height={12} />
                </div>

                <div className="border-l border-gray-400 pl-2.5">
                  <p>Direct bank transfer</p>
                </div>
              </div>
            </div>
          </label>

          <label htmlFor="cash" className="flex cursor-pointer select-none items-center gap-4">
            <div className="relative">
              <input type="checkbox" name="cash" id="cash" className="sr-only" onChange={() => setPayment("cash")} />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "cash" ? "border-4 border-blue-500" : "border border-gray-400"
                }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-200 hover:border-transparent hover:shadow-none min-w-60 ${
                payment === "cash" ? "border-4 border-blue-500 bg-gray-200" : " border-gray-400 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/payment/cash.svg" alt="cash" width={21} height={21} />
                </div>

                <div className="border-l border-gray-400 pl-2.5">
                  <p>Cash on delivery</p>
                </div>
              </div>
            </div>
          </label>

          <label htmlFor="m-pesa" className="flex cursor-pointer select-none items-center gap-4">
            <div className="relative">
              <input
                type="checkbox"
                name="m-pesa"
                id="m-pesa"
                className="sr-only"
                onChange={() => setPayment("m-pesa")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "m-pesa" ? "border-4 border-blue-500" : "border border-gray-400"
                }`}
              ></div>
            </div>
            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-200 hover:border-transparent hover:shadow-none min-w-60 ${
                payment === "m-pesa" ? "border-4 border-blue-500 bg-gray-200" : " border-gray-400 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/payment/mpesa.png" alt="m-pesa" width={75} height={20} />
                </div>

                <div className="border-l border-gray-400 pl-2.5">
                  <p>M-pesa</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
