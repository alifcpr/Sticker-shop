import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
