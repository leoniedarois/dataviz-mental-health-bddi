import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Home"
import Hygiene from "./Hygiene"
import Mood from "./Mood"
import '../Router.scss'

const Router = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/hygiene" element={<Hygiene />} />
      </Routes>
    </div>
  )
}

export default Router
