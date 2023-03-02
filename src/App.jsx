import "./App.scss";
import Landing from "./views/Landing.jsx";
import navItems from "./content/data.json";
import About from "./views/About.jsx";
import { Route, Routes } from "react-router-dom";
import Services from "./views/Services.jsx";
import Header from "./components/Header/Index.jsx";
import Suppliers from "./views/Suppliers.jsx";
import Contact from "./views/Contact.jsx";
import Auth from "./views/Auth.jsx";
// import Register from "./views/Register.jsx";
import Chat from "./views/Chat.jsx";
import Dashbord from "./views/Dashbord.jsx";
import Invoice from "./views/Invoice.jsx";
import Payment from "./views/Payment";
import Page404 from "./views/Page404.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Index.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={navItems.navItems[0]} element={<About />} />
        <Route path={navItems.navItems[1]} element={<Services />} />
        <Route path={navItems.navItems[2]} element={<Suppliers />} />
        <Route path={navItems.navItems[3]} element={<Contact />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
