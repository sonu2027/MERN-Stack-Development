import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username, setUsername]=useState("")
    const [password, setPassword] = useState("")
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <div>Login</div>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' />
        <br /><br />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="" />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login