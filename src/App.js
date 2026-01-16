import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Headers from "./Component/Header"
import Home from "./Component/Home";
import AllDiploma from "./Component/AllDiploma";
import DiplomaDetail from "./Component/DiplomaDetail";
import ModuleDetail from "./Component/Module";
import Registration from "./Component/Registration";
import FAQ from "./Component/FAQ";
import NoMatchRoute from "./Component/NoMatchRoute";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <>
      <Headers/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/diplomas" element={<AllDiploma />}>
          <Route path=":diplomaId" element={<DiplomaDetail />}>
            <Route path=":moduleId" element={<ModuleDetail />} />
          </Route>
        </Route>

        <Route path="/registration" element={<Registration />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <Footer/>
    </>
  );
}
