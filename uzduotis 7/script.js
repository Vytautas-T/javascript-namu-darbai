window.onload = function () {
    let skaicius1 = 17%6;
    let skaicius2 = 441%18;
    let skaicius3 = 11%2;

    console.log (skaicius1)
    console.log (skaicius2)
    console.log (skaicius3)
    console.log ("---------next---------")
    let nr1 = 17;
    let nri1 = 6;
    let nr2 = 441;
    let nri2 = 18;
    let nr3 = 11;
    let nri3 = 2;
    let nr4 = 10;
    let nri4 = 2;

    console.log (liekana(nr1,nri1))
    console.log (liekana(nr2,nri2))
    console.log (liekana(nr3,nri3))
    console.log (liekana(nr4,nri4))
}

function liekana (pirmasSkaicius,antrasSkaicius){
    return pirmasSkaicius % antrasSkaicius;
}
