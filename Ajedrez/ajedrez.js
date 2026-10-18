const contenedor = document.getElementById("tablero");


const piezasNegras = ["\u265C", "\u265E", "\u265D", "\u265B", "\u265A", "\u265D", "\u265E", "\u265C"];
const piezasBlancas = ["\u2656", "\u2658", "\u2657", "\u2655", "\u2654", "\u2657", "\u2658", "\u2656"];
contenedor.replaceChildren();
contenedor.setAttribute("role", "img");
contenedor.setAttribute("aria-label", "Tablero de ajedrez en posición inicial");
for (let fila = 0; fila < 8; fila++) {
    for (let columna = 0; columna < 8; columna++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla", (fila + columna) % 2 === 0 ? "blanca" : "negra");

        if (fila === 0) {
            casilla.classList.add("pieza-negra");
            casilla.textContent = piezasNegras[columna];
        } else if (fila === 1) {
            casilla.classList.add("pieza-negra");
            casilla.textContent = "\u265F";
        } else if (fila === 6) {
            casilla.classList.add("pieza-blanca");
            casilla.textContent = "\u2659";
        } else if (fila === 7) {
            casilla.classList.add("pieza-blanca");
            casilla.textContent = piezasBlancas[columna];
        }

        contenedor.appendChild(casilla);
    }

    
}
