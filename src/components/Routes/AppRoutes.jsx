import { Route, Routes } from "react-router-dom";

import Home from '../Pages/Home';
import Contact from "../Pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/contact/{id}" element={<Contact />} />
    </Routes>
);
}

export default AppRoutes;
