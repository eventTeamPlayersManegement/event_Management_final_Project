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
import Chat from "./views/Chat.jsx";
import Dashbord from "./views/Dashbord.jsx";

import Payment from "./views/Thanks";
import Page404 from "./views/Page404.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Index.jsx";
import Photographer from "./views/Photographer.jsx";
import Restaurant from "./views/Restaurant.jsx";
import Entertainment from "./views/Entertainment.jsx";
import Rentauto from "./views/Rentauto.jsx";
import AddSuppliersOnPath from "./views/AddSuppliersOnPath.jsx";
import { EventContext } from "./context/Context.jsx";
import { useContext } from "react";
import Thanks from "./views/Thanks";

function App() {
  const { theme } = useContext(EventContext)[2];
  // const test = useContext(EventContext);
  // console.log(test[2].theme);

  return (
    <div className="App" id={theme}>
      <Header />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={navItems.navItems[0]} element={<About />} />
        <Route path={navItems.navItems[1]} element={<Suppliers />} />
        <Route path={navItems.navItems[2]} element={<Services />} />
        <Route path={navItems.navItems[3]} element={<Contact />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard">
          <Route index element={<Dashbord />} />
          <Route path=":path" element={<AddSuppliersOnPath />} />
        </Route>

        <Route path="/thanks" element={<Thanks />} />
        <Route path="/photographer" element={<Photographer />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/rentauto" element={<Rentauto />} />

        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
