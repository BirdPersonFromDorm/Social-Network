import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/News";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app_wrapper'>
          <Header/>
          <Nav/>
          <div className='app_wrapper_content'>
            <Routes>
              <Route path="/profile" element={<Profile store={props.store}/>}/>
              <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/news" element={<News/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;