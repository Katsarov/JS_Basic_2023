


function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeCentimeters = length * width * height;
    let volumeDecimeters = volumeCentimeters / 1000;

    let netVolume = volumeDecimeters - (volumeDecimeters * (percent / 100));

    console.log(netVolume);
}

solve(["85 ", "75 ", "47 ", "17 "]);
solve(["105 ", "77 ", "89 ", "18.5 "]);
