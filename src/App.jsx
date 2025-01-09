import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactUsPage";
import AboutUs from "./pages/aboutUs";
import Employee from "./pages/employee";
import Home from "./pages/home";
import CareerPage from "./pages/career";
import GrantsPage from "./pages/grant";
import AssociationsPage from "./pages/assosiation";
import InitiativesPage from "./pages/initiativepage";
import Omniscient from "./pages/omniscient";
import Blog from "./pages/blog";
import Search from "./pages/search";
import Searcht from "./pages/search";
import Apply from "./pages/apply"
import EmployeeDetail from "./pages/employeedetail";
function App() {
  return (
    <Router>
      <div className="w-screen h-screen scrollbar-hide  ">
        <Routes>
          {/* Redirect the root (/) to /login */}

          {/* Login page route */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/grant" element={<GrantsPage />} />
          <Route path="/assosiate" element={<AssociationsPage />} />
          <Route path="/init" element={<InitiativesPage />} />
          <Route path="/omni" element={<Omniscient />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/search" element={<Searcht />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/employee/:name" element={<EmployeeDetail />} />

          {/* Store page route protected by PrivateRoute */}

          {/* Handle 404 for undefined routes */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
