import React, { useState } from "react";
import Nav from "../Nav";
import Contact from "../Contact";
import About from "../About";
import Footer from "../Footer";
import Project from '../Projects'

export default function PortfolioContainer() {
  const [currentPage, setcurrentCategory] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
  };

  const handlePageChange = (page) => setcurrentCategory(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
