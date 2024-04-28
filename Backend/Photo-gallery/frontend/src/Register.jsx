import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/authSlice.js';

function Register() {

  const dispatch = useDispatch()
  const status = useSelector((s) => s.auth.status)
  const userId = useSelector((s) => s.auth.userData.userId)
  const userProfilePhoto = useSelector((s) => s.auth.userData.userProfilePhoto)
  const fullName = useSelector((s) => s.auth.userData.fullName)
  console.log("status and userid in login ", status, userId, userProfilePhoto, fullName);


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("even.target: ", event.target);

    // Fetch the registration endpoint with form data
    const formData = new FormData(event.target);
    console.log("formData: ", event.target);
    try {
      const response = await fetch('http://localhost:5000/api/v1/users/register', {
        method: 'POST',
        body: formData
      });

      console.log("response: ", response);

      if (response.ok) {
        // Registration successful, handle response
        const data = await response.json();
        console.log('Registration successful: data', data);
        // Optionally, you can redirect the user to another page or show a success message here
        dispatch(login({ userId: data.data._id, userProfilePhoto: data.data.image, fullName: data.data.fullName }))
      } else {
        // Handle errors
        console.error('Registration failed:', response.statusText);
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
      {
        status ?
          <>
            <Navigate to="/home" />
          </>
          :
          <div className='bg-white rounded-md border-2 border-solid border-slate-300 px-4 py-6'>
            <h1 className='text-2xl sm:text-3xl mb-6'>Photo Gallery</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>

              <input className='border-2 solid border-gray-300 rounded-sm w-64 sm:w-72 bg-gray-100 px-1 py-1 focus:outline-blue-500 mb-3' type="text" name='username' placeholder='Enter Username' /><br />

              <input className='border-2 solid border-gray-300 rounded-sm w-64 sm:w-72 bg-gray-100 px-1 py-1 focus:outline-blue-500 mb-3' type="text" name='fullName' placeholder='Full Name' /><br />

              <input className='border-2 solid border-gray-300 rounded-sm w-64 sm:w-72 bg-gray-100 px-1 py-1 focus:outline-blue-500 mb-3' type="text" name='email' placeholder='Enter Email' /><br />

              <input className='border-2 solid border-gray-300 rounded-sm w-64 sm:w-72 bg-gray-100 px-1 py-1 focus:outline-blue-500 mb-3' type="password" name='password' placeholder='Enter Password' /><br />

              <label>Upload profile photo: </label><br />
              <input className='w-64 sm:w-72' type="file" name="image" placeholder='Upload Files' id="" /><br /><br />

              <button className='rounded-sm text-white w-64 sm:w-72 bg-blue-500 px-1 py-1 hover:cursor-pointer' type="submit">Register</button>

            </form>
            <div className='mt-3'>
              Already have an acoount? &nbsp;
              <Link style={{ textDecoration: 'none' }} to='/'>
                <b className='text-blue-400'>Login</b>
              </Link>
            </div>
          </div>
      }
    </div>
  );
}

export default Register;
