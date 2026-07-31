import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";

import UploadDocument from "./pages/Documents/UploadDocument";
import Documents from "./pages/Documents/Documents";
import DocumentDetails from "./pages/Documents/DocumentDetails";

import Analytics from "./pages/Analytics/Analytics.jsx";
import Settings from "./pages/Settings/Settings";

import SharedDocument from "./pages/Shared/SharedDocument";

function App() {
  return (
    <Routes>

      {/* =========================
          Public Routes
      ========================== */}

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Public Share Link */}
      <Route
        path="/shared/:token"
        element={<SharedDocument />}
      />

      {/* =========================
          Protected Routes
      ========================== */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
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
        path="/documents/upload"
        element={
          <ProtectedRoute>
            <UploadDocument />
          </ProtectedRoute>
        }
      />

      <Route
        path="/documents/:id"
        element={
          <ProtectedRoute>
            <DocumentDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;