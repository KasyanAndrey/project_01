import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./components/Container/Container.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";

const App = (props) => {
  return (
    <div>
      <Container>
        next 34
        <Header />
        <Navbar />
        <Wrapper>
          <Routes>
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}
            />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Wrapper>
      </Container>
    </div>
  );
};

export default App;
