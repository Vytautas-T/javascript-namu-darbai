window.onload = function () {
    let x = "voras";
    let b = "kristalizavimas";

    console.log (gaunamas(x))
    console.log (gaunamas(b))
}

function gaunamas (zodis) {
    let a = zodis.length / 2 - 0.5;
    return zodis[a]
}