import React from "react";
import {  ProductsForm } from "../component/ProductsForm";
import { HomeLayout } from "../../../shared/copmonents/HomeLayout";

export const ProductsPage = () => {
  return (
    <div>
      <HomeLayout>
       <ProductsForm />
      </HomeLayout>
    </div>
  );
};
