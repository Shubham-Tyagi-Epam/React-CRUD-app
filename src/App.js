import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Pages/NotFound";
import AddUser from "./Components/Pages/AddUsers";
import { createBrowserHistory } from "history";
import EditUser from "./Components/Pages/EditUser";
import ViewUser from "./Components/Pages/ViewUser";

let history = createBrowserHistory();

function App() {
  return (
    // eslint-disable-next-line no-restricted-globals
    <Router history={history}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
