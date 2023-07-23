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






||
