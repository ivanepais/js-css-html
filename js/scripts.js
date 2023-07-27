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

//Type casting (conversión de tipos)

//Implicita: Cuando le pasas un tipo de dato que JS no espera por su lógica y lo convierte en otro.
	
//Operaciones aritméticas

let x = "5"; // Tipo: string
let y = 2;   // Tipo: number

let suma = x + y; // Aquí, x se convierte implícitamente a número y se realiza la suma
console.log(suma); // Resultado: 7


//Comparación

let a = 5;   // Tipo: number
let b = "5"; // Tipo: string

console.log(a == b); // Aquí, b se convierte implícitamente a número y la comparación es verdadera


//Lógicas

let c = 0;   // Tipo: number
let d = "hola"; // Tipo: string

console.log(c && d); // Aquí, c se convierte implícitamente a booleano y la expresión evalúa a 0


//Funciones

function sumar(a, b) {
  return a + b;
}

let resultado = sumar("2", 3); // Aquí, "2" se convierte implícitamente a número antes de sumar
console.log(resultado); // Resultado: 5


//---------------

//Explicita: Necesidad de asegurarte un tipo de dato específico para el resultado de una operación.

//Number

let numero = 42; // Tipo: number

let cadena = String(numero); // Conversión a String
console.log(cadena); // Resultado: "42"
console.log(typeof cadena); // Resultado: "string"


let numero = 0; // Tipo: number

let booleano = Boolean(numero); // Conversión a Boolean
console.log(booleano); // Resultado: false
console.log(typeof booleano); // Resultado: "boolean"


let numero = 10; // Tipo: number

let indefinido = undefined; // Tipo: undefined

indefinido = numero; // Conversión a Undefined
console.log(indefinido); // Resultado: 10
console.log(typeof indefinido); // Resultado: "number"


let numero = 5; // Tipo: number

let nulo = null; // Tipo: object

nulo = numero; // Conversión a Null
console.log(nulo); // Resultado: 5
console.log(typeof nulo); // Resultado: "number"


//---------------

//String

let cadena = "42"; // Tipo: string

let numero = Number(cadena); // Conversión a Number
console.log(numero); // Resultado: 42
console.log(typeof numero); // Resultado: "number"


let cadena = "true"; // Tipo: string

let booleano = Boolean(cadena); // Conversión a Boolean
console.log(booleano); // Resultado: true
console.log(typeof booleano); // Resultado: "boolean"


let cadena = "hola"; // Tipo: string

let indefinido = undefined; // Tipo: undefined

indefinido = cadena; // Conversión a Undefined
console.log(indefinido); // Resultado: "hola"
console.log(typeof indefinido); // Resultado: "string"


let cadena = "null"; // Tipo: string

let nulo = null; // Tipo: object

nulo = cadena; // Conversión a Null
console.log(nulo); // Resultado: "null"
console.log(typeof nulo); // Resultado: "string"


let cadena = "Hola, soy un objeto"; // Tipo: string

let objeto = {}; // Tipo: object

objeto = cadena; // Conversión a Object
console.log(objeto); // Resultado: "Hola, soy un objeto"
console.log(typeof objeto); // Resultado: "string"



//---------------

//Boolean

let booleano = true; // Tipo: boolean

let numero = Number(booleano); // Conversión a Number
console.log(numero); // Resultado: 1
console.log(typeof numero); // Resultado: "number"


let booleano = false; // Tipo: boolean

let cadena = String(booleano); // Conversión a String
console.log(cadena); // Resultado: "false"
console.log(typeof cadena); // Resultado: "string"


let booleano = true; // Tipo: boolean

let indefinido = undefined; // Tipo: undefined

indefinido = booleano; // Conversión a Undefined
console.log(indefinido); // Resultado: true
console.log(typeof indefinido); // Resultado: "boolean"


let booleano = false; // Tipo: boolean

let nulo = null; // Tipo: object

nulo = booleano; // Conversión a Null
console.log(nulo); // Resultado: false
console.log(typeof nulo); // Resultado: "boolean"



//---------------

//Undefined

let indefinido = undefined; // Tipo: undefined

let numero = Number(indefinido); // Conversión a Number
console.log(numero); // Resultado: NaN (Not-a-Number)
console.log(typeof numero); // Resultado: "number"


let indefinido = undefined; // Tipo: undefined

let cadena = String(indefinido); // Conversión a String
console.log(cadena); // Resultado: "undefined"
console.log(typeof cadena); // Resultado: "string"


let indefinido = undefined; // Tipo: undefined

let booleano = Boolean(indefinido); // Conversión a Boolean
console.log(booleano); // Resultado: false
console.log(typeof booleano); // Resultado: "boolean"


let indefinido = undefined; // Tipo: undefined

let nulo = null; // Tipo: object

nulo = indefinido; // Conversión a Null
console.log(nulo); // Resultado: undefined
console.log(typeof nulo); // Resultado: "undefined"



//---------------

//Null

let nulo = null; // Tipo: object

let numero = Number(nulo); // Conversión a Number
console.log(numero); // Resultado: 0
console.log(typeof numero); // Resultado: "number"


let nulo = null; // Tipo: object

let cadena = String(nulo); // Conversión a String
console.log(cadena); // Resultado: "null"
console.log(typeof cadena); // Resultado: "string"


let nulo = null; // Tipo: object

let booleano = Boolean(nulo); // Conversión a Boolean
console.log(booleano); // Resultado: false
console.log(typeof booleano); // Resultado: "boolean"


let nulo = null; // Tipo: object

let indefinido = undefined; // Tipo: undefined

indefinido = nulo; // Conversión a Undefined
console.log(indefinido); // Resultado: null
console.log(typeof indefinido); // Resultado: "object"



//---------------

//Object

let persona = {
  nombre: "Juan",
  edad: 30,
};

let cadena = JSON.stringify(persona); // Conversión a String utilizando JSON.stringify()
console.log(cadena); // Resultado: '{"nombre":"Juan","edad":30}'
console.log(typeof cadena); // Resultado: "string"


let producto = {
  nombre: "Camiseta",
  precio: 25.99,
};

let precioNumerico = producto.precio; // Obtener el valor numérico directamente desde el objeto
console.log(precioNumerico); // Resultado: 25.99
console.log(typeof precioNumerico); // Resultado: "number"


let automovil = {
  marca: "Toyota",
  modelo: "Corolla",
};

let esValido = Boolean(automovil.marca); // Convertir la propiedad a Boolean
console.log(esValido); // Resultado: true
console.log(typeof esValido); // Resultado: "boolean"


//---------------

//Coerción: Obligar a cambiar de tipo de dato a un objeto, dato. 
//Es lo que hace JS en la conversión implícita. 

/*Implicit Type Conversion is also known 
(and more commonly referred to) as Coercion while 
Explicit Type Conversion is also known 
as Type Casting*/


//Null vs NaN

/*

null se utiliza para indicar explícitamente 
la ausencia de valor, especialmente cuando deseamos 
"reiniciar" una variable o propiedad 
que anteriormente tenía un valor asignado.

NaN se utiliza para indicar que un resultado 
de una operación aritmética no es válido 
o no se puede determinar debido a la presencia 
de valores no numéricos

NaN puede surgir cuando intentamos dividir 
una cadena de texto por un número, o cuando 
realizamos operaciones matemáticas con valores 
no numéricos.

NaN es de tipo number en JavaScript.

Null es object. 

Puedes usar funciones como isNaN() para verificar
si un valor es NaN, y el operador de igualdad 
estricta (===) para comprobar si una variable 
es igual a null. Además, ten en cuenta que null 
es un valor asignable

mientras que NaN es un valor que surge como resultado 
de operaciones no válidas.

*/

let miVariable = null; // Se asigna explícitamente el valor null para indicar la ausencia de valor
console.log(miVariable); // Resultado: null
console.log(typeof miVariable); // Resultado: "object"


let miVariable = null; // Se asigna explícitamente el valor null para indicar la ausencia de valor
console.log(miVariable); // Resultado: null
console.log(typeof miVariable); // Resultado: "object"



/*.........................*/

//Data structures

/*

Tipos de datos primitivos: 

	Number, String, Boolean, Undefined, Null, Symbol

Objetos: 
	
	Clases, prototipos, herencia

indexed collections (indice/orden):
	
	array, typed array


JSON (structured data)


keyed collections (clave-valor/orden): 
	
	map, set, weak map, weak set
	
*/

//---------------

//Objetos

let persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true,
  direcciones: ["Calle A", "Calle B"],
  contacto: {
    telefono: "123456789",
    correo: "juan@example.com"
  },
  saludar: function() {
    console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
  }
};





//---------------

//JSON

{
  "nombre": "Juan",
  "edad": 30,
  "esEstudiante": true,
  "direcciones": ["Calle A", "Calle B"],
  "contacto": {
    "telefono": "123456789",
    "correo": "juan@example.com"
  }
}


// Creación de un objeto JSON
let persona = {
  "nombre": "Juan",
  "edad": 30,
  "esEstudiante": true,
  "direcciones": ["Calle A", "Calle B"],
  "contacto": {
    "telefono": "123456789",
    "correo": "juan@example.com"
  }
};

// Acceso a las propiedades del objeto
console.log(persona.nombre); // Resultado: "Juan"
console.log(persona.edad); // Resultado: 30
console.log(persona.esEstudiante); // Resultado: true
console.log(persona.direcciones[0]); // Resultado: "Calle A"
console.log(persona.contacto.telefono); // Resultado: "123456789"



//objeto
let persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true
};

// Convertir el objeto a JSON
let personaJSON = JSON.stringify(persona);

console.log(personaJSON);
// Resultado: '{"nombre":"Juan","edad":30,"esEstudiante":true}'


//json
let personaJSON = '{"nombre":"Juan","edad":30,"esEstudiante":true}';

// Parsear el JSON a un objeto JavaScript
let persona = JSON.parse(personaJSON);

console.log(persona.nombre); // Resultado: "Juan"
console.log(persona.edad); // Resultado: 30
console.log(persona.esEstudiante); // Resultado: true



// Ejemplo de enviar un JSON a través de una API utilizando fetch()
let data = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true
};

fetch('https://mi-api.com/persona', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(responseData => {
  console.log(responseData);
})
.catch(error => {
  console.error('Error:', error);
});



//---------------

//Array

let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "naranja", "plátano"];
let vacio = [];

console.log(frutas[0]); // Resultado: "manzana"
console.log(frutas[1]); // Resultado: "naranja"
console.log(frutas[2]); // Resultado: "plátano"


//Añadir elementos al final del array con push():
let frutas = ["manzana", "naranja", "plátano"];
frutas[1] = "limón";
console.log(frutas); // Resultado: ["manzana", "limón", "plátano"]


//Eliminar el último elemento del array con pop():
let frutas = ["manzana", "naranja", "plátano"];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Resultado: "plátano"
console.log(frutas); // Resultado: ["manzana", "naranja"]


//Añadir elementos al principio del array con unshift():
let frutas = ["naranja", "plátano"];
frutas.unshift("manzana");
console.log(frutas); // Resultado: ["manzana", "naranja", "plátano"]


//Eliminar el primer elemento del array con shift():
let frutas = ["manzana", "naranja", "plátano"];
let primeraFruta = frutas.shift();
console.log(primeraFruta); // Resultado: "manzana"
console.log(frutas); // Resultado: ["naranja", "plátano"]


//Encontrar la posición de un elemento en el array con indexOf():
let frutas = ["manzana", "naranja", "plátano"];
let posicion = frutas.indexOf("naranja");
console.log(posicion); // Resultado: 1


//Eliminar elementos específicos del array con splice():
let frutas = ["manzana", "naranja", "plátano"];
frutas.splice(1, 1); // Elimina un elemento desde la posición 1
console.log(frutas); // Resultado: ["manzana", "plátano"]


//Recorrer un array con un bucle for:
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// Resultado:
// 1
// 2
// 3
// 4
// 5


//Ordenar elementos del array con sort():
let frutas = ["manzana", "naranja", "plátano"];
frutas.sort();
console.log(frutas); // Resultado: ["manzana", "naranja", "plátano"]


//Invertir el orden de los elementos del array con reverse():
let frutas = ["manzana", "naranja", "plátano"];
frutas.reverse();
console.log(frutas); // Resultado: ["plátano", "naranja", "manzana"]



//---------------

//Typed Array

let numeros = new Int8Array([10, 20, 30]);

console.log(numeros[0]); // Resultado: 10
console.log(numeros[1]); // Resultado: 20
console.log(numeros[2]); // Resultado: 30


// Crear un Typed Array
let numeros = new Int16Array([10, 20, 30, 40]);

// Acceder a elementos del Typed Array mediante índices
console.log(numeros[0]); // Resultado: 10
console.log(numeros[1]); // Resultado: 20

// Modificar elementos del Typed Array
numeros[2] = 35;
console.log(numeros); // Resultado: Int16Array [ 10, 20, 35, 40 ]

// Obtener la longitud del Typed Array con .length
console.log(numeros.length); // Resultado: 4

// Añadir elementos al final del Typed Array con .set()
let nuevosNumeros = new Int16Array([50, 60]);
numeros.set(nuevosNumeros);
console.log(numeros); // Resultado: Int16Array [ 10, 20, 35, 40, 50, 60 ]

// Eliminar elementos del Typed Array con .subarray()
let subArray = numeros.subarray(2, 4);
console.log(subArray); // Resultado: Int16Array [ 35, 40 ]

// Recorrer el Typed Array con un bucle for...of
for (let numero of numeros) {
  console.log(numero);
}
// Resultado:
// 10
// 20
// 35
// 40

// Ordenar elementos del Typed Array con .sort()
numeros.sort();
console.log(numeros); // Resultado: Int16Array [ 10, 20, 35, 40, 50, 60 ]

// Buscar un elemento en el Typed Array con .find()
let encontrado = numeros.find((numero) => numero > 30);
console.log(encontrado); // Resultado: 35

// Filtrar elementos del Typed Array con .filter()
let filtrados = numeros.filter((numero) => numero > 30);
console.log(filtrados); // Resultado: Int16Array [ 35, 40, 50, 60 ]

// Mapear elementos del Typed Array con .map()
let multiplicados = numeros.map((numero) => numero * 2);
console.log(multiplicados); // Resultado: Int16Array [ 20, 40, 70, 80, 100, 120 ]




//---------------

//Map

let mapa = new Map();
mapa.set("nombre", "Juan");
mapa.set(30, "treinta");
mapa.set(true, "esEstudiante");


//crear map
let empleados = new Map();

//Agregar elementos con .set():
empleados.set("001", "Juan");
empleados.set("002", "María");
empleados.set("003", "Carlos");

//Obtener un valor con .get() mediante la clave:
console.log(empleados.get("001")); // Resultado: "Juan"

//Verificar si una clave existe con .has():
console.log(empleados.has("002")); // Resultado: true
console.log(empleados.has("004")); // Resultado: false

//Obtener la cantidad de elementos con .size:
console.log(empleados.size); // Resultado: 3

//Eliminar un elemento con .delete() mediante la clave:
empleados.delete("003");
console.log(empleados.size); // Resultado: 2

//Recorrer los elementos con for...of:
for (let [clave, valor] of empleados) {
  console.log(clave, valor);
}
// Resultado:
// "001" "Juan"
// "002" "María"

//Recorrer las claves con .keys():
for (let clave of empleados.keys()) {
  console.log(clave);
}
// Resultado:
// "001"
// "002"

//Recorrer los valores con .values():
for (let valor of empleados.values()) {
  console.log(valor);
}
// Resultado:
// "Juan"
// "María"

//Recorrer los pares clave-valor con .entries():
for (let [clave, valor] of empleados.entries()) {
  console.log(clave, valor);
}
// Resultado:
// "001" "Juan"
// "002" "María"

//Eliminar todos los elementos con .clear():
empleados.clear();
console.log(empleados.size); // Resultado: 0 (El Map está vacío)

//Convertir un Array de pares clave-valor a un Map:
let arrayPares = [["a", 1], ["b", 2], ["c", 3]];
let mapa = new Map(arrayPares);
console.log(mapa); // Resultado: Map { 'a' => 1, 'b' => 2, 'c' => 3 }


//ejemplos pares

// Crear un Set vacío
let miSet = new Set();

// Crear un Set con valores iniciales
let numeros = new Set([1, 2, 3, 4, 5]);
let frutas = new Set(["manzana", "naranja", "plátano"]);

//Agregar elementos
let miSet = new Set();

miSet.add("Hola");
miSet.add(42);
miSet.add({ nombre: "Juan", edad: 30 });

//Comprobar si un valor existe en un Set:
console.log(miSet.has("Hola")); // Resultado: true
console.log(miSet.has(42)); // Resultado: true
console.log(miSet.has({ nombre: "Juan", edad: 30 })); // Resultado: false (los objetos se comparan por referencia)

//Eliminar un elemento de un Set:
miSet.delete(42);

//Obtener la cantidad de elementos en un Set:
console.log(miSet.size); // Resultado: 2 (después de eliminar el valor 42)

//Recorrer los elementos de un Set:
miSet.forEach((valor) => {
  console.log(valor);
});
// Resultado:
// "Hola"
// { nombre: "Juan", edad: 30 }

//Limpiar todos los elementos de un Set:
miSet.clear();
console.log(miSet.size); // Resultado: 0 (el Set está vacío)



//---------------

//Set

// Crear un Set vacío
let miSet = new Set();

// Crear un Set con valores iniciales
let numeros = new Set([1, 2, 3, 4, 5]);
let frutas = new Set(["manzana", "naranja", "plátano"]);


//Crear un Set:
let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(3);

//Agregar elementos con .add():
let frutas = new Set();
frutas.add("manzana");
frutas.add("naranja");
frutas.add("plátano");

//Eliminar elementos con .delete():
frutas.delete("naranja");

//Verificar si un elemento existe con .has():
console.log(frutas.has("manzana")); // Resultado: true
console.log(frutas.has("uva")); // Resultado: false

//Obtener la cantidad de elementos con .size:
console.log(frutas.size); // Resultado: 2 (Después de eliminar "naranja")

//Recorrer los elementos con for...of:
for (let fruta of frutas) {
  console.log(fruta);
}
// Resultado:
// "manzana"
// "plátano"

//Eliminar todos los elementos con .clear():
frutas.clear();
console.log(frutas.size); // Resultado: 0 (El Set está vacío)

//Convertir un Array a un Set y viceversa:
let numerosArray = [1, 2, 3, 2, 1];
let numerosSet = new Set(numerosArray);
console.log(numerosSet); // Resultado: Set { 1, 2, 3 }

let numerosUnicos = Array.from(numerosSet);
console.log(numerosUnicos); // Resultado: [1, 2, 3]


//Realizar operaciones matemáticas entre Sets:
let conjuntoA = new Set([1, 2, 3]);
let conjuntoB = new Set([3, 4, 5]);

let union = new Set([...conjuntoA, ...conjuntoB]);
console.log(union); // Resultado: Set { 1, 2, 3, 4, 5 }

let interseccion = new Set([...conjuntoA].filter((x) => conjuntoB.has(x)));
console.log(interseccion); // Resultado: Set { 3 }

let diferencia = new Set([...conjuntoA].filter((x) => !conjuntoB.has(x)));
console.log(diferencia); // Resultado: Set { 1, 2 }


//ejemplos pares

// Crear un Map vacío
let miMapa = new Map();

// Crear un Map con pares clave-valor iniciales
let empleados = new Map();
empleados.set("001", "Juan");
empleados.set("002", "María");
empleados.set("003", "Carlos");


//Agregar pares clave-valor a un Map:
let miMapa = new Map();

miMapa.set("nombre", "Juan");
miMapa.set(42, "cuarenta y dos");
miMapa.set({ id: 1 }, "Valor asociado a objeto");

//Obtener un valor a través de una clave en un Map:
console.log(miMapa.get("nombre")); // Resultado: "Juan"
console.log(miMapa.get(42)); // Resultado: "cuarenta y dos"

let objeto = { id: 1 };
console.log(miMapa.get(objeto)); // Resultado: "Valor asociado a objeto" (los objetos se comparan por referencia)

//Comprobar si una clave existe en un Map:
console.log(miMapa.has("nombre")); // Resultado: true
console.log(miMapa.has("apellido")); // Resultado: false

//Eliminar un par clave-valor de un Map:
miMapa.delete("nombre");

//Obtener la cantidad de pares clave-valor en un Map:
console.log(miMapa.size); // Resultado: 2 (después de eliminar el par "nombre")

//Recorrer los pares clave-valor de un Map:
miMapa.forEach((valor, clave) => {
  console.log(clave, valor);
});
// Resultado:
// 42 "cuarenta y dos"
// { id: 1 } "Valor asociado a objeto"

//Limpiar todos los pares clave-valor de un Map:
miMapa.clear();
console.log(miMapa.size); // Resultado: 0 (el Map está vacío)


//---------------

//Weak map

let weakMap = new WeakMap();

let clave1 = {};
let clave2 = {};

weakMap.set(clave1, "Valor asociado a clave1");
weakMap.set(clave2, "Valor asociado a clave2");

console.log(weakMap.get(clave1)); // Resultado: "Valor asociado a clave1"

clave1 = null; // Eliminar referencia a la clave1
console.log(weakMap.get(clave1)); // Resultado: undefined, el objeto clave1 fue recolectado por el recolector de basura


//Creación de un WeakMap:
let empleados = new WeakMap();

//Agregar pares clave-valor a un WeakMap:
let empleado1 = { nombre: "Juan" };
let empleado2 = { nombre: "María" };

empleados.set(empleado1, "Departamento de Ventas");
empleados.set(empleado2, "Departamento de Finanzas");

//Obtener un valor a través de una clave en un WeakMap:
console.log(empleados.get(empleado1)); // Resultado: "Departamento de Ventas"
console.log(empleados.get(empleado2)); // Resultado: "Departamento de Finanzas"

//Comprobar si una clave existe en un WeakMap:
console.log(empleados.has(empleado1)); // Resultado: true
console.log(empleados.has({ nombre: "Juan" })); // Resultado: false (los objetos se comparan por referencia)

//Eliminar un par clave-valor de un WeakMap:
empleados.delete(empleado1);


/*
los WeakMaps no son iterables y no tienen métodos como size o forEach().
Además, debido a que las claves en un WeakMap
son "débiles" o "weak", no se pueden utilizar
todas las operaciones disponibles en un Map tradicional, 
como la iteración de claves y valores, o la obtención del tamaño del WeakMap.

*/


//
let empleado3 = { nombre: "Carlos" };

empleados.set(empleado3, "Departamento de Recursos Humanos");

// Cuando ya no hay otras referencias a empleado3, el objeto y el par clave-valor se liberarán de memoria.
empleado3 = null;


/*
Dado que los WeakMaps utilizan "claves débiles" 
(weak keys), si un objeto utilizado como clave 
ya no tiene ninguna otra referencia en el código, 
el recolector de basura de JavaScript lo liberará
automáticamente de memoria, y el par clave-valor
asociado también se eliminará del WeakMap.
*/


//---------------

//Weak set

let weakSet = new WeakSet();

let objeto1 = {};
let objeto2 = {};

weakSet.add(objeto1);
weakSet.add(objeto2);

console.log(weakSet.has(objeto1)); // Resultado: true

objeto1 = null; // Eliminar referencia al objeto1

console.log(weakSet.has(objeto1)); // Resultado: false, el objeto1 fue recolectado por el recolector de basura


//Creación de un WeakSet:
let libros = new WeakSet();

//Agregar elementos a un WeakSet:
let libro1 = { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" };
let libro2 = { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" };

libros.add(libro1);
libros.add(libro2);

//Comprobar si un objeto existe en un WeakSet:
console.log(libros.has(libro1)); // Resultado: true
console.log(libros.has({ titulo: "El Principito", autor: "Antoine de Saint-Exupéry" })); // Resultado: false (los objetos se comparan por referencia)

//Eliminar un elemento de un WeakSet:
libros.delete(libro1);

//Liberación de memoria de objetos no referenciados:
let libro3 = { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" };

libros.add(libro3);

// Cuando ya no hay otras referencias a libro3, el objeto se liberará de memoria y el elemento se eliminará del WeakSet.
libro3 = null;

/*
los WeakSets no son iterables y no tienen métodos 
como size o forEach(). Además, debido a que los
elementos en un WeakSet son "débiles" o "weak",
no se pueden utilizar todas las operaciones 
disponibles en un Set tradicional, como la iteración
de elementos, o la obtención del tamaño del WeakSet.
*/

//---------------



/*.........................*/

//Equality comparison

//vagamente igual (==) /looselyEqual/abstract equal

console.log(5 == 5); // Resultado: true (ambos operandos son números y tienen el mismo valor)
console.log(5 == "5"); // Resultado: true (el operando izquierdo es un número y el derecho es un string, JavaScript convierte "5" a número y son iguales)
console.log(5 == true); // Resultado: true (el operando izquierdo es un número y el derecho es un boolean, JavaScript convierte true a 1 y son iguales)

console.log("hello" == "hello"); // Resultado: true (ambos operandos son strings y tienen el mismo valor)
console.log("hello" == "Hello"); // Resultado: false (los strings son sensibles a mayúsculas y minúsculas, por lo que no son iguales)
console.log("hello" == true); // Resultado: false (los strings no son iguales a boolean, JavaScript no puede convertir "hello" a boolean)

console.log(null == null); // Resultado: true (ambos operandos son null)
console.log(null == undefined); // Resultado: true (null y undefined son tratados como iguales en una comparación con "==")

console.log(0 == false); // Resultado: true (JavaScript convierte false a 0 y son iguales)
console.log("" == false); // Resultado: true (JavaScript convierte false a "", un string vacío, y son iguales)
console.log([] == false); // Resultado: true (JavaScript convierte false a 0 y un array vacío también se convierte a 0, por lo que son iguales)

console.log(5 == NaN); // Resultado: false (NaN no es igual a ningún valor, ni siquiera a sí mismo)
console.log(NaN == NaN); // Resultado: false (NaN no es igual a ningún valor, ni siquiera a sí mismo)

console.log(null == 0); // Resultado: false (null no es igual a 0)
console.log(null == ""); // Resultado: false (null no es igual a un string vacío)
console.log(null == false); // Resultado: false (null no es igual a false)

console.log(undefined == 0); // Resultado: false (undefined no es igual a 0)
console.log(undefined == ""); // Resultado: false (undefined no es igual a un string vacío)
console.log(undefined == false); // Resultado: false (undefined no es igual a false)

console.log(true == 1); // Resultado: true (JavaScript convierte true a 1 y son iguales)
console.log(false == 0); // Resultado: true (JavaScript convierte false a 0 y son iguales)
console.log(true == "1"); // Resultado: true (JavaScript convierte true a 1 y el string "1" también se convierte a 1, por lo que son iguales)


//---------------

//vagamente desigual (!=)

console.log(5 != 5); // Resultado: false (5 es igual a 5)
console.log(5 != "5"); // Resultado: false (5 es igual a "5" después de la conversión de tipo)
console.log(0 != false); // Resultado: false (0 es igual a false después de la conversión de tipo)
console.log(null != undefined); // Resultado: false (null y undefined son considerados iguales en la desigualdad abstracta)

console.log("hello" != "world"); // Resultado: true ("hello" no es igual a "world")
console.log("hello" != "Hello"); // Resultado: true (los strings son sensibles a mayúsculas y minúsculas)
console.log(true != 1); // Resultado: false (true es igual a 1 después de la conversión de tipo)
console.log(false != 0); // Resultado: false (false es igual a 0 después de la conversión de tipo)

console.log(5 != NaN); // Resultado: true (NaN no es igual a ningún valor, incluyendo a sí mismo)
console.log(NaN != NaN); // Resultado: true (NaN no es igual a ningún valor, incluyendo a sí mismo)

console.log(null != 0); // Resultado: true (null no es igual a 0)
console.log(null != ""); // Resultado: true (null no es igual a un string vacío)
console.log(null != false); // Resultado: true (null no es igual a false)

console.log(undefined != 0); // Resultado: true (undefined no es igual a 0)
console.log(undefined != ""); // Resultado: true (undefined no es igual a un string vacío)
console.log(undefined != false); // Resultado: true (undefined no es igual a false)

console.log(true != 1); // Resultado: false (true es igual a 1 después de la conversión de tipo)
console.log(false != 0); // Resultado: false (false es igual a 0 después de la conversión de tipo)
console.log(true != "1"); // Resultado: false (true es igual a "1" después de la conversión de tipo)



//---------------

//estrictamente igual(===) /strictlyEqual

console.log(5 === 5); // Resultado: true (ambos operandos son números y tienen el mismo valor y tipo)
console.log(5 === "5"); // Resultado: false (el operando izquierdo es un número y el derecho es un string, son de tipos diferentes)
console.log(5 === true); // Resultado: false (el operando izquierdo es un número y el derecho es un boolean, son de tipos diferentes)

console.log("hello" === "hello"); // Resultado: true (ambos operandos son strings y tienen el mismo valor y tipo)
console.log("hello" === "Hello"); // Resultado: false (los strings son sensibles a mayúsculas y minúsculas, son de valores diferentes)
console.log("hello" === true); // Resultado: false (los strings y los boolean son de tipos diferentes)

console.log(null === null); // Resultado: true (ambos operandos son null y tienen el mismo tipo)
console.log(null === undefined); // Resultado: false (null y undefined son de tipos diferentes)

console.log(0 === false); // Resultado: false (0 es un número y false es un boolean, son de tipos diferentes)
console.log("" === false); // Resultado: false (un string vacío no es igual a false)
console.log([] === false); // Resultado: false (un array no es igual a false)

console.log(5 === NaN); // Resultado: false (NaN no es igual a ningún valor, ni siquiera a sí mismo)
console.log(NaN === NaN); // Resultado: false (NaN no es igual a ningún valor, ni siquiera a sí mismo)

console.log(null === 0); // Resultado: false (null y 0 son de tipos diferentes)
console.log(null === ""); // Resultado: false (null y un string vacío son de tipos diferentes)
console.log(null === false); // Resultado: false (null y false son de tipos diferentes)

console.log(undefined === 0); // Resultado: false (undefined y 0 son de tipos diferentes)
console.log(undefined === ""); // Resultado: false (undefined y un string vacío son de tipos diferentes)
console.log(undefined === false); // Resultado: false (undefined y false son de tipos diferentes)

console.log(true === 1); // Resultado: false (true y 1 son de tipos diferentes)
console.log(false === 0); // Resultado: false (false y 0 son de tipos diferentes)
console.log(true === "1"); // Resultado: false (true es un boolean y "1" es un string, son de tipos diferentes)


//---------------

//estrictamente desigual(!==)

console.log(5 !== 5); // Resultado: false (5 es igual a 5 en valor y tipo)
console.log(5 !== "5"); // Resultado: true (5 es un número y "5" es un string, son de tipos diferentes)
console.log(0 !== false); // Resultado: true (0 es un número y false es un boolean, son de tipos diferentes)
console.log(null !== undefined); // Resultado: true (null y undefined son de tipos diferentes)

console.log("hello" !== "world"); // Resultado: true ("hello" es diferente de "world" en valor y tipo)
console.log("hello" !== "Hello"); // Resultado: true (los strings son sensibles a mayúsculas y minúsculas)
console.log(true !== 1); // Resultado: true (true es un boolean y 1 es un número, son de tipos diferentes)
console.log(false !== 0); // Resultado: true (false es un boolean y 0 es un número, son de tipos diferentes)

console.log(5 !== NaN); // Resultado: true (NaN no es igual a ningún valor, incluyendo a sí mismo)
console.log(NaN !== NaN); // Resultado: true (NaN no es igual a ningún valor, incluyendo a sí mismo)

console.log(null !== 0); // Resultado: true (null y 0 son de tipos diferentes)
console.log(null !== ""); // Resultado: true (null es un objeto y "" es un string, son de tipos diferentes)
console.log(null !== false); // Resultado: true (null es un objeto y false es un boolean, son de tipos diferentes)

console.log(undefined !== 0); // Resultado: true (undefined y 0 son de tipos diferentes)
console.log(undefined !== ""); // Resultado: true (undefined es un objeto y "" es un string, son de tipos diferentes)
console.log(undefined !== false); // Resultado: true (undefined es un objeto y false es un boolean, son de tipos diferentes)

console.log(true !== 1); // Resultado: true (true es un boolean y 1 es un número, son de tipos diferentes)
console.log(false !== 0); // Resultado: true (false es un boolean y 0 es un número, son de tipos diferentes)
console.log(true !== "1"); // Resultado: true (true es un boolean y "1" es un string, son de tipos diferentes)




//---------------

//Object.is

Object.is(valor1, valor2);

console.log(Object.is(5, 5)); // Resultado: true
console.log(Object.is(5, "5")); // Resultado: false (números y strings son de tipos diferentes)
console.log(Object.is(0, -0)); // Resultado: false (+0 y -0 son considerados diferentes)
console.log(Object.is(NaN, NaN)); // Resultado: true (NaN es igual a sí mismo según Object.is())
console.log(Object.is(null, null)); // Resultado: true (null es igual a sí mismo según Object.is())
console.log(Object.is(undefined, undefined)); // Resultado: true (undefined es igual a sí mismo según Object.is())
console.log(Object.is(true, true)); // Resultado: true (true es igual a sí mismo según Object.is())
console.log(Object.is(false, false)); // Resultado: true (false es igual a sí mismo según Object.is())







/*.........................*/

//Loops(bucles) and iterations(iteraciones)




/*.........................*/

//Template literals




//---------------


/*.........................*/

//Propiedades



//---------------



/*.........................*/

//Metodos



//---------------

