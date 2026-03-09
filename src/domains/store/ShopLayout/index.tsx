"use client";
import React from "react";
import { Provider } from "react-redux";
import StoreFooter from "@/domains/store/shared/components/footer/index";
import StoreNavBar from "@/domains/store/shared/components/navbar";
import { shoppingCartStore } from "@/store/shoppingCart";

export default function index({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-50">
      <Provider store={shoppingCartStore}>
        <StoreNavBar />

        {children}
        <StoreFooter />
      </Provider>
    </main>
  );
}
