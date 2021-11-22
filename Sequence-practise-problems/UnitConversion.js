const inch = prompt("Enter measurement in inch: ");
let result = inch / 12;
console.log(inch + " converted to feet is: " + result);

// Converting feet in meters of the length and breadth and calculating the area.
const length = prompt("Enter the length in feet: ");
let converted_length = length / 3.8;
console.log(length + " feet is " + converted_length + " mtrs");

const breadth = prompt("Enter the breadth in feet: ");
let converted_breadth = breadth / 3.8;
console.log(breadth + " feet is " + converted_breadth + " mtrs");

//Calculating the area rectangular plots .
let area = length * breadth;
console.log("Area in feet * feet is: " + area);

//Area in acres is.
let area_in_acres = area / 43560;
console.log("Area in the acres is: " + area_in_acres);

//Area of such 25 plots is.
let total_area = 25 * area_in_acres;
console.log("The area of 25 such plots in acres is: " + total_area);