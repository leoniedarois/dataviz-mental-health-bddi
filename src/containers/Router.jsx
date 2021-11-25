import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Home"
import Hygiene from "./Hygiene"
import Mood from "./Mood"
import '../Router.scss'
import Confess from "./Confess"
import Psy from "./Psy";
import Sweet from "./Sweet";

const Router = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/hygiene" element={<Hygiene />} />
        <Route path="/confess" element={<Confess />} />
        <Route path="/psy" element={<Psy />} />
        <Route path="/sweet" element={<Sweet />} />
      </Routes>
    </div>
  )
}

export default Router
