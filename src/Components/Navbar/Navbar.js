import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const{user, logOut} = useAuth()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#Navbar">Contact Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mb-2 mb-lg-0 navigation">
        <li class="nav-item">
          <Link style={{textDecoration:'none', marginRight:'10px', color:'ButtonFace'}} to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link style={{textDecoration:'none',marginRight:'10px',color:'ButtonFace'}} to='/contacts'>Contacts</Link>
        </li>
        <li class="nav-item">
          <Link style={{textDecoration:'none',marginRight:'10px',color:'ButtonFace'}} to='/contacts/add'>AddContacts</Link>
        </li>
        <li class="nav-item">
         {
           user.email?
           <li></li>:
           <Link style={{textDecoration:'none',marginRight:'10px',color:'ButtonFace'}} to='/registration'>SignUp</Link>
         }
        </li>
      </ul>
    {
      user.email?
      <span class="navbar-text mx-5">
        Sign in as: &nbsp;
       {user?.displayName}
    </span>:
      <span class="navbar-text mx-5">
    </span>
    }
    </div>
   {
     user.email?
     <button onClick={logOut} className='btn btn-danger'> LogOut</button>
     :
   <Link to='/login'>
       <button className='btn btn-success'> Login</button>
   </Link>
   }
  </div>
</nav>
        </div>
    );
};

export default Navbar;