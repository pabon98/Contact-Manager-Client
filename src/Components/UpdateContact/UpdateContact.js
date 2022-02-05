import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateContact = () => {

    const[contact, setContact] = useState({})
    const{id}= useParams()
    useEffect( ()=>{
        fetch(`https://powerful-scrubland-90023.herokuapp.com/contacts/${id}`)
        .then(res=>res.json())
        .then(data=>setContact(data));
    },[id])
//    const Contact =  contact.filter(singleContact=> singleContact._id == id)
//    console.log(Contact);
    //Update Contact
    const handleNameChange = (e)=>{
        const updatedName = e.target.value
        const updatedUser = {name: updatedName, number: contact.number}
        setContact(updatedUser)
     //    setUser({...user, name: updatedName })
     }

     const handleNumberChange = (e)=>{
         const updatedNumber = e.target.value
         const updatedUserNumber = {name: contact.name, number: updatedNumber }
         setContact(updatedUserNumber)
     }
     const handleUpdateUser = (e)=>{
        const url =`https://powerful-scrubland-90023.herokuapp.com/contacts/${id}`
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res=> res.json())
        .then(data=>{
           if(data.modifiedCount>0){
               alert('Updated Contact Successfully')
               setContact({})
           }
        })
     e.preventDefault()
    }

    return (
        <div>
        <h2>Update {contact.name}: {contact.number}</h2>
        <br />
        <p><small>{id}</small></p>
        <form onSubmit={handleUpdateUser}>
            <input type="text" onChange={handleNameChange} value={contact.name 
                || ''} name="" id="" />
            <input type="number" onChange={handleNumberChange} value={contact.number || ''} name="" id="" />
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
    );
};

export default UpdateContact;