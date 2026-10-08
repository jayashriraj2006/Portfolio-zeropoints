import { BrowserRouter, Routes, Route } from "react-router-dom";
import Founder from "./pages/founder";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Founder />} />

        <Route path="/contact" element={<Contact />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;