const num1=Number.parseInt(prompt("Enter num1:"))
const operator=prompt("Enter the operator:")
const num2=Number.parseInt(prompt("Enter num2:"))
switch (operator) {
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
    console.log(num1/num2);
    break;
    default:
        console.log("Invalid operator");
        break;
}
