const boton = document.getElementById("cambiar-modo");

let dark = false;

function cambiarModo() {
    if (dark === false) {
        document.body.style.background = "black";
        document.body.style.color = "white";
        dark = true;
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        dark = false;
    }
}

boton.addEventListener("click", cambiarModo);
