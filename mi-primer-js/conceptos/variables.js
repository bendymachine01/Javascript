// Variables y tipos de datos
const nombreEstudiante = "Harold";
const anioNacimiento = 2010;

// Calculamos la edad dinámicamente
const anioActual = new Date().getFullYear();
const edad = anioActual - anioNacimiento;

console.log("Hola " + nombreEstudiante + ", tu edad es: " + edad);

// Operaciones matemáticas
let suma = 10 + 5;
let resta = 20 - 8;
let multi = 4 * 5;
let division = 50 / 2;
let residuo = 10 % 3;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multi);
console.log("División:", division);
console.log("Residuo:", residuo);
