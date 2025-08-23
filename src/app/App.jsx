import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartProvider } from "../features/auth/component/CartContext";
import { SearchProvider } from "../features/auth/component/SearchContext";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
