import React from "react";
import Header from "./Component/Header/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
        <header>
            <Header />
        </header>
        <Outlet />
    </div>
  );
}

export default App;
