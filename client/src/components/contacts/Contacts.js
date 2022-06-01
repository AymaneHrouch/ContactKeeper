import React, { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
    const contactConext = useContext(contactContext);
    const { contacts, filtered } = contactConext;

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>;
    }

    let visible_contacts = filtered ? filtered : contacts;

    return (
        <Fragment>
            <TransitionGroup>
                {visible_contacts.map(contact => (
                    <CSSTransition key={contact.id} timeout={500} classNames="item">
                        <ContactItem contact={contact} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;
