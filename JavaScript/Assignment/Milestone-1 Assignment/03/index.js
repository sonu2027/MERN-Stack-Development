const color1=prompt("Enter color1:")
const color2=prompt("Enter color2:")
switch (color1 && color2) {
    case ("red" && "blue") || ("blue" && "red"):
        console.log("purple");
        break;
    
    case ("red" && "yellow") || ("yellow" && "red"):
        console.log("orange");
        break;

    case ("yellow" && "blue") || ("blue" && "yellow"):
        console.log("green");
        break;
    default:
        console.log("Invalid color combination");
        break;
}