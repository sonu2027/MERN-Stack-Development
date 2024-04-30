import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from './store/authSlice'
import Login from './Login.jsx'

function VerifyEmail({ email, formDatas }) {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const status = useSelector((s) => s.auth.status)
    const userId = useSelector((s) => s.auth.userData.userId)
    const userProfilePhoto = useSelector((s) => s.auth.userData.userProfilePhoto)
    const fullName = useSelector((s) => s.auth.userData.fullName)
    const emails = useSelector((s) => s.auth.userData.email)
    const username = useSelector((s) => s.auth.userData.username)
    const password = useSelector((s) => s.auth.userData.password)
    console.log("status and userid in change ", status, userId, userProfilePhoto, fullName, username, emails, password);

    const [time, setTime] = useState(60)
    const [inputOtp, setInputOtp] = useState("")
    const [realOtp, setRealOtp] = useState("1")
    const [otpSent, setOtpSent] = useState(false)
    const [gotoLogin, setGotoLogin] = useState(false)
    const [userExist, setuserExist] = useState(false)

    async function sendOtp() {
        const otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        console.log("Generated otp: ", otp);
        const formData = new FormData()
        formData.append("verificationCode", otp)
        formData.append("email", email)
        setRealOtp(otp)

        try {
            const response = await fetch("http://localhost:5000/sendemail", {
                method: "POST",
                body: formData
            })
            console.log("response: ", response);

            if (response.ok) {
                setOtpSent(true)
            }
        }
        catch (error) {
            console.log("error: ", error);
        }
    }

    useEffect(() => {
        sendOtp()
        let timerId = setInterval(() => {
            setTime((s) => s - 1);
        }, 1000);

        setTimeout(() => {
            setGotoLogin(true)
            clearInterval(timerId);
        }, 60000);
    }, [])

    const registerUser = async () => {
        console.log("register started");
        try {
            const response = await fetch('http://localhost:5000/api/v1/users/register', {
                method: 'POST',
                body: formDatas
            });

            console.log("response: ", response);

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful: data', data);

                dispatch(login({ userId: data.data._id, userProfilePhoto: data.data.image, fullName: data.data.fullName, email: data.data.email, username: data.data.username, password: data.data.password }))
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            setuserExist(true)
            setTimeout(() => {
                setGotoLogin(true)
            }, 3000)
            console.error('Error occurred while registering:', error);
        }
    }

    useEffect(() => {
        console.log("running");
        if (realOtp == inputOtp) {
            registerUser()
        }
    }, [inputOtp])

    if (status) {
        navigate("/home")
    }


    return (
        <>
            {
                gotoLogin ?
                    <Login />
                    :
                    <div className='flex flex-col justify-start pt-28 items-center h-screen bg-slate-800'>

                        <div className='text-center text-white'>Enter verification code send to {email}</div>
                        <div className='flex justify-center items-center mt-4 gap-x-2 w-screen'>
                            <input className='w-8/12 rounded-md text-white bg-slate-700 caret-white focus:outline-none p-2 sm:w-7/12 md:w-5/12' onChange={(e) => setInputOtp(e.target.value)} type="text" name="otp" id="otp" placeholder='Enter otp' />
                            <div className='text-white'>{time}</div>
                        </div>
                        {
                            userExist && <div>User with {email} already exist</div>
                        }
                    </div>
            }
        </>
    )
}

export default VerifyEmail