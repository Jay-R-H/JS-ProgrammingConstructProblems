const number = prompt('Enter a number to know the place value in Indian System: ');
 
 switch(Number(number)) {
     case 1:
         console.log("Units");
         break;
     case 10:
         console.log("Tens");
         break;
     case 100:
         console.log("Hundreds");
         break;
     case 1000:
         console.log("Thousands");
         break;
     case 10000:
         console.log("Ten thousands");
         break;
     case 100000:
         console.log("Lakh");
         break;
     case 1000000:
         console.log("Ten Lakh");
         break;
     default:
         console.log("Wrong input!");
         break;
 }