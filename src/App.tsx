import { Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:slug" element={<Project />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
