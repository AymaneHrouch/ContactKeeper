import React from 'react';
import Contacts from './../contacts/Contacts';

const Home = () => {
    console.log('hi from home!!!');
    return (
        <div className='grid-2'>
            <div>
                {/* contact form */}
            </div>
            <div>
                <Contacts />
            </div>
        </div>
    );
};

export default Home;
