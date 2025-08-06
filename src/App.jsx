import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DevelopmentProjects from "./pages/DevelopmentProjects";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";

//Gets code from the components and pages.
// Fixing the Navbar with a layour route.
// Index is saying I want you to put the element (home component) inside the outlet of the parent route when it matches.
// When the path is "/" first render the layout component and then inside the outlet stick in the Homepage.
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route
              path="developmentprojects"
              element={<DevelopmentProjects />}
            />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
