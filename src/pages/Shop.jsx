import ProductCard from "../Components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";


const Shop = () => {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);

const fetchProducts = async () => {
  try {
    const res = await axios.get("https://urbanfold-backend.onrender.com/api/products");
    setProducts(res.data);
  } catch(err) {
    console.error("Error fetching products: ", err);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

const filteredProducts =
category === "All"
  ? products
  : products.filter((p) => p.category === category);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>
      {/* Filter Buttons */}
      <div>
        {["All", "Men", "Women", "Unisex"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-full border ${category === cat ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}>
            {cat}
          </button>
        ))}
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
