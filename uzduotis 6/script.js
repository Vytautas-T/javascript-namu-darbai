window.onload = function () {
    let pirmaKaina = 100;
    let pirmaGalutineKaina = 275;
    let antrakaina = 15.99;
    let antraGalutineKaina = 16.99

    console.log(pakilimasProcentais(pirmaGalutineKaina,pirmaKaina))
    console.log(pakilimasProcentais(antraGalutineKaina,antrakaina))
}

function pakilimasProcentais (galutineKaina,kaina) {
    return (galutineKaina - kaina) / kaina * 100 + "%";
}