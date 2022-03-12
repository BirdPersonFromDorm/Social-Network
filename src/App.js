import React from "react";
import './App.css';
import Nav from "./components/Nav/Nav";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderConatiner";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app_wrapper'>
          <HeaderContainer/>
          <Nav/>
          <div className='app_wrapper_content'>
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer/>}/>
              <Route path="/dialogs/*" element={<DialogsContainer/>}/>
              <Route path="/users" element={<UsersContainer/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/music" element={<Music/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;