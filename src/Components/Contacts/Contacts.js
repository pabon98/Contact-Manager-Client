import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Contacts.css'

const Contacts = () => {
  const{user} = useAuth()
    const [contacts, setContacts] = useState([])
    useEffect( ()=>{
        fetch(`http://localhost:5000/contacts/${user.email}`)
        .then(res=> res.json()
        .then(data=> setContacts(data)))
    },[])
    //Deleting an contact
    const handleDeleteContact =(id)=>{
        const proceed = window.confirm('Are you sure you want to Delete?')
        if(proceed){
         const url =`http://localhost:5000/contacts/${id}`
         fetch(url, {
             method:'DELETE'
         })
         .then(res=> res.json())
         .then(data=>{
             if(data.deletedCount>0){
                 alert('Deleted Successfully')
                 const remainingContacts = contacts.filter(contact=> contact._id !== id)
                 setContacts(remainingContacts)
             }
         })
        }
     }
    return (
        <div>
      <h1>Manage Contacts</h1>
      {contacts.map((contact) => (
        <li key={contact._id}>
          Name: {contact.name} ; Number: {contact.number};
          <br />
          <Link to={`/contacts/update/${contact._id}`}>
          <button className="btn btn-warning me-2">Update</button>
          </Link>
          <button
            onClick={() => handleDeleteContact(contact._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      ))}
      <br />
    </div>
    );
};

export default Contacts;