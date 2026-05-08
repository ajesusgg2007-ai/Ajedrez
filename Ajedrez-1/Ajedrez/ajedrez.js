const contenedor = document.getElementById("tablero");

//Piezas
const piezasatras = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
const piezasAtrasBlancas = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const casilla = document.createElement("div");
        casilla.classList.add('casilla');
        
        if ((i + j) % 2 === 0) {
            casilla.classList.add('blanca');
        } else {
            casilla.classList.add('negra');
        }
        if (i === 0) {
            casilla.innerText = piezasatras[j];
        } else if (i === 1) { 
            casilla.innerText = '♟';
        } else if (i === 6) {
            casilla.innerText = '♙';
        } else if (i === 7) {
            casilla.innerText = piezasAtrasBlancas[j];
        }

        contenedor.appendChild(casilla);
}
}



