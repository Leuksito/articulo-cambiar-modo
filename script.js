const boton = document.getElementById("cambiar-modo");
const selectorIdioma = document.getElementById("idioma");
const botonAjustes = document.getElementById("boton-ajustes");
const iconoModo = document.getElementById("iconoModo");

let dark = true;

function cambiarIdioma() {

    if (selectorIdioma.value === "ingles") {

        document.getElementById("titulo2").textContent =
            "FROM THE VIDEO GAME TO THE MOVIE: A NEW STORY OF 2026";

        document.getElementById("apartado1").textContent =
            "1. A SAGA THAT DEFINED HORROR";
        document.getElementById("parrafo1").textContent =
            "Resident Evil is one of the most important sagas of the survival horror genre. Created by Capcom in 1996, it began as a video game in which the player had to explore dangerous places, face zombies and creatures, and carefully manage their resources. Over the years, the franchise became an international phenomenon and also made its way to the cinema.";

        document.getElementById("apartado2").textContent =
            "2. THE NEW 2026 MOVIE";
        document.getElementById("parrafo2").textContent =
            "In 2026 a new film titled Resident Evil was released, directed by Zach Cregger and starring Austin Abrams, Zach Cherry, Kali Reis and Paul Walter Hauser. The film reached theaters on September 18, 2026 and has a running time of 93 minutes. This new version presents an original story within the Resident Evil universe.";

        document.getElementById("apartado3").textContent =
            "3. A NEW STORY";
        document.getElementById("parrafo3").textContent =
            "The protagonist is Bryan, played by Austin Abrams, a medical courier who unexpectedly gets caught up in a night of chaos and fights to survive. Although the film does not directly adapt the story of one of the video games, it uses many recognizable elements of the saga, such as the virus, the creatures and the survival atmosphere.";

        document.getElementById("apartado4").textContent =
            "4. FROM THE CONTROLLER TO THE CINEMA";
        document.getElementById("parrafo4").textContent =
            "In video games, the player controls the character, explores the settings, solves puzzles and decides how to use their resources. Fear arises because the player takes part directly in the story. In a film, however, the viewer cannot make decisions, so the director must use other tools, such as music, cinematography and editing.";

        document.getElementById("apartado5").textContent =
            "5. AN ADAPTATION WITH ITS OWN IDENTITY";
        document.getElementById("parrafo5").textContent =
            "The 2026 film is not a copy of the video games, but an adaptation that takes their essence: horror, survival, biological danger and the feeling of being trapped in a situation that is increasingly difficult to control. In this way, Resident Evil once again shows how a video game can evolve and find new ways of telling stories without abandoning the elements that made it recognizable.";

    } else {

        document.getElementById("titulo2").textContent =
            "DEL VIDEOJUEGO AL CINE: UNA NUEVA HISTORIA DE 2026";

        document.getElementById("apartado1").textContent =
            "1. UNA SAGA QUE MARCÓ EL TERROR";
        document.getElementById("parrafo1").textContent =
            "Resident Evil es una de las sagas más importantes del género survival horror. Creada por Capcom en 1996, comenzó como un videojuego en el que el jugador debía explorar lugares peligrosos, enfrentarse a zombis y criaturas y administrar cuidadosamente sus recursos. Con el paso de los años, la franquicia se convirtió en un fenómeno internacional y llegó también al cine.";

        document.getElementById("apartado2").textContent =
            "2. LA NUEVA PELÍCULA DE 2026";
        document.getElementById("parrafo2").textContent =
            "En 2026 se estrenó una nueva película titulada Resident Evil, dirigida por Zach Cregger y protagonizada por Austin Abrams, Zach Cherry, Kali Reis y Paul Walter Hauser. La película llegó a los cines el 18 de septiembre de 2026 y tiene una duración de 93 minutos. Esta nueva versión presenta una historia original dentro del universo de Resident Evil.";

        document.getElementById("apartado3").textContent =
            "3. UNA NUEVA HISTORIA";
        document.getElementById("parrafo3").textContent =
            "El protagonista es Bryan, interpretado por Austin Abrams, un mensajero médico que se ve atrapado inesperadamente en una noche de caos y lucha por sobrevivir. Aunque la película no adapta directamente la historia de uno de los videojuegos, utiliza muchos elementos reconocibles de la saga, como el virus, las criaturas y el ambiente de supervivencia.";

        document.getElementById("apartado4").textContent =
            "4. DEL MANDO AL CINE";
        document.getElementById("parrafo4").textContent =
            "En los videojuegos, el jugador controla al personaje, explora los escenarios, resuelve puzles y decide como utilizar sus recursos. El miedo surge porque el jugador participa directamente en la historia. En una película, en cambio, el espectador no puede tomar decisiones, por lo que el director debe utilizar otros recursos, como la música, la fotografía y el montaje.";

        document.getElementById("apartado5").textContent =
            "5. UNA ADAPTACIÓN CON IDENTIDAD PROPIA";
        document.getElementById("parrafo5").textContent =
            "La película de 2026 no es una copia de los videojuegos, sino una adaptación que toma su esencia: el terror, la supervivencia, el peligro biológico y la sensación de estar atrapado en una situación cada vez más difícil de controlar. De esta manera, Resident Evil vuelve a demostrar cómo un videojuego puede evolucionar y encontrar nuevas formas de contar historias sin abandonar los elementos que lo hicieron reconocible.";
    }
}

function cambiarModo() {
    if (dark === true) {
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.body.classList.add("claro");
        iconoModo.src = "imagenes/icons8-moon-symbol-48.png";
        dark = false;
    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.body.classList.remove("claro");
        iconoModo.src = "imagenes/icons8-solar-panel-64.png";
        dark = true;
    }
}

function mostrarAjustes() {
    if (selectorIdioma.style.display === "block") {
        selectorIdioma.style.display = "none";
    } else {
        selectorIdioma.style.display = "block";
    }
}

boton.addEventListener("click", cambiarModo);
selectorIdioma.addEventListener("change", cambiarIdioma);
botonAjustes.addEventListener("click", mostrarAjustes);
