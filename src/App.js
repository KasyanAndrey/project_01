import React from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";


const App = () => {
  return (
    <div className="app-wrapper">
      next 19
      <Header />
      <Navbar />
      <section className="app-wrapper-content">
        <Dialogs />
      </section>
      {/* <Profile /> */}
    </div>
  );
};

export default App;
