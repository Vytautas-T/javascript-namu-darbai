window.onload = function () {
    let pirmaKaina = 100;
    let pirmaGalutineKaina = 275;
    let antrakaina = 15.99;
    let antraGalutineKaina = 16.99

    console.log(pakilimasProcentais(pirmaGalutineKaina,pirmaKaina))
    console.log(nukritimasProcentais(antraGalutineKaina,antrakaina))
}

function pakilimasProcentais (galutineKaina,kaina) {
    return galutineKaina - kaina / kaina * 100 + "%";
}
 
function nukritimasProcentais (kaina,galutineKaina) {
    return (kaina - galutineKaina) / kaina * 100 + "%";
}

// procentu nukritimo apskaiciavimas
//16.99 - 15.99 = 1 ÷ 16.99 = 0.058 * 100 = 5.8
