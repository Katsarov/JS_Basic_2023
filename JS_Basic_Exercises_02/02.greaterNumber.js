function solve(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);

    if (numOne > numTwo) {
        console.log(numOne);
    } else {
        console.log(numTwo);
    }
}

solve(["5", "3"]);
solve(["3", "5"]);
solve(["-5", "5"]);