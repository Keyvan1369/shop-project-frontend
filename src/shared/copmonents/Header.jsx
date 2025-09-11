import  { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../features/auth/component/CartContext";
import { searchService } from "../../features/auth/api/productService";

export const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [search, setSearch] = useState({ id: "", Pname: "" });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const parsed = JSON.parse(userInfo);
      setUsername(parsed.username);
    }
  }, []);

  const getValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await searchService(search.id, search.Pname);

      if (!data || data.length === 0) {
        setError("No products found.");
      } else {
        setResults(data);
      }
    } catch (err) {
      console.error(err);
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-lime-600 text-white h-14 shadow-md">
      <div className="flex items-center gap-6">
        <div className="font-bold text-xl">Online Shop</div>

        <ul className="hidden md:flex items-center gap-6">
          {!username ? (
            <>
              <li className="hover:text-red-400 cursor-pointer">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="hover:text-red-400 cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li className="hover:text-red-400 cursor-pointer">
              Hello, {username.username}!
            </li>
          )}
        </ul>
      </div>

      <form
        onSubmit={searchHandler}
        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-none z-10"
      >
        <div className="flex items-center bg-white rounded-full px-3 shadow pointer-events-auto">
          <FaSearch className="text-gray-500" />
          <input
            onChange={getValue}
            name="Pname"
            id="site-search-name"
            type="text"
            placeholder="Search by name"
            className="bg-transparent outline-none px-2 py-1 w-full text-black"
          />
          <input
            onChange={getValue}
            name="id"
            id="site-search-id"
            type="text"
            placeholder="Search by ID"
            className="bg-transparent outline-none px-2 py-1 w-full text-black"
          />
        </div>

        <div className="mt-2 text-black max-h-60 overflow-auto">
          {loading && <p>Searching products...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && results.length > 0 && (
            <ul className="bg-white shadow rounded p-2">
              {results.map((item) => (
                <li key={item._id} className="border-b last:border-b-0 p-1">
                  {item.Pname} - €{item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      <div className="flex items-center gap-4">
        <Link to="/products" className="hover:text-red-400">
          Products
        </Link>
        <Link to="/" className="hover:text-red-400">
          Home
        </Link>
        <FaHeart className="text-xl cursor-pointer hover:text-red-400" />

        <div className="relative cursor-pointer">
          <Link to="/cart">
            <FaShoppingCart className="text-xl hover:text-red-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-400 rounded-full text-xs px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
