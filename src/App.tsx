import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prediksi from "./pages/Prediksi";
import Navbar from "./components/Navbar";
import Tentang from "./pages/Tentang";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediksi" element={<Prediksi />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </>
  );
}

export default App;
