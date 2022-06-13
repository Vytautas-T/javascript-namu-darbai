window.onload = function () {
    let x = -200;
    let a = -1.347;

    console.log (negativetopositive(x));
    console.log (negativetopositive(a));
}

function negativetopositive (value) {
    return Math.abs(value);
}