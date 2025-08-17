import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../features/auth/pages/HomePage";
import { LoginPage } from "../features/auth/pages/loginPage";
import { SignupPage } from "../features/auth/pages/signupPage";
import { ProductsPage } from "../features/auth/pages/ProductsPage";
import { ContactPage } from "../features/auth/pages/ContactPage";


export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/Products", element: <ProductsPage /> },
  { path: "/contact", element: <ContactPage /> },


]);

