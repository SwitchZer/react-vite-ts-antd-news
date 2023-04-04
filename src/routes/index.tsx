import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/features/news/page/Home";
import About from "@/features/news/page/About";
import Profile from "@/features/news/page/Profile";
import Layout from "@/layouts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
