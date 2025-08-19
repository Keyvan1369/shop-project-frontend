import React from "react";
import { HomeLayout } from "../../../shared/copmonents/HomeLayout";
import { CartForm } from "../component/CartForm";

export const CartPage = () => {
  return (
    <>
      <HomeLayout>
        <CartForm />
      </HomeLayout>
    </>
  );
};
