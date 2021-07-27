/* ---- English ---- */

let img_english = document.getElementById("img_english").addEventListener("click", translateEnglish);

 function translateEnglish(){

    /* selecionamos los id */
    let title = document.getElementById("title");
    let pagrah = document.getElementById("pagrah");
    
    /* se aplica la traduccion */

    title.textContent = "The Earth"
    pagrah.textContent = "The Earth was formed approximately 4.55 billion years ago and life arose about a billion years later. It is home to millions of species, including humans and currently the only astronomical body where life is known to exist.19 The atmosphere and other abiotic conditions have been significantly altered by the planet's biosphere, favoring the proliferation of aerobic organisms, as well as the formation of an ozone layer that, together with the earth's magnetic field, blocks harmful solar radiation, thus allowing life on Earth."

    console.log(title);
    console.log(pagrah);

}

/* ---- Spanish --- */
let img_spanish = document.getElementById("img_spanish").addEventListener("click", translateSpanish);

 function translateSpanish(){

    /* selecionamos los id */
    let title = document.getElementById("title");
    let pagrah = document.getElementById("pagrah");
    /* devuelta */
    
    title.textContent = "La tierra"
    pagrah.textContent = "La Tierra se formó hace aproximadamente 4550 millones de años y la vida surgió unos mil millones de años después. Es el hogar de millones de especies, incluidos los seres humanos y actualmente el único cuerpo astronómico donde se conoce la existencia de vida.19​ La atmósfera y otras condiciones abióticas han sido alteradas significativamente por la biosfera del planeta, favoreciendo la proliferación de organismos aerobios, así como la formación de una capa de ozono que junto con el campo magnético terrestre bloquean la radiación solar dañina, permitiendo así la vida en la Tierra."
    /* se aplica la traduccion */
}

/* ---- Italian ---- */
let img_italian = document.getElementById("img_italian").addEventListener("click", translateItalian);

 function translateItalian(){

    /* selecionamos los id */
    let title = document.getElementById("title");
    let pagrah = document.getElementById("pagrah");
    /* devuelta */
    
    title.textContent = "La Terra"
    pagrah.textContent = "La Terra si è formata circa 4,55 miliardi di anni fa e la vita è sorta circa un miliardo di anni dopo. Ospita milioni di specie, compresi gli esseri umani, ed è attualmente l'unico corpo astronomico in cui si conosce l'esistenza della vita.19 L'atmosfera e altre condizioni abiotiche sono state alterate in modo significativo dalla biosfera del pianeta, favorendo la proliferazione di organismi aerobici. , così come la formazione di uno strato di ozono che insieme al campo magnetico terrestre blocca la radiazione solare dannosa, consentendo così la vita sulla Terra"
    /* se aplica la traduccion */
}

/* ---- Portuguese ---- */

let img_portuguese = document.getElementById("img_portuguese").addEventListener("click", translatePortuguese);

 function translatePortuguese(){

    /* selecionamos los id */
    let title = document.getElementById("title");
    let pagrah = document.getElementById("pagrah");
    /* devuelta */
    
    title.textContent = "A Terra"
    pagrah.textContent = "A Terra foi formada há aproximadamente 4,55 bilhões de anos e a vida surgiu cerca de um bilhão de anos depois. É o lar de milhões de espécies, incluindo humanos e atualmente o único corpo astronômico onde se sabe que existe vida.19 A atmosfera e outras condições abióticas foram significativamente alteradas pela biosfera do planeta, favorecendo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio que, junto com o campo magnético terrestre, bloqueia a nociva radiação solar, permitindo assim a vida na Terra."
    /* se aplica la traduccion */
}