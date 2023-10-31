
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";





const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState("")
  const location=useLocation();
    const nevigate=useNavigate();
 


  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const displayName=form.get('displayName')
    const photoURL=form.get('photoURL')
    const password = form.get('password')
    const email = form.get('email')
    console.log(displayName ,email,password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add at least one uppercase.');
      return
    }
    else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Please add a special character.');
      return
    }
    else if (password.length < 6) {
      setError('Password must be 6 characters long');
      return
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        
        
        updateUserProfile(displayName ,photoURL)
        .then( () =>{
          console.log('profilee updte')
          nevigate(location ?.state ?location.state : '/')
        }
        
        )
        .catch(error =>{
          console.error(error);
        })

        if (!result.user.emailVerified) {
          setSuccess('User login successful.');

          Swal.fire({
            
            icon: 'success',
            title: 'User login successful',
            showConfirmButton: false,
            timer: 1500
          })
         
         
          
          setError('');
        }
           
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div>
     
      <div className="hero min-h-screen bg-base-200" data-aos="fade-up">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="displayName" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  <p className='text-red-500'> {error}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className=" m-auto font-medium p-3">have an account?<Link to='/login' className="text-red-800">Login</Link></p>
            
            <p className='text-green-500 mx-auto'>{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;