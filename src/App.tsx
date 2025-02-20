import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);
