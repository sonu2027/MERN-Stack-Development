import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { login } from './store/authSlice'

import { useDispatch, useSelector } from 'react-redux'

function LoginSignin() {

  const [loginStatus, setLoginStatus] = useState(false)
  // const [loggedIn, setLoggedIn] = useState(false)

  const dispatch = useDispatch();
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
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        body: formData
      });

      console.log("response: ", response);

      if (response.ok) {
        // Registration successful, handle response
        const data = await response.json();

        console.log('Login successful: data', data);
        console.log('data.data: ', data.data);
        console.log('data.data[0]._id: ', data.data[0]._id);
        dispatch(login({ userId: data.data[0]._id, userProfilePhoto: data.data[0].image, fullName: data.data[0].fullName }))
        console.log("image: ", data.data[0].image);
        console.log("status and userid in login ", status, userId, userProfilePhoto);
        // setLoggedIn(true)
        // Optionally, you can redirect the user to another page or show a success message here
      } else {
        setLoginStatus(true)
        setTimeout(() => {
          setLoginStatus(false)
        }, 3000)
        // Handle errors
        console.error('Login Failed:', response.statusText);
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
      // Optionally, you can show an error message to the user
    }
  };



  return (
    <>
      {
        status ?
          <Navigate to="/home" />
          :
          <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <div className='bg-white rounded-md border-2 border-solid border-slate-300 px-4 py-6'>
              <h1 className='text-2xl sm:text-3xl mb-6'>Photo Gallery</h1>
              <form onSubmit={handleSubmit} encType='multipart/form-data'>

                <input className='border-2 solid border-gray-300 rounded-sm w-64 sm:w-72 bg-gray-100 px-1 py-1 focus:outline-blue-500 mb-3' type="email" name="email" placeholder='Email' id="email" /><br />

                <input className='border-2 solid border-gray-300 rounded-sm w-64 sm:w-72 bg-gray-100 px-1 py-1 focus:outline-blue-500' type="password" name="password" placeholder='Password' id="password" /><br /><br />

                {
                  loginStatus &&
                  <>
                    <div className='mb-4 text-red-500 font-medium'>Login failed</div>
                  </>
                }

                <input className='rounded-sm text-white w-64 sm:w-72 bg-blue-500 px-1 py-1 hover:cursor-pointer' type="submit" value="Login" />

              </form>
              <br />

              <div>
                Don't have an account? &nbsp;
                <Link style={{ textDecoration: 'none' }} to='/api/v1/users/register'>
                  <b className='text-blue-400'>Register</b>
                </Link>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default LoginSignin