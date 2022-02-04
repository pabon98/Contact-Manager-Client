import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';

const Home = () => {
    const [contacts, setContacts] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/contacts')
        .then(res=>res.json())
        .then(data=> setContacts(data))
    })
    return (
        <div className='container'>
        <h1>Our Contacts</h1>
        <div className="row gy-3 my-2">
            {
               contacts.map((contact) => (
                <div className="col-md-4">
                  <Contact key={contact._id} contact={contact}></Contact>
                </div>
              ))}
            
        </div>
    </div>
    );
};

export default Home;