import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Contact from '../Contact/Contact';

const Home = () => {
    const{user} = useAuth()
    const [contacts, setContacts] = useState([])
    useEffect( ()=>{
        fetch(`https://powerful-scrubland-90023.herokuapp.com/contacts/${user.email}`)
        .then(res=>res.json())
        .then(data=> setContacts(data))
    })
    return (
        <div className='container'>
        
                {
                contacts.length == 0 ?
            <p className='text-danger fs-3'>No User Found</p>
            :
            <h1>Our Contacts</h1>
                }
                {
                    contacts.length == 0 &&
                    <p className='fs-4'>Welcome To Contact Manager Application.
                    <br /> Here you can add your favourite contacts.you can update your contact <br /> number also you can delete them</p>
                }
                {
                    contacts.length == 0 &&
                    <Link to='/contacts/add'>
                        <button className='btn btn-outline-primary'>Add Contact</button>
                    </Link>
                }
        
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