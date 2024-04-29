import React, { useEffect, useState } from 'react'
import { login } from './store/authSlice';
import { TfiArrowLeft } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function Change() {

    const dispatch = useDispatch();
    const status = useSelector((s) => s.auth.status)
    const userId = useSelector((s) => s.auth.userData.userId)
    const userProfilePhoto = useSelector((s) => s.auth.userData.userProfilePhoto)
    const fullName = useSelector((s) => s.auth.userData.fullName)
    const email = useSelector((s) => s.auth.userData.email)
    const username = useSelector((s) => s.auth.userData.username)
    const password = useSelector((s) => s.auth.userData.password)
    console.log("status and userid in change ", status, userId, userProfilePhoto, fullName, username, email, password);

    const { change } = useParams()
    const [flag, setFlag] = useState("")

    const [inputValue, setInputValue] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const [changes, setChanges] = useState(false)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (change == "name") {
            setFlag("Name")
            setInputValue(fullName)
        }
        else if (change == "username") {
            setFlag("Username")
            setInputValue(username)
        }
        else if (change == "email") {
            setFlag("Email")
            setInputValue(email)
        }
        else if (change == "password") {
            setFlag("Password")
            setInputValue(password)
        }
        else {
            setFlag("profilepicture")
        }
    }, [])

    const handleSubmit = async (event) => {
        setSaving(true)
        event.preventDefault();
        const formData = new FormData(event.target)
        formData.append('userId', userId)
        console.log("event.target in change: ", event.target);
        try {
            const response = await fetch('http://localhost:5000/image', {
                method: 'PUT',
                body: formData
            });
            console.log("response: ", response);

            if (response.ok) {
                setSaving(false)
                setChanges(true)
                setTimeout(() => {
                    setChanges(false)
                }, 3000)
                // Registration successful, handle response
                const data = await response.json();
                console.log('Updation successful: data', data);
                // Optionally, you can redirect the user to another page or show a success message here
                // userId: data.data._id, userProfilePhoto: data.data.image, 
                if (change == "name") {
                    dispatch(login({ userId: userId, userProfilePhoto: userProfilePhoto, fullName: data.data, email: email, username: username, password: password }))
                }
                else if (change == "username") {
                    dispatch(login({ userId: userId, userProfilePhoto: userProfilePhoto, fullName: fullName, email: email, username: data.data, password: password }))
                }
                else if (change == "email") {
                    dispatch(login({ userId: userId, userProfilePhoto: userProfilePhoto, fullName: fullName, email: data.data, username: username, password: password }))
                }
                else if (change == "password") {
                    dispatch(login({ userId: userId, userProfilePhoto: userProfilePhoto, fullName: fullName, email: email, username: username, password: data.data }))
                }
                else {
                    dispatch(login({ userId: userId, userProfilePhoto: data.data, fullName: fullName, email: email, username: username, password: password }))
                }
            } else {
                // Handle errors
                console.error('Updation failed:', response.statusText);
                // Optionally, you can show an error message to the user
            }
        }
        catch (error) {
            console.log("error in change while handlesubmit: ", error);
        }
    }

    return (
        <div className=' bg-slate-800 h-screen'>

            <Link to="/home/setting">
                <TfiArrowLeft className='text-white font-medium text-3xl fixed top-3 left-3' />
            </Link>

            <div className='flex flex-col justify-center items-center'>
                <img onClick={() => setClickedUser(!clickedUser)} className='h-28 w-28 hover:cursor-pointer rounded-full mt-20' src={userProfilePhoto} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white mt-2'>{fullName}</div>
                    <div className='text-gray-300'>{username} . Photo Gallery</div>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center mt-4'>

                <div className='pt-4 pb-2 text-white text-2xl font-medium'>{flag}</div>
                {
                    change == "password" ?
                        <form className='flex flex-col justify-center items-center w-screen' encType='multipart/form-data' onSubmit={handleSubmit}>

                            <input className='w-10/12 mb-4 rounded-md text-white bg-slate-700 caret-white focus:outline-none p-2 sm:w-9/12 md:w-6/12' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} type="password" name="password" id="newPassword" placeholder='Enter new password' />

                            <input className='w-10/12 mb-4 rounded-md text-white bg-slate-700 caret-white focus:outline-none p-2 sm:w-9/12 md:w-6/12' onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} type="password" name="password" id="confirmPassword" placeholder='Confirm Password' />

                            {
                                changes &&
                                <div className='text-green-600 text-xl'>
                                    {flag} changed successfully
                                </div>
                            }

                            <div className='flex justify-center items-center'>
                                <button className='text-white bg-blue-500 rounded-2xl absolute bottom-4 w-10/12 sm:w-9/12 md:w-6/12 py-2' type="submit">{saving ? "Saving..." : "Save"}</button>
                            </div>

                        </form>
                        :
                        <>
                            {
                                change == "profilepicture" ?
                                    <form className='flex flex-col justify-center items-center w-screen' encType='multipart/form-data' onSubmit={handleSubmit}>
                                        <label className='text-white rounded-md bg-slate-700 px-3 py-2 hover:cursor-pointer' htmlFor={flag.toLowerCase()}>Update Profile Picture</label><br />

                                        <input className='hidden' type="file" name="image" id={flag.toLowerCase()} />

                                        {
                                            changes &&
                                            <div className='text-green-600 text-xl'>
                                                {flag} changed successfully
                                            </div>
                                        }

                                        <div className='flex justify-center items-center'>
                                            <button className='text-white bg-blue-500 rounded-2xl absolute bottom-4 w-10/12 sm:w-9/12 md:w-6/12 py-2' type="submit">{saving ? "Saving..." : "Save"}</button>
                                        </div>
                                    </form>
                                    :
                                    <form className='flex flex-col justify-center items-center w-screen' encType='multipart/form-data' onSubmit={handleSubmit}>
                                        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='w-10/12 mb-4 rounded-md text-white bg-slate-700 caret-white focus:outline-none p-2 sm:w-9/12 md:w-6/12' type="text" name={flag == "Name" ? "fullName" : flag.toLowerCase()} id={flag == "Name" ? "fullName" : flag.toLowerCase()} placeholder={`Enter new ${flag.toLowerCase()}`} />

                                        {
                                            changes &&
                                            <div className='text-green-600 text-xl'>
                                                {flag} changed successfully
                                            </div>
                                        }

                                        <div className='flex justify-center items-center'>
                                            <button className='text-white bg-blue-500 rounded-2xl absolute bottom-4 w-10/12 sm:w-9/12 md:w-6/12 py-2' type="submit">{saving ? "Saving..." : "Save"}</button>
                                        </div>

                                    </form>
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default Change