function depositCalculator(input) {

    // 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
    // 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
    // 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

    let deposit = Number(input[0]);
    let depositMonths = Number(input[1]);
    let interest = Number(input[2] / 100);

    // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let amount = deposit + depositMonths * ((deposit * interest) / 12);

    console.log(amount);
}

depositCalculator(["200", "3", "5.7"]);