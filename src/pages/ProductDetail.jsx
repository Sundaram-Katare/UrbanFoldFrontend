import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://urbanfold-backend.onrender.com/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6 text-center text-lg">Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
  if (!product) return <div className="p-6 text-center">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[850px] object-cover rounded-lg"
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>

          <p className="text-2xl font-semibold text-pink-600">₹{product.price}</p>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <button
            className="bg-black text-white w-full py-3 mt-4 rounded-lg hover:bg-gray-800 transition"
            onClick={() => addToCart(product)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
