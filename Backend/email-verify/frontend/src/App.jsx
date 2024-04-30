import { useState } from "react"

function App() {

  const [enterOtp, setEnterOtp] = useState(false)
  const [otp, setOtp] = useState(undefined)
  const [userOtp, setUserOtp] = useState(undefined)
  const [verify, setVerify] = useState(false)
  const [notVerify, setNotVerify] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    if (otp) {
      if (otp == userOtp) {
        setVerify(true)
        setTimeout(() => {
          setVerify(false)
        }, 3000)
      }
      else {
        setNotVerify(true)
        setTimeout(() => {
          setNotVerify(false)
        }, 3000)
      }
    }
    else {
      let code = Math.random().toFixed(4) * 10000
      console.log("Generated otp: ", code);
      formData.append("verificationCode", code)
      setOtp(code)
    }

    try {
      const response = await fetch("http://localhost:5000/sendemail", {
        method: "POST",
        body: formData
      })
      console.log("response: ", response);

      if (response.ok) {
        setEnterOtp(true)
      }
    }
    catch (error) {
      console.log("error: ", error);
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input type="email" name="email" id="email" placeholder='Enter email' /><br /><br />
        {/* <input type="text" name="phonesms" id="phonesms" placeholder='Enter phone number' /><br /><br />
        <input type="text" name="whatsapp" id="whatsapp" placeholder='Enter whatsapp number' /><br /><br /> */}


        {
          enterOtp && <input onChange={(e) => setUserOtp(e.target.value)} type="text" name="otp" id="otp" value={userOtp} placeholder='Enter OTP' />
        }

        {
          verify && <div>Verification successfull</div>
        }

        {
          notVerify && <div>Verification failed</div>
        }

        <button type='submit'>{enterOtp ? "Verify otp" : "Generate Otp"}</button><br /><br />
      </form>

    </>
  )
}

export default App
