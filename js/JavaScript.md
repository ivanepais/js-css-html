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


|| TYPE CASTING (conversión de tipos)

	Se refiere a la conversión explícita de un valor de un tipo de dato a otro tipo de dato.

	JavaScript es un lenguaje de programación de tipado débil y dinámico, lo que significa que las conversiones de tipo se realizan automáticamente (implícita) en ciertas situaciones, pero también puedes realizar conversiones explícitas de manera controlada.
	
	La conversión explícita puede ser necesaria cuando necesitas asegurarte de que un valor sea de un tipo específico para realizar ciertas operaciones o comparaciones. T

	También puede ser útil cuando necesitas presentar datos en un formato específico para mostrarlos al usuario o enviarlos a un servidor.

	1. Casting a Número: 

		Para convertir un valor a un número, puedes utilizar la función Number(), el operador unario +, o parseInt() y parseFloat() para convertir cadenas numéricas a números enteros o de punto flotante, respectivamente.

		```js

			let numeroString = "42";
			let numero = Number(numeroString); // Usando la función Number()
			console.log(numero); // Resultado: 42

			let otraNumero = +numeroString; // Usando el operador unario +
			console.log(otraNumero); // Resultado: 42

			let entero = parseInt(numeroString, 10); // Convertir a entero usando parseInt()
			console.log(entero); // Resultado: 42

			let flotante = parseFloat(numeroString); // Convertir a punto flotante usando parseFloat()
			console.log(flotante); // Resultado: 42

		```

	2. Casting a Cadena de Texto: 

		Para convertir un valor a una cadena de texto, puedes utilizar la función String() o concatenar el valor con una cadena vacía ("").

		```js

			let valor = 42;
			let cadena = String(valor); // Usando la función String()
			console.log(cadena); // Resultado: "42"

			let otraCadena = valor + ""; // Concatenando con una cadena vacía
			console.log(otraCadena); // Resultado: "42"

		```
	
	3. Casting a Booleano: 

		Para convertir un valor a un booleano, puedes utilizar el operador unario !! o la función Boolean().

		```js

			let x = 0;
			let booleano = !!x; // Usando el operador unario !!
			console.log(booleano); // Resultado: false

			let otroBooleano = Boolean(x); // Usando la función Boolean()
			console.log(otroBooleano); // Resultado: false

		```


	Conversión implícita de JS: 

		Ocurre cuando un operador o una función espera un tipo de dato específico, pero se le proporciona un valor de un tipo diferente. 

		En tales casos, JavaScript automáticamente convierte el valor al tipo de dato esperado antes de realizar la operación o la función.

		Puede ser útil y conveniente en ciertas situaciones, pero también puede llevar a resultados inesperados si no se comprende correctamente. 

		Es importante tener en cuenta cómo se realizan estas conversiones para evitar comportamientos inesperados en el código. 


		Operaciones Aritméticas: 

			Cuando se realizan operaciones aritméticas, JavaScript convierte automáticamente los operandos a números antes de realizar la operación.

			```js

				let x = "5"; // Tipo: string
				let y = 2;   // Tipo: number

				let suma = x + y; 

				// Aquí, x se convierte implícitamente a número y se realiza la suma

				console.log(suma); // Resultado: 7

			```

		Operaciones de Comparación: 

			Al comparar valores con operadores de comparación (por ejemplo, ==, !=, ===, !==, <, >, <=, >=), JavaScript realiza conversiones implícitas para comparar los valores. 

			```js

				let a = 5;   // Tipo: number
				let b = "5"; // Tipo: string

				console.log(a == b); // Aquí, b se convierte implícitamente a número y la comparación es verdadera

			```

		Operaciones Lógicas: 

			Al utilizar operadores lógicos como &&, ||, y !, JavaScript realiza conversiones implícitas para evaluar las expresiones lógicas. Por ejemplo:

			```js

				let c = 0;   // Tipo: number
				let d = "hola"; // Tipo: string

				console.log(c && d); // Aquí, c se convierte implícitamente a booleano y la expresión evalúa a 0

			```

		Funciones con Parámetros: 

			Cuando una función espera un cierto tipo de dato como parámetro, si se le pasa un valor de otro tipo, JavaScript realizará una conversión implícita si es posible. Por ejemplo:

			```js

				function sumar(a, b) {
				  return a + b;
				}

				let resultado = sumar("2", 3); // Aquí, "2" se convierte implícitamente a número antes de sumar
				console.log(resultado); // Resultado: 5

			```

	Conversiones explícitas entre varios tipos de datos: 

		Number: 

			Se puede convertir a otros tipos de datos utilizando String() o concatenando con una cadena vacía (""), y también mediante Boolean(). Además, se puede convertir una cadena numérica en un número entero mediante parseInt() o en un número de punto flotante mediante parseFloat().

	    String: 

	    	Se puede convertir a un número utilizando Number(), y también a un booleano utilizando Boolean().

	    Boolean: 

	    	Se puede convertir a un número utilizando Number() (donde true se convierte en 1 y false en 0), y también a una cadena utilizando String().

	    Undefined: 

	    	Se puede convertir a un número o cadena, en ambos casos devuelve NaN o "undefined", respectivamente. También se puede convertir a un booleano, donde se convierte en false.

	    Null: 

	    	Se puede convertir a un número, donde se convierte en 0. También se puede convertir a una cadena, donde se convierte en "null", y a un booleano, donde se convierte en false.

	    Object: 

	    	En general, la conversión de objetos no es tan sencilla y directa como con los tipos de datos anteriores. Puedes usar métodos personalizados dentro del objeto para realizar conversiones específicas.


	Coerción vs conversión de tipos: 

		Coerción es lo que aplica JS en la conversión implícita. 

		La conversión explícita tambien se conoce como Type Casting. 


	Null vs NaN

		null se utiliza para indicar explícitamente	la ausencia de valor, especialmente cuando deseamos "reiniciar" una variable o propiedad que anteriormente tenía un valor asignado.

		NaN se utiliza para indicar que un resultado de una operación aritmética no es válido o no se puede determinar debido a la presencia de valores no numéricos.

		NaN puede surgir cuando intentamos dividir una cadena de texto por un número, o cuando realizamos operaciones matemáticas con valores no numéricos.

		NaN es de tipo number en JavaScript.

		Null es object. 

		Puedes usar funciones como isNaN() para verificar si un valor es NaN.

		Podemos usar el operador de igualdad estricta (===) para comprobar si una variable es igual a null. Además, ten en cuenta que null es un valor asignable. 

		NaN es un valor que surge como resultado 
		de operaciones no válidas.



|| ESTRUCTURAS DE DATOS

	Se refiere a datos organizados y estructurados que se almacenan en variables, objetos, arrays o cualquier otra estructura de datos para facilitar su manipulación y gestión en el código.

	Cuando hablamos de "Structured Data", nos referimos a datos que tienen un formato bien definido y consistente, lo que permite acceder y utilizar la información de manera más eficiente y comprensible para los programadores. 

	
	Composición de la estructura de datos en JS: 

		1. Tipos de datos primitivos: 

			Number, String, Boolean, Undefined, Null, y Symbol. Estos tipos de datos son valores simples que representan datos básicos y no tienen métodos o propiedades adicionales.

			Son inmutables, lo que significa que una vez que se crea un valor, no se puede modificar. Si se realiza una operación sobre un valor primitivo, se crea un nuevo valor en lugar de modificar el existente.

			Al comparar dos valores primitivos, se compara su contenido, y si tienen el mismo valor, se consideran iguales.

			Cuando se pasa un valor primitivo como argumento a una función, se pasa una copia del valor en lugar de una referencia al valor original.

			Tienen una capacidad fija y no pueden contener otros valores o funciones. Son tipos de datos simples y no complejos.

			Number: 

				Representa números enteros o decimales, como 1, 3.14, -10, etc. 

			String: 

				Representa una secuencia de caracteres, como "Hola", 'Mundo', "123",

			Boolean: 

				Representan los valores de verdad (true) o falsedad (false). 

			Undefined: 

				Representa una variable que ha sido declarada pero no inicializada con un valor.

			Null: 

				Representa la ausencia intencionada de valor.

			Symbol: 

				Representa un valor único e inmutable que puede utilizarse como clave de una propiedad de objeto.

				Permite crear identificadores únicos y privados, evitando colisiones de nombres y mejorando el encapsulamiento en objetos. 

				Son especialmente útiles en situaciones en las que es necesario agregar metadatos o propiedades privadas a objetos sin afectar la interacción con otras partes del código.

				```js

					// Creación de símbolos
					const simbolo1 = Symbol();
					const simbolo2 = Symbol("descripcion");

				```

			Bigint: 

				representación de números enteros más grandes de los que el tipo de dato Number puede manejar.

				A diferencia de los números regulares (Number), que tienen una precisión de 64 bits y pueden representar enteros hasta Number.MAX_SAFE_INTEGER (2^53 - 1), los BigInt pueden representar enteros con una precisión arbitraria.

				Sintaxis:

					Para crear un valor de tipo BigInt, simplemente agrega la letra n al final del número entero que deseas representar:

					```js

						const numeroBigInt = 1234567890123456789012345678901234567890n;

					```

		2. Objetos: 

			Permiten almacenar múltiples valores (propiedades/clave) y métodos (funciones) relacionados bajo una misma entidad. Esto facilita la organización de los datos y la agrupación de funcionalidades relacionadas.

			Un objeto se define utilizando llaves {} y los pares clave-valor se separan por comas. Las propiedades se definen como clave: valor, donde la clave es una cadena o un símbolo que representa el nombre de la propiedad y el valor puede ser cualquier tipo de dato, incluido otro objeto.

				```js

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

				```

			2.1: Clases y prototipos: 

				En JavaScript, es común estructurar datos utilizando clases y prototipos en el paradigma de programación orientada a objetos.


		3. Arrays: 

			Son estructuras que permiten almacenar una secuencia ordenada de valores en una sola variable.

			```js

				let numeros = [1, 2, 3, 4, 5];
				let frutas = ["manzana", "naranja", "plátano"];

			```


		4. JSON: 

			Es un formato de datos que permite representar datos estructurados como objetos y arrays utilizando una sintaxis similar a la de JavaScript. Es ampliamente utilizado para intercambiar datos entre aplicaciones.

			```js

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


			```

	JSON: 

		"JavaScript Object Notation" (Notación de Objetos de JavaScript), es un formato de intercambio de datos ligero y legible por humanos. 

		Es ampliamente utilizado para transmitir datos estructurados entre un servidor y un cliente web, así como para almacenar y organizar datos en archivos de configuración.

		Características: 

			Es independiente del lenguaje, lo que significa que puede ser utilizado por diversos lenguajes de programación, no solo JavaScript.

			Utiliza una sintaxis similar a la de los objetos y arrays en JavaScript, lo que facilita su comprensión y uso.
			
			Soporta varios tipos de datos primitivos: números, strings, booleanos, null, arrays y objetos anidados.

		Sintaxis: 

			Los datos se organizan en pares clave-valor.

    		Los nombres de las claves (propiedades) deben estar entre comillas dobles.

    		Los valores pueden ser números, strings, booleanos, null, arrays u objetos.

    		Los pares clave-valor se separan por comas.

    		Los objetos se delimitan con llaves {}.

    		Los arrays se delimitan con corchetes [].


    	```js 

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

    	```

    	En el ejemplo, hemos definido un objeto JSON que contiene varias propiedades: nombre, edad, esEstudiante, direcciones (un array) y contacto (otro objeto anidado).


    	Usos: 

    		Transferencia de datos: 

    			JSON es ampliamente utilizado para enviar y recibir datos entre un servidor y un cliente web en aplicaciones que utilizan tecnologías como AJAX o API REST.

		    Almacenamiento de configuraciones:

		    	JSON se utiliza para almacenar configuraciones y preferencias del usuario en aplicaciones web y móviles.

		    Intercambio de datos entre sistemas: 

		    	JSON es un formato comúnmente utilizado para intercambiar datos estructurados entre diferentes sistemas y aplicaciones.

		    Almacenamiento de datos en archivos:

		    	JSON se utiliza para guardar y leer datos estructurados en archivos de texto, lo que lo hace ideal para almacenar datos pequeños y sencillos.


	Indexed Collections:

		Se refiere a estructuras de datos que almacenan elementos ordenados y accesibles mediante un índice numérico. 

		Son útiles cuando necesitas almacenar y acceder a múltiples elementos en un orden específico. 

		Al usar un índice numérico, puedes acceder rápidamente a elementos individuales, recorrer el conjunto de datos y realizar diversas operaciones.

		Array: 

			Es una estructura de datos que almacena una lista ordenada de elementos. 

			Cada elemento en el array se identifica mediante un índice numérico, comenzando desde 0 para el primer elemento, 1 para el segundo y así sucesivamente. 

			Los arrays pueden contener elementos de cualquier tipo de dato, incluidos otros arrays y objetos.

			```js

				let frutas = ["manzana", "naranja", "plátano"];

				console.log(frutas[0]); // Resultado: "manzana"
				console.log(frutas[1]); // Resultado: "naranja"
				console.log(frutas[2]); // Resultado: "plátano"

			```

		Typed Array: 

			Son una variante de los arrays que permiten almacenar elementos en una memoria de bytes contigua con un tipo de dato específico. 

			Son utilizados principalmente para manipular datos binarios y trabajos con arrays numéricos más eficientes. Los "Typed Arrays" están disponibles en varias formas, como Int8Array, Uint8Array, Float32Array, entre otros.

			```js

				let numeros = new Int8Array([10, 20, 30]);

				console.log(numeros[0]); // Resultado: 10
				console.log(numeros[1]); // Resultado: 20
				console.log(numeros[2]); // Resultado: 30

			```
			Son útiles para aplicaciones que requieren manipulación eficiente de datos numéricos o binarios, como procesamiento de audio, gráficos, trabajos con bytes, etc.

		Los "Indexed Collections" son útiles cuando necesitas almacenar y acceder a múltiples elementos en un orden específico. Al usar un índice numérico, puedes acceder rápidamente a elementos individuales, recorrer el conjunto de datos y realizar diversas operaciones


	Keyed Collections: 

		Colecciones indexadas en JavaScript se refiere a estructuras de datos que almacenan elementos asociados a claves únicas. 

		A diferencia de los arrays, donde los elementos se acceden mediante índices numéricos, en las "Keyed Collections" se accede a los elementos a través de claves (llaves) que pueden ser de cualquier tipo de dato, como strings, números o símbolos.


		Map: 

			Es una estructura de datos introducida en ECMAScript 6 que permite almacenar pares clave-valor.

			Es una colección de pares clave-valor en JavaScript, donde cada clave debe ser única y puede ser de cualquier tipo de dato, mientras que cada valor puede ser también de cualquier tipo de dato, incluidos objetos y funciones. 

			Esto significa que un mismo valor puede estar asociado con diferentes claves, pero cada clave debe ser única en un Map.

			Son útiles cuando necesitas almacenar datos asociados a claves únicas y no necesariamente quieres utilizar índices numéricos para acceder a los elementos. 

			Los objetos son comúnmente utilizados en JavaScript para representar entidades y datos estructurados, mientras que los Mapas proporcionan una forma más flexible de trabajar con datos clave-valor, especialmente cuando las claves no son limitadas a strings o números.

			Características:

			    Claves únicas: 

			    	Cada clave en un Map debe ser única, lo que significa que no puede haber duplicados.

			    Orden de inserción: 

			    	Los pares clave-valor se mantienen en el orden en que fueron insertados, lo que permite iterar sobre ellos en el mismo orden.

			    Acceso a través de claves: 

			    	Los valores asociados a cada clave se acceden a través de la clave, lo que facilita la búsqueda y recuperación de valores.

			    Puede utilizar cualquier tipo de dato como clave: 

			    	A diferencia de los objetos JavaScript regulares, donde las claves son siempre strings o símbolos, en un Map se pueden utilizar cualquier tipo de dato como clave, incluyendo objetos y funciones.

			    Iterable: 

			    	Puedes recorrer los pares clave-valor de un Map utilizando for...of o el método forEach().

			```js

				let mapa = new Map();
				mapa.set("nombre", "Juan");
				mapa.set(30, "treinta");
				mapa.set(true, "esEstudiante");

			```

		Weak Map: 	

			Es una colección de pares clave-valor donde las claves deben ser objetos y los valores pueden ser cualquier tipo de dato.

			A diferencia de un Map, las claves en un WeakMap son "débiles" o "weak". Esto significa que si no hay otras referencias al objeto clave fuera del WeakMap, el recolector de basura de JavaScript puede eliminar el objeto clave y su valor asociado del WeakMap para liberar memoria.

			Los WeakMaps no son iterables y no tienen métodos como size o forEach.
			
			Los WeakMaps no admiten las operaciones comunes de Map como set(), get(), delete() o clear(). Solo proporcionan los métodos get(), set(), has() y delete() para operaciones con claves y valores asociados.

			```js

				let weakMap = new WeakMap();

				let clave1 = {};
				let clave2 = {};

				weakMap.set(clave1, "Valor asociado a clave1");
				weakMap.set(clave2, "Valor asociado a clave2");

				console.log(weakMap.get(clave1)); // Resultado: "Valor asociado a clave1"

				clave1 = null; // Eliminar referencia a la clave1
				console.log(weakMap.get(clave1)); // Resultado: undefined, el objeto clave1 fue recolectado por el recolector de basura

			```


		Set: 

			Permite almacenar valores únicos de cualquier tipo de dato, ya sean primitivos u objetos. Esto significa que un mismo valor no puede aparecer más de una vez en un Set. 

			Los valores se mantienen en el orden en que fueron insertados, lo que permite iterar sobre ellos en el mismo orden.

			Los Sets son útiles cuando necesitas almacenar una colección de elementos únicos y realizar operaciones de conjunto, como uniones, intersecciones y diferencias. 

			Su característica de no permitir duplicados los convierte en una herramienta útil para trabajar con conjuntos de datos distintos en JavaScript.


			Características: 

				Valores únicos: 

					Cada valor en un Set debe ser único, lo que significa que no puede haber duplicados.

			    Orden de inserción: 

			    	Los valores se mantienen en el orden en que fueron insertados, lo que permite iterar sobre ellos en el mismo orden.

			    No indexado: 

			    	A diferencia de un Array, los elementos en un Set no se acceden mediante índices numéricos, ya que no tienen un índice asociado.

			    No admite claves: 

			    	Los elementos en un Set son la propia clave, es decir, no puedes especificar una clave personalizada para cada elemento, ya que los valores son únicos.

			    Iterable: 

			    	Puedes recorrer los elementos de un Set utilizando for...of o el método forEach().

			```js

				// Crear un Set vacío
				let miSet = new Set();

				// Crear un Set con valores iniciales
				let numeros = new Set([1, 2, 3, 4, 5]);
				let frutas = new Set(["manzana", "naranja", "plátano"]);

			```

		Weak set: 

			Un WeakSet es una colección de objetos donde cada objeto puede aparecer solo una vez en el conjunto.

		    Los WeakSets no son iterables y no tienen métodos como size o forEach.
		    Los WeakSets no admiten las operaciones comunes de Set como add(), has(), delete() o clear(). Solo proporcionan los métodos add() y delete().


		    ```js

		    	let weakSet = new WeakSet();

				let objeto1 = {};
				let objeto2 = {};

				weakSet.add(objeto1);
				weakSet.add(objeto2);

				console.log(weakSet.has(objeto1)); // Resultado: true

				objeto1 = null; // Eliminar referencia al objeto1

				console.log(weakSet.has(objeto1)); // Resultado: false, el objeto1 fue recolectado por el recolector de basura

		    ```

		Los WeakMaps y WeakSets son útiles en situaciones donde necesitas asociar datos con objetos y quieres que los objetos sean recolectados por el recolector de basura si no están siendo utilizados en ningún otro lugar de tu código. 

		Estas estructuras de datos son comúnmente utilizadas en casos de uso como almacenar datos privados en clases o asociar información adicional a objetos sin que afecten el ciclo de vida del objeto. 

		Es importante tener en cuenta que debido a su naturaleza "débil", los WeakMaps y WeakSets no se pueden utilizar como soluciones generales para almacenar datos de manera persistente, ya que los datos pueden ser eliminados automáticamente por el recolector de basura si no hay otras referencias a los objetos clave o valores asociados.


	Recolector de basura: 

		Es un mecanismo automático que se encarga de administrar la memoria asignada a los objetos y valores creados durante la ejecución del programa. 

		Su función principal es liberar la memoria que ya no es utilizada o referenciada por ninguna parte del código, lo que ayuda a evitar problemas de pérdida de memoria y mejora el rendimiento del programa.

		Cuando se ejecuta un programa en JavaScript, se crean objetos, arrays, funciones y otros valores en memoria para almacenar datos y realizar operaciones. 

		A medida que el programa avanza, algunos de estos valores pueden quedar sin uso o dejar de ser accesibles, ya sea porque se sobrescriben con nuevos valores, se eliminan referencias a ellos o ya no se necesitan en el flujo del programa.

		El proceso de recolección de basura en JavaScript puede variar dependiendo del motor de JavaScript utilizado (como V8 en Google Chrome, SpiderMonkey en Firefox, entre otros). 

		Sin embargo, en general, el recolector de basura utiliza técnicas como el seguimiento de referencias y el conteo de referencias para determinar qué objetos o valores ya no son alcanzables y, por lo tanto, pueden ser eliminados.

		Aunque los desarrolladores no necesitan preocuparse explícitamente por liberar la memoria asignada a los objetos, ya que el recolector de basura se encargará de ello de manera transparente.

		También es importante tener en cuenta las buenas prácticas de programación para evitar fugas de memoria, como asegurarse de eliminar referencias a objetos que ya no son necesarios, especialmente en aplicaciones de larga duración o con uso intensivo de memoria.



|| Equality comparisons (comparaciones de igualdad o desigualdad)

	Son las comparaciones de igualdad de dos valores para determinar si son iguales o no.

	La igualdad se evalúa utilizando operadores de igualdad (==) o de desigualdad (!=), así como los operadores de igualdad estricta (===) y de desigualdad estricta (!==).

	Es una buena práctica utilizar siempre la igualdad estricta (===) para evitar problemas de igualdad que puedan surgir debido a las conversiones automáticas realizadas por la igualdad abstracta. 

	Esto ayuda a evitar comportamientos inesperados y asegura que las comparaciones sean precisas en términos de tipo de datos y valor.


    Igualdad Abstracta (Equality Abstract Comparison):

    	Se realiza utilizando los operadores de igualdad (==) y de desigualdad (!=).

    	En este tipo de comparación, JavaScript realiza una conversión de tipo (coerción) de los operandos si son de tipos diferentes antes de hacer la comparación.

    	Si los operandos tienen tipos diferentes, JavaScript intentará convertir uno o ambos valores a un tipo común para realizar la comparación.

    	El resultado de una comparación de igualdad abstracta puede ser sorprendente para algunos valores debido a las conversiones automáticas que se realizan.


	Igualdad Estricta (Equality Strict Comparison):

    	Se realiza utilizando los operadores de igualdad estricta (===) y de desigualdad estricta (!==).

    	En este tipo de comparación, no se realiza ninguna conversión de tipo (coerción) de los operandos antes de hacer la comparación.

    	Para que los operandos se consideren iguales en una comparación estricta, deben tener el mismo valor y el mismo tipo de dato.


	Vagamente igual (==) /looselyEqual: 

		El operador de igualdad abstracta (==) realiza conversiones automáticas (coerciones) entre los operandos si son de tipos diferentes, lo que puede llevar a resultados inesperados en algunas situaciones. 

		Es recomendable utilizar el operador de igualdad estricta (===) cuando desees comparar valores sin que JavaScript realice conversiones de tipo, lo que ayuda a evitar comportamientos inesperados y garantiza comparaciones más precisas.

		```js

			console.log(5 == "5"); // Resultado: true (coerción de tipo: "5" se convierte a 5)
			console.log(true == 1); // Resultado: true (coerción de tipo: true se convierte a 1)
			console.log(null == undefined); // Resultado: true (coerción de tipo: ambos se convierten a false)

			console.log("0" == false); // Resultado: true (coerción de tipo: false se convierte a 0)
			console.log(" " == false); // Resultado: true (coerción de tipo: false se convierte a 0)
			console.log([] == false); // Resultado: true (coerción de tipo: false se convierte a 0)

		```

	Vagamente desigual (!=): 

		Se utiliza en JavaScript para comparar si dos valores no son iguales. 

		Realiza una conversión de tipos (coerción) similar al operador de igualdad abstracta (==), pero devuelve true si los operandos no son iguales y false si son iguales.

		Realiza conversión de tipos, lo que puede llevar a resultados inesperados en algunas situaciones. 

		Es recomendable utilizar el operador de desigualdad estricta !== cuando desees realizar comparaciones sin conversiones de tipo y así evitar comportamientos inesperados.

		```js

			console.log(5 != 5); // Resultado: false (5 es igual a 5)
			console.log(5 != "5"); // Resultado: false (5 es igual a "5" después de la conversión de tipo)
			console.log(0 != false); // Resultado: false (0 es igual a false después de la conversión de tipo)
			console.log(null != undefined); // Resultado: false (null y undefined son considerados iguales en la desigualdad abstracta)

		```


	Estrictamente igual(===) /strictlyEqual: 

		El operador de igualdad estricta (===) compara tanto el valor como el tipo de los operandos. Solo devuelve true si ambos son idénticos en valor y tipo. 

		Esto lo hace más seguro en comparaciones porque no realiza conversiones automáticas de tipos, evitando posibles confusiones y comportamientos inesperados en las comparaciones.

		```js

			console.log(5 === "5"); // Resultado: false (número no es igual a string)
			console.log(true === 1); // Resultado: false (boolean no es igual a número)
			console.log(null === undefined); // Resultado: false (null no es igual a undefined)

			console.log("0" === false); // Resultado: false (string no es igual a boolean)
			console.log(" " === false); // Resultado: false (string no es igual a boolean)
			console.log([] === false); // Resultado: false (array no es igual a boolean)

		```


	Estrictamente desigual (!==): 

		Se utiliza para comparar si dos valores no son iguales, teniendo en cuenta tanto su valor como su tipo. 

		A diferencia del operador de desigualdad abstracta !=, el operador !== no realiza conversiones automáticas de tipos (coerción) antes de hacer la comparación.

		```js

			console.log(5 !== 5); // Resultado: false (5 es igual a 5 en valor y tipo)
			console.log(5 !== "5"); // Resultado: true (5 es un número y "5" es un string, son de tipos diferentes)
			console.log(0 !== false); // Resultado: true (0 es un número y false es un boolean, son de tipos diferentes)
			console.log(null !== undefined); // Resultado: true (null y undefined son de tipos diferentes)

		```


	Object.is: 

		Es un método estático introducido en ECMAScript 6 (ES6) que se utiliza para comparar si dos valores son iguales, teniendo en cuenta tanto su valor como su tipo. 

		A diferencia de los operadores de igualdad abstracta (==) y de igualdad estricta (===), Object.is() tiene un comportamiento más preciso y no realiza conversiones automáticas de tipos.

		```js

			Object.is(valor1, valor2);

		```

		Características de Object.is():

		    Precisión en la comparación: 

		    	A diferencia del operador de igualdad abstracta (==), Object.is() devuelve true solo si los valores son idénticos tanto en valor como en tipo. Esto significa que no se realiza coerción de tipos, por lo que ciertos casos de igualdad abstracta que pueden ser confusos son evitados.


		    Considera NaN como igual a NaN: 

		    	En JavaScript, el valor especial NaN (Not a Number) es considerado diferente a cualquier otro valor, incluyendo a sí mismo. Sin embargo, Object.is() considera que NaN es igual a NaN, lo que lo hace útil para comparar con precisión valores que pueden ser NaN.


		    	Considera +0 y -0 como diferentes: 

		    		A diferencia del operador de igualdad abstracta (==), Object.is() considera a +0 y -0 como valores diferentes, ya que tienen representaciones diferentes en el formato IEEE 754 de punto flotante.

		```js

			console.log(Object.is(5, 5)); // Resultado: true
			console.log(Object.is(5, "5")); // Resultado: false
			console.log(Object.is(0, -0)); // Resultado: false
			console.log(Object.is(NaN, NaN)); // Resultado: true
			console.log(Object.is(null, null)); // Resultado: true
			console.log(Object.is(undefined, undefined)); // Resultado: true
			console.log(Object.is(true, true)); // Resultado: true
			console.log(Object.is(false, false)); // Resultado: true

		```



|| BUCLES E ITERACIONES (loops and iterations)

	Estan relacionados con la repetición de una secuencia de instrucciones o código varias veces. 

	Bucles: 

		Permiten ejecutar un bloque de código múltiples veces hasta que se cumpla una condición específica.

	Iteraciones:  

		Se refiere a una sola ejecución de un bloque de código dentro de un bucle. En el ejemplo anterior, cada vez que el bucle se ejecuta y el código dentro de él se repite, se realiza una iteración.
	
	
	En resumen, los bucles permiten automatizar y simplificar tareas repetitivas en el código, mientras que las iteraciones se refieren a las repeticiones individuales que ocurren dentro del bucle.

    1. for: 

		Se utiliza cuando se conoce la cantidad exacta de iteraciones que se deben realizar.

		Puede ser utilizado para realizar diversas tareas, como:

    		Recorrer arrays o listas de elementos.

    		Realizar cálculos repetitivos.

    		Crear secuencias de números.

    		Realizar operaciones con cierta cantidad de repeticiones conocidas.


		```js

			for (inicialización; condición; expresión_de_actualización) {
			  // Bloque de código a ejecutar en cada iteración
			}

		```

		Es importante asegurarse de que la condición del bucle sea adecuada para evitar bucles infinitos. 

		Es posible utilizar otros bucles (como while o do-while) cuando la cantidad de iteraciones no es conocida de antemano.


		Inicialización: 

			Aquí se declara y/o inicializa una variable de control que se utilizará para contar las iteraciones o establecer otros valores iniciales necesarios. 

			Por lo general, esta es la parte donde se crea la variable que servirá como contador del bucle.


	    Condición: 

	    	Es una expresión que se evalúa antes de cada iteración. 

	    	Si la condición es true, el bloque de código dentro del bucle se ejecutará; si es false, el bucle se detendrá y se saldrá de él.


	    Expresión de Actualización: 

	    	Se ejecuta al final de cada iteración, generalmente se usa para incrementar o decrementar el valor de la variable de control. 

	    	Es la parte donde se actualiza el contador del bucle.

		```js

			for (let i = 1; i <= 5; i++) {
			  console.log(i); // Imprime los números del 1 al 5 en cada iteración
			}

		```

			En el ejemplo, i es la variable de control que se inicializa en 1, la condición es i <= 5, lo que significa que el bucle continuará mientras i sea menor o igual a 5. En cada iteración, se imprime el valor actual de i y luego se incrementa en 1 con i++.


	2. while: 

		Se utiliza cuando no se conoce la cantidad exacta de iteraciones y se ejecutará siempre que la condición especificada sea verdadera.

		Antes de cada iteración, se evalúa la condición y si es verdadera, el bloque de código se ejecuta. 

		Después de cada iteración, se vuelve a evaluar la condición y el bucle continúa mientras la condición siga siendo verdadera.

		Si la condición inicial del bucle while es falsa, el bloque de código nunca se ejecutará. Por lo tanto, asegúrate de que la condición eventualmente se vuelva falsa para evitar bucles infinitos.


		```js

			while (condición) {
			  // Bloque de código a ejecutar en cada iteración
			}

		```

		Condición: 

			Es una expresión que se evalúa antes de cada iteración. 

			Si la condición es true, el bloque de código se ejecuta nuevamente. Si la condición es false, el bucle se detiene y se sale de él.


		```js

			let i = 1;

			while (i <= 5) {
			  console.log(i);
			  i++;
			}

		```
			inicializamos la variable i con 1 y luego utilizamos el bucle while para imprimir los números del 1 al 5. 

			Antes de cada iteración, se evalúa la condición i <= 5. 

			Si la condición es verdadera, el bloque de código dentro del bucle se ejecuta (en este caso, imprime el valor de i) y luego incrementamos i en 1. 

			El bucle se repite hasta que i sea mayor que 5, momento en el cual la condición se vuelve falsa y el bucle se detiene.


	3. do-while: 

		Similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición.

		Ejecutará el bloque de código al menos una vez, incluso si la condición inicial es false. 

		Esto asegura que el bloque de código se ejecute al menos una vez antes de verificar la condición, independientemente de si la condición inicial es verdadera o falsa.

		Es útil cuando la condición para detener el bucle se evalúa al final de cada iteración. 

		Es fundamental asegurarse de que la condición eventualmente se vuelva falsa para evitar bucles infinitos.

		Usos: 

			Realizar tareas que deben ejecutarse al menos una vez antes de verificar la condición.

		    Sumar o realizar operaciones matemáticas con números.

		    Recorrer y manipular elementos de un array o lista.

		    Validar la entrada del usuario, pidiendo datos hasta que se cumpla una condición deseada.

		    Realizar acciones en base a eventos que ocurran al menos una vez.


		```js

			do {
			  // Bloque de código a ejecutar en cada iteración
			} while (condición);

		```

		Bloque de código: 

			Es el conjunto de instrucciones que se ejecutará en cada iteración del bucle.

    	Condición: 

    		Es una expresión que se evalúa al final de cada iteración. 

    		Si la condición es true, el bucle se repetirá y ejecutará nuevamente el bloque de código. Si la condición es false, el bucle se detendrá y se saldrá de él.


    	```js

    		let i = 1;

			do {
			  console.log(i);
			  i++;
			} while (i <= 5);

    	```

    		i se inicializa en 1 y se incrementa en cada iteración.

    		El bloque de código dentro del bucle do...while imprime el valor actual de i y luego se incrementa en 1. 

    		El bucle continuará ejecutándose mientras la condición i <= 5 sea verdadera. Como resultado, imprimirá los números del 1 al 5.


    4. for in

    	Se utiliza para recorrer las propiedades enumerables de un objeto. 

    	Permite iterar sobre todas las propiedades enumerables de un objeto, incluyendo las propiedades heredadas del objeto y las propiedades que el objeto ha definido directamente.

    	Es útil cuando se necesita recorrer dinámicamente las propiedades de un objeto y realizar operaciones con ellas.

    	Utilizar for...in con cuidado para evitar problemas con propiedades heredadas o no enumerables.

    	Es común utilizar el método hasOwnProperty() para asegurarse de que la propiedad se encuentre directamente en el objeto y no sea heredada.


    	```js

    		for (variable in objeto) {
			  // Bloque de código a ejecutar en cada iteración
			}

    	```

    	Variable: 

    		Es una variable que toma el nombre de cada propiedad del objeto en cada iteración. 

    		Esta variable se utiliza para acceder al valor de la propiedad o realizar otras operaciones dentro del bloque de código.

    	Objeto: 

    		Es el objeto que se va a recorrer, puede ser cualquier objeto en JavaScript que tenga propiedades enumerables.


    	```js

    		const persona = {
			  nombre: "Juan",
			  edad: 30,
			  ocupacion: "Ingeniero",
			};

			for (let propiedad in persona) {
			  console.log(propiedad + ": " + persona[propiedad]);
			}

    	```
    		
    		Recorre el objeto persona y en cada iteración, la variable propiedad toma el nombre de cada propiedad del objeto.

    		Luego, imprimimos el nombre de la propiedad y su respectivo valor utilizando la sintaxis objeto[propiedad].


    	El orden en que se recorren las propiedades con for...in puede no ser el mismo en que fueron definidas en el objeto, ya que JavaScript no garantiza el orden de las propiedades de un objeto. 

    	Además, for...in también recorre las propiedades heredadas del prototipo del objeto, por lo que es común utilizar el método hasOwnProperty() para asegurarse de que la propiedad se encuentre directamente en el objeto y no sea heredada.

    	```js

    		for (let propiedad in persona) {
			  if (persona.hasOwnProperty(propiedad)) {
			    console.log(propiedad + ": " + persona[propiedad]);
			  }
			}

    	```

    5. for of

    	se introdujo en ES6 (ECMAScript 2015) y se utiliza para recorrer elementos de colecciones iterables, como arrays, strings, mapas, sets, y otros objetos que implementen la interfaz Iterable. 

    	A diferencia del bucle for...in, que recorre las propiedades enumerables de un objeto, for...of permite acceder directamente a los valores de la colección en cada iteración, sin necesidad de utilizar índices o propiedades.

    	Además, no es necesario preocuparse por la longitud del iterable, ya que el bucle se detendrá automáticamente una vez que se hayan recorrido todos los elementos.

    	Tener en cuenta que no se puede utilizar for...of con objetos regulares (plain objects) ya que estos no son iterables.

    	Para recorrer las propiedades de un objeto, sigue utilizando for...in o Object.keys(), Object.values(), o Object.entries() dependiendo de tus necesidades.

    	Usos: 

    		Recorrer un array y obtener la suma de sus elementos.

		    Recorrer un string y contar la cantidad de caracteres.

		    Recorrer un Map y obtener sus claves y valores.

		    Recorrer un Set y mostrar sus elementos.

		    Utilizar el bucle con una función generadora para recorrer sus valores generados.


    	```js

    		for (variable of iterable) {
			  // Bloque de código a ejecutar en cada iteración
			}

    	```

    	Variable: 

    		Es una variable que toma el valor de cada elemento de la colección en cada iteración. 

    		Esta variable se utiliza para acceder al valor del elemento o realizar otras operaciones dentro del bloque de código.

    	Iterable: 

    		Es una colección de elementos sobre la cual se va a iterar. Puede ser un array, un string, un mapa, un set u otros objetos iterables.

    	```js

    		const frutas = ["manzana", "plátano", "naranja", "uva"];

			for (let fruta of frutas) {
			  console.log(fruta);
			}

    	```

    		Recorre el array frutas y en cada iteración, la variable fruta toma el valor de cada elemento del array. Luego, imprimimos el valor de fruta en cada iteración.


    	Objeto plano vs no plano: 		

			Un objeto creado por notación literal o un objeto nuevo se conoce como objeto simple. ejemplo:

				let a = {aaa : 1}

				let b = new Object()

			Mientras que el objeto creado usando una función no es un objeto plano:

				let C = function(){}

				let d = new C()


    6. break/continue

    	Son palabras clave en JavaScript que se utilizan para controlar el flujo de ejecución dentro de bucles (for, while, do...while, etc.).

    	Permite tener más control sobre el flujo de ejecución en los bucles.


    	Break:

    		La palabra clave break se utiliza para detener la ejecución de un bucle de forma prematura, antes de que se haya completado su recorrido normal.
    		
    		Cuando se encuentra la declaración break dentro de un bucle, el programa sale inmediatamente del bucle y continúa con la ejecución del código (global) que sigue después del bucle.

			```js

				for (let i = 1; i <= 10; i++) {
				  if (i === 5) {
				    break; // Se detiene el bucle cuando i es igual a 5
				  }
				  console.log(i);
				}

			```

				El bucle for itera del 1 al 10, pero cuando i es igual a 5, se encuentra la declaración break, lo que detiene el bucle y evita que se impriman los números restantes.

				Imprimió 4 valores: 1, 2, 3, 4. 


		Continue:

			Se utiliza para saltar una iteración del bucle y continuar con la siguiente iteración.

			```js

				for (let i = 1; i <= 5; i++) {
				  if (i === 3) {
				    continue; // Se salta la iteración cuando i es igual a 3
				  }
				  console.log(i);
				}

			```

				itera del 1 al 5, pero cuando i es igual a 3, se encuentra la declaración continue, lo que salta la iteración actual y no se imprime el número 3 en la consola.


	Declaraciones etiquetadas: 

		Los "Labeled Statements" en JavaScript son una característica que permite etiquetar bloques de código con identificadores específicos. 

		Estas etiquetas se utilizan principalmente en conjunto con las instrucciones break y continue para especificar a qué bucle o bloque de código se desea aplicar la acción de interrupción o salto.

		Pueden ser útiles en situaciones específicas donde se necesita controlar la ejecución de múltiples bucles anidados o bloques de código.


		```js

			etiqueta: declaración

		```

		etiqueta: 

			Es un identificador válido que se coloca seguido de dos puntos (:).

			Puede ser cualquier palabra que cumpla las reglas de nombramiento de variables en JavaScript (por ejemplo, no puede ser una palabra reservada).


    	declaración: 

    		Es cualquier instrucción válida en JavaScript, como un bucle for, while, un bloque de código con llaves {}, una sentencia if, etc.


    	```js

    		etiquetaExterna: for (let i = 1; i <= 3; i++) {
			  for (let j = 1; j <= 3; j++) {
			    console.log(`i: ${i}, j: ${j}`);
			    if (i === 2 && j === 2) {
			      break etiquetaExterna; // Se sale del bucle etiquetado cuando i es igual a 2 y j es igual a 2
			    }
			  }
			}

    	```

    	Hemos etiquetado el bucle externo con etiquetaExterna: y el bucle interno imprime los valores de i y j. 

    	Cuando i es igual a 2 y j es igual a 2, se encuentra la declaración break etiquetaExterna;, lo que provoca que el bucle externo (etiquetado) se detenga prematuramente y se salga de ambos bucles. 

    	Sin la declaración etiquetada, solo se saldría del bucle interno.



|| CONTROL DE FLUJO (control flow)

	El control de flujo se combina con los bucles e iteraciones para formar estructuras decisiones, acciones, repeticiones, salida o continuación. 

	Los bucles e iteraciones son especialmente útiles cuando necesitamos realizar tareas repetitivas o procesar múltiples elementos en una estructura de datos. Permiten automatizar procesos y evitar la repetición manual de código.


    Estructuras de decisión:

    	if: 

    		Permite ejecutar un bloque de código si una condición es verdadera.

	    if...else: 

	    	Permite ejecutar un bloque de código si una condición es verdadera, y otro bloque si la condición es falsa.

	    if...else if...else: 

	    	Permite evaluar múltiples condiciones en secuencia y ejecutar el bloque de código correspondiente a la primera condición verdadera.


	Bucles e iteraciones:

	    for: 

	    	Se utiliza para repetir un bloque de código un número específico de veces, generalmente basado en una variable contador.

	    while: 

	    	Se utiliza para repetir un bloque de código mientras una condición sea verdadera.

	    do...while: 

	    	Similar a while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición.

	    for...in: 

	    	Se utiliza para iterar sobre las propiedades enumerables de un objeto.

	    for...of: 

	    	Se utiliza para iterar sobre elementos iterables como arrays, cadenas, etc.


	Estructuras de control especiales:

	    break: 

	    	Se utiliza para salir prematuramente de un bucle o una instrucción etiquetada.	

	    continue: 

	    	Se utiliza para saltar una iteración de un bucle y continuar con la siguiente.


	Declaraciones condicionales (Conditional Statements): 

		Son estructuras de control que permiten tomar decisiones en el código basándose en el valor de una condición. 

		Estas declaraciones evalúan una expresión lógica y, según si la condición es verdadera o falsa, ejecutan diferentes bloques de código.

		Permiten que un programa tome decisiones basadas en diferentes situaciones. Por ejemplo, puedes utilizar declaraciones condicionales para validar datos de entrada, mostrar mensajes de error o éxito, controlar el flujo de ejecución en un algoritmo, entre muchas otras aplicaciones.


		if: 

			Es la forma más básica de declaración condicional. Se utiliza para ejecutar un bloque de código si una condición es verdadera.

			```js

				if (condición) {
				  // Bloque de código que se ejecuta si la condición es verdadera
				}

			```


		If else:

			Permite ejecutar un bloque de código si la condición es verdadera, y otro bloque si la condición es falsa.

			```js

				if (condición) {
				  // Bloque de código que se ejecuta si la condición es verdadera
				} else {
				  // Bloque de código que se ejecuta si la condición es falsa
				}

			```


		If else if:

			Permite evaluar múltiples condiciones en secuencia y ejecutar el bloque de código correspondiente a la primera condición verdadera.

			```js

				if (condición1) {
				  // Bloque de código que se ejecuta si condición1 es verdadera

				} else if (condición2) {
				  // Bloque de código que se ejecuta si condición1 es falsa y condición2 es verdadera

				} else {
				  // Bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera
				}

			```

			Ejemplo:

				```js

					const numero = -5;

					if (numero > 0) {
					  console.log("El número es positivo.");
					} else if (numero < 0) {
					  console.log("El número es negativo.");
					} else {
					  console.log("El número es cero.");
					}

				```

				Se evalúa la condición numero > 0. 

				Si es verdadera, se imprime "El número es positivo." Si la condición es falsa, se pasa a la siguiente condición numero < 0.

				Si esta última condición también es falsa, se ejecuta el bloque de código dentro del else, imprimiendo "El número es cero."


		Switch:

			Se utiliza para tomar decisiones basadas en el valor de una expresión. 

			Es una alternativa a la declaración if...else if...else cuando se necesitan evaluar múltiples casos distintos de una sola variable.

			```js

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

			```

			expresion:

			    Es la variable o expresión que se va a evaluar.

		    case valor1: 

		    	Representa un caso específico que se compara con la expresión. Si la expresión es igual a valor1, se ejecuta el bloque de código asociado. Si no es igual, se pasa al siguiente caso.

		    break: 

		    	Es una palabra clave opcional que se usa para salir del bloque switch una vez que se ha ejecutado el caso correspondiente. 

		    	Si no se incluye el break, la ejecución continuará con el siguiente caso sin importar si la condición se cumple o no. Si no hay un break en ningún caso, el código continuará ejecutándose hasta que encuentre uno o llegue al default.

		    default: 

		    	Es una etiqueta opcional que se utiliza para especificar un bloque de código que se ejecutará si ninguno de los casos anteriores se cumple. Es similar a la cláusula else en las declaraciones if...else.


		    ```js

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

		    ```


	Gestión de excepciones: 

		Es una técnica utilizada para manejar situaciones excepcionales o errores que pueden ocurrir durante la ejecución de un programa. 

		Estas excepciones pueden surgir debido a diversas circunstancias, como errores de sintaxis, errores de lógica, operaciones inválidas o eventos inesperados.

		La idea detrás de la gestión de excepciones es evitar que el programa se bloquee o detenga abruptamente cuando ocurre un error. 

		En lugar de eso, se capturan las excepciones y se toman acciones para manejarlas adecuadamente. 

		Esto permite que el programa continúe ejecutándose de manera controlada y proporciona la oportunidad de mostrar mensajes de error amigables al usuario o realizar otras acciones correctivas.

		Es una práctica importante en la programación para garantizar la estabilidad y robustez de los programas.  

		En JavaScript, la gestión de excepciones se realiza mediante el uso de bloques try, catch, finally y, opcionalmente, throw:


		Try:

			Se utiliza para envolver el código que puede lanzar una excepción.

			El propósito del bloque try es probar si hay algún código que podría generar una excepción. Si se produce una excepción dentro del bloque try, la ejecución se detiene en ese punto y pasa al bloque catch correspondiente


		Catch:

			Se utiliza para capturar y manejar las excepciones lanzadas dentro del bloque try. 

			Si ocurre una excepción en el bloque try, el bloque catch se ejecuta para gestionar las excepciones y tomar acciones apropiadas y acceder a información sobre la excepción.

			En el bloque catch, se declara una variable que representa el objeto de error asociado con la excepción. Esta variable contiene información sobre el error, como el mensaje de error y otras propiedades.


		Finally: 

			Es un bloque opcional que se ejecuta siempre, ya sea que se haya lanzado una excepción o no. 

			Se usa para realizar acciones que deben suceder independientemente de si hay una excepción o no.

			Si hay código que debe ejecutarse sin importar qué, como limpieza de recursos o cierre de conexiones, se coloca en el bloque finally

			```js

				try {

				  // Bloque de código que podría generar una excepción

				} catch (error) {

				  // Bloque de código para manejar la excepción capturada

				} finally {

				  // Bloque de código que siempre se ejecuta, opcional
				}

			```

			Ejemplo: 

				```js

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

				```

				la función dividir intenta realizar una división de dos números, pero verifica si el divisor (b) es igual a cero. Si es así, lanza una excepción con throw new Error(...). 

				En el bloque catch, capturamos la excepción y mostramos un mensaje de error. También establecemos un valor predeterminado (0) para el resultado, lo que nos permite manejar la excepción de manera controlada sin detener el programa por completo.

				Finalmente, en el bloque finally, mostramos un mensaje que indica que la función de división ha terminado, independientemente de si se lanzó una excepción o no.


		Throw exception: 

			Se utiliza para lanzar explícitamente una excepción en un bloque try.

			Cuando se lanza una excepción con throw, el flujo normal del programa se interrumpe y se busca un bloque catch que pueda manejar la excepción.

			```js

				throw expresion;

			```

			expresion: 

				Puede ser cualquier valor o un objeto que represente la excepción que se desea lanzar.

				Por convención, se utiliza el objeto Error o sus subclases para representar las excepciones.


			```js

				throw new Error("Este es un mensaje de error.");

			```

			En este caso, se está lanzando una excepción de tipo Error con un mensaje descriptivo que indica la naturaleza del error.

			Cuando se lanza una excepción con throw, el control del flujo pasa al bloque catch más cercano que pueda manejar esa excepción. 

			Si no hay ningún bloque catch, la excepción provocará que el programa se detenga y se mostrará información sobre el error en la consola del navegador.

			```js

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

			```

			La función dividir intenta realizar una división de dos números, pero antes de hacerlo, verifica si el divisor (b) es igual a cero.

			Si es así, lanza una excepción con throw new Error(...). En el bloque try, llamamos a la función dividir con dividir(10, 0), lo que provocará que se lance la excepción ya que intenta dividir por cero. 

			La excepción se captura en el bloque catch, y se muestra el mensaje de error.


		Error Object: 

			La utilización de objetos de error en el contexto de control de flujo se refiere al uso de objetos de error, como el objeto Error y sus subclases (TypeError, SyntaxError, etc.), para representar y manejar excepciones de manera más precisa y detallada.

			Estos objetos tienen propiedades como message (mensaje de error), name (nombre del tipo de error) y otras propiedades específicas de cada tipo de error.

			Cuando se lanza una excepción utilizando throw, es común utilizar un objeto de error para proporcionar un mensaje descriptivo que indique qué tipo de error ocurrió y cuál fue la causa del problema. 

			Esto es especialmente útil para depurar y rastrear errores en el código.

			Por ejemplo, en lugar de simplemente lanzar una excepción genérica con throw new Error("Algo salió mal."), podemos utilizar una subclase de Error más específica, como TypeError o SyntaxError, y proporcionar un mensaje más detallado y significativo que indique qué tipo de error ocurrió y en qué parte del código

			```js

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

			```

			Resultado: 

			```js

				Error: Ambos argumentos deben ser números.

			```

			la función dividir verifica si ambos argumentos son números utilizando typeof. 

			Si alguno de los argumentos no es un número, se lanza una excepción de tipo TypeError con un mensaje descriptivo que indica que ambos argumentos deben ser números. 

			Además, si el divisor (b) es igual a cero, se lanza una excepción genérica con un mensaje que indica que no se puede dividir por cero.



|| Expresiones y operadores

	
	Expresiones:
		
		Una expresión es cualquier unidad de código que produce un valor. 

		Puede ser una combinación de variables, valores literales, operadores y funciones que se evalúan para producir un resultado


		Numéricas y aritméticas:

	        Suma: a + b

	        Resta: a - b

	        Multiplicación: a * b

	        División: a / b

	        Módulo (resto de la división): a % b

	        Incremento: a++ o ++a

	        Decremento: a-- o --a


	    de Cadena (string):

	        Concatenación de cadenas: "Hola" + " " + "mundo"

	        Plantillas de cadena (template literals): `Hola ${nombre}`


	    Asignación:

	        Asignación: a = 10

	        Asignación con operadores: a += 5, b *= 2, etc.


	    Comparación:

	        Igual a: a == b

	        Diferente de: a != b

	        Mayor que: a > b

	        Menor que: a < b

	        Mayor o igual que: a >= b

	        Menor o igual que: a <= b


	    Lógicas:

	        AND lógico: a && b

	        OR lógico: a || b

	        NOT lógico: !a


	    Condicionales (ternarias):

	        Operador ternario: condicion ? 

	        valorSiVerdadero : valorSiFalso


	    Llamada a funciones:

	        Llamada a una función: nombreFuncion()
	        
	        Llamada a una función con argumentos: sumar(10, 20)


	    Acceso a propiedades:

	        Acceso a una propiedad de un objeto: objeto.propiedad

	        Acceso a una propiedad mediante notación de corchetes: objeto['propiedad']


	    de Arreglo (Array):

	        Creación de un arreglo: []

	        Acceso a un elemento del arreglo: arreglo[indice]


	    de Objeto:

	        Creación de un objeto: {}

	        Definición de propiedades de un objeto: { nombre: "John", edad: 30 }


	    de Función:

	        Expresión de función anónima: 
	        function() { ... }

	        Expresión de función con nombre: function nombreFuncion() { ... }


	    Expresiones regulares:

	        Expresión regular: /patron/


		```js

			// Expresión numérica
			const suma = 5 + 3;

			// Expresión de cadena
			const nombreCompleto = "John" + " " + "Doe";

			// Expresión de llamada a función
			const resultadoFuncion = Math.sqrt(25);

			// Expresión de comparación
			const esMayor = 10 > 5;

			// Expresión de asignación
			let x = 10;

		```


	Operadores Avanzados:
			
		Los operadores son símbolos o palabras clave que se utilizan para realizar operaciones en las expresiones. Estas operaciones pueden ser matemáticas, de comparación, lógicas, de asignación, entre otras.


		Unary/Unario: 

			En matemáticas se utiliza para representa la unidad de los números naturales, ej: III son 3. 

			En JavaScript son operadores que trabajan con un solo operando, es decir, una sola expresión. 

			Estos operadores se utilizan para realizar diversas operaciones en una sola variable o valor. 

			Los operadores unarios pueden tener diferentes efectos según el contexto en el que se utilicen.


			Negación unaria (-):

				Se utiliza para negar un valor numérico o convertir un valor no numérico en un número negativo.

				```js

					const numero = 5;

					const negativo = -numero; // negativo será igual a -5

				```

			Operador de incremento (++):

				Se utiliza para aumentar en 1 el valor de una variable.

				```js

					let contador = 10;
					
					contador++; // contador será igual a 11 después del incremento

				```

			Operador de decremento (--):
				
				Se utiliza para disminuir en 1 el valor de una variable.

				```js

					let contador = 8;

					contador--; // contador será igual a 7 después del decremento

				```

			Operador lógico NOT (!):
				
				Se utiliza para negar un valor booleano. 

				Si el valor es true, se convierte en false, y si es false, se convierte en true.

				```js

					const esVerdadero = true;

					const esFalso = !esVerdadero; // esFalso será igual a false

				```

			Operador typeof:
				
				Se utiliza para obtener una cadena que representa el tipo de un valor.	

				```js

					const numero = 10;
					
					const tipo = typeof numero; // tipo será igual a "number"

				```

			Operador void:
				
				Se utiliza para evaluar una expresión y devolver undefined.

				```js

					const resultado = void 0; // resultado será undefined

				```

		Bitwise: 

			Son operadores que trabajan a nivel de bits en números enteros de 32 bits. 

			Estos operadores realizan operaciones a nivel de bits en los valores binarios de los números y son utilizados principalmente para tareas relacionadas con manipulación y control de bits.

			Pueden confundirse con operadores lógicos pero son distintos.


			AND bitwise (&):

				Este operador realiza una operación AND a nivel de bits entre dos números. 

				Cada bit en el resultado será 1 si y solo si ambos bits correspondientes en los números de entrada son 1.

				```js

					const a = 5; // Representación binaria: 00000000000000000000000000000101
					
					const b = 3; // Representación binaria: 00000000000000000000000000000011
					
					const resultado = a & b; // Representación binaria del resultado: 00000000000000000000000000000001 (1 en decimal)

				```

			OR bitwise (|):
				
				Este operador realiza una operación OR a nivel de bits entre dos números. 

				Cada bit en el resultado será 1 si al menos uno de los bits correspondientes en los números de entrada es 1.

				```js

					const a = 5; // Representación binaria: 00000000000000000000000000000101
					
					const b = 3; // Representación binaria: 00000000000000000000000000000011
					
					const resultado = a | b; // Representación binaria del resultado: 00000000000000000000000000000111 (7 en decimal)

				```

			XOR bitwise (^):

				Este operador realiza una operación XOR a nivel de bits entre dos números. 

				Cada bit en el resultado será 1 si solo uno de los bits correspondientes en los números de entrada es 1.

				```js

					const a = 5; // Representación binaria: 00000000000000000000000000000101

					const b = 3; // Representación binaria: 00000000000000000000000000000011

					const resultado = a ^ b; // Representación binaria del resultado: 00000000000000000000000000000110 (6 en decimal)

				```

			NOT bitwise (~):
				
				Este operador realiza una operación NOT a nivel de bits en un solo número. 

				Invierte cada bit del número, es decir, cambia 1 a 0 y 0 a 1.

				```js

					const a = 5; // Representación binaria: 00000000000000000000000000000101

					const resultado = ~a; // Representación binaria del resultado: 11111111111111111111111111111010 (-6 en decimal)

				```

			Desplazamiento a la izquierda (<<):
				
				Este operador desplaza los bits de un número hacia la izquierda una cantidad específica de posiciones.

				Los bits desplazados a la izquierda se llenan con ceros.

				```js

					const a = 5; // Representación binaria: 00000000000000000000000000000101
					
					const resultado = a << 2; // Representación binaria del resultado: 00000000000000000000000000010100 (20 en decimal)

				```


			Desplazamiento a la derecha (>>):
			
				Este operador desplaza los bits de un número hacia la derecha una cantidad específica de posiciones. 

				Los bits desplazados a la derecha se llenan con el bit más significativo (el bit de signo).

				```js

					const a = 16; // Representación binaria: 00000000000000000000000000010000
					
					const resultado = a >> 2; // Representación binaria del resultado: 00000000000000000000000000000100 (4 en decimal)

				```


			Desplazamiento a la derecha sin signo (>>>):
				
				Este operador desplaza los bits de un número hacia la derecha una cantidad específica de posiciones. 

				Los bits desplazados a la derecha se llenan con ceros.

				```js

					const a = -16; // Representación binaria: 11111111111111111111111111110000
					
					const resultado = a >>> 2; // Representación binaria del resultado: 00111111111111111111111111111100 (1073741820 en decimal)

				```

		Bigint: 

			Son operadores que se utilizan para realizar operaciones matemáticas con números enteros muy grandes, más allá del rango que puede manejar el tipo de dato "Number" estándar.

			Para declarar un número como "BigInt", simplemente agrega la letra "n" al final del número.

			```js

				const numeroBigInt = 1234567890123456789012345678901234567890n;

			```

			Operadores aritméticos: 

				Se pueden usar los operadores aritméticos estándar, como +, -, *, /, y %, con números "BigInt".

				```js

					const a = 123456789012345678901234567890n;

					const b = 987654321098765432109876543210n;

					const suma = a + b; // 1111111111111111111111111111100n

					const producto = a * b; // 121932631137021795696978281944487162532678405536372274404821000n

				```

			Operadores de comparación: 

				Se pueden utilizar operadores de comparación como ==, !=, <, >, <=, y >= para comparar números "BigInt".

				```js

					const a = 123456789012345678901234567890n;

					const b = 987654321098765432109876543210n;	

					console.log(a < b); // true
					console.log(a == b); // false

				```

			Operadores unarios: 

				Se pueden utilizar operadores unarios como +, -, y ! con números "BigInt".

				```js
				
					const a = 123456789012345678901234567890n;
				
					const negativo = -a; // -123456789012345678901234567890n

				```

			Operadores de asignación: 

				Se pueden usar operadores de asignación como =, +=, -=, *=, /=, y %= con números "BigInt".

				```js

					let a = 1234567890n;
					
					a += 100n; // 1234567990n

				```

			Convertir números regulares a bigint

				No se pueden mezclar, pero si convertir. 

				```js

					const numeroRegular = 123;
					
					const numeroBigInt = BigInt(numeroRegular); // convirtiendo a BigInt

				```


		Operador comparación, lógico y condicional: 

			La diferencia está en el valor de respuesta, los tipos de datos, usos, etc. 

			Comparación: 

				Devuelve True o False de acuerdo al valor o tipo del contenido de las variables. 

				```js

					const a = 5;
					const b = "5";
					console.log(a == b);
				```

			Lógico:

				Devuelve True o False de acuerdo al valor de verdad (true) las condiciones/valor de variable. 

				```js

					const a = true;
					const b = false;
					console.log(a && b);

					const a = true;
					const b = false;
					console.log(a || b);

				```

			Condicional: 

				Utilizados en expresiones condicionales para tomar decisiones basadas en condiciones lógicas. 
				
				Tiene que ver con las acciones o los caminos que toma. De acuerdo al valor de verdad (true) o falsedad (false) de una cosa, sucede una u otra cosa; descripta en el código.

				```js

					const valor = "Hola";
					const resultado = valor && "Mundo";
					console.log(resultado); // "Mundo" (ambos valores son verdaderos)

				```




|| FUNCIONES
	
	Es un bloque de código reutilizable que se define una vez y luego puede ser invocado o llamado en cualquier parte del código para realizar una tarea específica.

	Puede recibir datos de entrada, conocidos como parámetros, realizar operaciones basadas en esos datos y luego devolver un resultado, conocido como valor de retorno.

	Nos permiten encapsular lógica y tareas en unidades más pequeñas y manejables.

	Se utilizan para dividir un programa en partes más pequeñas y para evitar la repetición de código, lo que facilita el mantenimiento y la legibilidad del código.

	Son fundamentales para la programación estructurada y modular, lo que permite escribir código más eficiente y organizado.


	```js

		function saludar(nombre) {
		  return "Hola, " + nombre + "!";
		}

		// Llamando a la función y mostrando el resultado
		const mensajeSaludo = saludar("Juan");
		console.log(mensajeSaludo); // Salida: "Hola, Juan!"

	```

	Se puede invocar y ejecutar sin problemas.


	Parámetros y argumentos: 

		Un parametro es una variable que se utiliza para recibir valores de entrada o datos externos cuando se invoca la función. 

		Los parámetros permiten que las funciones sean más flexibles y puedan ser utilizadas con diferentes valores en diferentes llamadas.

		```js

			function nombreDeLaFuncion(parametro1, parametro2, ...parametroN) {
			  // Cuerpo de la función que utiliza los parámetros
			  // ...
			}

		```

		Los valores que se pasan en la llamada para los parametros, se llaman argumentos.

		```js

			function sumar(a, b) {
			  return a + b;
			}

			const resultado = sumar(5, 3); // Aquí, 5 y 3 son los argumentos para los parámetros 'a' y 'b'
			console.log(resultado); // Salida: 8

		```	

		Los nombres de los parámetros actúan como variables locales dentro del cuerpo de la función y solo están definidos en el contexto de esa función. 

		Por lo tanto, solo son accesibles y válidos dentro de la función.

		Las funciones pueden tener cero o más parámetros, y los parámetros pueden ser de cualquier tipo de dato válido en JavaScript, incluyendo números, cadenas, booleanos, objetos, arreglos y otros.

		```js

			function saludar() {
			  return "¡Hola, bienvenido!";
			}

			const mensajeSaludo = saludar();
			console.log(mensajeSaludo); // Salida: "¡Hola, bienvenido!"

		```


	Default params: 	

		Son una característica introducida en ECMAScript 6 (ES6) que permite asignar valores predeterminados a los parámetros de una función en caso de que no se les pase ningún valor o se les pase un valor que sea "undefined".

		Antes era necesario verificar dentro de la función si esos parámetros tenían valores o eran "undefined" y asignarles un valor predeterminado si era necesario.

		Ahora puedes establecer los valores predeterminados directamente en la declaración de la función, lo que hace que el código sea más limpio y fácil de mantener.

		```js

			function nombreDeLaFuncion(parametro1 = valorPredeterminado1, parametro2 = valorPredeterminado2, ...parametroN) {
			  // Cuerpo de la función que utiliza los parámetros
			  // ...
			}

		```

		Si no se proporciona ningún argumento o valor al llamar a la función, el valor predeterminado se utilizará automáticamente para el parámetro.

		```js

			function saludar(nombre = "Invitado") {
			  return "¡Hola, " + nombre + "!";
			}

			const mensajeSaludo1 = saludar("Juan");
			const mensajeSaludo2 = saludar(); // En este caso, no se pasa ningún valor para el parámetro 'nombre', por lo que se utilizará el valor predeterminado "Invitado"

			console.log(mensajeSaludo1); // Salida: "¡Hola, Juan!"
			console.log(mensajeSaludo2); // Salida: "¡Hola, Invitado!"

		```


	Rest params: 

		Son una característica introducida en ECMAScript 6 (ES6) que permite capturar un número variable de argumentos (o valores) pasados a una función en forma de un solo parámetro. 

		Esto es útil cuando no sabemos cuántos argumentos serán pasados o cuando queremos recibir una cantidad variable de argumentos sin necesidad de definir explícitamente cada parámetro.

		El operador de "Rest Params" es representado por tres puntos (...) seguido de un nombre de variable que almacenará los argumentos restantes como un arreglo. 

		El nombre del parámetro con los tres puntos se coloca al final de la lista de parámetros de la función.

		Siempre que se use "Rest Params", solo puede haber un parámetro de este tipo en la función, por eso se coloca al final.

		```js 

			function nombreDeLaFuncion(parametro1, parametro2, ...restParams) {
			  // Cuerpo de la función que utiliza los parámetros
			  // 'restParams' es un arreglo que contiene los argumentos restantes
			  // ...
			}

		```	

		```js

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

		```

		Cuando se llama a la función con varios argumentos (sumar(1, 2, 3, 4, 5)), el parámetro numeros captura esos argumentos en forma de un arreglo [1, 2, 3, 4, 5]. 

		Cuando se llama a la función con solo dos argumentos (sumar(10, 20)), el parámetro numeros captura esos dos argumentos en forma de un arreglo [10, 20].

		Si no se pasan argumentos al llamar a una función con "Rest Params", el parámetro con los tres puntos será un arreglo vacío.

		```js

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

		```


	Funciones Arrow: 

		A partir de ECMAScript 6 (ES6), JavaScript introdujo funciones de flecha (arrow functions) que proporcionan una sintaxis más corta y concisa para definir funciones.

		Incluye una flecha (=>) entre los parámetros y el cuerpo de la función.

		Una característica heredan el valor de this del ámbito en el que fueron creadas, lo que evita algunos problemas comunes relacionados con el uso de this en las funciones regulares.

		No son adecuadas para todas las situaciones, especialmente cuando se necesita acceder a la palabra clave this en el contexto local de la función.

		```js

			const nombreDeLaFuncion = (parametro1, parametro2, ...restParams) => {
			  // Cuerpo de la función que utiliza los parámetros
			  // ...
			  return resultado;
			};

		```

		Si la función tiene un solo parámetro, se puede omitir los paréntesis. 

		```js

			const funcionConUnParametro = parametro => {
			  // Cuerpo de la función que utiliza el parámetro
			  // ...
			  return resultado;
			};

		```

		Si la función tiene una sola instrucción y devuelve un valor, se puede omitir la palabra clave return y las llaves.

		```js

			const funcionCorta = () => "Hola Mundo";

		```

		Ejemplo de función arrow:

		```js

			const multiplicar = (a, b) => a * b;

			const resultadoMultiplicacion = multiplicar(4, 6);
			console.log(resultadoMultiplicacion); // Salida: 24

		```

		Otro beneficio es que heredan el valor de this del contexto en el que fueron creadas, lo que puede evitar problemas de enlace de this que suelen ocurrir en funciones regulares: 

			this hace referencia al ámbito global y no al objeto


		```js

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

		```

		El segundo ejemplo, la Arrow Function saludar dentro del objeto objetoArrow no tiene acceso al valor de this.nombre del objeto porque this en una Arrow Function hace referencia al ámbito global (ventana del navegador o módulo en Node.js), y no al objeto en el que fue creada.


	Funciones anónimas: 

		Son funciones sin nombre y se pueden asignar a variables o utilizar como argumentos en otras funciones.

		Son funciones sin identificador y generalmente se utilizan en situaciones donde no es necesario referirse a ellas más de una vez o donde su alcance se limita a un contexto específico.

		Son muy comunes en JavaScript, especialmente cuando se utilizan en contextos como callbacks, eventos o IIFE (Immediately Invoked Function Expression).

		Su uso permite tener un código más limpio y conciso, ya que no es necesario nombrar funciones que solo se utilizan en un lugar específico.

		Sin embargo, es importante tener en cuenta que, al ser anónimas, puede resultar un poco difícil de depurar en algunos casos, ya que no se dispone de un nombre descriptivo para identificar la función en las herramientas de desarrollo.

		Por esta razón, es recomendable utilizar funciones anónimas cuando su uso sea apropiado y claro dentro del código.

		```js

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

		```

		Función anónima asignada a una variable:

		```js

			const saludar = function() {
			  console.log("Hola, ¿cómo estás?");
			};

			saludar(); // Salida: "Hola, ¿cómo estás?"

		```	

		La función se invoca mediante la variable saludar().


		Función anónima como argumento de otra función:

		```js

			function ejecutarFuncion(funcion) {
			  funcion();
			}

			ejecutarFuncion(function() {
			  console.log("Esta es una función anónima como argumento.");
			});

			// Salida: "Esta es una función anónima como argumento."

		```

		La función ejecutarFuncion recibe otra función como argumento y la ejecuta. 

		La función anónima se pasa como argumento y luego se invoca dentro de la función ejecutarFuncion.
	


	Funciones IIFEs:  

		Son una técnica que se utiliza para crear funciones y ejecutarlas inmediatamente después de su definición. 

		Esta técnica se basa en la utilización de funciones anónimas y se envuelve la definición de la función entre paréntesis para que el motor de JavaScript la interprete como una expresión.

		La principal ventaja de los IIFE es que permiten crear un ámbito (scope) local para encapsular variables y funciones, evitando así la contaminación del ámbito global. 

		Esto es especialmente útil cuando se trabaja en proyectos grandes y complejos, ya que ayuda a prevenir conflictos entre variables y funciones con el mismo nombre.

		Una ventaja adicional de los IIFE es que permiten pasar argumentos a la función y utilizarlos dentro del ámbito local del IIFE. 

		Esto es útil cuando se necesita proteger datos sensibles o configuraciones dentro del IIFE.

		Son útiles para encapsular código en un ámbito local y proteger variables y funciones del ámbito global. 

		También permiten pasar argumentos y datos confidenciales dentro del IIFE. 

		Sin embargo, con la aparición de bloques de código y módulos en JavaScript, los IIFE no se utilizan tan comúnmente como antes.

		```js

			(function() {
			  // Código del IIFE
			})();

		```

		```js

			(function() {
			  const mensaje = "Hola desde un IIFE";
			  console.log(mensaje);
			})();

		```

		```js

			(function(nombre) {
			  console.log("Hola, " + nombre);
			})("Juan");

		```


	Arguments Objects:

		Es un objeto especial que está disponible dentro de todas las funciones y contiene todos los argumentos que se pasaron al llamar a la función. 

		Este objeto es útil cuando se necesita trabajar con un número variable de argumentos o cuando no se conocen de antemano los argumentos que se pasarán a la función.

		Es similar a un array en términos de acceso a los elementos, pero no es un array real. Tiene propiedades numéricas que corresponden a los índices de los argumentos pasados a la función.

		Se puede utilizar para trabajar con un número variable de argumentos, aunque en funciones modernas es más común usar la sintaxis de parámetros rest (...) para manejar argumentos como un array real.

		```js

			function miFuncion() {
			  console.log(arguments[0]); // Accede al primer argumento
			  console.log(arguments[1]); // Accede al segundo argumento
			  // ...
			}

		```

		La función sumarTodos no tiene parámetros definidos, pero utiliza el objeto "arguments" para sumar todos los argumentos pasados al llamar a la función. 

		La propiedad length del objeto "arguments" indica cuántos argumentos se pasaron.

		Es importante tener en cuenta que el objeto "arguments" es un objeto dinámico y no tiene todas las funcionalidades de un array. 

		Por ejemplo, no tiene métodos como map, filter, forEach, etc. Si se desea utilizar métodos de array en el objeto "arguments", es necesario convertirlo en un array real.

		```js

			function convertirAArray() {
			  const argsArray = Array.from(arguments);
			  console.log(argsArray);
			}

			convertirAArray(1, 2, 3); // Salida: [1, 2, 3]

		```

		En el contexto de funciones modernas de JavaScript, es más común utilizar la sintaxis de parámetros rest (...) para recibir argumentos como un array real en lugar de depender del objeto "arguments".

		```js

			function sumarTodos(...args) {
			  let total = 0;
			  for (let i = 0; i < args.length; i++) {
			    total += args[i];
			  }
			  return total;
			}

			console.log(sumarTodos(1, 2, 3, 4)); // Salida: 10 (1 + 2 + 3 + 4)
			console.log(sumarTodos(10, 20));     // Salida: 30 (10 + 20)

		```


	Scope and function stack:
		
		Scope (ámbito o alcance): 

			Se refiere al alcance o contexto en el que una variable o función es accesible dentro del código. 

			El alcance se define por el lugar donde se declara una variable. 

			Hay dos tipos principales de alcance: alcance global y alcance local (también conocido como alcance de función).

			Global: 

				Una variable declarada fuera de cualquier función (o bloque de código) tiene un alcance global y es accesible desde cualquier parte del código.


			Local (de función): 

				Una variable declarada dentro de una función tiene un alcance local y solo es accesible dentro de esa función.


			```js

				const globalVariable = "Soy global"; // Alcance global

				function miFuncion() {
				  const localVariable = "Soy local"; // Alcance local
				  console.log(globalVariable);       // Acceso a la variable global
				  console.log(localVariable);        // Acceso a la variable local
				}

				miFuncion();
				console.log(globalVariable); // Acceso a la variable global fuera de la función
				// console.log(localVariable);  // Esto resultaría en un error, ya que localVariable es inaccesible aquí

			```


		Function Stack (pila de funciones):

			Se refiere al orden en el que las funciones son llamadas y se añaden a una pila a medida que se ejecutan.

			Cuando se ejecuta un programa de JavaScript, las funciones se agregan a la pila de funciones a medida que se llaman y se retiran de la pila cuando se completan. 

			La función en la parte superior de la pila es la que se está ejecutando actualmente.

			```js

				function funcionUno() {
				  console.log("Función Uno");
				  funcionDos();
				}

				function funcionDos() {
				  console.log("Función Dos");
				}

				funcionUno();

			```

			Al llamar a funcionUno(), se agrega a la pila de funciones y se ejecuta.

			Luego, dentro de funcionUno(), se llama a funcionDos(), que también se agrega a la pila y se ejecuta.

			Después de que funcionDos() se completa, se retira de la pila, y luego funcionUno() también se retira de la pila cuando termina su ejecución.


		Estos conceptos están relacionados y son fundamentales para entender cómo se manejan las variables y las funciones en JavaScript.		

		La combinación de alcance y la pila de funciones es lo que permite que las variables y funciones se gestionen de manera ordenada y que no haya conflictos de nombres entre diferentes partes del código. 

		Cada función tiene su propio alcance local, lo que evita colisiones con variables en otras funciones. 

		La pila de funciones garantiza que las funciones se ejecuten en el orden correcto y que el contexto de ejecución se maneje de manera efectiva.


	Funciones recursivas:

		Se refiere a la técnica donde una función se llama a sí misma para resolver un problema. 

		Las funciones recursivas son útiles cuando un problema se puede dividir en subproblemas más pequeños y similares al problema original.

		```js

			function funcionRecursiva(parametros) {
			  // Caso base: condición para detener la recursión
			  if (condicion) {
			    return valorBase;
			  }

			  // Llamada recursiva
			  return funcionRecursiva(nuevosParametros);
			}

		```

		Para evitar que la recursión sea infinita, es importante definir un "caso base" en el que la función no se llame a sí misma y retorne un valor directamente.

		En cada llamada recursiva, el problema se divide en subproblemas más pequeños y la función se llama a sí misma con estos subproblemas. 

		La recursión continúa hasta que se alcanza el caso base, momento en el que la recursión comienza a "desenrollarse" y los valores se combinan para dar la solución final.

		Puede ser poderosa pero también puede llevar a problemas de rendimiento si no se maneja adecuadamente. 

		En algunos casos, las implementaciones recursivas pueden ser menos eficientes que las soluciones iterativas equivalentes.

		```js

			function factorial(n) {
			  // Caso base: factorial de 0 es 1
			  if (n === 0) {
			    return 1;
			  }

			  // Llamada recursiva para el factorial de n - 1
			  return n * factorial(n - 1);
			}

			console.log(factorial(5)); // Calcula 5! = 5 * 4 * 3 * 2 * 1 = 120

		```

		```js

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

		```


	Lexical Scoping: 

		También conocido como "Static Scoping" o "Closure Scoping", es un concepto importante en la gestión de alcance de variables en JavaScript y en muchos otros lenguajes de programación. 

		Se refiere a cómo se determina el alcance de una variable basándose en el lugar donde se define y no en el lugar desde donde se llama.

		En el contexto de "Lexical Scoping", el alcance de una variable está determinado por la estructura del código fuente (léxico) y cómo se anidan las funciones, en lugar de cómo se ejecuta el programa en tiempo de ejecución.

		```js

			function exterior() {
			  const mensaje = "Hola desde exterior";

			  function interior() {
			    console.log(mensaje);
			  }

			  interior();
			}

			exterior(); // Salida: "Hola desde exterior"

		```

		La función interior() se define dentro de la función exterior(). 

		Debido a "Lexical Scoping", la función interior() puede acceder a la variable mensaje definida en su alcance externo (es decir, dentro de exterior()), incluso cuando se llama desde fuera de su alcance.

		Vemos como la función interior puede acceder a mensaje porque se definió antes y en otro bloque, porque la función exterior se definió allí.

		Además en el cuerpo de la función exterior llama a la interior cuando se ejecuta, se ejecutará la interior. 

		También es esencial para comprender el concepto de cierre (closure). 

		Un cierre es una función que recuerda las variables en el alcance donde se creó, incluso si esa función se ejecuta en un alcance diferente. 

		Esto permite crear funciones que capturan y retienen el contexto en el que se crearon, lo que puede ser útil para implementar patrones como los módulos y para manejar la encapsulación de datos.

		Es fundamental para entender cómo las variables se acceden y se manejan en diferentes contextos y cómo funcionan los cierres (closures) en la creación de funciones con memoria de su contexto de creación.

		```js

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

		```

		La función interna captura la variable count en su alcance externo, lo que permite que la variable persista y sea modificada a medida que llamamos a la función incrementar().


	Funciones Closures: 

		Se refieren a la capacidad de una función de recordar y acceder a las variables de su ámbito externo, incluso después de que esa función haya terminado de ejecutarse. 

		En esencia, un cierre es una función que "encierra" o captura el ámbito en el que se creó.

		Los closures son posibles debido al "Lexical Scoping", que permite que las funciones anidadas accedan a las variables de su ámbito exterior.

		los closures también pueden llevar a problemas de memoria si no se gestionan adecuadamente. 

		Si una función que es un closure se mantiene en memoria (por ejemplo, debido a una referencia que sigue existiendo), todas las variables de su alcance externo también se mantendrán en memoria.

		Son fundamentales para muchas características y patrones avanzados en JavaScript.

		```js

			function exterior() {
			  const mensaje = "Hola desde exterior";

			  function interior() {
			    console.log(mensaje);
			  }

			  return interior;
			}

			const miClosure = exterior();
			miClosure(); // Salida: "Hola desde exterior"

		```

		La función interior se convierte en un cierre al ser devuelta desde la función exterior. 

		Aunque exterior ha terminado de ejecutarse y su alcance podría haber sido eliminado, interior aún puede acceder a la variable mensaje debido al cierre.


		Aplicaciones: 

			1. Encapsulación: 

				Los closures permiten la creación de variables "privadas". 

				Las variables dentro de un cierre no son accesibles desde fuera de él, lo que permite encapsular datos y limitar su acceso.

		    
		    2. Datos persistentes: 

		    	Los closures permiten que las funciones "recuerden" datos a lo largo de múltiples llamadas. 

		    	Esto es útil para mantener el estado en funciones que se utilizan repetidamente.


		    3. Manejo de eventos: 

		    	Los closures son fundamentales en la asignación de controladores de eventos en JavaScript. 

		    	Cada vez que se asocia una función como manejador de un evento, se crea un cierre para que la función tenga acceso a los datos relevantes en el momento del evento.


		    4. Callbacks: 

		    	Los closures son comunes en el uso de callbacks en JavaScript.

		    	Un callback es una función que se pasa como argumento a otra función y se ejecuta en algún momento futuro. 

		    	Los closures permiten que el callback acceda a variables fuera de su alcance.


	Built-In Functions:

		Son funciones que están disponibles automáticamente en el entorno de ejecución del lenguaje. 

		Estas funciones son proporcionadas por el propio lenguaje y se pueden utilizar para realizar tareas comunes sin necesidad de definirlas previamente.

		son parte de la API (Interfaz de Programación de Aplicaciones) estándar de JavaScript y están disponibles en todos los entornos de ejecución compatibles con JavaScript, como los navegadores web y los entornos de servidor.

		1. Function: 

			El constructor de funciones en JavaScript.

			```js

				const myFunction = new Function("a", "b", "return a + b");
				
				console.log(myFunction(2, 3)); // Devuelve 5

			```

		2. setTimeout() y setInterval():

			Funciones para ejecutar una función después de un retraso específico (una vez) o de manera periódica.

			```js

				function saludar() {
				  console.log("Hola, mundo!");
				}

				setTimeout(saludar, 1000); // Ejecuta la función después de 1 segundo
				setInterval(saludar, 2000); // Ejecuta la función cada 2 segundos

			```

		3. clearTimeout() y clearInterval(): 

			Se utilizan para cancelar la ejecución de una función programada con setTimeout() o setInterval().

			```js

				const timeoutId = setTimeout(saludar, 1000);

				clearTimeout(timeoutId); // Cancela la ejecución programada

			```

		4. Function.prototype.call(), Function.prototype.apply(), y Function.prototype.bind(): 

			Métodos que permiten controlar el valor de this y pasar argumentos a una función en el momento de la llamada.

			```js

				function saludar(nombre) {
				  console.log(`Hola, ${nombre}!`);
				}

				saludar.call(null, "Juan"); // Llama a la función con "this" nulo y argumento "Juan"

				saludar.apply(null, ["María"]); // Llama a la función con "this" nulo y argumento "María"

				const saludarJuan = saludar.bind(null, "Juan");
				saludarJuan(); // Llama a la función con "this" nulo y argumento "Juan"

			```

		5. Function.prototype.toString():

			Devuelve una representación en forma de cadena del código fuente de una función.

			```js

				function suma(a, b) {
				  return a + b;
				}

				console.log(suma.toString()); // Muestra el código fuente de la función

			```


	This: 

		Hace referencia al objeto al que pertenece el contexto de ejecución actual. 

		El valor de "this" cambia dependiendo de cómo se invoca una función y en qué contexto se encuentra. 

		Es una característica fundamental en JavaScript y es especialmente relevante cuando se trabaja con objetos y funciones.

		Puede tener diferentes valores en diferentes situaciones:


		1. En el contexto global (fuera de cualquier función o método): 

		   	"this" hace referencia al objeto global. 

		    En un navegador, el objeto global es el objeto "window". En Node.js, es el objeto "global".

		    ```js

		    	console.log(this); // En un navegador, esto mostrará el objeto 'window'

		    ```


		2. Dentro de una función normal: 

		   	"this" hace referencia al objeto que invoca la función. 

		    Sin embargo, esto puede variar dependiendo de cómo se llama la función.

		    ```js

		    	function imprimirThis() {
				  console.log(this);
				}

				imprimirThis(); // En el navegador, mostrará el objeto 'window'

		    ```


		3. Dentro de un método de un objeto:

		    "this" hace referencia al objeto que contiene el método.

		    ```js

		    	const objeto = {
				  nombre: "Juan",
				  saludar: function() {
				    console.log("Hola, mi nombre es " + this.nombre);
				  }
				};

				objeto.saludar(); // Salida: "Hola, mi nombre es Juan"

		    ```


		4. En funciones de flecha ("Arrow Functions"):

		   	"this" hace referencia al valor "this" del contexto en el que se creó la función, lo que puede diferir de cómo se comporta en funciones regulares.

		   	```js

		   		const objetoArrow = {
				  nombre: "Maria",
				  saludar: () => {
				    console.log("Hola, mi nombre es " + this.nombre); // 'this' hace referencia al objeto global 'window' (en un navegador)
				  }
				};

				objetoArrow.saludar(); // Salida: "Hola, mi nombre es undefined"

		   	```



|| FUNCIONES AVANZADO

	Casos de uso para cada tipo de función

	
	Funciones regulares: 

		Tienen un nombre identificador

		1. Legibilidad y claridad del código: 

			Las funciones con nombres descriptivos pueden hacer que el código sea más legible y comprensible, especialmente cuando se utilizan en expresiones complejas. 

			Un nombre adecuado puede proporcionar contexto sobre la intención de la función.

			```js

				// Función convencional con nombre descriptivo

				function calcularPrecioTotal(subtotal, impuestos) {
				  return subtotal + impuestos;
				}

			```

		2. Facilitar el debug: 

			Las funciones con nombres son más fáciles de rastrear en la pila de llamadas y en los mensajes de error, lo que facilita la depuración y el diagnóstico de problemas.

    	
    	3. Reutilización: 

    		Las funciones con nombres pueden ser reutilizadas en múltiples partes del código y en diferentes partes del programa. 

    		Esto puede promover la modularidad y el mantenimiento.

    	
    	4. Recursión: 

    		Si necesitas implementar recursión, las funciones con nombres son más adecuadas, ya que pueden llamarse a sí mismas de manera más clara y legible.

    		```js

    			function factorial(n) {
				  if (n === 0) {
				    return 1;
				  }
				  return n * factorial(n - 1);
				}

    		```

    	5. Mejora de rendimiento: 

    		En algunos escenarios, las funciones con nombre pueden tener un rendimiento ligeramente mejor debido a su definición estática, en comparación con las funciones anónimas que se crean en tiempo de ejecución.

		
		6. Declaración anticipada: 

			Puedes declarar una función con nombre en cualquier parte de su ámbito, incluso antes de su definición, lo que permite una declaración anticipada antes de su uso.


		Las funciones convencionales son preferibles en situaciones donde la claridad, la legibilidad y la reutilización son importantes, así como en casos de recursión y para facilitar la depuración. 

		Las funciones anónimas, por otro lado, son útiles para casos en los que una función se utiliza solo una vez o donde la lógica es simple y no requiere un nombre descriptivo.


	Funciones Arrow: 

		Proporcionan una sintaxis más concisa para definir funciones en JavaScript.


		1. Callbacks: 

			Las funciones flecha son ideales para definir callbacks en situaciones como métodos de arrays (map, filter, forEach) o en métodos como addEventListener.

			```js

				// Callback con función flecha en un método de array

				const numbers = [1, 2, 3, 4, 5];
				const squares = numbers.map(number => number * number);

				// Callback con función flecha en addEventListener

				button.addEventListener("click", () => {
				  console.log("Botón clicado");
				});

			```


		2. Funciones cortas: 

			Cuando la lógica de la función es corta y se puede expresar en una sola línea, las funciones flecha hacen que el código sea más conciso.

			```js

				// Función corta con función flecha

				const sum = (a, b) => a + b;

			```


		3. Evitar problemas de contexto: 

			Las funciones flecha no tienen su propio this. 

			Esto es útil cuando necesitas acceder al this del contexto circundante, como en callbacks o métodos de clase.

			```js

				// Usando this en una función flecha

				function MiClase() {
				  this.propiedad = "Hola";

				  this.metodo = () => {
				    console.log(this.propiedad);
				  };
				}

				const instancia = new MiClase();
				instancia.metodo(); // Salida: "Hola"

			```

		4. Closures: 

			Las funciones flecha pueden ayudar a mantener el contexto adecuado dentro de los cierres, ya que heredan el ámbito del lugar donde se definen.

			```js

				function contador() {
				  let count = 0;
				  return () => {
				    count++;
				    return count;
				  };
				}
				const incrementar = contador();

			```


		5. Retorno implícito: 
			
			Las funciones flecha tienen un retorno implícito si se omite el cuerpo de la función. 

			Esto es útil para funciones simples.

			```js

				const cuadrado = x => x * x; // Retorno implícito
				
				const saludar = nombre => `Hola, ${nombre}!`; // Retorno implícito

			```


		6. Funciones en contexto de objeto: 

			Las funciones flecha pueden ser útiles al definir métodos en objetos, ya que conservan el this del objeto.

			```js

				const persona = {
				  nombre: "Alice",
				  saludar: () => {
				    console.log(`Hola, soy ${this.nombre}`); // this será undefined
				  }
				};

			```

		Son especialmente útiles para escribir código más conciso, evitar problemas de contexto, trabajar con callbacks y mantener cierres con el contexto adecuado. 

		Sin embargo, debes ser consciente de sus limitaciones, como la falta de su propio this y la incapacidad de ser usadas como constructores.


	Funciones anónimas: 

		Son funciones que no tienen un nombre identificador.

		Utiles para usarlas dentro de otra función o dentro de un objeto, al pasarla como parámetro. 


		1. Callbacks: 

			Las funciones anónimas son comunes cuando se utilizan como callbacks, es decir, funciones que se pasan como argumentos a otras funciones para ser ejecutadas en algún momento en el futuro. 

			Por ejemplo, en el manejo de eventos:

			```js

				button.addEventListener("click", function() {
				  console.log("Botón clicado");
				});

			```


		2. Funciones de una sola vez: 

			Si solo necesitas una función para un propósito específico y no planeas reutilizarla, una función anónima puede ser más concisa y clara:

			```js

				setTimeout(function() {
				  console.log("Han pasado 2 segundos");
				}, 2000);

			```


		3. Funciones inmediatas (IIFE): 

			Las funciones anónimas son esenciales en las "Immediately Invoked Function Expressions" (IIFE), que se ejecutan inmediatamente después de ser definidas y son útiles para encapsular variables y evitar contaminar el ámbito global:

			```js

				(function() {
				  const mensaje = "Soy una IIFE";
				  console.log(mensaje);
				})();

			```


		4. Iteraciones: 
			
			Las funciones anónimas son útiles en métodos de arreglos como map, filter y forEach para definir una lógica específica en línea:	

			```js

				const numbers = [1, 2, 3, 4, 5];
				const squares = numbers.map(function(num) {
				  return num * num;
				});

			```


		5. Closures: 

			Las funciones anónimas a menudo se utilizan para crear closures, permitiendo que una función acceda a variables en su alcance externo:

			```js

				function contador() {
				  let count = 0;
				  return function() {
				    count++;
				    return count;
				  };
				}
				const incrementar = contador();

			```


		6. 	Promesas y Async/Await: 

			En el contexto de promesas o async/await, las funciones anónimas son comunes para manejar resoluciones o rechazos:

			```js

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

			```


	Funciones IIFEs: 

		Son funciones que se ejecutan inmediatamente después de ser definidas.

		Son útiles en diversas situaciones para encapsular código y crear un ámbito aislado.

		Situaciones de un solo uso propósito. 


		1. Evitar contaminación del ámbito global: 

			Al envolver el código en una IIFE, puedes evitar que las variables y funciones definidas en la IIFE se filtren en el ámbito global.

			```js

				(function() {
				  var variablePrivada = "Esto no afecta el ámbito global";
				})();

				console.log(variablePrivada); // Error: variablePrivada no está definida

			```

			En el ámbito global no funciona. 


		2. Módulos y encapsulación: 

			Las IIFE son fundamentales en la creación de módulos en JavaScript.

			Puedes usarlas para crear un ámbito aislado y exponer solo las partes necesarias de tu código.

			```js

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

			```


		3. Preservar variables en bucles: 

			Al utilizar una IIFE en un bucle, puedes capturar el valor de las variables en cada iteración, en lugar de que todas las iteraciones compartan la misma referencia.

			```js

				for (var i = 0; i < 5; i++) {
				  (function(index) {
				    setTimeout(function() {
				      console.log(index);
				    }, 1000);
				  })(i);
				}
				// Salida después de 1 segundo: 0, 1, 2, 3, 4

			```


		4. Gestión de ámbito: 

			Las IIFE son útiles para limitar el alcance de variables temporales y evitan la creación innecesaria de variables globales.

			```js

				(function() {
				  var temporal = "Uso temporal";
				  // Resto del código aquí
				})();

				console.log(temporal); // Error: temporal no está definida

			```


		5. Plugins y librerías: 

			Las IIFE son comunes en la creación de plugins y librerías para garantizar que el código interno esté aislado del entorno del usuario.

			```js

				var miLibreria = (function() {
				  // Código de la librería aquí

				  return {
				    metodoPublico: function() {
				      // Lógica pública aquí
				    }
				  };
				})();

			```

			las IIFE son especialmente útiles para evitar contaminar el ámbito global, crear módulos, preservar variables en bucles y encapsular código. 

			Proporcionan un mecanismo para ejecutar código inmediatamente mientras mantienen su alcance aislado.


	Funciones recursivas: 

		Las funciones recursivas son aquellas que se llaman a sí mismas para resolver un problema o realizar un cálculo. 

		Son especialmente útiles en situaciones donde un problema se puede dividir en problemas más pequeños y similares al original.


		1. Cálculos matemáticos: 

			Problemas matemáticos como el cálculo del factorial, la serie de Fibonacci y las combinaciones se pueden resolver de manera elegante con funciones recursivas.

			```js

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

			```


		2. Estructuras de datos: 

			Recorrer estructuras de datos anidadas, como árboles y listas enlazadas, es un caso de uso común para funciones recursivas.

			```js

				function recorrerArbol(nodo) {
				  console.log(nodo.valor);
				  nodo.hijos.forEach(hijo => recorrerArbol(hijo));
				}

			```


		3. Resolución de problemas: 

			Problemas que pueden ser divididos en subproblemas más pequeños a menudo se pueden resolver de manera recursiva. 

			Por ejemplo, recorrer directorios y subdirectorios en un sistema de archivos.

			```js

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

			```


		4. Divide y vencerás: 

			Algoritmos de tipo "divide y vencerás" a menudo se implementan de manera recursiva, dividiendo el problema en subproblemas más pequeños y resolviéndolos por separado.


    	5. Procesamiento de datos: 

    		En análisis de datos o manipulación de estructuras complejas, las funciones recursivas pueden ser útiles para aplicar la misma lógica a diferentes niveles de profundidad.


    	Deben tener una condición base que detenga la recursión para evitar un bucle infinito. 

    	Además, en algunas situaciones, las soluciones iterativas pueden ser más eficientes en términos de rendimiento. 

    	Es importante entender bien el problema y evaluar si una función recursiva es la mejor opción para resolverlo.


	Funciones closures:

		Permiten capturar y mantener el estado de una función incluso después de que la función haya finalizado su ejecución.


		1. Encapsulación de datos: 

			Los closures permiten crear variables privadas que no son accesibles desde fuera de la función, lo que promueve la encapsulación y el ocultamiento de datos.

			```js

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

			```


		2. Funciones de fábrica: 

			Puedes usar closures para crear funciones personalizadas basadas en ciertos parámetros o configuraciones.

			```js

				function crearSaludo(saludo) {
				  return function(nombre) {
				    console.log(`${saludo}, ${nombre}!`);
				  };
				}
				const hola = crearSaludo("Hola");
				const adios = crearSaludo("Adiós");
				hola("Alice"); // "Hola, Alice!"
				adios("Bob"); // "Adiós, Bob!"

			```


		3. Manejo de callbacks: 

			Los closures son comunes al usar callbacks, ya que puedes capturar variables en el ámbito circundante y utilizarlas en el callback.

			```js

				function hacerAlgo(callback) {
				  const datos = obtenerDatos();
				  callback(datos);
				}

			```


		4. Memoización: 

			Los closures pueden usarse para implementar la memoización, una técnica que almacena en caché los resultados de una función costosa para mejorar el rendimiento.

			```js

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

			```


		4. Event Listeners: 

			Los closures son muy utilizados en la programación de eventos, ya que puedes capturar el contexto del evento y utilizarlo en la función del controlador.

			```js

				for (var i = 0; i < 5; i++) {
				  const boton = document.createElement("button");
				  boton.textContent = `Botón ${i + 1}`;
				  boton.addEventListener("click", function() {
				    console.log(`Botón ${i + 1} clicado`);
				  });
				  document.body.appendChild(boton);
				}

			```


		5. Iteradores personalizados: 

			Puedes usar closures para crear iteradores personalizados que mantengan el estado entre llamadas.

			```js

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

			```


	Cuando usar variables locales o globales:

		El uso de variables globales y locales en JavaScript se trata de gestionar el alcance y la accesibilidad de las variables de manera eficiente y segura en tus programas. 


		Variables Globales:

	   		Cuando se necesita acceso en todo el programa: 

	   			Las variables globales son accesibles desde cualquier parte del código, lo que puede ser útil si necesitas que una variable sea accesible en múltiples funciones o módulos.


	    	Configuración Global: 

	    		Pueden usarse para almacenar configuraciones globales, como valores constantes que afectan a todo el programa.


	    	Evitar Repetición: 

	    		Si tienes datos que se utilizan en varios lugares y no quieres pasarlos como argumentos de función, podrías considerar una variable global.


	    	Event Handlers: 

	    		A menudo se utilizan variables globales para compartir información entre diferentes manejadores de eventos.


		Variables Locales:

	    	Evitar Colisiones de Nombres: 

	    		Las variables locales están limitadas al ámbito de una función o bloque, lo que evita colisiones de nombres con otras partes del programa.


	    	Encapsulación: 

	    		Las variables locales ayudan a mantener la encapsulación y el aislamiento de diferentes partes de tu código.


	    	Evitar Efectos Secundarios: 

	    		El uso de variables locales puede ayudar a evitar efectos secundarios no deseados en otras partes del programa.


	    	Modularidad: 

	    		Las variables locales son esenciales en la programación modular, ya que cada módulo puede tener sus propias variables sin afectar otros módulos.


	    	Mejora de Rendimiento: 

	    		El acceso a variables locales suele ser más rápido que el acceso a variables globales debido a la forma en que se almacenan en memoria.


			En general, se recomienda minimizar el uso de variables globales, ya que pueden hacer que tu código sea menos mantenible y propenso a errores. 

			En su lugar, se recomienda utilizar variables locales siempre que sea posible, ya que promueven la encapsulación, el aislamiento y una mejor estructura de código.

	
		En resumen, el enfoque principal debe ser limitar el alcance de tus variables a donde realmente son necesarias para mantener la coherencia y la seguridad de tu código.


	Inmutabilidad de los tipos de datos primitivos: 

		Se refiere al hecho de que una vez que se crea una variable con un valor primitivo (como un número, una cadena, un booleano, etc.), ese valor no puede modificarse directamente. 

		Cualquier operación que parezca modificar el valor de una variable en realidad crea una nueva instancia (nuevo objeto) del valor con el cambio aplicado, en lugar de modificar directamente el valor original.

		Los tipos de datos primitivos en JavaScript son inmutables. 

		Esto significa que cuando realizas operaciones como cambiar el valor de una variable, estás creando una nueva variable con un nuevo valor en lugar de modificar el valor original. 

		Esto puede ser un concepto confuso para algunas personas, ya que en otros lenguajes de programación, es común modificar el valor de una variable directamente.

		```js

			let a = 5;
			let b = a;
			b = 10;
			console.log(a); // 5
			console.log(b); // 10

		```

		Cuando asignamos b = a, se crea una copia independiente del valor 5 en b. 

		Luego, cuando asignamos b = 10, estamos creando una nueva variable b con el valor 10, pero esto no afecta al valor original de a.

		Puede ser beneficiosa porque ayuda a prevenir efectos secundarios no deseados y simplifica el rastreo de cambios en el código. 

		Sin embargo, también significa que para realizar cambios en los valores, necesitas asignar el nuevo valor a una nueva variable en lugar de modificar directamente la variable original.




|| Expresiones regulares
	
	Conocidas como regex o regexp, son patrones que se utilizan para buscar y manipular cadenas de texto. 

	Son una herramienta poderosa en programación para realizar operaciones como búsqueda, coincidencia, reemplazo y extracción de datos específicos en cadenas de texto.

	En JavaScript, puedes crear expresiones regulares utilizando el objeto RegExp o mediante la notación literal utilizando barras diagonales (/). 

	```js

		// Con el constructor RegExp
		let regex = new RegExp("patrón");

		// Notación literal
		let regexLiteral = /patrón/;

	```

	Caracteres Literales:

		Los caracteres en una expresión regular coinciden con sí mismos. 

		Por ejemplo, /abc/ buscará la cadena "abc" en el texto.

	
	Metacaracteres:

		Los metacaracteres tienen un significado especial en las expresiones regulares y permiten crear patrones más complejos.

		Algunos metacaracteres comunes incluyen . (cualquier carácter), \d (dígito), \w (carácter de palabra), \s (espacio en blanco), etc.

	Cuantificadores:

		Los cuantificadores especifican la cantidad de ocurrencias de un elemento en un patrón. 

		Algunos ejemplos son * (cero o más), + (uno o más), ? (cero o uno), {n} (exactamente n), {n, m} (entre n y m).


	Grupos y Capturas:

		Los paréntesis () se utilizan para agrupar elementos en la expresión. Esto es útil para aplicar cuantificadores o realizar capturas. 

		Por ejemplo, /(abc)+/ coincidirá con "abc", "abcabc", etc.


	Caracteres de Escape:

		Algunos caracteres como [, ], (, ), {, }, ^, $, etc., tienen significados especiales en expresiones regulares. 

		Si deseas buscar uno de estos caracteres literalmente, debes escaparlos con \.


	Modificadores:

		Los modificadores se agregan al final de una expresión regular para realizar coincidencias que no sean sensibles a mayúsculas y minúsculas (i), buscar en varias líneas (m), etc.


	Métodos de Cadena:

		JavaScript proporciona métodos de cadena como match(), test(), replace(), search(), que te permiten trabajar con expresiones regulares.


	Ejemplo:	

		```js

			const text = "Hola, mi número es 123-456-7890.";
			const pattern = /\d{3}-\d{3}-\d{4}/;
			const result = text.match(pattern); // Coincidencia: ["123-456-7890"]

		```


	Casos de uso: 

		Se utilizan en una variedad de situaciones para buscar, validar y manipular cadenas de texto. 


	    Búsqueda y Extracción:

	    	Las expresiones regulares se utilizan para buscar y extraer patrones específicos en una cadena de texto. 

	    	Por ejemplo, encontrar direcciones de correo electrónico, números de teléfono, fechas o cualquier otro patrón específico.


	    Validación de Entrada de Usuario:
	    	
	    	Puedes usar expresiones regulares para validar que una entrada de usuario cumple con un formato específico. 

	    	Por ejemplo, asegurarse de que un número de teléfono esté en el formato correcto o que una dirección de correo electrónico sea válida.


	    Reemplazo y Formateo:
	    	
	    	Las expresiones regulares son útiles para reemplazar o formatear texto en una cadena. 

	    	Por ejemplo, puedes reemplazar todas las instancias de una palabra en un texto o formatear fechas y números de cierta manera.


	    Análisis de Datos:

	    	Cuando se trabaja con datos estructurados en texto, como archivos CSV o logs, las expresiones regulares pueden ayudar a extraer información relevante y transformarla.


	    Búsqueda y Resaltado en Editores de Texto:
	    	
	    	Los editores de texto y las IDEs a menudo usan expresiones regulares para buscar y resaltar patrones en archivos grandes. 

	    	Esto es especialmente útil para realizar cambios masivos en código.


	    Análisis de Lenguaje Natural:

	    	En el procesamiento de lenguaje natural, las expresiones regulares pueden utilizarse para analizar y manipular texto, como identificar palabras clave o patrones de frase.


	    Validación de Formularios Web:

	    	En aplicaciones web, las expresiones regulares son útiles para validar los datos ingresados por los usuarios en formularios antes de enviarlos al servidor.


	    Manejo de URL:

	    	Pueden usarse para analizar y manipular URL, como extraer parámetros de consulta o analizar rutas en una aplicación web.


	    Filtrado de Datos:

	   		En procesos de procesamiento de datos, las expresiones regulares pueden utilizarse para filtrar y seleccionar datos específicos de una fuente más grande.


	    Transformación de Datos:
	    		
	    	Las expresiones regulares se pueden utilizar para transformar datos de un formato a otro, como convertir un formato de fecha a otro o reformatear una cadena de texto.


		En resumen, las expresiones regulares son una herramienta poderosa y versátil en programación y análisis de texto. 

		Pueden ahorrar tiempo y esfuerzo al buscar y manipular patrones específicos en cadenas de texto, lo que las hace esenciales en una variedad de contextos de desarrollo y procesamiento de datos.




|| Manipular DOM

	Se refiere al DOM (Document Object Model) en JavaScript que ofrece funcionalidades para crear, modificar y eliminar elementos, atributos y contenido en una página web.


    querySelector: 

    	Selecciona un elemento del DOM según un selector CSS.


    querySelectorAll: 

    	Selecciona todos los elementos del DOM que coinciden con un selector CSS.


    getElementById: 

    	Obtiene un elemento por su ID.


    getElementsByClassName: 

    	Obtiene elementos por su clase.


    getElementsByTagName: 

    	Obtiene elementos por su nombre de etiqueta.


    createElement: 

    	Crea un nuevo elemento HTML.


    appendChild: 

    	Agrega un elemento hijo a otro elemento.
    

    removeChild: 

    	Elimina un elemento hijo de otro elemento.
    

    replaceChild:

    	Reemplaza un elemento hijo con otro.


    innerHTML: 

    	Establece o obtiene el contenido HTML interno de un elemento.


    textContent: 

    	Establece o obtiene el contenido de texto de un elemento.


    setAttribute: 

    	Establece un atributo en un elemento.


    removeAttribute: 

    	Elimina un atributo de un elemento.


    classList.add: 

    	Agrega una clase a un elemento.


    classList.remove: 

    	Elimina una clase de un elemento.


    classList.toggle: 

    	Alterna una clase en un elemento.


    classList.contains: 

    	Verifica si un elemento tiene una clase específica.


    style: 

    	Permite manipular las propiedades de estilo de un elemento.


    addEventListener: 

    	Agrega un manejador de eventos a un elemento.


    removeEventListener: 

    	Elimina un manejador de eventos de un elemento.


    preventDefault: 

    	Evita que un evento siga su comportamiento predeterminado.


    stopPropagation: 

    	Detiene la propagación del evento a través del DOM.


    querySelector: 

    	Busca un elemento que coincida con un selector.


    querySelectorAll: 

    	Busca todos los elementos que coincidan con un selector.


    getAttribute: 

    	Obtiene el valor de un atributo de un elemento.


    ```js

    	// Obtener una referencia al párrafo y al botón
		const myParagraph = document.getElementById('myParagraph');
		const myButton = document.getElementById('myButton');

		// Cambiar el contenido del párrafo cuando se hace clic en el botón
		myButton.addEventListener('click', () => {
		  myParagraph.textContent = 'El contenido de este párrafo ha cambiado.';
		  myParagraph.style.color = 'blue';
		  myParagraph.style.fontSize = '18px';
		});

    ```



|| Strict Mode 

	"Strict Mode" o "Modo Estricto" en JavaScript es una característica introducida en ECMAScript 5 (ES5) que permite a los desarrolladores escribir un código más seguro, libre de ciertas prácticas propensas a errores y malas prácticas. 

	Habilitar el modo estricto implica una serie de restricciones y reglas adicionales que el intérprete de JavaScript aplicará al analizar y ejecutar el código. Esto ayuda a prevenir errores comunes y a mejorar la calidad del código para que sea más seguro y predecible.

	El modo estricto en tu archivo JavaScript, no solo afecta el alcance local de las funciones, sino que también afecta el alcance global, es decir, el ámbito fuera de todas las funciones.

	Para habilitar el modo estricto, simplemente coloca 'use strict'; al comienzo de un archivo JavaScript o al comienzo de una función. Por ejemplo:

	```js

		'use strict';

		function miFuncion() {
		  // Código en modo estricto
		}

	```

	El "Strict Mode" es una excelente práctica para escribir un código más seguro y de alta calidad. Sin embargo, ten en cuenta que una vez habilitado, no se pueden revertir sus restricciones en ese ámbito particular. 

	Por lo tanto, es importante asegurarse de que tu código esté preparado para el modo estricto antes de habilitarlo en un proyecto existente.	


	Algunas de las características y restricciones que se aplican cuando se utiliza el "Strict Mode" son las siguientes:


	1. Evita el uso de variables globales implícitas: 

		En el modo estricto, no se permiten variables globales no declaradas. Esto evita posibles conflictos y hace que sea más fácil rastrear y controlar las variables.

		```js
			//Declarar una variable
			let x; 

			//Asignar valor a una variable
			x = 1;

			//Declara y asignar valor
			let x = 1 

		```

		Si intentas acceder a una variable sin haberla declarado previamente, JavaScript tratará esa variable como una "variable global no declarada". 

		Ejemplo: 

		```js
			//Variable sin declarar (ausencia palabra reservada 'var, let, const')
			x = 10; 	

		```

		Esto significa que el intérprete de JavaScript buscará la variable en el ámbito global (en el caso de un navegador, esto sería el objeto window) y si no la encuentra, creará automáticamente una variable global con ese nombre. 

		Esto puede ser problemático, ya que puede llevar a errores difíciles de rastrear y a comportamientos inesperados en tu código.

		Variable global no declarada en función: 

		```js

			function miFuncion() {
			  x = 10; // x se convierte en una variable global no declarada
			}

			miFuncion();
			console.log(x); // 10

		```

		En el ejemplo, la variable x se utiliza dentro de la función miFuncion sin haber sido declarada previamente con var, let o const. 

		Esto resultará en que x se convierta en una variable global no declarada. 

		Si bien el código puede funcionar en este caso, puede ser problemático en situaciones más complejas, ya que la variable x no está limitada al alcance de miFuncion.



    2. Errores en asignaciones no permitidas: 

    	En modo estricto, se generará un error si intentas asignar un valor a una variable no declarada.


    3. No se permite eliminar variables y funciones: 

    	En el modo estricto, el uso de delete en variables y funciones generará un error.

    
    4. Evita asignaciones a palabras clave reservadas: 

    	En el modo estricto, no puedes asignar valores a palabras clave reservadas, como undefined, NaN, Infinity, etc.

    	undefined:

    		Es una constante predefinida en JavaScript que se utiliza para representar un valor no asignado o no definido a una variable.

    	NaN:

    		Es un valor especial en JavaScript que se produce cuando se realizan operaciones matemáticas que no tienen sentido, como dividir cero por cero o sumar una cadena y un número. 

    		NaN se utiliza para representar resultados no numéricos.


    	Infinity: 

    		Es una constante que representa el valor infinito positivo en JavaScript. 

    		No es una variable que pueda ser reasignada, ya que es un valor constante.

    	```js

    		undefined = 5; // Generará un error: Cannot assign to undefined

    		NaN = 10; // Generará un error: Cannot assign to NaN

    		Infinity = 100; // Generará un error: Cannot assign to Infinity

    	```


    5. Funciones deben tener parámetros únicos:

    	En modo estricto, las funciones no pueden tener parámetros con nombres duplicados.

    	```js

    		"use strict";

			// Esto lanzará un error en modo estricto
			function suma(a, a, b) {
			  return a + a + b;
			}

    	```


    6. Evita el uso de octales en literales: 

    	Los literales octales (por ejemplo, 0123) no son permitidos en modo estricto.

    	los literales numéricos pueden representar valores en diferentes bases numéricas, como decimal, octal y hexadecimal. 

    	Los literales octales son aquellos que comienzan con el prefijo "0" seguido por uno o más dígitos en el rango de 0 a 7. 

    	Por ejemplo, el número octal 0123 representa el valor decimal 83 porque 1 * 8^2 + 2 * 8^1 + 3 * 8^0 = 83.

		En el "modo estricto", el uso de literales octales está desaconsejado y puede generar errores. 

		Si intentas usar literales octales en modo estricto, se lanzará un error en tiempo de ejecución.

		```js

			"use strict";

			const numeroOctal = 0123; // Esto lanzará un error en modo estricto

			console.log(numeroOctal);

		```

		En este ejemplo, al intentar declarar y asignar un número octal utilizando el prefijo "0" en modo estricto, se generará un error.


    7. Evita el uso de this global: 

    	En modo estricto, this dentro de una función no referenciará al objeto global (window en navegadores). 

    	En su lugar, será undefined si la función no está siendo llamada como un método.

    	En el caso de que la función sí esté siendo llamada como método de un objeto (es decir, es un método de un objeto), this se referirá al objeto que contiene la función.

    	```js

    		"use strict";

			function mostrarThis() {
			  console.log(this);
			}

			mostrarThis(); // Salida: undefined

			const objeto = {
			  metodo: mostrarThis
			};

			objeto.metodo(); // Salida: { metodo: [Function: mostrarThis] }

    	```

    	En modo estricto, cuando se llama mostrarThis() fuera de cualquier contexto de objeto, el valor de this será undefined. 

    	Sin embargo, cuando la función se llama como un método de objeto, el valor de this se refiere al objeto objeto.



    8. Errores en asignaciones no extensibles: 

    	En modo estricto, no puedes agregar propiedades a objetos que son "no extensibles".

    	Un objeto en JavaScript puede ser "extensible" o "no extensible". 

    	Un objeto extensible es aquel al que puedes agregar nuevas propiedades en cualquier momento, incluso después de haber sido creado. 

    	Por otro lado, un objeto no extensible es aquel en el que no puedes agregar nuevas propiedades una vez que ha sido creado.

    	En el modo estricto, si intentas agregar una propiedad a un objeto que es "no extensible", se lanzará un error en tiempo de ejecución. 

    	```js

    		"use strict";

			const persona = {
			  nombre: "Juan"
			};

			// Hacemos que el objeto sea no extensible
			Object.preventExtensions(persona);

			// Esto lanzará un error en modo estricto
			persona.edad = 30;

    	```

    	Después de hacer que el objeto persona sea no extensible utilizando Object.preventExtensions, intentamos agregar la propiedad edad al objeto. 

    	En modo estricto, esto lanzará un error y evitará que se agregue la propiedad edad.


    9. Modo estricto para eval y funciones en el ámbito global: 

    	En modo estricto, el código dentro de una función eval y en el ámbito global se ejecuta en modo estricto.

    	Una función 'eval' toma una cadena de texto como argumento y la evalúa como código JavaScript en el contexto actual. 

    	Básicamente, permite ejecutar código JavaScript dinámicamente en tiempo de ejecución.

    	Sintaxis 'eval':

    	```js

    		eval(codigo);

    	```

    	Ejemplo 'eval': 

    	```js

    		const num1 = 5;
			const num2 = 10;
			const operacion = "num1 + num2";

			const resultado = eval(operacion); // Aquí se evalúa la cadena "num1 + num2"
			console.log(resultado); // Salida: 15

    	```

    	Si el código pasado a eval proviene de fuentes no confiables, podría ejecutar código malicioso en tu aplicación. Además, el uso excesivo de eval puede dificultar la depuración y el mantenimiento del código, ya que el código dinámico puede ser difícil de rastrear y entender.


    	Ejemplo 'eval' y 'strict mode':

    	Significa que las restricciones y reglas del modo estricto se aplicarán al código evaluado dentro de la función eval.

    	```js

    		"use strict";

			function funcionEjemplo() {
			  eval("console.log('Código en eval en modo estricto')");
			}

			funcionEjemplo(); // Salida: Código en eval en modo estricto

			console.log('Código global en modo estricto');

    	```

    	Hemos activado el modo estricto con "use strict". Dentro de la función funcionEjemplo, usamos eval para ejecutar una cadena de código. 

    	Debido a que estamos en modo estricto, el código dentro de eval también se ejecutará en modo estricto. 

    	Luego, fuera de la función, la declaración console.log en el ámbito global también se ejecutará en modo estricto.



|| This 

	Hace referencia al objeto al que pertenece el contexto de ejecución actual. 

	El valor de "this" cambia dependiendo de cómo se invoca una función y en qué contexto se encuentra. 

	Es una característica fundamental en JavaScript y es especialmente relevante cuando se trabaja con objetos y funciones.

	Puede tener diferentes valores en diferentes situaciones:


	1. En el contexto global (fuera de cualquier función o método): 

	   	"this" hace referencia al objeto global. 

	    En un navegador, el objeto global es el objeto "window". En Node.js, es el objeto "global".

	    ```js

	    	console.log(this); // En un navegador, esto mostrará el objeto 'window'

	    ```


	2. Dentro de una función normal: 

	   	"this" hace referencia al objeto que invoca la función. 

	    Sin embargo, esto puede variar dependiendo de cómo se llama la función.

	    ```js

	    	function imprimirThis() {
			  console.log(this);
			}

			imprimirThis(); // En el navegador, mostrará el objeto 'window'

	    ```


	3. Dentro de un método de un objeto:

	    "this" hace referencia al objeto que contiene el método.

	    Permite acceder y manipular las propiedades y métodos del objeto desde dentro del propio método.

	    El valor de this en un método está ligado al objeto que contiene el método y cambia según el contexto de la llamada, como se ve en el segundo ejemplo.


	    ```js

	    	const persona = {
			  nombre: "Juan",
			  edad: 30,
			  saludar: function() {
			    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
			  }
			};

			persona.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.

	    ```

	    this se refiere al objeto persona, lo que permite acceder a sus propiedades (nombre y edad) y mostrar la información correcta.

	    Es importante destacar que el valor de this en un método depende de cómo se llama el método.

	    Si se llama directamente a través del objeto, como en el ejemplo anterior, this se refiere a ese objeto. 

	    Sin embargo, si extraes el método y lo llamas de manera independiente, el valor de this podría cambiar.

	    ```js

	    	const saludar = persona.saludar;
			
			saludar(); // Salida: Hola, mi nombre es undefined y tengo undefined años.

	    ```


	4. En funciones de flecha ("Arrow Functions"):

	   	"this" hace referencia al valor "this" del contexto en el que se creó la función, lo que puede diferir de cómo se comporta en funciones regulares.

	   	```js

	   		const objetoArrow = {
			  nombre: "Maria",
			  saludar: () => {
			    console.log("Hola, mi nombre es " + this.nombre); // 'this' hace referencia al objeto global 'window' (en un navegador)
			  }
			};

			objetoArrow.saludar(); // Salida: "Hola, mi nombre es undefined"

	   	```


	5. Event handlers (manejadores de eventos): 

		'this' se refiere al elemento DOM que disparó el evento. 

		Cuando un evento ocurre en un elemento HTML, como un clic de ratón o un cambio en un campo de entrada, se puede asociar una función JavaScript para manejar ese evento.

		```js

			const boton = document.querySelector('#miBoton');

			boton.addEventListener('click', function() {
			  console.log(this); // Se refiere al elemento 'boton' que disparó el evento
			});

		```

		this se refiere al botón que disparó el evento, es decir, al elemento DOM con el ID miBoton.


	6. Callback: 

		Es un función que se pasa como argumento de otra. 

		En este caso, el valor de this puede variar según cómo se invoca la función que contiene el callback.


		```js

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

		```


	Function Borrowing (Préstamo de función): 

		Es un concepto en JavaScript que implica tomar una función de un objeto y usarla en otro objeto sin copiar ni modificar la función en sí. 

		Esto es posible debido a cómo funciona el valor de this en JavaScript y cómo se puede modificar temporalmente para que apunte a un objeto diferente.

		Se utiliza cuando tienes dos objetos con métodos similares pero no idénticos, y quieres reutilizar uno de los métodos en lugar de duplicar el código.

		```js

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

		```

		Tenemos dos objetos: persona1 y persona2. Ambos tienen una propiedad nombre, pero solo persona1 tiene un método saludar.

		Mediante el uso del método call (o apply), podemos "tomar prestado" el método saludar de persona1 y usarlo en el contexto de persona2. 

		Esto permite que el método saludar de persona1 se ejecute en el contexto de persona2, haciendo que el valor de this apunte a persona2 en lugar de persona1

		Es una técnica útil para reutilizar funcionalidad y evitar la duplicación de código en situaciones donde tienes objetos relacionados pero no idénticos.

		Sin embargo, es importante comprender cómo funciona el valor de this y cómo se puede manipular en JavaScript para usar esta técnica de manera efectiva.


	Explicit Binding (Vinculación explícita):  

		Es un concepto en JavaScript que se refiere a la forma en que puedes controlar explícitamente el valor de this en una función utilizando métodos como call, apply o bind.

		Estos métodos permiten establecer el valor de this para una función en un objeto específico, independientemente del contexto en el que se llame la función.

		La vinculación explícita es especialmente útil cuando tienes una función que normalmente se ejecuta en un contexto, pero deseas ejecutarla en el contexto de otro objeto temporalmente.


		Call: 

			Se utiliza para invocar una función con un valor de this y argumentos específicos. 

			Los argumentos se pasan como argumentos separados por coma después del primer argumento que establece el valor de this.

			```js

				function saludar() {
				  console.log(`Hola, mi nombre es ${this.nombre}.`);
				}

				const persona = {
				  nombre: "Juan"
				};

				saludar.call(persona); // Salida: Hola, mi nombre es Juan

			```


		Apply: 

			El método apply es similar a call, pero los argumentos se pasan como un arreglo.

			```js

				function saludar(mensaje) {
				  console.log(`${mensaje}, mi nombre es ${this.nombre}.`);
				}

				const persona = {
				  nombre: "María"
				};

				saludar.apply(persona, ["Hola"]); // Salida: Hola, mi nombre es María

			```


		Bind: 

			El método bind devuelve una nueva función con un valor de this preestablecido y, opcionalmente, argumentos preestablecidos.

			```js

				function saludar() {
				  console.log(`Hola, mi nombre es ${this.nombre}.`);
				}

				const persona = {
				  nombre: "Luis"
				};

				const funcionSaludar = saludar.bind(persona);
				
				funcionSaludar(); // Salida: Hola, mi nombre es Luis

			```


	Contextos en JS y valor this: 

		Se refieren al entorno en el cual se ejecuta un fragmento de código y cómo las variables y funciones están disponibles en ese entorno.


		Contexto Global:

        	this: 

        		En el contexto global, this se refiere al objeto global, que es window en un navegador o el objeto global en Node.js.
 	
        	Variables y funciones: 

        		Las variables y funciones declaradas en el contexto global son accesibles desde cualquier parte del código.


		Contexto de Función:

		    this: 

		    	En el contexto de una función regular, this puede variar dependiendo de cómo se llama la función.

		    Variables y funciones: 

		    	Las variables y funciones declaradas en la función solo son accesibles dentro de esa función, a menos que sean declaradas con var (lo que las hace variables globales en ese contexto).


		Contexto de Objeto:

		    this:

		    	En el contexto de un objeto, this se refiere al objeto que contiene la función en la que se encuentra. 

		    	Este contexto es crucial para las funciones que son métodos de objetos.
		   
		    Variables y funciones: 

		    	Las variables y funciones declaradas en el objeto son accesibles desde todas las funciones dentro del objeto.


		Contexto de Evento:

		    this: 

		    	En el contexto de un manejador de eventos, this se refiere al elemento DOM que disparó el evento.

		    Variables y funciones: 

		    	Las variables y funciones declaradas fuera del manejador de eventos pueden no ser accesibles dentro de él debido a la naturaleza de los closures.


		Contexto de Arrow Function:

		    this: 

		    	En una función flecha (=>), this se mantiene en el contexto donde se definió la función, no es afectado por cómo se llama.

		    Variables y funciones: 

		    	Las variables y funciones que están en el mismo contexto donde se definió la función flecha son accesibles en ella.


		Contexto de Bloque (ES6+):

		    En las versiones más recientes de JavaScript (ES6+), los bloques ({}) crean su propio ámbito de variables, aunque el objeto this aún puede cambiar dependiendo de cómo se ejecute el código.


		Los métodos call, apply y bind permiten cambiar explícitamente el valor de this en una función. 

		La función bind crea una nueva función con un this enlazado, mientras que call y apply permiten llamar a una función con un valor de this y argumentos específicos.


	Objeto window: 

		Es un objeto global en el entorno de navegadores web. Representa la ventana o pestaña del navegador en la que se está ejecutando el código JavaScript. 

		El objeto window proporciona una interfaz para interactuar con la ventana del navegador y controlar aspectos relacionados con la ventana, como la ubicación, el historial, los temporizadores y más.

		El objeto window es implícito en el entorno del navegador, lo que significa que no es necesario escribir window. antes de acceder a sus propiedades y métodos. 

		Por ejemplo, setTimeout es equivalente a window.setTimeout.

		Ten en cuenta que mientras window es específico del entorno del navegador, en otros entornos como Node.js, no existe el objeto window, ya que no hay una ventana del navegador. 

		En su lugar, Node.js proporciona otros objetos globales y funcionalidades.


		Hay algunas de las propiedades y métodos más comunes disponibles en el objeto window:


			1. Document Object Model (DOM):
		    	
		    	El objeto window contiene el árbol DOM de la página web actual. 

		    	Puedes acceder y manipular los elementos HTML y sus propiedades utilizando métodos como document.getElementById, document.querySelector, etc.


		    2. Timers:
		   		
		   		window permite usar los métodos setTimeout y setInterval para ejecutar funciones después de un retraso o repetidamente a intervalos regulares.


		    3. Ventana del Navegador:

		    	window proporciona métodos para controlar la ventana del navegador, como window.open para abrir nuevas ventanas o pestañas, y window.close para cerrar la ventana actual.


		    4. Ubicación:

		    	Puedes acceder y manipular la URL actual de la página utilizando la propiedad window.location.


		    5. Historial del Navegador:

		    	window.history permite acceder y manipular el historial de navegación del usuario, como navegar hacia atrás o hacia adelante en la sesión de navegación.


		    6. Almacenamiento Web:

		    	window.localStorage y window.sessionStorage permiten almacenar datos en el navegador para su uso posterior.


		    7. Alertas, Confirmaciones y Prompts:
		    	
		    	window proporciona métodos como window.alert, window.confirm y window.prompt para interactuar con el usuario mostrando mensajes, solicitudes de confirmación y solicitudes de entrada.


		   	8. Manejo de Errores:

		    	window.onerror permite capturar y manejar errores no controlados en la página.


		    9. Eventos Globales:

		    	Puedes adjuntar manejadores de eventos globales utilizando window.addEventListener.





|| Asincrónismo

	Es la capacidad del lenguaje de programación JavaScript para ejecutar tareas de manera no bloqueante, lo que permite que el código continúe ejecutándose mientras se realizan operaciones que pueden llevar tiempo, como solicitudes a servidores, lectura y escritura de archivos, o interacciones con bases de datos.

	En un entorno síncrono, las tareas se ejecutan una tras otra, lo que significa que el programa espera a que una tarea se complete antes de pasar a la siguiente. 

	Esto puede ser problemático en aplicaciones web y otros contextos en los que se deben realizar operaciones que pueden llevar tiempo, ya que el bloqueo del hilo de ejecución principal puede hacer que la interfaz de usuario no responda y parezca congelada.

	Aquí es donde entra en juego la programación asíncrona en JavaScript. 

	Permite que las tareas se ejecuten en segundo plano mientras el código principal sigue avanzando. Esto se logra utilizando conceptos como callbacks, promesas, async/await y eventos.

	Ejemplos de uso de asincronía en JavaScript incluyen:


	    1. Solicitudes a Servidores:
	    	
	    	Cuando realizas una solicitud HTTP a un servidor para obtener datos (por ejemplo, mediante AJAX), no quieres que tu programa se bloquee mientras espera la respuesta. 

	    	En su lugar, puedes utilizar callbacks o promesas para manejar la respuesta cuando llegue.


	    2. Temporizadores:
	    	
	    	La función setTimeout permite ejecutar una función después de un cierto período de tiempo sin bloquear la ejecución del resto del código.

	    
	    3. Manejo de Archivos:

	    	Si estás leyendo o escribiendo archivos en una aplicación, no quieres que la ejecución se bloquee mientras se realizan estas operaciones de entrada/salida.

	    	Node.js, por ejemplo, permite realizar operaciones de archivos de manera asíncrona.


	    4. Interacciones de Usuario:

	    	Las interacciones del usuario, como hacer clic en un botón, suelen desencadenar eventos asincrónicos.

	    	Por ejemplo, el evento click no bloquea la ejecución del código mientras espera a que el usuario haga clic.


	Funciones asincronícas: 

		setTimeout: 

			Se utiliza para programar la ejecución de una función después de un cierto período de tiempo. 

			Es una forma de crear tareas asincrónicas en JavaScript y es comúnmente utilizado para implementar retrasos en la ejecución de código.

			```js

				setTimeout(funcion, tiempoEnMilisegundos);

			```

			funcion: es la función que deseas ejecutar después de que haya transcurrido el tiempo especificado.

    		tiempoEnMilisegundos: es la cantidad de tiempo en milisegundos que debe pasar antes de que se ejecute la función.

    		```js

    			console.log("Inicio");

				setTimeout(function() {
				  console.log("Este mensaje aparecerá después de 2 segundos");
				}, 2000); // 2000 milisegundos = 2 segundos

				console.log("Fin");

    		```	

    		El código imprime "Inicio", luego configura un temporizador para que la función anónima se ejecute después de 2 segundos, y finalmente imprime "Fin". 

    		Esto muestra cómo JavaScript permite que otras tareas se ejecuten mientras se espera la ejecución de la función programada.

    		También puedes usar setTimeout para ejecutar una función con argumentos después de un retraso:

    		```js

    			function saludar(nombre) {
				  console.log(`Hola, ${nombre}`);
				}

				setTimeout(saludar, 1000, "Juan"); // Salida después de 1 segundo: Hola, Juan


    		```

    		Es importante tener en cuenta que aunque setTimeout permite crear tareas asincrónicas, el tiempo especificado no garantiza que la función se ejecute exactamente después de ese tiempo. 

    		Puede haber un pequeño desfase debido a la programación del sistema y la carga del procesador.


		setInterval: 

			Se utiliza para ejecutar repetidamente una función a intervalos regulares. 

			Es útil cuando necesitas realizar una tarea de manera repetitiva, como actualizar la hora en un reloj en tiempo real, realizar verificaciones periódicas de datos o ejecutar animaciones.

			setInterval ejecutará la función indefinidamente hasta que se detenga manualmente con clearInterval, por lo que debes tener cuidado de no crear intervalos que puedan sobrecargar la ejecución.


			```js

				setInterval(funcion, tiempoEnMilisegundos);

			```

			Ejemplo: 

			```js

				let contador = 0;

				const intervalId = setInterval(function() {
				  contador++;
				  console.log(`Contador: ${contador}`);
				  
				  if (contador >= 5) {
				    clearInterval(intervalId); // Detiene el intervalo después de 5 ejecuciones
				  }
				}, 1000); // Ejecuta cada 1000 milisegundos (1 segundo)

			```

			La función se ejecutará cada 1 segundo (1000 milisegundos) y aumentará el valor del contador en cada ejecución. 

			El intervalo se detiene después de 5 ejecuciones utilizando clearInterval.



	Callbacks: 

		Son funciones que se pasan como argumentos a otras funciones. 

		Estas funciones callback se ejecutan después de que se complete una tarea asincrónica o cuando se cumple una condición específica. 

		Los callbacks son fundamentales en la programación asincrónica y se utilizan ampliamente para manejar eventos, realizar solicitudes HTTP, manejar temporizadores y más.

		Un uso común de los callbacks es con setTimeout y setInterval, donde una función se ejecuta después de un retraso o repetidamente a intervalos regulares.

		los callbacks pueden llevar a un patrón de código conocido como "Callback Hell" (infierno de callbacks) cuando se anidan múltiples callbacks dentro de otros. 

		Para mitigar este problema, se han desarrollado técnicas como las promesas y las funciones async/await para manejar de manera más efectiva la programación asincrónica.

		Sintaxis de un callback: 

		```js

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

		```

		La función operacionAsincronica toma dos argumentos: un parámetro y una función callback.

    	Dentro de operacionAsincronica, se realiza una tarea asincrónica (por ejemplo, una solicitud AJAX) y luego se llama al callback con el resultado.

   		Se define la función miCallback, que recibe el resultado de la tarea y realiza alguna acción con él (en este caso, imprimir en la consola).

    	Finalmente, se llama a operacionAsincronica pasando el parámetro y el callback como argumentos.

		
		Esta estructura permite que el código se ejecute de manera asincrónica, donde la función operacionAsincronica se encarga de manejar la tarea y luego llama al callback cuando está listo para proporcionar el resultado. 

		Esto es especialmente útil cuando se trata con operaciones que pueden llevar tiempo, como solicitudes de red, lecturas de archivos, etc.


		Ejemplo usando un callback: 

		```js

			function realizarOperacion(a, b, callback) {
			  const resultado = a + b;
			  callback(resultado);
			}

			function mostrarResultado(resultado) {
			  console.log(`El resultado es: ${resultado}`);
			}

			realizarOperacion(5, 3, mostrarResultado); // Llamada con un callback

		```

		La función realizarOperacion toma dos números y un callback como argumentos.

		Después de realizar la operación (suma en este caso), llama al callback y pasa el resultado a la función mostrarResultado, que imprime el resultado en la consola.

	
	Callback hell: 

		Se refiere a una situación en la que los callbacks anidados en el código crean una estructura de código confusa y difícil de mantener. 

		Esto ocurre cuando se tienen múltiples operaciones asincrónicas o llamadas de retorno en secuencia, y los callbacks se anidan unos dentro de otros. 

		Como resultado, el código se vuelve difícil de leer, comprender y depurar.

		Sintaxis de un callback hell:

		```js

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

		```

		Se pueden ver múltiples niveles de anidación de callbacks, lo que hace que el código sea difícil de seguir y comprender. 

		Cada nivel de anidación introduce un nuevo nivel de complejidad y puede ser propenso a errores. 

		Además, es difícil mantener una estructura organizada y legible en este estilo de programación.


		Ejemplo de un callback hell: 

		```js

			realizarAccion1(function(resultado1) {
			  realizarAccion2(resultado1, function(resultado2) {
			    realizarAccion3(resultado2, function(resultado3) {
			      // Y así sucesivamente...
			    });
			  });
			});

		```

		Las funciones realizarAccion1, realizarAccion2 y realizarAccion3 son funciones asincrónicas que requieren callbacks para manejar los resultados. 

		A medida que más operaciones se anidan, el código se vuelve más difícil de seguir y mantener. Además, los errores pueden ser difíciles de detectar y corregir.

		Para evitar el "Callback Hell", se han desarrollado técnicas más avanzadas de manejo de asincronía, como las promesas y las funciones async/await. 

		Estas técnicas permiten escribir un código más limpio y legible al manejar operaciones asincrónicas sin anidar excesivamente los callbacks. 

		Aquí hay un ejemplo de cómo se vería el mismo código utilizando promesas:

		Ejemplo de Promises: 

		```js

			realizarAccion1()
			  .then(resultado1 => realizarAccion2(resultado1))
			  .then(resultado2 => realizarAccion3(resultado2))
			  .then(resultado3 => {
			    // Realizar más acciones si es necesario
			  })
			  .catch(error => {
			    // Manejar errores
			  });

		```

		Las promesas permiten encadenar las operaciones asincrónicas de manera más legible y manejable. 

		Las funciones async/await llevan este enfoque un paso más allá, proporcionando una sintaxis aún más cercana a la programación síncrona.


	Promises:

		Son un patrón de manejo de asincronía que facilita la gestión de operaciones asíncronas y la evita la caída en el "Callback Hell". 

		Una promesa es un objeto que representa la finalización o el fracaso de una operación asincrónica y permite encadenar acciones adicionales después de que se complete.

		Permiten encadenar acciones en una secuencia lógica, lo que hace que el código asincrónico sea más legible y mantenible. 

		Además, son la base de otras características asincrónicas como las funciones async/await.


		Las promesas tienen tres estados posibles:

    		1. Pending (Pendiente): 

    			La promesa está en espera de que se cumpla o se rechace.

    		2. Fulfilled (Cumplida): 

    			La operación asincrónica se completó con éxito y se resolvió la promesa.

    		3. Rejected (Rechazada): 

    			La operación asincrónica falló y la promesa se rechazó.

		
    	Sintaxis: 
    		
    	```js

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

    	```

    	Un ejemplo más detallado que muestra cómo se pueden usar las promesas para manejar una operación asincrónica, como una solicitud HTTP:

    	```js

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

    	```

    	La función hacerPeticion devuelve una promesa que resuelve o rechaza dependiendo del resultado de la solicitud HTTP. Luego, se utilizan los métodos .then() y .catch() para manejar el resultado o el error de la promesa.


	async/await: 

		async/await es una forma moderna y más legible de manejar operaciones asincrónicas en JavaScript. 

		Está construida sobre el concepto de promesas y proporciona una sintaxis más similar a la programación síncrona, lo que facilita la comprensión y el mantenimiento del código asincrónico.

		Simplifica la estructura de código, haciendo que las operaciones asincrónicas sean más fáciles de entender y seguir.

		Además, puedes usar estructuras de control como try/catch para manejar errores de manera más natural.

		Es importante recordar que una función marcada con async siempre devuelve una promesa, incluso si no se usa explícitamente return.

		async:

			Se coloca antes de una función para indicar que dicha función retornará una promesa y que puede contener operaciones asincrónicas. 
		
		await: 

			Se utiliza dentro de una función async para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.


		Sintaxis de async/await: 

		```js

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

		```

		Declaramos una función llamada miFuncionAsincronica con la palabra clave async.
    		
    	Usamos la palabra clave await para esperar a que las promesas (promesa1 y promesa2) se resuelvan antes de continuar con la ejecución.
    		
    	Dentro del bloque try, realizamos más operaciones síncronas si es necesario.
    	
    	Si ocurre un error en cualquier parte del proceso, se captura en el bloque catch y se maneja adecuadamente.



		Ejemplo de async/await: 

		```js

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

		```

    	La función obtenerDatos es declarada con la palabra clave async, lo que indica que contiene operaciones asincrónicas.

    	Dentro de la función, usamos await para esperar la respuesta de la solicitud fetch y luego esperamos a que se convierta a JSON.

    	Si hay algún error durante el proceso, el bloque catch maneja el error.


    Event Loop: 

    	El bucle de eventos es uno de los conceptos clave para entender cómo funciona la asincronía en JavaScript. 

    	Es el mecanismo que permite que el código JavaScript se ejecute de manera asíncrona y responda a eventos y tareas no bloqueantes.

		JavaScript es un lenguaje de programación de un solo subproceso, lo que significa que solo puede ejecutar una tarea a la vez en un solo hilo. 

		Sin embargo, muchas operaciones en JavaScript, como solicitudes de red, operaciones de E/S (entrada/salida) y temporizadores, son asincrónicas y podrían bloquear la ejecución del hilo si se manejaran de manera síncrona.

		Aquí es donde entra en juego el "Event Loop". El bucle de eventos es una estructura que se encarga de  gestionar las tareas asíncronas y los eventos en el entorno de ejecución de JavaScript, ya sea en un navegador o en un entorno de servidor como Node.js. 

		
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


		Sintaxis: 

		```js

			console.log("Inicio");

			setTimeout(function() {
			  console.log("Tarea asíncrona completada");
			}, 2000);

			console.log("Fin");

			// Salida:
			// Inicio
			// Fin
			// Tarea asíncrona completada (después de 2 segundos)

		```

		la tarea setTimeout se coloca en una API web y se ejecuta después de un retraso de 2 segundos.

		Mientras tanto, las funciones en la pila de llamadas (console.log("Inicio") y console.log("Fin")) se ejecutan de manera síncrona. 

		Una vez que se completa la tarea asíncrona, se coloca en la cola de retorno de llamada y luego se ejecuta cuando el "Event Loop" la retoma de la cola.

	
	Cuándo usar asincronía:

	    Operaciones de red: 

	    	Las solicitudes HTTP, las llamadas a API y otras operaciones de red pueden bloquear la ejecución del código si se manejan de manera síncrona. 

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


	Cuándo no usar asincronía:

	    Operaciones síncronas simples: 

	    	Si una operación es rápida y no bloquea la ejecución, no es necesario convertirla en una operación asíncrona.


	    Código simple y de un solo hilo: 

	    	Si tu aplicación es pequeña y no realiza muchas operaciones asíncronas, es posible que no necesites usar la asincronía de manera extensiva.


	    Mantenimiento y comprensión: 

	    	Demasiada asincronía puede dificultar la comprensión y el mantenimiento del código. 

	    	En algunos casos, un enfoque síncrono puede ser más simple y claro.



|| API
	
	Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que permiten que distintas aplicaciones o sistemas se comuniquen entre sí. 

	En esencia, una API define cómo los diferentes componentes de software deben interactuar y cómo deben intercambiar datos y funcionalidades.

	Imagina que estás en un restaurante y el camarero toma tu pedido y lo comunica a la cocina. 

	La cocina prepara la comida según tus especificaciones y luego el camarero te trae la comida. 

	Aquí, el camarero actúa como una interfaz entre tú y la cocina. 

	Tú no necesitas conocer todos los detalles sobre cómo se cocina la comida; solo necesitas interactuar con el camarero según el protocolo establecido.

	En el mundo de la programación y la informática, una API funciona de manera similar. 

	Proporciona un conjunto de métodos, funciones y reglas que permiten que una aplicación solicite y utilice servicios o datos de otra aplicación, servicio o sistema sin necesidad de conocer los detalles internos de cómo funcionan internamente.

	Las APIs son esenciales para la construcción de aplicaciones modernas, ya que permiten la reutilización de funcionalidades existentes, la integración de sistemas de terceros y la creación de aplicaciones más eficientes y escalables.

	Por ejemplo, una API de servicios de mapas podría permitir que una aplicación de navegación solicite rutas y direcciones. 

	Una API de redes sociales podría permitir que una aplicación comparta contenido en plataformas como Twitter o Facebook. En resumen, las APIs son como puentes que permiten que diferentes aplicaciones se comuniquen y colaboren de manera efectiva.


	Composición de una API: 

		Una API (Interfaz de Programación de Aplicaciones) se compone de un conjunto de endpoints y métodos que permiten a los desarrolladores interactuar con una aplicación o servicio a través de solicitudes HTTP. 

		Cada endpoint representa una acción o funcionalidad específica que la API proporciona. Aquí está cómo se compone una API básica:


	    Endpoints:

	    	Un endpoint es una URL específica que representa una acción o recurso en la API. 

	    	Por ejemplo:
	        /users: para obtener una lista de usuarios.
	        /products/123: para obtener detalles sobre un producto con el ID 123.


	    Métodos HTTP:

	    	Cada endpoint se asocia con un método HTTP que indica qué tipo de acción se está realizando. 

	    	Los métodos más comunes son:

	        	GET: para obtener datos.

	        	POST: para crear nuevos datos.

	        	PUT: para actualizar datos existentes.

	        	DELETE: para eliminar datos.


	    Parámetros:

	   		Los endpoints pueden aceptar parámetros en la URL o en el cuerpo de la solicitud. 

	   		Los parámetros pueden ser necesarios para filtrar datos, especificar opciones o enviar información adicional.


	    Cuerpo de la Solicitud:

	    	Algunos métodos, como POST y PUT, pueden enviar datos en el cuerpo de la solicitud. 

	    	Estos datos generalmente están en formato JSON o XML y contienen la información necesaria para la acción solicitada.


	    Códigos de Estado HTTP:

	    	Después de enviar una solicitud a la API, el servidor responde con un código de estado HTTP que indica si la solicitud fue exitosa o si ocurrió algún error. 

	    	Algunos códigos comunes son 200 OK (éxito), 404 Not Found (recurso no encontrado) y 500 Internal Server Error (error del servidor).


	    Respuestas:

	    	Junto con el código de estado, la API generalmente devuelve datos en el cuerpo de la respuesta. 

	    	Estos datos pueden estar en formato JSON o XML y contienen la información solicitada.


	    Versionado:

	    	A medida que la API evoluciona, es común versionarla para mantener la compatibilidad con versiones anteriores. 

	    	Esto implica incluir un número de versión en la URL de la API, como /v1/users.


	    Autenticación y Autorización:

	    	Muchas APIs requieren autenticación para acceder a ciertas funciones o recursos. 

	    	Esto implica enviar un token de acceso o clave API junto con la solicitud para verificar la identidad del usuario. 

	    	La autorización controla qué usuarios tienen permiso para realizar ciertas acciones.


	    Documentación:

	    	Una API debe estar documentada de manera clara y concisa para que los desarrolladores sepan cómo usarla. 

	    	La documentación incluye descripciones de los endpoints, ejemplos de solicitud y respuesta, y detalles sobre autenticación y parámetros.


	Implicaciones y responsabilidades en una API: 

		Implica una serie de consideraciones y responsabilidades adicionales además de simplemente crearla. 

		Aquí hay algunos aspectos importantes a tener en cuenta cuando se tiene una API propia:


		Diseño y documentación:

	   		Diseño de la API: 

	    		Antes de comenzar a crear la API, es fundamental definir cómo será su estructura, qué endpoints tendrá y qué tipos de datos aceptará y devolverá.

	    	Documentación: 

	    		Debes proporcionar una documentación clara y completa que explique cómo usar la API, qué endpoints están disponibles, cómo autenticarse (si es necesario) y cómo interpretar las respuestas. 

	    		Una buena documentación facilita que otros desarrolladores puedan integrar tu API de manera exitosa.


	    Seguridad:

	        Autenticación y Autorización: 

	        	Si tu API maneja datos confidenciales o realiza operaciones críticas, es importante implementar métodos de autenticación y autorización sólidos para asegurarte de que solo usuarios autorizados puedan acceder y manipular los datos.


	    Gestión de Versiones:

	        Cambios en la API: 

	        	A medida que evoluciona tu aplicación, es posible que necesites realizar cambios en la API, como agregar nuevos endpoints o modificar los existentes. 

	        	Es importante gestionar estos cambios de manera controlada y mantener la retrocompatibilidad con versiones anteriores para no afectar a los usuarios existentes.


	    Rendimiento y Escalabilidad:

	        Rendimiento: 

	        	Debes optimizar la API para que responda de manera eficiente y rápida, minimizando los tiempos de respuesta y la latencia.

	        Escalabilidad: 

	        	A medida que más usuarios comienzan a utilizar tu API, debes asegurarte de que pueda manejar la carga creciente de solicitudes. Esto podría implicar el uso de sistemas de caché, equilibrio de carga y otras técnicas de escalabilidad.


	    Monitoreo y Análisis:

	        Monitoreo en Tiempo Real: 

	        	Debes implementar sistemas de monitoreo en tiempo real para detectar problemas y anomalías en la API, lo que te permitirá solucionarlos rápidamente.

	        Análisis de Uso: 

	        	Es importante obtener información sobre cómo los usuarios están utilizando tu API. 

	        	Esto puede ayudarte a comprender las necesidades de los usuarios y a tomar decisiones informadas sobre futuras mejoras y cambios.


	    Mantenimiento:
	        
	        Parches y Actualizaciones: 

	        	Deberás estar preparado para solucionar problemas y aplicar parches en caso de que se descubran vulnerabilidades o errores en tu API. 

	        	Además, a medida que la tecnología evoluciona, es posible que necesites actualizar tu API para aprovechar nuevas características y mejoras.


	    Soporte Técnico:

	        Atención al Cliente: 

	        	Si otros desarrolladores utilizan tu API, es posible que necesites proporcionar soporte técnico para ayudarlos con problemas o preguntas que puedan surgir.


		Implica una serie de responsabilidades relacionadas con el diseño, la seguridad, el rendimiento, la escalabilidad, el monitoreo y el mantenimiento continuo.

		Sin embargo, una API bien diseñada y mantenida puede proporcionar un valor significativo al permitir que otros desarrolladores utilicen y se integren con tus servicios de manera eficiente



	Creación de una API: 

		Implica diseñar y desarrollar endpoints que expongan funcionalidades y datos a otros sistemas o aplicaciones. Aquí hay una guía básica sobre cómo crear una API:


	    Definir los Requisitos:

	        Determine qué funcionalidades o datos desea exponer a través de la API.
	        Determine qué métodos HTTP (GET, POST, PUT, DELETE, etc.) serán utilizados para interactuar con la API.


	    Diseñar la Estructura:

	        Decida la estructura de los endpoints y las rutas de la API.

	        Defina el formato de los datos de solicitud y respuesta (generalmente JSON o XML).


	    Seleccionar un Lenguaje de Programación:

	        Elija un lenguaje de programación para implementar la lógica de la API. 

	        Algunos lenguajes populares incluyen JavaScript (Node.js), Python, Ruby, Java, PHP, etc.


	    Elegir un Framework:

	        Utilice un framework que simplifique la creación de API, como Express.js para Node.js, Django o Flask para Python, Ruby on Rails para Ruby, etc.


	    Implementar los Endpoints:

	        Escriba las funciones y rutas que manejen las solicitudes a cada endpoint.

	        Convierta los datos en formato JSON o XML para las respuestas.


	    Implementar Funcionalidades:

	        Agregue la lógica de negocio y la funcionalidad a cada endpoint.

	        Conecte con bases de datos u otras fuentes de datos si es necesario.


	    Agregar Autenticación y Seguridad:

	        Implemente métodos de autenticación, como tokens de acceso o claves API, para proteger la API de accesos no autorizados.


	    Documentar la API:

	        Proporcione una documentación clara y completa que explique cómo utilizar cada endpoint, qué parámetros acepta y qué devuelve.

	        Use herramientas como Swagger o Postman para crear documentación interactiva.


	    Probar la API:

	        Pruebe cada endpoint y funcionalidad para asegurarse de que funcionan según lo previsto.

	        Realice pruebas de integración y pruebas de rendimiento para garantizar que la API pueda manejar la carga.


	    Implementar en un Servidor:

	        Despliegue la API en un servidor web o en la nube para que esté disponible en línea.

	        Asegúrese de que el servidor sea escalable y pueda manejar el tráfico esperado.


	    Monitorear y Mantener:

	        Configure sistemas de monitoreo para rastrear el rendimiento y los posibles problemas de la API.

	        Realice actualizaciones y parches según sea necesario.


	    Versionar la API:

	        Si es probable que realice cambios en la API en el futuro, considere la posibilidad de versionarla para mantener la retrocompatibilidad.


	    Proporcionar Soporte:

	        Si otros desarrolladores utilizan su API, proporcione soporte técnico para ayudarlos con problemas y preguntas.


		Crear una API puede ser un proceso complejo y requiere un buen entendimiento de la arquitectura de APIs, protocolos de red y lenguajes de programación. 

		Sin embargo, con planificación y atención a los detalles, puedes crear una API robusta y útil que permita la interacción con tus servicios desde otras aplicaciones



|| APIs en JS 

	APIs (Application Programming Interfaces) en JavaScript implica la interacción y obtención de datos de servicios externos a través de solicitudes HTTP. 

	Las APIs son utilizadas para acceder a recursos y funcionalidades proporcionados por otros servicios, como redes sociales, servicios de geolocalización, bases de datos y más. 

	En JavaScript, puedes utilizar APIs para obtener datos en tiempo real y actualizar tu aplicación web sin necesidad de recargar la página.


	Trabajar con APIs en JavaScript:

		1. Hacer una solicitud GET a una API:

			Para hacer una solicitud GET a una API, puedes usar la función fetch en JavaScript. 

			Esta función devuelve una promesa que se resuelve con la respuesta de la API.

			```js

				fetch("https://api.example.com/data")
				  .then(response => response.json())
				  .then(data => {
				    console.log(data); // Datos obtenidos de la API
				  })
				  .catch(error => {
				    console.error("Error al obtener los datos:", error);
				  });

			```


		2. Enviar datos a una API:

			Para enviar datos a una API, generalmente se utiliza el método POST. 

			Puedes incluir datos en el cuerpo de la solicitud utilizando fetch.

			```js

				const dataToSend = {
				  username: "usuario",
				  password: "contraseña"
				};

				fetch("https://api.example.com/login", {
				  method: "POST",
				  headers: {
				    "Content-Type": "application/json"
				  },
				  body: JSON.stringify(dataToSend)
				})
				  .then(response => response.json())
				  .then(data => {
				    console.log(data); // Respuesta de la API después de enviar datos
				  })
				  .catch(error => {
				    console.error("Error al enviar datos:", error);
				  });

			```


		3. Trabajar con Promises y async/await:

			Puedes utilizar Promises para manejar las respuestas de las solicitudes a APIs y realizar acciones una vez que se resuelva la promesa. 

			Además, con async/await, puedes escribir código más limpio y fácil de entender.

			```js

				async function fetchData() {
				  try {
				    const response = await fetch("https://api.example.com/data");
				    const data = await response.json();
				    console.log(data);
				  } catch (error) {
				    console.error("Error al obtener los datos:", error);
				  }
				}

				fetchData();

			```


		4. Uso de APIs con autenticación:

			Algunas APIs requieren autenticación para acceder a los datos. 

			Puede haber diferentes métodos de autenticación, como tokens, claves API, etc. 

			Debes seguir las instrucciones proporcionadas por la API para incluir la autenticación adecuada en tus solicitudes.


		5. Trabajar con datos recibidos:

			Una vez que hayas obtenido los datos de la API, puedes manipularlos y mostrarlos en tu aplicación web. 

			Esto podría incluir mostrar datos en tablas, listas, gráficos, etc.

			Recuerda que las APIs pueden tener diferentes puntos finales, estructuras de datos y métodos de autenticación, por lo que es importante consultar la documentación proporcionada por el proveedor de la API que deseas utilizar.


	XMLHttpRequest: 	

		Es un objeto en JavaScript que se utiliza para realizar solicitudes HTTP asíncronas hacia servidores web y recibir respuestas. 

		Aunque su nombre contiene "XML", no se limita a trabajar solo con XML; también puede manejar otros tipos de datos, como JSON y texto plano. 

		Sin embargo, a lo largo del tiempo, fetch se ha convertido en un enfoque más moderno y versátil para realizar solicitudes HTTP asíncronas en lugar de XMLHttpRequest.


		Sintaxis basica: 

		```js

			// Crear un objeto XMLHttpRequest
			var xhr = new XMLHttpRequest();

			// Configurar la solicitud (GET, URL)
			xhr.open('GET', 'https://api.example.com/data', true);

			// Configurar el manejo de la respuesta
			xhr.onload = function() {
			  if (xhr.status === 200) {
			    // La solicitud se completó exitosamente
			    console.log(xhr.responseText);
			  } else {
			    // Ocurrió un error en la solicitud
			    console.error('Error en la solicitud. Código: ' + xhr.status);
			  }
			};

			// Enviar la solicitud
			xhr.send();

		```

		Creamos un objeto XMLHttpRequest usando la variable xhr.

	    Usamos el método open() para configurar la solicitud. 

	    El primer parámetro es el método HTTP (en este caso, 'GET'), el segundo es la URL del recurso y el tercero es un booleano que indica si la solicitud debe ser asíncrona (true).

	    Configuramos el evento onload para manejar la respuesta cuando se complete la solicitud. 

	    Si el estado de la respuesta es 200 (éxito), mostramos el contenido de la respuesta con xhr.responseText. 

	    Si el estado no es 200, mostramos un mensaje de error.

	    Finalmente, usamos el método send() para enviar la solicitud al servidor.


		Ejemplo basico de XMLHttpRequest con una solicitud GET: 

		```js

			// Crear un objeto XMLHttpRequest
			var xhr = new XMLHttpRequest();

			// Configurar la solicitud (GET, URL)
			xhr.open('GET', 'https://api.example.com/data', true);

			// Configurar el manejo de la respuesta
			xhr.onload = function() {
			  if (xhr.status === 200) {
			    // La solicitud se completó exitosamente
			    console.log(xhr.responseText);
			  } else {
			    // Ocurrió un error en la solicitud
			    console.error('Error en la solicitud. Código: ' + xhr.status);
			  }
			};

			// Enviar la solicitud
			xhr.send();

		```

		Creamos un objeto XMLHttpRequest, configuramos la solicitud GET especificando la URL del recurso que queremos obtener y habilitamos el modo asíncrono con true. 

		Luego, definimos una función onload que se ejecutará cuando se complete la solicitud. 

		En esta función, verificamos el estado de la respuesta (status) para manejar el éxito o el error de la solicitud.

		Aunque XMLHttpRequest todavía se usa en algunas aplicaciones, especialmente en las más antiguas, muchos desarrolladores prefieren utilizar fetch debido a su sintaxis más simple y su mayor flexibilidad en el manejo de solicitudes y respuestas.


	Fetch: 

		Es una función incorporada en JavaScript que permite realizar solicitudes HTTP asíncronas hacia servidores web y obtener respuestas en formato JSON, texto, HTML u otros formatos. 

		fetch es más moderno y más versátil que XMLHttpRequest, y se ha convertido en una forma común de realizar solicitudes en las aplicaciones web.

		fetch también admite la configuración de opciones, como el método HTTP, los encabezados y los datos del cuerpo en las solicitudes POST.


		Sintaxis de fetch:

		```js

			// Realizar una solicitud GET
			fetch('https://api.example.com/data')
			  .then(response => {
			    if (!response.ok) {
			      throw new Error('Error en la solicitud. Código: ' + response.status);
			    }
			    return response.json();
			  })
			  .then(data => {
			    console.log(data);
			  })
			  .catch(error => {
			    console.error(error);
			  });

		```

		Utilizamos la función fetch para realizar una solicitud GET a la URL especificada ('https://api.example.com/data').

   		Usamos el primer then para manejar la respuesta de la solicitud. Verificamos si la respuesta es exitosa (código de estado 200) y luego llamamos al método .json() en la respuesta para convertir los datos a formato JSON.

    	En el segundo then, trabajamos con los datos convertidos.

    	En este ejemplo, simplemente los mostramos en la consola, pero aquí es donde puedes realizar las operaciones que necesites con los datos.

    	El bloque catch captura y maneja cualquier error que ocurra durante la solicitud.

		Esta sintaxis aprovecha las promesas en JavaScript para manejar las solicitudes asíncronas de manera más legible y estructurada.


		Ejemplo básico de fech con una solicitud GET: 

			```js

				// Realizar una solicitud GET
				fetch('https://api.example.com/data')
				  .then(response => {
				    if (!response.ok) {
				      throw new Error('Error en la solicitud. Código: ' + response.status);
				    }
				    return response.json(); // Convierte la respuesta a formato JSON
				  })
				  .then(data => {
				    console.log(data); // Muestra los datos en la consola
				  })
				  .catch(error => {
				    console.error(error);
				  });

			```

			fetch devuelve una promesa que se resuelve con la respuesta de la solicitud. 

			Utilizamos el método then para manejar la respuesta. 

			Dentro del primer then, verificamos si la respuesta fue exitosa (código de estado 200) y luego convertimos la respuesta a formato JSON con el método .json().

			Luego, en el segundo then, podemos trabajar con los datos convertidos y realizar las operaciones necesarias. Si ocurre algún error en la solicitud, lo capturamos y manejamos en la parte catch.



|| Classes

	Son una característica introducida en ECMAScript 2015 (también conocido como ES6) que permiten definir objetos y su comportamiento de manera similar a la programación orientada a objetos (POO) en otros lenguajes. 

	Las clases proporcionan una sintaxis más clara y organizada para crear y trabajar con objetos y sus propiedades y métodos asociados.


	Sintaxis de Class: 

	```js

		// Declaración de una clase
		class Animal {
		  // Constructor de la clase
		  constructor(nombre, tipo) {
		    this.nombre = nombre;
		    this.tipo = tipo;
		  }

		  // Método de la clase
		  saludar() {
		    console.log(`Hola, soy un ${this.tipo} llamado ${this.nombre}.`);
		  }
		}

		// Creación de una instancia de la clase
		const perro = new Animal('Max', 'perro');
		perro.saludar();  // Salida: "Hola, soy un perro llamado Max."

		// Herencia de clases
		class Gato extends Animal {
		  constructor(nombre) {
		    super(nombre, 'gato');
		  }

		  maullar() {
		    console.log(`${this.nombre} está maullando.`);
		  }
		}

		const gato = new Gato('Mittens');
		gato.saludar();   // Salida: "Hola, soy un gato llamado Mittens."
		gato.maullar();   // Salida: "Mittens está maullando."

	```

	Usamos la palabra clave class para declarar una clase llamada Animal.

    Dentro de la clase, definimos un constructor utilizando el método especial constructor().

    El constructor se llama cuando se crea una nueva instancia de la clase y se utiliza para inicializar las propiedades del objeto.

    Definimos un método llamado saludar() que puede ser llamado en instancias de la clase.

    Creamos una instancia de la clase Animal llamada perro, proporcionando los valores necesarios para el constructor.

    Luego, declaramos una clase Gato que hereda de la clase Animal utilizando la palabra clave extends. 

    Usamos super() en el constructor de Gato para llamar al constructor de la clase base y pasar los parámetros necesarios.

    Creamos una instancia de la clase Gato llamada gato y llamamos a los métodos de ambas clases.


	Ejemplo de Class: 

	```js

		class Persona {
		  constructor(nombre, edad) {
		    this.nombre = nombre;
		    this.edad = edad;
		  }

		  saludar() {
		    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
		  }
		}

	```

	Hemos definido una clase llamada Persona. 

	El constructor se llama automáticamente cuando se crea una nueva instancia de la clase y se utiliza para inicializar las propiedades del objeto. 

	Luego, hemos definido un método llamado saludar() que puede ser llamado en instancias de la clase para imprimir un saludo personalizado.


	Para crear una instancia de la clase y acceder a sus propiedades y métodos:

	```js

		const persona1 = new Persona('Alice', 30);
		const persona2 = new Persona('Bob', 25);

		persona1.saludar();  // Salida: "Hola, mi nombre es Alice y tengo 30 años."
		persona2.saludar();  // Salida: "Hola, mi nombre es Bob y tengo 25 años."

	```

	Las clases en JavaScript también pueden heredar propiedades y métodos de otras clases mediante la palabra clave extends. 

	Esto permite crear jerarquías de clases y compartir funcionalidad común.

	```js

		class Estudiante extends Persona {
		  constructor(nombre, edad, grado) {
		    super(nombre, edad);
		    this.grado = grado;
		  }

		  estudiar() {
		    console.log(`${this.nombre} está estudiando en el ${this.grado} grado.`);
		  }
		}

		const estudiante1 = new Estudiante('Eva', 18, '12vo');
		estudiante1.saludar();  // Salida: "Hola, mi nombre es Eva y tengo 18 años."
		estudiante1.estudiar(); // Salida: "Eva está estudiando en el 12vo grado."

	```


	Constructor super(): 

		Se utiliza en una clase extendida para llamar al constructor de la clase padre (superclase) y acceder a sus propiedades y métodos. 

		Esto es especialmente útil cuando estás definiendo una subclase que hereda de una clase base y deseas reutilizar la funcionalidad existente de la clase base.

		```js

			class ClasePadre {
			  constructor(propiedad) {
			    this.propiedad = propiedad;
			  }

			  metodo() {
			    console.log('Método de la clase padre');
			  }
			}

			class ClaseHija extends ClasePadre {
			  constructor(propiedad, otraPropiedad) {
			    super(propiedad); // Llama al constructor de la clase padre
			    this.otraPropiedad = otraPropiedad;
			  }

			  metodoHijo() {
			    super.metodo(); // Llama al método de la clase padre
			    console.log('Método de la clase hija');
			  }
			}

			const instanciaHija = new ClaseHija('valor1', 'valor2');
			instanciaHija.metodoHijo();

		```

		Tenemos una clase base llamada ClasePadre con un constructor y un método.

	    Luego, tenemos una clase hija llamada ClaseHija que extiende de ClasePadre. 

	    En el constructor de la clase hija, usamos super(propiedad) para llamar al constructor de la clase padre y heredar la propiedad propiedad.

	    Dentro del método metodoHijo() de la clase hija, utilizamos super.metodo() para llamar al método de la clase padre y ejecutar su funcionalidad. 

	    Luego, agregamos más funcionalidad específica de la clase hija.

	    Creamos una instancia de la clase hija y llamamos al método metodoHijo(). Esto resulta en la ejecución del método de la clase padre y luego del método de la clase hija.		



|| Iteradores y Generadores

	Permiten trabajar con secuencias de valores de manera más eficiente y controlada. 
	

	Iteradores:

		Un iterador es un objeto que proporciona una forma de acceder a los elementos de una colección uno por uno sin la necesidad de exponer la estructura interna de la colección. 

		Para crear un iterador personalizado, necesitas definir una función next() que retorne un objeto con propiedades value y done.

		```js

			const iterable = {
			  items: [1, 2, 3],
			  index: 0,
			  next() {
			    if (this.index < this.items.length) {
			      return { value: this.items[this.index++], done: false };
			    } else {
			      return { done: true };
			    }
			  }
			};

			const iterator = iterable.next();
			console.log(iterator.value); // 1
			console.log(iterator.value); // 2
			console.log(iterator.value); // 3
			console.log(iterator.done);  // true

		```

		Creamos un objeto iterable que tiene una propiedad items que contiene una matriz de elementos y un método next() que implementa la lógica del iterador.


	Generadores:

		Un generador es una función especial que puede pausar y reanudar su ejecución. 

		Se define usando la palabra clave function*, y se utilizan yield para pausar la ejecución y retornar un valor.

		Puedes iterar sobre los valores generados utilizando un iterador.

		Son útiles para trabajar con flujos de datos asincrónicos y tareas que se pueden pausar y reanudar, como la iteración sobre grandes conjuntos de datos o la gestión de solicitudes de red.


		```js

			function* numerosPares() {
			  let num = 2;
			  while (true) {
			    yield num;
			    num += 2;
			  }
			}

			const generador = numerosPares();
			console.log(generador.next().value); // 2
			console.log(generador.next().value); // 4
			console.log(generador.next().value); // 6
			// ...

			// También puedes utilizar un bucle for...of para iterar
			for (const numero of generador) {
			  if (numero > 10) {
			    break;
			  }
			  console.log(numero);
			}

		```

		Tenemos la función generadora llamada generadorNumeros. 

		Dentro de esta función, utilizamos la palabra clave yield para pausar la ejecución y producir un valor. 

		Cuando llamamos al método next() en el generador, la ejecución se reanuda desde donde se detuvo y se devuelve el valor producido por yield.

		En cada llamada a next(), el generador produce un valor y se detiene hasta la siguiente llamada. 

		Una vez que no hay más declaraciones yield, las llamadas adicionales a next() producirán un objeto con una propiedad value establecida en undefined.



|| Modulos en JS 
	
	Son una forma de organizar y reutilizar el código dividiéndolo en piezas más pequeñas y autónomas. 

	Antes de que los módulos fueran parte de JavaScript, los desarrolladores tenían que depender de patrones de diseño como IIFE (Expresión de Función Ejecutada Inmediatamente) para lograr la modularidad.

	Sin embargo, con la introducción de los módulos en el estándar ECMAScript, ahora existe una forma nativa de modularizar el código.

	Los módulos permiten dividir el código en archivos separados, cada uno con su propio alcance. 

	Esto facilita la reutilización de código, mejora la organización y la legibilidad, y evita la contaminación del espacio global. 

	Los módulos también permiten ocultar ciertos componentes y exponer solo lo que se desea compartir con otras partes del código.


	Exportar desde un Módulo: 

		```js

			// modulo.js
			export const variable = "Hola, mundo!";
			export function saludar(nombre) {
			  return `¡Hola, ${nombre}!`;
			}

		```

	Importar en otro Módulo: 

		```js

			import { variable, saludar } from './modulo.js';

			console.log(variable);        // "Hola, mundo!"
			console.log(saludar('Juan')); // "¡Hola, Juan!"

		```

		Exportamos una variable y una función con un parámetro. 


	Tipos de exportación: 
	
		
		Named Exports: 

			Exportas componentes individuales y los importas usando sus nombres.

			Ejemplo, dos funciones en un archivo llamado math.js y deseas exportar ambas funciones para usarlas en otro archivo:

			```js

				// math.js
				export function sumar(a, b) {
				  return a + b;
				}

				export function restar(a, b) {
				  return a - b;
				}

			```

			Importar y usar estas funciones:

			```js

				// main.js
				import { sumar, restar } from './math.js';

				console.log(sumar(5, 3));  // 8
				console.log(restar(10, 4)); // 6
			
			```

			Utilizamos "Named Exports" para exportar las funciones sumar y restar desde el archivo math.js. 

			Luego, en el archivo main.js, los estamos importando utilizando los mismos nombres con los que fueron exportados.

			Esto nos permite acceder a estas funciones en el archivo main.js y utilizarlas como cualquier otra función.


		Default Export: 

			Exportas un solo componente como el valor por defecto del módulo, lo que permite importarlo con cualquier nombre.

			Exportar desde un Módulo:

			```js

				// math.js
				export default function sumar(a, b) {
				  return a + b;
				}

			```

			Importar en otro Módulo:

			```js

				// main.js
				import sumar from './math.js';

				console.log(sumar(5, 3)); // 8

			```

			En el archivo main.js, la estamos importando utilizando el nombre que queramos, ya que es el valor por defecto exportado. 

			Esto nos permite acceder a la función en el archivo main.js y utilizarla como cualquier otra función.



	Common JS 

		Es un sistema de módulos en JavaScript que se utilizaba principalmente en entornos de servidor, como Node.js, para organizar y reutilizar el código en diferentes archivos. 

		Fue una de las primeras formas de modularizar el código en JavaScript y ayudó a abordar problemas relacionados con la organización y dependencias en proyectos más grandes.


		Modularización: 

			CommonJS permite dividir el código en módulos independientes, lo que facilita la organización y mantenimiento del código en proyectos grandes. 

			Cada módulo tiene su propio alcance (scope) y puede exportar e importar variables, funciones y objetos para su uso en otros módulos.


		Uso de require() y module.exports: 

			CommonJS utiliza la función require() para cargar módulos y la propiedad module.exports para exportar elementos desde un módulo. 

			Con require(), puedes cargar módulos externos y acceder a lo que han exportado. 

			Con module.exports, puedes exportar tus propios elementos para que otros módulos los utilicen.


		Carga síncrona: 

			Una característica clave de CommonJS es que la carga de módulos se realiza de manera síncrona, lo que significa que el módulo se carga y evalúa antes de continuar con la ejecución del código. 

			Esto es especialmente útil en entornos de servidor, donde la velocidad de carga puede ser menos crítica que en los navegadores.


		Ejemplo de exportación e importación: 

			```js

				// math.js
				module.exports = {
				  sumar: function(a, b) {
				    return a + b;
				  },
				  restar: function(a, b) {
				    return a - b;
				  }
				};

			```

			```js

				// main.js
				const math = require('./math.js');

				console.log(math.sumar(5, 3));  // 8
				console.log(math.restar(10, 4)); // 6

			```


	ECMAScript Modules: 

		ES6 Modules o ESM) son una forma estándar y nativa de modularizar el código en JavaScript, introducida en el estándar ECMAScript 6 (ES6) en 2015. 

		A diferencia de "CommonJS", los módulos ES6 son parte del lenguaje JavaScript y están diseñados para funcionar tanto en entornos de navegador como en entornos de servidor (como Node.js).


		Sintaxis de Importación y Exportación:

			Los módulos ES6 utilizan las palabras clave import y export para definir qué elementos se importan o exportan en un módulo. 

			Puedes exportar variables, funciones y objetos utilizando export y luego importarlos en otros módulos utilizando import.


	    Soporte para Carga Asíncrona: 

	    	A diferencia de CommonJS, los módulos ES6 admiten la carga asíncrona por naturaleza. 

	    	Esto significa que los módulos se cargan de manera asíncrona cuando se importan, lo que puede mejorar el rendimiento en aplicaciones web.


	    Enlace Estático: 

	    	Los enlaces de importación/exportación en los módulos ES6 se resuelven estáticamente en tiempo de compilación, lo que permite optimizaciones por parte de los motores de JavaScript. 

	    	Esto contrasta con CommonJS, donde las importaciones se resuelven en tiempo de ejecución.


	    Ámbito de Módulo: 

	    	Cada módulo ES6 tiene su propio ámbito, lo que significa que las variables y funciones definidas en un módulo no contaminan el ámbito global ni interfieren con otros módulos.


	    Ejemplo de exportar e importar: 

	    	```js

	    		// math.js
				export function sumar(a, b) {
				  return a + b;
				}

				export function restar(a, b) {
				  return a - b;
				}

	    	```

	    	```js

	    		// main.js
				import { sumar, restar } from './math.js';

				console.log(sumar(5, 3));  // 8
				console.log(restar(10, 4)); // 6

	    	```

	   	Los módulos ES6 se han vuelto ampliamente adoptados en el desarrollo web moderno debido a su integración nativa con JavaScript y a las ventajas que ofrecen en términos de rendimiento y organización del código. 

	   	Sin embargo, es importante tener en cuenta que la compatibilidad del navegador y del entorno de ejecución puede variar, por lo que es posible que necesites configurar herramientas de construcción o transpiladores para asegurarte de que tus módulos sean compatibles en todos los navegadores y entornos que necesites.



|| Memory Management
	
	Por supuesto, "Memory Management" (Gestión de Memoria) se refiere al proceso de administrar y controlar la asignación y liberación de memoria en un programa de JavaScript. 

	Dado que JavaScript se ejecuta en un entorno con recursos limitados, como un navegador web o un entorno de servidor, es crucial administrar la memoria de manera eficiente para evitar problemas como fugas de memoria y agotamiento de recursos.


	La gestión de memoria se realiza de la siguiente manera:

    	Asignación de Memoria: 

    		Cuando creas objetos, arrays, funciones y otros tipos de datos en JavaScript, el motor de JavaScript (por ejemplo, el motor V8 en Chrome) asigna memoria para almacenar esos datos en el montón (heap), que es la región de memoria donde se almacenan los objetos y estructuras de datos. 

    		En JavaScript, no necesitas preocuparte por asignar memoria manualmente, ya que el motor de JavaScript se encarga de ello automáticamente.


   		Referencias: 

   			La gestión de memoria implica rastrear las referencias a los objetos almacenados en el montón. 

   			Si un objeto ya no tiene referencias a él desde el código en ejecución, se considera "inaccesible" y puede ser elegible para ser liberado de la memoria. 

   			Esto se conoce como recolección de basura.


    	Recolección de Basura: 

    		Los motores de JavaScript utilizan algoritmos de recolección de basura para identificar y eliminar los objetos inaccesibles y liberar la memoria que ocupan. 

    		Uno de los algoritmos más comunes es el "Garbage Collector" (Recolector de Basura) que busca objetos que ya no son accesibles y los marca para su eliminación.


    	Fugas de Memoria: 

    		Una fuga de memoria ocurre cuando los objetos que ya no son necesarios siguen teniendo referencias, lo que impide que el recolector de basura los elimine. 

    		Esto puede llevar a un aumento continuo en el uso de memoria y eventualmente agotar los recursos disponibles.


    	Buenas Prácticas: 

    		Para evitar problemas de gestión de memoria, es importante seguir buenas prácticas de programación, como liberar referencias a objetos cuando ya no se necesitan, evitar ciclos de referencia que impidan que los objetos sean liberados, y utilizar las herramientas de desarrollo del navegador para monitorear el uso de memoria y detectar posibles fugas.

	

	Memory lifecycle: 

		Se refiere al proceso por el cual se asigna, utiliza y finalmente se libera la memoria en un programa de software. 

		En el contexto de JavaScript y otros lenguajes de programación, el ciclo de vida de la memoria es fundamental para comprender cómo se gestionan los recursos y cómo prevenir problemas como fugas de memoria y agotamiento de recursos.


		El ciclo de vida de la memoria se puede dividir en varias etapas:

		Asignación: 

		    En esta etapa, se asigna memoria para almacenar datos, como variables, objetos, funciones y estructuras de datos. 

		    En JavaScript, esta asignación de memoria puede ocurrir automáticamente cuando se crean variables y objetos, o cuando se reserva espacio para arrays y otros tipos de datos.


		Uso: 

			Una vez que la memoria se ha asignado y los datos se han creado, se utilizan a través de la ejecución del código. 

			Los datos almacenados en la memoria se pueden leer, modificar y pasar a funciones para su procesamiento.


		Referencias: 

			Los datos en la memoria están vinculados a través de referencias. Las variables y objetos pueden contener referencias a otros objetos o valores en la memoria. 

			Si no hay referencias a un objeto, se considera inaccesible y puede ser candidato para ser eliminado en la etapa de liberación de memoria.


		Liberación: 

			En esta etapa, los datos que ya no son necesarios se liberan de la memoria para que los recursos se puedan utilizar nuevamente. 

			En lenguajes de programación con administración automática de memoria, como JavaScript, esto es manejado por el recolector de basura. 

			El recolector de basura identifica objetos que ya no tienen referencias y los elimina, liberando la memoria que ocupaban.


		Finalización: 

			En algunos lenguajes de programación, especialmente en aquellos que permiten la programación con recursos más bajos, es posible que necesites realizar tareas adicionales antes de liberar la memoria, como cerrar archivos, liberar conexiones de red u otras acciones de limpieza.



	Garbage collection: 

		Es un proceso automático en los lenguajes de programación que administran la memoria, como JavaScript, para detectar y liberar la memoria que ya no es utilizada por el programa. 

		Su objetivo principal es prevenir las fugas de memoria y liberar recursos para que puedan ser reutilizados por otras partes del programa.

		En JavaScript, el proceso de recolección de basura es manejado por el "Garbage Collector". 

		El Garbage Collector rastrea las referencias a los objetos almacenados en memoria. 

		Si un objeto ya no tiene ninguna referencia que lo vincule, es decir, si ningún elemento del programa puede acceder al objeto, se considera que está listo para ser eliminado. 

		El Garbage Collector se encarga de identificar estos objetos no referenciados y liberar el espacio de memoria que ocupan.

		La recolección de basura en JavaScript se basa en un algoritmo que rastrea el grafo de referencias entre los objetos. 

		Hay diferentes enfoques para la recolección de basura, incluyendo el algoritmo de "Referencia Contable", el algoritmo de "Recorrido de Raíz" y el algoritmo de "Marcado y Barrido" (Mark and Sweep), entre otros.

		Es importante mencionar que la recolección de basura es una tarea automática y transparente para los desarrolladores en lenguajes de programación de alto nivel como JavaScript. 

		Sin embargo, entender cómo funciona este proceso es valioso para escribir código eficiente y prevenir problemas relacionados con la memoria, como las fugas de memoria.


		Algunos consejos para optimizar la recolección de basura en JavaScript incluyen:

    	Limitar el uso de variables globales: 

    		Las variables globales pueden mantener referencias a objetos en todo el ciclo de vida de la aplicación, lo que puede dificultar la recolección de basura. 

    		Trata de utilizar variables locales siempre que sea posible.


    	Evitar ciclos de referencias: 

    		Si dos objetos se refieren mutuamente, pueden formar un ciclo de referencias que impide que el Garbage Collector los elimine. 

    		Presta atención a estas situaciones y evita que los objetos tengan referencias circulares.


    	Utilizar alcance de bloque: 

    		Utilizar variables dentro de un alcance de bloque limitado puede ayudar a que los objetos sean más fáciles de eliminar cuando ya no son necesarios.


    	Libera recursos explícitamente: 

    		Aunque JavaScript tiene un Garbage Collector, en ocasiones es útil liberar recursos explícitamente cuando ya no son necesarios, especialmente en aplicaciones que manejan recursos externos como conexiones de red o archivos.




|| Dev Tools
	
	Permiten a los desarrolladores inspeccionar, depurar el código fuente (y sus errores) y perfilar sus aplicaciones web.

	Estas herramientas son muy útiles para analizar y mejorar el rendimiento de sitios web y aplicaciones en JavaScript. 

	Aquí hay una descripción general de algunas de las características clave de las Chrome DevTools relacionadas con JavaScript:


		1. Consola (Console): 

			La consola es una de las características más utilizadas en las DevTools. 

			Permite interactuar con la página web mediante la ejecución de comandos de JavaScript directamente en el contexto de la página. 

			Esto es útil para probar rápidamente fragmentos de código, imprimir valores y depurar problemas.


		2. Inspector de Elementos (Elements):

			Esta sección permite inspeccionar y manipular el DOM de la página web. 

			Puedes ver y editar HTML, CSS y atributos de elementos, así como agregar y eliminar elementos para probar cómo afecta la estructura del sitio.


		3. Depurador (Sources): 

			El depurador es una herramienta poderosa que te permite establecer puntos de interrupción en el código JavaScript y seguir su ejecución paso a paso. 

			También puedes examinar variables, ver la pila de llamadas y observar el flujo del programa.


		4. Performance: 

			La pestaña de rendimiento te permite grabar y analizar el rendimiento de tu sitio web, incluido el tiempo de carga, la actividad de la CPU y la utilización de memoria. 

			Esto es útil para identificar cuellos de botella y optimizar el rendimiento.


		5. Memory: 

			La pestaña de memoria te permite tomar capturas de la memoria utilizada por tu sitio web y analizar qué objetos están ocupando espacio en la memoria. 

			Esto es valioso para identificar fugas de memoria y optimizar el uso de recursos.


		6. Network: 

			La pestaña de red proporciona información detallada sobre las solicitudes y respuestas de red realizadas por tu sitio web. 

			Puedes ver tiempos de carga, encabezados de solicitud y respuesta, y más.


		7. Application: 

			La pestaña de aplicación proporciona información sobre los Service Workers, almacenamiento en caché y otras características relacionadas con las aplicaciones web progresivas.


		8. Audits: 

			Esta característica te permite ejecutar auditorías en tu sitio web para verificar el cumplimiento de las mejores prácticas de rendimiento, accesibilidad, SEO y más.


		9. Console Drawer: 

			Una consola más avanzada que permite escribir y ejecutar múltiples líneas de código de manera persistente a lo largo de las páginas.

		
		10. Mobile Emulation: 

			Puedes emular diferentes dispositivos y resoluciones para probar cómo se verá y se comportará tu sitio web en diferentes tamaños de pantalla.


	Debugging issues:

		Depurar problemas es una de las funciones más importantes de las Chrome DevTools.

		Se trata de identificar y corregir errores en tu código JavaScript y en otros aspectos de tu sitio web.


		1. Abrir las Chrome DevTools:

        	Haz clic derecho en cualquier parte de tu página web y selecciona "Inspeccionar" o presiona Ctrl+Shift+I (o Cmd+Option+I en macOS) para abrir las DevTools.
        	
        	También puedes abrir las DevTools desde el menú de Chrome en la esquina superior derecha, seleccionando "Más herramientas" y luego "Herramientas de desarrollo".


	    2. Usar el Depurador:

	        Ve a la pestaña "Sources" en las DevTools.

	        Encuentra el archivo JavaScript que deseas depurar en la lista de archivos cargados.

	        Haz clic en el número de línea junto a la línea donde deseas establecer un punto de interrupción. 

	        Esto detendrá la ejecución del código en ese punto.

	        Refresca la página para activar el depurador en ese punto de interrupción.

	        Utiliza los botones de control en la parte superior para avanzar paso a paso, pausar, continuar o salir del depurador.


	    3. Inspeccionar Variables:

	        Mientras estás en el depurador, puedes ver el contenido de las variables en el ámbito actual. 

	        Simplemente coloca el cursor sobre una variable para ver su valor.

	        Utiliza la pestaña "Scope" en el panel derecho para ver todas las variables en ese ámbito y sus valores.

	    
	    4. Console Debugging:

	        Usa la pestaña "Console" para ejecutar comandos de JavaScript en el contexto de la página y ver resultados en tiempo real.

	        Imprime valores de variables, realiza cálculos y prueba funciones directamente en la consola.

	    
	    5. Breakpoints:

	        Además de establecer puntos de interrupción en el código, también puedes establecer puntos de interrupción condicionales o puntos de interrupción de eventos específicos.

	        Esto te permite detener la ejecución del código solo cuando se cumple una condición o cuando ocurre un evento en particular.

	    
	    6. Network Debugging:

	        Utiliza la pestaña "Network" para analizar las solicitudes y respuestas de red, incluidos los encabezados y el contenido.

	        Puedes ver el tiempo de carga de cada recurso y detectar problemas de rendimiento.


	    7. Performance Profiling:

	        Utiliza la pestaña "Performance" para realizar perfiles de rendimiento y analizar dónde tu código puede estar ralentizando la página.


	    8. Memory Profiling:

	        La pestaña "Memory" te permite tomar capturas de la memoria y analizar el uso de memoria para identificar posibles fugas.


	    9. Console Logs:

	        Utiliza console.log() para imprimir mensajes y valores en la consola. Estos mensajes te ayudarán a entender cómo se comporta tu código.


	    10. Sources Panel:

	        Aquí puedes editar el código en tiempo real para probar soluciones antes de implementarlas en tu código fuente original.


	    11. Search and Filters:

	        Utiliza la barra de búsqueda y los filtros para encontrar archivos, funciones y variables específicos en tu código.



	Debugging Memory Leaks:

		Se trata de asegurarse de que tu aplicación no esté usando más memoria de la necesaria, lo que podría llevar a problemas de rendimiento.


		1. Realizar una Captura de Memoria:

    		En la pestaña "Memory", haz clic en el botón "Capture" para tomar una instantánea del uso de memoria en ese momento.


		2. Analizar la Captura:

		    Después de tomar la captura, verás una lista de objetos y recursos en la parte superior de la pestaña "Memory".
		    
		    Puedes explorar cada objeto y ver cuánta memoria está siendo utilizada por cada uno.


		3. Comparar Capturas:

		    Si sospechas que hay una fuga de memoria, puedes tomar dos capturas en diferentes momentos y compararlas.

		    Esto te mostrará cualquier diferencia en el uso de memoria entre las dos capturas, lo que puede ayudarte a identificar qué objetos o recursos no están siendo liberados correctamente.

		
		4. Analizar los Objetos Retenidos:

		    La sección "Retained Size" en la captura muestra los objetos que están siendo retenidos en la memoria.

		    Puedes explorar esta lista para identificar qué objetos están ocupando más memoria.


		5. Analizar las Referencias:

		    Haz clic en un objeto en la captura para ver sus referencias y referencias inversas. 

		    Esto te ayuda a rastrear cómo los objetos se relacionan entre sí.


		 6. Profiling JavaScript Execution:

		    Si una fuga de memoria está relacionada con la ejecución de JavaScript, también puedes utilizar la pestaña "Profiles" para analizar el rendimiento y la memoria utilizada por el código JavaScript.


		7. Liberar Memoria Manualmente:

		    En la pestaña "Memory", puedes ejecutar la opción "Collect Garbage" para forzar la recolección de basura y liberar la memoria no utilizada.


		8. Ver Información de Referencias:

		    La pestaña "References" te muestra una visualización del árbol de objetos y cómo están relacionados en términos de referencias.


	Debugging Performance: 

		Depurar el rendimiento de tu aplicación web es esencial para asegurarte de que se ejecute de manera eficiente y rápida.


		1. Pestaña "Performance":

    		Ve a la pestaña "Performance" en las DevTools.


		2. Grabar una Sesión de Rendimiento:

		    En la pestaña "Performance", haz clic en el botón de grabación o presiona Ctrl+E (o Cmd+E en macOS) para comenzar a grabar la sesión de rendimiento.


		3. Interactuar con tu Aplicación:

		    Realiza las acciones en tu aplicación que quieras analizar en términos de rendimiento, como hacer clic en botones, navegar entre páginas, etc.

		
		4. Detener la Grabación:

		    Detén la grabación haciendo clic en el botón de grabación nuevamente.


		5. Analizar el Rendimiento:

		    Después de detener la grabación, verás una línea de tiempo que muestra cómo se ejecutaron las diferentes operaciones en tu aplicación.

		    Puedes explorar esta línea de tiempo para identificar cuellos de botella y áreas de bajo rendimiento.


		6. Identificar Problemas:

		    Los marcadores de eventos te mostrarán detalles sobre los eventos que ocurrieron durante la grabación.

		    Puedes hacer clic en ellos para obtener más información.


		7. Análisis Detallado:

		    Puedes hacer zoom en áreas específicas de la línea de tiempo para un análisis más detallado. 

		    Esto te ayudará a identificar funciones, llamadas de red u operaciones que están consumiendo mucho tiempo.


		8. Registro de Pila:

		    La pestaña "Call Tree" te permite ver el registro de pila de las funciones y operaciones que se ejecutaron durante la grabación.


		9. Análisis de Fotogramas:

		    Si estás trabajando con animaciones o renderización de gráficos, la pestaña "Frames" te proporciona información sobre el rendimiento de cada fotograma.


		10. Análisis de Carga de Recursos:

		    La pestaña "Network" te muestra información sobre los recursos cargados por tu página, lo que te ayuda a identificar posibles cuellos de botella en la carga.


		11. Consejos y Sugerencias:

		    Las DevTools a menudo ofrecen sugerencias sobre cómo mejorar el rendimiento en función de lo que encuentren en la grabación.



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






