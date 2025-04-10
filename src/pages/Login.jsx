import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://urbanfold-backend.onrender.com/api/auth/login", form);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center px-4 bg-[url(./Images/login.jpg)] bg-no-repeat bg-cover">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          className="w-full border px-4 py-2 rounded mb-4"
          onChange={handleChange}
          required
        />

        <input type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          className="w-full border rounded px-4 py-2 mb-4"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Login
        </button>

        <a href="/signup" className="align-center ml-10 text-blue-500 hover:underline hover:text-black">Signup if you don't have an account</a>
      </form>
    </div>
  );
};

export default Login;
