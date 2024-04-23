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
    <div>
      {
        status ?
          <>
          <Navigate to="/image" />
          </>
          :
          <>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>

              <input type="text" name='username' placeholder='Enter Username' /><br /><br />

              <input type="text" name='fullName' placeholder='Full Name' /><br /><br />

              <input type="text" name='email' placeholder='Enter Email' /><br /><br />

              <input type="password" name='password' placeholder='Enter Password' /><br /><br />

              <label>Upload profile photo: </label>
              <input type="file" name="image" placeholder='Upload Files' id="" /><br /><br />

              <button type="submit">Register</button>

            </form>
            <div>
              Already have an acoount? &nbsp;
              <Link style={{ textDecoration: 'none' }} to='/'>
                <b>Login</b>
              </Link>
            </div>
          </>
      }
    </div>
  );
}

export default Register;
