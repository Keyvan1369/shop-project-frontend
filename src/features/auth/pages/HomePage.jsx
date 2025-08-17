import React from "react";
import { Header } from "../../../shared/copmonents/Header";
import { HomeForm } from "../component/HomeForm";
import { Footer } from "../../../shared/copmonents/Footer";
import { HomeLayout } from "../../../shared/copmonents/HomeLayout";

export const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <HomeForm />
      </HomeLayout>
    </>
  );
};
