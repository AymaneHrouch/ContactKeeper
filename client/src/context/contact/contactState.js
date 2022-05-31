import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'james bond',
                email: 'james@gmail.com',
                phone: '555-666-999',
                type: 'professional',
            },
            {
                id: 2,
                name: 'james two',
                email: 'jamestwo@gmail.com',
                phone: '555-666-999',
                type: 'personal',
            },
            {
                id: 3,
                name: 'jamesthree bond',
                email: 'jamesthree@gmail.com',
                phone: '555-666-999',
                type: 'personal',
            },
            {
                id: 4,
                name: 'jamesfour bond',
                email: 'jamesfour@gmail.com',
                phone: '555-666-999',
                type: 'professional',
            },
        ],
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add contact

    // Delete contact

    // Set current contact

    // clear current contact

    // update contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider value={{ contacts: state.contacts }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
