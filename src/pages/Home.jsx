import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import Branding from "../Components/Branding";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await axios.get("https://urbanfold-backend.onrender.com/api/products/featured");
        setFeaturedProducts(res.data);
      } catch (err) {
        console.error("Error fetching featured products", err);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-red-100 to-blue-400 py-20 px-6 rounded-xl mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Style <span className="text-pink-500 transition transformx font-serif">That Speaks</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover our new collection of trendy outfits for all seasons.
          </p>
          <a href="/shop" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-500 transition">
            Shop now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-6">🔥 Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-gray-500">No featured products available.</p>
          )}
        </div>
      </section>
      <Branding />
    </div>
  );
};

export default Home;
