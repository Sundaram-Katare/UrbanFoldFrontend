import { useEffect, useState } from "react";
import axios from "axios";
import PremiumCard from "../Components/PremiumCard";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token)
      const res = await axios.get("https://urbanfold-backend.onrender.com/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.log("Error fetching profile", err);
    }
  };

  const admin = () => {
    navigate("/admin");
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <>
      <div className="bg-gray-700 h-full p-20 flex justify-center flex-col items-center">
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
          <h1 className="text-2xl font-bold ">Welcome, {user.name}!</h1>

        </div>
        <PremiumCard user={user} />
        <div className="flex gap-6">
          <a href="/shop" className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-pink-300 transition mt-10">
            Shop now
          </a>
          {user.isAdmin ? (<button className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-pink-300 transition mt-10" onClick={admin}>Admin Dashboard</button>
          ) : (<button></button>)};
        </div>
      </div>
    </>
  );
};

export default Profile;
