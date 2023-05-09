function solve(input) {
    let type = input[0];

    let result = 0;

    if (type === "square") {
        let length = Number(input[1]);
        result = length * length;
    } else if (type === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
    } else if (type === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius, 2);
    } else if (type === "triangle") {
        let sideA = Number(input[1]);
        let hA = Number(input[2]);
        result = (sideA * hA) / 2;
    }

    console.log(result.toFixed(3));
}

solve(["square", "5"]);
solve(["rectangle",
    "7",
    "2.5"]);
solve(["circle",
    "6"]);
solve(["triangle",
    "4.5",
    "20"]);
