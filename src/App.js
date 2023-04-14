import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { ReactRef } from "./pages/reactRef";
import { ReactContext } from "./pages/reactContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ref" element={<ReactRef />} />
        <Route exact path="/context" element={<ReactContext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
