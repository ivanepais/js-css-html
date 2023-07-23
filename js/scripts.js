//Variables


// Declarando variables usando let
let nombre;
let edad;
let ciudad;

// Asignando valores a las variables
nombre = "Juan";
edad = 30;
ciudad = "Madrid";

// Mostrando los valores de las variables en la consola
console.log(nombre);  // Resultado: "Juan"
console.log(edad);    // Resultado: 30
console.log(ciudad);  // Resultado: "Madrid"


//---------------

//Hoisting

console.log(miVariable); // Resultado: undefined
var miVariable = 10;


saludar(); // Resultado: "Hola"

function saludar() {
  console.log("Hola");
}


console.log(miVariable); // Error: ReferenceError: miVariable is not defined

let miVariable = 10;


//---------------

//Scope

// Ámbito Global
let globalVar = 10;

function exampleFunction() {
  // Ámbito Local
  let localVar = 20;

  console.log(globalVar); // Se puede acceder a globalVar desde dentro de la función
  console.log(localVar);  // Se puede acceder a localVar desde dentro de la función
}

exampleFunction();

console.log(globalVar); // Se puede acceder a globalVar desde fuera de la función
console.log(localVar);  // Error: localVar is not defined (no se puede acceder desde fuera de la función)

//---------------



/*.........................*/

//Tipos de datos

//number

// Operaciones aritméticas
let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;
console.log(suma); // Resultado: 15

let resta = numero1 - numero2;
console.log(resta); // Resultado: 5

let multiplicacion = numero1 * numero2;
console.log(multiplicacion); // Resultado: 50

let division = numero1 / numero2;
console.log(division); // Resultado: 2

let resto = numero1 % numero2;
console.log(resto); // Resultado: 0 (resto de la división)

// Conversión de número a string
let numeroEnString = numero1.toString();
console.log(numeroEnString); // Resultado: "10"

// Conversión de string a número
let textoNumero = "25";
let numeroDesdeString = parseInt(textoNumero);
console.log(numeroDesdeString); // Resultado: 25

// Redondeo de números
let numeroDecimal = 3.75;
let numeroRedondeado = Math.round(numeroDecimal);
console.log(numeroRedondeado); // Resultado: 4 (redondeo al número entero más cercano)

// Obtener el valor absoluto de un número
let numeroNegativo = -15;
let valorAbsoluto = Math.abs(numeroNegativo);
console.log(valorAbsoluto); // Resultado: 15

// Generación de números aleatorios entre 0 y 1
let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Resultado: un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)

// Generación de números aleatorios enteros entre 1 y 10
let numeroAleatorioEntero = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorioEntero); // Resultado: un número entero aleatorio entre 1 y 10

// Comprobación de si un valor es un número
let esNumero1 = isNaN(numero1);
let esNumero2 = isNaN("Hola");
console.log(esNumero1); // Resultado: false (es un número)
console.log(esNumero2); // Resultado: true (no es un número)



//---------------

//string

// Declaración de variables de tipo "string"
let nombre = "Juan";
let mensaje = 'Hola, ¿cómo estás?';

// Concatenación de strings
let saludo = "Hola, " + nombre + ". ¿Cómo estás?";
console.log(saludo); // Resultado: "Hola, Juan. ¿Cómo estás?"

// Interpolación de strings (con template literals)
let edad = 30;
let presentacion = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(presentacion); // Resultado: "Hola, soy Juan y tengo 30 años."

// Longitud de un string (número de caracteres)
let longitudNombre = nombre.length;
console.log(longitudNombre); // Resultado: 4

// Acceso a caracteres individuales (se cuenta desde 0)
let primerCaracter = nombre[0];
console.log(primerCaracter); // Resultado: "J"

// Conversión a mayúsculas y minúsculas
let nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas); // Resultado: "JUAN"

let mensajeEnMinusculas = mensaje.toLowerCase();
console.log(mensajeEnMinusculas); // Resultado: "hola, ¿cómo estás?"

// Búsqueda de texto en un string
let texto = "El desarrollo web es interesante y desafiante.";
let palabraBuscada = "interesante";
let posicionPalabra = texto.indexOf(palabraBuscada);
console.log(posicionPalabra); // Resultado: 20

// Reemplazo de texto en un string
let textoReemplazado = texto.replace("interesante", "fascinante");
console.log(textoReemplazado); // Resultado: "El desarrollo web es fascinante y desafiante."

// Extracción de una parte de un string
let parteDelTexto = texto.slice(4, 16);
console.log(parteDelTexto); // Resultado: "arrollo web"

// Conversión de string a array
let arrayDePalabras = texto.split(" ");
console.log(arrayDePalabras); // Resultado: ["El", "desarrollo", "web", "es", "interesante", "y", "desafiante."]


//---------------

//Boolean

// Declaración de variables de tipo "boolean"
let esMayor = true;
let esMenor = false;

// Operaciones lógicas con "boolean"
let edad = 25;
let esAdulto = edad >= 18; // Devuelve true si la edad es mayor o igual a 18
console.log(esAdulto); // Resultado: true

let esMenorDeEdad = edad < 18; // Devuelve true si la edad es menor a 18
console.log(esMenorDeEdad); // Resultado: false

// Combinación de valores booleanos con operadores lógicos
let tieneCarro = true;
let tieneCasa = false;

let puedeComprar = tieneCarro && tieneCasa; // Devuelve true si tiene carro Y casa
console.log(puedeComprar); // Resultado: false

let puedeViajar = tieneCarro || tieneCasa; // Devuelve true si tiene carro O casa
console.log(puedeViajar); // Resultado: true

let noTieneCarro = !tieneCarro; // Devuelve el valor contrario (negación)
console.log(noTieneCarro); // Resultado: false

// Uso en estructuras condicionales (if-else)
let hora = 12;
let esManana = hora < 12;

if (esManana) {
  console.log("Buenos días!");
} else {
  console.log("Buenas tardes!");
}

// Uso en operadores ternarios
let temperatura = 25;
let estadoClima = temperatura > 30 ? "Calor" : "Fresco";
console.log(estadoClima); // Resultado: "Fresco"



//---------------

//bigint

const a = 1234567890123456789012345678901234567890n;
const b = BigInt("9876543210987654321098765432109876543210");

const suma = a + b;
const multiplicacion = a * b;

console.log(suma);           // Resultado: 11111111101111111110111111111011111111100n
console.log(multiplicacion); // Resultado: 12193263113702179520926131472987363595939114093571973950124368987157695597749000n


//---------------

//Undefined

// Variable declarada pero sin valor asignado (undefined)
let nombre;

console.log(nombre); // Resultado: undefined

// Función que no devuelve un valor explícito (devuelve undefined por defecto)
function saludar() {
  console.log("¡Hola!");
}

let resultadoSaludo = saludar(); // La función no devuelve un valor explícito

console.log(resultadoSaludo); // Resultado: undefined

// Acceso a una propiedad inexistente en un objeto
let persona = {
  nombre: "Juan",
  edad: 30,
};

console.log(persona.direccion); // Resultado: undefined (la propiedad "direccion" no existe)

// Uso de undefined en comparaciones
let numero1 = 10;
let numero2;

console.log(numero1 === undefined); // Resultado: false
console.log(numero2 === undefined); // Resultado: true (la variable numero2 no tiene valor asignado)

// Verificar si una variable está definida
let apellido;

if (typeof apellido === "undefined") {
  console.log("La variable apellido no está definida.");
} else {
  console.log("La variable apellido está definida y su valor es: " + apellido);
}



//---------------

//Null

// Variable con valor "null"
let miVariable = null;

console.log(miVariable); // Resultado: null

// Comprobación de valor null en una variable
let dato = null;

if (dato === null) {
  console.log("El valor es null.");
} else {
  console.log("El valor no es null.");
}

// Asignar null a una variable existente
let color = "rojo";
console.log(color); // Resultado: "rojo"

color = null;
console.log(color); // Resultado: null

// Uso de null en comparaciones
let numero1 = 10;
let numero2 = null;

console.log(numero1 === null); // Resultado: false
console.log(numero2 === null); // Resultado: true (la variable numero2 contiene null)

// Uso de null en objetos
let persona = {
  nombre: "Juan",
  edad: 30,
  direccion: null,
};

console.log(persona.direccion); // Resultado: null (la propiedad "direccion" está definida pero contiene null)

// Operaciones matemáticas con valor null
let valorNumerico = 5;
let resultadoSuma = valorNumerico + null;
console.log(resultadoSuma); // Resultado: 5 (null se trata como 0 en operaciones matemáticas)

// Uso de null para eliminar referencias
let objeto = { prop: "valor" };
console.log(objeto); // Resultado: { prop: "valor" }

objeto = null;
console.log(objeto); // Resultado: null (la referencia al objeto original se elimina)


//---------------

//Symbol

// Creación de símbolos
const simbolo1 = Symbol();
const simbolo2 = Symbol("descripcion");

// Símbolos como identificadores de propiedades únicas en objetos
const ID = Symbol("id");
const persona = {
  [ID]: 1,
  nombre: "Juan",
  edad: 30,
};

console.log(persona[ID]); // Resultado: 1

// No se muestra el símbolo en el for...in o for...of
for (let key in persona) {
  console.log(key); // Resultado: "nombre", "edad" (el símbolo ID no se muestra)
}

// Obtener todos los símbolos de un objeto
const simbolosObjeto = Object.getOwnPropertySymbols(persona);
console.log(simbolosObjeto); // Resultado: [Symbol(id)]

// Comprobación de igualdad de símbolos
const simbolo3 = Symbol("otra descripcion");
console.log(simbolo1 === simbolo2); // Resultado: false
console.log(simbolo2 === simbolo3); // Resultado: false

// Uso de símbolos en conjunción con propiedades no simbólicas
const edadSimbolo = Symbol("edad");
const personaSimbolos = {
  [edadSimbolo]: 30,
  nombre: "Ana",
};

console.log(personaSimbolos[edadSimbolo]); // Resultado: 30


//---------------




/*.........................*/

//Operadores



//---------------



/*.........................*/

//Template literals




/*.........................*/

//Propiedades




/*.........................*/

//Metodos

