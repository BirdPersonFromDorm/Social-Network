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
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuth, logout} from "./redux/authReducer";
import {compose} from "redux";
import {withRoute} from "./hoc/withRoutre";
import {initializedApp} from "./redux/appReducer";
import PreLoader from "./components/common/PreLoader/PreLoader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized){
      return <PreLoader/>
    }
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
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializedApp})
)(App);