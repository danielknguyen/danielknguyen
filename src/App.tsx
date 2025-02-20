import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Navbar } from "components/Navbar";
import { pages } from "./consts";

const LOGO = "DANIEL K NGUYEN";

export const App = () => (
  <>
    <Navbar logo={LOGO} pages={pages} />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
);
