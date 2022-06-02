import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import './App.css';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <div className='container'>
                                <Alert />
                                <Routes>
                                    <Route exact path='/' element={<Home />}></Route>
                                    <Route
                                        exact
                                        path='/about'
                                        element={<About />}
                                    ></Route>
                                    <Route
                                        exact
                                        path='/register'
                                        element={<Register />}
                                    ></Route>
                                    <Route
                                        exact
                                        path='/login'
                                        element={<Login />}
                                    ></Route>
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </ContactState>
        </AuthState>
    );
};

export default App;
