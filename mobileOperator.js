function solve(input) {
    let period = input[0];
    let type = input[1];
    let mobileInternet = input[2];
    let months = Number(input[3]);

    let pricePerMonth = 0;

    switch (type) {
        case 'Small':
            if (period === 'one') {
                pricePerMonth = 9.98;
            } else if (period === 'two') {
                pricePerMonth = 8.58;
            }
            break;

        case 'Middle':
            if (period === 'one') {
                pricePerMonth = 18.99;
            } else if (period === 'two') {
                pricePerMonth = 17.09;
            }
            break;

        case 'Large':
            if (period === 'one') {
                pricePerMonth = 25.98;
            } else if (period === 'two') {
                pricePerMonth = 23.59;
            }
            break;

        case 'ExtraLarge':
            if (period === 'one') {
                pricePerMonth = 35.99;
            } else if (period === 'two') {
                pricePerMonth = 31.79;
            }
            break;
    }

    if (mobileInternet === 'yes') {
        if (pricePerMonth <= 10) {
            pricePerMonth += 5.50;
        } else if (pricePerMonth <= 30) {
            pricePerMonth += 4.35;
        } else {
            pricePerMonth += 3.85;
        }

    }
    let totalPrice = months * pricePerMonth;

    if (period === 'two') {
        totalPrice -= 3.75 / 100 * totalPrice;
    }

    console.log(`$`)
}

solve();
