// Selección de elementos del DOM
const btnIngresar = document.getElementById("ingresar");
const mensajeResultado = document.getElementById("resultado");

// Evento para validar la contraseña seleccionada
btnIngresar.addEventListener("click", () => {

    // Obtener los valores seleccionados
    const primerDigito = document.getElementById("numero1").value;
    const segundoDigito = document.getElementById("numero2").value;
    const tercerDigito = document.getElementById("numero3").value;

    // Construir la contraseña
    const password = `${primerDigito}${segundoDigito}${tercerDigito}`;

    // Validar la contraseña ingresada
    switch (password) {
        case "911":
            mensajeResultado.textContent = "password 1 correcto";
            break;

        case "714":
            mensajeResultado.textContent = "password 2 correcto";
            break;

        default:
            mensajeResultado.textContent = "password incorrecto";
            break;
    }
});