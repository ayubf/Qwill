import React from "react";
import { render } from "react-dom";
import './static/css/index.css';
import './static/css/bootstrap.min.css';

import TopBar from './components/children/TopBar';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SettingsPage from "./SettingsPage";
import PostPage from "./PostPage";
import RegisterPage from "./RegisterPage";
import WikiPage from "./WikiPage";
import NewPost from './NewPost';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  
    return (
    <div>
      <TopBar />
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/settings' element={<SettingsPage/>}></Route>
          <Route path='/post' element={<PostPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route> 
          <Route path='/wiki' element={<WikiPage />}></Route>
          <Route path="/newpost" element={<NewPost />}></Route>
        </Routes>
      </Router>
    </div>

    )
    
}



const appDiv = document.getElementById("app");
render(<App />, appDiv);
