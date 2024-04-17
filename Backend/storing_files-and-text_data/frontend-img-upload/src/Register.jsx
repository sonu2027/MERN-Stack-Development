import React from 'react'

function Register() {

  return (
    <div>
      <form action='http://localhost:5000/api/v1/users/register' method='POST' encType='multipart/form-data'>

        <input type="file" name="image" placeholder='Upload Files' id="" /><br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default Register