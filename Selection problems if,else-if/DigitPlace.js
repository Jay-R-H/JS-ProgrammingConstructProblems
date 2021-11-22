const number = prompt("Enter the number to determine the digits: ");

if(number == 1) {
    console.log(number +" is: Unit digit place");
}

else if(number == 100) {
    console.log(number +" is: hundered unit digit place");
}

else if(number == 1000) {
    console.log(number +" is: thousand unit digit place");
}

else if(number == 10000) {
    console.log(number +" is: ten-thousand unit digit place");
}

else if(number == 1000000) {
    console.log(number +" is: million unit digit place");
}
