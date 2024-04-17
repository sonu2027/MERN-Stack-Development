import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [loginStatus, setLoginStatus]=useState(true)

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
        // Optionally, you can redirect the user to another page or show a success message here
      } else {
        setLoginStatus(false)
        setTimeout(()=>{
          setLoginStatus(true)
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
  )
}

export default Home