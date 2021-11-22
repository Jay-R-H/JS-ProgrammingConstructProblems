const NUMBER_COUNT = 5;
let sum = 0;
const num = [];
let i =0;

while(i<NUMBER_COUNT){
   num[i] = (Math.floor(Math.random() * 90) + 10);
   sum = sum + num[i];
   i++; 
}

console.log("The numbers are: " + num);
console.log("The sum of all the numbers is: " + sum);
console.log("The average of the these numbers is: " + (sum/NUMBER_COUNT) );