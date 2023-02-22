import "./App.scss";
import Landing from "./views/Landing.jsx";
import navItems from "./content/data.json";
import About from "./views/About.jsx";
import { Route, Routes } from "react-router-dom";
import Services from "./views/Services.jsx";
import Header from "./components/Header/Index.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Event Management</h1>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={navItems.navItems[0]} element={<About />} />
        <Route path={navItems.navItems[1]} element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
