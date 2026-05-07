const contenedor = document.getElementById("tablero");

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const casilla = document.createElement("div");
        casilla.style.width = "50px";
        casilla.style.height = "50px";
        
        if ((i + j) % 2 === 0) {
            casilla.style.backgroundColor = "#ffffff"; 
        } else {
            casilla.style.backgroundColor = "#000000";
        }
        
        contenedor.appendChild(casilla);
    }
}

