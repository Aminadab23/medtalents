import ReactDOM from "react-dom/client";

import Landing from "./pages/Landing";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
    
    <NavBar />
    
    <Landing />
    <Footer/>
    </div>
    
  );
}

