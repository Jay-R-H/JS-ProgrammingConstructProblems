let max_count = 11;
let head_occured = 0;
let tail_occured = 0;
let flag = true;

while(flag) {
    const coin_toss = (Math.floor(Math.random) * 10) % 2);

    if(coin_toss == 0) {
        head_occured++;
    }
    else(coin_toss == 1) {
        tail_occured++;
    }

    if(head_occured == max_count || tail_occured == max_count) {
        flag = false;
    }
    console.log("Head occured:" + head_occured + " times");
    console.log("Tail occured:" + tail_occured + " times");
}