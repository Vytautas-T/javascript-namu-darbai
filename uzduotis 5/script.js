window.onload = function () {
    let pirmaKaina = 120;
    let antrakaina = 2000;
    let pirmasProcentas = 13;
    let antrasProcentas = 1.258;

    console.log (prekiukaina(pirmaKaina,pirmasProcentas))
    console.log (prekiukaina(antrakaina,antrasProcentas))
}

function prekiukaina (kaina,procentai) {
    return kaina / 100 * procentai + kaina;
}
