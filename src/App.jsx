/** @format */

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Google } from "./Components/Google";
import { Routes, Route } from "react-router-dom";
import { SearchResults } from "./Components/SearchResults";
import { PageDetail } from "./Components/PageDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Google />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/page/:id" element={<PageDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
