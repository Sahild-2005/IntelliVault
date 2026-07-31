import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 transition-colors duration-300 dark:from-[#0f172a] dark:via-[#111827] dark:to-[#1e293b]">
      <RegisterForm />
    </div>
  );
}

export default Register;