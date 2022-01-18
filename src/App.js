import "./App.css";
import Footer from "./components/common/Footer";
import Topbar from "./components/common/Topbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/loginregister" element={<LoginRegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
