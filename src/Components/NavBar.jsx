import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-black cursor-pointer">Urban<span className="text-pink-500">Fold</span></h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        {token ? (
          <>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
            <Link to="/cart" className="bg-purple-300 p-1 rounded-lg hover:bg-blue-200">Cart</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-green-200 p-1 rounded-lg  hover:bg-blue-200">Login</Link>
            <Link to="/signup" className="bg-purple-300 p-1 rounded-lg hover:bg-blue-200">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
