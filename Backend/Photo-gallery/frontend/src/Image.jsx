import React, { useEffect, useState } from 'react'
import { logout } from './store/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate} from 'react-router';
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
                        <button style={{ margin: "10px" }} onClick={() => {
                            dispatch(logout())
                        }}>Logout</button>
                    </>
                    :
                    <>
                        <Navigate to="/" />
                    </>
            }
            <div>
                <img src={`${userProfilePhoto}`} style={{ height: "35vh", width: "18vw" }} alt="Profile Photo" />
                <div>{fullName}</div>
            </div>

            {
                status && <form onSubmit={handleUpload} encType='multipart/form-data'>
                    <input type="file" name="image" id="" placeholder='Upload Files' /><br /><br />
                    <button type="submit">Upload</button>
                </form>
            }


            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                {
                    imageData.map((e) =>
                        <Link key={e} to={`/image/viewimage/${encodeURIComponent(e.slice(7, e.length))}`}>
                            <div>
                                <img style={{ height: "35vh", width: "20vw" }} src={`${e}`} alt="img"
                                />
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    )
}

export default Image