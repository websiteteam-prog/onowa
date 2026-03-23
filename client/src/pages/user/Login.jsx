import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {

        // token save
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful");

        navigate("/dashboard");

      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {

      console.error(error);
      alert("Server error");

    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#111] p-8 rounded-lg shadow-lg">

        <h2 className="text-white text-3xl font-bold mb-2">
          Login
        </h2>

        <p className="text-gray-400 mb-6">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-red-500 pr-12"
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 text-white py-3 rounded font-semibold"
          >
            LOGIN
          </button>

        </form>

        <p className="text-gray-400 mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 hover:text-red-400"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;
