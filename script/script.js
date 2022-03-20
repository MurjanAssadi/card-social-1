var number1 , number2 , op , sum;
number1=+prompt("please enter number ");
op=prompt("enter the action");
number2=+prompt("please enetr number");
if(op=="+"){
sum=number1+number2;
alert(sum);
}
else if(op=="-"){
    sum=number1-number2;
alert(sum);
}
else if(op=="*"){
    sum=number1*number2;
alert(sum);
}
else if(op=="/"){
    sum=number1/number2;
alert(sum);
}
