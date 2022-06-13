window.onload = function () {
    let a = "kava";
    let b = "java";

    console.log (reversearray(a));
    console.log (reversearray(b));
}

function reversearray (zodis) {
    return zodis.split("").reverse().join("");
}