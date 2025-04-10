import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-84 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                    <p className="text-xl font-bold mt-2">₹{product.price}</p>
                    <button className="mt-3 w-full bg-gradient-to-r from-pink-400 to-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;