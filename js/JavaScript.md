#JS

Es un lenguaje de programación interpretado, de alto nivel y orientado a objetos. Fue diseñado originalmente para ser utilizado en el lado del cliente (es decir, en el navegador web) para mejorar la interactividad y dinamismo de las páginas web. 

Sin embargo, a lo largo de los años, su alcance se ha expandido significativamente, y ahora también es utilizado en el lado del servidor y para el desarrollo de aplicaciones de escritorio y móviles.

fue creado por Brendan Eich mientras trabajaba para Netscape Communications en 1995. La idea original era tener un lenguaje de scripting ligero para interactuar con los elementos de las páginas web y realizar acciones del lado del cliente. 

El lenguaje se diseñó en solo diez días y originalmente se llamó "LiveScript", pero poco después fue renombrado a "JavaScript" para capitalizar la creciente popularidad de Java en ese momento.

En la actualidad es uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo del desarrollo web y de software. Su uso se ha vuelto prácticamente imprescindible para el desarrollo de aplicaciones web modernas debido a su versatilidad y la creciente comunidad de desarrolladores y bibliotecas de código abierto que lo respaldan.

Frameworks y bibliotecas como React, Angular, y Vue.js han impulsado aún más la adopción de JavaScript en el desarrollo de aplicaciones web complejas. Además, JavaScript se ha vuelto esencial para el desarrollo de aplicaciones móviles híbridas y para el desarrollo de juegos a través de bibliotecas como Phaser y Three.js.



|| PROPÓSITO

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



|| VERSIONES DE JS
	
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



|| EJECUTAR CÓDIGO JS 
	
	Se necesita un entorno de ejecución que pueda interpretar y ejecutar el código

	1. Navegador web: 

		Necesitamos un archivo HTML con la etiqueta script o con un link que lleve al archivo js. 

		Abrimos la consola desde inspeccionar elemento o con el comando Ctrl+Shift+I

		Para mostrar los resultado del código o elementos de él, llamamos a la función nativa "console.log(mi_codigo)"


	2. Editor de código: 

		Cada editor tiene su forma de configurar JS o cualquier lenguaje para que se puede ejecutar desde la consola del editor. 


	3. Node.js/terminal: 

		Si tenemos instalado node.js podemos ejecutar un archivo .js desde la terminal del OS y ejecutando el comando: node nombre_del_archivo.js


|| VARIABLES
	
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



|| TIPOS DE DATOS

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


|| OBJETOS

	Es una estructura de datos compleja que permite almacenar colecciones de pares clave-valor. 

	Los objetos son uno de los tipos de datos fundamentales en el lenguaje y se utilizan ampliamente para representar estructuras de datos más complejas, como registros, diccionarios, listas, entre otros. 

	Son una de las principales formas de organizar y manipular datos en JavaScript.


	Formas de crear un objeto: 

		1. Usando la sintaxis de objetos literales:

			```js

				const persona = {
				  nombre: "Juan",
				  edad: 30,
				  ciudad: "Madrid"
				};

			```

		2. Usando el constructor object(): 

			```js

				const persona = new Object();
				persona.nombre = "Juan";
				persona.edad = 30;
				persona.ciudad = "Madrid";

			```

		3. Usando funciones constructoras o clases (sintaxis anterior a ES6):

			```js

				function Persona(nombre, edad, ciudad) {

				  this.nombre = nombre;
				  this.edad = edad;
				  this.ciudad = ciudad;
				}

				const persona = new Persona("Juan", 30, "Madrid");

			```

	Propiedades y Métodos de un Objeto:

    	Propiedades: 

    		Son variables que almacenan valores. Se accede a ellas a través del nombre de la propiedad.

    	Métodos: 

    		Son funciones que están asociadas al objeto. Se accede a ellos también a través del nombre del método.

		```js

			const persona = {
			  nombre: "Juan",
			  edad: 30,
			  ciudad: "Madrid",
			  saludar: function() {
			    console.log("¡Hola! Mi nombre es " + this.nombre + ".");
			  }
			};

			console.log(persona.nombre); // Resultado: "Juan"
			console.log(persona.edad);   // Resultado: 30
			persona.saludar();           // Resultado: ¡Hola! Mi nombre es Juan.

		```   		

		Acceder a las propiedades/clave (variable-valor): 

			Lo hacemos mediante la notación de punto o la notación de corchetes:

			```js

				const persona = {
				  nombre: "Juan",
				  edad: 30
				};

				console.log(persona.nombre); // Notación de punto: Resultado: "Juan"
				console.log(persona["edad"]); // Notación de corchetes: Resultado: 30

			```

		Casos de uso de un objeto: 


			1. Almacenamiento de datos estructurados: 

				Permiten agrupar datos o información relacionados bajo una estructura organizada con propiedades y valores.


			2. Representación de entidades y registros: 

				Pueden utilizarse para representar entidades del mundo real, como usuarios, productos, clientes, etc.


			3. Manejo de datos complejos: 

				Los objetos son esenciales para almacenar y manipular datos más complejos que no pueden ser representados por los tipos de datos primitivos.


			4. Creación de estructuras de datos avanzadas: 

				Los objetos pueden combinarse para crear estructuras de datos más avanzadas, como listas, colas, pilas, grafos y diccionarios.


			5. Programación orientada a objetos:

				Los objetos son la base de la programación orientada a objetos en JavaScript, donde se utilizan clases y prototipos para crear instancias de objetos con propiedades y métodos compartidos.


|| OPERADORES

	Son símbolos que se utilizan para realizar operaciones en variables y valores. Hay varios tipos de operadores que 


	Aritméticos:

	   	Usados para realizar operaciones matemáticas.
	    
	    + (suma), - (resta), * (multiplicación), / (división), % (módulo).


	    ```js 

	    	let numero1 = 10;
			let numero2 = 5;

			let suma = numero1 + numero2; // Resultado: 15
			let resta = numero1 - numero2; // Resultado: 5
			let multiplicacion = numero1 * numero2; // Resultado: 50
			let division = numero1 / numero2; // Resultado: 2
			let resto = numero1 % numero2; // Resultado: 0

	    ```

	Asignación:

	    Utilizados para asignar valores a variables.
	   	
	   	= (asignación simple), +=, -=, *=, /=, %=

	   	```js

	   		let a = 5;
			a += 2; // Equivalente a: a = a + 2; Resultado: 7

			let b = 10;
			b *= 3; // Equivalente a: b = b * 3; Resultado: 30

	   	```

	Comparación:

	    Utilizados para comparar valores y devuelven un valor booleano (true o false).

	    Son fundamentales en la toma de decisiones y la lógica de programación. Se utilizan en declaraciones condicionales (if, else, switch) y bucles para controlar el flujo del programa según las condiciones que se cumplan.
	    
	    == (igual a), != (diferente de), === (igual a y mismo tipo), !== (diferente de o distinto tipo), >, <, >=, <=

	   	Es recomendable utilizar el operador de igualdad estricta (===) cuando desees asegurarte de que los valores sean iguales tanto en valor como en tipo.

	  	1. Operadores de igualdad (== y ===): 

	  		Comprueba si los valores son iguales. 

	  		== realiza una comparación de valor, mientras que === realiza una comparación de valor y tipo de dato.


	    2. Operadores de desigualdad (!= y !==):

	    	Comprueba si los valores son diferentes. 

	    	!= realiza una comparación de valor, mientras que !== realiza una comparación de valor y tipo de dato.


		3. Operadores de comparación (<, >, <=, >=): 

		   	Comprueba si un valor es menor, mayor, menor o igual, o mayor o igual que otro valor. 

		    Estos operadores son útiles para ordenar elementos.


		4. Comparación de cadenas de texto: 

			JavaScript compara cadenas de texto según su orden alfabético.


	    ```js

	    	let x = 5;
			let y = "5";

			console.log(x == y); // Resultado: true (compara solo el valor)
			console.log(x === y); // Resultado: false (compara valor y tipo de dato)
			console.log(x !== y); // Resultado: true (diferentes valor o tipo de dato)

	    ```

	Lógicos:

		Utilizados para combinar o invertir valores booleanos.

		Son muy útiles para controlar el flujo de un programa en función de las condiciones que se cumplan. 

		Se utilizan en declaraciones condicionales (if, else, switch) y bucles para tomar decisiones basadas en el estado de las variables o el resultado de otras operaciones booleanas.

		&& (AND/y), || (OR/0) y ! (Not/no/negación).

		```js

			let a = true;
			let b = false;

			console.log(a && b); // Resultado: false (AND lógico)
			console.log(a || b); // Resultado: true (OR lógico)
			console.log(!a); // Resultado: false (NOT lógico)

		```

	Concatenación:

	    Utilizados para concatenar (unir) cadenas de texto (strings).

	    Son útiles cuando se trabaja con texto en aplicaciones web, como la creación de mensajes, formularios, etiquetas HTML y mucho más.
	    
	    + (concatenación).

	    ```js

	    	let nombre = "Juan";
			let apellido = "Pérez";

			let nombreCompleto = nombre + " " + apellido; // Resultado: "Juan Pérez"

	    ```

	Ternarios:

	    Utilizados para expresiones condicionales más compactas.

	    Son una forma abreviada de escribir declaraciones condicionales (if...else) de una sola línea. 

	    Se componen de tres partes: 

	    	Una condición.

	    	Una expresión que se evalúa si la condición es verdadera.

	    	Otra expresión que se evalúa si la condición es falsa.
	    
	    condicion ? valorSiEsVerdadero : valorSiEsFalso.

	    ```js

	    	let edad = 18;
			let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
			
			console.log(mensaje); // Resultado: "Eres mayor de edad"

	    ```


|| OBJETOS AVANZADO
	
	Built-in Objects (objeto integrado o incorporado o predefinido): 

		Son objetos que están incorporados en el lenguaje y están disponibles de forma predeterminada en cualquier entorno de ejecución de JavaScript, ya sea en un navegador web o en un entorno de servidor como Node.js. 

		Estos objetos proporcionan funcionalidades y características útiles que permiten realizar diversas operaciones y manipulaciones de datos en el código JavaScript.

		Se dividen en varias categorías, cada una con sus propios métodos y propiedades específicas.


		1. Object: 

			Es la base de todos los objetos en JavaScript y proporciona funcionalidades para crear y manipular objetos.

	    2. Array: 

	    	Permite trabajar con listas ordenadas de elementos y proporciona métodos para agregar, eliminar, buscar y modificar elementos en un array.

	    3. String: 

	    	Proporciona métodos para trabajar con cadenas de texto, como buscar, reemplazar, dividir y concatenar.

	    4. Number: 

	    	Proporciona métodos y propiedades para trabajar con valores numéricos, como realizar operaciones aritméticas y formatear números.

	    5. Boolean: 

	    	Representa un valor lógico true o false y proporciona funcionalidades para realizar operaciones lógicas.

	    6. Math: 

	    	No es un objeto construido con el constructor Object, pero es un objeto predefinido que proporciona funciones matemáticas y constantes.

	    7. Date: 

	    	Permite trabajar con fechas y horas, proporcionando métodos para obtener y configurar la fecha y la hora actual.

	    8. RegExp: 

	    	Permite trabajar con expresiones regulares, que son patrones utilizados para realizar búsquedas y manipulaciones complejas en cadenas de texto.

	    9. Function: 

	    	Permite trabajar con funciones, que son objetos que contienen código ejecutable.

	    10. JSON:

	    	Permite trabajar con el formato de datos JSON (JavaScript Object Notation) para convertir entre objetos JavaScript y cadenas JSON.


	Object prototype (objeto prototipo): 

		Es un concepto fundamental relacionado con la herencia y la cadena de prototipos (prototype chain) en el lenguaje. 

		Cada objeto en JavaScript tiene un prototipo, y el prototipo de un objeto es otro objeto al cual el objeto hace referencia para buscar propiedades y métodos que no están presentes en sí mismo.

		Formando una cadena llamada "cadena de prototipos" o "prototype chain". Esta cadena continúa hasta llegar al prototipo final, que es Object.prototype, que es el prototipo de todos los objetos en JavaScript.

		El prototipo de un objeto actúa como una plantilla o modelo para ese objeto. Cuando se accede a una propiedad o método en un objeto, JavaScript busca primero en el propio objeto, y si no lo encuentra, continúa buscando en la cadena de prototipos hasta encontrar la propiedad o método en algún nivel superior de la cadena.

		```js

			let persona = {
			  nombre: "Juan",
			  edad: 30,
			};

			// Agregar un método al prototipo del objeto persona
			persona.saludar = function () {
			  console.log(`¡Hola, soy ${this.nombre}!`);
			};

			persona.saludar(); // Resultado: ¡Hola, soy Juan!

		```

		Hemos creado un objeto persona con dos propiedades nombre y edad. Luego, hemos agregado un método saludar al objeto persona. Cuando llamamos al método saludar() en el objeto persona, JavaScript busca primero en el propio objeto y encuentra el método, por lo que se ejecuta y muestra el mensaje en la consola.

		El prototipo de un objeto se puede acceder a través de la propiedad __proto__ del objeto, pero es más común utilizar el método Object.getPrototypeOf(obj) para obtener el prototipo de un objeto.

		```js

			let prototipoPersona = Object.getPrototypeOf(persona);
			
			console.log(prototipoPersona === Object.prototype); // Resultado: true

		```

		En resumen, el "object prototype" en JavaScript es el mecanismo que permite la herencia entre objetos, lo que facilita la reutilización de propiedades y métodos entre diferentes objetos y ayuda a organizar y estructurar el código de manera más eficiente.


		El prototipo de un objeto se define mediante la propiedad especial <<prototype>>, que es una propiedad de la función constructora del objeto. 

		Cuando se crea un objeto utilizando una función constructora mediante el operador <<new>>, el objeto creado hereda las propiedades y métodos del prototipo de la función constructora.

		```js

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

			// Las instancias de Persona heredan 
			el método saludar del prototipo

			persona1.saludar(); // Resultado: Hola, soy Juan y tengo 30 años.
			
			persona2.saludar(); // Resultado: Hola, soy María y tengo 25 años.

		```

		En este ejemplo, hemos creado una función constructora Persona que tiene una propiedad nombre y edad, y hemos agregado un método saludar() al prototipo de Persona. 

		Cuando creamos instancias de Persona mediante new Persona(...), las instancias heredan el método saludar() del prototipo de la función constructora, lo que significa que todas las instancias de Persona tienen acceso a ese método.

		La cadena de prototipos (prototype chain) permite que los objetos en JavaScript hereden propiedades y métodos de sus prototipos, y esto se extiende hacia arriba hasta llegar al prototipo base, que es el prototipo de Object. 

		De esta manera, JavaScript implementa la herencia basada en prototipos y proporciona una forma flexible y poderosa de compartir funcionalidades entre objetos.

		Es importante entender el concepto de prototipo en JavaScript, ya que está en el corazón de cómo funciona la herencia en el lenguaje y cómo se comparten y reutilizan las funcionalidades entre objetos.


	Prototypal inheritance (herencia de prototipo): 

		Es un concepto fundamental en JavaScript que describe cómo los objetos pueden heredar propiedades y métodos de otros objetos. 

		A diferencia de los lenguajes de programación tradicionales que utilizan la herencia basada en clases, JavaScript utiliza la herencia prototípica, lo que significa que un objeto puede heredar directamente propiedades y métodos de otro objeto conocido como su "prototipo".

		La herencia prototípica permite que los objetos compartan propiedades y métodos comunes sin tener que crear copias independientes de ellos para cada objeto.

		Esto hace que el código sea más eficiente y fácil de mantener, ya que los cambios realizados en el prototipo se reflejarán automáticamente en todos los objetos que lo heredan.

		```js

			// Creamos un objeto prototipo
			let animal = {
			  hacerSonido: function() {
			    console.log("Haciendo un sonido");
			  }
			};

			// Creamos un nuevo objeto que hereda del prototipo animal
			let perro = Object.create(animal);
			perro.hacerSonido(); // Resultado: Haciendo un sonido

			// Agregamos una nueva función al prototipo animal
			animal.comer = function() {
			  console.log("Comiendo");
			};

			// El objeto perro hereda automáticamente la nueva función
			perro.comer(); // Resultado: Comiendo

		```

		Hemos creado un objeto animal con un método <<hacerSonido>>. Luego, hemos creado un nuevo objeto perro utilizando Object.create(animal), lo que significa que perro hereda del prototipo animal.

		Cuando llamamos al método hacerSonido() en el objeto perro, JavaScript busca en perro, no lo encuentra y luego busca en su prototipo animal, donde lo encuentra y ejecuta.

		Además, hemos agregado una nueva <<función comer>> al prototipo animal. El objeto perro hereda automáticamente esta nueva función, lo que demuestra cómo los cambios en el prototipo se propagan automáticamente a los objetos que lo heredan.

	
	Instancias de un objeto: 

		Se refiere a un nuevo objeto creado a partir de un constructor o una clase.

		Un constructor es una función especial en JavaScript que se utiliza para crear objetos con un conjunto específico de propiedades y métodos. 

		Cuando se llama a un constructor con el operador new, se crea una nueva instancia del objeto basada en ese constructor.

		Las instancias de un objeto son objetos individuales que comparten la misma estructura y funcionalidades definidas por el constructor o la clase, pero cada instancia tiene sus propios valores específicos para sus propiedades. 

		Esto permite la creación de múltiples objetos con características comunes, pero con valores únicos para cada instancia.


		```js

			// Definimos un constructor para crear objetos "Persona"
			function Persona(nombre, edad) {
			  this.nombre = nombre;
			  this.edad = edad;
			}

			// Creamos dos instancias del objeto "Persona" utilizando el constructor
			let persona1 = new Persona('Juan', 30);
			let persona2 = new Persona('María', 25);

			// Cada instancia tiene sus propios valores para las propiedades "nombre" y "edad"
			console.log(persona1.nombre); // Resultado: "Juan"
			console.log(persona1.edad);   // Resultado: 30

			console.log(persona2.nombre); // Resultado: "María"
			console.log(persona2.edad);   // Resultado: 25

		```


		




|| BUILT-IN OBJECTS de cada tipo de dato

	
	1. De Object: 

		Es la base de todos los objetos y proporciona funcionalidades para crear y manipular objetos.

		Es esencial en el lenguaje y se utiliza ampliamente para trabajar con objetos, realizar operaciones de clonación, manipular propiedades y más.

		Object.create(): 

			Crea un nuevo objeto utilizando un objeto existente como prototipo.

	    Object.keys(): 

	    	Devuelve un array con las claves (propiedades) de un objeto.

	    Object.values(): 

	    	Devuelve un array con los valores de las propiedades de un objeto.

	    Object.entries(): 

	    	Devuelve un array de arrays, cada uno de ellos contiene una pareja de clave-valor del objeto.

	    Object.assign(): 

	    	Copia las propiedades de uno o más objetos en un objeto destino.

	    Object.hasOwnProperty(): 

	    	Verifica si un objeto tiene una propiedad específica.

	    Object.is(): C

	    	ompara si dos valores son iguales, similar a la comparación con ===.

	    Object.freeze(): 

	    	Congela un objeto, lo que significa que sus propiedades no se pueden modificar, agregar o eliminar.

	    Object.seal(): 

	    	Sella un objeto, lo que significa que sus propiedades existentes no se pueden eliminar y solo se pueden modificar sus valores.

	    Object.defineProperty(): 

	    	Permite definir una nueva propiedad o modificar una propiedad existente en un objeto.

	    Object.getOwnPropertyDescriptor():

	    	Devuelve un descriptor de propiedad para una propiedad específica del objeto.


	2. Array: 

		Los arrays son estructuras de datos muy utilizadas en programación y son especialmente útiles para almacenar y manipular colecciones de elementos.

		Son fundamentales para trabajar con conjuntos de datos y facilitan enormemente la manipulación y el procesamiento de colecciones de elementos en un programa JavaScript. 

		Con sus métodos y propiedades, puedes realizar operaciones avanzadas con arrays, como agregar, eliminar, buscar y transformar elementos de manera eficiente.

		Los arrays son estructuras de datos muy utilizadas en programación y son especialmente útiles para almacenar y manipular colecciones de elementos.

		Array.length: 

			Propiedad que indica la longitud (cantidad de elementos) del array.

	    Array.prototype.push(): 

	    	Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.

	    Array.prototype.pop(): 

	    	Elimina el último elemento del array y devuelve el elemento eliminado.

	    Array.prototype.unshift(): 

	    	Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.

	    Array.prototype.shift(): 

	    	Elimina el primer elemento del array y devuelve el elemento eliminado.

	    Array.prototype.concat(): 

	    	Combina dos o más arrays y devuelve un nuevo array resultante.

	    Array.prototype.slice(): 

	    	Devuelve una copia superficial (shallow copy) de una porción del array original.

	    Array.prototype.splice(): 

	    	Permite modificar el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos.

	   	Array.prototype.indexOf(): 

	    	Devuelve el índice de la primera aparición de un elemento en el array, o -1 si no se encuentra.

	    Array.prototype.lastIndexOf(): 

	    	Devuelve el índice de la última aparición de un elemento en el array, o -1 si no se encuentra.

	    Array.prototype.includes(): 

	    	Determina si un array incluye un elemento específico y devuelve true o false.

	    Array.prototype.join(): 

	    	Une todos los elementos de un array en una sola cadena utilizando un separador especificado.

	   	Array.prototype.reverse(): 

	    	Invierte el orden de los elementos en el array.

	   	Array.prototype.sort(): 

	   		Ordena los elementos de un array y devuelve el array ordenado.

	   	Array.prototype.filter(): 

	    	Crea un nuevo array con todos los elementos que cumplan una condición determinada.

	    Array.prototype.map(): 

	    	Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.

	    Array.prototype.reduce(): 

	    	Reduce los elementos del array a un único valor mediante una función acumuladora.


	3. String: 

		Proporciona funcionalidades para trabajar con cadenas de texto. Las cadenas son secuencias de caracteres y son uno de los tipos de datos más comunes en JavaScript.

		String.prototype.length: 

			Propiedad que indica la longitud (cantidad de caracteres) de la cadena.

	    String.prototype.charAt(): 

	    	Devuelve el carácter en el índice especificado de la cadena.

	    String.prototype.concat(): 

	    	Combina dos o más cadenas y devuelve una nueva cadena resultante.

	    String.prototype.includes(): 

	    	Determina si la cadena contiene otra cadena o carácter y devuelve true o false.

	    String.prototype.indexOf(): 

	    	Devuelve el índice de la primera aparición de una subcadena en la cadena, o -1 si no se encuentra.

	    String.prototype.lastIndexOf(): 

	    	Devuelve el índice de la última aparición de una subcadena en la cadena, o -1 si no se encuentra.

	    String.prototype.startsWith(): 

	    	Determina si la cadena comienza con una subcadena específica y devuelve true o false.

	    String.prototype.endsWith():

	    	Determina si la cadena termina con una subcadena específica y devuelve true o false.

	    String.prototype.slice(): 

	    	Extrae una porción de la cadena y devuelve una nueva cadena resultante.

	    String.prototype.substring(): 

	    	Extrae una porción de la cadena entre dos índices y devuelve una nueva cadena resultante.

	    String.prototype.replace(): 

	    	Reemplaza una subcadena con otra en la cadena y devuelve una nueva cadena resultante.

	    String.prototype.toLowerCase(): 

	    	Convierte la cadena a minúsculas.

	    String.prototype.toUpperCase(): 

	    	Convierte la cadena a mayúsculas.

	    String.prototype.trim(): 

	    	Elimina los espacios en blanco al principio y al final de la cadena.

	    String.prototype.split(): 

	    	Divide la cadena en un array de subcadenas utilizando un separador 
	    	especificado.


	4. Number: 

		Proporciona funcionalidades para trabajar con valores numéricos.

		Es importante tener en cuenta que JavaScript trata los números como valores primitivos, no como objetos, pero el objeto Number proporciona funcionalidades adicionales para trabajar con números de manera más avanzada.

		Number.prototype.toString(): 

			Convierte un número en una cadena de texto en una base específica (decimal, binaria, octal, hexadecimal, etc.).

	    Number.prototype.toFixed(): 

	    	Devuelve una cadena que representa el número con un número fijo de decimales.

	    Number.prototype.toPrecision(): 

	    	Devuelve una cadena que representa el número con una precisión específica (cantidad total de dígitos significativos).

	    Number.prototype.toFixed():

	    	Devuelve una cadena que representa el número con un número fijo de decimales.

	    Number.prototype.toExponential():

	    	Devuelve una cadena que representa el número en notación exponencial.

	    Number.prototype.valueOf(): 

	    	Devuelve el valor primitivo del objeto Number, que es el número en sí.

	    Number.prototype.toFixed(): 

	    	Devuelve una cadena que representa el número con un número fijo de decimales.

	    Number.isNaN(): 

	    	Determina si un valor es NaN (Not-a-Number).

	    Number.isFinite():

	    	Determina si un valor es un número finito (no infinito y no NaN).

	    Number.parseInt(): 

	    	Convierte una cadena en un número entero.

	    Number.parseFloat(): 

	    	Convierte una cadena en un número de punto flotante.

	    Number.MAX_VALUE: 

	    	Propiedad que representa el número máximo representable en JavaScript.

	    Number.MIN_VALUE: 

	    	Propiedad que representa el número mínimo representable en JavaScript.

	    Number.POSITIVE_INFINITY: 

	    	Propiedad que representa el valor infinito positivo.

	    Number.NEGATIVE_INFINITY: 

	    	Propiedad que representa el valor infinito negativo.


	5. Boolean: 

		Proporciona funcionalidades para trabajar con valores booleanos (true o false). 

		Aunque los valores booleanos son tipos de datos primitivos en JavaScript, el objeto Boolean se puede utilizar para crear instancias de valores booleanos y acceder a algunas funcionalidades adicionales.

		Los valores booleanos true y false se utilizan comúnmente directamente en expresiones condicionales (if, while, etc.) y como resultado de operaciones lógicas. 

		El objeto Boolean puede ser útil en situaciones específicas donde se requiera trabajar con una instancia de valor booleano como un objeto, pero en la mayoría de los casos, los valores booleanos se utilizan directamente como tipos de datos primitivos.

		Boolean.prototype.toString(): 

			Convierte un valor booleano en una cadena de texto ("true" o "false").

	    Boolean.prototype.valueOf(): 

	    	Devuelve el valor primitivo del objeto Boolean, que es el valor booleano (true o false).

	    Boolean(): 

	    	Constructor que crea una instancia de un objeto Boolean a partir de un valor o expresión.


		```js

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

		```


	6. Math: 

		Proporciona funcionalidades matemáticas y constantes. 

		No es un objeto construido con el constructor Object, pero es un objeto predefinido que ofrece una serie de métodos y propiedades para realizar operaciones matemáticas comunes.

		El objeto Math es muy útil para realizar operaciones matemáticas complejas, cálculos geométricos, generación de números aleatorios y más. 

		Con estos métodos, puedes realizar una amplia variedad de operaciones matemáticas en tus aplicaciones JavaScript de manera más eficiente y precisa.

		Math.abs(): 

			Devuelve el valor absoluto de un número.

	    Math.ceil(): 

	    	Redondea un número al entero más grande mayor o igual que el número.

	    Math.floor(): 

	    	Redondea un número al entero más pequeño menor o igual que el número.

	    Math.round(): 

	    	Redondea un número al entero más cercano.

	    Math.max(): 

	    	Devuelve el número más grande de una lista de argumentos.

	    Math.min(): 

	    	Devuelve el número más pequeño de una lista de argumentos.

	    Math.pow(): 

	    	Devuelve la potencia de un número dado.

	    Math.sqrt(): 

	    	Devuelve la raíz cuadrada de un número.

	    Math.random(): 

	    	Devuelve un número pseudo-aleatorio entre 0 (inclusive) y 1 (exclusivo).

	    Math.floor(Math.random() * (max - min + 1)) + min: 

	    	Devuelve un número pseudo-aleatorio dentro de un rango específico (incluyendo el valor mínimo y excluyendo el valor máximo).

	    Math.sin(): 

	    	Devuelve el seno de un ángulo.

	    Math.cos(): 

	    	Devuelve el coseno de un ángulo.

	    Math.tan(): 

	    	Devuelve la tangente de un ángulo.

	    Math.PI: 

	    	Propiedad que representa el valor de π (pi).

	    Math.E: 

	    	Propiedad que representa el número de Euler (e).


	7. Date: 

		Se utiliza para trabajar con fechas y horas. Proporciona funcionalidades para crear, manipular y formatear fechas y horas.

		Es útil para trabajar con fechas y horas en aplicaciones web y puede utilizarse para calcular intervalos de tiempo, formatear fechas para mostrarlas al usuario y realizar operaciones de comparación entre fechas.

		new Date(): 

			Constructor que crea una instancia del objeto Date con la fecha y hora actual del sistema.

	    Date.now(): 

	    	Método estático que devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 hasta la fecha y hora actuales.

	    Date.parse(): 

	    	Método estático que convierte una cadena de fecha en milisegundos desde el 1 de enero de 1970.

	    Date.prototype.toISOString(): 

	    	Devuelve una cadena de fecha en formato ISO (YYYY-MM-DDTHH:mm:ss.sssZ).

	    Date.prototype.toString(): 

	    	Devuelve una cadena de fecha y hora legible por humanos.

	    Date.prototype.getDate(): 

	    	Devuelve el día del mes (1 al 31) de la fecha.

	    Date.prototype.getDay(): 

	    	Devuelve el día de la semana (0 al 6, donde 0 es domingo) de la fecha.

	    Date.prototype.getMonth(): 

	    	Devuelve el mes (0 al 11, donde 0 es enero) de la fecha.

	    Date.prototype.getFullYear(): 

	    	Devuelve el año completo de la fecha.

	    Date.prototype.getHours(): 

	    	Devuelve la hora (0 al 23) de la fecha.

	    Date.prototype.getMinutes(): 

	    	Devuelve los minutos (0 al 59) de la fecha.

	    Date.prototype.getSeconds(): 

	    	Devuelve los segundos (0 al 59) de la fecha.

	    Date.prototype.getMilliseconds(): 

	    	Devuelve los milisegundos (0 al 999) de la fecha.

	    Date.prototype.getTime(): 

	    	Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 hasta la fecha.

	    Date.prototype.setTime(): 

	    	Establece la fecha y hora del objeto Date utilizando un número de milisegundos.


	8. RegExp (Expresiones regulares): 

		Se utiliza para trabajar con patrones de texto. 

		Las expresiones regulares son secuencias de caracteres que definen un patrón de búsqueda. 

		El objeto RegExp proporciona funcionalidades para crear y trabajar con expresiones regulares, permite crear expresiones regulares y aplicarlas a cadenas de texto para realizar operaciones complejas de búsqueda y manipulación de texto.

		```js

			// Creando una expresión regular para buscar la palabra "hola" sin importar mayúsculas y minúsculas

			let regex = /hola/i;

			// Verificando si la expresión regular encuentra coincidencia en una cadena

			let texto = "Hola mundo";
			let resultado = regex.test(texto);
			console.log(resultado); // Resultado: true

			// Buscando coincidencias en una cadena y obteniendo los resultados

			let texto2 = "Hola mundo, hola JavaScript";

			let resultado2 = regex.exec(texto2);
			console.log(resultado2); 

			// Resultado: ["Hola", index: 0, input: "Hola mundo, hola JavaScript", groups: undefined]

		```

		new RegExp(pattern, flags): 

			Constructor que crea una instancia del objeto RegExp con un patrón y, opcionalmente, con banderas para configurar el comportamiento de la expresión regular.

	    RegExp.prototype.test(): 

	    	Método que verifica si una cadena de texto contiene una coincidencia con la expresión regular y devuelve true o false.

	    RegExp.prototype.exec(): 

	    	Método que busca una coincidencia en una cadena de texto con la expresión regular y devuelve un array con los resultados o null si no se encuentra una coincidencia.

	    RegExp.prototype.source: 

	    	Propiedad que devuelve el patrón de la expresión regular en forma de cadena de texto.

	    RegExp.prototype.global: 

	    	Propiedad booleana que indica si la bandera "g" (global) está habilitada en la expresión regular.

	    RegExp.prototype.ignoreCase: 

	    	Propiedad booleana que indica si la bandera "i" (ignorar mayúsculas y minúsculas) está habilitada en la expresión regular.

	    RegExp.prototype.multiline: 

	    	Propiedad booleana que indica si la bandera "m" (multilinea) está habilitada en la expresión regular.

	    RegExp.prototype.sticky: 

	    	Propiedad booleana que indica si la bandera "y" (sticky) está habilitada en la expresión regular.

	    RegExp.prototype.lastIndex: 

	    	Propiedad que indica la posición en la cadena de texto donde comenzará la próxima búsqueda de coincidencia.


	9. Function: 	

		Las funciones son bloques de código reutilizable que pueden ser llamados o invocados para realizar tareas específicas. 

		El objeto Function proporciona funcionalidades para crear y trabajar con funciones de manera dinámica.

		Es útil cuando necesitas crear funciones de forma dinámica o realizar acciones específicas con funciones existentes, como cambiar su contexto (this) o predefinir algunos de sus argumentos. 

		Sin embargo, en la mayoría de los casos, la creación de funciones se realiza utilizando la sintaxis de función tradicional o la expresión de función de flecha (() => {}), que son más comunes y fáciles de entender.


		    Function(): 

		    	Constructor que crea una nueva instancia de una función. Se puede utilizar para crear funciones a partir de una cadena de argumentos y cuerpo de función.

		    Function.prototype.apply(): 

		    	Método que llama a una función con un valor this y un array de argumentos proporcionados como un objeto (arguments).

		    Function.prototype.call(): 

		    	Método que llama a una función con un valor this y argumentos individuales proporcionados.

		    Function.prototype.bind(): 

		    	Método que crea una nueva función que, cuando es llamada, tiene un valor this predefinido y argumentos opcionales predefinidos.

		    Function.prototype.toString(): 

		    	Método que devuelve una cadena que representa el código fuente de la función.


		```js

			// Creando una función utilizando el constructor Function()

			let sumar = new Function('a', 'b', 'return a + b;');
			console.log(sumar(5, 3)); // Resultado: 8

			// Utilizando el método apply()

			function saludar(nombre) {
			  console.log(`¡Hola, ${nombre}!`);
			}

			saludar.apply(null, ['Juan']); 

			// Resultado: ¡Hola, Juan!

			// Utilizando el método call()

			function mostrarInformacion(nombre, edad) {
			  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
			}

			mostrarInformacion.call(null, 'Ana', 30); 

			// Resultado: Nombre: Ana, Edad: 30

			// Utilizando el método bind()

			let persona = {
			  nombre: 'Luis',
			  edad: 25,
			};

			function presentar() {
			  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
			}

			let funcionPresentar = presentar.bind(persona);
			funcionPresentar(); 

			// Resultado: Hola, soy Luis y tengo 25 años.

			// Utilizando el método toString()

			function multiplicar(a, b) {
			  return a * b;
			}

			console.log(multiplicar.toString()); 

			// Resultado: function multiplicar(a, b) { return a * b; }

		```


	10. JSON: 

		Proporciona funcionalidades para trabajar con el formato de datos JSON (JavaScript Object Notation). 

		JSON es un formato de datos ligero y fácil de leer que se utiliza comúnmente para intercambiar datos entre un servidor y un cliente web, así como para almacenar y transmitir datos estructurados.

		Tiene dos métodos principales:

			JSON.stringify(): 

				Convierte un objeto JavaScript o valor primitivo en una cadena JSON.

    		JSON.parse(): 

    			Convierte una cadena JSON en un objeto JavaScript o valor primitivo.


    	JSON solo admite datos primitivos (números, cadenas, booleanos, null) y estructuras de datos simples (objetos y arrays). 

    	Los objetos JavaScript que contienen funciones u otras propiedades no admitidas por JSON no se pueden convertir directamente en una cadena JSON. 

    	En esos casos, se deben omitir o transformar esas propiedades antes de utilizar JSON.stringify().

		El objeto JSON es muy útil para intercambiar datos entre diferentes sistemas o para almacenar y cargar datos estructurados en una aplicación web. 

		Es ampliamente utilizado en el desarrollo de aplicaciones web y es un formato estándar para el intercambio de datos en la web moderna.

    	```js

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

    	```


|| TEMPLATE LITERALS

	[]: Acceso a caracteres individuales de un string mediante el uso de corchetes

	${}: insertar variables dentro del string.



|| Propiedades


	.length: longitud de un string



|| MÉTODOS

	toUpperCase(): Conversión de strings a mayúsculas.

	toLowerCase(): Conversión de strings a minúsculas. 
 	
 	indexOf(): Búsqueda de texto en un string.
 	
 	replace(): Reemplazo de texto en un string.

	slice(): Extracción de una parte de un string.	
	split(): Conversión de un string a un array de palabras. 

	concat(): Para unir dos cadenas y obtener un resultado similar al del operador +.

	join(): para unir elementos de un array en una sola cadena separada por un delimitador específico.






