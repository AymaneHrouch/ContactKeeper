import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered, loading } = contactContext;

    useEffect(() => {
        contactContext.getContacts();
        // eslint-disable-next-line
    }, [contacts]);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
    }

    const compareFn = (a, b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    };

    console.log('filtered', filtered);
    console.log('contacts', contacts);
    let visible_contacts = filtered ? filtered : contacts;

    return (
        <Fragment>
            {visible_contacts !== null && !loading ? (
                <TransitionGroup>
                    {visible_contacts.sort(compareFn).map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            ) : (
                <Spinner />
            )}
        </Fragment>
    );
};

export default Contacts;
