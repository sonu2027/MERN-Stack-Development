import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { TfiArrowLeft } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Setting() {

    const dispatch = useDispatch();
    const status = useSelector((s) => s.auth.status)
    const userId = useSelector((s) => s.auth.userData.userId)
    const userProfilePhoto = useSelector((s) => s.auth.userData.userProfilePhoto)
    const fullName = useSelector((s) => s.auth.userData.fullName)
    const username = useSelector((s) => s.auth.userData.username)
    console.log("status and userid in settng ", status, userId, userProfilePhoto, fullName);

    const handleFileSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(event.target);
        formData.append('userId', userId);
        console.log("formData: ", event.target);
        // try {
        //     const response = await fetch('http://localhost:5000/image', {
        //         method: 'PUT',
        //         body: formData
        //     });
        //     console.log("Res for updating pp: ", response);
        //     if (response.ok) {
        //         setUpdatePPOption(false)
        //         // Registration successful, handle response
        //         const data = await response.json();
        //         console.log('Updation PP successful: data', data);
        //         // Optionally, you can redirect the user to another page or show a success message here
        //         // userId: data.data._id, userProfilePhoto: data.data.image, 
        //         dispatch(login({ userId: userId, userProfilePhoto: data.data, fullName: fullName }))
        //     } else {
        //         setPPuploadFailed(true)
        //         setTimeout(() => {
        //             setPPuploadFailed(false)
        //         }, 3000)
        //         // Handle errors
        //         console.error('Updation failed:', response.statusText);
        //         // Optionally, you can show an error message to the user
        //     }
        // }
        // catch (error) {
        //     console.log("error occured while updatiing pp: ", error);
        // }
    }

    return (
        <div className='flex flex-col justify-start items-center bg-slate-800 h-screen'>
            <Link to="/">
                <TfiArrowLeft className='text-white text-2xl fixed top-3 left-3' />
            </Link>
            <div className='flex flex-col justify-center items-center'>
                <img onClick={() => setClickedUser(!clickedUser)} className='h-28 w-28 hover:cursor-pointer rounded-full mt-20' src={userProfilePhoto} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white mt-2'>{fullName}</div>
                    <div className='text-gray-300'>{username} . Photo Gallery</div>
                </div>
            </div>
            <ul className='mt-10 p-1 w-11/12 sm:w-9/12 md:w-7/12 text-white rounded-md shadow-lg md:p-2 bg-slate-900'>

                <Link to="/home/setting/name">
                    <li className='px-4 py-1 flex justify-between items-center gap-x-2 hover:bg-gray-200 hover:rounded-md hover:text-black'>
                        <button>Name</button>
                        <IoIosArrowForward />
                    </li>
                </Link>

                <Link to="/home/setting/username">
                    <li className='px-4 py-1 flex justify-between items-center gap-x-2 hover:bg-gray-200 hover:rounded-md hover:text-black'>
                        <button>Username</button>
                        <IoIosArrowForward />
                    </li>
                </Link>

                <Link to="/home/setting/email">
                    <li className='px-4 py-1 flex justify-between items-center gap-x-2 hover:bg-gray-200 hover:rounded-md hover:text-black'>
                        <button>Email</button>
                        <IoIosArrowForward />
                    </li>
                </Link>

                <Link to="/home/setting/password">
                    <li className='px-4 py-1 flex justify-between items-center gap-x-2 hover:bg-gray-200 hover:rounded-md hover:text-black'>
                        <button>Password</button>
                        <IoIosArrowForward />
                    </li>
                </Link>

                <Link to="/home/setting/profilepicture">
                    <li className='px-4 py-1 flex justify-between items-center gap-x-2 hover:bg-gray-200 hover:rounded-md hover:text-black'>
                        <button>Profile Picture</button>
                        <IoIosArrowForward />
                    </li>
                </Link>

            </ul>
        </div>
    )
}

export default Setting