import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import UploadDocument from "./pages/Documents/UploadDocument";
import Documents from "./pages/Documents/Documents";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

   <Route
  path="/documents/upload"
  element={
    <ProtectedRoute>
      <UploadDocument />
    </ProtectedRoute>
  }
/>
<Route
  path="/documents"
  element={
    <ProtectedRoute>
      <Documents />
    </ProtectedRoute>
  }
/>
      <Route
        path="/register"
        element={<Register />}
      />

     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}

export default App;