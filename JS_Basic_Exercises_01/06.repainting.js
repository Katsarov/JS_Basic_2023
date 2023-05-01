// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър

//Input
// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]



function solve(input) {
    let nylonQuantitySquareMeters = Number(input[0]);
    let paintQuantityLitres = Number(input[1]);
    let diluentQuantityLitres = Number(input[2]);
    let workingHoursFinish = Number(input[3]);

    let nylonAmount = (nylonQuantitySquareMeters + 2) * 1.50;
    let paintAmount = (paintQuantityLitres * 1.1) * 14.50;
    let diluentAmount = diluentQuantityLitres * 5;

    let subtotal = nylonAmount + paintAmount + diluentAmount + 0.4;

    let workingRatePerHour = subtotal * 0.3;

    let totalAmount = subtotal + (workingRatePerHour * workingHoursFinish);

    console.log(totalAmount);

}

solve(["10 ", "11 ", "4 ", "8 "]);
solve(["5 ", "10 ", "10 ", "1 "]);
