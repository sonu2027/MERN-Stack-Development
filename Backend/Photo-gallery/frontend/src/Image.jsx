import React, { useEffect, useState } from 'react'
import { logout } from './store/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

function Image() {

    const dispatch = useDispatch();
    const status = useSelector((s) => s.auth.status)
    const userId = useSelector((s) => s.auth.userData.userId)
    const userProfilePhoto = useSelector((s) => s.auth.userData.userProfilePhoto)
    const fullName = useSelector((s) => s.auth.userData.fullName)
    console.log("status and userid in login ", status, userId, userProfilePhoto, fullName);
    const [uploadImage, setUploadImage] = useState(false)

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
        setUploadImage(!uploadImage)
    };

    return (
        <div>

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
            <div className='flex flex-col justify-center items-center bg-slate-200 pt-2 pb-2'>
                <img className='rounded-full w-48' src={`${userProfilePhoto}`} alt="Profile Photo" />
                <div className='text-blue-500 font-medium'>{fullName}</div>
            </div>
            <br />

            {
                status && <form className='ml-2' onSubmit={handleUpload} encType='multipart/form-data'>
                    <div>Upload Photos</div>
                    <input type="file" name="image" id="" placeholder='Upload Files' /><br /><br />
                    <button className='bg-blue-500 rounded-sm text-white px-2 py-1' type="submit">Upload</button>
                </form>
            }

            <div className='text-blue-500 ml-2 mt-8 mb-2 text-2xl'>Photos</div>
            <div className='flex justify-center items-center px-2'>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                    {
                        imageData.map((e) =>
                            <Link key={e} to={`/image/viewimage/${encodeURIComponent(e.slice(7, e.length))}`}>
                                <div>
                                    <img src={`${e}`} alt="img"
                                    />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Image