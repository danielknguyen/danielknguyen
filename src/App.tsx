import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { Portfolio } from "pages/portfolio";
import { Blogs } from "pages/blogs";
import { Blog } from "pages/blog";
import { Project } from "pages/project";
import { Navbar } from "components/Navbar";
import { pages } from "./consts";

const LOGO = "DANIEL K NGUYEN";

export const App = () => (
  <Router>
    <Navbar logo={LOGO} pages={pages} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/project/:slug/:id" element={<Project />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:slug/:id" element={<Blog />} />
    </Routes>
  </Router>
);
