import Display from "./Display"
function Button({text, onClick}){
    return(
        <>
        <Button onClick={onClick}>{text}/</Button>
        </>
    )
}
export default Button