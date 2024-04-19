import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { login} from './store/authSlice'

import { useDispatch, useSelector } from 'react-redux'

function Home() {

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
          <Navigate to="/image" />
          :
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <input type="email" name="email" placeholder='Enter your email' id="email" /><br /><br />
              <input type="password" name="password" placeholder='Enter your password' id="password" /><br /><br />
              <input type="submit" value="Login" />
            </form>
            <br />
            <div>
              Don't have an acoount? &nbsp;
              <Link style={{ textDecoration: 'none' }} to='/api/v1/users/register'>
                <b>Register</b>
              </Link>
            </div>
            {
              !loginStatus &&
              <>
                <div>Login failed</div>
              </>
            }
          </div>
      }
    </>
  )
}

export default Home