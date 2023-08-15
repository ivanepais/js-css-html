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

//for

//Imprimir los números del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


//Calcular la suma de los primeros 10 números naturales:
let suma = 0;

for (let i = 1; i <= 10; i++) {
  suma += i;
}

console.log("La suma de los primeros 10 números naturales es: " + suma);


//Recorrer un array e imprimir sus elementos:
const frutas = ["manzana", "plátano", "naranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


//Generar una secuencia de números:
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}


//Imprimir los números del 10 al 1 en orden descendente:
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


//Recorrer las propiedades de un objeto y obtener sus valores:
const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}













//---------------

//while

// Ejemplo 1: Imprimir los números del 1 al 5
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
// Resultado:
// 1
// 2
// 3
// 4
// 5


// Ejemplo 2: Calcular el factorial de un número
function calcularFactorial(numero) {
  let factorial = 1;
  let contador = 1;

  while (contador <= numero) {
    factorial *= contador;
    contador++;
  }

  return factorial;
}

console.log(calcularFactorial(5)); // Resultado: 120 (5! = 5 x 4 x 3 x 2 x 1 = 120)


// Ejemplo 3: Obtener la suma de los números pares del 1 al 10
let sumaPares = 0;
let num = 1;

while (num <= 10) {
  if (num % 2 === 0) {
    sumaPares += num;
  }
  num++;
}

console.log("La suma de los números pares del 1 al 10 es:", sumaPares); // Resultado: La suma de los números pares del 1 al 10 es: 30


// Ejemplo 4: Validar la entrada del usuario
let inputUsuario = "";
const contraseñaCorrecta = "secreto";

while (inputUsuario !== contraseñaCorrecta) {
  inputUsuario = prompt("Ingresa la contraseña:");
}

console.log("Contraseña correcta. Bienvenido!"); // Se imprimirá cuando el usuario ingrese la contraseña correcta.




//---------------

//do while

//Imprimir los números del 1 al 5
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);


//Sumar los números del 1 al 10
let i = 1;
let suma = 0;

do {
  suma += i;
  i++;
} while (i <= 10);

console.log("La suma es: " + suma);






//---------------

//for in 

//Imprimir las propiedades de un objeto:
const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
};

for (let propiedad in persona) {
  console.log(propiedad);
}


//Obtener los valores de las propiedades de un objeto:
const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
};

for (let propiedad in persona) {
  console.log(persona[propiedad]);
}


//Verificar si un objeto tiene una propiedad específica:
const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
};

const propiedadBuscada = "nombre";
let tienePropiedad = false;

for (let propiedad in persona) {
  if (propiedad === propiedadBuscada) {
    tienePropiedad = true;
    break; // Detener el bucle una vez que se ha encontrado la propiedad
  }
}

console.log("Tiene la propiedad " + propiedadBuscada + ": " + tienePropiedad);


//Contar la cantidad de propiedades en un objeto:
const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
};

let cantidadPropiedades = 0;

for (let propiedad in persona) {
  cantidadPropiedades++;
}

console.log("Cantidad de propiedades: " + cantidadPropiedades);


//Realizar operaciones con los valores de las propiedades:
const numeros = {
  a: 5,
  b: 10,
  c: 20,
};

let suma = 0;

for (let propiedad in numeros) {
  suma += numeros[propiedad];
}

console.log("La suma de los valores es: " + suma);


//Filtrar propiedades específicas de un objeto:
const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
  ciudad: "Madrid",
};

const propiedadesFiltradas = ["nombre", "ocupacion"];

for (let propiedad in persona) {
  if (propiedadesFiltradas.includes(propiedad)) {
    console.log(propiedad + ": " + persona[propiedad]);
  }
}


//propiedades del objeto actual no heredadas:
for (let propiedad in persona) {
  if (persona.hasOwnProperty(propiedad)) {
    console.log(propiedad + ": " + persona[propiedad]);
  }
}




//---------------

//for of 

// Ejemplo 1: Recorrer un array y obtener la suma de sus elementos
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let numero of numeros) {
  suma += numero;
}

console.log("La suma de los números es:", suma); // Resultado: La suma de los números es: 15


// Ejemplo 2: Recorrer un string y contar la cantidad de caracteres
const mensaje = "Hola, mundo!";
let contador = 0;

for (let letra of mensaje) {
  contador++;
}

console.log("La cantidad de caracteres es:", contador); // Resultado: La cantidad de caracteres es: 12


// Ejemplo 3: Recorrer un Map y obtener sus claves y valores
const mapa = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (let [clave, valor] of mapa) {
  console.log("Clave:", clave, "- Valor:", valor);
}
// Resultado:
// Clave: a - Valor: 1
// Clave: b - Valor: 2
// Clave: c - Valor: 3


// Ejemplo 4: Recorrer un Set y mostrar sus elementos
const setNumeros = new Set([10, 20, 30, 40, 50]);

for (let numero of setNumeros) {
  console.log(numero);
}
// Resultado:
// 10
// 20
// 30
// 40
// 50


// Ejemplo 5: Utilizar el bucle con una función generadora
function* numerosPares() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}

for (let numero of numerosPares()) {
  console.log(numero);
}
// Resultado:
// 2
// 4
// 6
// 8
// 10




//---------------

//break

// Ejemplo 1: Encontrar un valor específico en un array
const numeros = [10, 20, 30, 40, 50];
const valorBuscado = 30;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === valorBuscado) {
    console.log(`El valor ${valorBuscado} se encontró en el índice ${i}.`);
    break; // Se detiene el bucle cuando se encuentra el valor buscado
  }
}

// Ejemplo 2: Obtener los números pares de un array
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];

for (let numero of numeros2) {
  if (numero % 2 === 0) {
    numerosPares.push(numero);
  }
  if (numerosPares.length === 5) {
    break; // Se detiene el bucle cuando se encuentran 5 números pares
  }
}

console.log("Números pares:", numerosPares);

// Ejemplo 3: Salir de un bucle anidado
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
    if (i === 3 && j === 2) {
      break; // Se detiene el bucle anidado cuando i es igual a 3 y j es igual a 2
    }
  }
}





//---------------

//continue

// Ejemplo 1: Imprimir solo los números impares del 1 al 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Se salta la iteración cuando i es par
  }
  console.log(i);
}
// Resultado:
// 1
// 3
// 5
// 7
// 9


// Ejemplo 2: Sumar solo los números positivos de un array
const numeros = [5, -2, 10, -8, 3];
let sumaPositivos = 0;

for (let numero of numeros) {
  if (numero < 0) {
    continue; // Se salta la iteración cuando el número es negativo
  }
  sumaPositivos += numero;
}

console.log("La suma de los números positivos es:", sumaPositivos); // Resultado: La suma de los números positivos es: 18


// Ejemplo 3: Imprimir los valores de un array, pero omitir un valor específico
const frutas = ["manzana", "plátano", "naranja", "uva", "manzana", "pera"];
const valorOmitido = "manzana";

for (let fruta of frutas) {
  if (fruta === valorOmitido) {
    continue; // Se salta la iteración cuando la fruta es igual al valor a omitir
  }
  console.log(fruta);
}
// Resultado:
// plátano
// naranja
// uva
// pera




//---------------

//labeled statements (declaracion o sentencia etiquetada)

etiquetaExterna: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
    if (i === 2 && j === 2) {
      break etiquetaExterna; // Se sale del bucle etiquetado cuando i es igual a 2 y j es igual a 2
    }
  }
}




/*.........................*/

//Control flow 





//---------------

//Declaraciones condicionales (Conditional Statements)

if (condición) {
  // Bloque de código que se ejecuta si la condición es verdadera
}


if (condición) {
  // Bloque de código que se ejecuta si la condición es verdadera
} else {
  // Bloque de código que se ejecuta si la condición es falsa
}


if (condición1) {
  // Bloque de código que se ejecuta si condición1 es verdadera
} else if (condición2) {
  // Bloque de código que se ejecuta si condición1 es falsa y condición2 es verdadera
} else {
  // Bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera
}


//[Ejemplos]

const edad = 25;

if (edad >= 18) {
  console.log("Eres mayor de edad."); // Se ejecuta si la edad es 18 o más
} else {
  console.log("Eres menor de edad."); // Se ejecuta si la edad es menor que 18
}


// Ejemplo 2: Verificar si un número es positivo, negativo o cero
const numero = -5;

if (numero > 0) {
  console.log("El número es positivo.");

} else if (numero < 0) {
  console.log("El número es negativo.");

} else {
  console.log("El número es cero.");
}


// Ejemplo 3: Determinar el tipo de dato de una variable
const valor = 42;

if (typeof valor === "number") {
  console.log("La variable es de tipo número.");

} else if (typeof valor === "string") {
  console.log("La variable es de tipo cadena.");

} else if (typeof valor === "boolean") {
  console.log("La variable es de tipo booleano.");

} else {
  console.log("La variable es de otro tipo.");
}

//Respuesta

/*Eres mayor de edad.
El número es negativo.
La variable es de tipo número.
*/



//---------------

//Switch

switch (expresion) {
  case valor1:
    // Bloque de código que se ejecuta si expresion es igual a valor1
    break;

  case valor2:
    // Bloque de código que se ejecuta si expresion es igual a valor2
    break;

  // Otros casos...
  default:
    // Bloque de código que se ejecuta si ninguno de los casos anteriores se cumple
}

/*expresion: 
Es la variable o expresión que se va a evaluar.

case valorX: 
Representa un caso específico que se compara
con la expresión.

break: 
Es una palabra clave opcional que se usa para 
salir del bloque switch una vez que se ha ejecutado 
el caso correspondiente.

Si no se incluye el break, la ejecución continuará 
con el siguiente caso sin importar si la condición se cumple o no. 
Si no hay un break en ningún caso, 
el código continuará ejecutándose
hasta que encuentre uno o llegue al default.

default: 
Es una etiqueta opcional que se utiliza 
para especificar un bloque de código 
que se ejecutará si ninguno de los 
casos anteriores se cumple. 
Es similar a la cláusula else 
en las declaraciones if...else.

*/


const diaDeLaSemana = "viernes";

switch (diaDeLaSemana) {

  case "lunes":
    console.log("Es el primer día de la semana.");
    break;

  case "martes":
  case "miércoles":
  case "jueves":
    console.log("Es un día laboral.");
    break;

  case "viernes":
    console.log("¡Por fin es viernes!");
    break;

  case "sábado":
  case "domingo":
    console.log("Es fin de semana.");
    break;

  default:
    console.log("Día no válido.");
}

//out
//¡Por fin es viernes!



const opcion = "C";

switch (opcion) {

  case "A":
    console.log("Seleccionaste la opción A.");
    break;

  case "B":
    console.log("Seleccionaste la opción B.");
    break;

  case "C":
    console.log("Seleccionaste la opción C.");
    // No hay break aquí, la ejecución continuará al siguiente caso
  case "D":
    console.log("Seleccionaste la opción D o C.");
    break;

  default:
    console.log("Opción no reconocida.");
}


// Ejemplo 2: Usando switch para imprimir el nombre del día de la semana

const dia = 4;

let nombreDia;

switch (dia) {

  case 1:
    nombreDia = "Domingo";
    break;

  case 2:
    nombreDia = "Lunes";
    break;

  case 3:
    nombreDia = "Martes";
    break;

  case 4:
    nombreDia = "Miércoles";
    break;

  case 5:
    nombreDia = "Jueves";
    break;

  case 6:
    nombreDia = "Viernes";
    break;

  case 7:
    nombreDia = "Sábado";
    break;

  default:
    nombreDia = "Día no válido";
}

console.log(`Hoy es ${nombreDia}.`);


//out
/*
Seleccionaste la opción C.
Seleccionaste la opción D o C.
Hoy es Miércoles.

*/


//---------------

//Gestión de excepciones: 

try {
  // Bloque de código que podría generar una excepción
} catch (error) {
  // Bloque de código para manejar la excepción capturada
} finally {
  // Bloque de código que siempre se ejecuta, opcional
}

//throw opcional


function dividir(a, b) {

  try {

    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }

    return a / b;

  } catch (error) {

    console.error(`Error: ${error.message}`);
    return 0; // Valor predeterminado para manejar la excepción

  } finally {

    console.log("Bloque finally: La función de división ha terminado.");
  }
}

const resultado1 = dividir(10, 2);
console.log(`Resultado 1: ${resultado1}`);

const resultado2 = dividir(10, 0);
console.log(`Resultado 2: ${resultado2}`);


/*
Resultado 1: 5
Error: No se puede dividir por cero.
Bloque finally: La función de división ha terminado.
Resultado 2: 0
Bloque finally: La función de división ha terminado.
*/



//---------------

//Throw exception

/*	
throw expresion; 

expresion puede ser cualquier valor o un objeto 
que represente la excepción que se desea lanzar. 
Por convención, se utiliza el objeto Error 
o sus subclases para representar las excepciones
*/

throw new Error("Este es un mensaje de error.");

/*
se está lanzando una excepción de tipo Error 
con un mensaje descriptivo que indica la naturaleza 
del error.

Cuando se lanza una excepción con throw, 
el control del flujo pasa al bloque catch más cercano 
que pueda manejar esa excepción. 

Si no hay ningún bloque catch, 
la excepción provocará que el programa se detenga
y se mostrará información sobre el error 
en la consola del navegador.
*/


/*

tray throw -> catch code or close 

El error anterior no se muestra al user(??) hasta catch

lo toma y muestra en consola, etc. +-

para cada código de try

o throw -> try catch 

Solo con el fin de detallar en error

*/



function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log(`El resultado de la división es: ${resultado}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

//out
//en consola: Error: No se puede dividir por cero.


//try code throw -> catch solution/close -> finally


/*

//func
	
	throw

try

catch


try
	//statements
	//conditions //function
	
		//exception
		throw Error() -> catch or close and console msj

	//statements


catch(var/error) 
	
	//code for throw


finally
	//information //code
*/



try {

  const numero = "abc";

  if (isNaN(numero)) {

    throw new Error("El valor no es un número válido.");
  }

  const resultado = numero * 2;
  console.log(`El resultado es: ${resultado}`);

} catch (error) {
  console.error(`Error: ${error.message}`);

} finally {
  console.log("El bloque finally siempre se ejecuta.");
}

/*
multiplicar un valor almacenado en la variable numero por 2. 
Sin embargo, el valor de numero no es un número válido 
(es una cadena "abc"). 

Al usar isNaN(numero), detectamos 
que el valor no es un número y lanzamos una excepción 
usando throw new Error("El valor no es un número válido.").

El bloque catch captura la excepción lanzada en el bloque try 
y muestra un mensaje de error utilizando error.message. 
Además, el bloque finally siempre se ejecuta, 
independientemente de si hay una excepción o no, 
y en este caso, muestra un mensaje informativo.
*/


//






//---------------

//Error Object

/*
Subclases de Error más específica, como TypeError 
o SyntaxError

Tienen propiedades como message (mensaje de error), 
name (nombre del tipo de error) y otras propiedades
específicas de cada tipo de error.
*/


function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos argumentos deben ser números.");
  }
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

try {
  const resultado = dividir("10", 5);
  console.log(`El resultado de la división es: ${resultado}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}


//out
//Error: Ambos argumentos deben ser números.







/*.........................*/

//Expresiones y operadores

//expresiones

/*
Expresiones numéricas y aritméticas:
    Suma: a + b
    Resta: a - b
    Multiplicación: a * b
    División: a / b
    Módulo (resto de la división): a % b
    Incremento: a++ o ++a
    Decremento: a-- o --a

Expresiones de cadena (string):
    Concatenación de cadenas: "Hola" + " " + "mundo"
    Plantillas de cadena (template literals): `Hola ${nombre}`

Expresiones de asignación:
    Asignación: a = 10
    Asignación con operadores: a += 5, b *= 2, etc.

Expresiones de comparación:
    Igual a: a == b
    Diferente de: a != b
    Mayor que: a > b
    Menor que: a < b
    Mayor o igual que: a >= b
    Menor o igual que: a <= b

Expresiones lógicas:
    AND lógico: a && b
    OR lógico: a || b
    NOT lógico: !a

Expresiones condicionales (ternarias):
    Operador ternario: condicion ? valorSiVerdadero : valorSiFalso

Expresiones de llamada a funciones:
    Llamada a una función: nombreFuncion()
    Llamada a una función con argumentos: sumar(10, 20)

Expresiones de acceso a propiedades:
    Acceso a una propiedad de un objeto: objeto.propiedad
    Acceso a una propiedad mediante notación de corchetes: objeto['propiedad']

Expresiones de arreglo (Array):
    Creación de un arreglo: []
    Acceso a un elemento del arreglo: arreglo[indice]

Expresiones de objeto:
    Creación de un objeto: {}
    Definición de propiedades de un objeto: { nombre: "John", edad: 30 }

Expresiones de función:
    Expresión de función anónima: function() { ... }
    Expresión de función con nombre: function nombreFuncion() { ... }

Expresiones regulares:
    Expresión regular: /patron/

*/


//---------------

//Operadores

//Operador de asignación

/*
Asignación básica: =
Este operador asigna el valor de la expresión a la variable
*/

let x = 10;


//Asignación con suma: +=
let x = 5;
x += 3; // x se convierte en 8 (5 + 3)


//Asignación con resta: -=
let x = 10;
x -= 4; // x se convierte en 6 (10 - 4)


//Asignación con multiplicación: *=
let x = 5;
x *= 2; // x se convierte en 10 (5 * 2)


//Asignación con división: /=
let x = 20;
x /= 5; // x se convierte en 4 (20 / 5)


//Asignación con módulo(resto de la división): %=
let x = 15;
x %= 4; // x se convierte en 3 (15 % 4)


//Asignación con exponenciación: **=
let x = 2;
x **= 3; // x se convierte en 8 (2 elevado a la potencia de 3)


//---------------

//Comparación: Devuelve True o False

//Igual a: == (Verifica solo el valor)
const a = 5;
const b = "5";
console.log(a == b); // true (5 es igual a "5" en valor)


//Diferente de: !=
const a = 10;
const b = "5";
console.log(a != b); // true (10 es diferente de "5" en valor)


//Igualdad estricta: === (Verifica valor y tipo de dato)
const a = 5;
const b = "5";
console.log(a === b); // false (5 no es igual a "5" en tipo)


//Desigualdad estricta: !==
const a = 10;
const b = "10";
console.log(a !== b); // true (10 es diferente de "10" en tipo)


//Mayor que: >
const a = 7;
const b = 5;
console.log(a > b); // true (7 es mayor que 5)


//Menor que: <
const a = 3;
const b = 8;
console.log(a < b); // true (3 es menor que 8)


//Mayor o igual que: >=
const a = 6;
const b = 6;
console.log(a >= b); // true (6 es mayor o igual que 6)


//Menor o igual que: <=
const a = 4;
const b = 9;
console.log(a <= b); // true (4 es menor o igual que 9)


//---------------

//Aritméticos


//Suma: +
const suma = 5 + 3; // suma será igual a 8


//Resta: -
const resta = 10 - 5; // resta será igual a 5


//Multiplicación: *
const multiplicacion = 2 * 3; // multiplicacion será igual a 6


//División: /
const division = 10 / 2; // division será igual a 5


//Módulo (resto de la división): %
const resto = 10 % 3; // resto será igual a 1 (el resto de dividir 10 por 3)


//Exponenciación: **
const potencia = 2 ** 3; // potencia será igual a 8 (2 elevado a la potencia de 3)


//Incremento: ++
let contador = 5;
contador++; // contador será igual a 6 después de incrementar en 1


//Decremento: --
let contador = 8;
contador--; // contador será igual a 7 después de decrementar en 1



//---------------

//Lógico: Devuelve True o False de acuerdo al valor de verdad (true) las condiciones/valor de variable. 


//AND lógico: && (Ambas condiciones)
const a = true;
const b = false;
console.log(a && b); // false (ambas condiciones no son verdaderas)


//OR lógico: || (una condición)
const a = true;
const b = false;
console.log(a || b); // true (al menos una de las condiciones es verdadera)


//NOT lógico: ! (negar true o false)
const a = true;
console.log(!a); // false (la condición es verdadera, pero se negó con el operador !)



//---------------

//Condicionales: Utilizados en expresiones condicionales para tomar decisiones basadas en condiciones lógicas
//Tiene que ver con las acciones o los caminos que toma. De acuerdo al valor de verdad (true) o falsedad (false) de una cosa, sucede una u otra cosa; descripta en el código. 

//ternario: condicion ? valorSiVerdadero : valorSiFalso
const edad = 18;
const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad" (la condición es verdadera)


//Operador OR cortocircuito: a || b
/*
Si a es verdadero, devuelve a, de lo contrario, devuelve b. 
Es importante destacar que si a es verdadero, 
no se evalúa b, ya que el resultado de la expresión ya es verdadero.
*/

const valor = null;
const valorDefecto = valor || "Valor por defecto";
console.log(valorDefecto); // "Valor por defecto" (valor es nulo, por lo que se utiliza el valor por defecto)


//Operador AND cortocircuito: a && b

/*
Si a es falso, devuelve a, de lo contrario, devuelve b. 
Es importante destacar que si a es falso, no se evalúa b, 
ya que el resultado de la expresión ya es falso.
*/

const valor = "Hola";
const resultado = valor && "Mundo";
console.log(resultado); // "Mundo" (ambos valores son verdaderos)



//---------------

//String

//Concatenación: +: Unir cadenas
const str1 = "Hola";
const str2 = "Mundo";
const resultado = str1 + " " + str2; // resultado será "Hola Mundo"


//Longitud de la cadena: length, cantidad de caracteres
const mensaje = "Hola Mundo";
console.log(mensaje.length); // 10 (la cadena tiene 10 caracteres)


//Acceso a caracteres: [índice], comienzan en 0
const mensaje = "Hola";
console.log(mensaje[0]); // "H"
console.log(mensaje[2]); // "l"


//Método charAt(): accede a los según el indice
const mensaje = "Hola";
console.log(mensaje.charAt(1)); // "o"


//Método toUpperCase(): convertir cadena a mayus
const mensaje = "Hola Mundo";
const mayusculas = mensaje.toUpperCase(); // mayusculas será "HOLA MUNDO"


//Método toLowerCase(): convertir cadena a minus
const mensaje = "Hola Mundo";
const minusculas = mensaje.toLowerCase(); // minusculas será "hola mundo"


//Método trim(): elimina los espacios en blanco de una cadena
const mensaje = "   Hola Mundo   ";
const limpio = mensaje.trim(); // limpio será "Hola Mundo"


//Método split(): divide una cadena y lo convierte en un array usando un delimitador (,)
const mensaje = "Hola,Mundo";
const arreglo = mensaje.split(","); // arreglo será ["Hola", "Mundo"]



//---------------

//Operador coma: permite combinar varias expresiones en una sola expresión.

for (let i = 0, j = 10; i < 5; i++, j--) {
  // Hacer algo con i y j
}


//---------------

//Operador unario: trabajan con un solo operando, es decir, una sola expresión. Estos operadores se utilizan para realizar diversas operaciones en una sola variable o valor

//negación unaria (-): negar un valor numérico o convertir un valor no numérico en un número negativo.
const numero = 5;
const negativo = -numero; // negativo será igual a -5


//incremento (++): aumentar en 1 el valor de una variable.
let contador = 10;
contador++; // contador será igual a 11 después del incremento


//decremento (--): isminuir en 1 el valor de una variable.
let contador = 8;
contador--; // contador será igual a 7 después del decremento


//lógico NOT (!): se utiliza para negar un valor booleano.
const esVerdadero = true;
const esFalso = !esVerdadero; // esFalso será igual a false


//Operador typeof: se utiliza para obtener una cadena que representa el tipo de un valor.
const numero = 10;
const tipo = typeof numero; // tipo será igual a "number"


//Operador void: se utiliza para evaluar una expresión y devolver undefined.
const resultado = void 0; // resultado será undefined



//---------------

//Operador Bitwise: Realizan operaciones a nivel de bits en números enteros de 32 bits, en los valores binarios de los números. 

//Operador AND bitwise (&): realiza una operación AND a nivel de bits entre dos números
const a = 5; // Representación binaria: 00000000000000000000000000000101
const b = 3; // Representación binaria: 00000000000000000000000000000011
const resultado = a & b; // Representación binaria del resultado: 00000000000000000000000000000001 (1 en decimal)


//Operador OR bitwise (|): realiza una operación OR a nivel de bits entre dos números.
const a = 5; // Representación binaria: 00000000000000000000000000000101
const b = 3; // Representación binaria: 00000000000000000000000000000011
const resultado = a | b; // Representación binaria del resultado: 00000000000000000000000000000111 (7 en decimal)


//Operador XOR bitwise (^): realiza una operación XOR a nivel de bits entre dos números. 
const a = 5; // Representación binaria: 00000000000000000000000000000101
const b = 3; // Representación binaria: 00000000000000000000000000000011
const resultado = a ^ b; // Representación binaria del resultado: 00000000000000000000000000000110 (6 en decimal)


//Operador NOT bitwise (~): realiza una operación NOT a nivel de bits en un solo número.
const a = 5; // Representación binaria: 00000000000000000000000000000101
const resultado = ~a; // Representación binaria del resultado: 11111111111111111111111111111010 (-6 en decimal)


//Operador desplazamiento a la izquierda (<<): Este operador desplaza los bits de un número hacia la izquierda una cantidad específica de posiciones
const a = 5; // Representación binaria: 00000000000000000000000000000101
const resultado = a << 2; // Representación binaria del resultado: 00000000000000000000000000010100 (20 en decimal)


//Desplazamiento a la derecha (>>): Este operador desplaza los bits de un número hacia la derecha una cantidad específica de posiciones
const a = 16; // Representación binaria: 00000000000000000000000000010000
const resultado = a >> 2; // Representación binaria del resultado: 00000000000000000000000000000100 (4 en decimal)


//Desplazamiento a la derecha sin signo (>>>): Este operador desplaza los bits de un número hacia la derecha una cantidad específica de posiciones.
const a = -16; // Representación binaria: 11111111111111111111111111110000
const resultado = a >>> 2; // Representación binaria del resultado: 00111111111111111111111111111100 (1073741820 en decimal)



//---------------

//Operadores Bigint: ara realizar operaciones matemáticas con números enteros muy grandes. Para declarar un número como "BigInt", simplemente agrega la letra "n" al final del número 

const numeroBigInt = 1234567890123456789012345678901234567890n;


//aritméticos: Se pueden usar los operadores aritméticos estándar, como +, -, *, /, y %
const a = 123456789012345678901234567890n;
const b = 987654321098765432109876543210n;
const suma = a + b; // 1111111111111111111111111111100n
const producto = a * b; // 121932631137021795696978281944487162532678405536372274404821000n


//de comparación: Se pueden utilizar operadores de comparación como ==, !=, <, >, <=, y >=
const a = 123456789012345678901234567890n;
const b = 987654321098765432109876543210n;
console.log(a < b); // true
console.log(a == b); // false


//unarios: Se pueden utilizar operadores unarios como +, -, y !
const a = 123456789012345678901234567890n;
const negativo = -a; // -123456789012345678901234567890n


//asignación: Se pueden usar operadores de asignación como =, +=, -=, *=, /=, y %=
let a = 1234567890n;
a += 100n; // 1234567990n


//Conversión a número regular
const numeroRegular = 123;
const numeroBigInt = BigInt(numeroRegular); // convirtiendo a BigInt


//---------------



/*.........................*/

// Comparación vs Lógico vs Condicional

/*

Comparación: 

	Devuelve True o False de acuerdo al valor 
	o tipo del contenido de las variables. 

Lógico:

	Devuelve True o False de acuerdo al 
	valor de verdad (true) de 
	las condiciones/valor de variable. 

Condicional: 

	Utilizados en expresiones condicionales 
	para tomar decisiones basadas en condiciones
	lógicas. 
				
	Tiene que ver con las acciones o los caminos
	que toma. De acuerdo al valor de verdad (true)
	o falsedad (false) de una cosa, sucede una u otra cosa; descripta en el código.

*/


//


/*.........................*/

//Funciones

/*
Los nombres de los parámetros actúan como variables locales
olo son accesibles y válidos dentro de la función.

pueden tener cero o más parámetros, y los parámetros 
pueden ser de cualquier tipo de dato válido en JavaScript
*/

function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Llamando a la función y mostrando el resultado
const mensajeSaludo = saludar("Juan");
console.log(mensajeSaludo); // Salida: "Hola, Juan!"



//Parámetros y argumentos

/*
Un parámetro es una variable que se utiliza para recibir valores de entrada o datos externos cuando se invoca la función. 

Un argumento es el valor que se le pasa al parámetro en la llamada para los parametros
Ppueden tener cero o más parámetros, y los parámetros pueden ser de cualquier 
tipo de dato válido en JavaScript, incluyendo números, cadenas, booleanos, objetos, arreglos y otros.
*/

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3); // Aquí, 5 y 3 son los argumentos para los parámetros 'a' y 'b'
console.log(resultado); // Salida: 8


function saludar() {
  return "¡Hola, bienvenido!";
}

const mensajeSaludo = saludar();
console.log(mensajeSaludo); // Salida: "¡Hola, bienvenido!"




//Return vs no return





//Default params

/*
Si no se proporciona ningún argumento o valor al llamar a la función, 
el valor predeterminado se utilizará automáticamente para el parámetro
*/

function saludar(nombre = "Invitado") {
  return "¡Hola, " + nombre + "!";
}

const mensajeSaludo1 = saludar("Juan");
const mensajeSaludo2 = saludar(); // En este caso, no se pasa ningún valor para el parámetro 'nombre', por lo que se utilizará el valor predeterminado "Invitado"

console.log(mensajeSaludo1); // Salida: "¡Hola, Juan!"
console.log(mensajeSaludo2); // Salida: "¡Hola, Invitado!"





//Rest params

/*
solo puede haber un parámetro de este tipo en la función, por eso se coloca al final.

Cuando se llama a la función con varios argumentos (sumar(1, 2, 3, 4, 5)), 
el parámetro numeros captura esos argumentos en forma de un arreglo [1, 2, 3, 4, 5].

Si no se pasan argumentos al llamar, el parámetro con los tres puntos será un arreglo vacío.

Es útil cuando no sabemos cuántos argumentos serán pasados o cuando queremos 
recibir una cantidad variable de argumentos sin necesidad de definir explícitamente cada parámetro.
*/


function nombreDeLaFuncion(parametro1, parametro2, ...restParams) {
  // Cuerpo de la función que utiliza los parámetros
  // 'restParams' es un arreglo que contiene los argumentos restantes
  // ...
}


function sumar(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

const resultado1 = sumar(1, 2, 3, 4, 5); // Se pasan varios argumentos
const resultado2 = sumar(10, 20); // Se pasan solo dos argumentos

console.log(resultado1); // Salida: 15 (1 + 2 + 3 + 4 + 5)
console.log(resultado2); // Salida: 30 (10 + 20)


function imprimirMensajes(...mensajes) {
  if (mensajes.length === 0) {
    console.log("No se proporcionaron mensajes.");
  } else {
    for (let mensaje of mensajes) {
      console.log(mensaje);
    }
  }
}

imprimirMensajes(); // No se pasan argumentos, el arreglo 'mensajes' será vacío
imprimirMensajes("Hola", "Bienvenido"); // Se pasan dos argumentos





//---------------

//Funciones Arrow

/*
Incluye una flecha (=>) entre los parámetros y el cuerpo de la función.

Una característica heredan el valor de this del ámbito en el que fueron creadas, 
lo que evita algunos problemas comunes relacionados con el uso de this en las funciones regulares.

this hace referencia al ámbito global 
(ventana del navegador o módulo en Node.js), y no al objeto en el que fue creada.

es importante recordar que no son adecuadas para todas las situaciones, 
especialmente cuando se necesita acceder a la palabra clave this en el contexto local de la función.
*/


const nombreDeLaFuncion = (parametro1, parametro2, ...restParams) => {
  // Cuerpo de la función que utiliza los parámetros
  // ...
  return resultado;
};



//Si la función tiene un solo parámetro, se puede omitir los paréntesis. 
const funcionConUnParametro = parametro => {
  // Cuerpo de la función que utiliza el parámetro
  // ...
  return resultado;
};



//Si la función tiene una sola instrucción y devuelve un valor, se puede omitir la palabra clave return y las llaves.
const funcionCorta = () => "Hola Mundo";



//ejemplo operación
const multiplicar = (a, b) => a * b;

const resultadoMultiplicacion = multiplicar(4, 6);
console.log(resultadoMultiplicacion); // Salida: 24



//valor this

// Objeto con una función regular
const objeto = {
  nombre: "Juan",
  saludar: function() {
    console.log("Hola, mi nombre es " + this.nombre);
  }
};

objeto.saludar(); // Salida: "Hola, mi nombre es Juan"

// Objeto con una Arrow Function
const objetoArrow = {
  nombre: "Maria",
  saludar: () => {
    console.log("Hola, mi nombre es " + this.nombre); // 'this' hace referencia al ámbito global y no al objeto
  }
};

objetoArrow.saludar(); // Salida: "Hola, mi nombre es undefined"






//---------------

//Funciones anonimas

/*
Son funciones sin identificador y generalmente se utilizan en situaciones donde 
no es necesario referirse a ellas más de una vez o donde su alcance se limita a un contexto específico.
Cuando se necesita una operación simple, una sola vez. 

Puede resultar un poco difícil de depurar en algunos casos, 
ya que no se dispone de un nombre descriptivo para identificar la función en las herramientas de desarrollo
*/


// Función anónima asignada a una variable
const miFuncion = function() {
  // Código de la función anónima
};


// Función anónima como argumento de otra función
otraFuncion(function() {
  // Código de la función anónima
});


// IIFE (Immediately Invoked Function Expression) con función anónima
(function() {
  // Código de la función anónima
})();


//Función anónima asignada a una variable
const saludar = function() {
  console.log("Hola, ¿cómo estás?");
};

saludar(); // Salida: "Hola, ¿cómo estás?"
	
//La función se invoca mediante la variable saludar().




//Función anónima como argumento de otra función:

function ejecutarFuncion(funcion) {
  funcion();
}

ejecutarFuncion(function() {
  console.log("Esta es una función anónima como argumento.");
});

// Salida: "Esta es una función anónima como argumento."




//---------------

//Funciones IIFEs 

/*
Son una técnica que se utiliza para crear funciones y ejecutarlas inmediatamente después de su definición. 
Esta técnica se basa en la utilización de funciones anónimas

Permiten crear un ámbito (scope) local para encapsular variables y funciones, evitando así la contaminación del ámbito global. 
útil cuando se trabaja en proyectos grandes y complejos, ya que ayuda a prevenir conflictos entre variables y funciones con el mismo nombre.

Una ventaja adicional de los IIFE es que permiten pasar argumentos a la función y utilizarlos dentro del ámbito local del IIFE. 
Esto es útil cuando se necesita proteger datos sensibles o configuraciones dentro del IIFE.

Con la aparición de bloques de código y módulos en JavaScript, los IIFE no se utilizan tan comúnmente como antes.
*/

(function() {
  // Código del IIFE
})();


(function() {
  const mensaje = "Hola desde un IIFE";
  console.log(mensaje);
})();


(function(nombre) {
  console.log("Hola, " + nombre);
})("Juan");




//Arguments Objects

/*
Es un objeto especial que está disponible dentro de todas las funciones y contiene todos los argumentos que se pasaron al llamar a la función. 

Este objeto es útil cuando se necesita trabajar con un número variable de argumentos o cuando no se conocen de antemano los argumentos que se pasarán a la función.

Es similar a un array en términos de acceso a los elementos, pero no es un array real. Tiene propiedades numéricas que corresponden a los índices de los argumentos pasados a la función.

Se puede utilizar para trabajar con un número variable de argumentos, 
aunque en funciones modernas es más común usar 
la sintaxis de parámetros rest (...) para manejar argumentos como un array real.
*/

function miFuncion() {
  console.log(arguments[0]); // Accede al primer argumento
  console.log(arguments[1]); // Accede al segundo argumento
  // ...
}



//No tiene métodos como map, filter, forEach, etc. Si se desea utilizar métodos de array en el objeto "arguments", es necesario convertirlo en un array real.
function convertirAArray() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

convertirAArray(1, 2, 3); // Salida: [1, 2, 3]



//En funciones modernas de JavaScript, es más común rest (...) para recibir argumentos como un array real en lugar de depender del objeto "arguments".
function sumarTodos(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sumarTodos(1, 2, 3, 4)); // Salida: 10 (1 + 2 + 3 + 4)
console.log(sumarTodos(10, 20));     // Salida: 30 (10 + 20)


//---------------


//Scope and function stack:

/*
Scope: 
Se refiere al alcance o contexto en el que una variable o función es accesible dentro del código.
El alcance se define por el lugar donde se declara una variable. 
Hay dos tipos principales de alcance: alcance global y alcance local

Function stack: 
Se refiere al orden en el que las funciones son llamadas y se añaden a una pila a medida que se ejecutan.
Cuando se ejecuta un programa de JavaScript, las funciones se agregan a la pila de funciones a medida que se llaman y se retiran de la pila cuando se completan. 
La función en la parte superior de la pila es la que se está ejecutando actualmente.
*/

const globalVariable = "Soy global"; // Alcance global

function miFuncion() {
  const localVariable = "Soy local"; // Alcance local
  console.log(globalVariable);       // Acceso a la variable global
  console.log(localVariable);        // Acceso a la variable local
}

miFuncion();
console.log(globalVariable); // Acceso a la variable global fuera de la función
// console.log(localVariable);  // Esto resultaría en un error, ya que localVariable es inaccesible aquí



function funcionUno() {
  console.log("Función Uno"); //definicion f1
  funcionDos(); //llamada f2
}

function funcionDos() {
  console.log("Función Dos"); //definicion f2 
}

funcionUno(); //llamada f1

/*
Al llamar a funcionUno(), se agrega a la pila de funciones y se ejecuta.
Luego, dentro de funcionUno(), se llama a funcionDos(), que también se agrega a la pila y se ejecuta.
Después de que funcionDos() se completa, se retira de la pila, y luego funcionUno() también se retira de la pila cuando termina su ejecución.
*/


//---------------

//Funciones recursivas

/*
Para evitar que la recursión sea infinita, es importante definir un "caso base" en el que la función no se llame a sí misma y retorne un valor directamente.
En cada llamada recursiva, el problema se divide en subproblemas más pequeños y la función se llama a sí misma con estos subproblemas. 
La recursión continúa hasta que se alcanza el caso base, momento en el que la recursión comienza a "desenrollarse" y los valores se combinan para dar la solución final.

Puede llevar a problemas de rendimiento si no se maneja adecuadamente. 
En algunos casos, las implementaciones recursivas pueden ser menos eficientes que las soluciones iterativas equivalentes.
*/


function factorial(n) {
  // Caso base: factorial de 0 es 1
  if (n === 0) {
	return 1;
}

  // Llamada recursiva para el factorial de n - 1
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Calcula 5! = 5 * 4 * 3 * 2 * 1 = 120



function fibonacci(n) {
  // Casos base: fibonacci de 0 es 0, y de 1 es 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Llamadas recursivas para sumar los dos términos anteriores
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Calcula el término 6 de la serie de Fibonacci: 0, 1, 1, 2, 3, 5




//Lexical Scoping: 

/*
"Static Scoping" o "Closure Scoping", es un concepto importante en la gestión de alcance de variables en JavaScript
y en muchos otros lenguajes de programación. 

Refiere a cómo se determina el alcance de una variable basándose en el lugar donde se define y no en el lugar desde donde se llama.
El alcance se define por el lugar donde se declara una variable.

En el contexto de "Lexical Scoping", el alcance de una variable está determinado por la estructura del código fuente (léxico) y cómo se anidan las funciones, en lugar de cómo se ejecuta el programa en tiempo de ejecución.
*/

function exterior() {
  const mensaje = "Hola desde exterior";

  function interior() {
    console.log(mensaje);
  }

  interior();
}

exterior(); // Salida: "Hola desde exterior"

/*
La función interior() se define dentro de la función exterior(). 
Debido a "Lexical Scoping", la función interior() puede acceder a la variable mensaje definida en su alcance externo (es decir, dentro de exterior()), incluso cuando se llama desde fuera de su alcance.

Esto significa que el alcance de una variable está influenciado por dónde se declara en el código, en lugar de dónde se ejecuta.

Eencial para comprender el concepto de cierre (closure). 
Un cierre es una función que recuerda las variables en el alcance donde se creó, incluso si esa función se ejecuta en un alcance diferente.

Permite crear funciones que capturan y retienen el contexto en el que se crearon, 
lo que puede ser útil para implementar patrones como los módulos y para manejar la encapsulación de datos.
*/


/*
Scope vs Lexcal scoping

Scope: se refiere a la región del programa en la que una variable es visible y puede ser accedida. 
Define dónde una variable existe y puede ser utilizada.

Global Scope (Ámbito global): Las variables declaradas en este ámbito son accesibles desde cualquier parte del programa, dentro de funciones y bloques de código.

Local Scope (Ámbito local): Las variables declaradas dentro de una función son visibles 
solo dentro de esa función (a menos que se hagan "closures"). 
También existen ámbitos locales en bloques de código (introducidos por let y const), 
que son visibles solo dentro de ese bloque.


Lexical Scoping: se refiere a cómo se determina el alcance de una variable en tiempo de compilación, 
basado en la estructura del código fuente. En otras palabras, se establece en el momento de escribir el código, no en el momento de su ejecución. 
Esto significa que el alcance de una variable está influenciado por dónde se declara en el código, en lugar de dónde se ejecuta.

las funciones crean su propio ámbito léxico. 
Esto significa que una función puede acceder a las variables definidas en su ámbito contenedor 
(por ejemplo, una función que se encuentra fuera de ella), pero no al revés.
*/

function exterior() {
  const exteriorVar = "Exterior";

  function interior() {
    const interiorVar = "Interior";
    console.log(exteriorVar); // Puede acceder a exteriorVar
  }

  interior();
}

/*
"scope" se refiere al contexto en el que una variable es visible y puede ser accedida, "lexical scoping" se refiere a cómo se determina ese alcance en función de la estructura del código fuente.
*/


//---------------

//Funciones Closures

/*
Es una función que "recuerda" el ámbito léxico en el que se creó, incluso después de que ese ámbito haya dejado de existir. 
En otras palabras, un closure puede acceder y retener variables y parámetros de su ámbito contenedor incluso después de que la función contenedora haya terminado de ejecutarse. 
Los closures son comúnmente utilizados para crear funciones con comportamientos específicos y para encapsular datos privados.
*/

function contador() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const incrementar = contador();
console.log(incrementar()); // Salida: 1
console.log(incrementar()); // Salida: 2

/*
La función interna que devuelve contador() es un closure porque tiene acceso al ámbito léxico de la función contador(), incluso después de que contador() haya finalizado su ejecución. 
El closure mantiene una referencia a la variable count, lo que permite que el contador siga aumentando.

/*
Los closures también pueden llevar a problemas de memoria si no se gestionan adecuadamente. 
Si una función que es un closure se mantiene en memoria (por ejemplo, debido a una referencia que sigue existiendo), todas las variables de su alcance externo también se mantendrán en memoria.
*/


//Ej2 

function exterior() {
  const mensaje = "Hola desde exterior";

  function interior() {
    console.log(mensaje);
  }

  return interior;
}

const miClosure = exterior();
miClosure(); // Salida: "Hola desde exterior"

/*
La función interior se convierte en un cierre al ser devuelta desde la función exterior. 
Aunque exterior ha terminado de ejecutarse y su alcance podría haber sido eliminado, 
interior aún puede acceder a la variable mensaje debido al cierre.
*/





//---------------

//Built-In Functions

/*
Son funciones que están disponibles automáticamente en el entorno de ejecución del lenguaje. 
Estas funciones son proporcionadas por el propio lenguaje y se pueden utilizar para realizar tareas comunes sin necesidad de definirlas previamente.
*/


//El constructor de funciones en JavaScript.
const myFunction = new Function("a", "b", "return a + b");

console.log(myFunction(2, 3)); // Devuelve 5


//setTimeout() y setInterval():
//Funciones para ejecutar una función después de un retraso específico (una vez) o de manera periódica.

function saludar() {
  console.log("Hola, mundo!");
}

setTimeout(saludar, 1000); // Ejecuta la función después de 1 segundo
setInterval(saludar, 2000); // Ejecuta la función cada 2 segundos


//clearTimeout() y clearInterval(): 
//Se utilizan para cancelar la ejecución de una función programada con setTimeout() o setInterval().
const timeoutId = setTimeout(saludar, 1000);

clearTimeout(timeoutId); // Cancela la ejecución programada


//Function.prototype.call(), Function.prototype.apply(), y Function.prototype.bind(): 
//Métodos que permiten controlar el valor de this y pasar argumentos a una función en el momento de la llamada.
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludar.call(null, "Juan"); // Llama a la función con "this" nulo y argumento "Juan"

saludar.apply(null, ["María"]); // Llama a la función con "this" nulo y argumento "María"

const saludarJuan = saludar.bind(null, "Juan");
saludarJuan(); // Llama a la función con "this" nulo y argumento "Juan"


//Function.prototype.toString():
//Devuelve una representación en forma de cadena del código fuente de una función.


function suma(a, b) {
  return a + b;
}

console.log(suma.toString()); // Muestra el código fuente de la función


//---------------

//This

/*
Hace referencia al objeto al que pertenece el contexto de ejecución actual. 
El valor de "this" cambia dependiendo de cómo se invoca una función y en qué contexto se encuentra. 
Es una característica fundamental en JavaScript y es especialmente relevante cuando se trabaja con objetos y funciones.
Puede tener diferentes valores en diferentes situaciones:
*/


//En el contexto global (fuera de cualquier función o método): 

/*
"this" hace referencia al objeto global. 
En un navegador, el objeto global es el objeto "window". 
En Node.js, es el objeto "global".
*/

console.log(this); // En un navegador, esto mostrará el objeto 'window'



//Dentro de una función normal: 

/*
"this" hace referencia al objeto que invoca la función. 
Sin embargo, esto puede variar dependiendo de cómo se llama la función.
*/

function imprimirThis() {
  console.log(this);
}

imprimirThis(); // En el navegador, mostrará el objeto 'window'


//Dentro de un método de un objeto:

//"this" hace referencia al objeto que contiene el método.

const objeto = {
  nombre: "Juan",
  saludar: function() {
    console.log("Hola, mi nombre es " + this.nombre);
  }
};

objeto.saludar(); // Salida: "Hola, mi nombre es Juan"



//En funciones de flecha ("Arrow Functions"):

//"this" hace referencia al valor "this" del contexto en el que se creó la función, lo que puede diferir de cómo se comporta en funciones regulares.


const objetoArrow = {
  nombre: "Maria",
  saludar: () => {
    console.log("Hola, mi nombre es " + this.nombre); // 'this' hace referencia al objeto global 'window' (en un navegador)
  }
};

objetoArrow.saludar(); // Salida: "Hola, mi nombre es undefined"

//---------------



/*.........................*/


//Funciones Avanzado

//Casos de uso para cada tipo de función

  
//Funciones regulares: 

/*
Tienen un nombre identificador

Legibilidad y claridad del código

Un nombre adecuado puede proporcionar contexto sobre la intención de la función.

Facilitar el debug: Las funciones con nombres son más fáciles de rastrear en la pila de llamadas 
y en los mensajes de error, lo que facilita la depuración y el diagnóstico de problemas.

Reutilización:Las funciones con nombres pueden ser reutilizadas en múltiples partes del código y en diferentes partes del programa.

Recursión: Si necesitas implementar recursión, las funciones con nombres son más adecuadas, ya que pueden llamarse a sí mismas de manera más clara y legible.
*/


//Función identificador
//Legibilidad y claridad del código
function calcularPrecioTotal(subtotal, impuestos) {
  return subtotal + impuestos;
}


//Recursión
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}



//---------------

//Funciones Arrow

/*
Proporcionan una sintaxis más concisa para definir funciones en JavaScript.

Callbacks: Las funciones flecha son ideales para definir callbacks en situaciones como métodos de arrays (map, filter, forEach) o en métodos como addEventListener.

Cuando la lógica de la función es corta y se puede expresar en una sola línea

Evitar problemas de contexto: 
Las funciones flecha no tienen su propio this. 
Esto es útil cuando necesitas acceder al this del contexto circundante, como en callbacks o métodos de clase.

Closures: Las funciones flecha pueden ayudar a mantener el contexto adecuado dentro de los cierres

Retorno implícito: Las funciones flecha tienen un retorno implícito si se omite el cuerpo de la función. 
Esto es útil para funciones simples.

Funciones en contexto de objeto: Las funciones flecha pueden ser útiles al definir métodos en objetos, ya que conservan el this del objeto.
*/


//Callbacks
// Callback con función flecha en un método de array
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);


// Callback con función flecha en addEventListener
button.addEventListener("click", () => {
  console.log("Botón clicado");
});


//Funciones cortas
const sum = (a, b) => a + b;


//Evitar problemas de contexto
// Usando this en una función flecha
function MiClase() {
  this.propiedad = "Hola";

  this.metodo = () => {
    console.log(this.propiedad);
  };
}
const instancia = new MiClase();
instancia.metodo(); // Salida: "Hola"


//Closures mantener el contexto adecuado dentro de los cierres, ya que heredan el ámbito del lugar donde se definen.
function contador() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
const incrementar = contador();


//Retorno implícito si se omite el cuerpo de la función
const cuadrado = x => x * x; // Retorno implícito
const saludar = nombre => `Hola, ${nombre}!`; // Retorno implícito


//Funciones en contexto de objeto definir métodos en objetos, ya que conservan el this del objeto
const persona = {
  nombre: "Alice",
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`); // this será undefined
  }
};




//---------------

//Funciones Anónimas

/*
No tienen un nombre identificador.
Utiles para usarlas dentro de otra función o dentro de un objeto, al pasarla como parámetro. 

Callbacks: Las funciones anónimas son comunes cuando se utilizan como callbacks, es decir, funciones que se pasan como argumentos a otras funciones para ser ejecutadas en algún momento en el futuro.

Funciones de una sola vez: Si solo necesitas una función para un propósito específico y no planeas reutilizarla

Funciones inmediatas (IIFE): Las funciones anónimas son esenciales en las "Immediately Invoked Function Expressions" (IIFE), que se ejecutan inmediatamente después de ser definidas y son útiles para encapsular variables y evitar contaminar el ámbito global

Iteraciones: Las funciones anónimas son útiles en métodos de arreglos como map, filter y forEach para definir una lógica específica en línea

Closures: Las funciones anónimas a menudo se utilizan para crear closures, permitiendo que una función acceda a variables en su alcance externo

Promesas y Async/Await: En el contexto de promesas o async/await, las funciones anónimas son comunes para manejar resoluciones o rechazos
*/


//Callback funciones que se pasan como argumentos a otras funciones para ser ejecutadas en algún momento en el futuro
button.addEventListener("click", function() {
  console.log("Botón clicado");
});


//Función de un solo uso para un propósito específico y no planeas reutilizarla
setTimeout(function() {
  console.log("Han pasado 2 segundos");
}, 2000);


//Inmediata IIFE encapsular variables y evitar contaminar el ámbito global
(function() {
  const mensaje = "Soy una IIFE";
  console.log(mensaje);
})();


//Iteraciones métodos de arreglos como map, filter y forEach para definir una lógica específica en línea
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(num) {
  return num * num;
});


//Closures permitiendo que una función acceda a variables en su alcance externo
function contador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const incrementar = contador();


//Promesas y Async/Await manejar resoluciones o rechazos
fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});



//---------------

//Funciones IIFEs

/*
Se ejecutan inmediatamente después de ser definidas.

Son útiles en diversas situaciones para encapsular código y crear un ámbito aislado.

Situaciones de un solo uso propósito

Evitar contaminación del ámbito global: Al envolver el código en una IIFE, puedes evitar que las variables y funciones definidas en la IIFE se filtren en el ámbito global

Módulos y encapsulación: 
Las IIFE son fundamentales en la creación de módulos en JavaScript.
Puedes usarlas para crear un ámbito aislado y exponer solo las partes necesarias de tu código.

Preservar variables en bucles: 
Al utilizar una IIFE en un bucle, puedes capturar el valor de las variables en cada iteración, en lugar de que todas las iteraciones compartan la misma referencia.

Gestión de ámbito: Las IIFE son útiles para limitar el alcance de variables temporales y evitan la creación innecesaria de variables globales.

Plugins y librerías: Las IIFE son comunes en la creación de plugins y librerías para garantizar que el código interno esté aislado del entorno del usuario.


*/


//Ámbito privado: evitar que las variables y funciones definidas en la IIFE se filtren en el ámbito global.
(function() {
  var variablePrivada = "Esto no afecta el ámbito global";
})();

console.log(variablePrivada); // Error: variablePrivada no está definida


//Modulo: crear un ámbito aislado y exponer solo las partes necesarias de tu código.
const miModulo = (function() {
  var variablePrivada = "Solo visible en este módulo";

  function funcionPrivada() {
    console.log("Función privada");
  }

  return {
    funcionPublica: function() {
      console.log("Función pública");
    }
  };
})();

miModulo.funcionPublica(); // Salida: "Función pública"

miModulo.funcionPrivada(); // Error: funcionPrivada no está definida


//Preservar variables en bucles: capturar el valor de las variables en cada iteración, en lugar de que todas las iteraciones compartan la misma referencia.
for (var i = 0; i < 5; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index);
    }, 1000);
  })(i);
}
// Salida después de 1 segundo: 0, 1, 2, 3, 4


//Gestión de ámbitos: limitar el alcance de variables temporales y evitan la creación innecesaria de variables globales
(function() {
  var temporal = "Uso temporal";
  // Resto del código aquí
})();

console.log(temporal); // Error: temporal no está definida


//Plugins y librerías: garantizar que el código interno esté aislado del entorno del usuario.
var miLibreria = (function() {
  // Código de la librería aquí

  return {
    metodoPublico: function() {
      // Lógica pública aquí
    }
  };
})();




//---------------

//Funciones recursivas

/*
Se llaman a sí mismas para resolver un problema o realizar un cálculo. 

Son especialmente útiles en situaciones donde un problema se puede dividir en problemas más pequeños y similares al original.

Cálculos matemáticos: Problemas matemáticos como el cálculo del factorial, la serie de Fibonacci y las combinaciones se pueden resolver de manera elegante con funciones recursivas.

Estructuras de datos: Recorrer estructuras de datos anidadas, como árboles y listas enlazadas, es un caso de uso común para funciones recursivas.

Resolución de problemas: 
Problemas que pueden ser divididos en subproblemas más pequeños a menudo se pueden resolver de manera recursiva. 
Por ejemplo, recorrer directorios y subdirectorios en un sistema de archivos.

Divide y vencerás: Algoritmos de tipo "divide y vencerás" a menudo se implementan de manera recursiva, dividiendo el problema en subproblemas más pequeños y resolviéndolos por separado.

Procesamiento de datos: En análisis de datos o manipulación de estructuras complejas, las funciones recursivas pueden ser útiles para aplicar la misma lógica a diferentes niveles de profundidad.

Deben tener una condición base que detenga la recursión para evitar un bucle infinito.
Es importante entender bien el problema y evaluar si una función recursiva es la mejor opción para resolverlo.
*/



//Calculos matemáticos
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


//Recorrer estructuras de datos: como árboles y listas enlazadas
function recorrerArbol(nodo) {
  console.log(nodo.valor);
  nodo.hijos.forEach(hijo => recorrerArbol(hijo));
}


//Resolución de problemas: Problemas que pueden ser divididos en subproblemas más pequeños a menudo se pueden resolver de manera recursiva
function buscarArchivosEnDirectorio(directorio) {
  const archivos = [];
  const elementos = obtenerElementosEnDirectorio(directorio);
  elementos.forEach(elemento => {
    if (elemento.esDirectorio) {
      archivos.push(...buscarArchivosEnDirectorio(elemento));
    } else {
      archivos.push(elemento);
    }
  });
  return archivos;
}




//---------------

//Funciones Closures

/*
Permiten capturar y mantener el estado de una función incluso después de que la función haya finalizado su ejecución.

Encapsulación de datos: Los closures permiten crear variables privadas que no son accesibles desde fuera de la función, lo que promueve la encapsulación y el ocultamiento de datos.

Funciones de fábrica: Puedes usar closures para crear funciones personalizadas basadas en ciertos parámetros o configuraciones.

Manejo de callbacks: Los closures son comunes al usar callbacks, ya que puedes capturar variables en el ámbito circundante y utilizarlas en el callback.

Memoización: Los closures pueden usarse para implementar la memoización, una técnica que almacena en caché los resultados de una función costosa para mejorar el rendimiento.

Event Listeners: Los closures son muy utilizados en la programación de eventos, ya que puedes capturar el contexto del evento y utilizarlo en la función del controlador.

Iteradores personalizados: Puedes usar closures para crear iteradores personalizados que mantengan el estado entre llamadas.

*/


//Encapsulación de datos variables privadas que no son accesibles desde fuera de la función
function contador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2


//Funciones fábrica: closures para crear funciones personalizadas basadas en ciertos parámetros o configuraciones.
function crearSaludo(saludo) {
  return function(nombre) {
    console.log(`${saludo}, ${nombre}!`);
  };
}
const hola = crearSaludo("Hola");
const adios = crearSaludo("Adiós");
hola("Alice"); // "Hola, Alice!"
adios("Bob"); // "Adiós, Bob!"


//Manejo de callbacks: puedes capturar variables en el ámbito circundante y utilizarlas en el callback
function hacerAlgo(callback) {
  const datos = obtenerDatos();
  callback(datos);
}


//Memoización almacena en caché los resultados de una función costosa
function memoizacion(func) {
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = func(arg);
    cache.set(arg, result);
    return result;
  };
}


//Event Listeners, utilizados en la programación de eventos
//Para capturar el contexto del evento y utilizarlo en la función del controlador.
for (var i = 0; i < 5; i++) {
  const boton = document.createElement("button");
  boton.textContent = `Botón ${i + 1}`;
  boton.addEventListener("click", function() {
    console.log(`Botón ${i + 1} clicado`);
  });
  document.body.appendChild(boton);
}


//Iteradores personalizados mantengan el estado entre llamadas.
function crearIterador(arr) {
  let index = 0;
  return function() {
    if (index < arr.length) {
      return arr[index++];
    }
  };
}

const iterador = crearIterador([1, 2, 3]);
console.log(iterador()); // 1
console.log(iterador()); // 2
console.log(iterador()); // 3
console.log(iterador()); // undefined




/*.........................*/

//Funciones ejemplos


//Funciones regulares o convencionales


// Definición de una función convencional
function saludar(nombre) {
  const mensaje = `¡Hola, ${nombre}!`;
  console.log(mensaje);
}

// Llamada a la función convencional
saludar("Alice"); // Salida: ¡Hola, Alice!


// Función convencional con parámetros múltiples y retorno
function sumar(a, b) {
  return a + b;
}
const resultadoSuma = sumar(5, 3);
console.log(resultadoSuma); // Salida: 8


// Función convencional anidada
function operacionesMatematicas(a, b) {
  function suma() {
    return a + b;
  }
  function resta() {
    return a - b;
  }
  const sumaResultado = suma();
  const restaResultado = resta();
  console.log(`Suma: ${sumaResultado}, Resta: ${restaResultado}`);
}
operacionesMatematicas(10, 4); // Salida: Suma: 14, Resta: 6


// Función convencional como método de un objeto
const persona = {
  nombre: "Bob",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
persona.saludar(); // Salida: Hola, soy Bob


// Función convencional con uso de 'arguments'
function argumentosDemo() {
  console.log("Número de argumentos:", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argumento ${i + 1}: ${arguments[i]}`);
  }
}
argumentosDemo(1, "dos", true); // Salida:
// Número de argumentos: 3
// Argumento 1: 1
// Argumento 2: dos
// Argumento 3: true



//---------------

//Funciones Arrow


// Función flecha básica
const saludar = (nombre) => {
  const mensaje = `¡Hola, ${nombre}!`;
  console.log(mensaje);
};

saludar("Alice"); // Salida: ¡Hola, Alice!


// Función flecha con retorno implícito
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // Salida: 8


// Función flecha con un solo parámetro
const cuadrado = x => x * x;
console.log(cuadrado(4)); // Salida: 16


// Función flecha sin parámetros
const saludarAmigo = () => {
  console.log("¡Hola, amigo!");
};
saludarAmigo(); // Salida: ¡Hola, amigo!


// Función flecha como método de un objeto
const persona = {
  nombre: "Bob",
  saludar: () => {
    console.log(`Hola, soy ${persona.nombre}`);
  }
};
persona.saludar(); // Salida: Hola, soy Bob


// Función flecha con array map
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]



//---------------

//Funciones Anónimas


// Función anónima asignada a una variable
const saludar = function(nombre) {
  const mensaje = `¡Hola, ${nombre}!`;
  console.log(mensaje);
};

saludar("Alice"); // Salida: ¡Hola, Alice!


// Función anónima como argumento de otra función
function ejecutarOperacion(num1, num2, operacion) {
  const resultado = operacion(num1, num2);
  console.log("Resultado:", resultado);
}

ejecutarOperacion(10, 5, function(a, b) {
  return a + b;
}); // Salida: Resultado: 15


// Función anónima autoinvocada (IIFE)
(function() {
  console.log("Esta es una IIFE (Immediately Invoked Function Expression)");
})();


// Función anónima como método de un objeto
const persona = {
  nombre: "Bob",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
persona.saludar(); // Salida: Hola, soy Bob


// Función anónima con arrow function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // Salida: 12




//---------------

//Funciones IIFE


// IIFE básica
(function() {
  console.log("Esta es una IIFE (Immediately Invoked Function Expression)");
})();


// IIFE con parámetros
(function(nombre) {
  console.log(`Hola, ${nombre} desde la IIFE`);
})("Alice"); // Salida: Hola, Alice desde la IIFE


// IIFE para encapsulación de código
const contador = (function() {
  let count = 0;

  return {
    incrementar: function() {
      count++;
    },
    obtenerValor: function() {
      return count;
    }
  };
})();

contador.incrementar();
contador.incrementar();
console.log(contador.obtenerValor()); // Salida: 2


// IIFE con argumentos externos
const nombre = "Bob";
const resultado = (function(nombre) {
  return `¡Hola, ${nombre} desde la IIFE!`;
})(nombre);
console.log(resultado); // Salida: ¡Hola, Bob desde la IIFE!



//---------------

//Funciones Recursivas


// Cálculo de factorial de manera recursiva
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120


// Cálculo de la serie de Fibonacci de manera recursiva
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // Salida: 13


// Recorrido de un árbol anidado
const arbol = {
  valor: 10,
  hijos: [
    {
      valor: 5,
      hijos: []
    },
    {
      valor: 8,
      hijos: [
        {
          valor: 3,
          hijos: []
        }
      ]
    }
  ]
};

function recorrerArbol(nodo) {
  console.log(nodo.valor);
  nodo.hijos.forEach(hijo => recorrerArbol(hijo));
}

recorrerArbol(arbol); // Salida: 10, 5, 8, 3


// Cálculo de números de Fibonacci con memoización
function fibonacciMemoizacion(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const resultado = fibonacciMemoizacion(n - 1, memo) + fibonacciMemoizacion(n - 2, memo);
  memo[n] = resultado;
  return resultado;
}

console.log(fibonacciMemoizacion(7)); // Salida: 13



//---------------

//Funciones Closures


// Función closure para encapsulación de datos
function contador() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const incrementar = contador();
console.log(incrementar()); // Salida: 1
console.log(incrementar()); // Salida: 2


// Función closure con estado privado
function persona(nombre) {
  const nombrePrivado = nombre;

  return {
    obtenerNombre: function() {
      return nombrePrivado;
    }
  };
}

const alice = persona("Alice");
console.log(alice.obtenerNombre()); // Salida: Alice


// Función closure para manejo de eventos
function botonOnClick() {
  const boton = document.querySelector("#mi-boton");
  const contador = document.querySelector("#contador");

  let count = 0;
  boton.addEventListener("click", function() {
    count++;
    contador.textContent = `Clics: ${count}`;
  });
}

botonOnClick(); // El botón debe estar en el HTML con el id "mi-boton"


// Función closure para memoización
function memoizacion(func) {
  const cache = {};

  return function(n) {
    if (n in cache) {
      console.log("Desde caché");
      return cache[n];
    } else {
      console.log("Cálculo nuevo");
      const resultado = func(n);
      cache[n] = resultado;
      return resultado;
    }
  };
}

function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
}

const factorialMemoizado = memoizacion(calcularFactorial);
console.log(factorialMemoizado(5)); // Salida: Cálculo nuevo (factorial de 5)
console.log(factorialMemoizado(5)); // Salida: Desde caché (factorial de 5)





/*.........................*/

//Strict Mode 

/*
Habilitar el modo estricto implica una serie de restricciones y reglas adicionales que el intérprete de JavaScript aplicará al analizar y ejecutar el código. 
Esto ayuda a prevenir errores comunes y a mejorar la calidad del código para que sea más seguro y predecible.

El modo estricto en tu archivo JavaScript, no solo afecta el alcance local de las funciones, 
sino que también afecta el alcance global, es decir, el ámbito fuera de todas las funciones.

Una vez habilitado, no se pueden revertir sus restricciones en ese ámbito particular. 
Por lo tanto, es importante asegurarse de que tu código esté preparado para el modo estricto antes de habilitarlo en un proyecto existente. 
*/

'use strict';

function miFuncion() {
  // Código en modo estricto
}


//1. Evita el uso de variables globales implícitas:
//2. Generará un error si intentas asignar un valor a una variable no declarada.

//Declarar una variable
let x; 

//Asignar valor a una variable
x = 1;

//Declara y asignar valor
let x = 1 

//Variable global no declarada en función:
function miFuncion() {
  x = 10; // x se convierte en una variable global no declarada
}

miFuncion();
console.log(x); // 10



//3. No se permite eliminar variables y funciones: 
//En el modo estricto, el uso de delete en variables y funciones generará un error.


//4. Evita asignaciones a palabras clave reservadas:
undefined = 5; // Generará un error: Cannot assign to undefined

NaN = 10; // Generará un error: Cannot assign to NaN

Infinity = 100; // Generará un error: Cannot assign to Infinity


//5. Funciones deben tener parámetros únicos:
"use strict";

// Esto lanzará un error en modo estricto
function suma(a, a, b) {
  return a + a + b;
}


//6. Evita el uso de octales en literales: 

/*Los literales octales (por ejemplo, 0123) no son permitidos en modo estricto.
los literales numéricos pueden representar valores en diferentes bases numéricas, como decimal, octal y hexadecimal. 
Los literales octales son aquellos que comienzan con el prefijo "0" seguido por uno o más dígitos en el rango de 0 a 7. 
Por ejemplo, el número octal 0123 representa el valor decimal 83 porque 1 * 8^2 + 2 * 8^1 + 3 * 8^0 = 83.
En el "modo estricto", el uso de literales octales está desaconsejado y puede generar errores.
*/

"use strict";

const numeroOctal = 0123; // Esto lanzará un error en modo estricto

console.log(numeroOctal);



//7. Evita el uso de this global: 
/*
En modo estricto, this dentro de una función no referenciará al objeto global (window en navegadores). 
En su lugar, será undefined si la función no está siendo llamada como un método.
Cuando la función se llama como un método de objeto, el valor de this se refiere al objeto objeto.
*/

"use strict";

function mostrarThis() {
console.log(this);
}

mostrarThis(); // Salida: undefined

const objeto = {
metodo: mostrarThis
};

objeto.metodo(); // Salida: { metodo: [Function: mostrarThis] }



//8. Errores en asignaciones no extensibles: 
/*
En modo estricto, no puedes agregar propiedades a objetos que son "no extensibles".
Un objeto en JavaScript puede ser "extensible" o "no extensible". 
Un objeto extensible es aquel al que puedes agregar nuevas propiedades en cualquier momento, incluso después de haber sido creado.
*/

"use strict";

const persona = {
  nombre: "Juan"
};

// Hacemos que el objeto sea no extensible
Object.preventExtensions(persona);

// Esto lanzará un error en modo estricto
persona.edad = 30;



//9. Modo estricto para eval y funciones en el ámbito global: 
/*
En modo estricto, el código dentro de una función eval y en el ámbito global se ejecuta en modo estricto.
Una función 'eval' toma una cadena de texto como argumento y la evalúa como código JavaScript en el contexto actual. 
Básicamente, permite ejecutar código JavaScript dinámicamente en tiempo de ejecución.

Si el código pasado a eval proviene de fuentes no confiables, 
podría ejecutar código malicioso en tu aplicación. 
Además, el uso excesivo de eval puede dificultar la depuración y el mantenimiento del código, 
ya que el código dinámico puede ser difícil de rastrear y entender.
*/


const num1 = 5;
const num2 = 10;
const operacion = "num1 + num2";

const resultado = eval(operacion); // Aquí se evalúa la cadena "num1 + num2"
console.log(resultado); // Salida: 15


"use strict";

function funcionEjemplo() {
eval("console.log('Código en eval en modo estricto')");
}

funcionEjemplo(); // Salida: Código en eval en modo estricto

console.log('Código global en modo estricto');



/*.........................*/

//This 


//Solo
/*
1. En el contexto global (fuera de cualquier función o método): 
"this" hace referencia al objeto global. 
*/

console.log(this); // En un navegador, esto mostrará el objeto 'window'



//Función

/*
2. Dentro de una función normal: 
"this" hace referencia al objeto que invoca la función. 
Puede variar dependiendo de cómo se llama la función.
*/

function imprimirThis() {
console.log(this);
}

imprimirThis(); // En el navegador, mostrará el objeto 'window'



//Función Arrow
/*
3. En funciones de flecha ("Arrow Functions"):
"this" hace referencia al valor "this" del contexto en el que se creó la función, 
lo que puede diferir de cómo se comporta en funciones regulares.
*/

const objetoArrow = {
  nombre: "Maria",
  saludar: () => {
    console.log("Hola, mi nombre es " + this.nombre); // 'this' hace referencia al objeto global 'window' (en un navegador)
  }
};

objetoArrow.saludar(); // Salida: "Hola, mi nombre es undefined"



//Metodo 
/*
Dentro de un método de un objeto:
"this" hace referencia al objeto que contiene el método.
Permite acceder y manipular las propiedades y métodos del objeto desde dentro del propio método.
El valor de this en un método está ligado al objeto que contiene el método y cambia según el contexto de la llamada, como se ve en el segundo ejemplo.

this se refiere al objeto persona, lo que permite acceder a sus propiedades (nombre y edad) y mostrar la información correcta.

Si se llama directamente a través del objeto, como en el ejemplo anterior, this se refiere a ese objeto. 
Sin embargo, si extraes el método y lo llamas de manera independiente, el valor de this podría cambiar.
*/

const persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
};

persona.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.


const saludar = persona.saludar;
saludar(); // Salida: Hola, mi nombre es undefined y tengo undefined años.



//Evento
/*
'this' se refiere al elemento DOM que disparó el evento. 
Cuando un evento ocurre en un elemento HTML, como un clic de ratón o un cambio en un campo de entrada, 
se puede asociar una función JavaScript para manejar ese evento.
*/

const boton = document.querySelector('#miBoton');

boton.addEventListener('click', function() {
  console.log(this); // Se refiere al elemento 'boton' que disparó el evento
});




//Callback 
/*
Es un función que se pasa como argumento de otra. 
En este caso, el valor de this puede variar según cómo se invoca la función que contiene el callback.
*/

function hacerAlgo(callback) {
  callback();
}

const objeto = {
  metodo: function() {
    hacerAlgo(function() {
      console.log(this); // Se refiere a 'window' en un navegador
    });
  }
};

objeto.metodo();




//---------------

//Function borrowing (préstamo)

/*
Implica tomar una función de un objeto y usarla en otro objeto sin copiar ni modificar la función en sí. 
Esto es posible debido a cómo funciona el valor de this en JavaScript y cómo se puede modificar temporalmente para que apunte a un objeto diferente.
Se utiliza cuando tienes dos objetos con métodos similares pero no idénticos, y quieres reutilizar uno de los métodos en lugar de duplicar el código.

Tenemos dos objetos: persona1 y persona2. Ambos tienen una propiedad nombre, pero solo persona1 tiene un método saludar.
Mediante el uso del método call (o apply), podemos "tomar prestado" el método saludar de persona1 y usarlo en el contexto de persona2.
*/

const persona1 = {
  nombre: "Juan",
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
};

const persona2 = {
  nombre: "María"
};

persona1.saludar(); // Salida: Hola, mi nombre es Juan

// Usando la función 'saludar' de persona1 en persona2
persona1.saludar.call(persona2); // Salida: Hola, mi nombre es María




//---------------

//Explicit binding (vinculación)
/*
Es un concepto en JavaScript que se refiere a la forma en que puedes controlar explícitamente el valor de this en una función utilizando métodos como call, apply o bind.
Estos métodos permiten establecer el valor de this para una función en un objeto específico, independientemente del contexto en el que se llame la función.
La vinculación explícita es especialmente útil cuando tienes una función que normalmente se ejecuta en un contexto, pero deseas ejecutarla en el contexto de otro objeto temporalmente.
*/

//Call
/*
Invocar una función con un valor de this y argumentos específicos. 
Los argumentos se pasan como argumentos separados por coma después del primer argumento que establece el valor de this.
*/

function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
}

const persona = {
  nombre: "Juan"
};

saludar.call(persona); // Salida: Hola, mi nombre es Juan




//Ejemplos





//---------------


//Apply
/*
similar a call (la función debe tener this)
pero los argumentos se pasan como un arreglo.
*/

function saludar(mensaje) {
  console.log(`${mensaje}, mi nombre es ${this.nombre}.`);
}

const persona = {
  nombre: "María"
};

saludar.apply(persona, ["Hola"]); // Salida: Hola, mi nombre es María



//Ejemplos





//---------------

//Bind
/*
Devuelve una nueva función con un valor de this preestablecido y, opcionalmente, argumentos preestablecidos.
*/

function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
}

const persona = {
  nombre: "Luis"
};

const funcionSaludar = saludar.bind(persona);

funcionSaludar(); // Salida: Hola, mi nombre es Luis





//---------------

//Contextos en Js y su relación con this
/*
Se refieren al entorno en el cual se ejecuta un fragmento de código y cómo las variables y funciones están disponibles en ese entorno.
This puede hacer referencia a un objeto o a un contexto como window cuando se lo llama solo o en una función Arrow.  
*/


//contexto global: 
/*
this: objeto global, que es window en un navegador o el objeto global en Node.js.
variables y funciones: son accesibles desde cualquier parte del código

*/


//contexto función: 
/*
this: this puede variar dependiendo de cómo se llama la función.
variables y funciones: solo son accesibles dentro de esa función, a menos que sean declaradas con var
*/


//contexto objeto: 
/*
this: se refiere al objeto que contiene la función en la que se encuentra.
crucial para las funciones que son métodos de objetos.

variables y funciones: declaradas en el objeto son accesibles desde todas las funciones dentro del objeto
*/


//evento: 
/*
this: elemento DOM que disparó el evento.
variables y funciones: declaradas fuera del manejador de eventos pueden no ser accesibles dentro de él debido a la naturaleza de los closures.
*/


//arrow function: 
/*
this: this se mantiene en el contexto donde se definió la función, no es afectado por cómo se llama.
variables y funciones: e están en el mismo contexto donde se definió la función flecha son accesibles en ella.
*/


//contexto de bloque: 
/*
los bloques ({}) crean su propio ámbito de variables, aunque el objeto this aún puede cambiar dependiendo de cómo se ejecute el código.
variables y funciones:
*/


//---------------

//Objeto window

/*
Es un objeto global en el entorno de navegadores web. Representa la ventana o pestaña del navegador en la que se está ejecutando el código JavaScript. 
El objeto window proporciona una interfaz para interactuar con la ventana del navegador y controlar aspectos relacionados con la ventana, como la ubicación, el historial, los temporizadores y más.
El objeto window es implícito en el entorno del navegador, lo que significa que no es necesario escribir window. antes de acceder a sus propiedades y métodos. 
Por ejemplo, setTimeout es equivalente a window.setTimeout.
Ten en cuenta que mientras window es específico del entorno del navegador, en otros entornos como Node.js, no existe el objeto window, ya que no hay una ventana del navegador. 
En su lugar, Node.js proporciona otros objetos globales y funcionalidades.
*/


//Document Object Model (DOM): 
/*
window contiene el árbol DOM de la página web actual
acceder y manipular los elementos HTML y sus propiedades utilizando métodos como document.getElementById, document.querySelector
*/
document.getElementById, document.querySelector


//Timers: window permite usar los métodos 
setTimeout y setInterval


//Ventana del Navegador: para controlar la ventana del navegador abrir o cerrar nuevas ventanas o pestañas
window.open window.close


//Ubicación: acceder y manipular la URL actual de la página
window.location


//Historial del Navegador: acceder y manipular el historial de navegación del usuario, como navegar hacia atrás o hacia adelante en la sesión de navegación.
window.history


//Almacenamiento Web: permiten almacenar datos en el navegador para su uso posterior
window.localStorage y window.sessionStorage


//Alertas, Confirmaciones y Prompts: para interactuar con el usuario mostrando mensajes, solicitudes de confirmación y solicitudes de entrada.
window.alert, window.confirm y window.prompt


//Manejo de Errores: permite capturar y manejar errores no controlados en la página.
window.onerror



//Eventos Globales: adjuntar manejadores de eventos globales
window.addEventListener




/*.........................*/

//JS Asíncrono

/*
Es la capacidad del lenguaje de programación JavaScript para ejecutar tareas de manera no bloqueante, 
lo que permite que el código continúe ejecutándose mientras se realizan operaciones que pueden llevar tiempo, 
como solicitudes a servidores, lectura y escritura de archivos, o interacciones con bases de datos.
*/

/*
Entorno síncrono: 
las tareas se ejecutan una tras otra, lo que significa que el programa espera 
a que una tarea se complete antes de pasar a la siguiente
*/

/*
Entorno asíncrono: 
Permite que las tareas se ejecuten en segundo plano mientras el código principal sigue avanzando. 
Esto se logra utilizando conceptos como callbacks, promesas, async/await y eventos.
*/


//Cuando usar asincrónia:
/*
Operaciones de red: 
  Las solicitudes HTTP (a un servidor para obtener datos (ejemplo, mediante AJAX)), las llamadas a API y otras operaciones de red pueden bloquear la ejecución del código si se manejan de manera síncrona. 
  Usar asincronía aquí permite que tu aplicación siga siendo receptiva mientras espera las respuestas del servidor.

Operaciones de E/S: 
  Lectura y escritura de archivos, acceso a bases de datos y otras operaciones de E/S pueden ser lentas y bloqueantes. 
  La asincronía permite que otras partes del programa continúen ejecutándose mientras se esperan los resultados.

Temporizadores: 
  Utilizar setTimeout o setInterval para ejecutar código después de un cierto período de tiempo es una forma de asincronía útil para realizar tareas periódicas sin bloquear el hilo de ejecución.

Interacciones con el DOM: 
  Cambios en el DOM, eventos del usuario y animaciones pueden ser manejados de manera asincrónica para evitar bloquear la interfaz de usuario.

Trabajo en segundo plano: 
  En el entorno de navegador o en Node.js, puedes realizar tareas de procesamiento intensivas en segundo plano sin bloquear la interfaz de usuario o el hilo principal.
*/


//Cuando no usar asincrónia: 
/*
Operaciones síncronas simples: 
  Si una operación es rápida y no bloquea la ejecución, no es necesario convertirla en una operación asíncrona.

Código simple y de un solo hilo: 
  Si tu aplicación es pequeña y no realiza muchas operaciones asíncronas, es posible que no necesites usar la asincronía de manera extensiva.

Mantenimiento y comprensión: 
  Demasiada asincronía puede dificultar la comprensión y el mantenimiento del código. 
  En algunos casos, un enfoque síncrono puede ser más simple y claro.
*/



//Funciones asincronícas: 

/*
Puede haber un pequeño desfase debido a la programación del sistema y la carga del procesador.
*/


//setTimeout: 
//retrasos en la ejecución de código.


setTimeout(funcion, tiempoEnMilisegundos);



console.log("Inicio");

setTimeout(function() {
  console.log("Este mensaje aparecerá después de 2 segundos");
}, 2000); // 2000 milisegundos = 2 segundos

console.log("Fin");



function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

setTimeout(saludar, 1000, "Juan"); // Salida después de 1 segundo: Hola, Juan




//setInternal: 
/*
Se utiliza para ejecutar repetidamente una función a intervalos regulares.

setInterval ejecutará la función indefinidamente hasta que se detenga manualmente con clearInterval, 
por lo que debes tener cuidado de no crear intervalos que puedan sobrecargar la ejecución.


realizar una tarea de manera repetitiva, como actualizar la hora en un reloj en tiempo real, 
realizar verificaciones periódicas de datos o ejecutar animaciones.
*/

setInterval(funcion, tiempoEnMilisegundos);


let contador = 0;

const intervalId = setInterval(function() {
  contador++;
  console.log(`Contador: ${contador}`);
  
  if (contador >= 5) {
    clearInterval(intervalId); // Detiene el intervalo después de 5 ejecuciones
  }
}, 1000); // Ejecuta cada 1000 milisegundos (1 segundo)



//Callbacks: 

/*
Son funciones que se pasan como argumentos a otras funciones. 
Estas funciones callback se ejecutan después de que se complete una tarea asincrónica 
o cuando se cumple una condición específica. 

Los callbacks son fundamentales en la programación asincrónica y se utilizan ampliamente para manejar eventos, 
realizar solicitudes HTTP, manejar temporizadores y más.
*/

// Función que toma un callback como argumento
function operacionAsincronica(parametro, callback) {
  // Realizar alguna tarea asincrónica aquí

  // Llamar al callback cuando la tarea esté completa
  callback(resultado);
}

// Definir la función callback
function miCallback(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

// Llamar a la función con el callback
operacionAsincronica(5, miCallback);


/*
La función operacionAsincronica toma dos argumentos: un parámetro y una función callback.

Dentro de operacionAsincronica, se realiza una tarea asincrónica 
(por ejemplo, una solicitud AJAX) y luego se llama al callback con el resultado.

Se define la función miCallback, que recibe el resultado de la tarea 
y realiza alguna acción con él (en este caso, imprimir en la consola).

Finalmente, se llama a operacionAsincronica pasando el parámetro 
y el callback como argumentos.
*/


function realizarOperacion(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

function mostrarResultado(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

realizarOperacion(5, 3, mostrarResultado); // Llamada con un callback

/*
La función realizarOperacion toma dos números y un callback como argumentos.
Después de realizar la operación (suma en este caso), llama al callback y pasa el resultado 
a la función mostrarResultado, que imprime el resultado en la consola.
*/



//Callback hell: 

/*
Situación en la que los callbacks anidados en el código crean una estructura de código confusa y difícil de mantener. 
Esto ocurre cuando se tienen múltiples operaciones asincrónicas o llamadas de retorno en secuencia, y los callbacks se anidan unos dentro de otros. 
Como resultado, el código se vuelve difícil de leer, comprender y depurar.
*/

realizarAccion1(function(resultado1) {
  // Código dentro de realizarAccion1
  realizarAccion2(resultado1, function(resultado2) {
    // Código dentro de realizarAccion2
    realizarAccion3(resultado2, function(resultado3) {
      // Código dentro de realizarAccion3
      realizarAccion4(resultado3, function(resultado4) {
        // Código dentro de realizarAccion4
        // ... y así sucesivamente
      });
    });
  });
});

/*
Para evitar el "Callback Hell", se han desarrollado técnicas más avanzadas de manejo de asincronía, como las promesas y las funciones async/await. 
Estas técnicas permiten escribir un código más limpio y legible al manejar operaciones asincrónicas sin anidar excesivamente los callbacks. 
Aquí hay un ejemplo de cómo se vería el mismo código utilizando promesas:
Ejemplo de Promises: 
*/
realizarAccion1()
  .then(resultado1 => realizarAccion2(resultado1))
  .then(resultado2 => realizarAccion3(resultado2))
  .then(resultado3 => {
    // Realizar más acciones si es necesario
  })
  .catch(error => {
    // Manejar errores
  });



//Promises:
/*
Son un patrón de manejo de asincronía que facilita la gestión de operaciones asíncronas y la evita la caída en el "Callback Hell". 
Una promesa es un objeto que representa la finalización o el fracaso de una operación asincrónica y permite encadenar acciones adicionales después de que se complete.
Permiten encadenar acciones en una secuencia lógica, lo que hace que el código asincrónico sea más legible y mantenible. 
Además, son la base de otras características asincrónicas como las funciones async/await.
*/


/*
tienen tres estados posibles:

1. Pending (Pendiente): 
  La promesa está en espera de que se cumpla o se rechace.

2. Fulfilled (Cumplida): 
  La operación asincrónica se completó con éxito y se resolvió la promesa.

3. Rejected (Rechazada): 
  La operación asincrónica falló y la promesa se rechazó.
*/

const miPromesa = new Promise((resolve, reject) => {
  // Realizar una operación asincrónica aquí
  // Si tiene éxito, llama a resolve con el resultado
  // Si falla, llama a reject con el motivo del error
});

miPromesa
  .then(resultado => {
    // Se ejecuta cuando la promesa se resuelve
  })
  .catch(error => {
    // Se ejecuta cuando la promesa se rechaza
  });


/*
promesas para manejar una operación asincrónica
como una solicitud HTTP:
*/


function hacerPeticion(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(Error('Fallo en la solicitud'));
      }
    };
    xhr.onerror = () => {
      reject(Error('Error de red'));
    };
    xhr.send();
  });
}

hacerPeticion('https://jsonplaceholder.typicode.com/posts/1')
  .then(resultado => {
    console.log('Respuesta:', resultado);
  })
  .catch(error => {
    console.error('Error:', error);
  });


/*
La función hacerPeticion devuelve una promesa que resuelve o rechaza dependiendo del resultado de la solicitud HTTP. 
Luego, se utilizan los métodos .then() y .catch() para manejar el resultado o el error de la promesa.
*/


//async/await: 
/*
async/await es una forma moderna y más legible de manejar operaciones asincrónicas en JavaScript. 

Está construida sobre el concepto de promesas y proporciona una sintaxis más similar a la programación síncrona, 
lo que facilita la comprensión y el mantenimiento del código asincrónico.

Puedes usar estructuras de control como try/catch para manejar errores de manera más natural.
una función con async siempre devuelve una promesa, incluso si no se usa explícitamente return.
*/

/*
async:
Se coloca antes de una función para indicar que dicha función retornará una promesa y que puede contener operaciones asincrónicas. 
    
await: 
Se utiliza dentro de una función async para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.
*/

// Función asincrónica con async/await
async function miFuncionAsincronica() {
  try {
    // Esperar a una promesa usando await
    const resultado1 = await promesa1;
    const resultado2 = await promesa2;

    // Realizar más operaciones síncronas

    return resultadoFinal;
  } catch (error) {
    // Manejar errores
  }
}

// Llamar a la función asincrónica
miFuncionAsincronica()
  .then(resultado => {
    // Manejar el resultado
  })
  .catch(error => {
    // Manejar errores
  });

/*
Declaramos una función llamada miFuncionAsincronica con la palabra clave async.
Usamos la palabra clave await para esperar a que las promesas (promesa1 y promesa2) se resuelvan antes de continuar con la ejecución.
Dentro del bloque try, realizamos más operaciones síncronas si es necesario.
Si ocurre un error en cualquier parte del proceso, se captura en el bloque catch y se maneja adecuadamente.
*/



// Función asincrónica con async/await
async function obtenerDatos(url) {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    throw new Error('No se pudo obtener los datos');
  }
}

// Llamar a la función asincrónica
obtenerDatos('https://jsonplaceholder.typicode.com/posts/1')
  .then(datos => {
    console.log('Datos:', datos);
  })
  .catch(error => {
    console.error('Error:', error);
  });

/*
La función obtenerDatos es declarada con la palabra clave async, lo que indica que contiene operaciones asincrónicas.
Dentro de la función, usamos await para esperar la respuesta de la solicitud fetch y luego esperamos a que se convierta a JSON.
Si hay algún error durante el proceso, el bloque catch maneja el error.
*/



//Event Loop 
/*
Es el mecanismo que permite que el código JavaScript se ejecute de manera asíncrona y responda a eventos y tareas no bloqueantes.
JavaScript es un lenguaje de programación de un solo subproceso, lo que significa que solo puede ejecutar una tarea a la vez en un solo hilo. 
Sin embargo, muchas operaciones en JavaScript, como solicitudes de red, operaciones de E/S (entrada/salida) y temporizadores, son asincrónicas y podrían bloquear la ejecución del hilo si se manejaran de manera síncrona.
Aquí es donde entra en juego el "Event Loop". El bucle de eventos es una estructura que se encarga de gestionar las tareas asíncronas y los eventos en el entorno de ejecución de JavaScript, ya sea en un navegador o en un entorno de servidor como Node.js.
*/

/*
Funciona de la siguiente manera:

1. Call Stack (Pila de Llamadas):
  Cuando se llama a una función, se agrega a la pila de llamadas. 
  Si una función llama a otra función, se apila una encima de la otra.

2. Web APIs (APIs Web): 
  Cuando se ejecuta una tarea asíncrona, como una solicitud de red o un temporizador, la tarea se mueve a las APIs web proporcionadas por el entorno (por ejemplo, el navegador). 
  Estas APIs manejan la tarea y la devuelven al "Event Loop" cuando se completa.

3. Callback Queue (Cola de Retorno de Llamada): 
  Una vez que la tarea asíncrona se completa, se coloca en la cola de retorno de llamada.

4. Event Loop: 
  El "Event Loop" revisa constantemente la pila de llamadas y la cola de retorno de llamada. 
  Si la pila está vacía, el "Event Loop" toma la próxima tarea de la cola de retorno de llamada y la agrega a la pila de llamadas para su ejecución.

5. Call Stack (Pila de Llamadas): 
  La función en la parte superior de la pila de llamadas se ejecuta. 
  Si hay llamadas a otras funciones dentro de esta función, se agregan a la pila. 
  Una vez que la función actual se completa, se elimina de la pila.

Este proceso se repite continuamente, lo que permite que el código asíncrono se ejecute de manera no bloqueante y que el programa pueda responder a eventos y ejecutar tareas asincrónicas de manera efectiva.
*/


console.log("Inicio");

setTimeout(function() {
  console.log("Tarea asíncrona completada");
}, 2000);

console.log("Fin");

// Salida:
// Inicio
// Fin
// Tarea asíncrona completada (después de 2 segundos)

/*
la tarea setTimeout se coloca en una API web y se ejecuta después de un retraso de 2 segundos.
Mientras tanto, las funciones en la pila de llamadas (console.log("Inicio") y console.log("Fin")) se ejecutan de manera síncrona. 
Una vez que se completa la tarea asíncrona, se coloca en la cola de retorno de llamada y luego se ejecuta cuando el "Event Loop" la retoma de la cola.
*/



/*.........................*/

//Template literals




//---------------


/*.........................*/

//Propiedades



//---------------



/*.........................*/

//Metodos



//---------------

