const boton = document.getElementById("cambiar-modo");

let dark = false;

function cambiarModo() {
    if (dark === false) {
        document.body.style.background = "black";
        document.body.style.color = "white";

        fotoBlanca.style.display = "none";
        fotoNegra.style.display = "block";

        dark = true;
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";

        fotoBlanca.style.display = "block";
        fotoNegra.style.display = "none";

        dark = false;
    }
}

boton.addEventListener("click", cambiarModo);
