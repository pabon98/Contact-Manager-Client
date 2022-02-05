import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';

const AddContact = () => {
    const{user} = useAuth()
    const nameRef = useRef()
    const numberRef = useRef()

    const handleAddContact = (e)=>{
        const name = nameRef.current.value
        const number = parseInt(numberRef.current.value)
        const RegisteredUser = user.email

        const newContact ={name,number,RegisteredUser}
        fetch('http://localhost:5000/contacts',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Contact added successfully')
                e.target.reset()
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <h1>Please Add a Contact</h1>
            <form onSubmit={handleAddContact}>
             <input className='me-2' type="text" ref={nameRef} placeholder='Contact Name'  />
             <input className='me-2' type="number" ref={numberRef} placeholder='Contact Number' />
             <button className='btn btn-success my-2 px-3'>Submit</button>
            </form>
        </div>
    );
};

export default AddContact;