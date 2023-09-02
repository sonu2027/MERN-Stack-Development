import "./index.css"
function Image({src}){
    return(
       <div id="image-id">
        <img className="moon-image" src={src} alt="Image" />
        <br /><br />
        <footer>Footer</footer>
       </div>
    )
}
export default Image