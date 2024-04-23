import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";

function ViewImage() {
    const { imageURL } = useParams()
    console.log('ImageURL: ', imageURL);

    const [prev, setPrev] = useState("")
    const [next, setNext] = useState("")

    const [showPopup, setShowPopup] = useState(false)

    const navigate=useNavigate()

    const userId = useSelector((s) => s.auth.userData.userId)

    async function fetchImage() {
        try {
            let response = await axios.get("http://localhost:5000/image")
            response = response.data
            response = response.filter((e) => e.ownerId === userId)
            console.log("res in viewimage: ", response);
            return response
        }
        catch (error) {
            console.log("Fetching img failed: ", error);
        }
    }


    const deleteDocument = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/image/viewimage?param1=${encodeURIComponent('https://' + imageURL)}`);
            console.log("res from delete: ", res.data);
            navigate(`/image/viewimage/${encodeURIComponent(next.slice(7, next.length))}`)
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };

    useEffect(() => {
        fetchImage()
            .then((response) => {
                response.map((e, i) => {
                    console.log("e", e);
                    if (`http://${imageURL}` == e.image) {
                        // console.log("e[i+1].image: ", response[i + 1].image);
                        // console.log("response[i+1].image: ", response[i + 1].image);

                        if (response[i + 1] && response[i - 1]) {
                            setNext(response[i + 1].image)
                            setPrev(response[i - 1].image)
                        }
                        else if (response[i + 1]) {
                            setNext(response[i + 1].image)
                            setPrev("")
                        }
                        else if (response[i - 1]) {
                            setPrev(response[i - 1].image)
                            setNext("")
                        }
                    }
                })
            })
    }, [imageURL])

    const handleShowPopup = (para) => {
        if (para == false) {
            setShowPopup(!showPopup)
            setTimeout(() => {
                setShowPopup(false)
            }, 4000)
        }
        else {
            setShowPopup(false)
        }
    }


    console.log("prev, next: ", prev, next, deletedSuccessfully);


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            {
                prev != "" && <Link to={`/image/viewimage/${encodeURIComponent(prev.slice(7, prev.length))}`}>
                    <div style={{ height: "3rem", width: "1.5rem", backgroundColor: "rgb(182, 222, 222)", position: 'absolute', left: "1rem", borderRadius: "4px" }}></div>
                </Link>
            }

            <img onClick={() => handleShowPopup(showPopup)} style={{ height: "80vh", width: "60vw" }} src={`https://${imageURL}`} alt="Image" />

            {
                next != "" && <Link to={`/image/viewimage/${encodeURIComponent(next.slice(7, next.length))}`}>
                    <div style={{ height: "3rem", width: "1.5rem", backgroundColor: "rgb(182, 222, 222)", position: 'absolute', right: "1rem", borderRadius: "4px" }}></div>
                </Link>
            }

            <br />

            {
                showPopup && <div style={{ backgroundColor: "grey", color: "white", position: "absolute", top: "71vh", width: "60vw", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MdDeleteOutline onClick={deleteDocument} style={{ color: "red", fontSize: "2rem" }} />
                </div>
            }

        </div>
    )
}

export default ViewImage