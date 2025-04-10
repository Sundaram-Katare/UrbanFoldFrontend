import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "isAdmin") {
      setForm({ ...form, isAdmin: value === "admin" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://urbanfold-backend.onrender.com/api/auth/signup", form);
      alert("Account created. Please login.");
      navigate("/login");
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center px-4 bg-[url(./Images/signup.jpg)] bg-no-repeat bg-cover">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full border px-4 py-2 rounded mb-4"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded mb-4"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded mb-4"
          value={form.password}
          onChange={handleChange}
          required
        />

        <select
          name="isAdmin"
          className="w-full border px-4 py-2 rounded mb-4"
          value={form.isAdmin ? "admin" : "user"}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
