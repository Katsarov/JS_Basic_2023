// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)

//Input
// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]

function solve(input) {
    let numberOfPenPacks = Number(input[0]);
    let numberOfMarkersPacks = Number(input[1]);
    let litersOfCleaningLiquid = Number(input[2]);
    let percentageDiscound = Number(input[3]);

    let pensSum = numberOfPenPacks * 5.80;
    let markersSum = numberOfMarkersPacks * 7.20;
    let cleaningLiquidSum = litersOfCleaningLiquid * 1.20;

    let totalAmount = pensSum + markersSum + cleaningLiquidSum;
    let amountAfterDiscount = totalAmount * (1 - percentageDiscound / 100);

    console.log(amountAfterDiscount);
}

solve(["2 ", "3 ", "4 ", "25 "]);


