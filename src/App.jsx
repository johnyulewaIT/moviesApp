// Importing the useState hook from React
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Importing the Header component
import Header from "./components/header.jsx";

// Importing the Footer component
import Footer from "./components/footer.jsx";

// Importing the Home page component
import Home from "./pages/home.jsx";
import Favorite from "./pages/favorites.jsx";

// The main App component
function App() {
  return (
    // A div that sets background color, text color, and height
    <div className="bg-black h-auto text-white">
      <Header />
      {/* Flex container that stacks children vertically */}
      <div className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

// Exporting the App component so it can be used in index.js
export default App;
