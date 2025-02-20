import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "pages/homes";
import { Portfolio } from "pages/portfolio";
import { Navbar } from "components/Navbar";
import { pages } from "./consts";

const LOGO = "DANIEL K NGUYEN";

export const App = () => (
  <Router>
    <Navbar logo={LOGO} pages={pages} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </Router>
);
