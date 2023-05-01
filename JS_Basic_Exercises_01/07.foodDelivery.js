
// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 

// Input
// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]



function solve(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let subtotal = (chickenMenus * 10.35) + (fishMenus * 12.40) + (vegetarianMenus * 8.15);
    let desert = subtotal * 0.2;

    let totalAmount = subtotal + desert + 2.5;

    console.log(totalAmount);
}

solve(["2 ", "4 ", "3 "]);
solve(["9 ", "2 ", "6 "]);
