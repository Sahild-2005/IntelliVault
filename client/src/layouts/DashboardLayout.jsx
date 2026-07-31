import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background transition-colors duration-300">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 bg-background p-6 transition-colors duration-300">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;