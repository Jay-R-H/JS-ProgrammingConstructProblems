const power = prompt("Enter the value of 'n': ");
let flag = true;
let i = 0;

while(flag) {
    let powerOf2 = Math.pow(2, i);
    if (powerOf2 <= 256) {
        console.log(powerOf2);
        i++;
    }
    else {
        flag = false;
    }
}