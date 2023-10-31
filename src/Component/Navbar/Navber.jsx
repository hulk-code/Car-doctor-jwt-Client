
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navber = () => {
  const {user , LogOut}=useContext(AuthContext)
  console.log(user);
  const hanadleLogOut=()=>{
    LogOut()
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.error(error);
    })
  }
    const navLink=<>
    <li><NavLink to='/'>HOME</NavLink></li>
    <li><NavLink to='/about'>ABOUT</NavLink></li>
    <li><NavLink to='/services'>SERVICES</NavLink></li>
    <li><NavLink to='/blog'>BLOG</NavLink></li>
    <li><NavLink to='/contact'>CONTACT</NavLink></li>
    {
      user?.email ? <>
       <li><NavLink to='/booking'>Booking</NavLink></li>
     <li> <button className="btn btn-ghost" onClick={hanadleLogOut} >Log Out</button></li>
      </>
      :
      <Link to='/login'>
  <button className="btn btn-ghost">Login</button>
  </Link>
    }
    <div className="flex items-center lg:mr-2">
    {
      user?.displayName
     }
       {
        user && <div className="avatar">
        <div className="w-10 lg:mr-3 lg:ml-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  src={user?.photoURL} alt="" />
        </div>
      </div>
       }
    </div>
     </>
     
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <img src="/src/assets/logo.svg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        <div className="navbar-end">
    <button className="btn btn-ghost">Appoinment</button>
       
        </div>
      </div>
    );
};

export default Navber;