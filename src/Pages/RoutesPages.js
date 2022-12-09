import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import ServicePage from "./ServicePage";
import HomePage from "./HomePage";
import ComponentDetailPage from "./ComponentDetailPage";
import MyListAddedPage from "./MyListAddedPage.js"
const RoutesPages = () => (
  <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/MyList" element={<MyListAddedPage />} />
    <Route path="/Services" element={<ServicePage />} />
    <Route path="/Component/:name" element={<ComponentDetailPage/>} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default RoutesPages;
