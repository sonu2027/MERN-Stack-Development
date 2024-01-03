import { useEffect } from "react"
import axios from "axios";
function HomePage(){
    let datas=""
    async function downloadData(){
        const response=await axios.get("http://www.omdbapi.com/apikey.aspx")
        console.log(response);
        datas=response.data
        console.log(datas);
    }
    useEffect(()=>{
        downloadData()
    }, [])
    return (
        <>
        {datas}
        <h1>Movie List</h1>
        <input type="text" />
        </>
    )
}
export default HomePage