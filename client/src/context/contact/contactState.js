import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './ContactContext';
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
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // update contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // filter contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    // clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
