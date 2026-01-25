import "./App.css";
import "animate.css";

//react-router-domルーティング設定

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./const";

import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import MyProductsPage from "./pages/MyProductsPage";
import ContactPage from "./pages/ContactPage";

import Page404 from "./pages/Page404";

import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.TOP} element={<TopPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.SKILLS} element={<SkillsPage />} />
            <Route path={ROUTES.MYPRODUCTS} element={<MyProductsPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
			<Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
