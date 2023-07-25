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

//Objetos

/*

Formas de crear un objeto: 

Usando la sintaxis de objetos literales:

	const persona = {
	  nombre: "Juan",
	  edad: 30,
	  ciudad: "Madrid"
	};


Usando el constructor object(): 

	const persona = new Object();
	persona.nombre = "Juan";
	persona.edad = 30;
	persona.ciudad = "Madrid";
		

Usando funciones constructoras o clases (sintaxis anterior a ES6):

	function Persona(nombre, edad, ciudad) {

	  this.nombre = nombre;
	  this.edad = edad;
	  this.ciudad = ciudad;
	}

	const persona = new Persona("Juan", 30, "Madrid");

*/

// Creación de un objeto literal
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  hobbies: ["correr", "leer", "viajar"],
  direccion: {
    calle: "Calle Mayor",
    numero: 123,
    ciudad: "Madrid"
  },
  saludar: function() {
    console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
  }
};

// Acceso a propiedades del objeto
console.log(persona.nombre); // Resultado: "Juan"
console.log(persona.edad);   // Resultado: 30
console.log(persona.hobbies); // Resultado: ["correr", "leer", "viajar"]
console.log(persona.direccion.calle); // Resultado: "Calle Mayor"

// Modificación de propiedades
persona.edad = 31;
persona.ciudad = "Barcelona";
console.log(persona); // Resultado: {nombre: "Juan", edad: 31, ciudad: "Barcelona", ...}

// Agregar nuevas propiedades
persona.profesion = "ingeniero";
console.log(persona); // Resultado: {nombre: "Juan", edad: 31, ciudad: "Barcelona", ..., profesion: "ingeniero"}

// Eliminar propiedades
delete persona.hobbies;
console.log(persona); // Resultado: {nombre: "Juan", edad: 31, ciudad: "Barcelona", ..., profesion: "ingeniero"}

// Ejecutar métodos del objeto
persona.saludar(); // Resultado: ¡Hola! Mi nombre es Juan.

// Iterar sobre las propiedades del objeto
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}
/* Resultado:
nombre: Juan
edad: 31
ciudad: Barcelona
...
profesion: ingeniero
*/

// Obtener todas las claves (propiedades) del objeto
const claves = Object.keys(persona);
console.log(claves); // Resultado: ["nombre", "edad", "ciudad", ..., "profesion"]

// Obtener todos los valores del objeto
const valores = Object.values(persona);
console.log(valores); // Resultado: ["Juan", 31, "Barcelona", ..., "ingeniero"]

// Verificar si una propiedad existe en el objeto
console.log("nombre" in persona); // Resultado: true
console.log("telefono" in persona); // Resultado: false


//---------------
//Ejemplo 2

// Definimos un objeto prototipo
let animal = {
  tipo: 'desconocido',
  emitirSonido: function() {
    console.log('El animal hace un sonido.');
  }
};

// Creamos un nuevo objeto "perro" que hereda del objeto prototipo "animal"
let perro = Object.create(animal);
perro.tipo = 'perro';
perro.ladrar = function() {
  console.log('Guau, guau!');
};

// Creamos otro nuevo objeto "gato" que también hereda del objeto prototipo "animal"
let gato = Object.create(animal);
gato.tipo = 'gato';
gato.maullar = function() {
  console.log('Miau, miau!');
};

// Probamos los objetos "perro" y "gato"
perro.emitirSonido(); // Resultado: El animal hace un sonido. (Heredado del prototipo "animal")
perro.ladrar(); // Resultado: Guau, guau!

gato.emitirSonido(); // Resultado: El animal hace un sonido. (Heredado del prototipo "animal")
gato.maullar(); // Resultado: Miau, miau!




/*.........................*/

//Operadores o tipo de operadores o tipo de dato operador

//Aritméticos

let numero1 = 10;
let numero2 = 5;

// Operador de suma (+)
let suma = numero1 + numero2;
console.log(suma); // Resultado: 15

// Operador de resta (-)
let resta = numero1 - numero2;
console.log(resta); // Resultado: 5

// Operador de multiplicación (*)
let multiplicacion = numero1 * numero2;
console.log(multiplicacion); // Resultado: 50

// Operador de división (/)
let division = numero1 / numero2;
console.log(division); // Resultado: 2

// Operador de módulo (%) - devuelve el resto de la división
let resto = numero1 % numero2;
console.log(resto); // Resultado: 0 (10 dividido entre 5 da como resultado 2, sin resto)

// Combinación de operadores aritméticos
let resultado = (numero1 + numero2) * (numero1 - numero2);
console.log(resultado); // Resultado: 75 (El resultado de la suma es 15 y de la resta es 5, 15 * 5 = 75)



//---------------

//Asignación

// Operador de asignación simple (=)
let x = 10;
console.log(x); // Resultado: 10

// Operadores de asignación combinada
let y = 5;

y += 3; // Equivalente a: y = y + 3;
console.log(y); // Resultado: 8

y -= 2; // Equivalente a: y = y - 2;
console.log(y); // Resultado: 6

y *= 2; // Equivalente a: y = y * 2;
console.log(y); // Resultado: 12

y /= 3; // Equivalente a: y = y / 3;
console.log(y); // Resultado: 4

y %= 2; // Equivalente a: y = y % 2;
console.log(y); // Resultado: 0

// Operador de asignación con otros tipos de datos
let mensaje = "Hola ";
mensaje += "Mundo";
console.log(mensaje); // Resultado: "Hola Mundo"

let edad = 25;
edad += " años";
console.log(edad); // Resultado: "25 años"



//---------------

//Comparación

let numero1 = 10;
let numero2 = 5;

// Operadores de igualdad (== y ===)
console.log(numero1 == numero2); // Resultado: false (comparación de valor)
console.log(numero1 === numero2); // Resultado: false (comparación de valor y tipo de dato)

let texto1 = "10";
console.log(numero1 == texto1); // Resultado: true (comparación de valor, se convierte el número a string)
console.log(numero1 === texto1); // Resultado: false (comparación de valor y tipo, son de tipos diferentes)

// Operadores de desigualdad (!= y !==)
console.log(numero1 != numero2); // Resultado: true (comparación de valor)
console.log(numero1 !== numero2); // Resultado: true (comparación de valor y tipo de dato)

console.log(numero1 != texto1); // Resultado: false (comparación de valor)
console.log(numero1 !== texto1); // Resultado: true (comparación de valor y tipo)

// Operadores de comparación (<, >, <=, >=)
console.log(numero1 < numero2); // Resultado: false
console.log(numero1 > numero2); // Resultado: true
console.log(numero1 <= numero2); // Resultado: false
console.log(numero1 >= numero2); // Resultado: true

// Comparación de cadenas de texto
let cadena1 = "Hola";
let cadena2 = "Mundo";
console.log(cadena1 < cadena2); // Resultado: true (compara según orden alfabético)



//---------------

//Lógicos

let edad = 25;
let tieneLicencia = true;
let tieneTrabajo = false;

// Operador AND lógico (&&)
console.log(edad >= 18 && tieneLicencia); // Resultado: true (ambas condiciones son verdaderas)
console.log(edad >= 18 && tieneTrabajo); // Resultado: false (una de las condiciones es falsa)

// Operador OR lógico (||)
console.log(edad >= 18 || tieneLicencia); // Resultado: true (al menos una de las condiciones es verdadera)
console.log(edad >= 18 || tieneTrabajo); // Resultado: true (al menos una de las condiciones es verdadera)
console.log(tieneLicencia || tieneTrabajo); // Resultado: true (ambas condiciones son falsas)

// Operador NOT lógico (!)
let esMenorDeEdad = !(edad >= 18);
console.log(esMenorDeEdad); // Resultado: false (la condición se invierte)

// Combinación de operadores lógicos
let resultado = (edad >= 18 && tieneLicencia) || tieneTrabajo;
console.log(resultado); // Resultado: true (una de las condiciones es verdadera)




//---------------

//Concatenación

// Operador de concatenación (+)
let mensaje = "Hola ";
let nombre = "Juan";
let saludo = mensaje + nombre;
console.log(saludo); // Resultado: "Hola Juan"

// Concatenación con números (conversión implícita a cadena)
let numero = 10;
let texto = "El número es: " + numero;
console.log(texto); // Resultado: "El número es: 10"

// Concatenación de cadenas con otros tipos de datos
let edad = 30;
let informacion = "Nombre: " + nombre + ", Edad: " + edad;
console.log(informacion); // Resultado: "Nombre: Juan, Edad: 30"

// Utilizando el método concat()
let cadena1 = "Hola";
let cadena2 = "Mundo";
let resultadoConcat = cadena1.concat(" ", cadena2);
console.log(resultadoConcat); // Resultado: "Hola Mundo"

// Utilizando template literals (plantillas de cadena)
let producto = "Smartphone";
let precio = 250;
let descripcion = `El ${producto} tiene un precio de ${precio} dólares.`;
console.log(descripcion); // Resultado: "El Smartphone tiene un precio de 250 dólares."

// Utilizando el método join() para concatenar elementos de un array
let frutas = ["manzana", "naranja", "plátano"];
let listaFrutas = frutas.join(", ");
console.log(listaFrutas); // Resultado: "manzana, naranja, plátano"



//---------------

//Ternarios

// Ejemplo 1: Verificar si un número es par o impar
let numero = 10;
let esPar = numero % 2 === 0 ? true : false;
console.log(esPar); // Resultado: true

// Ejemplo 2: Calificar si un estudiante aprobó o reprobó el examen
let calificacion = 75;
let resultadoExamen = calificacion >= 60 ? "Aprobado" : "Reprobado";
console.log(resultadoExamen); // Resultado: "Aprobado"

// Ejemplo 3: Asignar un mensaje dependiendo de una condición
let esDeDia = true;
let mensaje = esDeDia ? "Buenos días" : "Buenas noches";
console.log(mensaje); // Resultado: "Buenos días"

// Ejemplo 4: Validar un input vacío
let texto = "";
let mensajeValidacion = texto === "" ? "El campo está vacío" : "Texto ingresado";
console.log(mensajeValidacion); // Resultado: "El campo está vacío"



/*.........................*/

//Built-in Objects

//Object

//Array

//String

//Number

//Boolean

let boolValue = true;

// Utilizando el método toString()
let boolString = boolValue.toString();
console.log(boolString); // Resultado: "true"

// Utilizando el método valueOf()
let boolPrimitive = boolValue.valueOf();
console.log(boolPrimitive); // Resultado: true

// Creando una instancia del objeto Boolean
let boolObject = new Boolean(boolValue);
console.log(boolObject); // Resultado: [Boolean: true]

//Date

//RegExp

// Creando una expresión regular para buscar la palabra "hola" sin importar mayúsculas y minúsculas
let regex = /hola/i;

// Verificando si la expresión regular encuentra coincidencia en una cadena
let texto = "Hola mundo";
let resultado = regex.test(texto);
console.log(resultado); // Resultado: true

// Buscando coincidencias en una cadena y obteniendo los resultados
let texto2 = "Hola mundo, hola JavaScript";
let resultado2 = regex.exec(texto2);
console.log(resultado2); // Resultado: ["Hola", index: 0, input: "Hola mundo, hola JavaScript", groups: undefined]

//Function

// Creando una función utilizando el constructor Function()
let sumar = new Function('a', 'b', 'return a + b;');
console.log(sumar(5, 3)); // Resultado: 8

// Utilizando el método apply()
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludar.apply(null, ['Juan']); // Resultado: ¡Hola, Juan!

// Utilizando el método call()
function mostrarInformacion(nombre, edad) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

mostrarInformacion.call(null, 'Ana', 30); // Resultado: Nombre: Ana, Edad: 30

// Utilizando el método bind()
let persona = {
  nombre: 'Luis',
  edad: 25,
};

function presentar() {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
}

let funcionPresentar = presentar.bind(persona);
funcionPresentar(); // Resultado: Hola, soy Luis y tengo 25 años.

// Utilizando el método toString()
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar.toString()); // Resultado: function multiplicar(a, b) { return a * b; }


//JSON

// Utilizando JSON.stringify() para convertir un objeto en una cadena JSON
let persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

let personaJSON = JSON.stringify(persona);
console.log(personaJSON);
// Resultado: '{"nombre":"Juan","edad":30,"ciudad":"Madrid"}'

// Utilizando JSON.parse() para convertir una cadena JSON en un objeto
let mascotaJSON = '{"nombre":"Luna","edad":5,"tipo":"perro"}';
let mascota = JSON.parse(mascotaJSON);
console.log(mascota);
// Resultado: { nombre: 'Luna', edad: 5, tipo: 'perro' }


//---------------



/*.........................*/

//Objetos avanzado: 

//Object prototype

let persona = {
  nombre: "Juan",
  edad: 30,
};

// Agregar un método al prototipo del objeto persona
persona.saludar = function () {
  console.log(`¡Hola, soy ${this.nombre}!`);
};

persona.saludar(); // Resultado: ¡Hola, soy Juan!


//El prototipo de un objeto se puede acceder a través de la propiedad __proto__ del objeto, pero es más común utilizar el método Object.getPrototypeOf(obj)
let prototipoPersona = Object.getPrototypeOf(persona);
console.log(prototipoPersona === Object.prototype); // Resultado: true


// Definimos una función constructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregamos un método al prototipo de Persona
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

// Creamos una instancia de Persona
let persona1 = new Persona('Juan', 30);
let persona2 = new Persona('María', 25);

// Las instancias de Persona heredan el método saludar del prototipo
persona1.saludar(); // Resultado: Hola, soy Juan y tengo 30 años.
persona2.saludar(); // Resultado: Hola, soy María y tengo 25 años.


//---------------

//Prototypal Inheritance

// Definimos un objeto prototipo
let animal = {
  tipo: 'desconocido',
  emitirSonido: function() {
    console.log('El animal hace un sonido.');
  }
};

// Creamos un objeto perro que hereda del objeto prototipo animal
let perro = Object.create(animal);
perro.tipo = 'perro';
perro.emitirSonido(); // Resultado: El perro hace un sonido.

// Creamos otro objeto gato que también hereda del objeto prototipo animal
let gato = Object.create(animal);
gato.tipo = 'gato';
gato.emitirSonido(); // Resultado: El gato hace un sonido.






/*.........................*/

//Template literals




//---------------


/*.........................*/

//Propiedades



//---------------



/*.........................*/

//Metodos



//---------------

