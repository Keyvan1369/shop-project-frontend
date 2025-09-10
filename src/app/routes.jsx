import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../features/auth/pages/HomePage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { SignupPage } from "../features/auth/pages/SignupPage";
import { ProductsPage } from "../features/auth/pages/ProductsPage";
import { ContactPage } from "../features/auth/pages/ContactPage";
import { AboutPage } from "../features/auth/pages/AboutPage";
import { CartPage } from "../features/auth/pages/CartPage";




export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cart", element: <CartPage /> },
  





]);

