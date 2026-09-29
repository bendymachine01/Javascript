// Estructura condicional
const edadUsuario = 16;

if (edadUsuario >= 18) {
    console.log("¡Puedes registrarte en el torneo de mayores!");
} else if (edadUsuario >= 13) {
    console.log("¡Bienvenido a la categoría Juvenil!");
} else {
    console.log("Lo siento, necesitas ser mayor de 13 años.");
}

// Función reutilizable
function calcularPuntajeTotal(puntos1, puntos2) {
    const total = puntos1 + puntos2;
    return total;
}

console.log("Puntaje final:", calcularPuntajeTotal(450, 320));
