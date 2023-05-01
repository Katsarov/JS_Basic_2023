
// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]


function inchesToCentimeters(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let pagesPerDayHours = bookPages / pagesPerHour;
    let totalDays = pagesPerDayHours / days;

    console.log(totalDays);
}

inchesToCentimeters(["212", "20", "2"]);
inchesToCentimeters(["432 ", "15 ", "4 "]);
