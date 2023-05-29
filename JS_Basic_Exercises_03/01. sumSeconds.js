function solve(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalSecondes = first + second + third;

    let minutes = Math.floor(totalSecondes / 60);
    let secondes = totalSecondes % 60;

    if (secondes < 10) {
        console.log(`${minutes}:0${secondes}`);
    } else {
        console.log(`${minutes}:${secondes}`);
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