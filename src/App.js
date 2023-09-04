import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, json } from "react-router-dom";
import First from "./first";
import Second from "./second";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/second" element={<Second />}></Route>
      </Routes>
    </Router>
  )
}
export default App;
//How To Smooth Scroll in React - Smooth Scrolling Tutorial