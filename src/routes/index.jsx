import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import HomePage from "../pages/home-page";
import NotFoundPage from "../pages/not-found-page";
import Presele from "../pages/presele";
import Blogs from "../pages/blogs";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/presale"} element={<Presele />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
