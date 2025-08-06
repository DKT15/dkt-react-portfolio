import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Fixing the navbar
// Outlet is a placeholder for all the other child routes. They are in the App.jsx file. It allows rendering of child components when the route path matches a child route.
// Without it, nested components wouldn't render within the parent route element.
export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
