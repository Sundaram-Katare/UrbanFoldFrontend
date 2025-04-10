import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../Components/ProductForm";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // 👈 NEW

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://urbanfold-backend.onrender.com/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://urbanfold-backend.onrender.com/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product", err);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleProductSaved = () => {
    setShowForm(false);
    setEditingProduct(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <button
        onClick={() => {
          setShowForm(!showForm);
          setEditingProduct(null); // Reset if adding
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        {showForm ? "Cancel" : "+ Add Product"}
      </button>

      {showForm && (
        <ProductForm
          onSuccess={handleProductSaved}
          initialData={editingProduct} // 👈 Pass product to edit
        />
      )}

      <div className="mt-6 space-y-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <div className="flex flex-rows gap-8">
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">₹{product.price}</p>
              </div>
              <div>
                <img src={product.image} alt="" className="h-[105px] w-[85px] border-2 border-black rounded-lg" />
              </div>
            </div>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(product)} // 👈 Set current product
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
