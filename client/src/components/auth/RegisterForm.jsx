import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";

function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (formData.password.length < 6) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      const response = await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      toast.success(
        response.message || "Registration successful!"
      );

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Registration failed"
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
            Create Account
          </h1>

          <p className="mt-2 text-muted-foreground">
            Join IntelliVault today
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Full Name */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            />

          </div>

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
              placeholder="john@example.com"
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
                placeholder="********"
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

          {/* Confirm Password */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-foreground">
              Confirm Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-muted-foreground">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-semibold text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default RegisterForm;