import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Jobs from "./pages/Jobs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    
    <NavBar />
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/jobs" element={<Jobs />} />
 </Routes>

 <Footer/>
    </>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);