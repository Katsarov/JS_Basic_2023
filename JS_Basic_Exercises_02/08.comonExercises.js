/*function solve(input) {
    console.log(Math.ceil(2.1));
    console.log(Math.floor(4.76));
    console.log(Math.floor(6.6543).toFixed(3));
}
solve();*/

function solve(input) {
    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log("Excellent!");
    } else {
        console.log("Not excellent!");
    }
}


solve(["4.8"]);
