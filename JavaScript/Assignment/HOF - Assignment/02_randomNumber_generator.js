/*2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.*/
let count=1
const prints=()=>{
    console.log("Time remaining now: " + count + "sec")
    count++
}
const randomNumberGenerator = () => {
    setTimeout(prints, 1000)
    setTimeout(prints, 2000)
    setTimeout(prints, 3000)
    console.log(100 * Math.random().toFixed(2))
    count=1
}
setInterval(randomNumberGenerator, 4000)
