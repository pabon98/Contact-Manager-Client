import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
const Contact = ({contact}) => {
    const{name, number} = contact
    return (
        <div className='ms-4'>
            <div class="card" style={{"width": "18rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Number {number}</p>
    <Link to={`/contacts/update/${contact._id}`}>
        <button className='btn btn-warning'>Update</button>
    </Link>
  </div>
</div>
<br /> <br />
        </div>
    );
};

export default Contact;