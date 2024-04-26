import React, { useEffect, useState } from 'react'
import { logout } from './store/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

function Image() {

    const dispatch = useDispatch();
    const status = useSelector((s) => s.auth.status)
    const userId = useSelector((s) => s.auth.userData.userId)
    const userProfilePhoto = useSelector((s) => s.auth.userData.userProfilePhoto)
    const fullName = useSelector((s) => s.auth.userData.fullName)
    console.log("status and userid in login ", status, userId, userProfilePhoto, fullName);
    const [uploadImage, setUploadImage] = useState(false)
    const [uploadFailed, setUploadfailed]=useState(false)

    const [imageData, setImageData] = useState([])

    useEffect(() => {
        async function fetchImages() {
            let imagesData = await axios.get("http://localhost:5000/image")
            imagesData = imagesData.data
            let images = new Array()
            imagesData.map((e) => {
                if (e.ownerId == userId) {
                    images.push(e.image)
                }
            })
            console.log("res: ", images);
            setImageData(images)
        }
        fetchImages()
    }, [uploadImage])


    const handleUpload = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("even.target: ", event.target);

        // Fetch the registration endpoint with form data
        const formData = new FormData(event.target);
        formData.append('ownerId', userId);
        console.log("formData: ", event.target);
        try {
            const response = await fetch('http://localhost:5000/image', {
                method: 'POST',
                body: formData
            });

            console.log("response: ", response);

            if (response.ok) {
                // Registration successful, handle response
                const data = await response.json();
                console.log('Images: ', data);
                setUploadOption(false)
                // Optionally, you can redirect the user to another page or show a success message here
            } else {
                setUploadfailed(true)
                setTimeout(()=>{
                    setUploadfailed(false)
                }, 3000)
                // Handle errors
                console.error('Registration failed:', response.statusText);
                // Optionally, you can show an error message to the user
            }
        } catch (error) {
            console.error('Error occurred while registering:', error);
            // Optionally, you can show an error message to the user
        }
        setUploadImage(!uploadImage)
    };

    const [uploadOption, setUploadOption] = useState(false)

    const showUploadOption = () => {
        setUploadOption(!uploadOption)
    }

    return (
        <div className='bg-gray-100 pb-24'>

            {
                status ?
                    <>
                        <button className='m-2 absolute right-4 top-2 text-red-500 font-medium' onClick={() => {
                            dispatch(logout())
                        }}>Logout</button>
                    </>
                    :
                    <>
                        <Navigate to="/" />
                    </>
            }
            <div className='flex flex-col justify-center items-center bg-gray-300 pt-2 pb-2'>
                <img className='rounded-full w-48' src={`${userProfilePhoto}`} alt="Profile Photo" />
                <div className='text-blue-500 font-medium'>{fullName}</div>
            </div>
            <br />


            {
                uploadOption &&
                <div className='bg-white fixed top-1/3 right-1/2 translate-x-1/2 translate-y-1/2 rounded-md border-2 border-solid border-gray-100'>
                    <div className='flex justify-end items-center'>
                        <RxCross1 onClick={showUploadOption} className='m-2 hover:cursor-pointer' />
                    </div>
                    <form className='flex flex-col justify-center items-center px-4 pb-4 pt-2' onSubmit={handleUpload} encType='multipart/form-data'>
                        <input type="file" name="image" id="" placeholder='Upload Files' /><br /><br />
                        <button className='bg-blue-500 rounded-sm text-white px-4 py-1' type="submit">Post</button>
                    </form>
                    {
                        uploadFailed && <div>Upload failed: Please try again</div>
                    }
                </div>
            }

            <div className='sm:mx-4 md:mx-8 lg:mx-12 bg-white rounded-md flex flex-col border-2 border-solid border-gray-100'>

                <div className='mx-2 mt-8 mb-8 flex justify-between items-center'>
                    <div className=' text-2xl'>Photos</div>
                    <button onClick={showUploadOption} className='text-white bg-blue-500 rounded-sm px-2 py-1'>Add photo/video</button>
                </div>

                <div className='flex justify-center items-start px-2 py-2'>
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-2'>
                        {
                            imageData.map((e) =>
                                <Link key={e} to={`/image/viewimage/${encodeURIComponent(e.slice(7, e.length))}`}>
                                    <div className='rounded-md border-gray-200 border-2 border-solid h-52 overflow-hidden flex justify-center items-start'>
                                        <img className='' src={`${e}`} alt="img"
                                        />
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Image