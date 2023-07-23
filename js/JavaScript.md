#JS

Es un lenguaje de programación interpretado, de alto nivel y orientado a objetos. Fue diseñado originalmente para ser utilizado en el lado del cliente (es decir, en el navegador web) para mejorar la interactividad y dinamismo de las páginas web. 

Sin embargo, a lo largo de los años, su alcance se ha expandido significativamente, y ahora también es utilizado en el lado del servidor y para el desarrollo de aplicaciones de escritorio y móviles.

fue creado por Brendan Eich mientras trabajaba para Netscape Communications en 1995. La idea original era tener un lenguaje de scripting ligero para interactuar con los elementos de las páginas web y realizar acciones del lado del cliente. 

El lenguaje se diseñó en solo diez días y originalmente se llamó "LiveScript", pero poco después fue renombrado a "JavaScript" para capitalizar la creciente popularidad de Java en ese momento.

En la actualidad es uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo del desarrollo web y de software. Su uso se ha vuelto prácticamente imprescindible para el desarrollo de aplicaciones web modernas debido a su versatilidad y la creciente comunidad de desarrolladores y bibliotecas de código abierto que lo respaldan.

Frameworks y bibliotecas como React, Angular, y Vue.js han impulsado aún más la adopción de JavaScript en el desarrollo de aplicaciones web complejas. Además, JavaScript se ha vuelto esencial para el desarrollo de aplicaciones móviles híbridas y para el desarrollo de juegos a través de bibliotecas como Phaser y Three.js.



|| Propósitos

	Es agregar interactividad y funcionalidades dinámicas a las páginas web. Permite a los desarrolladores crear efectos visuales, validar formularios, manipular el contenido de la página en tiempo real, interactuar con el usuario y más. 

	1. Interacción del usuario: 

		Permite crear páginas web interactivas que responden a las acciones del usuario, como hacer clic, desplazarse y escribir en formularios.


    2. Manipulación del DOM: 

    	Permite a los desarrolladores acceder y modificar los elementos de la página web, como cambiar el contenido, estilo y atributos de los elementos.


    3. Comunicación con el servidor: 

    	Facilita la comunicación asíncrona con el servidor para cargar datos y actualizar partes de la página sin necesidad de recargarla por completo, mediante técnicas como AJAX (Asynchronous JavaScript and XML).


    4. Desarrollo de aplicaciones web: 

    	JavaScript se utiliza para construir aplicaciones web más complejas, conocidas como aplicaciones de una sola página (SPA) o aplicaciones web progresivas (PWA).


    5. Desarrollo de aplicaciones del lado del servidor: 

    	Con el surgimiento de Node.js, JavaScript también se puede utilizar para desarrollar aplicaciones del lado del servidor, lo que permite a los desarrolladores utilizar un solo lenguaje en toda la pila tecnológica.



|| Versiones de JS
	
	A lo largo de los años, JavaScript ha tenido varias versiones y actualizaciones importantes.

	JavaScript 1.0 (1995): 

		Esta fue la primera versión pública de JavaScript lanzada en Netscape Navigator 2.0 en 1995.


	JavaScript 1.1 (1996): 

	    Introdujo mejoras y correcciones de errores a la versión anterior.


	JavaScript 1.2 (1997): 

	    Añadió compatibilidad con las etiquetas "let" para declarar variables locales y "const" para declarar constantes. También agregó soporte para funciones recursivas y algunas mejoras en las capacidades de manejo de errores.


	JavaScript 1.3 (1998): 

	    Esta versión trajo mejoras menores y correcciones de errores.


	JavaScript 1.4 (1999): 

	   	Introdujo características como métodos de matriz adicionales, expresiones regulares mejoradas y soporte para funciones "eval".


	JavaScript 1.5 (2000): 

	    Esta versión introdujo mejoras significativas, como soporte para métodos nativos de arrays, manejo de excepciones mejorado (bloque try-catch), funciones "forEach" y "map" para arreglos, y el objeto "RegExp".


	ECMAScript 3 (ES3) (1999): 

	    Aunque técnicamente no es una versión de JavaScript, ES3 es la tercera edición de ECMAScript, que es el estándar en el que se basa JavaScript. Esta especificación definió la versión más ampliamente adoptada de JavaScript en los navegadores durante muchos años.


	ECMAScript 4 (ES4) (abandonado): 

	    Se intentó una revisión mayor en la especificación de ECMAScript con ES4, pero debido a desacuerdos y falta de consenso en la comunidad, el desarrollo se abandonó, y no se implementó ampliamente en los navegadores.


	ECMAScript 5 (ES5) (2009): 

	    Esta versión trajo importantes mejoras al lenguaje y se convirtió en una base sólida para el desarrollo web. Introdujo "strict mode" para evitar errores comunes y agregó nuevos métodos para arreglos, como "forEach" y "map". También se incluyeron métodos para manipulación de cadenas y mejoras en JSON (JavaScript Object Notation).


	ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015) (2015): 

	   	Esta fue una de las actualizaciones más grandes y significativas para JavaScript. Introdujo características como clases, funciones flecha, desestructuración, promesas, let y const, y más. También se implementaron módulos para facilitar la organización y reutilización del código.


	A partir de ECMAScript 6, la especificación ECMAScript se actualiza anualmente, lo que ha permitido una evolución continua del lenguaje. Las versiones posteriores han incluido mejoras adicionales, como ECMAScript 7 (ES7) / ECMAScript 2016 (ES2016), ECMAScript 8 (ES8) / ECMAScript 2017 (ES2017), y así sucesivamente.

	Es importante tener en cuenta que JavaScript a menudo se refiere a la implementación específica de un navegador o motor, mientras que ECMAScript se refiere a la especificación del lenguaje. Las versiones de JavaScript generalmente se basan en las versiones de ECMAScript, pero pueden incluir características adicionales específicas del navegador.



|| Ejecutar código JS 
	
	Se necesita un entorno de ejecución que pueda interpretar y ejecutar el código

	1. Navegador web: 

		Necesitamos un archivo HTML con la etiqueta script o con un link que lleve al archivo js. 

		Abrimos la consola desde inspeccionar elemento o con el comando Ctrl+Shift+I

		Para mostrar los resultado del código o elementos de él, llamamos a la función nativa "console.log(mi_codigo)"


	2. Editor de código: 

		Cada editor tiene su forma de configurar JS o cualquier lenguaje para que se puede ejecutar desde la consola del editor. 


	3. Node.js/terminal: 

		Si tenemos instalado node.js podemos ejecutar un archivo .js desde la terminal del OS y ejecutando el comando: node nombre_del_archivo.js


|| Variables
	
	Declaración de variables: 

		Al declarar una variable, no es necesario asignarle un valor inicial. En ese caso, la variable se crea pero su valor será <<undefined>>.

		Tampoco es necesario especificar el tipo de dato como en otros lenguajes, dado el tipado dinámico de JS. 

		Es una buena práctica siempre declarar las variables antes de utilizarlas para evitar problemas de hoisting.


	Tipos de variables: 

		var: 
			
			Fue la forma tradicional de declarar variables, pero quedo discontinuada desde ECMAScript 6 (ES6) en 2015. 

		let: 

			Se utiliza para variables que pueden cambiar su valor durante la ejecución del programa

		const: 

			Se usa para declarar constantes cuyo valor no cambiará.


		```js

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

		```


	Reglas para nombrar variables: 

		Pueden contener letras, números, guiones bajos (_), y cifras (excepto como primer caracter). 

		Además, JavaScript distingue entre mayúsculas y minúsculas, lo que significa que <<nombreVariable>> y <<nombrevariable>>> son consideradas como dos variables diferentes.

		El nombre de la variable tiene que estar relacionado con su valor o contenido para que sea significativo, hace que el código sea más legible y facil de mantener. 


	Scope/Ámbito:

		Se refiere a la visibilidad o alcance de una variable en diferentes partes del código.

		Determina en qué partes del código una variable es accesible y puede ser utilizada.

		Global: 

			Si una variable se declara fuera de cualquier función o bloque de código, se considera una variable global y estará disponible en todo el código.


		Local: 

			Si una variable se declara dentro de una función o un bloque de código (, un bloque if, for, o while, etc.), se considera una variable local y solo estará disponible dentro de ese bloque o función. No pueden ser accedidas desde fuera

		```js

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

		```

		Scope en var, let y const: 

			var: 

				Tienen un ámbito de función, significa que están limitadas al bloque de función en el que se declaran, pero no a bloques más internos como if o for.

					Fuera de la funcion, no podemos acceder o llamarla

					Fuera de los bloques, si.

			let y const: 

				Tienen un ámbito de bloque, están limitadas al bloque en el que se declaran, incluyendo bloques más internos.

					No podemos llamarla fuera de su ambito. 

		
		Scope en la memoria:  

			Tiene un impacto en la memoria utilizada por las variables. 

			Las variables globales permanecen en memoria durante toda la duración del programa, lo que puede aumentar el riesgo de colisiones de nombres y dificultar el seguimiento de errores. 

			Por otro lado, las variables locales solo existen en la memoria mientras se ejecuta la función o el bloque de código en el que fueron declaradas, y se liberan cuando la función finaliza su ejecución.			

			La gestión adecuada del scope es esencial para evitar problemas como fugas de memoria y colisiones de nombres de variables. 

			Es una buena práctica limitar el alcance de las variables tanto como sea posible y evitar el uso excesivo de variables globales. 

			Utilizar let y const en lugar de var puede ayudar a evitar problemas relacionados con el alcance de las variables.


	Hoisting: 

		Es el comportamiento en el que las declaraciones de variables se mueven al principio del ámbito, pero su asignación se mantiene en el lugar original.

		Solo las declaraciones son hoisted, no las asignaciones. Es decir, solo el nombre de la variable o función se mueve al principio del ámbito, pero no su valor o contenido.

		Para evitar problemas relacionados con el hoisting, se recomienda siempre declarar las variables al principio de su ámbito y preferir let y const en lugar de var para una mayor claridad y predictibilidad del código. 

		También es una buena práctica acceder/llamar a las variables solo después de que hayan sido declaradas.


		Problemas: 

			1. Acceso antes de la declaración:

				Debido al hoisting, si intentamos acceder a una variable antes de declararla, su valor será undefined en lugar de un error.

				Esto puede llevar a resultados inesperados (<<undefined>> (var) en vez de <<ReferenceError>> (let, const)) o dificultades para depurar el código.

				```js

					console.log(miVariable); // Resultado: undefined
					var miVariable = 10;

				```

			2. Hoisting en funciones: 

				Las funciones declaradas mediante la palabra clave function también son hoisted. Esto significa que podemos llamar a una función antes de declararla en el código.

				```js

					saludar(); // Resultado: "Hola"

					function saludar() {
					  console.log("Hola");
					}

				```

			3. Problemas con let y const: 

				A diferencia de var, las declaraciones de let y const no son sujetas a hoisting en el mismo grado. 

				Si intentamos acceder a una variable let o const antes de declararla, se producirá un ReferenceError.

				```js

					console.log(miVariable); // Error: ReferenceError: miVariable is not defined

					let miVariable = 10;

				```



|| Tipos de datos

	Los tipos de datos primitivos son inmutables, lo que significa que una vez que se ha creado un valor, no se puede cambiar directamente.

	Si intentas cambiar el valor de una variable, en realidad, estarás creando una nueva variable y asignándole un nuevo valor.

	JavaScript también cuenta con tipos de datos no primitivos, como objetos, arrays y funciones, que son más complejos y permiten representar estructuras de datos más elaboradas.


	Number: 

		Representa valores numericos, ya sea enteros o decimales. Se utiliza para hacer cálculos y operaciones matemáticas. 

		```js

			let edad = 30;
			let precio = 19.99;

		```

	String: 

		Representa una secuencia de caracteres, como palabras o frases. Se utiliza para almacenar y manipular texto.

		```js

			let nombre = "Juan";
			let mensaje = 'Hola, ¿cómo estás?';

		```

	Boolean: 

		Representa un valor de verdadero (true) o falso (false). Se utiliza para evaluar condiciones y controlar el flujo del programa.

		```js

			let esMayor = true;
			let esMenor = false;

		```

	Undefined:

		Cuando una variable se declara pero no se le asigna un valor, automáticamente tiene el valor undefined.
		
		También se utiliza para representar valores faltantes o inexistentes

		Puede ser útil para manejar situaciones en las que se esperan valores faltantes o indefinidos en el flujo de un programa.

		```js

			let nombre;

			console.log(nombre); // Resultado: undefined

			// Función que no devuelve un valor explícito

			function saludar() {
			  console.log("¡Hola!");
			}

			let resultadoSaludo = saludar(); 

			console.log(resultadoSaludo); // Resultado: undefined

			// Acceso a una propiedad inexistente en un objeto
			let persona = {
			  nombre: "Juan",
			  edad: 30,
			};

		```

	Null: 

		Representa la ausencia de un valor intencionalmente. Se puede utilizar para inicializar una variable que aún no tiene un valor válido.

		O para indicar que una variable no contiene ningún objeto o valor válido.

		```js

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

		```

	Symbol: 

		Es un tipo de dato nuevo en ECMAScript 6 (ES6). Representa un valor único e inmutable que se puede usar como clave de propiedad de un objeto. 

		Son útiles para agregar propiedades a objetos sin riesgo de colisión de nombres.

		Permite crear identificadores únicos y privados, evitando colisiones de nombres y mejorando el encapsulamiento en objetos. 

		Son especialmente útiles en situaciones en las que es necesario agregar metadatos o propiedades privadas a objetos sin afectar la interacción con otras partes del código.

		```js

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

		```

		   	1. Creación de símbolos utilizando la función Symbol(). Cada símbolo creado es único, incluso si tienen la misma descripción.

		    2. Utilización de símbolos como identificadores de propiedades únicas en objetos. Los símbolos son ideales para agregar propiedades privadas o evitar colisiones de nombres de propiedades.

		    3. Los símbolos no se muestran al iterar sobre las propiedades de un objeto con for...in o for...of. Esto los hace ideales para propiedades privadas que no deben ser accedidas directamente desde fuera del objeto.

		    4. Es posible obtener todos los símbolos de un objeto utilizando Object.getOwnPropertySymbols().

		    5. Se muestra la comprobación de igualdad de símbolos. Dos símbolos son considerados iguales solo si se crean con la misma descripción.

		    6. También se muestra cómo se pueden utilizar símbolos en conjunción con propiedades no simbólicas en un objeto.


	bigint: 

		Se introdujo en ECMAScript 2020 (ES11) para permitir la representación de números enteros más grandes de los que el tipo de dato Number puede manejar.

		A diferencia de los números regulares (Number), que tienen una precisión de 64 bits y pueden representar enteros hasta Number.MAX_SAFE_INTEGER (2^53 - 1), los BigInt pueden representar enteros con una precisión arbitraria.

		Sintaxis:

			Para crear un valor de tipo BigInt, simplemente agrega la letra n al final del número entero que deseas representar:

			```js

				const numeroBigInt = 1234567890123456789012345678901234567890n;

			```

		Casos de uso: 

			1. Operaciones matemáticas precisas: 

				Algunos cálculos financieros, criptográficos o científicos pueden requerir números enteros con una precisión mucho mayor que la proporcionada por los números regulares. 

				BigInt permite realizar operaciones matemáticas precisas sin pérdida de precisión.


			2. Manipulación de números de serie o identificadores únicos: 

				En sistemas que utilizan números de serie o identificadores únicos muy grandes, BigInt puede ser útil para manejar esos valores sin preocuparse por desbordamientos numéricos


			3. Trabajo con bibliotecas y API que devuelven BigInt: 

				Algunas bibliotecas y APIs pueden devolver valores en forma de BigInt, y necesitarás utilizar este tipo de dato para trabajar correctamente con ellos.


		Limitaciones: 

	    	No pueden ser mezclados directamente con los números regulares (Number). Debes convertir explícitamente los BigInt a Number o viceversa cuando sea necesario.

	    	Algunas operaciones matemáticas no están permitidas entre BigInt y Number. Por ejemplo, no puedes utilizar operadores aritméticos directamente entre ellos.

	    	El rendimiento de las operaciones con BigInt es generalmente más lento que con números regulares (Number), por lo que se recomienda utilizar BigInt solo cuando sea realmente necesario.


	    ```js 

	    	const a = 1234567890123456789012345678901234567890n;
			const b = BigInt("9876543210987654321098765432109876543210");

			const suma = a + b;
			const multiplicacion = a * b;

			console.log(suma);           // Resultado: 11111111101111111110111111111011111111100n
			console.log(multiplicacion); // Resultado: 12193263113702179520926131472987363595939114093571973950124368987157695597749000n

	    ```




|| Operadores

	

	Lógicos:

		&& (AND), || (OR) y ! (negación).



|| Template literals

	[]: Acceso a caracteres individuales de un string mediante el uso de corchetes

	${}: insertar variables dentro del string.




|| Propiedades


	.length: longitud de un string



|| Metodos

	toUpperCase(): Conversión de strings a mayúsculas.

	toLowerCase(): Conversión de strings a minúsculas. 
 	
 	indexOf(): Búsqueda de texto en un string.
 	
 	replace(): Reemplazo de texto en un string.

	slice(): Extracción de una parte de un string.	
	split(): Conversión de un string a un array de palabras. 



|| Objetos

	Math.abs(): 




