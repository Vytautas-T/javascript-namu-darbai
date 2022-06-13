window.onload = function () {
    let pirmaKaina = 100;
    let pirmaGalutineKaina = 275;
    let antraKaina = 15.99;
    let antraGalutineKaina = 16.99

    console.log(pakitimasProcentais(pirmaKaina, pirmaGalutineKaina))
    console.log(pakitimasProcentais(antraKaina, antraGalutineKaina))
}

function pakitimasProcentais (kaina, galutineKaina) {
    return (galutineKaina - kaina) / kaina * 100 + "%";
}
// procentu nukritimo apskaiciavimas
//16.99 - 15.99 = 1 ÷ 16.99 = 0.058 * 100 = 5.8
