import BackgroundEffects from "./components/common/BackgroundEffects";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <BackgroundEffects />
      <Landing />
    </div>
  );
}

export default App;