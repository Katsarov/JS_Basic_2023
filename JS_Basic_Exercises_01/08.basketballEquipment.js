


function solve(input) {
    let taxPerYear = Number(input[0]);

    let shoes = taxPerYear - (taxPerYear * 0.4);
    let equipment = shoes - (shoes * 0.2);
    let ball = equipment * 0.25;
    let accessories = ball * 0.2;

    let amount = taxPerYear + shoes + equipment + ball + accessories;

    console.log(amount);
}

solve(["365 "]);
solve(["550 "]);