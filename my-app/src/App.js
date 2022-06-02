import React from "react";
import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";

function App(props) {
    // console.log(props)
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <Routes>
                    {/*<Route path="/main" element= {<Main/>}/>*/}
                    <Route path="/home" element={<Home userName={props.state.userName} userMessage={props.state.userMessage}/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
