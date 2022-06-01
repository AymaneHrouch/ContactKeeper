import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import './App.css';

const App = () => {
    return (
        <ContactState>
            <Router>
                <Fragment>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route exact path='/' element={<Home />}></Route>
                            <Route exact path='/about' element={<About />}></Route>
                        </Routes>
                    </div>
                </Fragment>
            </Router>
        </ContactState>
    );
};

export default App;
