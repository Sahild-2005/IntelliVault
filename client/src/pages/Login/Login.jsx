import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import toast from "react-hot-toast";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", formData);

      const { user, token, message } = response.data;

      login(user, token);

      toast.success(message || "Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6 transition-colors duration-300 dark:from-[#0f172a] dark:via-[#111827] dark:to-[#1e293b]">

      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-card-foreground shadow-2xl transition-colors duration-300">

        {/* Logo */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg">

            <Shield className="h-8 w-8 text-white" />

          </div>

          <h1 className="text-4xl font-bold text-foreground">
            Welcome Back
          </h1>

          <p className="mt-2 text-muted-foreground">
            Login to your IntelliVault account
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            />

          </div>

          {/* Password */}
          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-blue-600"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-border"></div>

          <span className="mx-4 text-sm text-muted-foreground">
            OR
          </span>

          <div className="h-px flex-1 bg-border"></div>

        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full rounded-xl border border-border bg-background py-3 font-medium text-foreground transition hover:bg-muted"
        >
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-muted-foreground">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-semibold text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;