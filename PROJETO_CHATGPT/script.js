const looks = {
    verao: [
        "Regata com shorts",
        "Vestido leve e sandálias",
        "Maiô com saída de praia",
        "Camiseta e saia longa"
    ],
    outono: [
        "Suéter e jeans",
        "Jaqueta de couro e bota",
        "Vestido de manga longa com meia-calça",
        "Camisa xadrez com calça"
    ],
    inverno: [
        "Casaco pesado e cachecol",
        "Suéter de lã e calças quentes",
        "Botas e luvas",
        "Camiseta de manga longa com jaqueta"
    ],
    primavera: [
        "Blusa leve e calça cropped",
        "Vestido floral",
        "Saia midi com blusa de manga",
        "Shorts e camiseta"
    ]
};

function showLooks(season) {
    const title = document.getElementById("season-title");
    const looksList = document.getElementById("looks-list");
    
    // Limpa a lista de looks
    looksList.innerHTML = '';
    
    // Define o título da estação
    title.innerText = `Looks para ${capitalizeFirstLetter(season)}`;
    
    // Adiciona os looks à lista
    looks[season].forEach(look => {
        const li = document.createElement("li");
        li.innerText = look;
        looksList.appendChild(li);
    });
    
    // Mostra o container de looks
    document.getElementById("looks-container").style.display = "block";
    document.getElementById("season-selector").style.display = "none";
}

function reset() {
    document.getElementById("looks-container").style.display = "none";
    document.getElementById("season-selector").style.display = "block";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
