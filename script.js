var num1 = prompt("Enter First Number : ");
var operator = prompt("Enter Operator :");
var num2 = prompt("Enter Second Number :");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10)

var sum, sub, mul, div;
if(operator =="+"){
    sum = num1 + num2;
    document.write(num1+" + "+num2+" = "+sum+"<br/>");
} else if(operator =="-"){
    sub = num1 + num2;
    document.write(num1+" - "+num2+" = "+sub+"<br/>");
} else if(operator == '*'){
    mul = num1 * num2;
    document.write(num1+" x "+num2+" = "+mul+"<br/>");
} else if(operator == '/'){
    div = num1 / num2;
    document.write(num1+" / "+num2+" = "+div+"<br/>");
}else{
    document.write("You Enter a Invalid Number or Operator, try Again");
}