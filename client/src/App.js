import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import './App.css';
import Login from './components/auth/Login';

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <Router>
                    <Fragment>
                        <Navbar />
                        <div className='container'>
                            <Routes>
                                <Route exact path='/' element={<Home />}></Route>
                                <Route exact path='/about' element={<About />}></Route>
                                <Route
                                    exact
                                    path='/register'
                                    element={<Register />}
                                ></Route>
                                <Route exact path='/login' element={<Login />}></Route>
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </ContactState>
        </AuthState>
    );
};

export default App;
