import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { Portfolio } from "pages/portfolio";
import { Blogs } from "pages/blogs";
import { Blog } from "pages/blog";
import { Navbar } from "components/Navbar";
import { pages } from "./consts";

const LOGO = "DANIEL K NGUYEN";

export const App = () => (
  <Router>
    <Navbar logo={LOGO} pages={pages} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:slug/:id" element={<Blog />} />
    </Routes>
  </Router>
);
