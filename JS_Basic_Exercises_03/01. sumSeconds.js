function solve(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalSecundes = first + second + third;

    let minutes = Math.floor(totalSecundes / 60);
    let secundes = totalSecundes % 60;

    if (secundes < 10) {
        console.log(`${minutes}:0${secundes}`);
    } else {
        console.log(`${minutes}:${secundes}`);
    }
}

solve(["35",
    "45",
    "44"]);
solve(["22", "7",
    "34"]);
solve(["50",
    "50",
    "49"]);
solve(["14", "12",
    "10"]);    