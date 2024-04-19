// import React from 'react'

// function Register() {

//   return (
//     <div>
//       <form action='http://localhost:5000/api/v1/users/register' method='POST' encType='multipart/form-data'>

//         <input type="text" name='username' placeholder='Enter Username' /><br /><br />

//         <input type="text" name='fullName' placeholder='Full Name' /><br /><br />

//         <input type="text" name='email' placeholder='Enter Email' /><br /><br />

//         <input type="text" name='password' placeholder='Enter Password' /><br /><br />

//         <input type="file" name="image" placeholder='Upload Files' id="" /><br /><br />

//         <button type="submit">Register</button>

//       </form>
//     </div>
//   )
// }

// export default Register







import React from 'react';

function Register() {

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("even.target: ",event.target);
    
    // Fetch the registration endpoint with form data
    const formData = new FormData(event.target);
    console.log("formData: ",event.target);
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
      <form onSubmit={handleSubmit} encType='multipart/form-data'>

        <input type="text" name='username' placeholder='Enter Username' /><br /><br />

        <input type="text" name='fullName' placeholder='Full Name' /><br /><br />

        <input type="text" name='email' placeholder='Enter Email' /><br /><br />

        <input type="password" name='password' placeholder='Enter Password' /><br /><br />

        <input type="file" name="image" placeholder='Upload Files' id="" /><br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;
