let contador = 0;

const valorPantalla = document.querySelector("#valor");
const btnIncrementar = document.querySelector("#btn-incrementar");
const btnRestar = document.querySelector("#btn-restar");

function actualizarColor() {
    if (contador > 0) {
        valorPantalla.style.color = "green";
    } else if (contador < 0) {
        valorPantalla.style.color = "red";
    } else {
        valorPantalla.style.color = "black";
    }
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    valorPantalla.textContent = contador;
    actualizarColor();
});

btnRestar.addEventListener("click", () => {
    contador--;
    valorPantalla.textContent = contador;
    actualizarColor();
});
