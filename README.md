# js-css-html
Contenido de js, css y html. 

|| MOZILLA MDN JS


|| JavaScript: Scripting dinámico del lado del cliente. 


	Permite implementar funcionalidades complejas en páginas web. 

	En vez de que la página se muestre estática, puede mostrar actualizaciones de contenido oportunas, mapas interactivos, gráficos animados 2D/3D, máquinas de discos de vídeo con desplazamiento, etc.

	Si encuentra una página haciendo algo de esto, puede que JS este involucrado. 


|| Guía
	
	1. Primeros pasos de JavaScript:

		¿Qué es JavaScript?", "¿cómo se ve?" y "¿qué puede hacer?", características clave de JavaScript, como variables, cadenas, números y matrices.


	2. Bloques de construcción de JavaScript:

 		Centrado en los tipos de bloques de código que se encuentran comúnmente, como declaraciones condicionales, bucles, funciones y eventos. 


 	3. Introduciendo objetos JavaScript:

		En JavaScript, la mayoría de las cosas son objetos, desde las funciones principales como cadenas y matrices, hasta las API del navegador creadas sobre JavaScript. 

		Incluso puedes crear tus propios objetos para encapsular funciones y variables relacionadas en paquetes eficientes. 

		Teoría de objetos, sintaxis, creación de objetos; qué son los datos JSON y cómo trabajar con ellos.
	

	4. JavaScript asincrónico:

		Su importancia en el mundo modern, manejar de manera efectiva posibles operaciones de bloqueo, como la recuperación de recursos de un servidor.


	5. API web del lado del cliente:

 		Al escribir JavaScript del lado del cliente para sitios web o aplicaciones, se usa las interfaces de las API para manipular diferentes aspectos del navegador y el sistema operativo en el que se ejecuta el sitio, o incluso datos de otros sitios web o servicios.

 		En este módulo exploraremos qué son las API y cómo utilizar algunas de las API más comunes que encontrará a menudo en su trabajo de desarrollo.



|| 1. Comienzo: 

	Guía: 

		1. ¿Qué es JavaScript?

			Y ¿qué hace?".


		2. Características de JavaScript:

			Características claves de JS. 
		

		3. ¿Qué salió mal? Solución de problemas de JavaScript

			Consejos sobre cómo encontrar y corregir errores en programas JavaScript.


		4. Almacenamiento de la información que necesita: variables

			Componente básico de JavaScript: variables.


		5. Matemáticas básicas en JavaScript: números y operadores

			Matemáticas en JavaScript: cómo podemos combinar operadores y otras características para manipular números con éxito para cumplir nuestras órdenes.


		6. Manejo de texto: cadenas en JavaScript

			Centrado en las cadenas: así se llaman los fragmentos de texto en programación. 

			Crear cadenas, comillas de escape en cadenas y unirlas.


		7. Métodos de cadena útiles:

			Operaciones útiles podemos realizar en cadenas con métodos integrados, como encontrar la longitud de una cadena de texto, unir y dividir cadenas, sustituir un carácter en una cadena por otro, y más.


		8. Matrices:

			Una forma sencilla de almacenar una lista de elementos de datos bajo un único nombre de variable.

			Aquí analizamos por qué esto es útil, luego exploramos cómo crear una matriz, recuperar, agregar y eliminar elementos almacenados en una matriz, y más.


		9. Tarea

			Generación de historias aleatorias. 



|| Qué es JS

	Las interfaces de programación de aplicaciones (API) del navegador integradas en los navegadores web,  brindan funcionalidades como la creación dinámica de HTML, la configuración de estilos CSS; recopilar y manipular una transmisión de video desde la cámara web de un usuario, o generar gráficos 3D y muestras de audio.

	Las APIs de terceros permiten a los desarrolladores incorporar funciones en sitios de otros proveedores de contenido, como Disqus o Facebook.

	Marcos (Frameworks) y bibliotecas (Libraries) de terceros que puede aplicar a HTML para acelerar el trabajo de creación de sitios y aplicaciones.


	Definición en Alto Nivel: 

		Es un lenguaje de scripting (secuencias de instrucciones) o programación que le permite implementar funciones complejas en páginas web. 

		Es la tercera capa del pastel de capas de tecnologías web estándar, en le que se encuentra con CSS y HTML. 

		HTML:  

			Es el lenguaje de marcado que utilizamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o incrustando imágenes y vídeos en la página.


		CSS: 

			Es un lenguaje de reglas de estilo que utilizamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y fuentes, y distribuir nuestro contenido en varias columnas.

		
		JavaScript:

			Es un lenguaje de programación que le permite crear contenido que se actualiza dinámicamente, controlar multimedia, animar imágenes y prácticamente todo lo demás. 


	Permite realizar:  

		Del lado del cliente consta de algunas características:

			Almacenar valores útiles dentro de variables.

		 	Operaciones sobre fragmentos de texto.

		 	Ejecutar código en respuesta a ciertos eventos que ocurren en una página web.

		 	Y más. 


	Ejemplo de Código: 

		Podemos tomar un botón de HTML para ponerle estilo con CSS e interactividad con JS. 

		Al clickear el botón podemos hacer que cambié su nombre. 


		HTML: 

			```html

			<button type="button">Player 1: Chris</button>

			```

		CSS: 

			```css

			button {
			  font-family: "helvetica neue", helvetica, sans-serif;
			  letter-spacing: 1px;
			  text-transform: uppercase;
			  border: 2px solid rgb(200 200 0 / 60%);
			  background-color: rgb(0 217 217 / 60%);
			  color: rgb(100 0 0 / 100%);
			  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
			  border-radius: 10px;
			  padding: 3px 10px;
			  cursor: pointer;
			}

			```


		JS: 

			```js

			const button = document.querySelector("button");

			button.addEventListener("click", updateName);

			function updateName() {
			  const name = prompt("Enter a new name");
			  button.textContent = `Player 1: ${name}`;
			}

			```

	
	APIs: 

		Lo más interesante es la funcionalidad construida sobre el lenguaje JavaScript del lado del cliente. 

		Las llamadas interfaces de programación de aplicaciones (API) le brindan superpoderes adicionales para usar en su código JavaScript.

		Las API son conjuntos de bloques de construcción de código ya preparados que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar.


		Generalmente se dividen en dos categorías:

		1. Las API del navegador:

			Integradas en su navegador web y pueden exponer datos del entorno informático circundante o realizar tareas complejas útiles:

		 	La API 'DOM0 (Document Object Model): 

		 		Permite manipular HTML y CSS, creando, eliminando y cambiando HTML, aplicando dinámicamente nuevos estilos a su página, etc.

				Cada vez que ve aparecer una ventana emergente en una página, o se muestra algún contenido nuevo (como vimos arriba en nuestra demostración simple), ese es el DOM en acción.

		 	
		 	La API de 'geolocalización': 

		 		Recupera información geográfica. 

		 		Así es como Google Maps puede encontrar su ubicación y trazarla en un mapa.


		 	Las API 'Canvas' y 'WebGL': 

		 		Permiten crear gráficos animados en 2D y 3D. 


		 	Las API de audio y vídeo:  

		 		como 'HTMLMediaElement' y 'WebRTC' le permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y vídeo directamente en una página web, o capturar vídeos de su cámara web y mostrarlos en la computadora de otra persona.


		2. Las APIs Thrid Party: 

			No están integrados en el navegador de forma predeterminada y, por lo general, es necesario obtener su código e información de algún lugar de la Web. 

			Por ejemplo:

				La API de Twitter le permite hacer cosas como mostrar sus últimos tweets en su sitio web.
				
				La API de Google Maps y la API de OpenStreetMap le permiten incorporar mapas personalizados en su sitio web y otras funciones similares.


	Qué hace JS en una página: 

		Qué es lo que realmente sucede cuando ejecuta JavaScript en su página.

		Cuando carga una página web en su navegador, está ejecutando su código (HTML, CSS y JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). 

		Esto es como una fábrica que recibe materias primas (el código) y produce un producto (la página web).

		Un uso muy común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través de la API del modelo de objetos de documento (como se mencionó anteriormente). 

		Tenga en cuenta que el código de sus documentos web generalmente se carga y ejecuta en el orden en que aparece en la página.

		Pueden ocurrir errores si JavaScript se carga y ejecuta antes que el HTML y CSS que se pretende modificar. 

		Por eso es una estrategía de carga de script.


	Seguridad del navegador:

		Cada pestaña del navegador tiene su propio depósito independiente para ejecutar código (estos depósitos se denominan "entornos de ejecución" en términos técnicos); esto significa que en la mayoría de los casos el código de cada pestaña se ejecuta de forma completamente independiente y el código de una pestaña no puede ejecutarse directamente, afectar el código en otra pestaña o en otro sitio web. 

		Esta es una buena medida de seguridad; si no fuera así, los piratas podrían empezar a escribir código para robar información de otros sitios web y otras cosas malas por el estilo.

		Hay formas de enviar código y datos entre diferentes sitios web/pestañas de manera segura que son tecnicas avanzadas. 


	Orden de ejecución de JavaScript

		Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo. 

		Esto significa que debes tener cuidado con el orden en el que colocas las cosas. 

		Por ejemplo, volvamos al bloque de JavaScript que vimos en nuestro primer ejemplo.

		```js

		const button = document.querySelector("button");

		button.addEventListener("click", updateName);

		function updateName() {
		  const name = prompt("Enter a new name");
		  button.textContent = `Player 1: ${name}`;
		}

		```

		Aquí seleccionamos un botón (línea 1) y luego le adjuntamos un detector de eventos (línea 3) para que cuando se haga clic en el botón, se ejecute el bloque de código 'updateName()'' (líneas 5 a 8). 

		El bloque de código updateName() (este tipo de bloques de código reutilizables se denominan "funciones") solicita al usuario un nuevo nombre y luego inserta ese nombre en el texto del botón para actualizar la pantalla.

		Si cambiara el orden de las dos primeras líneas de código, ya no funcionaría; en su lugar, obtendría un error en la consola del desarrollador del navegador:

			Error de referencia no detectado: 

				no se puede acceder al 'botón' antes de la inicialización. 

		Esto significa que el objeto del botón aún no se ha inicializado, por lo que no podemos agregarle un detector de eventos.


		Este es un error muy común: 

			debes tener cuidado de que los objetos a los que se hace referencia en tu código existan antes de intentar hacerles algo.


	Código interpretado versus código compilado:

		Es posible que escuche los términos interpretados y compilados en el contexto de la programación. 

		En los lenguajes interpretados:

			El código se ejecuta de arriba a abajo y el resultado de la ejecución del código se devuelve inmediatamente. 

			No es necesario transformar el código a un formato diferente antes de que el navegador lo ejecute. 

			El código se recibe en su formato de texto fácil de usar para el programador y se procesa directamente a partir de él.


		Los lenguajes compilados: 

			Se transforman (compilan) en otra forma antes de ser ejecutados por la computadora. 

			Por ejemplo, C/C++ se compilan en código de máquina que luego ejecuta la computadora.

			El programa se ejecuta desde un formato binario, que se generó a partir del código fuente del programa original.


		JavaScript es un lenguaje de programación interpretado ligero. 

		El navegador web recibe el código JavaScript en su formato de texto original y ejecuta el script a partir de ahí. 

		Desde un punto de vista técnico, la mayoría de los intérpretes de JavaScript modernos utilizan una técnica llamada compilación justo a tiempo para mejorar el rendimiento; El código fuente de JavaScript se compila en un formato binario más rápido mientras se utiliza el script, para que pueda ejecutarse lo más rápido posible. 

		Sin embargo, JavaScript todavía se considera un lenguaje interpretado, ya que la compilación se maneja en tiempo de ejecución, en lugar de hacerlo con anticipación.

		Ambos tipos de lenguaje tienen ventajas, pero no las discutiremos ahora.


	Código del lado del servidor vs Código del lado del cliente:

		Es posible que también escuche los términos código del lado del servidor y código del lado del cliente, especialmente en el contexto del desarrollo web. 

		El código del lado del cliente: 

			Es código que se ejecuta en la computadora del usuario: cuando se ve una página web, el código del lado del cliente de la página se descarga, luego se ejecuta y se muestra en el navegador. 

			En este módulo hablamos explícitamente de JavaScript del lado del cliente.


		El código del lado del servidor: 

			Se ejecuta en el servidor, luego sus resultados se descargan y se muestran en el navegador. 

			Ejemplos de lenguajes web populares del lado del servidor incluyen PHP, Python, Ruby, ASP.NET e incluso JavaScript. 

			JavaScript también se puede utilizar como lenguaje del lado del servidor, por ejemplo en el popular entorno Node.js. 


	Código dinámico vs estático:

		La palabra dinámica se utiliza para describir tanto JavaScript del lado del cliente como lenguajes del lado del servidor; se refiere a la capacidad de actualizar la visualización de una página web/aplicación para mostrar diferentes cosas en diferentes circunstancias, generando contenido nuevo según sea necesario. 

		El código del lado del servidor genera dinámicamente contenido nuevo en el servidor, por ejemplo, extrayendo datos de una base de datos, mientras que JavaScript del lado del cliente genera dinámicamente contenido nuevo dentro del navegador del cliente, por ejemplo; crear una nueva tabla HTML, llenarla con los datos solicitados desde el servidor y luego mostrar la tabla en una página web que se muestra al usuario. 

		El significado es ligeramente diferente en los dos contextos, pero está relacionado, y ambos enfoques (del lado del servidor y del lado del cliente) suelen funcionar juntos.

		Una página web sin contenido que se actualiza dinámicamente se denomina estática: simplemente muestra el mismo contenido todo el tiempo.


	¿Cómo se agrega JavaScript a su página?

		JavaScript se aplica a su página HTML de manera similar a CSS. 

		Mientras que CSS usa elementos <link> para aplicar hojas de estilo externas y elementos <style> para aplicar hojas de estilo internas a HTML, JavaScript solo necesita un amigo en el mundo de HTML: el elemento <script>. 


	Ejemplo de Aplicación de JavaScript Interno en HTML:

		Con el ejemplo apply-javascript.html. 

		Al abrirlo, verá que el HTML crea una página web simple que contiene un botón en el que se puede hacer clic.
		 
		Si lo modificamos y agregamos en el head, justo antes de la etiqueta </head> de cierre; al final: 

			<script> // Todo el código </script>

		```html

		<head>
			...

			<script>
		  		// Code
			</script>
		</head>

		```

		Si agregaremos algo de JavaScript dentro de nuestro elemento <script>: 

		```js

		document.addEventListener("DOMContentLoaded", () => {
		  function createParagraph() {
		    const para = document.createElement("p");
		    para.textContent = "You clicked the button!";
		    document.body.appendChild(para);
		  }

		  const buttons = document.querySelectorAll("button");

		  for (const button of buttons) {
		    button.addEventListener("click", createParagraph);
		  }
		});

		```

		Debería ver que cuando hace clic en el botón, se genera un nuevo párrafo y se coloca debajo.

	
	JavaScript Externo:

		Crear un archivo llamdo 'script.js'. 

		En HTML debemos agregar el link del archivo a la etiquea script. 

		```html

		<head>
			...

			<script src="script.js" defer></script>
		</head>

		```

		```js

		function createParagraph() {
		  const para = document.createElement("p");
		  para.textContent = "You clicked the button!";
		  document.body.appendChild(para);
		}

		const buttons = document.querySelectorAll("button");

		for (const button of buttons) {
		  button.addEventListener("click", createParagraph);
		}

		```

		Separar el código JS y HTML en sus respectivos archivos, hace al proyecto mantenible y reutilizable.


	JS en Linea (HTML): 

		```js

		function createParagraph() {
		  const para = document.createElement("p");
		  para.textContent = "You clicked the button!";
		  document.body.appendChild(para);
		}

		```


		```html

		<button onclick="createParagraph()">Click me!</button>

		```

		El elemento <button> incluye un controlador 'onclick' en línea para que la función se ejecute cuando se presiona el botón.

		Sin embargo, por favor no hagas esto. 

		Es una mala práctica contaminar su HTML con JavaScript y es ineficiente: tendría que incluir el atributo 'onclick="createParagraph()"'' en cada botón al que desee que se aplique JavaScript.


	Usando addEventListener:

		En lugar de incluir JavaScript en su HTML, utilice una construcción de JavaScript pura. 

		La función querySelectorAll() le permite seleccionar todos los botones de una página.

		```js

		const buttons = document.querySelectorAll("button");

		for (const button of buttons) {
		  button.addEventListener("click", createParagraph);
		}

		```

		Luego puede recorrer los botones, asignando un controlador para cada uno usando addEventListener(). 

		Esto puede ser un poco más largo que el atributo onclick, pero funcionará para todos los botones, sin importar cuántos haya en la página ni cuántos se agreguen o eliminen. No es necesario cambiar el JavaScript.


	Diferencias en las Estrategias de Carga de Scripts: 

		Hay una serie de problemas relacionados con lograr que los scripts se carguen en el momento adecuado.

		¡Nada es tan simple como parece! Un problema común es que todo el HTML de una página se carga en el orden en que aparece. 

		Si está utilizando JavaScript para manipular elementos en la página (o más exactamente, el modelo de objetos de documento), su código no funcionará si JavaScript se carga y analiza antes que el HTML al que está intentando hacer algo.

		En los ejemplos de código anteriores, en los ejemplos internos y externos, JavaScript se carga y ejecuta en el encabezado del documento, antes de que se analice el cuerpo HTML. 

		Esto podría provocar un error, por lo que hemos utilizado algunas estructuras para solucionarlo.

		En el ejemplo interno, puedes ver esta estructura alrededor del código.


		JS Interno: 

			Se puede ver esta estructura alrededor del código.

			```js

			document.addEventListener("DOMContentLoaded", () => {
			  // …
			});


			```

			Es un detector de eventos, que escucha el evento 'DOMContentLoaded' del navegador, lo que significa que el cuerpo HTML está completamente cargado y analizado. 

			El JavaScript dentro de este bloque no se ejecutará hasta que se active ese evento, por lo tanto se evita el error.


		JS Externo: 

			Utilizamos una característica de JavaScript más moderna para resolver el problema, el atributo defer, que le indica al navegador que continúe descargando el contenido HTML una vez que se haya alcanzado el elemento de etiqueta <script>.

			```js

			<script src="script.js" defer></script>

			```

			Tanto el script como el HTML se cargarán simultáneamente y el código funcionará.


		En el caso externo, no necesitábamos usar el evento 'DOMContentLoaded' porque el atributo defer resolvió el problema por nosotros. 

		No utilizamos la solución de aplazar para el ejemplo de JavaScript interno porque aplazar solo funciona para scripts externos.

		Una solución antigua a este problema solía ser colocar el elemento del script justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta </body>), para que se cargara después de que se hubiera analizado todo el HTML. 

		El problema con esta solución es que la carga/análisis del script está completamente bloqueado hasta que se haya cargado el DOM HTML. 

		En sitios más grandes con mucho JavaScript, esto puede causar un problema importante de rendimiento y ralentizar su sitio.


	Atributos async y defer: 

		En realidad, hay dos funciones modernas que podemos utilizar para evitar el problema del script de bloqueo: asíncrono y diferido (que vimos anteriormente). 

		Veamos la diferencia entre estos dos.

		Los scripts cargados usando el atributo async: 

			Descargarán el script sin bloquear la página mientras se recupera el script. 

			Sin embargo, una vez que se completa la descarga, se ejecutará el script, lo que bloqueará la visualización de la página. 

			Esto significa que se impide que el resto del contenido de la página web se procese y se muestre al usuario hasta que el script termine de ejecutarse.

			No tiene garantía de que los scripts se ejecuten en un orden específico. 

			Es mejor utilizar async cuando los scripts de la página se ejecutan de forma independiente y no dependen de ningún otro script de la página.


		Los scripts cargados con el atributo defer: 

			Se cargarán en el orden en que aparecen en la página. 

			No se ejecutarán hasta que todo el contenido de la página se haya cargado, lo cual es útil si sus scripts dependen de que el DOM esté implementado (por ejemplo, modifican uno o más elementos en la página).

			
		Ejemplo async: 	

			```html

			<script async src="js/vendor/jquery.js"></script>

			<script async src="js/script2.js"></script>

			<script async src="js/script3.js"></script>

			```

			No puede confiar en el orden en que se cargarán los scripts. 

			jquery.js puede cargarse antes o después de script2.js y script3.js y, si este es el caso, cualquier función en esos scripts que dependa de jquery producirá un error porque jquery no se definirá en el momento en que se ejecute el script.

			async debe usarse cuando tiene un montón de scripts en segundo plano para cargar y solo desea implementarlos lo antes posible. 

			Por ejemplo, tal vez tengas que cargar algunos archivos de datos del juego, que serán necesarios cuando el juego realmente comience, pero por ahora solo quieres continuar mostrando la introducción del juego, los títulos y el lobby, sin que se bloqueen al cargar el script.


		Ejemplo defer:	


			```html

			<script defer src="js/vendor/jquery.js"></script>

			<script defer src="js/script2.js"></script>

			<script defer src="js/script3.js"></script>

			```

			Los scripts cargados usando el atributo defer se ejecutarán en el orden en que aparecen en la página y se ejecutarán tan pronto como se descarguen el script y el contenido.

			Podemos estar seguros de que jquery.js se cargará antes que script2.js y script3.js y que script2.js se cargará antes que script3.js. 

			No se ejecutarán hasta que todo el contenido de la página se haya cargado, lo cual es útil si sus scripts dependen de que el DOM esté implementado (por ejemplo, modifican uno o más elementos en la página).


		async y defer indican al navegador que descargue los scripts en un hilo separado, mientras se descarga el resto de la página (el DOM, etc.), por lo que la carga de la página no se bloquea durante el proceso de recuperación.
		
		Los scripts con un atributo async se ejecutarán tan pronto como se complete la descarga. 

		Esto bloquea la página y no garantiza ninguna orden de ejecución específica.


		Los scripts con un atributo defer se cargarán en el orden en que se encuentran y solo se ejecutarán una vez que todo haya terminado de cargarse.
		
		Si sus scripts deben ejecutarse inmediatamente y no tienen ninguna dependencia, utilice async.
		
		Si sus scripts necesitan esperar a ser analizados y dependen de otros scripts y/o del DOM implementado, cárguelos usando aplazar y coloque sus elementos <script> correspondientes en el orden en que desea que el navegador los ejecute.


	Comentarios: 

		Es posible escribir comentarios sobre los archivos que el navegador los ignorará; para recordar o informar qué hacen ciertas partes del código, son muy útiles en apps grandes. 


		En una línea: 

			```js

			// Comment

			```


		En Multiples Líneas: 

			```js

			/*
				Multiple
				Comments
				...

			*/

			```


		Ejemplo: 

			```js

			// Function: creates a new paragraph and appends it to the bottom of the HTML body.

			function createParagraph() {
			  const para = document.createElement("p");
			  para.textContent = "You clicked the button!";
			  document.body.appendChild(para);
			}

			/*
			  1. Get references to all the buttons on the page in an array format.
			  2. Loop through all the buttons and add a click event listener to each one.

			  When any button is pressed, the createParagraph() function will be run.
			*/

			const buttons = document.querySelectorAll("button");

			for (const button of buttons) {
			  button.addEventListener("click", createParagraph);
			}


			```



|| Características de JS
	
	Para aprovechar las características de JavaScript debemos pensar como un programador. 

	Una de las cosas más difíciles de aprender en programación no es la sintaxis que necesitas aprender, sino cómo aplicarla para resolver problemas del mundo real. 

	Debe comenzar a pensar como un programador; esto generalmente implica mirar descripciones de lo que su programa necesita hacer, determinar qué características del código se necesitan para lograr esas cosas y cómo hacer que funcionen juntas.

	Esto requiere una combinación de trabajo duro, experiencia con la sintaxis de programación y práctica, además de un poco de creatividad.

	Cuanto más codifiques, mejor lo lograrás. 

	
	Juego: adivinanzas de números

		Al seleccionar un número aleatorio entre 1 y 100. 

		Veremos si el invitado puede adivinarlo en 10 turnos o menos. 

		Le diremos si su suposición fue demasiado alta o demasiado baja cuando el invitado introduzca una suposición. 


	Instrucciones para crearlo: 

 		Quiero que crees un juego sencillo de adivinar el número. 

 		Debe elegir un número aleatorio entre 1 y 100 y luego desafiar al jugador a adivinar el número en 10 turnos. 

 		Después de cada turno, se debe decir al jugador si tiene razón o no, y si se equivoca, si la suposición fue demasiado baja o demasiado alta. 

 		También debería decirle al jugador qué números adivinó anteriormente.

 		El juego terminará una vez que el jugador adivine correctamente o cuando se le acaben los turnos.

 		Cuando finaliza el juego, al jugador se le debe dar la opción de empezar a jugar de nuevo.


 	Dividir las instrucciones en tareas simples: 

 		Al mirar este resumen, lo primero que podemos hacer es comenzar a dividirlo en tareas simples y ejecutables, con la mayor mentalidad de programador posible:

		1. Genera un número aleatorio entre 1 y 100.
		
		2. Registre el número de turno en el que se encuentra el jugador. Empiece en 1.
		
		3. Proporciona al jugador una forma de adivinar cuál es el número.
		
		4. Una vez que se haya enviado una suposición, primero regístrela en algún lugar para que el usuario pueda ver sus conjeturas anteriores.
		
		5. A continuación, compruebe si es el número correcto.
		
		6. Si es correcto:
			
			1. Mostrar mensaje de felicitación.
		
			2. Evite que el jugador pueda realizar más conjeturas (esto arruinaría el juego).
		
			3. Control de pantalla que permite al jugador reiniciar el juego.
		
		7. Si está mal y al jugador le quedan turnos:
			
			1. Dígale al jugador que está equivocado y si su suposición fue demasiado alta o demasiado baja.
		
			2. Permítales ingresar otra suposición.
		
			3. Incrementa el número de turno en 1.
		
		8. Si está mal y al jugador no le quedan turnos:
		 	
		 	1. Dile al jugador que se acabó el juego.
			
			2. Evite que el jugador pueda realizar más conjeturas (esto arruinaría el juego).
		
			3. Control de pantalla que permite al jugador reiniciar el juego.
		
		9. Una vez que el juego se reinicie, asegúrese de que la lógica del juego y la interfaz de usuario estén completamente restablecidas, luego regrese al paso 1.


		Ahora veamos cómo podemos convertir estos pasos en código, desarrollemos el ejemplo y exploremos las funciones de JavaScript a medida que avanzamos.


	Variables para almacenar datos: 

		```js

		let randomNumber = Math.floor(Math.random() * 100) + 1;

		const guesses = document.querySelector(".guesses");
		const lastResult = document.querySelector(".lastResult");
		const lowOrHi = document.querySelector(".lowOrHi");

		const guessSubmit = document.querySelector(".guessSubmit");
		const guessField = document.querySelector(".guessField");

		let guessCount = 1;
		let resetButton;

		```

		Configuramos variables y constantes que necesitamos para almacenar los datos que utilizará nuestro programa.

		Las variables son básicamente nombres de valores (como números o cadenas de texto). 

		Crea una variable con la palabra clave 'let' seguida de un nombre para su variable.

		Las constantes también se utilizan para nombrar valores, pero a diferencia de las variables, no se puede cambiar el valor una vez establecido. 

		En este caso, utilizamos constantes para almacenar referencias a partes de nuestra interfaz de usuario. 

		El texto dentro de algunos de estos elementos puede cambiar, pero cada constante siempre hace referencia al mismo elemento HTML con el que se inicializó.

		Crea una constante con la palabra clave 'const' seguida de un nombre para la constante.

		Puedes asignar un valor a tu variable o constante con un signo igual (=) seguido del valor que quieres darle.


	En nuestro ejemplo:

		A la primera variable, 'randomNumber', se le asigna un número aleatorio entre 1 y 100, calculado mediante un algoritmo matemático.
	 	
	 	Las primeras tres constantes están diseñadas para almacenar una referencia a los párrafos de resultados en nuestro HTML, y se usan para insertar valores en los párrafos más adelante en el código (observe cómo están dentro de un elemento <div>, que a su vez se usa para Seleccionar los tres más adelante para restablecerlos, cuando reiniciemos el juego).

		```html

		<div class="resultParas">
		  <p class="guesses"></p>
		  <p class="lastResult"></p>
		  <p class="lowOrHi"></p>
		</div>

		```

		Las siguientes dos constantes almacenan referencias a la entrada de texto del formulario y al botón de envío y se utilizan para controlar el envío de la suposición más adelante.

		```html

		<label for="guessField">Enter a guess: </label>
		<input type="number" id="guessField" class="guessField" />
		<input type="submit" value="Submit guess" class="guessSubmit" />


		```

		Nuestras dos últimas variables almacenan un recuento de conjeturas de 1 (utilizado para realizar un seguimiento de cuántas conjeturas ha tenido el jugador) y una referencia a un botón de reinicio que aún no existe (pero que existirá más adelante).


	Funciones: 

		Agregando más código JS:

		```js

		function checkGuess() {
		  alert("I am a placeholder");
		}

		```

		Las funciones son bloques de código reutilizables que puedes escribir una vez y ejecutar una y otra vez, ahorrando la necesidad de seguir repitiendo el código todo el tiempo. 

		Esto es realmente útil. 

		Hay varias formas de definir funciones, pero por ahora nos concentraremos en un tipo simple.

		Aquí hemos definido una función utilizando la palabra clave 'función', seguida de un nombre, con paréntesis después. 

		Después de eso, ponemos dos llaves ({ }). 

		Dentro de las llaves va todo el código que queremos ejecutar cada vez que llamamos a la función.

		Cuando queramos ejecutar el código, escribimos el nombre de la función seguido del paréntesis.

		Intentemos eso ahora. 

		Guarde su código y actualice la página en su navegador. 

		Luego vaya a la consola JavaScript de herramientas de desarrollador e ingrese la siguiente línea:

		```js

		checkGuess();

		```

		Después de presionar Retorno/Entrar, debería aparecer una alerta que dice Soy un marcador de posición; Hemos definido una función en nuestro código que crea una alerta cada vez que la llamamos.


	Operadores: 	

		Permiten realizar pruebas, hacer cálculos, unir cadenas y otras cosas similares.

		Operadores aritméticos como:

			Suma: +

				6+9

			Resta: -

				20 - 15

			Multiplicación: *

				3 * 7

			División: /

				10 / 5


		También hay algunos operadores de acceso directo disponibles, llamados operadores de asignación compuesta. 

		Por ejemplo, si desea agregar un número nuevo a uno existente y devolver el resultado, puede hacer esto:

		```js

		let number1 = 1;
		number1 += 2;

		```

		Esto es equivalente a:

		```js

		let number2 = 1;
		number2 = number2 + 2;

		```

		Cuando ejecutamos pruebas de verdadero/falso (por ejemplo, dentro de condicionales, ver más abajo), utilizamos operadores de comparación:

		Igualdad estricta: ===

			5 === 2 + 4 // false
			'Chris' === 'Bob' // false
			5 === 2 + 3 // true
			2 === '2' // false; number versus string

		No igual/distinto: !==

			5 !== 2 + 4 // true
			'Chris' !== 'Bob' // true
			5 !== 2 + 3 // false
			2 !== '2' // true; number versus string
			
		Menor que: <

			6 < 10 // true
			20 < 10 // false

		Mayor que: >

			6 > 10 // false
			20 > 10 // true


	Cadenas de Texto: 

		Se utilizan para representar texto. 

		Puede declarar cadenas usando comillas dobles (") o comillas simples ('), pero debe usar la misma forma para el inicio y el final de una declaración de cadena única: no puede escribir.

		También puede declarar cadenas usando comillas invertidas (`). 

		Las cadenas declaradas de esta manera se denominan literales de plantilla (Template Literals) y tienen algunas propiedades especiales. 

		En particular, puedes incrustar otras variables o incluso expresiones en ellas.

		```js

		const name = "Mahalia";

		const greeting = `Hello ${name}`;

		```

		Esto le proporciona un mecanismo para unir cadenas.


	Condicionales: 

		Volviendo a nuestra función checkGuess(), queremos que compruebe si la suposición de un jugador es correcta o no y responda adecuadamente.

		```js

		function checkGuess() {
		  const userGuess = Number(guessField.value);
		  if (guessCount === 1) {
		    guesses.textContent = "Previous guesses:";
		  }
		  guesses.textContent = `${guesses.textContent} ${userGuess}`;

		  if (userGuess === randomNumber) {
		    lastResult.textContent = "Congratulations! You got it right!";
		    lastResult.style.backgroundColor = "green";
		    lowOrHi.textContent = "";
		    setGameOver();
		  } else if (guessCount === 10) {
		    lastResult.textContent = "!!!GAME OVER!!!";
		    lowOrHi.textContent = "";
		    setGameOver();
		  } else {
		    lastResult.textContent = "Wrong!";
		    lastResult.style.backgroundColor = "red";
		    if (userGuess < randomNumber) {
		      lowOrHi.textContent = "Last guess was too low!";
		    } else if (userGuess > randomNumber) {
		      lowOrHi.textContent = "Last guess was too high!";
		    }
		  }

		  guessCount++;
		  guessField.value = "";
		  guessField.focus();
		}

		```

		1. La primera línea declara una variable llamada 'userGuess' y establece su valor en el valor actual ingresado dentro del campo de texto. 

		También ejecutamos este valor a través del constructor 'Number()' incorporado, solo para asegurarnos de que el valor sea definitivamente un número. 

		Como no cambiaremos esta variable, la declararemos usando 'const'.

		
		2. A continuación, nos encontramos con nuestro primer bloque de código condicional.

		Un bloque de código condicional le permite ejecutar código de forma selectiva, dependiendo de si una determinada condición es verdadera o no.  

		La forma más simple de bloque condicional comienza con la palabra clave 'if', luego algunos paréntesis y luego algunas llaves. 

		Dentro del paréntesis, incluimos una prueba. 

		Si la prueba devuelve verdadero, ejecutamos el código dentro de las llaves.

		Si no, no lo hacemos y pasamos al siguiente fragmento de código. 

		En este caso, la prueba prueba si la variable 'SupoCount' es igual a 1 (es decir, si este es el primer intento del jugador o no).


		```js

		guessCount === 1;


		```

		Si es así, hacemos que el contenido del texto del párrafo de conjeturas sea igual a Conjeturas anteriores:. Si no, no lo hacemos.


		3. A continuación, utilizamos una plantilla literal para agregar el valor actual de 'userGuess' al final del párrafo de conjeturas, con un espacio en blanco en el medio.


		4. El siguiente bloque realiza algunas comprobaciones:

			1. El primero if (){ } comprueba si la suposición del usuario es igual al número aleatorio establecido en la parte superior de nuestro JavaScript. 

			Si es así, el jugador ha adivinado correctamente y el juego ha ganado, por lo que le mostramos al jugador un mensaje de felicitación con un bonito color verde, borramos el contenido del cuadro de información de conjetura baja/alta y ejecutamos una función llamada 'setGameOver()'. 


		 	2. Ahora hemos encadenado otra prueba al final de la última usando una estructura else if (){ }. 

		 	Éste comprueba si este turno es el último turno del usuario. 

		 	Si es así, el programa hace lo mismo que en el bloque anterior, excepto que muestra un mensaje de fin del juego en lugar de un mensaje de felicitación.

			
			3. El último bloque encadenado al final de este código (el else { }) contiene código que solo se ejecuta si ninguna de las otras dos pruebas devuelve verdadero (es decir, el jugador no acertó, pero le quedan más conjeturas). 

			En este caso, les decimos que están equivocados, luego realizamos otra prueba condicional para verificar si la suposición fue mayor o menor que la respuesta, mostrando un mensaje adicional según corresponda para decirles mayor o menor.

		
		5. Las últimas tres líneas de la función (líneas 26 a 28 anteriores) nos preparan para enviar la siguiente suposición.

		Agregamos 1 a la variable supongoCount para que el jugador agote su turno (++ es una operación de incremento: incrementa en 1), vaciamos el valor del campo de texto del formulario y lo enfocamos nuevamente, listo para ingresar la siguiente conjetura.		


	Eventos: 

		En este punto, tenemos una función checkGuess() muy bien implementada, pero no hará nada porque aún no la hemos llamado.

		Idealmente, queremos llamarlo cuando se presiona el botón "Submit Guess", y para hacerlo necesitamos usar un evento. 

		Los eventos son cosas que suceden en el navegador (se hace clic en un botón, se carga una página, se reproduce un video, etc.) en respuesta a las cuales podemos ejecutar bloques de código. 

		Los detectores de eventos observan eventos específicos y llaman a controladores de eventos, que son bloques de código que se ejecutan en respuesta a la activación de un evento.

		Agregue la siguiente línea debajo de su función checkGuess():

		```js

		guessSubmit.addEventListener("click", checkGuess);

		```

		Aquí agregamos un detector de eventos al botón 'guessSubmit'.

		Este es un método que toma dos valores de entrada (llamados argumentos): el tipo de evento que estamos escuchando (en este caso, hacer clic) como una cadena y el código que queremos ejecutar cuando ocurra el evento (en este caso, 'checkGuess()' función). 

		Tenga en cuenta que no necesitamos especificar los paréntesis al escribirlo dentro de 'addEventListener()'.

		Intente guardar y actualizar su código ahora y su ejemplo debería funcionar, hasta cierto punto. 

		El único problema ahora es que si adivinas la respuesta correcta o te quedas sin conjeturas/intentos, el juego se interrumpirá porque aún no hemos definido la función 'setGameOver()' que se supone debe ejecutarse una vez finalizado el juego. 

		Agreguemos el código que falta ahora y completemos la funcionalidad del ejemplo.


	Finalizando el código: 

		Agregamos la función 'setGameOver()'

		```js

		function setGameOver() {
		  guessField.disabled = true;
		  guessSubmit.disabled = true;
		  resetButton = document.createElement("button");
		  resetButton.textContent = "Start new game";
		  document.body.append(resetButton);
		  resetButton.addEventListener("click", resetGame);
		}

		```		

		1. Las dos primeras líneas deshabilitan la entrada de texto del formulario y el botón configurando sus propiedades deshabilitadas en verdadero. 

		Esto es necesario, porque si no lo hiciéramos, el usuario podría enviar más conjeturas/intentos una vez finalizado el juego, lo que arruinaría las cosas.


		2. Las siguientes tres líneas generan un nuevo elemento <button>, configuran su etiqueta de texto como "Iniciar nuevo juego" y lo agregan al final de nuestro HTML existente.


		3. La última línea configura un detector de eventos en nuestro nuevo botón para que cuando se haga clic en él, se ejecute una función llamada 'resetGame()'.


	Necesitamos definirla:

		```js

		function resetGame() {
		  guessCount = 1;

		  const resetParas = document.querySelectorAll(".resultParas p");
		  for (const resetPara of resetParas) {
		    resetPara.textContent = "";
		  }

		  resetButton.parentNode.removeChild(resetButton);

		  guessField.disabled = false;
		  guessSubmit.disabled = false;
		  guessField.value = "";
		  guessField.focus();

		  lastResult.style.backgroundColor = "white";

		  randomNumber = Math.floor(Math.random() * 100) + 1;
		}

		```

		Este bloque de código bastante largo restablece completamente todo a cómo estaba al comienzo del juego, para que el jugador pueda intentarlo de nuevo.

		1. Vuelve a poner el número de conjeturas en 1.

		2. Vacía todo el texto de los párrafos de información. 
		Seleccionamos todos los párrafos dentro de <div class="resultParas"></div>, luego recorremos cada uno de ellos, configurando su contenido de texto en '' (una cadena vacía).

		3. Elimina el botón de reinicio de nuestro código.

		4. Habilita los elementos del formulario y vacía y enfoca el campo de texto, listo para ingresar una nueva suposición.

		5. Elimina el color de fondo del último párrafo de Resultado.

		6. Genera un nuevo número aleatorio para que no vuelvas a adivinar el mismo número

		En este punto, el juego es completamente funcional. 


	Loops/Bucles: 

		Una parte del código anterior que debemos analizar con más detalle es el bucle for...of. 

		Te permiten seguir ejecutando un fragmento de código una y otra vez, hasta que se cumpla una determinada condición.

		En la consola JavaScript de las herramientas de desarrollador de su navegador e ingrese:

		```js

		const fruits = ["apples", "bananas", "cherries"];
		for (const fruit of fruits) {
		  console.log(fruit);
		}

		```

		Las cadenas 'manzanas', 'plátanos', 'cerezas' se imprimieron en su consola.

		Esto se debe al bucle. 

		La línea const frutas = ['manzanas', 'plátanos', 'cerezas']; crea una matriz.

		Una matriz es una colección de elementos (en este caso cadenas).

		Un bucle for...of le brinda una manera de obtener cada elemento de la matriz y ejecutar JavaScript en él. 

		La línea para (const fruta de frutas) dice:

			1. Consigue el primer artículo en frutas.
		
			2. Establezca la variable de fruta en ese elemento, luego ejecute el código entre las llaves {}.
		 	
		 	3. Obtenga el siguiente elemento en frutas y repita 2 hasta llegar al final de las frutas.

		En este caso, el código dentro de las llaves escribe fruta en la consola.

		Ahora veamos el bucle en nuestro juego de adivinanzas numéricas: 

		lo siguiente se puede encontrar dentro de la función resetGame():

		```js

		const resetParas = document.querySelectorAll(".resultParas p");
		for (const resetPara of resetParas) {
		  resetPara.textContent = "";
		}

		```

		Este código crea una variable que contiene una lista de todos los párrafos dentro de <div class="resultParas"> usando el método 'querySelectorAll()', luego recorre cada uno de ellos, eliminando el contenido de texto de cada uno.

		Tenga en cuenta que aunque 'resetPara' es una constante, podemos cambiar sus propiedades internas como 'textContent'.


	Objetos: 

		Agreguemos una mejora final más antes de llegar a esta discusión.

		Agregue la siguiente línea justo debajo de 'let resetButton;' cerca de la parte superior de su JavaScript, luego guarde su archivo

		```js
		
		guessField.focus();

		```

		Esta línea utiliza el método 'focus()' para colocar automáticamente el cursor de texto en el campo de texto <input> tan pronto como se carga la página, lo que significa que el usuario puede comenzar a escribir su primera suposición de inmediato, sin tener que hacer clic primero en el campo del formulario. 

		Es sólo una pequeña adición, pero mejora la usabilidad, dándole al usuario una buena pista visual sobre lo que debe hacer para jugar.

		Analicemos lo que está pasando aquí con un poco más de detalle.

		En JavaScript, la mayoría de los elementos que manipularás en tu código son objetos. 

		Un objeto es una colección de funciones relacionadas almacenadas en un único grupo. 

		Puedes crear tus propios objetos, pero eso avanzado.

		Por ahora, analizaremos brevemente los objetos integrados que contiene su navegador, que le permiten hacer muchas cosas útiles.

		En este caso particular, primero creamos una constante 'guessField' que almacena una referencia al campo del formulario de entrada de texto en nuestro HTML; la siguiente línea se puede encontrar entre nuestras declaraciones cerca de la parte superior del código.

		```js

		const guessField = document.querySelector(".guessField");

		```

		Para obtener esta referencia, utilizamos el método 'querySelector()' del objeto de documento. querySelector() toma una pieza de información: un selector CSS que selecciona el elemento al que desea hacer referencia.

		Debido a que 'guessField' ahora contiene una referencia a un elemento <input>, ahora tiene acceso a una serie de propiedades (básicamente variables almacenadas dentro de objetos, algunas de las cuales no pueden cambiar sus valores) y métodos (básicamente funciones almacenadas dentro de objetos). 

		Un método disponible para ingresar elementos es 'focus()', por lo que ahora podemos usar esta línea para enfocar la entrada de texto.

		```js

		guessField.focus();

		```

		Las variables que no contienen referencias a elementos de formulario no tendrán focus() disponible. 

		Por ejemplo, la constante de guesses contiene una referencia a un elemento <p> y la variable guessCount contiene un número.



	Ejecutando objetos en el navegador: 

		En la consola de las herramientas para desarrolladores:
		
		1, Escriba guessField en la consola y la consola le mostrará que la variable contiene un elemento <input>. 

		También notarás que la consola completa automáticamente los nombres de los objetos que existen dentro del entorno de ejecución, ¡incluidas tus variables!
		

		2. Ahora escribe lo siguiente

		```js

		guessField.value = 2;


		```

		La propiedad de valor representa el valor actual ingresado en el campo de texto. 

		Verás que al ingresar este comando, ¡hemos cambiado el texto en el campo de texto!


		3. Ahora intenta escribir guesses/intentos en la consola y presionar Enter (o Return, dependiendo de tu teclado). 

		La consola le muestra que la variable contiene un elemento <p>.
		

		4. Ahora intenta ingresar la siguiente línea:

		```js

		guesses.value;
			
		```

		El navegador devuelve indefinido porque los párrafos no tienen la propiedad de valor.

		
		5. Para cambiar el texto dentro de un párrafo, necesita la propiedad textContent. Prueba esto:

		```js

		guesses.textContent = "Where is my paragraph?";


		```

		
		8. Ahora algunas cosas divertidas. 

		Intente ingresar las líneas siguientes, una por una:

		```js

		guesses.style.backgroundColor = "yellow";
		guesses.style.fontSize = "200%";
		guesses.style.padding = "10px";
		guesses.style.boxShadow = "3px 3px 6px black";


		```

		Cada elemento de una página tiene una propiedad de estilo, que a su vez contiene un objeto cuyas propiedades contienen todos los estilos CSS en línea aplicados a ese elemento. 

		Esto nos permite establecer dinámicamente nuevos estilos CSS en elementos usando JavaScript.



|| Errores
	
	Cuando un programa no funciona podemos repasar una serie de cosas para resolver errores. 


	Tipos de error:

		En términos generales, cuando haces algo mal en el código, te encontrarás con dos tipos principales de errores:


		1. Errores de sintaxis: 

			Son errores ortográficos en su código que en realidad hacen que el programa no se ejecute en absoluto o deje de funcionar a mitad de camino; por lo general, también recibirá algunos mensajes de error. 

			Por lo general, es posible solucionarlos, siempre y cuando esté familiarizado con las herramientas adecuadas y sepa lo que significan los mensajes de error.


		2. Errores lógicos: 

			Errores en los que la sintaxis es realmente correcta pero el código no es lo que pretendía, lo que significa que el programa se ejecuta correctamente pero da resultados incorrectos. 

			Suelen ser más difíciles de corregir que los errores de sintaxis, ya que normalmente no hay un mensaje de error que le dirija al origen del error.


		Bien, entonces no es tan simple: existen otros diferenciadores a medida que profundizas. 
	

	Archivo Erroneo: 

		Cuando tenemos un código que da errores los podemos consultar en la consola del navegador. 


	Corregir Error en Función: 

		Lo que es aún más útil es que la consola le muestra mensajes de error cada vez que existe un error de sintaxis dentro del JavaScript que se introduce en el motor JavaScript del navegador.


		1. Vaya a la pestaña en la que tiene abierto number-game-errors.html y abra su consola JavaScript. 

		Deberías ver un mensaje de error.


		2. La primera línea del mensaje de error es:

		```
		Uncaught TypeError: guessSubmit.addeventListener is not a function
		number-game-errors.html:86:15

		```

		La primera parte, Uncaught TypeError: 

		guessSubmit.addeventListener no es una función, nos dice algo sobre lo que salió mal.
		
		La segunda parte, number-game-errors.html:86:15, nos dice en qué parte del código vino el error: línea 86, carácter 15 del archivo "number-game-errors.html".


		3. Si miramos la línea 86 en nuestro editor de código, encontraremos esta línea.

		Advertencia: Es posible que el mensaje de error no esté en la línea 86.

		Si está utilizando cualquier editor de código con una extensión que inicie un servidor en vivo en su máquina local, esto provocará que se inyecte código adicional.

		Debido a esto, las herramientas de desarrollo indicarán que el error ocurre en una línea que no es 86

		```js

		guessSubmit.addeventListener("click", checkGuess);

		```


		4. El mensaje de error dice "guessSubmit.addeventListener no es una función", lo que significa que el intérprete de JavaScript no reconoce la función que estamos llamando. 

		A menudo, este mensaje de error en realidad significa que hemos escrito algo mal. 

		Si no está seguro de la ortografía correcta de un fragmento de sintaxis, suele ser una buena idea buscar la función en MDN. 

		La mejor manera de hacer esto actualmente es buscar "mdn nombre de característica" con su motor de búsqueda favorito. 

		En este caso es : addEventListener().


		5. Entonces, al mirar esta página, el error parece ser que hemos escrito mal el nombre de la función. 

		Recuerde que JavaScript distingue entre mayúsculas y minúsculas, por lo que cualquier pequeña diferencia en la ortografía o las mayúsculas provocará un error.

		Cambiar addeventListener a addEventListener debería solucionar este problema. Hacer esto ahora.

		Nota: Consulte nuestra página TypeError: "x" no es una función de referencia para obtener más detalles sobre este error.


	Error en Variable: 

		1. Guarde su página y actualice, debería ver que el error desapareció.

		2. Ahora, si intenta ingresar una suposición y presiona el botón Enviar suposición, verá otro error.

		3. Esta vez el error que se informa es:

		```
		Uncaught TypeError: can't access property "textContent", lowOrHi is null

		```

		Dependiendo del navegador que esté utilizando, es posible que vea un mensaje diferente aquí. 

		El mensaje anterior es el que te mostrará Firefox, pero Chrome, por ejemplo, te mostrará esto:

		```
		Uncaught TypeError: Cannot set properties of null (setting 'textContent')

		```

		Es el mismo error, pero diferentes navegadores lo describen de forma diferente.

		Nota: Este error no apareció tan pronto como se cargó la página porque ocurrió dentro de una función (dentro del bloque checkGuess() { }). 

		Como aprenderá con más detalle en nuestro artículo sobre funciones posterior, el código dentro de las funciones se ejecuta en un ámbito separado del código fuera de las funciones. 

		En este caso, el código no se ejecutó y el error no se produjo hasta que se ejecutó la función checkGuess() en la línea 86


		4. El número de línea proporcionado en el error es 80.

		Eche un vistazo a la línea 80 y verá el siguiente código:

		```js

		lowOrHi.textContent = "Last guess was too high!";

		```

		5. Esta línea intenta establecer la propiedad 'textContent' de la variable lowOrHi en una cadena de texto, pero no funciona porque lowOrHi no contiene lo que se supone que contiene. 

		Veamos por qué ocurre esto: intente buscar otras instancias de lowOrHi en el código. 

		La primera instancia que encontrará está en la línea 49:

		```js

		const lowOrHi = document.querySelector("lowOrHi");

		```

		6. En este punto estamos intentando que la variable contenga una referencia a un elemento en el HTML del documento.

		Veamos qué contiene la variable después de ejecutar esta línea.

		Agregue el siguiente código en la línea 50:

		```js

		console.log(lowOrHi);

		```

		Este código imprimirá el valor de lowOrHi en la consola después de que intentamos configurarlo en la línea 49. 

		Consulte console.log() para obtener más información.


		7. Guarde y actualice, y ahora debería ver el resultado de console.log() en su consola.

		Efectivamente, el valor de lowOrHi es nulo en este punto, y esto coincide con el mensaje de error de Firefox lowOrHi es nulo.

		Entonces definitivamente hay un problema con la línea 49. 

		El valor nulo significa "nada" o "sin valor". 

		Entonces nuestro código para establecer lowOrHi en un elemento está fallando.


		8. Pensemos en cuál podría ser el problema. 

		La línea 49 utiliza un método document.querySelector() para obtener una referencia a un elemento seleccionándolo con un selector CSS. 

		Mirando más arriba en nuestra ficha, podemos encontrar el párrafo en cuestión:

		```html

		<p class="lowOrHi"></p>

		```


		9. Así que aquí necesitamos un selector de clase, que comienza con un punto (.), pero el selector que se pasa al método querySelector() en la línea 49 no tiene punto. 

		¡Este podría ser el problema! Intente cambiar lowOrHi a .lowOrHi en la línea 49.


		10. Intente guardar y actualizar nuevamente, y su declaración console.log() debería devolver el elemento <p> que queremos. 

		¡Uf! ¡Otro error solucionado! 

		Puede eliminar su línea console.log() ahora o conservarla para consultarla más adelante: usted elige.

		Nota: consulte nuestra página de referencia TypeError: "x" es (no) "y" para obtener más detalles sobre este error.


	Tercer Error Sintáctico: 


		1. Ahora, si intentas jugar el juego nuevamente, deberías tener más éxito: el juego debería funcionar absolutamente bien, hasta que termines el juego, ya sea adivinando el número correcto o quedándote sin conjeturas.


		2. En ese punto, el juego vuelve a fallar y aparece el mismo error que obtuvimos al principio: "TypeError: resetButton.addeventListener no es una función". 

		Sin embargo, esta vez aparece como procedente de la línea 94.

		
		3. Al observar la línea número 94, es fácil ver que aquí hemos cometido el mismo error.

		Nuevamente solo necesitamos cambiar addeventListener por addEventListener.


	Errores Lógicos: 

		En este punto, el juego debería funcionar bien; sin embargo, después de jugar varias veces, sin duda notarás que el juego siempre elige 1 como el número "aleatorio" que debes adivinar. 

		¡Definitivamente no es exactamente como queremos que se desarrolle el juego!

		Definitivamente hay un problema en la lógica del juego en alguna parte: el juego no devuelve un error; simplemente no está funcionando bien.

		1. Busque la variable randomNumber y las líneas donde se establece por primera vez el número aleatorio. 

		La instancia que almacena el número aleatorio que queremos adivinar al inicio del juego debe estar alrededor de la línea número 45:

		```js

		let randomNumber = Math.floor(Math.random()) + 1;

		```


		2. Y el que genera el número aleatorio antes de cada juego posterior está alrededor de la línea 113.

		```js

		randomNumber = Math.floor(Math.random()) + 1;

		```


		3. Para comprobar si estas líneas son realmente el problema, recurramos nuevamente a nuestro amigo console.log(): inserte la siguiente línea directamente debajo de cada una de las dos líneas anteriores.

		```js

		console.log(randomNumber);

		```


		4. Guarde y actualice, luego juegue algunos juegos; verá que el número aleatorio es igual a 1 en cada punto donde se inicia sesión en la consola.



	A través de la lógica:

		Para solucionar este problema, consideremos cómo funciona esta línea. 

		Primero, invocamos Math.random(), que genera un número decimal aleatorio entre 0 y 1, p.e. 0.5675493843

		```js

		Math.random();

		```

		A continuación, pasamos el resultado de invocar Math.random() a través de Math.floor(), que redondea el número pasado al número entero más cercano. 

		Luego sumamos 1 a ese resultado.


		```js

		Math.floor(Math.random()) + 1;

		```

		Redondear un número decimal aleatorio entre 0 y 1 hacia abajo siempre dará como resultado 0, por lo que agregarle 1 siempre dará como resultado 1. 

		Necesitamos multiplicar el número aleatorio por 100 antes de redondearlo hacia abajo. 

		Lo siguiente nos daría un número aleatorio entre 0 y 99


		```js

		Math.floor(Math.random() * 100);

		```

		De ahí que queramos sumar 1, para darnos un número aleatorio entre 1 y 100.


		Intente actualizar ambas líneas de esta manera, luego guarde y actualice; el juego ahora debería funcionar como lo deseamos.



	Otros errores comúnes: 

		Hay otros errores comunes que encontrarás en tu código. 


		1. Error de sintaxis: falta ';' antes de la declaración

		Este error generalmente significa que ha omitido un punto y coma al final de una de sus líneas de código, pero a veces puede ser más críptico. 

		Por ejemplo, si cambiamos esta línea dentro de la función checkGuess()

		```js

		const userGuess = Number(guessField.value);

		```

		a

		
		```js

		const userGuess === Number(guessField.value);

		```

		Lanza este error porque cree que estás intentando hacer algo diferente. 

		Debe asegurarse de no confundir el operador de asignación (=), que establece que una variable sea igual a un valor, con el operador de igualdad estricta (===), que prueba si un valor es igual a otro y devuelve un resultado verdadero/falso

		Nota: consulte nuestro SyntaxError: missing; Antes de la página de referencia de la declaración para obtener más detalles sobre este error.


	2. El programa siempre dice que has ganado, independientemente del número/intento que introducido.

		Este podría ser otro síntoma de confusión entre los operadores de asignación y de igualdad estricta.

		Por ejemplo, si tuviéramos que cambiar esta línea dentro de checkGuess():

		```js

		if (userGuess === randomNumber) {}

		```

		a


		```js
		
		if (userGuess = randomNumber) {}

		```

		la prueba siempre devolvería verdadero, lo que provocaría que el programa informara que se ganó el juego. ¡Ten cuidado!


		3. SyntaxError: falta ')' después de la lista de argumentos

		Este es bastante simple: generalmente significa que te has perdido el paréntesis de cierre al final de una llamada a una función/método.

		Nota: Consulte nuestra página de referencia Error de sintaxis: falta ')' después de la lista de argumentos para obtener más detalles sobre este error.


		4. Error de sintaxis: falta: después del ID de propiedad

		Este error generalmente se relaciona con un objeto JavaScript formado incorrectamente, pero en este caso logramos obtenerlo cambiando

		```js

		function checkGuess() {

		```

		a


		```js

		function checkGuess( {

		```

		Esto ha provocado que el navegador piense que estamos intentando pasar el contenido de la función a la función como argumento. Ojo con esos paréntesis


		5. SyntaxError: falta } después del cuerpo de la función

		Esto es fácil: generalmente significa que se te ha escapado una de las llaves de una función o estructura condicional. 

		Recibimos este error al eliminar una de las llaves de cierre cerca de la parte inferior de la función checkGuess()


		6. SyntaxError: expresión esperada, obtuvo 'cadena' o SyntaxError: literal de cadena no terminada

		Estos errores generalmente significan que omitiste las comillas de apertura o cierre de un valor de cadena. 

		En el primer error anterior, la cadena se reemplazaría con los caracteres inesperados que encontró el navegador en lugar de una comilla al comienzo de una cadena.

		El segundo error significa que la cadena no ha terminado con comillas.

		Para todos estos errores, piense en cómo abordamos los ejemplos que vimos en el tutorial. 

		Cuando surja un error, mire el número de línea que le dieron, vaya a esa línea y vea si puede detectar qué está mal. 

		Tenga en cuenta que el error no necesariamente estará en esa línea, y también que el error podría no ser causado exactamente por el mismo problema que citamos anteriormente.

		Nota: Consulte nuestras páginas de referencia SyntaxError: token inesperado y SyntaxError: literal de cadena no terminada para obtener más detalles sobre estos errores.




|| Variables
	
	Almacenamiento de información. 

	Una variable es un contenedor de un valor, como un número que podríamos usar en una suma o una cadena que podríamos usar como parte de una oración.

	```html
	
	<button id="button_A">Press me</button>
	<h3 id="heading_A"></h3>

	```


	```js

	const buttonA = document.querySelector("#button_A");
	const headingA = document.querySelector("#heading_A");

	buttonA.onclick = () => {
	  const name = prompt("What is your name?");
	  alert(`Hello ${name}, nice to see you!`);
	  headingA.textContent = `Welcome ${name}`;
	};


	```

	Al presionar el botón se ejecuta algún código. 

	La primera línea muestra un cuadro en la pantalla que le pide al lector que ingrese su nombre y luego almacena el valor en una variable. 

	La segunda línea muestra un mensaje de bienvenida que incluye su nombre, tomado del valor de la variable y la tercera línea muestra ese nombre en la página.


	Sin variables: 

		No sería posible escribir buen código. 

		```html
		<button id="button_B">Press me</button>
		<h3 id="heading_B"></h3>

		```

		```js

		const buttonB = document.querySelector("#button_B");
		const headingB = document.querySelector("#heading_B");

		buttonB.onclick = () => {
		  alert(`Hello ${prompt("What is your name?")}, nice to see you!`);
		  headingB.textContent = `Welcome ${prompt("What is your name?")}`;
		};


		```

		Si no tuviéramos variables disponibles, ¡tendríamos que pedirle al lector su nombre cada vez que necesitáramos usarlo!

		Las variables simplemente tienen sentido y, a medida que aprenda más sobre JavaScript, comenzarán a convertirse en algo natural.

		Una característica especial de las variables es que pueden contener prácticamente cualquier cosa, no sólo cadenas y números. 

		Las variables también pueden contener datos complejos e incluso funciones completas para hacer cosas asombrosas. 

		Aprenderá más sobre esto a medida que avance.

		Nota: Decimos que las variables contienen valores. 

		Ésta es una distinción importante que debemos hacer. 

		Las variables no son los valores en sí; son contenedores de valores. 


	Declarar Varible: 

		Para usar una variable, primero debe crearla; más exactamente, a esto lo llamamos declarar la variable. 

		Para ello escribimos la palabra clave 'let' seguida del nombre con el que queremos llamar a nuestra variable

		Aquí estamos creando dos variables llamadas miNombre y miEdad.

		Intente escribir estas líneas en la consola de su navegador web. Después de eso, intente crear una variable (o dos) con sus propias opciones de nombre.

		Nota: En JavaScript, todas las instrucciones de código deben terminar con un punto y coma (;); su código puede funcionar correctamente para líneas individuales, pero probablemente no lo hará cuando escriba varias líneas de código juntas. 

		Puede probar si estos valores existen ahora en el entorno de ejecución escribiendo solo el nombre de la variable, por ejemplo.

		Actualmente no tienen valor; Son contenedores vacíos. 

		Cuando ingresa los nombres de las variables, debería obtener un valor 'indefinido'. 

		Si no existen, recibirá un mensaje de error; intente escribir

		Nota: No confunda una variable que existe pero que no tiene un valor definido con una variable que no existe en absoluto; son cosas muy diferentes. 

		En la analogía del cuadro que vio arriba, no existir significaría que no hay un contenedor/caja (variable) para que entre un valor. 

		Ningún valor definido significaría que hay un contenedor, pero no tiene ningún valor dentro.

		```js
		let myName;
		let myAge;
		
		myName;
		myAge;

		scoobyDoo;

		```


	Inicializar variables: 

		Una vez que haya declarado una variable, puede inicializarla con un valor. 

		Para ello, escriba el nombre de la variable, seguido de un signo igual (=), seguido del valor que desea asignarle. Por ejemplo

		Intente volver a la consola ahora y escribir estas líneas. Deberías ver el valor que has asignado a la variable devuelta en la consola para confirmarlo, en cada caso.

		Nuevamente, puede devolver los valores de sus variables escribiendo su nombre en la consola; inténtelo nuevamente

		Puedes declarar e inicializar una variable al mismo tiempo, así

		Probablemente esto es lo que harás la mayor parte del tiempo, ya que es más rápido que realizar las dos acciones en dos líneas separadas.

		```js

		myName = "Chris";
		myAge = 37;

		myName;
		myAge;

		let myDog = "Rover";

		```


	Palabra clave 'var': 

		Probablemente también verás una forma diferente de declarar variables, usando la palabra clave var.

		```
		var myName;
		var myAge;

		```

		Cuando se creó JavaScript por primera vez, esta era la única forma de declarar variables. 

		El diseño de var es confuso y propenso a errores. 

		Entonces se creó let en las versiones modernas de JavaScript, una nueva palabra clave para crear variables que funciona de manera algo diferente a var, solucionando sus problemas en el proceso.

		A continuación se explican un par de diferencias simples. 

		Para empezar, si escribe un programa JavaScript multilínea que declara e inicializa una variable, puede declarar una variable con var después de inicializarla y seguirá funcionando. 

		Por ejemplo:

		```js

		myName = "Chris";

		function logName() {
		  console.log(myName);
		}

		logName();

		var myName;

		```

		Nota: Esto no funcionará cuando se escriben líneas individuales en una consola de JavaScript, solo cuando se ejecutan varias líneas de JavaScript en un documento web.

		Esto funciona gracias al levantamiento; lea var hoisting.

		La elevación ya no funciona con let. 

		Si cambiamos var para permitir el ejemplo anterior, fallaría con un error. 

		Esto es bueno: declarar una variable después de inicializarla da como resultado un código confuso y más difícil de entender.

		En segundo lugar, cuando usas var, puedes declarar la misma variable tantas veces como quieras, pero con let no puedes. 

		Lo siguiente funcionaría

		```
		var myName = "Chris";
		var myName = "Bob";

		```

		Pero lo siguiente arrojaría un error en la segunda línea:

		```
		let myName = "Chris";
		let myName = "Bob";

		```

		Tendrías que hacer esto en su lugar:

		```
		let myName = "Chris";
		myName = "Bob";

		```

		Una vez más, se trata de una decisión lingüística sensata. 

		No hay ninguna razón para redeclarar variables; simplemente hace las cosas más confusas.

		Por estos motivos y más, le recomendamos que utilice let en su código, en lugar de var. 

		A menos que esté escribiendo explícitamente soporte para navegadores antiguos, ya no hay ninguna razón para usar var ya que todos los navegadores modernos admiten let desde 2015.

		Nota: Si está probando este código en la consola de su navegador, prefiera copiar y pegar cada uno de los bloques de código aquí en su totalidad. 

		Hay una función en la consola de Chrome donde se permiten nuevas declaraciones variables con let y const.		


	Actualizar Variables: 

		Una vez que una variable se ha inicializado con un valor, puede cambiar (o actualizar) ese valor dándole un valor diferente. 

		Intente ingresar las siguientes líneas en su consola:

		```
		myName = "Bob";
		myAge = 40;

		```

		Un comentario aparte sobre las reglas de nomenclatura de variables

		Puedes llamar a una variable prácticamente como quieras, pero existen limitaciones.

		Generalmente, debes limitarte a usar caracteres latinos (0-9, a-z, A-Z) y el carácter de subrayado.

		 1. No debes utilizar otros caracteres porque pueden causar errores o ser difíciles de entender para una audiencia internacional.

		 2. No utilice guiones bajos al comienzo de los nombres de las variables; esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede resultar confuso.

		 3. No utilice números al comienzo de las variables. Esto no está permitido y provoca un error.

		 4. Una convención segura a seguir es la minúscula camell, donde se unen varias palabras, se usan minúsculas para la primera palabra completa y luego se escriben con mayúscula las siguientes. Hemos estado usando esto para los nombres de nuestras variables en el artículo hasta ahora.

		 5. Haga que los nombres de las variables sean intuitivos, de modo que describan los datos que contienen. No utilices sólo letras o números sueltos ni frases largas y largas.

		 6. Las variables distinguen entre mayúsculas y minúsculas, por lo que myage es una variable diferente de myAge.

		 7. Un último punto: también debes evitar el uso de palabras reservadas de JavaScript como nombres de variables; con esto nos referimos a las palabras que componen la sintaxis real de JavaScript. Por lo tanto, no puedes usar palabras como var, function, let y for como nombres de variables. Los navegadores los reconocen como elementos de código diferentes, por lo que obtendrás errores.

	
	Tipos de variables:

		Hay algunos tipos diferentes de datos que podemos almacenar en variables. 


		Números:

			Puede almacenar números en variables, ya sean números enteros como 30 (también llamados números enteros) o números decimales como 2,456 (también llamados números flotantes o números de punto flotante). 

			No es necesario declarar tipos de variables en JavaScript, a diferencia de otros lenguajes de programación. Cuando le das a una variable un valor numérico, no incluyes comillas

			```js

			let myAge = 17;

			```


		Cadenas/strings:

			Las cadenas son fragmentos de texto. 

			Cuando le asigna a una variable un valor de cadena, debe encerrarlo entre comillas simples o dobles; de lo contrario, JavaScript intenta interpretarlo como otro nombre de variable.

			```js

			let dolphinGoodbye = "So long and thanks for all the fish";

			```


		booleanos:

			Los booleanos son valores verdadero/falso; pueden tener dos valores, verdadero o falso. 

			Generalmente se utilizan para probar una condición, después de lo cual el código se ejecuta según corresponda.

			Así, por ejemplo, un caso sencillo sería

			```
			let iAmAlive = true;

			```
			
			Mientras que en realidad se usaría más así.

			```js

			let test = 6 < 3;

			```

			Esto utiliza el operador "menor que" (<) para probar si 6 es menor que 3. 

			Como es de esperar, devuelve falso, ¡porque 6 no es menor que 3!


		Matrices/Arrays

			Una matriz es un objeto único que contiene múltiples valores encerrados entre corchetes y separados por comas. 

			Intente ingresar las siguientes líneas en su consola:

			```
			let myNameArray = ["Chris", "Bob", "Jim"];
			
			let myNumberArray = [10, 15, 40];

			```

			Una vez definidas estas matrices, puede acceder a cada valor por su ubicación dentro de la matriz. 

			Prueba estas líneas:

			```
			myNameArray[0]; // should return 'Chris'
			
			myNumberArray[2]; // should return 40

			```

			Los corchetes especifican un valor de índice correspondiente a la posición del valor que desea devolver.

			Es posible que hayas notado que las matrices en JavaScript tienen un índice cero: el primer elemento está en el índice 0.

		
		Objetos:

			En programación, un objeto es una estructura de código que modela un objeto de la vida real. 

			Puedes tener un objeto simple que represente una caja y contenga información sobre su ancho, largo y alto, o podrías tener un objeto que represente a una persona y contenga datos sobre su nombre, altura, peso, qué idioma habla, cómo para saludarlos y más.

			Intente ingresar la siguiente línea en su consola

			```js

			let dog = { name: "Spot", breed: "Dalmatian" };

			```

			Para recuperar la información almacenada en el objeto, puede utilizar la siguiente sintaxis 

			```
			dog.name;

			```


	Tipado dinámico:

		JavaScript es un "lenguaje de tipo dinámico", lo que significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá una variable (números, cadenas, matrices, etc.).

		Por ejemplo, si declara una variable y le da un valor entre comillas, el navegador trata la variable como una cadena.

		```js

		let myString = "Hello";

		```

		Incluso si el valor entre comillas es solo dígitos, sigue siendo una cadena, no un número, así que tenga cuidado.

		```js

		let myNumber = "500"; // oops, this is still a string
		typeof myNumber;
		myNumber = 500; // much better — now this is a number
		typeof myNumber;

		```

		Intente ingresar las cuatro líneas anteriores en su consola una por una y vea cuáles son los resultados. 

		Notarás que estamos usando un operador especial llamado typeof: esto devuelve el tipo de datos de la variable que escribes después.

		La primera vez que se llama, debería devolver una cadena, ya que en ese momento la variable myNumber contiene una cadena, '500'. 

		Eche un vistazo y vea qué devuelve la segunda vez que lo llama.


	Constantes en JavaScript:

		Además de las variables, puedes declarar constantes. Son como variables, excepto que:

			debes inicializarlos cuando los declares
			
			no puede asignarles un nuevo valor después de haberlos inicializado.

		Por ejemplo, usando let puedes declarar una variable sin inicializarla.

		```
		let count;

		```

		Si intentas hacer esto usando const verás un error:

		```
		const count;

		```

		De manera similar, con let puedes inicializar una variable y luego asignarle un nuevo valor, esto también se llama reasignar la variable

		```
		let count = 1;
		count = 2;

		```

		Si intentas hacer esto usando const verás un error

		```
		const count = 1;
		count = 2;

		```

		Tenga en cuenta que, aunque una constante en JavaScript siempre debe nombrar el mismo valor, puede cambiar el contenido del valor que nombra. 

		Esta no es una distinción útil para tipos simples como números o booleanos, pero considere un objeto

		```js

		const bird = { species: "Kestrel" };
		console.log(bird.species); // "Kestrel"

		```

		Puede actualizar, agregar o eliminar propiedades de un objeto declarado usando const, porque aunque el contenido del objeto haya cambiado, la constante sigue apuntando al mismo objeto.

		```
		bird.species = "Striated Caracara";
		
		console.log(bird.species); // "Striated Caracara"

		```


	Cuándo usar const y cuándo usar let:

		Si no puedes hacer tanto con const como con let, ¿por qué preferirías usarlo en lugar de let? De hecho, const es muy útil. 

		Si usa const para nombrar un valor, le dice a cualquiera que mire su código que este nombre nunca se asignará a un valor diferente. 

		Cada vez que vean este nombre, sabrán a qué se refiere.

		En este curso, adoptamos el siguiente principio sobre cuándo usar let y cuándo usar const:

		Utilice const cuando pueda y let cuando sea necesario.

		Esto significa que si puedes inicializar una variable cuando la declaras y no necesitas reasignarla más tarde, conviértela en una constante.



|| Números y operadores

	Para realizar operaciones entre los objetos de JS. 

	Gran parte de la programación se basa en procesar datos numéricos, calcular nuevos valores, etc.

	JavaScript tiene disponible un conjunto completo de funciones matemáticas.


	Tipos de numeros:

		En programación, incluso el humilde sistema numérico decimal que todos conocemos tan bien es más complicado de lo que piensas.

		Usamos diferentes términos para describir diferentes tipos de números decimales, por ejemplo:

		Los números enteros: 

			son números sin parte fraccionaria. 

			Pueden ser positivos o negativos, p.e. 10, 400 o -5.
		
		Los números de coma flotante:

			(flotantes) tienen puntos decimales y lugares decimales, por ejemplo 12,5 y 56,7786543.


		¡Incluso tenemos diferentes tipos de sistemas numéricos! El decimal es base 10 (lo que significa que usa del 0 al 9 en cada dígito), pero también tenemos cosas como:

		Binario: 

			el lenguaje de nivel más bajo de las computadoras; 0 y 1.
		
		Octal: 

			base 8, utiliza del 0 al 7 en cada dígito.

		Hexadecimal: 

			base 16, utiliza del 0 al 9 y luego de la a a la f en cada dígito. 

		Es posible que haya encontrado estos números antes al configurar colores en CSS.

		Antes de que empieces a preocuparte porque tu cerebro se derrita, ¡detente ahí mismo! Para empezar, nos limitaremos a los números decimales a lo largo de este curso; Rara vez te encontrarás con la necesidad de empezar a pensar en otros tipos, si es que alguna vez lo haces.

		La segunda buena noticia es que, a diferencia de otros lenguajes de programación, JavaScript solo tiene un tipo de datos para números, tanto enteros como decimales; lo has adivinado, Número. 

		Esto significa que sea cual sea el tipo de números con los que esté trabajando en JavaScript, los manejará exactamente de la misma manera.

		Nota: En realidad, JavaScript tiene un segundo tipo de número, BigInt, que se utiliza para números enteros muy, muy grandes.


	Todos números:

		Ingrese en la consola JavaScript de sus herramientas de desarrollador.

		1. En primer lugar, declaremos un par de variables e inicialicémoslas con un número entero y un flotante, respectivamente, luego escribamos los nombres de las variables nuevamente para verificar que todo esté en orden.

		```js

		const myInt = 5;
		const myFloat = 6.667;
		myInt;
		myFloat;

		```


		2. Los valores numéricos se escriben sin comillas; intente declarar e inicializar un par de variables más que contengan números antes de continuar.


		3. Ahora verifiquemos que nuestras dos variables originales sean del mismo tipo de datos. 

		Hay un operador llamado typeof en JavaScript que hace esto. Ingrese las dos líneas siguientes como se muestra:

		```js

		typeof myInt;
		typeof myFloat;

		```

		Debería obtener "número" en ambos casos; esto nos facilita mucho las cosas que si diferentes números tuvieran diferentes tipos de datos y tuviéramos que tratarlos de diferentes maneras. 



	Métodos numéricos útiles:

		El objeto 'Número', una instancia del cual representa todos los números estándar que usará en su JavaScript, tiene varios métodos útiles disponibles para manipular números. 

		Ir a las páginas de referencia de objetos y aprender más sobre lo que está disponible.

		Por ejemplo, para redondear su número a un número fijo de decimales, utilice el método toFixed(). 

		```js

		const lotsOfDecimal = 1.766584958675746364;
		lotsOfDecimal;
		const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
		twoDecimalPlaces;

		```


	Conversión a tipos de datos numéricos:

		A veces es posible terminar con un número almacenado como un tipo de cadena, lo que dificulta la realización de cálculos con él.

		Esto sucede más comúnmente cuando se ingresan datos en un formulario y el tipo de entrada es texto. 

		Hay una manera de resolver este problema: pasar el valor de la cadena al constructor Number() para devolver una versión numérica del mismo valor.

		Por ejemplo, intenta escribir estas líneas en tu consola

		```js

		let myNumber = "74";
		myNumber += 3;

		```

		Terminas con el resultado 743, no 77, porque myNumber en realidad está definido como una cadena.

		Puedes probar esto escribiendo lo siguiente

		```js

		typeof myNumber;

		```

		Para arreglar el cálculo, puedes hacer esto:

		```js

		let myNumber = "74";
		myNumber = Number(myNumber) + 3;

		```

		El resultado es entonces 77, como se esperaba inicialmente.


	Operadores aritméticos:

		Se utilizan para realizar cálculos matemáticos en JavaScript.

		Suma: +
			
			Suma dos números juntos


		Sustracción: -
			
			Resta el número derecho del izquierdo.


		Multiplicación: *
			
			Multiplica dos números juntos.


		División: /
			
			Divide el número de la izquierda por el de la derecha.


		Resto (a veces llamado módulo): %

			Devuelve el resto que queda después de haber dividido el número de la izquierda en un número de partes enteras igual al número de la derecha.

			8 % 3 (devuelve 2, ya que tres entra en 8 dos veces, dejando 2 sobrantes).


		Exponente:
			
			Eleva un número base a la potencia del exponente, es decir, el número base multiplicado por sí mismo, multiplicado por el exponente.

		 	5 ** 2 (devuelve 25, que es lo mismo que 5 * 5).


		Nota: A veces verás números involucrados en la aritmética denominados operandos.

		Nota: Es posible que a veces veas exponentes expresados ​​utilizando el método antiguo Math.pow(), que funciona de forma muy similar. 

		Por ejemplo, en Math.pow(7, 3), 7 es la base y 3 es el exponente, por lo que el resultado de la expresión es 343. Math.pow(7, 3) equivale a 7**3.

		Intente ingresar los ejemplos a continuación en la consola JavaScript.


		1. Primero intente ingresar algunos ejemplos simples propios, como:

		```
		10 + 7;
		9 * 8;
		60 % 3;

		```


		2. También puede intentar declarar e inicializar algunos números dentro de las variables e intentar usarlos en las sumas; las variables se comportarán exactamente como los valores que contienen a los efectos de la suma. Por ejemplo

		```
		const num1 = 10;
		const num2 = 50;
		9 * num1;
		num1 ** 3;
		num2 / num1;

		```
		

		3. Por último en esta sección, intente ingresar algunas expresiones más complejas, como

		```
		5 + 10 * 3;
		(num2 % 9) * num1;
		num2 + num1 / 8 + 2;

		```

		Es posible que partes de este último conjunto de cálculos no le den el resultado que esperaba; La siguiente sección bien podría dar la respuesta de por qué.


	Prioridad del operador:

		Veamos el último ejemplo anterior, asumiendo que num2 tiene el valor 50 y num1 tiene el valor 10 (como se indicó originalmente anteriormente):

		Como ser humano, puedes leer esto como "50 más 10 es igual a 60", luego "8 más 2 es igual a 10" y finalmente "60 dividido por 10 es igual a 6".

		Pero el navegador dice "10 dividido por 8 es igual a 1,25", luego "50 más 1,25 más 2 es igual a 53,25".

		Esto se debe a la precedencia de operadores: 

		Algunos operadores se aplican antes que otros al calcular el resultado de un cálculo (lo que en programación se denomina expresión). 

		La precedencia de los operadores en JavaScript es la misma que se enseña en las clases de matemáticas en la escuela: multiplicar y dividir siempre se hacen primero, luego sumar y restar (el cálculo siempre se evalúa de izquierda a derecha).

		Si desea anular la precedencia de los operadores, puede colocar paréntesis alrededor de las partes que desea que se traten explícitamente primero. 

		Entonces para obtener un resultado de 6, podríamos hacer esto:

		Pruébalo y verás.

		Nota: Puede encontrar una lista completa de todos los operadores de JavaScript y su precedencia en Precedencia de operadores.

		```
		(num2 + num1) / 8 + 2;

		```

		```
		(num2 + num1) / (8 + 2);

		```

		```
		(num2 + num1 / 8 ) + 2;

		```

		```
		num2 + num1 / (8 + 2);

		```


		```
		num2 + (num1 / 8 + 2);

		```


	Operadores de incremento y decremento:

		A veces querrás sumar o restar uno repetidamente a un valor de variable numérica. 

		Esto se puede hacer cómodamente utilizando los operadores de incremento (++) y decremento (--).

		Usamos ++ en nuestro juego "Adivina el número" en nuestro primer artículo sobre JavaScript, cuando agregamos 1 a nuestra variable guessCount para realizar un seguimiento de cuántas conjeturas le quedan al usuario después de cada turno.

		```
		guessCount++;

		```

		Intentemos jugar con estos en tu consola.

		Para empezar, tenga en cuenta que no puede aplicarlos directamente a un número, lo que puede parecer extraño, pero estamos asignando a una variable un nuevo valor actualizado, sin operar sobre el valor en sí. 

		Lo siguiente devolverá un error:

		```
		3++;

		```

		Por lo tanto, sólo puede incrementar una variable existente. Prueba esto:

		```
		let num1 = 4;
		num1++;

		```

		¡Bien, extrañeza número 2! Cuando hagas esto, verás que se devuelve un valor de 4; esto se debe a que el navegador devuelve el valor actual y luego incrementa la variable. 

		Puede ver que se ha incrementado si devuelve el valor de la variable nuevamente.

		```	
		num1;

		```

		Lo mismo ocurre con --: prueba lo siguiente

		```
		let num2 = 6;
		num2--;
		num2;

		```

		Nota: Puede hacer que el navegador lo haga al revés (incrementar/disminuir la variable y luego devolver el valor) colocando el operador al inicio de la variable en lugar del final. 

		Pruebe los ejemplos anteriores nuevamente, pero esta vez use ++num1 y --num2


	Operadores de Asignación:

		Los operadores de asignación son operadores que asignan un valor a una variable. 

		Ya hemos usado el más básico, =, muchas veces: asigna a la variable de la izquierda el valor indicado a la derecha.

		```
		let x = 3; // x contains the value 3
		let y = 4; // y contains the value 4
		x = y; // x now contains the same value y contains, 4

		```

		Pero hay algunos tipos más complejos que proporcionan atajos útiles para mantener el código más ordenado y eficiente.

		Los más comunes se enumeran a continuación:


		Asignación de adición: +=

			Agrega el valor de la derecha al valor de la variable de la izquierda y luego devuelve el nuevo valor de la variable.

			Corto: 
				x += 4;

			Largo: 
				x = x + 4;


		Asignación de resta: -=

			Resta el valor de la derecha del valor de la variable de la izquierda y devuelve el nuevo valor de la variable

			x -= 3;

			x = x - 3;


		Asignación de multiplicación: *=

			Multiplica el valor de la variable de la izquierda por el valor de la derecha y devuelve el nuevo valor de la variable

			x *= 3;

			x = x * 3;


		Asignación de división: /=

			Divide el valor de la variable de la izquierda por el valor de la derecha y devuelve el nuevo valor de la variable

			x /= 5;

			x = x / 5;

		Intente escribir algunos de los ejemplos anteriores en su consola para tener una idea de cómo funcionan. 

		En cada caso, vea si puede adivinar cuál es el valor antes de escribir la segunda línea.

		Tenga en cuenta que puede utilizar otras variables en el lado derecho de cada expresión, por ejemplo:

		```
		let x = 3; // x contains the value 3
		let y = 4; // y contains the value 4
		x *= y; // x now contains the value 12

		```

		Nota: Hay muchos otros operadores de asignación disponibles, pero estos son los básicos que debes aprender ahora


		```
		x = 9; 

		x%= 5; 

		```
		4


	Operadores de comparación:

		A veces querremos ejecutar pruebas de verdadero/falso y luego actuar en consecuencia dependiendo del resultado de esa prueba; para hacer esto usamos operadores de comparación.


		Igualdad Estricta: ===

			Prueba si los valores izquierdo y derecho son idénticos entre sí

			5 === 2 + 4


		Igualdad No Estricta: !==

			Prueba si los valores izquierdo y derecho no son idénticos entre sí

			5 !== 2 + 3


		Menor que: <

			prueba si el valor izquierdo es menor que el derecho.

			10 < 6


		Mas grande que: >

			Prueba si el valor izquierdo es mayor que el derecho.

			10 > 20


		Menor o igual que: <=

			Prueba si el valor de la izquierda es menor o igual que el de la derecha.

			3 <= 2


		Mayor o igual que: >=

			Prueba si el valor de la izquierda es mayor o igual que el de la derecha

			5 >= 4

		Nota: Es posible que veas que algunas personas usan == y != en sus pruebas de igualdad y no igualdad. 

		Estos son operadores válidos en JavaScript, pero difieren de ===/!==. 

		Las versiones anteriores prueban si los valores son los mismos pero no si los tipos de datos de los valores son los mismos. 

		Las últimas versiones, estrictas, prueban la igualdad tanto de los valores como de sus tipos de datos. 

		Las versiones estrictas suelen dar lugar a menos errores, por lo que te recomendamos utilizarlas


		Si intenta ingresar algunos de estos valores en una consola, verá que todos devuelven valores verdadero/falso: esos valores booleanos que mencionamos en el artículo anterior. 

		Estos son muy útiles, ya que nos permiten tomar decisiones en nuestro código y se usan cada vez que queremos tomar una decisión de algún tipo. 

		Por ejemplo, los valores booleanos se pueden utilizar para:

		 1. Mostrar la etiqueta de texto correcta en un botón dependiendo de si una función está activada o desactivada
		 

		 2. Mostrar un mensaje de juego terminado si un juego terminó o un mensaje de victoria si el juego se ganó
		 

		 3. Muestre el saludo de temporada correcto según la temporada festiva que sea.

		 Acercar o alejar un mapa dependiendo del nivel de zoom seleccionado


		En un ejemplo rápido.

		```html

		<button>Start machine</button>
		<p>The machine is stopped.</p>

		```

		```js

		const btn = document.querySelector("button");
		const txt = document.querySelector("p");

		btn.addEventListener("click", updateBtn);

		function updateBtn() {
		  if (btn.textContent === "Start machine") {
		    btn.textContent = "Stop machine";
		    txt.textContent = "The machine has started!";
		  } else {
		    btn.textContent = "Start machine";
		    txt.textContent = "The machine is stopped.";
		  }
		}

		```

		Puede ver que el operador de igualdad se usa dentro de la función updateBtn(). 

		En este caso, no estamos probando si dos expresiones matemáticas tienen el mismo valor (estamos probando si el contenido de texto de un botón contiene una determinada cadena), pero sigue siendo el mismo principio en funcionamiento. 

		Si el botón actualmente dice "Iniciar máquina" cuando se presiona, cambiamos su etiqueta a "Detener máquina" y actualizamos la etiqueta según corresponda. 

		Si el botón actualmente dice "Detener máquina" cuando se presiona, volvemos a cambiar la pantalla.

		Nota: Un control de este tipo que cambia entre dos estados generalmente se denomina alternancia. 

		Alterna entre un estado y otro: luz encendida, luz apagada, etc.



|| Cadenas

	Manejo de texto. 


	Son los fragmentos de texto que encontramos en programación, en la web o en cualquier app. 

	JS puede crear cadenas, unirlas y formatear sus simbolos (escaping quote).

	El texto es fundamental para comunicar, informar todo lo que deseamos. 

	HTML proporciona estructura y significado al texto, CSS nos permite darle estilo con precisión y JavaScript ofrece muchas funciones para manipular cadenas.


	Declarar Cadenas (Strings): 

		A primera vista, las cadenas se tratan de manera similar a los números, pero cuando profundizas, comenzarás a ver algunas diferencias notables. 

		Comencemos ingresando algunas líneas básicas en la consola del desarrollador del navegador para familiarizarnos.

		```js

		const string = "The revolution will not be televised.";
		console.log(string);

		```

		Al igual que hicimos con los números, declaramos una variable, la inicializamos con un valor de cadena y luego devolvemos el valor. 

		La única diferencia aquí es que al escribir una cadena, es necesario rodear el valor entre comillas.

		Si no hace esto o se salta una de las citas, recibirá un error. Intente ingresar las siguientes líneas

		```js

		const badString1 = This is a test;
		const badString2 = 'This is a test;
		const badString3 = This is a test';

		```

		Estas líneas no funcionan porque cualquier texto sin comillas se interpreta como un nombre de variable, nombre de propiedad, palabra reservada o similar. 

		Si el navegador no reconoce el texto sin comillas, se genera un error (por ejemplo, "falta; antes de la declaración"). 

		Si el navegador puede detectar dónde comienza una cadena pero no su final (debido a la falta de la segunda comilla), informa un error de "cadena literal no terminada".

		Si su programa genera tales errores, regrese y verifique todas sus cadenas para asegurarse de que no le falten comillas.

		Lo siguiente funcionará si definiste previamente la cadena variable; pruébalo ahora

		```js

		const badString = string;
		console.log(badString);

		```

		badString ahora está configurado para tener el mismo valor que string.


	Comillas simples, comillas dobles y comillas invertidas:

		En JavaScript, puede elegir comillas simples ('), comillas dobles (") o comillas invertidas (`) para ajustar sus cadenas. Todo lo siguiente funcionará

		```js

		const single = 'Single quotes';
		const double = "Double quotes";
		const backtick = `Backtick`;
		
		console.log(single);
		console.log(double);
		console.log(backtick);

		```

		Debes usar el mismo carácter para el inicio y el final de una cadena, o obtendrás un error:

		```js

		const badQuotes = 'This is not allowed!";

		```

		Las cadenas declaradas usando comillas simples y las cadenas declaradas usando comillas dobles son las mismas, y cuál use depende de sus preferencias personales, aunque es una buena práctica elegir un estilo y usarlo de manera consistente en su código.

		Las cadenas declaradas mediante comillas invertidas son un tipo especial de cadena llamada literal de plantilla.

		En la mayoría de los casos, los literales de plantilla son como cadenas normales, pero tienen algunas propiedades especiales:

		1. puedes incrustar JavaScript en ellos
		
		2. puedes declarar literales de plantilla en varias líneas


	Incrustar JavaScript:

		Dentro de una plantilla literal, puede incluir variables o expresiones de JavaScript dentro de ${ } y el resultado se incluirá en la cadena.

		```js

		const name = "Chris";
		const greeting = `Hello, ${name}`;
		console.log(greeting); // "Hello, Chris"

		```

		Puedes utilizar la misma técnica para unir dos variables:

		```js

		const one = "Hello, ";
		const two = "how are you?";
		const joined = `${one}${two}`;
		console.log(joined); // "Hello, how are you?"

		```

		Unir cadenas de esta manera se llama concatenación.


	Concatenación en contexto:

		Uso de la concatenación en acción:

		```html

		<button>Press me</button>	
		<div id="greeting"></div>

		```

		```js

		const button = document.querySelector("button");

		function greet() {
		  const name = prompt("What is your name?");
		  const greeting = document.querySelector("#greeting");
		  greeting.textContent = `Hello ${name}, nice to see you!`;
		}

		button.addEventListener("click", greet);

		```

		Aquí, estamos usando la función window.prompt(), que solicita al usuario que responda una pregunta a través de un cuadro de diálogo emergente y luego almacena el texto que ingresa dentro de una variable determinada, en este caso el nombre. 

		Luego mostramos una cadena que inserta el nombre en un mensaje de saludo genérico.


	Concatenación usando "+":

		Puede usar ${} solo con literales de plantilla, no con cadenas normales. 

		Puede concatenar cadenas normales usando el operador +

		```js

		const greeting = "Hello";
		const name = "Chris";
		console.log(greeting + ", " + name); // "Hello, Chris"

		```

		Sin embargo, los literales de plantilla generalmente brindan un código más legible:

		```js

		const greeting = "Hello";
		const name = "Chris";
		console.log(`${greeting}, ${name}`); // "Hello, Chris"

		```


	Incluir expresiones en cadenas.

		Puede incluir expresiones JavaScript en literales de plantilla, así como solo variables, y los resultados se incluirán en el resultado.

		```js

		const song = "Fight the Youth";
		const score = 9;
		const highestScore = 10;
		const output = `I like the song ${song}. I gave it a score of ${
		  (score / highestScore) * 100
		}%.`;
		console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

		```


	Cadenas multilínea

		Los literales de plantilla respetan los saltos de línea en el código fuente, por lo que puedes escribir cadenas que abarquen varias líneas como esta:

		```js
		const newline = `One day you finally knew
		what you had to do, and began,`;
		console.log(newline);

		/*
		One day you finally knew
		what you had to do, and began,
		*/

		```

		Para obtener una salida equivalente usando una cadena normal, deberá incluir caracteres de salto de línea (\n) en la cadena:

		```js

		const newline = "One day you finally knew\nwhat you had to do, and began,";
		console.log(newline);

		/*
		One day you finally knew
		what you had to do, and began,
		*/


		```

		Consulte la página de referencia de literales de plantilla para obtener más ejemplos y detalles de funciones avanzadas. 


	Incluyendo comillas en cadenas:

		Dado que utilizamos comillas para indicar el inicio y el final de las cadenas, ¿cómo podemos incluir comillas reales en las cadenas? Sabemos que esto no funcionará.

		```
		const badQuotes = "She said "I think so!"";

		```

		Una opción común es utilizar uno de los otros caracteres para declarar la cadena:

		```
		const goodQuotes1 = 'She said "I think so!"';
		const goodQuotes2 = `She said "I'm not going in there!"`;

		```

		Otra opción es evitar las comillas del problema. 

		Los caracteres de escape significan que les hacemos algo para asegurarnos de que sean reconocidos como texto, no como parte del código. 

		En JavaScript, hacemos esto poniendo una barra invertida justo antes del carácter. Prueba esto:

		```js

		const bigmouth = 'I\'ve got no right to take my place…';
		console.log(bigmouth);

		```

		Puede utilizar la misma técnica para insertar otros caracteres especiales.

		Consulte Secuencias de escape para obtener más detalles.


	Números vs Cadenas:

		¿Qué sucede cuando intentamos concatenar una cadena y un número? Probémoslo en nuestra consola.

		```js

		const name = "Front ";
		const number = 242;
		console.log(name + number); // "Front 242"

		```

		Es de esperar que esto devuelva un error, pero funciona bien. 

		La forma en que se deben mostrar los números como cadenas está bastante bien definida, por lo que el navegador convierte automáticamente el número en una cadena y concatena las dos cadenas.

		Si tiene una variable numérica que desea convertir en una cadena o una variable de cadena que desea convertir en un número, puede utilizar las dos construcciones siguientes:

		1. La función Number() convierte cualquier cosa que se le pase en un número si puede. Prueba lo siguiente

		```js

		const myString = "123";
		const myNum = Number(myString);
		console.log(typeof myNum);
		// number

		```

		2. Por el contrario, la función String() convierte su argumento en una cadena. Prueba esto

		```js

		const myNum2 = 123;
		const myString2 = String(myNum2);
		console.log(typeof myString2);
		// string

		```

		Estas construcciones pueden resultar realmente útiles en algunas situaciones. 

		Por ejemplo, si un usuario ingresa un número en el campo de texto de un formulario, es una cadena. 

		Sin embargo, si desea agregar este número a algo, necesitará que sea un número, por lo que podría pasarlo a través de Number() para manejar esto. 

		Hicimos exactamente esto en nuestro Juego de adivinar números, en la línea 59.



|| Métodos de Cadenas
	
	Los métodos integrados proporcionan funciones, como encontrar la longitud de una cadena de texto, unir y dividir cadenas; sustituyendo un carácter en una cadena por otro, etc. 


	Cadena como Objeto: 

		La mayoría de las cosas son objetos en JavaScript. 

		Cuando creas una cadena, por ejemplo usando:

		```js

		const string = "This is my string";

		```

		Su variable se convierte en una instancia de objeto de cadena y, como resultado, tiene una gran cantidad de propiedades y métodos disponibles.

		Pero hay algunos que potencialmente usarás con bastante frecuencia y que veremos aquí.

		Ingresemos algunos ejemplos en la consola del desarrollador del navegador.


	Encontrar la longitud (length): 

		Esto es fácil: utiliza la propiedad de length. 

		Intente ingresar las siguientes líneas:

		```js

		const browserType = "mozilla";
		browserType.length;

		```

		Esto debería devolver el número 7, porque "mozilla" tiene 7 caracteres. 

		Esto es útil por muchas razones; por ejemplo, es posible que desee encontrar las longitudes de una serie de nombres para poder mostrarlos en orden de longitud, o informarle a un usuario que un nombre de usuario que ingresó en un campo de formulario es demasiado largo si supera cierta longitud.


	Recuperar un carácter de cadena específico:

		En una nota relacionada, puede devolver cualquier carácter dentro de una cadena usando la notación de corchetes; esto significa que incluye corchetes ([]) al final del nombre de su variable.

		Dentro de los corchetes, incluye el número del carácter que desea devolver, por lo que, por ejemplo, para recuperar la primera letra haría esto:

		```js

		browserType[0];

		```

		Recuerde: ¡las computadoras cuentan desde 0, no desde 1!

		Para recuperar el último carácter de cualquier cadena, podríamos usar la siguiente línea, combinando esta técnica con la propiedad de longitud que vimos anteriormente.

		```js

		browserType[browserType.length - 1];

		```

		La longitud de la cadena "mozilla" es 7, pero como el recuento comienza en 0, la posición del último carácter es 6; usar longitud-1 nos da el último carácter.


	Probar si una cadena contiene una subcadena:

		A veces querrás saber si hay una cadena más pequeña dentro de una más grande (generalmente decimos si una subcadena está presente dentro de una cadena). 

		Esto se puede hacer usando el método include(), que toma un único parámetro: la subcadena que desea buscar.

		Devuelve verdadero si la cadena contiene la subcadena y falso en caso contrario.

		```js

		const browserType = "mozilla";

		if (browserType.includes("zilla")) {
		  console.log("Found zilla!");
		} else {
		  console.log("No zilla here!");
		}

		```

		A menudo querrás saber si una cadena comienza o termina con una subcadena en particular.

		Esta es una necesidad bastante común y existen dos métodos especiales para esto: startsWith() () y endsWith():

		```js

		const browserType = "mozilla";

		if (browserType.startsWith("zilla")) {
		  console.log("Found zilla!");
		} else {
		  console.log("No zilla here!");
		}

		```


		```js

		const browserType = "mozilla";

		if (browserType.endsWith("zilla")) {
		  console.log("Found zilla!");
		} else {
		  console.log("No zilla here!");
		}

		```


	Encontrar la posición de una subcadena en una cadena:

		Puede encontrar la posición de una subcadena dentro de una cadena más grande usando el método indexOf().

		Este método toma dos parámetros: la subcadena que desea buscar y un parámetro opcional que especifica el punto de inicio de la búsqueda.

		Si la cadena contiene la subcadena, indexOf() devuelve el índice de la primera aparición de la subcadena. 

		Si la cadena no contiene la subcadena, indexOf() devuelve -1

		```js

		const tagline = "MDN - Resources for developers, by developers";
		console.log(tagline.indexOf("developers")); // 20

		```

		A partir de 0, si cuenta el número de caracteres (incluido el espacio en blanco) desde el principio de la cadena, la primera aparición de la subcadena "desarrolladores" está en el índice 20.

		```js

		console.log(tagline.indexOf("x")); // -1

		```

		Esto, por otro lado, devuelve -1 porque el carácter x no está presente en la cadena.

		Ahora que sabes cómo encontrar la primera aparición de una subcadena, ¿cómo haces para encontrar las apariciones posteriores? Puede hacerlo pasando un valor que sea mayor que el índice de la aparición anterior como segundo parámetro del método.

		```js

		const firstOccurrence = tagline.indexOf("developers");
		const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

		console.log(firstOccurrence); // 20
		console.log(secondOccurrence); // 35

		```

		Aquí le indicamos al método que busque la subcadena "desarrolladores" comenzando en el índice 21 (firstOccurrence + 1), y devuelve el índice 35.


	Extraer una subcadena de una cadena:

		Puede extraer una subcadena de una cadena usando el método slice(). Lo pasas:

		1. el índice en el que comenzar a extraer
		 
		2. el índice en el que dejar de extraer. Esto es exclusivo, lo que significa que el carácter en este índice no está incluido en la subcadena extraída.

		```js

		const browserType = "mozilla";
		console.log(browserType.slice(1, 4)); // "ozi"

		```

		El carácter del índice 1 es "o" y el carácter del índice 4 es "l". 

		Entonces extraemos todos los caracteres que comienzan en "o" y terminan justo antes de "l", lo que nos da "ozi".

		Si sabe que desea extraer todos los caracteres restantes de una cadena después de un determinado carácter, no es necesario que incluya el segundo parámetro. 

		En su lugar, solo necesita incluir la posición del carácter desde donde desea extraer los caracteres restantes en una cadena. Prueba lo siguiente:

		```js

		browserType.slice(2); // "zilla"

		```

		Esto devuelve "zilla"; esto se debe a que la posición del carácter de 2 es la letra "z" y debido a que no incluyó un segundo parámetro, la subcadena que se devolvió fueron todos los caracteres restantes de la cadena.

		Nota: slice() también tiene otras opciones; Estudia la página slice() para ver qué más puedes descubrir.


	Cambiando de Case:

		Los métodos de cadena toLowerCase() y toUpperCase() toman una cadena y convierten todos los caracteres a minúsculas o mayúsculas, respectivamente. 

		Esto puede resultar útil, por ejemplo, si desea normalizar todos los datos ingresados ​​por el usuario antes de almacenarlos en una base de datos.

		```js

		const radData = "My NaMe Is MuD";
		console.log(radData.toLowerCase());
		console.log(radData.toUpperCase());

		```


	Actualizar partes de una cadena:

		Puede reemplazar una subcadena dentro de una cadena con otra subcadena usando el método replace().

		En este ejemplo, proporcionamos dos parámetros: la cadena que queremos reemplazar y la cadena con la que queremos reemplazarla:

		```js

		const browserType = "mozilla";
		const updated = browserType.replace("moz", "van");

		console.log(updated); // "vanilla"
		console.log(browserType); // "mozilla"

		```

		Tenga en cuenta que replace(), como muchos métodos de cadena, no cambia la cadena a la que se llamó, sino que devuelve una nueva cadena. 

		Si desea actualizar la variable browserType original, tendría que hacer algo como esto:

		```js

		let browserType = "mozilla";
		browserType = browserType.replace("moz", "van");

		console.log(browserType); // "vanilla"

		```

		También tenga en cuenta que ahora tenemos que declarar browserType usando let, no const, porque lo estamos reasignando.

		Tenga en cuenta que replace() en este formulario solo cambia la primera aparición de la subcadena.

		Si desea cambiar todas las apariciones, puede usar replaceAll():
	
		```js

		let quote = "To be or not to be";
		quote = quote.replaceAll("be", "code");

		console.log(quote); // "To code or not to code"

		```



|| Matrices

	Almacenamiento de un conjunto de datos. 


	Al almacenar una lista de elementos de datos bajo un único nombre de variable, se nos permite recuperar, agregar y eliminar elementos almacenados en una matriz, y más.


	Array: 

		Se describen como "objetos similares a listas"; son objetos únicos que contienen múltiples valores almacenados en una lista.

		Los objetos de matriz se pueden almacenar en variables y tratarse de la misma manera que cualquier otro tipo de valor, la diferencia es que podemos acceder a cada valor dentro de la lista individualmente y hacer cosas súper útiles y eficientes con la lista, como recorrer y haz lo mismo con todos los valores. 

		Tal vez tengamos una serie de artículos de productos y sus precios almacenados en una matriz, y queremos recorrerlos todos e imprimirlos en una factura, mientras sumamos todos los precios e imprimimos el precio total en la parte inferior.

		Si no tuviéramos matrices, tendríamos que almacenar cada elemento en una variable separada y luego llamar al código que imprime y agrega por separado para cada elemento. 

		Esto sería mucho más largo de escribir, menos eficiente y más propenso a errores. 

		Si tuviéramos 10 artículos para agregar a la factura ya sería molesto, pero ¿qué pasa con 100 artículos o 1000? Volveremos a este ejemplo más adelante en el artículo.

		Como en artículos anteriores, aprendamos sobre los conceptos básicos reales de las matrices ingresando algunos ejemplos en la consola del desarrollador del navegador.


	Crear Array: 

		Las matrices constan de corchetes y elementos separados por comas.

		1. Supongamos que queremos almacenar una lista de compras en una matriz. 

		```js

		const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
		console.log(shopping);

		```

		2. En el ejemplo anterior, cada elemento es una cadena, pero en una matriz podemos almacenar varios tipos de datos: cadenas, números, objetos e incluso otras matrices. 

		También podemos mezclar tipos de datos en una sola matriz; no tenemos que limitarnos a almacenar solo números en una matriz y en otra solo cadenas. Por ejemplo:

		```js

		const sequence = [1, 1, 2, 3, 5, 8, 13];
		const random = ["tree", 795, [0, 1, 2]];

		```


	Encontrar la longitud de una matriz:

		Puede averiguar la longitud de una matriz (cuántos elementos hay en ella) exactamente de la misma manera que averigua la longitud (en caracteres) de una cadena: utilizando la propiedad de longitud. 

		```js

		const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
		console.log(shopping.length); // 5

		```


	Acceder y modificar elementos de la matriz

		Los elementos de una matriz están numerados comenzando desde cero.

		Este número se llama índice del artículo. 

		Entonces el primer elemento tiene índice 0, el segundo tiene índice 1, y así sucesivamente. 

		Puede acceder a elementos individuales en la matriz usando notación entre corchetes y proporcionando el índice del elemento, de la misma manera que accedió a las letras en una cadena.

		1. Ingrese lo siguiente en su consola

		```js

		const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
		console.log(shopping[0]);
		// returns "bread"

		```


		2. También puede modificar un elemento en una matriz dándole un nuevo valor a un solo elemento de la matriz. Prueba esto:

		```js
		const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
		shopping[0] = "tahini";
		console.log(shopping);
		// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

		```

		Nota: Lo hemos dicho antes, pero solo como recordatorio: ¡Javascript comienza a indexar matrices en cero!


		3. Tenga en cuenta que una matriz dentro de una matriz se denomina matriz multidimensional. 

		Puede acceder a un elemento dentro de una matriz que a su vez está dentro de otra matriz encadenando dos conjuntos de corchetes. 

		Por ejemplo, para acceder a uno de los elementos dentro de la matriz que es el tercer elemento dentro de la matriz aleatoria (ver sección anterior), podríamos hacer algo como esto:

		```js

		const random = ["tree", 795, [0, 1, 2]];
		random[2][2];

		```


	Encontrar el índice de elementos en una matriz:

		Si no conoce el índice de un elemento, puede utilizar el método indexOf(). 

		El método indexOf() toma un elemento como argumento y devolverá el índice del elemento o -1 si el elemento no está en la matriz.

		```js

		const birds = ["Parrot", "Falcon", "Owl"];
		console.log(birds.indexOf("Owl")); //  2
		console.log(birds.indexOf("Rabbit")); // -1

		```


	Agregar elementos:

		Para agregar uno o más elementos al final de una matriz podemos usar push(). 

		Tenga en cuenta que debe incluir uno o más elementos que desee agregar al final de su matriz.

		```js

		const cities = ["Manchester", "Liverpool"];
		cities.push("Cardiff");
		console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
		cities.push("Bradford", "Brighton");
		console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

		```

		La constante newLength (nueva longitud/tamaño) de la matriz se devuelve cuando se completa la llamada al método. 

		Si desea almacenar la nueva longitud de la matriz en una variable, puede hacer algo como esto: más elementos que desee agregar al final de su matriz

		```js

		const cities = ["Manchester", "Liverpool"];
		const newLength = cities.push("Bristol");
		console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
		console.log(newLength); // 3

		```

		Para agregar un elemento al inicio de la matriz, use unshift():

		```js

		const cities = ["Manchester", "Liverpool"];
		cities.unshift("Edinburgh");
		console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

		```


	Eliminando elementos:

		Para eliminar el último elemento de la matriz, use pop().

		```js

		const cities = ["Manchester", "Liverpool"];
		cities.pop();
		console.log(cities); // [ "Manchester" ]

		```

		El método pop() devuelve el elemento que se eliminó. Para guardar ese elemento en una nueva variable, puede hacer esto:

		```js

		const cities = ["Manchester", "Liverpool"];
		const removedCity = cities.pop();
		console.log(removedCity); // "Liverpool"

		```

		Para eliminar el primer elemento de una matriz, use shift():

		```js

		const cities = ["Manchester", "Liverpool"];
		cities.shift();
		console.log(cities); // [ "Liverpool" ]

		
		```

		Si conoce el índice de un elemento, puede eliminarlo de la matriz usando splice():

		```js

		const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
		const index = cities.indexOf("Liverpool");
		if (index !== -1) {
		  cities.splice(index, 1);
		}
		console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

		```

		En esta llamada a splice(), el primer argumento dice dónde comenzar a eliminar elementos y el segundo argumento dice cuántos elementos deben eliminarse. Entonces puedes eliminar más de un elemento:

		```js

		const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
		const index = cities.indexOf("Liverpool");
		if (index !== -1) {
		  cities.splice(index, 2);
		}
		console.log(cities); // [ "Manchester", "Carlisle" ]

		```


	Accediendo a cada elemento:

		Muy a menudo querrás acceder a todos los elementos de la matriz.

		Puedes hacer esto usando la declaración for...of

		```js

		const birds = ["Parrot", "Falcon", "Owl"];

		for (const bird of birds) {
		  console.log(bird);
		}

		```


		A veces querrás hacer lo mismo con cada elemento de una matriz, dejándote con una matriz que contiene los elementos modificados. 

		Puedes hacer esto usando map(). 

		El siguiente código toma una serie de números y duplica cada número:

		```js

		function double(number) {
		  return number * 2;
		}
		const numbers = [5, 2, 7, 6];
		const doubled = numbers.map(double);
		console.log(doubled); // [ 10, 4, 14, 12 ]

		```

		Le damos una función a map(), y map() llama a la función una vez para cada elemento de la matriz, pasando el elemento. 

		Luego agrega el valor de retorno de cada llamada a función a una nueva matriz y finalmente devuelve la nueva matriz.


		A veces querrás crear una nueva matriz que contenga solo los elementos de la matriz original que coincidan con alguna prueba.

		Puedes hacerlo usando filter(). 

		El siguiente código toma una matriz de cadenas y devuelve una matriz que contiene solo las cadenas que tienen más de 8 caracteres:

		```js

		function isLong(city) {
		  return city.length > 8;
		}
		const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
		const longer = cities.filter(isLong);
		console.log(longer); // [ "Liverpool", "Edinburgh" ]

		```

		Al igual que map(), le damos una función al método filter() y filter() llama a esta función para cada elemento de la matriz, pasando el elemento. 

		Si la función devuelve verdadero, entonces el elemento se agrega a una nueva matriz. 

		Finalmente devuelve la nueva matriz.


	Conversión entre cadenas y matrices:

		A menudo se le presentarán algunos datos sin procesar contenidos en una cadena grande y larga, y es posible que desee separar los elementos útiles en una forma más útil y luego hacerles cosas, como mostrarlos en una tabla de datos.

		Para hacer esto, podemos usar el método split(). 

		En su forma más simple, esto toma un único parámetro, el carácter en el que desea separar la cadena, y devuelve las subcadenas entre el separador como elementos de una matriz.

		Nota: Bueno, técnicamente este es un método de cadena, no un método de matriz, pero lo hemos incluido con matrices porque funciona bien aquí.


		1. Juguemos con esto, para ver cómo funciona. Primero, crea una cadena en tu consola:

		```js

		const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

		```


		2. Ahora dividámoslo en cada coma:

		```js

		const cities = data.split(",");
		cities;

		```


		3. Finalmente, intente encontrar la longitud de su nueva matriz y recuperar algunos elementos de ella:

		```js

		cities.length;
		cities[0]; // the first item in the array
		cities[1]; // the second item in the array
		cities[cities.length - 1]; // the last item in the array

		```


		4. También puedes ir en sentido contrario usando el método join(). Pruebe lo siguiente:

		```js

		const commaSeparated = cities.join(",");
		commaSeparated;

		```

		Reconstruye cadena original


		5. Otra forma de convertir una matriz en una cadena es utilizar el método toString(). 

		toString() es posiblemente más simple que join() ya que no requiere un parámetro, pero es más limitante.

		Con join() puedes especificar diferentes separadores, mientras que toString() siempre usa una coma. (Intente ejecutar el Paso 4 con un carácter diferente a una coma).

		```js

		const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
		dogNames.toString(); // Rocket,Flash,Bella,Slugger

		```



|| 2. Entendiendo los Bloques de Código en JS

	Tipos de bloques de código que se encuentran comúnmente, como declaraciones condicionales, bucles, funciones y eventos.


	Guia: 


		1. Condicionales: toma de decisiones: 

			En cualquier lenguaje de programación, el código necesita tomar decisiones y llevar a cabo acciones en consecuencia dependiendo de diferentes entradas. 

			Por ejemplo, en un juego, si el número de vidas del jugador es 0, entonces se acabó el juego.

			En una aplicación meteorológica, si se mira por la mañana, muestra un gráfico del amanecer; muestra estrellas y una luna si es de noche. 

			En este artículo exploraremos cómo funcionan las estructuras condicionales en JavaScript.


		2. Bucles:

			A veces es necesario realizar una tarea más de una vez seguidas. 

			Por ejemplo, mirar una lista de nombres. 

			En programación, los bucles realizan muy bien este trabajo. 

			Aquí veremos estructuras de bucle en JavaScript.
	

		3. Funciones: bloques de código reutilizables

			Las funciones le permiten almacenar un fragmento de código que realiza una única tarea dentro de un bloque definido y luego llamar a ese código cuando lo necesite mediante un único comando corto, en lugar de tener que escribir el mismo código varias veces. 

			En este artículo exploraremos conceptos fundamentales detrás de funciones como la sintaxis básica, cómo invocar y definir funciones, alcance y parámetros.


		4. Construye tu propia función:

			Habiendo tratado la mayor parte de la teoría esencial anteriormente, este artículo proporciona una experiencia práctica. 

			Aquí obtendrá algo de práctica para crear su propia función personalizada. 

			A lo largo del camino, también explicaremos algunos detalles útiles adicionales sobre cómo tratar con funciones.


		5. Valores de retorno de la función

			El último concepto esencial que debes conocer sobre una función son los valores de retorno.

			Algunas funciones no devuelven un valor significativo una vez completadas, pero otras sí. 

			Es importante comprender cuáles son sus valores, cómo utilizarlos en su código y cómo hacer que sus propias funciones personalizadas devuelvan valores útiles.


		6. Introducción a los eventos:

			Los eventos son acciones o sucesos que suceden en el sistema que estás programando, de los cuales el sistema te informa para que puedas responder a ellos de alguna manera si lo deseas. 

			Por ejemplo, si el usuario hace clic en un botón en una página web, es posible que desee responder a esa acción mostrando un cuadro de información. 

			En este último artículo, analizaremos algunos conceptos importantes relacionados con los eventos y veremos cómo funcionan en los navegadores.



|| Condicionales: decisiones

	A veces, el código necesita tomar decisiones y llevar a cabo acciones en consecuencia en función de diferentes entradas.

	Por ejemplo, en un juego, si el número de vidas del jugador es 0, entonces se acabó el juego. 

	En una aplicación meteorológica, si se mira por la mañana, muestra un gráfico del amanecer; mostrar estrellas y una luna si es de noche.


	Las opciones o decisiones se crean con una condición: 

		Los seres humanos (y otros animales) toman decisiones todo el tiempo que afectan sus vidas, desde pequeñas ("¿debería comer una galleta o dos?") hasta grandes ("debería quedarme en mi país de origen y trabajar en la granja de mi padre, o ¿Debería mudarme a Estados Unidos y estudiar astrofísica?")

		Las declaraciones condicionales nos permiten representar dicha toma de decisiones en JavaScript, desde la elección que se debe realizar (por ejemplo, "una galleta o dos"), hasta el resultado resultante de esas elecciones (quizás el resultado de "comí una galleta" podría ser "todavía tenía hambre", y el resultado de "comí dos galletas" podría ser "me sentí lleno, pero mamá me regañó por comerme todas las galletas").


	Declaraciones If...else (si...si no):


		Sintaxis básica if...else: 

		```js

		if (condition) {
		  /* code to run if condition is true */
		} else {
		  /* run some other code instead */
		}


		```

		Aquí tenemos:

		1. La palabra clave si va seguida de algunos paréntesis.


		2. Una condición para probar, colocada entre paréntesis (normalmente "¿este valor es mayor que este otro valor?" o "¿existe este valor?"). 

		La condición utiliza los operadores de comparación que analizamos en el último módulo y devuelve verdadero o falso.


		3. Un conjunto de llaves, dentro de las cuales tenemos algo de código; puede ser cualquier código que queramos y solo se ejecuta si la condición devuelve verdadero.


		4. La palabra clave else.


		5. Otro conjunto de llaves, dentro del cual tenemos más código (puede ser cualquier código que queramos y solo se ejecuta si la condición no es verdadera) o, en otras palabras, la condición es falsa.

		Este código es bastante legible por humanos: dice "si la condición es verdadera, ejecute el código A; de lo contrario, ejecute el código B".

		Debes tener en cuenta que no es necesario incluir el else y el segundo bloque de llaves; el siguiente también es un código perfectamente legal

		```js

		if (condition) {
		  /* code to run if condition is true */
		}

		/* run some other code */


		```

		Sin embargo, debe tener cuidado aquí: en este caso, el segundo bloque de código no está controlado por la declaración condicional, por lo que siempre se ejecuta, independientemente de si la condición devuelve verdadero o falso. 

		Esto no es necesariamente algo malo, pero puede que no sea lo que desea; a menudo desea ejecutar un bloque de código u otro, no ambos.

		Como punto final, aunque no se recomienda, a veces puede ver declaraciones if...else escritas sin llaves:


		```js

		if (condition) /* code to run if condition is true */
		else /* run some other code instead */

		```

		Esta sintaxis es perfectamente válida, pero es mucho más fácil entender el código si usas las llaves para delimitar los bloques de código y usas múltiples líneas y sangría.


	Ejemplo real: 

		Imagínese a un niño al que su madre o su padre le piden ayuda con una tarea.

		El padre podría decir: "¡Hola, cariño! Si me ayudas yendo a hacer las compras, te daré una asignación extra para que puedas comprar el juguete que querías". En JavaScript, podríamos representar esto así.

		```js

		let shoppingDone = false;
		let childsAllowance;

		if (shoppingDone === true) {
		  childsAllowance = 10;
		} else {
		  childsAllowance = 5;
		}

		```

		Este código, como se muestra, siempre da como resultado que la variable shoppingDone devuelva falso, lo que significa decepción para nuestro pobre hijo. 

		Dependería de nosotros proporcionar un mecanismo para que el padre establezca la variable shoppingDone en verdadero si el niño hizo la compra.


	Else...if (además si): 

		El último ejemplo nos proporcionó dos opciones o resultados, pero ¿qué pasa si queremos más de dos?

		Hay una manera de encadenar opciones/resultados adicionales a tu if...else: usando else if. 

		Cada opción adicional requiere un bloque adicional para colocar entre if () { } y else { }; consulte el siguiente ejemplo más complicado, que podría ser parte de una aplicación simple de pronóstico del tiempo:

		```html

		<label for="weather">Select the weather type today: </label>
		<select id="weather">
		  <option value="">--Make a choice--</option>
		  <option value="sunny">Sunny</option>
		  <option value="rainy">Rainy</option>
		  <option value="snowing">Snowing</option>
		  <option value="overcast">Overcast</option>
		</select>

		<p></p>

		```


		```js

		const select = document.querySelector("select");
		const para = document.querySelector("p");

		select.addEventListener("change", setWeather);

		function setWeather() {
		  const choice = select.value;

		  if (choice === "sunny") {
		    para.textContent =
		      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
		  } else if (choice === "rainy") {
		    para.textContent =
		      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
		  } else if (choice === "snowing") {
		    para.textContent =
		      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
		  } else if (choice === "overcast") {
		    para.textContent =
		      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
		  } else {
		    para.textContent = "";
		  }
		}

		```

		1. Aquí tenemos un elemento HTML <select> que nos permite elegir diferentes condiciones climáticas y un párrafo simple.


		2. En JavaScript, almacenamos una referencia a los elementos <select> y <p> y agregamos un detector de eventos al elemento <select> para que cuando se cambie su valor, se ejecute la función setWeather().


		3. Cuando se ejecuta esta función, primero configuramos una variable llamada elección al valor actual seleccionado en el elemento <select>. 

		Luego usamos una declaración condicional para mostrar texto diferente dentro del párrafo dependiendo de cuál sea el valor de elección. 

		Observe cómo se prueban todas las condiciones en los bloques else if () { }, excepto la primera, que se prueba en un bloque if () { }.


		4. La última opción, dentro del bloque else { }, es básicamente una opción de "último recurso": el código que contiene se ejecutará si ninguna de las condiciones es verdadera. 

		En este caso, sirve para vaciar el texto del párrafo si no hay nada seleccionado, por ejemplo, si un usuario decide volver a seleccionar la opción de marcador de posición "--Hacer una elección--" que se muestra al principio.


	Una nota sobre los operadores de comparación:

		Los operadores de comparación se utilizan para probar las condiciones dentro de nuestras declaraciones condicionales. 

		La primera vez que analizamos los operadores de comparación fue en nuestro artículo Matemáticas básicas en JavaScript: números y operadores. 

		Nuestras opciones son:

		 === y !==: prueba si un valor es idéntico o no idéntico a otro.

		 < y >: prueba si un valor es menor o mayor que otro.

		 <= y >=: prueba si un valor es menor o igual, o mayor o igual que otro.

		Queríamos hacer una mención especial a la prueba de valores booleanos (verdadero/falso) y a un patrón común con el que te encontrarás una y otra vez.

		Cualquier valor que no sea falso, indefinido, nulo, 0, NaN o una cadena vacía ('') en realidad devuelve verdadero cuando se prueba como una declaración condicional, por lo tanto, puede usar un nombre de variable por sí solo para probar si es verdadero.

		o incluso que existe (es decir, que no está indefinido). Así, por ejemplo


		```js

		let cheese = "Cheddar";

		if (cheese) {
		  console.log("Yay! Cheese available for making cheese on toast.");
		} else {
		  console.log("No cheese on toast for you today.");
		}

		```

		Y, volviendo a nuestro ejemplo anterior sobre el niño haciendo una tarea para sus padres, podrías escribirlo así

		```js

		let shoppingDone = false;
		let childsAllowance;

		// We don't need to explicitly specify 'shoppingDone === true'
		if (shoppingDone) {
		  childsAllowance = 10;
		} else {
		  childsAllowance = 5;
		}

		```

	Anidando if else: 

		Está perfectamente bien poner una declaración if...else dentro de otra para anidarlas. 

		Por ejemplo, podríamos actualizar nuestra aplicación de pronóstico del tiempo para mostrar un conjunto adicional de opciones dependiendo de la temperatura.

		```js

		if (choice === "sunny") {
		  if (temperature < 86) {
		    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
		  } else if (temperature >= 86) {
		    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
		  }
		}


		```

		Aunque todo el código funciona en conjunto, cada declaración if...else funciona de forma completamente independiente de la otra.


	Operadores lógicos: and, or, not

		Si desea probar varias condiciones sin escribir declaraciones if...else anidadas, los operadores lógicos pueden ayudarle. Cuando se usan en condiciones, los dos primeros hacen lo siguiente:

		 && - Y; le permite encadenar dos o más expresiones para que todas ellas tengan que evaluarse individualmente como verdaderas para que la expresión completa devuelva verdadera.

		 || - O; le permite encadenar dos o más expresiones para que una o más de ellas tengan que evaluarse individualmente como verdadera para que toda la expresión devuelva verdadero.

		Para darle un ejemplo AND, el fragmento de ejemplo anterior se puede reescribir a este

		```js

		if (choice === "sunny" && temperature < 86) {
		  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
		} else if (choice === "sunny" && temperature >= 86) {
		  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
		}

		```

		Entonces, por ejemplo, el primer bloque de código solo se ejecutará si la opción === 'soleado' y la temperatura < 86 devuelven verdadero.

		Veamos un ejemplo rápido de OR

		```js

		if (iceCreamVanOutside || houseStatus === "on fire") {
		  console.log("You should leave the house quickly.");
		} else {
		  console.log("Probably should just stay in then.");
		}


		```

		El último tipo de operador lógico, NOT, expresado por ! operador, se puede utilizar para negar una expresión. Combinémoslo con OR en el ejemplo anterior:

		```js

		if (!(iceCreamVanOutside || houseStatus === "on fire")) {
		  console.log("Probably should just stay in then.");
		} else {
		  console.log("You should leave the house quickly.");
		}

		```

		En este fragmento, si la declaración OR devuelve verdadero, el operador NOT la negará para que la expresión general devuelva falso.

		Puede combinar tantas declaraciones lógicas como desee, en cualquier estructura. 

		El siguiente ejemplo ejecuta el código interno solo si ambas declaraciones OR devuelven verdadero, lo que significa que la declaración AND general devolverá verdadero.

		```js

		if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
		  // run the code
		}

		```

		Un error común al utilizar el operador lógico OR en declaraciones condicionales es intentar indicar la variable cuyo valor está verificando una vez y luego dar una lista de valores que podrían ser verdaderos, separados por || (O) operadores. Por ejemplo:

		```js

		if (x === 5 || 7 || 10 || 20) {
		  // run my code
		}

		```

		En este caso, la condición dentro de if () siempre se evaluará como verdadera ya que 7 (o cualquier otro valor distinto de cero) siempre se evaluará como verdadero. 

		Esta condición en realidad dice "si x es igual a 5, o 7 es verdadero, lo cual siempre es cierto". 

		¡Esto lógicamente no es lo que queremos! Para que esto funcione, debe especificar una prueba completa en cada lado de cada operador OR:

		```js

		if (x === 5 || x === 7 || x === 10 || x === 20) {
		  // run my code
		}

		```


	Switch:

		Las declaraciones if...else hacen bien el trabajo de habilitar el código condicional, pero no están exentas de desventajas. 

		Son principalmente buenos para casos en los que tienes un par de opciones y cada una requiere una cantidad razonable de código para ejecutarse y/o las condiciones son complejas (por ejemplo, múltiples operadores lógicos). 

		Para los casos en los que simplemente desea establecer una variable con una determinada elección de valor o imprimir una declaración particular dependiendo de una condición, la sintaxis puede ser un poco engorrosa, especialmente si tiene una gran cantidad de opciones.

		En tal caso, las declaraciones de switch son tus amigas: toman una sola expresión/valor como entrada y luego examinan varias opciones hasta encontrar una que coincida con ese valor, ejecutando el código correspondiente que la acompaña. 

		Aquí hay más pseudocódigo, para darle una idea.

		```js

		switch (expression) {
		  case choice1:
		    // run this code
		    break;

		  case choice2:
		    // run this code instead
		    break;

		  // include as many cases as you like

		  default:
		    // actually, just run this code
		    break;
		}


		```

		 1. La palabra clave switch, seguida de un conjunto de paréntesis.

		 2. Una expresión o valor dentro del paréntesis.

		 3. La palabra clave mayúscula, seguida de una opción de cuál podría ser la expresión/valor, seguida de dos puntos.

		 4. Algún código para ejecutar si la elección coincide con la expresión.

		 5. Una declaración de break, seguida de un punto y coma. Si la elección anterior coincide con la expresión/valor, el navegador deja de ejecutar el bloque de código aquí y pasa a cualquier código que aparezca debajo de la declaración de cambio.

		 6. Tantos otros casos (puntos 3 a 5) como desee.

		 7. La palabra clave default, seguida exactamente del mismo patrón de código que uno de los casos (viñetas 3 a 5), ​​excepto que default no tiene otra opción después y no necesita la declaración break ya que no hay nada que hacer. corre después de esto en el bloque de todos modos. 

		 Esta es la opción predeterminada que se ejecuta si ninguna de las opciones coincide.

		Nota: No es necesario incluir la sección predeterminada; puede omitirla con seguridad si no hay posibilidad de que la expresión termine siendo igual a un valor desconocido. Sin embargo, si existe la posibilidad de que esto ocurra, debe incluirlo para manejar casos desconocidos.


	Operador ternario: 

		Hay una última parte de la sintaxis que queremos presentarle antes de que empiece a jugar con algunos ejemplos. 

		El operador ternario o condicional es una pequeña parte de sintaxis que prueba una condición y devuelve un valor/expresión si es verdadero y otro si es falso; esto puede ser útil en algunas situaciones y puede ocupar mucho menos código que un bloque if...else si tiene dos opciones que se eligen mediante una condición verdadero/falso. 

		El pseudocódigo se ve así

		```js

		condition ? run this code : run this code instead

		```

		Así que veamos un ejemplo simple:

		```js

		const greeting = isBirthday
		  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
		  : "Good morning Mrs. Smith.";

		```

		Aquí tenemos una variable llamada isBirthday; si esto es cierto, le damos a nuestro invitado un mensaje de feliz cumpleaños; si no, le damos el saludo diario estándar.


	Ejemplo de operador ternario:

		El operador ternario no sirve sólo para establecer valores de variables; también puedes ejecutar funciones o líneas de código, lo que quieras. 

		El siguiente ejemplo en vivo muestra un selector de temas simple donde se aplica el estilo del sitio mediante un operador ternario.

		```html

		<label for="theme">Select theme: </label>
		<select id="theme">
		  <option value="white">White</option>
		  <option value="black">Black</option>
		</select>

		<h1>This is my website</h1>

		```

		```js

		const select = document.querySelector("select");
		const html = document.querySelector("html");
		document.body.style.padding = "10px";

		function update(bgColor, textColor) {
		  html.style.backgroundColor = bgColor;
		  html.style.color = textColor;
		}

		select.addEventListener("change", () =>
		  select.value === "black"
		    ? update("black", "white")
		    : update("white", "black"),
		);

		```

		Aquí tenemos un elemento <select> para elegir un tema (blanco o negro), además de un h1 simple para mostrar el título de un sitio web. 

		También tenemos una función llamada update(), que toma dos colores como parámetros (entradas). 

		El color de fondo del sitio web se establece en el primer color proporcionado y el color del texto se establece en el segundo color proporcionado.

		Finalmente, también tenemos un detector de eventos onchange que sirve para ejecutar una función que contiene un operador ternario.

		Comienza con una condición de prueba: select.value === 'negro'. Si esto devuelve verdadero, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que terminamos con un color de fondo negro y un color de texto blanco. 

		Si devuelve falso, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que los colores del sitio están invertidos.

		Nota: También puede encontrar este ejemplo en GitHub (véalo ejecutándose en vivo allí también).



|| Bucles
	
	Útiles para completar rápidamente tareas repetitivas, desde múltiples cálculos básicos hasta casi cualquier otra situación en la que tengas muchos elementos de trabajo similares que completar.

	
	Usos de los Bucles: 

		Los bucles consisten en hacer lo mismo una y otra vez. 

		A menudo, el código será ligeramente diferente cada vez que se realice el ciclo, o se ejecutará el mismo código pero con diferentes variables.


	Ejemplo: 

		Supongamos que queremos dibujar 100 círculos aleatorios en un elemento <canvas> (presione el botón Actualizar para ejecutar el ejemplo una y otra vez para ver diferentes conjuntos aleatorios):

		```js

		const btn = document.querySelector("button");
		const canvas = document.querySelector("canvas");
		const ctx = canvas.getContext("2d");

		document.addEventListener("DOMContentLoaded", () => {
		  canvas.width = document.documentElement.clientWidth;
		  canvas.height = document.documentElement.clientHeight;
		});

		function random(number) {
		  return Math.floor(Math.random() * number);
		}

		function draw() {
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  for (let i = 0; i < 100; i++) {
		    ctx.beginPath();
		    ctx.fillStyle = "rgb(255 0 0 / 50%)";
		    ctx.arc(
		      random(canvas.width),
		      random(canvas.height),
		      random(50),
		      0,
		      2 * Math.PI,
		    );
		    ctx.fill();
		  }
		}

		btn.addEventListener("click", draw);

		```

	
	Implementación con bucles: 

		Parte del código que realmente dibuja los 100 círculos:

		```js

		for (let i = 0; i < 100; i++) {
		  ctx.beginPath();
		  ctx.fillStyle = "rgb(255 0 0 / 50%)";
		  ctx.arc(
		    random(canvas.width),
		    random(canvas.height),
		    random(50),
		    0,
		    2 * Math.PI,
		  );
		  ctx.fill();
		}

		```

		random(x), definido anteriormente en el código, devuelve un número entero entre 0 y x-1.

		Estamos usando un bucle para ejecutar 100 iteraciones de este código, cada una de las cuales dibuja un círculo en una posición aleatoria en la página.

		La cantidad de código necesaria sería la misma ya sea que dibujáramos 100 círculos, 1000 o 10 000. 

		Sólo tiene que cambiar un número.



	Implementación sin bubles: 		

		Si no estuviéramos usando un bucle aquí, tendríamos que repetir el siguiente código para cada círculo que quisiéramos dibujar.

		```js

		ctx.beginPath();
		ctx.fillStyle = "rgb(255 0 0 / 50%)";
		ctx.arc(
		  random(canvas.width),
		  random(canvas.height),
		  random(50),
		  0,
		  2 * Math.PI,
		);
		ctx.fill();

		```

		Esto se volvería muy aburrido y difícil de mantener.


	Recorriendo una colección

		La mayoría de las veces, cuando utilice un bucle, tendrá una colección de elementos y querrá hacer algo con cada elemento.

		Un tipo de colección es el Array, que conocimos en el capítulo Arreglos de este curso. 

		Pero también hay otras colecciones en JavaScript, incluidas Set y Map.

	
	El bucle for...of:

		La herramienta básica para recorrer una colección es el bucle for...of.

		```js

		const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

		for (const cat of cats) {
		  console.log(cat);
		}

		```

		En este ejemplo, for (const cat of cats) dice:

		1. Dados los gatos de la colección, obtén el primer artículo de la colección.


		2. Asígnelo a la variable cat y luego ejecute el código entre llaves {}.

		
		3. Obtenga el siguiente artículo y repita (2) hasta llegar al final de la colección.


	Map and filter: 

		JavaScript también tiene bucles más especializados para colecciones, y mencionaremos dos de ellos aquí.

		Puede usar map() para hacer algo con cada elemento de una colección y crear una nueva colección que contenga los elementos modificados.

		```js

		function toUpper(string) {
		  return string.toUpperCase();
		}

		const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

		const upperCats = cats.map(toUpper);

		console.log(upperCats);
		// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

		```

		Aquí pasamos una función a cats.map(), y map() llama a la función una vez para cada elemento de la matriz, pasando el elemento.

		Luego agrega el valor de retorno de cada llamada a función a una nueva matriz y finalmente devuelve la nueva matriz. 

		En este caso, la función que proporcionamos convierte el elemento a mayúsculas, por lo que la matriz resultante contiene todos nuestros gatos en mayúsculas:

		```js

		[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

		```

		Puede usar filter() para probar cada elemento de una colección y crear una nueva colección que contenga solo elementos que coincidan:

		```js

		function lCat(cat) {
		  return cat.startsWith("L");
		}

		const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

		const filtered = cats.filter(lCat);

		console.log(filtered);
		// [ "Leopard", "Lion" ]

		```


		Esto se parece mucho a map(), excepto que la función que pasamos devuelve un valor booleano: si devuelve verdadero, entonces el elemento se incluye en la nueva matriz. 

		Nuestra función prueba que el elemento comience con la letra "L", por lo que el resultado es una matriz que contiene solo gatos cuyos nombres comienzan con "L":


		```js

		[ "Leopard", "Lion" ]

		```

 		Tenga en cuenta que map() y filter() se usan a menudo con expresiones de función, sobre las cuales aprenderemos en el módulo Funciones. 

 		Usando expresiones de función podríamos reescribir el ejemplo anterior para que sea mucho más compacto:


 		```js

 		const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

		const filtered = cats.filter((cat) => cat.startsWith("L"));
		console.log(filtered);
		// [ "Leopard", "Lion" ]

 		```


 	Bucle estándar: 

 		En el ejemplo anterior de "dibujar círculos", no tienes una colección de elementos para recorrer: en realidad solo deseas ejecutar el mismo código 100 veces. 

 		En un caso como ese, deberías usar el bucle for. Esto tiene la siguiente sintaxis:

 		```js
 		for (initializer; condition; final-expression) {
		  // code to run
		}

		```

		1. En el ejemplo anterior de "dibujar círculos", no tienes una colección de elementos para recorrer: en realidad solo deseas ejecutar el mismo código 100 veces. 

		En un caso como ese, deberías usar el bucle for. Esto tiene la siguiente sintaxis


		2. La palabra clave for, seguida de algunos paréntesis.
		Dentro del paréntesis tenemos tres elementos, separados por punto y coma:

		 1. Un inicializador: 

		 	suele ser una variable establecida en un número, que se incrementa para contar el número de veces que se ha ejecutado el bucle. A veces también se la denomina variable de contador.

		 2. Una condición: 

		 	esto define cuándo el bucle debe dejar de repetirse. Generalmente se trata de una expresión que presenta un operador de comparación, una prueba para ver si se ha cumplido la condición de salida.

		 3. Una expresión final: 

		 	siempre se evalúa (o ejecuta) cada vez que el bucle ha realizado una iteración completa. Generalmente sirve para incrementar (o en algunos casos disminuir) la variable del contador, para acercarla al punto donde la condición ya no es cierta.

		3. Algunas llaves que contienen un bloque de código: este código se ejecutará cada vez que el bucle se repita.


	Calcular cuadrados: 

		Veamos un ejemplo real para que podamos visualizar más claramente lo que hacen.


		```js

		const results = document.querySelector("#results");

		function calculate() {
		  for (let i = 1; i < 10; i++) {
		    const newResult = `${i} x ${i} = ${i * i}`;
		    results.textContent += `${newResult}\n`;
		  }
		  results.textContent += "\nFinished!\n\n";
		}

		const calculateBtn = document.querySelector("#calculate");
		const clearBtn = document.querySelector("#clear");

		calculateBtn.addEventListener("click", calculate);
		clearBtn.addEventListener("click", () => (results.textContent = ""));

		```

		Este código calcula cuadrados para los números del 1 al 9 y escribe el resultado.

		El núcleo del código es el bucle for que realiza el cálculo.


		Dividamos la línea for (sea i = 1; i < 10; i++) en sus tres partes:

		 1. let i = 1: 

		 	la variable del contador, i, comienza en 1. 

		 	Tenga en cuenta que tenemos que usar let para el contador, porque lo reasignamos cada vez que recorremos el ciclo.


		 2. i < 10: 

		 	continúa recorriendo el bucle mientras i sea menor que 10.
		 

		 3. i++: 

		 	agregue uno a i cada vez que recorra el ciclo.


		Dentro del bucle calculamos el cuadrado del valor actual de i, es decir: i * i. 

		Creamos una cadena que expresa el cálculo que hicimos y el resultado, y agregamos esta cadena al texto de salida. 

		También agregamos \n, por lo que la siguiente cadena que agreguemos comenzará en una nueva línea. Entonces:

		 1. Durante la primera ejecución, i = 1, entonces sumaremos 1 x 1 = 1.

		 2. Durante la segunda ejecución, i = 2, por lo que sumaremos 2 x 2 = 4.

		 3. Etcétera…
		 
		 4. Cuando i sea igual a 10, dejaremos de ejecutar el ciclo y pasaremos directamente al siguiente fragmento de código debajo del ciclo, imprimiendo el mensaje ¡Terminado! mensaje en una nueva línea.		


	Recorrer colecciones con un bucle for:

		Puede utilizar un bucle for para iterar a través de una colección, en lugar de un bucle for...of.

		```js

		const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

		for (const cat of cats) {
		  console.log(cat);
		}

		```

		Podríamos reescribir ese código así:

		```js

		const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

		for (let i = 0; i < cats.length; i++) {
		  console.log(cats[i]);
		}


		```	

		 En este ciclo, comenzamos i en 0 y nos detenemos cuando alcanza la longitud de la matriz. 

		 Luego, dentro del bucle, usamos i para acceder a cada elemento de la matriz por turno.


		Esto funciona bien, y en las primeras versiones de JavaScript, for...of no existía, por lo que esta era la forma estándar de iterar a través de una matriz. 

		Sin embargo, ofrece más posibilidades de introducir errores en su código. Por ejemplo:

		 1. podrías comenzar i en 1, olvidando que el primer índice de la matriz es cero, no 1.
		 
		 2. puede detenerse en i <= cats.length, olvidando que el último índice de la matriz tiene una longitud de -1.

		Por motivos como este, normalmente es mejor utilizar for...of si puedes.


		A veces todavía necesitas usar un bucle for para iterar a través de una matriz. 

		Por ejemplo, en el código siguiente queremos registrar un mensaje que enumere nuestros gatos.

		```js

		const cats = ["Pete", "Biggles", "Jasmine"];

		let myFavoriteCats = "My cats are called ";

		for (const cat of cats) {
		  myFavoriteCats += `${cat}, `;
		}

		console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

		```

		La oración final no está muy bien formada:

			My cats are called Pete, Biggles, Jasmine,

		Preferiríamos que manejara al último gato de manera diferente, así:

			My cats are called Pete, Biggles, and Jasmine.

		Pero para hacer esto necesitamos saber cuándo estamos en la iteración final del bucle, y para hacerlo podemos usar un bucle for y examinar el valor de i:

		```js
		const cats = ["Pete", "Biggles", "Jasmine"];

		let myFavoriteCats = "My cats are called ";

		for (let i = 0; i < cats.length; i++) {
		  if (i === cats.length - 1) {
		    // We are at the end of the array
		    myFavoriteCats += `and ${cats[i]}.`;
		  } else {
		    myFavoriteCats += `${cats[i]}, `;
		  }
		}

		console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

		```


	Salir de bucles con break:

		Si desea salir de un bucle antes de que se hayan completado todas las iteraciones, puede utilizar la instrucción break. 

		Ya vimos esto en el artículo anterior cuando analizamos las declaraciones de switch: 

			cuando se cumple un caso en una declaración de switch que coincide con la expresión de entrada, la declaración de interrupción sale inmediatamente de la declaración de switch y pasa al código posterior.


		Lo mismo ocurre con los bucles: una instrucción break saldrá inmediatamente del bucle y hará que el navegador pase a cualquier código que le siga.

		¿Supongamos que queremos buscar entre una serie de contactos y números de teléfono y devolver solo el número que queremos encontrar? Primero, algo de HTML simple: un texto <input> que nos permite ingresar un nombre para buscar, un elemento <button> para enviar una búsqueda y un elemento <p> para mostrar los resultados.

		```html

		<label for="search">Search by contact name: </label>
		<input id="search" type="text" />
		<button>Search</button>

		<p></p>

		```

		Ahora pasemos al JavaScript:

		```js

		const contacts = [
		  "Chris:2232322",
		  "Sarah:3453456",
		  "Bill:7654322",
		  "Mary:9998769",
		  "Dianne:9384975",
		];
		const para = document.querySelector("p");
		const input = document.querySelector("input");
		const btn = document.querySelector("button");

		btn.addEventListener("click", () => {
		  const searchName = input.value.toLowerCase();
		  input.value = "";
		  input.focus();
		  para.textContent = "";
		  for (const contact of contacts) {
		    const splitContact = contact.split(":");
		    if (splitContact[0].toLowerCase() === searchName) {
		      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
		      break;
		    }
		  }
		  if (para.textContent === "") {
		    para.textContent = "Contact not found.";
		  }
		});


		```

		1. En primer lugar, tenemos algunas definiciones de variables:

			tenemos una serie de información de contacto, y cada elemento es una cadena que contiene un nombre y un número de teléfono separados por dos puntos.

		2. A continuación, adjuntamos un detector de eventos al botón (btn) para que cuando se presione se ejecute algún código para realizar la búsqueda y devolver los resultados.

		3. Almacenamos el valor ingresado en la entrada de texto en una variable llamada 'searchName', antes de vaciar la entrada de texto y enfocarla nuevamente, lista para la siguiente búsqueda. 

		Tenga en cuenta que también ejecutamos el método toLowerCase() en la cadena, por lo que las búsquedas no distinguirán entre mayúsculas y minúsculas.

		4. Ahora pasemos a la parte interesante, el bucle for...of:

			1. Dentro del bucle, primero dividimos el contacto actual en el carácter de dos puntos y almacenamos los dos valores resultantes en una matriz llamada 'splitContact'.

			2. Luego usamos una declaración condicional para probar si splitContact[0] (el nombre del contacto, nuevamente en minúsculas con toLowerCase()) es igual al nombre de búsqueda ingresado. 

			Si es así, ingresamos una cadena en el párrafo para informar cuál es el número del contacto y usamos break para finalizar el ciclo.

		5. Después del ciclo, verificamos si configuramos un contacto y, en caso contrario, configuramos el texto del párrafo en "Contacto no encontrado".


	Continue: 

		Saltar iteraciones con continuar

		La instrucción continue funciona de manera similar a break, pero en lugar de salir del ciclo por completo, salta a la siguiente iteración del ciclo. 

		Veamos otro ejemplo que toma un número como entrada y devuelve solo los números que son cuadrados de números enteros (números enteros).

		El HTML es básicamente el mismo que el del último ejemplo: una entrada numérica simple y un párrafo para la salida.

		```html

		<label for="number">Enter number: </label>
		<input id="number" type="number" />
		<button>Generate integer squares</button>

		<p>Output:</p>

		```

		El JavaScript también es prácticamente el mismo, aunque el bucle en sí es un poco diferente:

		```js

		const para = document.querySelector("p");
		const input = document.querySelector("input");
		const btn = document.querySelector("button");

		btn.addEventListener("click", () => {
		  para.textContent = "Output: ";
		  const num = input.value;
		  input.value = "";
		  input.focus();
		  for (let i = 1; i <= num; i++) {
		    let sqRoot = Math.sqrt(i);
		    if (Math.floor(sqRoot) !== sqRoot) {
		      continue;
		    }
		    para.textContent += `${i} `;
		  }
		});

		```

		1. En este caso, la entrada debe ser un número (num). 

		El bucle for recibe un contador que comienza en 1 (ya que en este caso no estamos interesados ​​en 0), una condición de salida que dice que el bucle se detendrá cuando el contador sea mayor que el número de entrada y un iterador que suma 1 al contador cada vez.


		2. Dentro del ciclo, encontramos la raíz cuadrada de cada número usando Math.sqrt(i), luego verificamos si la raíz cuadrada es un número entero probando si es igual a sí mismo cuando se ha redondeado hacia abajo al entero más cercano. 

		(Esto es lo que Math.floor() hace con el número que se pasa).


		3. Si la raíz cuadrada y la raíz cuadrada redondeada hacia abajo no son iguales (!==), significa que la raíz cuadrada no es un número entero, por lo que no nos interesa. 

		En tal caso, usamos la instrucción continue para pasar a la siguiente iteración del ciclo sin registrar el número en ninguna parte.


		4. Si la raíz cuadrada es un número entero, saltamos el bloque if por completo, por lo que la instrucción continuar no se ejecuta; en su lugar, concatenamos el valor i actual más un espacio al final del contenido del párrafo


	While y do While: 

		for no es el único tipo de bucle disponible en JavaScript. 

		En realidad, hay muchos otros y, aunque no es necesario que los entiendas todos ahora, vale la pena echar un vistazo a la estructura de un par de otros para que puedas reconocer las mismas características en funcionamiento de una manera ligeramente diferente.

		Primero, echemos un vistazo al bucle while. 

		La sintaxis de este bucle se ve así.

		```
		initializer
		while (condition) {
		  // code to run

		  final-expression
		}

		```

		Esto funciona de manera muy similar al bucle for, excepto que la variable inicializadora se establece antes del bucle y la expresión final se incluye dentro del bucle después del código a ejecutar, en lugar de que estos dos elementos se incluyan entre paréntesis. 

		La condición se incluye dentro de los paréntesis, que están precedidos por la palabra clave while en lugar de for.

		Los mismos tres elementos todavía están presentes y todavía están definidos en el mismo orden en que están en el bucle for. 

		Esto se debe a que debe tener un inicializador definido antes de poder verificar si la condición es verdadera o no. 

		Luego, la expresión final se ejecuta después de que se haya ejecutado el código dentro del bucle (se haya completado una iteración), lo que solo sucederá si la condición sigue siendo verdadera.

		Echemos un vistazo nuevamente a nuestro ejemplo de lista de gatos, pero reescrito para usar un bucle while.

		```js

		const cats = ["Pete", "Biggles", "Jasmine"];

		let myFavoriteCats = "My cats are called ";

		let i = 0;

		while (i < cats.length) {
		  if (i === cats.length - 1) {
		    myFavoriteCats += `and ${cats[i]}.`;
		  } else {
		    myFavoriteCats += `${cats[i]}, `;
		  }

		  i++;
		}

		console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

		```


		El bucle do... while es muy similar, pero proporciona una variación de la estructura while.

		```js

		initializer
		do {
		  // code to run

		  final-expression
		} while (condition)


		```

		En este caso, el inicializador vuelve a ser lo primero, antes de que comience el ciclo. 

		La palabra clave precede directamente a las llaves que contienen el código a ejecutar y la expresión final.

		La principal diferencia entre un bucle do... while y un bucle while es que el código dentro de un bucle do... while siempre se ejecuta al menos una vez. 

		Esto se debe a que la condición viene después del código dentro del bucle. 

		Entonces siempre ejecutamos ese código y luego verificamos si necesitamos ejecutarlo nuevamente.

		En los bucles while y for, la verificación es lo primero, por lo que es posible que el código nunca se ejecute.

		Reescribamos nuestro ejemplo de lista de gatos nuevamente para usar un bucle do... while

		```js

		const cats = ["Pete", "Biggles", "Jasmine"];

		let myFavoriteCats = "My cats are called ";

		let i = 0;

		do {
		  if (i === cats.length - 1) {
		    myFavoriteCats += `and ${cats[i]}.`;
		  } else {
		    myFavoriteCats += `${cats[i]}, `;
		  }

		  i++;
		} while (i < cats.length);

		console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

		```

		Nota: Nuevamente, esto funciona igual que se esperaba: mírelo ejecutándose en vivo en GitHub (consulte también el código fuente completo).

		Advertencia: Con while y do... while, como con todos los bucles, debes asegurarte de que el inicializador se incremente o, según el caso, se disminuya, para que la condición eventualmente se vuelva falsa. De lo contrario, el bucle continuará para siempre y el navegador lo obligará a detenerse o se bloqueará. Esto se llama bucle infinito.


	Elección de Bucle: 

		Si está iterando a través de una matriz o algún otro objeto que lo admita y no necesita acceso a la posición del índice de cada elemento, entonces for...of es la mejor opción. 

		Es más fácil de leer y hay menos posibilidades de equivocarse.

		Para otros usos, los bucles for, while y do... while son en gran medida intercambiables. 

		Todos se pueden utilizar para resolver los mismos problemas, y cuál utilice dependerá en gran medida de sus preferencias personales: 

			cuál le resultará más fácil de recordar o más intuitivo.


		Recomendamos, al menos para empezar, ya que probablemente sea el más fácil para recordar todo:

			el inicializador, la condición y la expresión final deben ir claramente entre paréntesis, por lo que es fácil ver dónde están y verificar. que no te los estás perdiendo.


		Echemos un vistazo a todos de nuevo.


		1. for...of:

			for (const item of array) {
			  // code to run
			}


		2. for:

			for (initializer; condition; final-expression) {
			  // code to run
			}


		3. while:

			initializer
			while (condition) {
			  // code to run

			  final-expression
			}


		4. do...while:

			initializer
			do {
			  // code to run

			  final-expression
			} while (condition)


		Nota: También hay otros tipos/funciones de bucle que son útiles en situaciones avanzadas/especializadas y que están fuera del alcance de este artículo.



|| Funciones 

	
	Bloques de código reutilizables.
	
	Permiten almacenar un fragmento de código que realiza una sola tarea
	
	Luego llamar a ese código cuando lo necesite utilizando un solo comando corto, en lugar de tener que escribir el mismo código varias veces. 
	
	
	Funciones integradas del navegador:
	
		Cada vez que manipulamos una cadena de texto
		
		```
		const myText = "I am a string";
		const newString = myText.replace("string", "sausage");
		console.log(newString);
		// the replace() string function takes a source string,
		// and a target string and replaces the source string,
		// with the target string, and returns the newly formed string
		
		```
		I am a sauge 
		
		
		O cada vez que manipulamos una matriz:
		
		```
		const myArray = ["I", "love", "chocolate", "frogs"];
		const madeAString = myArray.join(" ");
		console.log(madeAString);
		// the join() function takes an array, joins
		// all the array items together into a single
		// string, and returns this new string
		
		```
		I love chocolate frogs
		
		
		```
		const myNumber = Math.random();
		// the random() function generates a random number between
		// 0 and up to but not including 1, and returns that number

		```
		0.6861136003867523
		
		
		Muchas de estas funciones no están escritas en JavaScipt. 
		
		Estan escritas en C++
		
		Están llamando a partes del código del navegador en segundo plano
		
		Algunas funciones integradas del navegador no son parte del lenguaje JavaScript central
		
		Algunas se definen como parte de las API del navegador. que se basan en el lenguaje predeterminado para brindar incluso más funcionalidad
		
	
	Funciones vs Métodos: 
		
		Las funciones que forman parte de los objetos se denominan métodos.
		
		El código integrado viene en ambas formas: funciones y métodos. 
		
		Funciones integradas, así como los objetos integrados y sus métodos. 
			
		Las funciones personalizadas están definidas en tu código. 
		
		
		Las funciones pueden contener cualquier código que desees; 
		
		Puedes llamar a otras funciones desde dentro de las funciones
		
		Siempre se incluye de forma que se pueda llamar a la función por encima de la definición de la función y funcionará correctamente
		
	
	Parámetros de la funcion: 
		
		Van dentro de los paréntesis de la función. 
		
		Algunas funciones no lo requieren. 
		
		Como Math.random() que devuelve un numero random entre 0 y 1: 
		
		```
		const myNumber = Math.random();
		
		```
		
		En cambio, replace() necesita dos parámetros. 
		
		a subcadena que se buscará en la cadena principal y la subcadena con la que se reemplazará esa cadena
		
		```
		const myText = "I am a string";
		const newString = myText.replace("string", "sausage");
		
		```
	
	
	Parámetros Opcionales: 
	
		La función adoptará algún tipo de comportamiento predeterminado. 
		
		En join(), el parámetro del array es opcional. 
		
	
	Funciones anónimas:
	
		Verás funciones anónimas cuando una función espera recibir otra función como parámetro
		
		Se conoce como expresión de función.
		
		Las expresiones de función no se transfieren
		
		A diferencia de las declaraciones de función.
	
		El parámetro de la función suele pasarse como una función anónima.
		
		Ej: addEventListener()
		
		Espera que le pase (al menos) dos parámetros
		 
		 
		1. El nombre del evento que se va a escuchar
		
		Este caso es keydown 
		
		2. Una función que se ejecutará cuando se produzca el evento.
		
		Cuando el usuario presione una tecla, el navegador llamará a la función que proporcionó
		
		Le pasará un parámetro que contiene información sobre este evento, incluida la tecla específica que presionó el usuario
		
		```
		function logKey(event) {
		  console.log(`You pressed "${event.key}".`);
		}

		textBox.addEventListener("keydown", logKey);
		
		```
		
		En lugar de definir una función independiente. 
		
		Puede pasar un función anonima en addEventListener(). 
		
		
	Funciones flechas: 
		
		Podemos usarlas para pasarlas a otras funciones. 
		
		En lugar de escribir 'function'
		
		Escribimos el parametro y un flecha. 
		
		```
		textBox.addEventListener("keydown", (event) => {
		console.log(`You pressed "${event.key}".`);
		});
		
		```
		
		Si solo toma un parametro podemos escribir sin parentesis su parametro
		
		```
		textBox.addEventListener("keydown", event => {
		  console.log(`You pressed "${event.key}".`);
		});


		```
		
		Si su función contiene solo una línea	
		
		Es una declaración de retorno
		
		Puede omitir las llaves y la palabra clave return y devolver implícitamente la expresión.
		
		Ej: método map() de Array para duplicar cada valor en la matriz original
		
		```
		const originals = [1, 2, 3];

		const doubled = originals.map(item => item * 2);

		console.log(doubled); // [2, 4, 6]
					
		```
		
		item => item * 2 
 
		Equivale a la función flecha:
		
		```
		function doubleItem(item) {
		  return item * 2;
		}
		
		```
		
		Podemos reescribir el ej, de addEventListener()
		
		```
		textBox.addEventListener("keydown", (event) =>
		  console.log(`You pressed "${event.key}".`),
		);
				
		```
		
		En este caso, el valor de console.log(), que no está definido
		
		Se devuelve implícitamente desde la función de devolución de llamada
		
		
		Existen otras diferencias con las funciones normales y flechas. 
		
		Como el caso de la palabra this. 
		
		
	Scope y conflictos: 
	
		Cuando creas una función, las variables y otras cosas definidas dentro de la función están dentro de su propio ámbito de aplicación
		
		Están bloqueadas en sus propios compartimentos separados, inaccesibles desde el código externo a las funciones
		
		
		El nivel superior fuera de todas tus funciones se denomina ámbito global. 
		
		Los valores definidos en el ámbito global son accesibles desde cualquier parte del código
		
		
		Por seguridad, los scripts externos que llamas desde otro lugar podrían comenzar a alterar tu código y causar problemas porque están usando los mismos nombres de variable que otras partes del código, lo que causa conflictos. 
		
		
		Ej: archivo HTML que llama a dos archivos JavaScript externos y ambos tienen una variable y una función definidas que usan el mismo nombre:
		
		```
		<!-- Excerpt from my HTML -->
		<script src="first.js"></script>
		<script src="second.js"></script>
		
		<script>
		  greeting();
		</script>
		
		```
		
		// first.js
		const name = "Chris";
		function greeting() {
		  alert(`Hello ${name}: welcome to our company.`);
		}
		
		
		// second.js
		const name = "Zaptec";
		function greeting() {
		  alert(`Our company is called ${name}.`);
		}

		
		Las dos funciones que desea llamar se denominan greeting(), pero solo puede acceder a la función greeting() del archivo first.js (la segunda se ignora). 
		
		Además, se produce un error al intentar (en el archivo second.js) asignar un nuevo valor a la variable name, porque ya se declaró con const y, por lo tanto, no se puede reasignar
		
		
	
	Ej: 
		
		Dos funciones llamadas a() y b()
		
		tres variables (x, y, z)
		
		dos definidas dentro de las funciones
		
		una en el ámbito global.
		
		una tercera función llamada output()
		
		toma un único parámetro y lo genera en un párrafo de la página.
		
		```
		const x = 1;

		function a() {
		  const y = 2;
		}

		function b() {
		  const z = 3;
		}

		function output(value) {
		  const para = document.createElement('p');
		  document.body.appendChild(para);
		  para.textContent = `Value: ${value}`;
		}
		
		```
		
	
		
		
		
|| Funciones Propias o personalizadas

	Se llamará displayMessage(). 
	
	Mostrará un cuadro de mensaje personalizado en una página web
	
	Actuará como un reemplazo de alert()
	
	La función alert es limitada: puede modificar el mensaje, pero no puede variar fácilmente nada más, como el color, el ícono o cualquier otra cosa. 
	
	Se usan las mismas reglas para los nombres de las funciones y variables. 
	
	
	El HTML es simple: el cuerpo contiene solo un botón.
	
	CSS básicos para diseñar el cuadro de mensaje personalizado 
	
	El elemento <script> vacío para colocar nuestro JavaScript.
	
	
	Agregamos al script: 
	
	```
	function displayMessage() {
		const body = document.body;

		const panel = document.createElement("div");
		panel.setAttribute("class", "msgBox");
		body.appendChild(panel);

		const msg = document.createElement("p");
		msg.textContent = "This is a message box";
		panel.appendChild(msg);

		const closeBtn = document.createElement("button");
		closeBtn.textContent = "x";
		panel.appendChild(closeBtn);

		closeBtn.addEventListener("click", () =>
		  panel.parentNode.removeChild(panel),
		);
	}}
	
	```
	
	La primera línea selecciona el elemento <body> utilizando la API DOM
	
	Para obtener la propiedad body del objeto de documento global y asignarla a una constante llamada body	
	
	Para que podamos hacer cosas con ella más adelante.

	
	Después sección utiliza una función de la API DOM llamada document.createElement()

	Para crear un elemento <div> y almacenar una referencia a él en una constante llamada panel.
	
	
	Luego usamos otra función de la API DOM llamada Element.setAttribute() 
	
	Para establecer un atributo de clase en nuestro panel con un valor de msgBox. 

	Para facilitar el estilo del elemento: si observa el CSS en la página,
	
	Usando un selector de clase .msgBox para dar estilo al cuadro de mensaje y su contenido.
	
	
	LLamamos a una función DOM llamada Node.appendChild() en la constante body que almacenamos anteriormente
	 
	Anida un elemento dentro de otro como un elemento secundario de este. 
	
	Especificamos el panel <div> como el elemento secundario que queremos agregar dentro del elemento <body>. 
	
	Necesitamos hacer esto ya que el elemento que creamos no aparecerá solo en la página; necesitamos especificar dónde colocarlo
	
	
	Llamamos a addEventListener() para agregar una función que se llamará cuando el usuario haga clic en el botón "cerrar".
	 
	El código eliminará todo el panel de la página para cerrar el cuadro de mensaje.
	
	El método addEventListener() lo proporciona el botón (o, de hecho, cualquier elemento de la página) al que se le puede pasar una función y el nombre de un evento. 
	  
	El nombre del evento es "click", lo que significa que cuando el usuario haga clic en el botón, se ejecutará la función
	
	Dentro de la función usa la función de la API DOM Node.removeChild() 
	
	Para especificar que queremos eliminar un elemento secundario específico del elemento HTML, en este caso, el panel <div>
	
	
	Todo este bloque de código genera un bloque de HTML que se ve así y lo inserta en la página:
	
	```
	<div class="msgBox">
	  <p>This is a message box</p>
	  <button>x</button>
	</div>
	
	```
	
	
	lo principal, estructura y uso de la función: 
	
	Incluir: 
	
	```
	displayMessage();
	
	```
	
	Cargar en el navegador, verás que el pequeño cuadro de mensaje aparece inmediatamente, solo una vez.
	
	Dado que solo lo llamamos una vez.
	
	ahora tenemos una función reutilizable que podemos llamar cuando queramos.
	
	
	Queramos que aparezca en respuesta a las acciones del usuario y del sistema. 
	
	En una aplicación real, probablemente se llamaría a un cuadro de mensaje 
	
	Como respuesta a la disponibilidad de nuevos datos, a un error que se ha producido, a que el usuario intente eliminar su perfil ("¿está seguro de esto?"), o a que el usuario añada un nuevo contacto y la operación se complete correctamente, etc.
	
	Haremos que aparezca el cuadro de mensaje cuando el usuario haga clic en el botón.
	
	
	Seleccionaremos el botón y almacenaremos una referencia a él en una constante.
	
	Agregue la siguiente línea a su código, encima de la definición de la función:
	
	```
	const btn = document.querySelector("button");
	
	```
	
	```
	btn.addEventListener("click", displayMessage);
	
	```
	
	Al controlador de eventos click de nuestro closeBtn, aquí estamos llamando a un código en respuesta a que se haga clic en un botón
	
	En lugar de llamar a una función anónima que contenga algún código, estamos llamando a nuestra función displayMessage() por su nombre.
	
	Debería ver aparecer el cuadro de mensaje cuando haga clic en el botón
	
	```
	btn.addEventListener("click", displayMessage());
	
	```
	
	Dado que no queremos llamar a la función inmediatamente.
	
	Sino solo después de que se haya hecho clic en el botón
	
	Caerá en un bucle. 
	
	```
	btn.addEventListener("click", displayMessage());
	
	```
	
	El cuadro de mensaje aparece sin que se haya hecho clic en el botón.
	
	Los paréntesis en este contexto a veces se denominan "operador de invocación de función". 
	 
	Solo los usas cuando quieres ejecutar la función inmediatamente en el ámbito actual. 
	
	Del mismo modo, el código dentro de la función anónima no se ejecuta inmediatamente,
	
	Está dentro del ámbito de la función.
	 
	 
	No queremos mostrar siempre el mismo mensaje predeterminado. 
	 
	Agregando algunos parámetros que nos permitan llamarla con algunas opciones diferentes.
	 
	Actualizar displayMessage
	
	```
	function displayMessage(msgText, msgType) {

	```
			
	Cuando llamamos a la función, podemos proporcionar dos valores de variable dentro de los paréntesis
	 
	Para especificar el mensaje que se mostrará en el cuadro de mensaje y el tipo de mensaje que es.
	
	Para utilizar el primer parámetro
	
	De
	
	```
	msg.textContent = "Este es un cuadro de mensaje";
	
	```
	
	A: 
	
	```
	msg.textContent = msgText;
	
	```
	
	Actualizar su llamada de función para incluir un texto de mensaje actualizado. 
	
	De: 
	
	```
	btn.addEventListener("click", displayMessage);
	
	```
	
	A:
	
	```
	btn.addEventListener("click", () =>
	displayMessage("Woo, this is a different message!"),
	);
	
	```
		
	Especificar parámetros dentro de paréntesis para la función que estamos llamando
	 
	No podemos llamarla directamente; 	
	
	necesitamos ponerla dentro de una función anónima para que no esté en el alcance inmediato
	
	Y no se llame inmediatamente.
	
	No se llamará hasta que se haga clic en el botón.
	
	Ahora también puedes variar el mensaje dentro del parámetro para obtener diferentes mensajes que se muestran en el cuadro. 
	
	 
	 
	 
|| Valores de Retorno en las Funciones

	Algunas funciones no devuelven un valor significativo, pero otras sí. 
	
	Es importante comprender cuáles son sus valores, cómo usarlos en su código
	
	cómo hacer que las funciones devuelvan valores útiles.
	
	
	Son los valores los valores que devuelve una función cuando se completa.
	
	```
	const myText = "The weather is cold";
	const newString = myText.replace("cold", "warm");
	console.log(newString); // Should print "The weather is warm"
	// the replace() string function takes a string,
	// replaces one substring with another, and returns
	// a new string with the replacement made
	
	```
	
	La función reemplazar() se invoca en la cadena myText y se le pasan dos parámetros:

		La subcadena a encontrar ('fría')
		La cadena para reemplazarla con ('cálida')

	Cuando la función se completa (termina de ejecutarse)
	
	Devuelve un valor, que es una nueva cadena con el reemplazo realizado. 
	
	El resultado de este valor de retorno se guarda en la variable newString.

	En la referencia de MDN de la función reemplazar(), verá una sección llamada valor de retorno. 	
	
	Es muy útil saber y comprender qué valores devuelven las funciones
	
	
	Algunas funciones no devuelven ningún valor.
	
	Valor de retorno como nulo o indefinido.
	
	La función displayMessage() no se devuelve ningún valor específico cuando se invoca la función
	
	Simplemente hace que aparezca un cuadro
	
	
	Se utiliza un valor de retorno cuando la función es un paso intermedio en un cálculo de algún tipo.
	
	Quiere llegar a un resultado final, que implica algunos valores que deben calcularse mediante una función. 
	
	Después de que la función calcula el valor, puede devolver el resultado para almacenarlo en una variable
	
	Puede utilizar esta variable en la siguiente etapa del cálculo.
	
	
	Para devolver un valor de una función personalizada
	
	```
	function draw() {
	  ctx.clearRect(0, 0, WIDTH, HEIGHT);
	  for (let i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.fillStyle = "rgb(255 0 0 / 50%)";
		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
		ctx.fill();
	  }
	}
	
	```
	
	Dentro de cada iteración del bucle, se realizan tres llamadas a la función aleatoria(),
	
	Para generar un valor aleatorio para la coordenada x, la coordenada y
	
	y el radio del círculo actual,
	
	La función random() toma un parámetro (un número entero) y devuelve un número aleatorio completo entre 0 y ese número.
	
	Parecido a: 
	
	```
	function random(number) {
	  return Math.floor(Math.random() * number);
	}
	
	```
	
	Podría escribirse de la siguiente manera:
	
	```
	function random(number) {
	  const result = Math.floor(Math.random() * number);
	  return result;
	}

	```

	La primera versión es más rápida de escribir y más compacta.

	Devolvemos el resultado del cálculo Math.floor(Math.random() * number) cada vez que se llama a la función.
	
	Este valor de retorno aparece en el punto en que se llamó a la función y el código continúa
	
	```
	ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

	```
	
	Sin la función aleatoria, los valores de retorno son: 
	
	```
	ctx.arc(500, 200, 35, 0, 2 * Math.PI);
	
	```
	

	Ej, página HTML simple que contiene un campo de texto <input> y un párrafo. 
	
	<script>, en el que hemos almacenado una referencia a ambos elementos HTML en dos variables.
	
	Esta página le permitirá ingresar un número en el cuadro de texto
	
	y mostrar diferentes números relacionados con él a continuación.

	
	Ej: 
	
	```
	<input class="numberInput" type="text">
	<p></p>
 
    const input = document.querySelector('.numberInput');
    const para = document.querySelector('p');

	```
	
	En HTML, campo de texto <input> y un párrafo. 
	
	En JS, referencia a ambos elementos HTML en dos variables.
	
	Esta página le permitirá ingresar un número en el cuadro de texto y mostrar diferentes números relacionados con él a continuación.

	```
	function squared(num) {
	  return num * num;
	}

	function cubed(num) {
	  return num * num * num;
	}

	function factorial(num) {
	  if (num < 0) return undefined;
	  if (num === 0) return 1;
	  let x = num - 1;
	  while (x > 1) {
		num *= x;
		x--;
	  }
	  return num;
	}

	```
	
	Tres funciones para calcular números como parametro. 
	
	Cuadrado, Cubo y Factorial de un número. 
	
	
	Imprimir información sobre el número ingresado en la entrada de texto agregando el siguiente controlador de eventos debajo de las funciones existentes:
	
	```
	input.addEventListener("change", () => {
	  const num = parseFloat(input.value);
	  if (isNaN(num)) {
		para.textContent = "You need to enter a number!";
	  } else {
		para.textContent = `${num} squared is ${squared(num)}. `;
		para.textContent += `${num} cubed is ${cubed(num)}. `;
		para.textContent += `${num} factorial is ${factorial(num)}. `;
	  }
	});

	
	```
	
	Al agregar un detector al evento de cambio
	
	esta función se ejecuta cada vez que el evento de cambio
	
	se activa en la entrada de texto
	
	cuando se ingresa un nuevo valor en la entrada de texto y se envía 
	
	ingresa un valor y luego desenfoca la entrada
	
	presionando Tab o Retorno
	
	Cuando se ejecuta esta función anónima
	
	el valor de la entrada se almacena en la constante numérica.
	
	La declaración if imprime un mensaje de error si el valor ingresado no es un número. 
	
	La condición comprueba si la expresión isNaN(num) devuelve verdadero.
	
	La función isNaN() prueba si el valor num no es un número
	
	si es así, devuelve verdadero y, si no, devuelve falso.

	Si la condición devuelve falso
	
	el valor numérico es un número y la función imprime una oración dentro del elemento de párrafo que indica los valores cuadrado, cúbico y factorial del número.
	
	La sentancia llama a las funciones al cuadrado(), al cubo() y factorial() para calcular los valores requeridos.
	
	
	Piense en la idea de crear una biblioteca de funciones. 
	
	A medida que avance en su carrera de programación, comenzará a hacer el mismo tipo de cosas una y otra vez. 
	
	Es una buena idea crear su propia biblioteca de funciones de utilidad para hacer este tipo de cosas. 
	
	Puede copiarlos en un código nuevo o incluso simplemente aplicarlos a páginas HTML donde los necesite.
	
	
	Es una buena idea comprobar que todos los parámetros necesarios estén validados
	
	Que los parámetros opcionales tengan algún tipo de valor predeterminado proporcionado.



|| Intro a Eventos
	
	Son cosas que suceden en el sistema que estás programando
	
	De las que el sistema te informa para que tu código pueda reaccionar ante ellos.

	Si el usuario hace clic en un botón en una página web

	Es posible que desee reaccionar a esa acción mostrando un cuadro de información. 

	
	El sistema produce (o "dispara") una señal de algún tipo cuando ocurre un evento

	Proporciona un mecanismo mediante el cual se puede realizar una acción automáticamente (es decir, ejecutar algún código).

	Ejecutar código cuando ocurre el evento.

	Los eventos se activan dentro de la ventana del navegador
	
	Tienden a adjuntarse a un elemento específico que reside en ella.
	
	Puede ser un solo elemento, un conjunto de elementos, el documento HTML cargado en la pestaña actual o toda la ventana del navegador. 
	
	Hay muchos tipos diferentes de eventos que pueden ocurrir.
	
	
	El usuario selecciona, hace clic o pasa el cursor sobre un determinado elemento.

	El usuario elige una tecla en el teclado.

	El usuario cambia el tamaño o cierra la ventana del navegador.
	
	Una página web termina de cargarse.
	
	Se envía un formulario.

	Un vídeo se reproduce, se pausa o finaliza.
	
	Se produce un error.
	
	
	Para reaccionar ante un evento, se le adjunta un controlador de eventos.

	(event handler)
	
	Es un bloque de código generalmente una función JS. 
	
	De ejecuta cuando se activa el evento.
	
	Cuando se define un bloque de código de este tipo para ejecutarse en respuesta a un evento
	
	Estamos registrando un controlador de eventos (event handler)

	
	Los controladores de eventos a veces se denominan detectores de eventos.
	
	Son prácticamente intercambiables para nuestros propósitos, aunque estrictamente hablando, funcionan juntos.
	
	El oyente (listener) escucha si ocurre el evento y el controlador es el código que se ejecuta en respuesta a que suceda.
	

	Los eventos web no forman parte del lenguaje principal de JavaScript

	Se definen como parte de las API integradas en el navegador.


	Ej, manejar un evento de clic. 
	
	```
	<button>Change color</button>
	
	```
	
	
	Con JS, agrega un controlador de eventos al evento "clic" del botón
	
	El controlador reacciona al evento estableciendo el fondo de la página en un color aleatorio. 

	```
	const btn = document.querySelector("button");

	function random(number) {
	  return Math.floor(Math.random() * (number + 1));
	}

	btn.addEventListener("click", () => {
	  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
	  document.body.style.backgroundColor = rndCol;
	});

	```
	
	
	Usando addEventListener():
		
		Los objetos que pueden activar eventos tienen un método addEventListener()
		
		Este es el mecanismo recomendado para agregar controladores de eventos.
		
		```
		const btn = document.querySelector("button");

		function random(number) {
		  return Math.floor(Math.random() * (number + 1));
		}

		btn.addEventListener("click", () => {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  document.body.style.backgroundColor = rndCol;
		});

		```
		
		El elemento HTML <button> activará un evento cuando el usuario haga clic en el botón.
		
		Define una función addEventListener(), a la que llamamos aquí
	
		Estamos pasando dos parámetros:

			1. la cadena "clic", para indicar que queremos escuchar el evento de clic.
			
				Los botones pueden activar muchos otros eventos
				
				Como "mouseover" cuando el usuario mueve el mouse sobre el botón, o "keydown" cuando el usuario presiona una tecla y el botón está enfocado.
				
			
			2. una función para llamar cuando ocurre el evento.
			
				En nuestro caso, la función genera un color RGB aleatorio

				Establece el color de fondo de la página <cuerpo> en ese color.

		
		Está bien hacer que la función del controlador sea una función con nombre independiente, como esta:
		
		```
		const btn = document.querySelector("button");

		function random(number) {
		  return Math.floor(Math.random() * (number + 1));
		}

		function changeBackground() {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  document.body.style.backgroundColor = rndCol;
		}

		btn.addEventListener("click", changeBackground);
		
		```
		
		
	Otros eventos: 
	
		Hay muchos eventos diferentes que pueden ser activados por un elemento de botón.
		
		Àl Color aleatorio agregar. 
		
		
		focus u blur (Enfocar. desenfocar): 
			
			El color cambia cuando el botón está enfocado y desenfocado
			
			Intente presionar la pestaña para enfocarse en el botón y presione la pestaña nuevamente para enfocarse fuera del botón.
			
			A menudo se utilizan para mostrar información sobre cómo completar los campos del formulario cuando están enfocados
			
			O para mostrar un mensaje de error si un campo del formulario se completa con un valor incorrecto.

		
		dblclick: 
		
			El color cambia solo cuando se hace doble clic en el botón.

		
		mouseover y mouseout:	
			
			El color cambia cuando el puntero del mouse se coloca sobre el botón o cuando el puntero se aleja del botón, respectivamente.
		
		
		Algunos eventos, como el clic, están disponibles en casi cualquier elemento.
		
		Otros son más específicos y sólo útiles en determinadas situaciones
			
		Por ejemplo, el evento de reproducción sólo está disponible en algunos elementos, como <video>.
		
		
		
	Remover listener 	
		
		Si ha agregado un controlador de eventos usando addEventListener()
		
		Puede eliminarlo nuevamente usando el método removeEventListener().
		
		Por ejemplo, esto eliminaría el controlador de eventos changeBackground():
		
		```
		btn.removeEventListener("click", changeBackground);
		
		```
		
		
		Los controladores de eventos también se pueden eliminar pasando un AbortSignal a addEventListener()
		
		Luego llamando a abort() en el controlador que posee el AbortSignal.
		
		Agregar un controlador de eventos que podemos eliminar con AbortSignal:
		
		```
		const controller = new AbortController();

		btn.addEventListener("click",
		  () => {
			const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
			document.body.style.backgroundColor = rndCol;
		  },
		  { signal: controller.signal } // pass an AbortSignal to this handler
		);
	
		```
		
		Luego, el controlador de eventos creado por el código anterior se puede eliminar de esta manera:
		
		```
		controller.abort(); // removes any/all event handlers associated with this controller

		```
		
		
		Para programas pequeños y simples, no es necesario limpiar los controladores de eventos antiguos y no utilizados
		
		Pero para programas más grandes y complejos, puede mejorar la eficiencia
			
		Además, la capacidad de eliminar controladores de eventos

		Le permite tener el mismo botón realizando diferentes acciones en diferentes circunstancias
		
		Todo lo que tiene que hacer es agregar o eliminar controladores.

	
	Agregar varios Listeners para un solo evento:
	
		Al realizar más de una llamada a addEventListener() y proporcionar diferentes controladores
	
		Puede tener varios controladores para un solo evento:
		
		```
		myElement.addEventListener("click", functionA);
		myElement.addEventListener("click", functionB);
		
		```
		
		Ambas funciones ahora se ejecutarán cuando se haga clic en el elemento.


	Otros mecanismos para controlar eventos: 
	
		addEventListener() para registrar controladores de eventos.
		
		Es el método más potente y se adapta mejor a programas más complejos.
		
		Pero hay otras dos formas de registrar controladores de eventos
		
		Propiedades del controlador de eventos y controladores de eventos en línea.


	1. Propiedades del controlador de eventos: 
		
		Los objetos (como los botones) que pueden activar eventos
		
		También suelen tener propiedades cuyo nombre va seguido del nombre del evento
		
		Por ejemplo, los elementos tienen una propiedad al hacer clic.
		
		Esto se denomina propiedad del controlador de eventos.
		
		Para escuchar el evento, puede asignar la función de controlador a la propiedad.
		
		
		Podríamos reescribir el ejemplo de color aleatorio así:
		
		```
		const btn = document.querySelector("button");

		function random(number) {
		  return Math.floor(Math.random() * (number + 1));
		}

		btn.onclick = () => {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  document.body.style.backgroundColor = rndCol;
		};

		
		```
		
		También puede establecer la propiedad del controlador en una función con nombre:
		
		
		```
		const btn = document.querySelector("button");

		function random(number) {
		  return Math.floor(Math.random() * (number + 1));
		}

		function bgChange() {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  document.body.style.backgroundColor = rndCol;
		}

		btn.onclick = bgChange;
	
		```
		
		Con las propiedades del controlador de eventos
		
		No puede agregar más de un controlador para un solo evento.
		
		
		Por ejemplo, puedes llamar a addEventListener('click', handler) en un elemento varias veces
		
		Con diferentes funciones especificadas en el segundo argumento:
		
		```
		element.onclick = function1;
		element.onclick = function2;
		
		```
		
		
	2. Controladores de eventos en línea:
	
		No debería usarse. 
		
		```
		<button onclick="bgChange()">Press me</button>
		
		function bgChange() {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  document.body.style.backgroundColor = rndCol;
		}

		```
				
		El primer método para registrar controladores de eventos que se encuentra en la Web
		
		Involucraba atributos HTML del controlador de eventos
		
		El valor del atributo es literalmente el código JavaScript que desea ejecutar cuando ocurre el evento.
		
		
		También puedes insertar JavaScript directamente dentro del atributo
		
		```
		<button onclick="alert('Hello, this is my old-fashioned event handler!');">
		  Press me
		</button>
		
		```
		
		Puede parecer fácil usar un atributo de controlador de eventos si está haciendo algo realmente rápido, pero rápidamente se vuelven inmanejables e ineficientes.

		Mezclar HTML y JavaScript, ya que resulta difícil de leer. Mantener su JavaScript separado es una buena práctica 
		
		Incluso en un único archivo, los controladores de eventos en línea no son una buena idea. 
		
		Un botón está bien, pero ¿y si tuvieras 100 botones? Tendrías que agregar 100 atributos al archivo
		
		Con JavaScript, puedes agregar fácilmente una función de controlador de eventos a todos los botones de la página sin importar cuántos haya
		
		
		```
		const buttons = document.querySelectorAll("button");

		for (const button of buttons) {
		  button.addEventListener("click", bgChange);
		}
		
		```
		
		Muchas configuraciones de servidor comunes no permitirán JavaScript en línea, como medida de seguridad.

		Nunca debes usar los atributos del controlador de eventos HTML; están desactualizados y usarlos es una mala práctica.
		
	
	
	Event Objects: 
	
		A veces, dentro de una función de controlador de eventos
		
		Verá un parámetro especificado con un nombre como evento, evt o e.
		
		Esto se denomina objeto de evento y se pasa automáticamente a los controladores de eventos
		
		Para proporcionar funciones e información adicionales.
		
		
		Reescribamos color random: 
		
		```
		const btn = document.querySelector("button");

		function random(number) {
		  return Math.floor(Math.random() * (number + 1));
		}

		function bgChange(e) {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  e.target.style.backgroundColor = rndCol;
		  console.log(e);
		}

		btn.addEventListener("click", bgChange);

		```
		
		Estamos incluyendo un objeto de evento, e, en la función
		
		En la función configurando un estilo de color de fondo en e.target, que es el botón en sí. La
		
		La propiedad de destino del objeto de evento es siempre una referencia al elemento en el que ocurrió el evento. 
		
		En este ejemplo, configuramos un color de fondo aleatorio en el botón, no en la página.
		
		
		Puede usar cualquier nombre que desee para el objeto de evento
		
		Solo necesita elegir un nombre que luego pueda usar para hacer referencia a él dentro de la función del controlador de eventos
		
	
	Propiedades extra de los objetos de evento: 
	
		La mayoría de los objetos de evento tienen un conjunto estándar de propiedades y métodos disponibles
		
		Están en la referencia del objeto evento. 
		
		Algunos objetos de eventos añaden propiedades adicionales que son relevantes para ese tipo particular de evento
		
		Su objeto de evento es un KeyboardEvent
		
		Es un objeto de evento especializado con una propiedad clave que le indica qué tecla se presionó:
		
		```
		<input id="textBox" type="text" />
		<div id="output"></div>

		const textBox = document.querySelector("#textBox");
		const output = document.querySelector("#output");
		textBox.addEventListener("keydown", (event) => {
		  output.textContent = `You pressed "${event.key}".`;
		});

		```
		
		
	Prevenir el comportamiento predeterminado:
		
		Situación en la que deseas evitar
		
		Que un evento haga lo que hace de forma predeterminada.
	
		El ejemplo más común es el de un formulario web
		
		Un formulario de registro personalizado
	
		Cuando completa los detalles y hace clic en el botón Enviar
		
		El comportamiento natural es que los datos se envíen a una página específica en el servidor
		
		Para su procesamiento y que el navegador sea redirigido a una página de "mensaje de éxito" de algún tipo (o la misma página, si no se especifica otra).

		
		El problema surge cuando el usuario no ha enviado los datos correctamente
		
		Como desarrollador, desea evitar el envío al servidor y mostrar un mensaje de error que indique qué está mal y qué se debe hacer para corregir las cosas.
		
		Algunos navegadores admiten funciones de validación automática de datos de formulario.
		
		Pero como muchos no lo hacen, se recomienda no confiar en ellas e implementar sus propias comprobaciones de validación.
		
		
		Ej, un formulario HTML simple que requiere que ingrese su nombre y apellido:
		
		
		```		
		<form>
		  <div>
			<label for="fname">First name: </label>
			<input id="fname" type="text" />
		  </div>
		  <div>
			<label for="lname">Last name: </label>
			<input id="lname" type="text" />
		  </div>
		  <div>
			<input id="submit" type="submit" />
		  </div>
		</form>
		<p></p>
	
		```
		
		
		Para Js, implementamos una verificación muy simple dentro de un controlador
		
		Para el evento de envío (el evento de envío se activa en un formulario cuando se envía)
		
		Prueba si los campos de texto están vacíos.
		
		Si es así, llamamos a la función preventDefault() en el objeto de evento
		
		Que detiene el envío del formulario
		
		Luego mostramos un mensaje de error en el párrafo debajo de nuestro formulario para decirle al usuario qué está mal.
		
		```
		const form = document.querySelector("form");
		const fname = document.getElementById("fname");
		const lname = document.getElementById("lname");
		const para = document.querySelector("p");

		form.addEventListener("submit", (e) => {
		  if (fname.value === "" || lname.value === "") {
			e.preventDefault();
			para.textContent = "You need to fill in both names!";
		  }
		});

		```
		
		
	Los eventos no solo están en la web: 
		
		No son exclusivos de JavaScript
		
		La mayoría de los lenguajes de programación tienen algún tipo de modelo de eventos
		
		La forma en que funciona el modelo a menudo difiere
		
		El modelo de eventos en JavaScript para páginas web
		
		Difiere del modelo de eventos de JavaScript tal como se usa en otros entornos.

		
		Node.js es un tiempo de ejecución de JavaScript 
		
		Permite a los desarrolladores utilizar JavaScript para crear aplicaciones de red y del lado del servidor.
		
		El modelo de eventos de Node.js se basa en listeners
	
		Para escuchar eventos y emisores para emitir eventos periódicamente
		
		(events and emmiters). 
		
		El código es bastante diferente y utiliza funciones como 
		
		on() para registrar un listener de eventos
		
		once() para registrar un detector de eventos que se da de baja después de ejecutarse una vez.
		
		Los documentos del evento de conexión HTTP proporcionan un buen ejemplo.

		
		Puede utilizar JavaScript para crear complementos para varios navegadores
		
		Utilizando una tecnología llamada WebExtensions
		
		El modelo de eventos es similar al modelo de eventos web,
		
		Pero un poco diferente: las propiedades de los detectores de eventos están escritas en mayúsculas y minúsculas
		
		Como onMessage en lugar de onmessage
		
		Deben combinarse con la función addListener
		
		
	En el ejemplo Prevención del comportamiento predeterminado
	
	Tenemos algunos cuadros de texto, colocados dentro de elementos <div>
	
	Que a su vez se colocan dentro de un elemento <form>. 
	
	¿Qué sucede cuando se adjunta un detector de eventos de clic al elemento <form> 
	
	Y el usuario hace clic dentro de uno de los cuadros de texto? 
	
	Esto se llama burbujeo de eventos. 
	
		
		
|| Event Bubbling

	Una página web se compone de elementos (títulos, párrafos de texto, imágenes, botones, etc.)
	
	Puedes escuchar los eventos que les suceden a estos elementos.
	
	Puede agregar un detector a un botón
	
	Se ejecutará cuando el usuario haga clic en el botón.
	
	
	Estos elementos pueden anidarse unos dentro de otros	
	
	Un <button> podría colocarse dentro de un elemento <div>.

	Llamaríamos al elemento <div> elemento padre y al <botón> elemento hijo.

	Podemos agregar un detector de eventos a un elemento principal y el usuario hace clic en el elemento secundario.


	Intro event bubbling:
		
		Establecer un listener en un elemento padre.
		
		En una página: 
		
		```
		<div id="container">
		  <button>Click me!</button>
		</div>
		<pre id="output"></pre>
	
		```
		
		
		El botón está dentro de otro elemento, un elemento <div>.
		
		El elemento <div> es el padre del elemento contenedor.
		
		¿Qué sucede si agregamos un controlador de evento de clic al padre y luego hacemos clic en el botón?

		```
		const output = document.querySelector("#output");
		function handleClick(e) {
		  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
		}

		const container = document.querySelector("#container");
		container.addEventListener("click", handleClick);
				
		```
		
		Verás que el padre activa un evento de clic cuando el usuario hace clic en el botón:
			
			'Hiciste clic en un elemento DIV'
			
		Tiene sentido: el botón está dentro del <div>,
		
		Cuando haces clic en el botón, también estás haciendo clic implícitamente en el elemento que está dentro.
		
		
	Ej de Bubbling: 
	
		Si agregamos detectores de eventos al botón y al padre
		
		```
		<body>
		  <div id="container">
			<button>Click me!</button>
		  </div>
		  <pre id="output"></pre>
		</body>
			
		```
			
		Intentemos agregar controladores de eventos de clic al botón
		
		(el <div>) y al elemento <body> que contiene ambos:

		```
		const output = document.querySelector("#output");
		function handleClick(e) {
		  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
		}

		const container = document.querySelector("#container");
		const button = document.querySelector("button");

		document.body.addEventListener("click", handleClick);
		container.addEventListener("click", handleClick);
		button.addEventListener("click", handleClick);

		```
		
		Todo esto tiene un orden de activación: 
		desde el elemento más interno (primero) 
		hasta el externo (ultimo)

		BUTTON
		DIV
		BODY 
		
		
		Este comportamiento puede resultar útil y también puede provocar problemas inesperados.

		Veremos el problema que causa y encontraremos la solución.


	Reproductor de video: 
		
		nuestra página contiene un vídeo
		
		inicialmente está oculto
		
		un botón denominado "Mostrar vídeo".


		Queremos la siguiente interacción:
		
		Cuando el usuario hace clic en el botón "Mostrar video"

		1. muestra el cuadro que contiene el video

		pero no comienza a reproducirlo todavía.

		2. Cuando el usuario hace clic en el video, comienza a reproducirlo.

		3. Cuando el usuario haga clic en cualquier parte del cuadro fuera del video, oculte el cuadro.
		
		
		En el html: 
		
		```
		<button>Display video</button>

		<div class="hidden">
		  <video>
			<source
			  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
			  type="video/webm" />
			<p>
			  Your browser doesn't support HTML video. Here is a
			  <a href="rabbit320.mp4">link to the video</a> instead.
			</p>
		  </video>
		</div>
		
		```
		
		Tiene <button>
		
		<div> class="hidden"
		
		<video> dentro de <div>
		
		
		Estamos usando CSS para ocultar elementos con el conjunto de clases "oculto".
		
		
		JavaScript:
		
		```
		const btn = document.querySelector("button");
		const box = document.querySelector("div");
		const video = document.querySelector("video");

		btn.addEventListener("click", () => box.classList.remove("hidden"));
		video.addEventListener("click", () => video.play());
		box.addEventListener("click", () => box.classList.add("hidden"));

		```
		
		Tres detectores de eventos de "clic":
		
		1. uno en el <button>:
			
			muestra el <div> que contiene el <video>

		2. uno en el <video>: 
			
			que comienza a reproducir el video
		
		3. uno en el <div>:
			
			que oculta el vídeo
		
		
		Al hacer clic en el botón se muestra el cuadro y el vídeo que contiene.
		
		Pero luego, cuando haces clic en el video, el video comienza a reproducirse
		
		¡pero el cuadro vuelve a estar oculto!
		
		El vídeo está dentro del <div> (es parte de él),
		
		Por lo que al hacer clic en el vídeo se ejecutan ambos controladores de eventos
		
	
	Solucionando el problema con stopPropagation():
	
		El objeto Evento tiene una función disponible llamada stopPropagation()
		
		Cuando se llama dentro de un controlador de eventos
		
		Evita que el evento se propague a otros elementos.
		
		
		Cambiando el JavaScript:
			
		```
		const btn = document.querySelector("button");
		const box = document.querySelector("div");
		const video = document.querySelector("video");

		btn.addEventListener("click", () => box.classList.remove("hidden"));

		video.addEventListener("click", (event) => {
		  event.stopPropagation();
		  video.play();
		});

		box.addEventListener("click", () => box.classList.add("hidden"));

		```	
		
		llamar a stopPropagation() en el objeto de evento
		
		en el controlador para el evento 'clic' del elemento <video>.
		
		Esto evitará que ese evento llegue a la caja. 
		
		intenta hacer clic en el botón y luego en el vídeo
		
	
	Event Capture:
	
		Una forma alternativa de propagación de eventos
		
		Es la captura de eventos
	
		Invierte el orden de la propagación de eventos. 
		
		En lugar de que el evento se active primero en el elemento más interno objetivo
		
		Luego en elementos sucesivamente menos anidados
		
		
		El evento se activa primero en el elemento menos anidado
		
		Luego en elementos sucesivamente más anidados. hasta alcanzar el objetivo.


		La captura de eventos está deshabilitada de forma predeterminada.

		Para habilitarlo debes pasar la opción de capture en addEventListener().


		En un ej igual al anterior: 
		
		```
		<body>
		  <div id="container">
			<button>Click me!</button>
		  </div>
		  <pre id="output"></pre>
		</body>

		const output = document.querySelector("#output");
		function handleClick(e) {
		  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
		}

		const container = document.querySelector("#container");
		const button = document.querySelector("button");

		document.body.addEventListener("click", handleClick, { capture: true });
		container.addEventListener("click", handleClick, { capture: true });
		button.addEventListener("click", handleClick);
		
		```

		You clicked on a BODY element
		You clicked on a DIV element
		You clicked on a BUTTON element

		
		Capturing and bubbling:
		
			De forma predeterminada, casi todos los controladores de eventos
		
			Se registran en la fase de propagación (bubbling phase)
		
			Esto tiene más sentido la mayor parte del tiempo.
		
		
		
	Event delegation:
		
		Event bubbling permite la delegación de evento. 
		
		Cuando queremos que se ejecute algún código
		
		Cuando el usuario interactúa con cualquiera de una gran cantidad de elementos secundarios
		
		Configuramos el detector de eventos en su elemento principal
		
		Y hacemos que los eventos que suceden en ellos
		
		Se transmitan a su elemento principal en lugar de tener que hacerlo.
		
		Configure el detector de eventos en cada hijo individualmente.

		
		Ej: la página está dividida en 16 mosaicos y queremos configurar cada mosaico con un color aleatorio 
		
		```
		div id="container">
		  <div class="tile"></div>
		  <div class="tile"></div>
		  <div class="tile"></div>
		  <div class="tile"></div>
		  <div class="tile"></div>
		  <div class="tile"></div>
		  ....
		  
		<div class="tile"></div>

		.tile {
		  height: 100px;
		  width: 25%;
		  float: left;
		}

		```
		
		En JavaScript, podríamos agregar un controlador de eventos de clic para cada mosaico.
		
		Pero una opción mucho más simple y eficiente es configurar el controlador de eventos de clic
		
		En el padre y confiar en la propagación de eventos para garantizar que el controlador se ejecute cuando el usuario haga clic en un mosaico:
		
		```
		function random(number) {
		  return Math.floor(Math.random() * number);
		}

		function bgChange() {
		  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
		  return rndCol;
		}

		const container = document.querySelector("#container");

		container.addEventListener("click", (event) => {
		  event.target.style.backgroundColor = bgChange();
		});

		```
		
		Usamos event.target para obtener el elemento que fue el objetivo del evento
		(es decir, el elemento más interno)

		Si quisiéramos acceder al elemento que maneja este evento
		(en este caso el contenedor)
		podríamos usar event.currentTarget.
		
	
	target and currentTarget:
		
		Son dos propiedades diferentes del objeto de evento
		
		Para acceder al elemento en el que se hizo clic.
		
		Al configurar un oyente en un elemento principal, usamos event.currentTarget.
		
		Pero en la delegación de eventos, usamos event.target.

			
		target se refiere al elemento en el que se activó inicialmente el evento
		
		currentTarget se refiere al elemento al que se adjuntó este controlador de eventos.

			
		Si bien el objetivo sigue siendo el mismo
		
		Mientras surge un evento
		
		currentTarget será diferente para los controladores de eventos
		
		que están adjuntos a diferentes elementos en la jerarquía.

		Podemos ver esto si adaptamos ligeramente el ejemplo anterior de Bubbling

		```
		<body>
		  <div id="container">
			<button>Click me!</button>
		  </div>
		  <pre id="output"></pre>
		</body>

		
		const output = document.querySelector("#output");
		function handleClick(e) {
		  const logTarget = `Target: ${e.target.tagName}`;
		  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
		  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
		}

		const container = document.querySelector("#container");
		const button = document.querySelector("button");

		document.body.addEventListener("click", handleClick);
		container.addEventListener("click", handleClick);
		button.addEventListener("click", handleClick);

		```
		
		Cuando hacemos clic en el botón
		
		el objetivo es el elemento del botón cada vez
		
		ya sea que el controlador de eventos esté adjunto al botón mismo, al <div> o al <body>. 
		
		
		Sin embargo, currentTarget identifica el elemento
		
		cuyo controlador de eventos estamos ejecutando actualmente
		
			
			Target: BUTTON, Current target: BUTTON
			
			Target: PRE, Current target: BODY
			
			Target: BODY, Current target: BODY

		
		La propiedad target se usa comúnmente en la delegación de eventos
		
		
	
	Los eventos no son realmente parte del JavaScript central
	
	Se definen en las API web del navegador.
	
	Los diferentes contextos en los que se utiliza JavaScript
	
	Tienen diferentes modelos de eventos
	
	Desde API web hasta otras áreas como WebExtensions
	
	Del navegador y Node.js (JavaScript del lado del servidor).
	
	
	
		
|| 3. OOP en JS


	Guia: 

		1. Conceptos básicos de objetos
			
			Analiza los objetos de JavaScript
			
			Sintaxis, características, 
			
		
		2. Prototipos de objetos
			
			Mecanismo por el cual los objetos JavaScript heredan características entre sí
			
			Funcionan de manera diferente a los mecanismos de herencia
			
			De los lenguajes de programación clasicos orientados a objetos. 
			
			Además de como funcionan las cadenas prototipo	
		
		
		3. Programación Orientada a Objetos
			
			Los principios básicos de la programación orientada a objetos "clásica"
			
			Las diferencias del modelo prototipo en JavaScript.
		
		
		4. Clases 
		
			Características para implementar programas "clásicos" orientados a objetos
			
			
		5. Trabajar con datos JSON

			Es un formato estándar basado en texto.
			
			Para representar datos estructurados según la sintaxis de objetos JavaScript
			
			Se usa comúnmente para representar y transmitir datos en la web

			Enviar algunos datos desde el servidor al cliente, para que se puede mostrar en una página web
			
			Análisis del JSON, acceder a los elementos de datos que contiene y escribir su propio JSON 


		6. Construir objetos
			
			Práctica en la creación de objetos JavaScript personalizados
			
		
		
		


|| Introducción a Objetos

	En JavaScript, la mayoría de las cosas son objetos. 
	
	Desde las funciones principales de JavaScript
	
	Como matrices, hasta las API del navegador creadas sobre JavaScript.
	
	Incluso puede crear sus propios objetos para encapsular funciones y variables relacionadas en paquetes eficientes
	
	Para actuar como prácticos contenedores de datos
	
	
	Objeto: 
	
		Un objeto es una colección de datos y/o funcionalidades relacionadas.
	
		Suelen constar de varias variables y funciones
	
		Se denominan propiedades y métodos cuando están dentro de objetos
		
		
		La creación de un objeto a menudo comienza con la definición e inicialización de una variable.
		
		
		En un archivo definimos: 
		
		```
		const person = {};
		
		```
		
		En la consola escribimos person;
		
		se ve:
		
		```
		[object Object]
		Object { }
		{ }
		
		```
		
		Este es un objeto vacío.
		
		
		Puede tener propiedades y métodos. 
		
		```
		const person = {
		  name: ["Bob", "Smith"],
		  age: 32,
		  bio: function () {
			console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
		  },
		  introduceSelf: function () {
			console.log(`Hi! I'm ${this.name[0]}.`);
		  },
		};
		
		```
		
		person.name;
		person.name[0];
		person.age;
		person.bio();
		// "Bob Smith is 32 years old."
		person.introduceSelf();
		// "Hi! I'm Bob."

		
		Ahora tiene algunos datos y funcionalidades dentro de su objeto
		
		Puede acceder a ellos con una sintaxis simple
		
		
		Un objeto se compone de varios miembros
		
		Cada uno de los cuales tiene un nombre
		
		Por ejemplo, nombre y edad
			
		Y un valor ej, ['Bob', 'Smith'] y 32
	
		(un array y un entero). 
		
		
		Cada par de nombre/valor debe estar separado por una coma
		
		El nombre y el valor están separados por dos puntos. 
		
		La sintaxis siempre sigue este valor: 
		
		```
		const objectName = {
		  member1Name: member1Value,
		  member2Name: member2Value,
		  member3Name: member3Value,
		};
		
		```
		
		El valor de un miembro de objeto puede ser prácticamente cualquier cosa
		
		Tenemos un número, una matriz y dos funciones.
		
		
		1. propiedades del objeto:
		
			Son elementos de datos: 
			
			Los dos primeros elementos son
		
		
		2. Métodos del objeto 
		
			Las funciones: 
			
			permiten al objeto manipular esos datos. 
			
		
		Cuando los miembros del objeto son funciones, hay una sintaxis más simple
		
		En lugar de bio: función () 
		
		Podemos escribir bio().
	
		```
		const person = {
		  name: ["Bob", "Smith"],
		  age: 32,
		  bio() {
			console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
		  },
		  introduceSelf() {
			console.log(`Hi! I'm ${this.name[0]}.`);
		  },
		};
		
		```
		
		Usaremos esta sintaxis más corta.
		
		Un objeto como este se conoce como objeto literal
		
		Literalmente, hemos escrito el contenido del objeto a medida que lo creamos

		
		Esto es diferente en comparación con los objetos instanciados a partir de clases.
		
		
		Es muy común crear un objeto utilizando un literal de objeto
		
		Cuando se desea transferir una serie de elementos de datos estructurados y relacionados de alguna manera
		
		Ej, enviando una solicitud al servidor para que se coloque en una base de datos
		
		Enviar un solo objeto es mucho más eficiente que enviar varios elementos individualmente

		Es más fácil trabajar con él.
		
		Que con una matriz, cuando desea identificar elementos individuales por su nombre.


	Notación de puntos/Dot Notation:
	
		Antes se accedió a las propiedades y métodos del objeto 
		
		Usando notación de puntos.
		
		El nombre del objeto (persona) actúa como espacio de nombres
		
		Primero debe ingresarse para acceder a cualquier cosa dentro del objeto
		
		Luego escribe un punto, luego el elemento al que desea acceder
		
		Este puede ser el nombre de una propiedad simple
		
		Un elemento de una propiedad de matriz
		
		O una llamada a uno de los métodos del objeto
		
		```
		person.age;
		person.bio();

		```
		
		
		Objeto como propiedades de objeto: 
				
			Una propiedad de objeto puede ser en sí misma un objeto.
			
			Intente cambiar el nombre del miembro de
			
			De
			
			```
			const person = {
			  name: ["Bob", "Smith"],
			};

			
			```
		
			a: 
			
			```
			const person = {
			  name: {
				first: "Bob",
				last: "Smith",
			  },
			  // …
			};

			
			```
			
			Para acceder a estos elementos sólo necesitas encadenar el paso adicional al final con otro punto.
			
			```
			person.name.first;
			person.name.last;
			
			```
			
			Si hace esto, también necesitará revisar el código de su método y cambiar cualquier instancia de

			De:
	
			```
			name[0];
			name[1];	
			
			```
		
			A: 
			
			```
			name.first;
			name.last;
			
			```
			
			De lo contrario, sus métodos ya no funcionarán.
		
		
	Notación de corchete: 
		
		Alternativa de acceder a las propiedades de los objetos.
		
		En lugar de utilizar notación de puntos:
		
		```
		person.age;
		person.name.first;

		```
		
		Podemos usar corchetes: 
		
		```
		person["age"];
		person["name"]["first"];

		```
		
		Esto se parece mucho a cómo se accede a los elementos de una matriz
		
		En lugar de usar un número de índice para seleccionar un elemento
		
		se utiliza el nombre asociado con el valor de cada miembro
		
		a los objetos a veces se les llame matrices asociativas
		
		asignan cadenas a valores de la misma manera que las matrices asignan números a valores
		
		
		Generalmente se prefiere la notación de puntos a la notación entre corchetes porque es más concisa y más fácil de leer
		
		Pero hay algunos casos en los que es necesario utilizar corchetes.
		
		Ej, si el nombre de una propiedad de un objeto se encuentra en una variable
		
		entonces no puede usar la notación de puntos para acceder al valor
		
		pero puede acceder al valor usando la notación entre corchetes.
		
		
		Ej, la función logProperty() puede usar 
		
		person[propertyName]
		
		para recuperar el valor de la propiedad nombrada en propertyName.
		
		```
		const person = {
		  name: ["Bob", "Smith"],
		  age: 32,
		};

		function logProperty(propertyName) {
		  console.log(person[propertyName]);
		}

		logProperty("name");
		// ["Bob", "Smith"]
		logProperty("age");
		// 32
		
		```
		
		
	Establecer miembros de objetos:
			
		Hasta ahora solo hemos analizado la recuperación (u obtención) de miembros de objetos;
			
		también puede establecer (actualizar) el valor de los miembros de objetos declarando el miembro que desea configurar
		
		usando notación de puntos o corchetes
		
	
		```
		person.age = 45;
		person["name"]["last"] = "Cratchit";
		
		```	
	
		no se limita sólo a actualizar los valores de las propiedades y métodos existentes; 
		
		También puedes crear miembros completamente nuevos
	
		```
		person["eyes"] = "hazel";
		person.farewell = function () {
		  console.log("Bye everybody!");
		};
		
		```
		
		Podemos acceder a los nuevos propiedades y métodos: 
		
		```
		person["eyes"];
		person.farewell();
		// "Bye everybody!"
		
		```
		
		Un aspecto útil de la notación entre corchetes
		
		se puede utilizar para establecer no sólo valores de miembros de forma dinámica
	
		sino también nombres de miembros
		
		
		Digamos que queremos que los usuarios puedan almacenar tipos de valores personalizados
		
		en los datos de sus personas
		
		escribiendo el nombre del miembro y el valor en dos entradas de texto.
		
		Podríamos obtener esos valores así:
		
		```
		const myDataName = nameInput.value;
		const myDataValue = nameValue.value;

		```
		
		Luego podríamos agregar este nuevo nombre de miembro y valor al objeto persona de esta manera:
		
		```
		person[myDataName] = myDataValue;
		
		```
		
		Intente agregar las siguientes líneas en su código, justo debajo de la llave de cierre del objeto persona:
		
		```
		const myDataName = "height";
		const myDataValue = "1.75m";
		person[myDataName] = myDataValue;
		
		```
		
		intente guardar y actualizar e ingrese lo siguiente en su entrada de texto:

		```
		person.height;

		```
		
		Agregar una propiedad a un objeto usando el método anterior no es posible con la notación de puntos
		
		que solo puede aceptar un nombre de miembro literal
		
		no un valor de variable que apunte a un nombre
		
	
	This: 
		
		Para mostrar el valor de una propiedad del objeto
		
		Tuvimos que usar ${this.name[0]} en un método. 
		
		Dado que este valor estaba en un array. 
		
		o  ${this.name.first} que estaba en otro objeto. 
		
		
		```
		introduceSelf() {
		  console.log(`Hi! I'm ${this.name[0]}.`);
		}

		```
		
		Normalmente se refiere al objeto actual en el que se ejecuta el código		
		
		En el contexto de un método de objeto.
		
		Se refiere al objeto sobre el que se invocó el método.

		
		Ej: En este par de objetos
		
		```
		const person1 = {
		  name: "Chris",
		  introduceSelf() {
			console.log(`Hi! I'm ${this.name}.`);
		  },
		};

		const person2 = {
		  name: "Deepti",
		  introduceSelf() {
			console.log(`Hi! I'm ${this.name}.`);
		  },
		};
		
		```
		
		person1.introduceSelf() genera "¡Hola! Soy Chris.";
		
		person2.introduceSelf() genera "¡Hola! Soy Deepti".
		
		
		Sucede porque cuando se llama al método
		
		this se refiere al objeto en el que se llama el método
		
		Lo que permite que la misma definición de método funcione para múltiples objetos.


		No es muy útil cuando se escriben literales de objetos a mano

		ya que usar el nombre del objeto
		
		persona1 y persona2
		
		conduce exactamente al mismo resultado
		
		
		Pero será esencial cuando comencemos a usar constructores
		
		Para crear más de un objeto a partir de una única definición de objeto
		
	
	Introducción a Constructores: 
		
		Usar objetos literales está bien cuando sólo necesitas crear un objeto
		
		pero si tienes que crear más de uno
		
		son muy inadecuados. 	
		
		
		Tenemos que escribir el mismo código para cada objeto que creamos
		
		y si queremos cambiar algunas propiedades del objeto
		
		agregar una propiedad de altura, debemos recordar actualizar cada objeto.

			
		Necesitamos una forma de definir la "forma" de un objeto
		
		El conjunto de métodos y las propiedades que puede tener
		
		y luego crear tantos objetos como queramos
		
		simplemente actualizando los valores de las propiedades que son diferentes.
		
		
		Como primera version, podemos usar una función: 
			
		```
		function createPerson(name) {
		  const obj = {};
		  obj.name = name;
		  obj.introduceSelf = function () {
			console.log(`Hi! I'm ${this.name}.`);
		  };
		  return obj;
		}
		
		```
		
		Esta función crea y devuelve un nuevo objeto cada vez que la llamamos.
		
		El objeto tendrá dos miembros:
			
			un nombre de propiedad
			un método introducirSelf().

		createPerson() toma un nombre de parámetro para establecer el valor de la propiedad del nombre
			
		pero el valor del método introduceSelf() será el mismo para todos los objetos creados con esta función. 
		
		Este es un patrón muy común para crear objetos
		
		
		Ahora podemos crear tantos objetos como queramos, reutilizando la definición:
		
		```
		const salva = createPerson("Salva");
		salva.introduceSelf();
		// "Hi! I'm Salva."

		const frankie = createPerson("Frankie");
		frankie.introduceSelf();
		// "Hi! I'm Frankie."
		
		```
		
		Funciona bien pero es un poco largo
		
		Tenemos que crear un objeto vacío, inicializarlo y devolverlo.
		
		
		Una mejor manera es utilizar un constructor
		
		es simplemente una llamada a una función
		
		Usando 'new'. 
		
		
		Cuando llamamos al constructor, puede:
		
			crear un nuevo objeto
			
			vincular this al nuevo objeto
			para que pueda hacer referencia
			a this en su código de constructor
			
			ejecutar el código en el constructor
			
			devolver el nuevo objeto
		
		
		Los constructores, por convención, comienzan con una letra mayúscula
		
		Reciben nombres según el tipo de objeto que crean.
		
		Podríamos reescribir nuestro ejemplo:
		
		```
		function Person(name) {
		  this.name = name;
		  this.introduceSelf = function () {
			console.log(`Hi! I'm ${this.name}.`);
		  };
		}

		```
		
		Para llamar a Person() como constructor, usamos new:
		
		```
		const salva = new Person("Salva");
		salva.introduceSelf();
		// "Hi! I'm Salva."

		const frankie = new Person("Frankie");
		frankie.introduceSelf();
		// "Hi! I'm Frankie."

		```
		
		
	Hay objetos en todos lados: 
	
		La notación de puntos que ha estado usando le resulta muy familiar
		
		Cada vez que hemos estado trabajando en un ejemplo que utiliza una API de navegador integrada
		
		o un objeto JavaScript
		
		porque dichas características se crean utilizando exactamente el mismo tipo de estructuras de objetos
		
		Aunque más complejos. 
		
		
		En métodos de cadena como
		
		```
		myString.split(",");
		
		```
		Estabas usando un método disponible en un objeto String.
		
		
		Cada vez que crea una cadena en su código
		
		Esa cadena se crea automáticamente como una instancia de String
		
		Por lo tanto, tiene varios métodos y propiedades comunes disponibles.

		
		Cuando accedió al modelo de objetos del documento usando:
		
		```
		const myDiv = document.createElement("div");
		const myVideo = document.querySelector("video");
		
		```
		
		Estabas utilizando métodos disponibles en un objeto Documento
		
		Para cada página web cargada, se crea una instancia de Documento
		
		llamada documento, que representa la estructura completa de la página
		
		el contenido y otras características como su URL. 
		
		Esto significa que tiene varios métodos y propiedades comunes disponibles.
				
		Lo mismo ocurre con prácticamente cualquier otro objeto integrado
		
		o API que haya estado utilizando: Array, Math, etc.

		
		Los objetos integrados y las API no siempre crean instancias de objetos automáticamente.

		Ej, la API de notificaciones, que permite a los navegadores modernos activar notificaciones del sistema
		
		Requiere que cree una nueva instancia de objeto utilizando el constructor para cada notificación que desee activar
		
		En la consola: 
		
		```
		const myNotification = new Notification("Hello!");
		
		```
		
	
	Fue una idea de cómo trabajar con objetos en JavaScript, incluida la creación de sus propios objetos simples.
	
	los objetos son muy útiles como estructuras para almacenar datos y funcionalidades relacionados
	
	si intentara realizar un seguimiento de todas las propiedades y métodos de nuestro objeto persona
	
	como variables y funciones separadas, sería ineficiente y frustrante,
	
	corre el riesgo de chocar con otras variables y funciones que tienen los mismos nombres.
	
	
	Los objetos nos permiten mantener la información guardada de forma segura en su propio paquete, fuera de peligro.
	
	Los prototipos, que es la forma fundamental en que JavaScript permite que un objeto herede propiedades de otros objetos.
	
		
		
|| Prototipos

	Mecanismo por el cual los objetos JavaScript heredan características entre sí

	Con un funcionamiento un poco diferente al de los lenguajes clasicos. 
	
	Existe una definición para los prototipos. 
	
	Cadena de prototipos y también un objeto puede ser un prototipo. 
	

	Cadena prototipo: 
		
		En la consola, creamos un objeto literal:
		
		```
		const myObject = {
		  city: "Madrid",
		  greet() {
			console.log(`Greetings from ${this.city}`);
		  },
		};

		myObject.greet(); // Greetings from Madrid

		```
		
		Es un objeto con una propiedad de datos, ciudad, y un método, saludar().
		
		Si escribe el nombre del objeto seguido de un punto en la consola, como myObject.
		
		la consola mostrará una lista de todas las propiedades disponibles para este objeto
		
		```
		myObject.
		
		```

		Hay más propiedades además de city y greet(). 
		
		__defineGetter__
		__defineSetter__
		__lookupGetter__
		__lookupSetter__
		__proto__
		city
		constructor
		greet
		hasOwnProperty
		isPrototypeOf
		propertyIsEnumerable
		toLocaleString
		toString
		valueOf

		
		Al acceder a estas propiedades 
		
		```
		myObject.toString(); // "[object Object]"

		```
		
		Funciona (incluso si no es obvio qué hace toString()).

		Propiedades adicionales, de dónde vienen

		
		Cada objeto en JavaScript tiene una propiedad incorporada
		
		se llama prototipo
	
		El prototipo es en sí mismo un objeto
		
		por lo que tendrá su propio prototipo
		
		formando lo que se llama una cadena de prototipos.
		
		La cadena termina cuando llegamos a un prototipo que tiene nulo como su propio prototipo
	
		
		La propiedad de un objeto que apunta a su prototipo no se llama prototipo. 
		
		Su nombre no es estándar
		
		pero en la práctica todos los navegadores utilizan __proto__.
		
		La forma estándar de acceder al prototipo de un objeto es el método Object.getPrototypeOf().
	
		```
		Object.getPrototypeOf(myObject); 
		
		```
		
		```
		Object.__proto__; 

		```
		
		```
		myObject.__proto__; 
		
		```
			
		
		Cuando se intenta acceder a una propiedad de un objeto
		
		Si la propiedad no se puede encontrar en el objeto mismo		
		
		se busca la propiedad en el prototipo.
		
		Si aún no se puede encontrar la propiedad
		
		entonces se busca el prototipo del prototipo
		
		sucesivamente hasta que se encuentra la propiedad o se llega al final de la cadena, en cuyo caso se devuelve undefinido.
		
		
		Ej, cuando llamamos a myObject.toString():
		
			busca toString en myObject
			
			No puedo encontrarlo allí
			
			así que busca en el objeto prototipo de myObject toString.
			
			lo encuentra allí y lo llama.

		
		Objeto prototipo de myObject: 
		
		```
		Object.getPrototypeOf(myObject); 
		// Object { }
	
		```
		
		Es un objeto llamado Object.prototype
		
		es el prototipo más básico que todos los objetos tienen por defecto.
		
		El prototipo de Object.prototype es nulo
			
		por lo que está al final de la cadena del prototipo:
		
		```
		myObject				Object.prototype
		city	-> __proto__ -> hasOwnProperty() -> __proto__ -> null
		greet()					isPrototypeOf()
		
		```
		
		
		El prototipo de un objeto no siempre es Object.prototype
		
		Puede haber otros en el medio. 
		
		```
		const myDate = new Date();
		let object = myDate;

		do {
		  object = Object.getPrototypeOf(object);
		  console.log(object);
		} while (object);

		// Date.prototype
		// Object { }
		// null
		
		```
		
		Este código crea un objeto Date
		
		Luego recorre la cadena de prototipos y registra los prototipos.
		
		Nos muestra que el prototipo de myDate es un objeto Date.prototype
		
		y su prototipo es Object.prototype.
		
			
		```
		myDate -> __proto__ -> Date.prototype -> __proto__ -> Object.prototype -> __proto__ -> null
							   getMonth()					  hasOwnProperty()
							   getYear()				      isPrototypeOf()
		
		```
			
		cuando llamas a métodos familiares
		
		como myDate2.getTime(),
		
		estás llamando a un método definido en Date.prototype.
		
		
	Shadowing Properties: 
		
		Si define una propiedad en un objeto
		
		cuando se define una propiedad con el mismo nombre en el prototipo del objeto
		
		```
		const myDate = new Date(1995, 11, 17);

		console.log(myDate.getTime()); // 819129600000

		myDate.getTime = function () {
		  console.log("something else!");
		};

		myDate.getTime(); // 'something else!'

		```
		
		Esto debería ser predecible
		
		dada la descripción de la cadena del prototipo
		
		Cuando llamamos a getTime(),
		
		El navegador primero busca en myDate una propiedad con ese nombre
		
		y solo verifica el prototipo si myDate no lo define. 
		
		agregamos getTime() a myDate, se llama a la versión en myDate.


		Se le llama "seguimiento" de la propiedad.
		
			
	Configurando un Prototipo: 
	
		Hay varias formas de configurar el prototipo de un objeto
		
			1. Object.create()
		
			2. Constructor
		
		
		Object.create():
		
			El método Object.create() crea un nuevo objeto
		
			y le permite especificar un objeto que se utilizará como prototipo del nuevo objeto.

			```
			const personPrototype = {
			  greet() {
				console.log("hello!");
			  },
			};

			const carl = Object.create(personPrototype);
			carl.greet(); // hello!

			```
			
			creamos un objeto personPrototype
			
			que tiene un método greet().
			
			Luego usamos Object.create()
			
			para crear un nuevo objeto con personPrototype
			
			como prototipo.
			
			Ahora podemos llamar a greet() en el nuevo objeto y el prototipo proporciona su implementación.
			
			
	Constructor:
		
		En JavaScript, todas las funciones tienen una propiedad denominada prototipo
		
		Cuando llamas a una función como constructor, 
		
		esta propiedad se establece como el prototipo del objeto recién construido
				
		por convención, en la propiedad denominada __proto__
		
		Entonces, si configuramos el prototipo de un constructor
		
		podemos asegurarnos de que todos los objetos creados con ese constructor reciban ese prototipo.
		
		```
		const personPrototype = {
		  greet() {
			console.log(`hello, my name is ${this.name}!`);
		  },
		};

		function Person(name) {
		  this.name = name;
		}

		Object.assign(Person.prototype, personPrototype);
		// or
		// Person.prototype.greet = personPrototype.greet;

		```
		
		un objeto personPrototype, que tiene un método greet()
		
		una función constructora Person() que inicializa el nombre de la persona a crear.

		Luego colocamos los métodos definidos en personPrototype
		
		en la propiedad prototipo de la función Person usando Object.assign.
		
		
		Después de este código, los objetos creados usando Person()
		
		obtendrán Person.prototype como prototipo, que contiene automáticamente el método de bienvenida.

		```
		
		const reuben = new Person("Reuben");
		reuben.greet(); // hello, my name is Reuben!

		```

		Esto también explica por qué dijimos anteriormente que el prototipo de myDate se llama Date.prototype:
		
		es la propiedad prototipo del constructor Date.
		 
		 
	Propiedades Propias: 
	
		creamos un objeto usando el constructor Persona
		
		tienen dos propiedades:

			1.una propiedad de nombre, que se establece en el constructor
			
			por lo que aparece directamente en los objetos Persona	
			
 			2. un método greet(), que se establece en el prototipo.

		
		Es común ver este patrón, en el que los métodos se definen en el prototipo
		
		pero las propiedades de los datos se definen en el constructor. 
		
		Esto se debe a que los métodos suelen ser los mismos para cada objeto que creamos,
		
		mientras que a menudo queremos que cada objeto tenga su propio valor para sus propiedades de datos
		
		como aquí donde cada persona tiene un nombre diferente
		
		
		Las propiedades que se definen directamente en el objeto
		
		como el nombre aquí, se denominan propiedades propias
		
		puede comprobar si una propiedad es una propiedad propia utilizando el método estático Object.hasOwn():
		
		```
		const irma = new Person("Irma");

		console.log(Object.hasOwn(irma, "name")); // true
		console.log(Object.hasOwn(irma, "greet")); // false
		
		```
		
		También puede utilizar el método no estático Object.hasOwnProperty()
		
		recomendamos que utilice Object.hasOwn() si puede.
		
		
	Prototipos y herencia:
	
		Los prototipos permiten reutilizar código y combinar objetos.
		
		soportan una versión de herencia
		
		
		La herencia es una característica de los lenguajes de programación orientados a objetos
		
		permite a los programadores expresar la idea de que algunos objetos en un sistema son versiones más especializadas de otros objetos.

		
		Ej, si estamos modelando una escuela, podríamos tener profesores y estudiantes:
		
		ambos son personas, por lo que tienen algunas características en común
		
		por ejemplo, ambos tienen nombres
		
		pero cada uno podría agregar características adicionales
		
		por ejemplo, profesores tienen una materia que enseñan
		
		o podrían implementar la misma característica de diferentes maneras. 
		
		En un sistema POO podríamos decir que tanto los profesores como los estudiantes heredan de las personas.

		
		Si los objetos Profesor y Estudiante pueden tener prototipos de Persona,
		
		entonces pueden heredar las propiedades comunes
		
		al tiempo que agregan y redefinen aquellas propiedades que deben diferir.

	
	Las cadenas de objetos de prototipos permiten que los objetos hereden características entre sí
	
	la propiedad del prototipo y cómo se puede usar para agregar métodos a los constructores
	
	
	
|| POO			
	
	La programación orientada a objetos
	
	Paradigma de programación fundamental para muchos lenguajes
	
	Como JS, Python, incluidos Java y C++.
			
	Sus conceptos principales: clases e instancias, herencia y encapsulación
		
	Un estilo particular de programación orientada a objetos
		
	Es llamado programación orientada a objetos basada en clases o "clásica".
		
	
	En JS, veremos cómo los constructores y la cadena de prototipos 
	
	Se relacionan con estos conceptos de programación orientada a objetos 
	
	Pero también se diferencian. 
	
	Además posee características que facilitan la implementación de programas orientados a objetos.
	
	
	La programación orientada a objetos 
	
	Consiste en modelar un sistema como una colección de objetos
	
	Donde cada objeto representa algún aspecto particular del sistema
	
	Los objetos contienen funciones (o métodos) y datos.
	
	Un objeto proporciona una interfaz pública
	
	a otro código que quiere usarlo pero mantiene su propio estado interno privado

	otras partes del sistema no tienen que preocuparse por lo que sucede dentro del objeto.

	
	Clases e instancias: 
	
		Cuando modelamos un problema en términos de objetos en programación orientada a objetos
		
		creamos definiciones abstractas 
		
		representan los tipos de objetos que queremos tener en nuestro sistema

		
		Ej, si estuviéramos modelando una escuela
		
		es posible que queramos tener objetos que representen a los profesores
		
		Cada profesor tiene algunas propiedades en común
		
		todos tienen un nombre y una materia que imparten
		
		cada profesor puede hacer ciertas cosas: todos pueden calificar un trabajo y pueden presentarse a sus alumnos a principios de año
		
		
		Entonces Profesor podría ser una clase en nuestro sistema.
		
		La definición de la clase enumera los datos y métodos que tiene cada profesor.

		En pseudocódigo:
		
		```
		class Professor
			properties
				name
				teaches
			methods
				grade(paper)
				introduceSelf()
		
		```
		
		define una clase de Profesor con:
		
			dos propiedades de datos: 	
				
				name y teaches
				
			dos métodos:
				
				grade(): para calificar un trabajo
				
				introduceSelf(): para presentarse.
		
		
		Por sí sola, una clase no hace nada
		
		es una plantilla para crear objetos ese tipo
		
		Cada profesor concreto que creamos 
		
		se denomina instancia de la clase Profesor
		
		El proceso de creación de una instancia
		
		lo realiza una función especial 
		
		llamada constructor.
		
		
		Pasamos valores al constructor
		
		para cualquier estado interno
		
		que queramos inicializar en la nueva instancia.

		
		el constructor se escribe como parte 
		
		de la definición de la clase

		normalmente tiene el mismo nombre 
		
		que la clase misma.
		
		
		```
		class Professor
			properties
				name
				teaches
			constructor
				Professor(name, teaches)
			methods
				grade(paper)
				introduceSelf()
		
		```
		
		Este constructor toma dos parámetros
		
		podemos inicializar name y teaches
		
		cuando creamos un nuevo profesor concreto.

		
		Con un constructor 
		
		podemos crear algunos profesores.

		Los lenguajes suelen utilizar 'new'
		
		para indicar que se está llamando a un constructor.
				
		```
		walsh = new Professor("Walsh", "Psychology");
		lillian = new Professor("Lillian", "Poetry");

		walsh.teaches; // 'Psychology'
		walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

		lillian.teaches; // 'Poetry'
		lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
		
		```
		
		crea dos objetos, ambas instancias de la clase Profesor.
		
		
	Herencia/Inheritance:
		
		Si también queremos representar a los estudiantes
		
		A diferencia de los profesores
		
		los estudiantes no pueden calificar trabajos, no enseñan
		
		y pertenecen a un año en particular.

		
		Pero tienen en común el nombre 
		
		Y también pueden presentarse 
		
		podríamos escribir la definición de una clase de estudiante:
		
		```
		class Student
			properties
				name
				year
			constructor
				Student(name, year)
			methods
				introduceSelf()
		
		```
		
		Sería útil si pudiéramos representar
		
		estudiantes y profesores comparten algunas propiedades
		
		o más exactamente, el hecho de que, en algún nivel, son el mismo tipo de cosas.
		 
		La herencia nos permite hacer esto.


		tanto estudiantes como profesores son personas
		
		las personas tienen nombres y quieren presentarse
	
		Podemos modelar esto definiendo una nueva clase Persona
		
		donde definimos todas las propiedades comunes de las personas
		
		
		Profesor y Estudiante pueden derivar de Persona
		
		agregando sus propiedades adicionales
		
		```
		class Person
			properties
				name
			constructor
				Person(name)
			methods
				introduceSelf()

		class Professor : extends Person
			properties
				teaches
			constructor
				Professor(name, teaches)
			methods
				grade(paper)
				introduceSelf()

		class Student : extends Person
			properties
				year
			constructor
				Student(name, year)
			methods
				introduceSelf()
		
		```
		
		Persona es la superclase o clase padre
		
		tanto del Profesor como del Estudiante.
		
		Profesor y Estudiante son subclases o clases secundarias de Persona.

		
		introduceSelf() está definido en las tres clases.
		
		si bien todas las personas quieren presentarse, la forma en que lo hacen es diferente:
		
		```
		walsh = new Professor("Walsh", "Psychology");
		walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

		summers = new Student("Summers", 1);
		summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
		
		```
		
		Es posible que tengamos una implementación predeterminada de introduceSelf()
		
		para personas que no son estudiantes ni profesores:

		```
		pratt = new Person("Pratt");
		pratt.introduceSelf(); // 'My name is Pratt.'

		```
		
		Esta característica
		
		cuando un método tiene el mismo nombre
		
		pero una implementación diferente en diferentes clases
		
		se llama polimorfismo.
		
		Cuando un método en una subclase reemplaza la implementación de la superclase
		
		decimos que la subclase anula la versión de la superclase.
		
		
	Encapsulación: 
		
		Los objetos proporcionan una interfaz para otro código que quiere usarlos
		
		pero mantienen su propio estado interno
		
		El estado interno del objeto se mantiene privado
		
		lo que significa que solo se puede acceder a él
		
		mediante los métodos propios del objeto
		
		no desde otros objetos
		
		
		Mantener privado el estado interno de un objeto
		
		y en general, hacer una división clara entre su interfaz pública 
		
		y su estado interno privado
		
		se denomina encapsulación.


		es una característica útil
		
		porque permite al programador cambiar la implementación interna de un objeto

		sin tener que buscar y actualizar todo el código que lo utiliza: 

		crea una especie de firewall entre este objeto y el resto del sistema.


		Ej, supongamos que a los estudiantes se les permite estudiar tiro con arco 
		
		si están en el segundo año o más
		
		Podríamos implementar esto simplemente exponiendo la propiedad del año del estudiante
		
		y otro código podría examinarla para decidir si el estudiante puede tomar el curso.
		
		```
		if (student.year > 1) {
		  // allow the student into the class
		}

		```
		
		El problema es que, si decidimos cambiar los criterios
		
		para permitir que los estudiantes estudien tiro con arco
		
		por ejemplo, exigiendo también que el padre o tutor dé su permiso
		
		necesitaríamos actualizar todos los lugares de nuestro sistema que realizan esta prueba
		
		Sería mejor tener un método canStudyArchery() 
		
		en objetos Student, que implemente la lógica en un solo lugar:
		
		```
		class Student : extends Person
			properties
			   year
			constructor
			   Student(name, year)
			methods
			   introduceSelf()
			   canStudyArchery() { return this.year > 1 }
		
		```
		
		```
		if (student.canStudyArchery()) {
		  // allow the student into the class
		}
		
		```
			
		De esa manera, si queremos cambiar las reglas sobre el estudio del tiro con arco
		
		sólo tendremos que actualizar la clase Estudiante
		
		y todo el código que la utilice seguirá funcionando.
		 
		
		En muchos lenguajes de programación orientada a objetos, podemos evitar que otro código acceda al estado interno de un objeto
		
		marcando algunas propiedades como privadas.
		
		Esto generará un error si el código externo al objeto intenta acceder a ellos:
		
		```
		class Student : extends Person
			properties
			   private year
			constructor
				Student(name, year)
			methods
			   introduceSelf()
			   canStudyArchery() { return this.year > 1 }

		student = new Student('Weber', 1)
		student.year // error: 'year' is a private property of Student
		
		```
		 
		En lenguajes que no imponen un acceso como este
		
		los programadores usan convenciones de nomenclatura
		
		como comenzar el nombre con un guión bajo
		
		para indicar que la propiedad debe considerarse privada
		
		
	Programación orientada a objetos y JavaScript:
	
		Algunas de estas características básicas de la programación orientada a objetos
	 
		basada en clases, son implementada en lenguajes como Java y C++.

		Y anteriormente analizamos un par de características principales de JavaScript: 
		
		constructores y prototipos
		
		tienen alguna relación con algunos de los conceptos de programación orientada a objetos
	
	
		Los constructores en JavaScript nos proporcionan algo así como una definición de clase
		
		lo que nos permite definir la "forma" de un objeto,
		
		incluidos los métodos que contiene, en un solo lugar
		
		Pero aquí también se pueden utilizar prototipos. 
		
		si un método se define en la propiedad prototipo de un constructor
		
		entonces todos los objetos creados usando ese constructor 
		
		obtienen ese método a través de su prototipo
		
		y no necesitamos definirlo en el constructor.

		
		la cadena de prototipos parece una forma natural de implementar la herencia.
		
		si podemos tener un objeto Estudiante cuyo prototipo sea Persona
		
		entonces puede heredar el nombre y anular introduceSelf().
		
		
		vale la pena comprender las diferencias entre estas características 
		
		y los conceptos de programación orientada a objetos "clásicos"
		
		
		Primero, en la programación orientada a objetos basada en clases
		
		las clases y los objetos son dos construcciones separadas
		
		y los objetos siempre se crean como instancias de clases.
		
		Además, existe una distinción entre la característica utilizada para definir una clase
		
		la sintaxis de la clase misma
		
		y la característica utilizada para crear una instancia de un objeto
		
		un constructor
		
		
		En JavaScript, podemos crear objetos
		
		sin ninguna definición de clase separada
		
		ya sea usando una función o un objeto literal.
		
		Esto puede hacer que trabajar con objetos sea mucho más liviano 
		
		que en la programación orientada a objetos clásica.
		
		
		En segundo lugar, aunque una cadena prototipo parece una jerarquía de herencia
		
		y se comporta como ella en algunos aspectos, es diferente en otros. 
		
		Cuando se crea una instancia de una subclase
		
		se crea un único objeto que combina las propiedades definidas en la subclase con las propiedades definidas más arriba en la jerarquía.
		
		Con la creación de prototipos, cada nivel de la jerarquía está representado por un objeto separado
		
		y están vinculados entre sí mediante la propiedad __proto__.
		
		El comportamiento de la cadena de prototipos se parece menos a una herencia y más a una delegación
		
		La delegación es un patrón de programación en el que un objeto, cuando se le pide que realice una tarea
		
		puede realizarla él mismo o pedirle a otro objeto (su delegado) que realice la tarea en su nombre.
		
		En muchos sentidos, la delegación es una forma más flexible de combinar objetos que la herencia
		
		por un lado, es posible cambiar o reemplazar completamente el delegado en tiempo de ejecución
		
		
		Se pueden utilizar constructores y prototipos
		
		para implementar patrones de programación orientada a objetos basados ​​en clases en JavaScript
		
		Pero usarlos directamente para implementar funciones como la herencia es complicado
		
		por lo que JavaScript proporciona funciones adicionales
		
		superpuestas al modelo prototipo, que se asignan más directamente a los conceptos de programación orientada a objetos basada en clases.
		
			

|| Clases JS
			
	Prototipos y constructores para implementar un modelo como POO
	
	No son una nueva forma de combinar objetos
	
	Bajo el capó, todavía usan prototipos
			
	Para facilitar la configuración de una cadena prototipo.
		
	
	Clases y Constructores: 
		
		declarar una clase utilizando la palabra clave class
		
		Ej, para un persona:
	
		```
		class Person {
		  name;

		  constructor(name) {
			this.name = name;
		  }

		  introduceSelf() {
			console.log(`Hi! I'm ${this.name}`);
		  }
		}

		```
		
		Tiene: 
		
			1. propiedad de nombre.
			
			2. constructor que toma un parámetro de nombre
		
			para inicializar la propiedad el objeto nuevos
			
			3. método introduceSelf() y this 
			
			hace referencia a las propiedades del objeto usando this
			
		
		La declaración name; es opcionl, podemos omitirla
		
		y la línea this.name = name; en el constructor
		
		creará la propiedad nombre antes de inicializarla
			
			
		enumerar propiedades explícitamente en la declaración de clase 
		
		podría facilitar que las personas que lean su código	
			
		para que vean qué propiedades forman parte de esta clase.

		
		También puede inicializar la propiedad a un valor predeterminado cuando la declara
		
		con una línea como nombre = '';.

		
		El constructor se define utilizando la palabra clave constructor.
		
		Al igual que un constructor fuera de una definición de clase, 
		
		hará lo siguiente:

			1. crear un nuevo objeto
			
			2. vincular this al nuevo objeto 
			 
			para que pueda hacer referencia a this
			
			en su código de constructor
		
			3. ejecutar el código en el constructor
			
			4. devolver el nuevo objeto.
			
		
		Puedes crear y usar una nueva instancia de Persona
		
		```
		const giles = new Person("Giles");

		giles.introduceSelf(); // Hi! I'm Giles

		```
		
		
		Omitiendo constructores:
			
			Si no necesita realizar ninguna inicialización especial
			
			puede omitir el constructor y se generará un constructor predeterminado
			
			```
			class Animal {
			  sleep() {
				console.log("zzzzzzz");
			  }
			}

			const spot = new Animal();

			spot.sleep(); // 'zzzzzzz'
			
			```
	
	Herencia: 
	
		A nuestra clase anterior, Persona
		
		Podemos definir la subclase Profesor.
		
		```
		class Professor extends Person {
		  teaches;

		  constructor(name, teaches) {
			super(name);
			this.teaches = teaches;
		  }

		  introduceSelf() {
			console.log(
			  `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
			);
		  }

		  grade(paper) {
			const grade = Math.floor(Math.random() * (5 - 1) + 1);
			console.log(grade);
		  }
		}

		```
		
		Usamos la palabra clave extends
		
		para decir que esta clase hereda de otra clase.
		
		La clase Profesor agrega una nueva propiedad teaches 
		
		La declaramos con this, etc. 
		
		
		Como queremos configurar teaches
		
		Cuando se crea un nuevo profesor
		
		definimos un constructor
		
		Que tomará name y teaches como argumentos
		
		Lo primero que hace este constructor
		
		es llamar al constructor de la superclase 
		
		usando super(), pasando el parámetro nombre.
		
		El constructor de la superclase se encarga de establecer el nombre. 
		
		El constructor Profesor establece la propiedad teaches
		
		
		Si una subclase tiene que realizar su propia inicialización
		
		primero debe llamar al constructor de la superclase usando super(),
		
		pasando cualquier parámetro que el constructor de la superclase esté esperando.

		
		anulamos el método introduceSelf() de la superclase 
		
		agregamos un nuevo método grade() para calificar un trabajo
		
		(El profe asigna calificaciones aleatorias a los trabajos)
		
		
		Con esta declaración ahora podemos crear
		
		y utilizar profesores:
		
		```
		const walsh = new Professor("Walsh", "Psychology");
		walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

		walsh.grade("my paper"); // some random grade

		```
		
		
	Encapsulación: 
	
		Nos gustaría hacer que la propiedad del año de Estudiante sea privada
		
		Para poder cambiar las reglas sobre las clases de tiro con arco 
		
		sin romper ningún código que use la clase Estudiante.
		
		```
		class Student extends Person {
		  #year;

		  constructor(name, year) {
			super(name);
			this.#year = year;
		  }

		  introduceSelf() {
			console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
		  }

		  canStudyArchery() {
			return this.#year > 1;
		  }
		}
		
		```
		
		#year es una propiedad de datos privados.
			
		Podemos construir un objeto Estudiante
		
		puede usar #año internamente
			
		si código externo al objeto intenta acceder a #año 
		
		el navegador arroja un error:
		
		```
		const summers = new Student("Summers", 2);

		summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
		summers.canStudyArchery(); // true

		summers.#year; // SyntaxError
		
		```	
			
		El código ejecutado en la consola de Chrome
		
		puede acceder a propiedades privadas fuera de la clase.
			
		Esta es una relajación de la restricción de sintaxis de JavaScript exclusiva de DevTools.
			
		
		Las propiedades de datos privados:
			
			1. deben declararse en la declaración de clase
			
			2. sus nombres comienzan con #.
		
		
		Métodos Privados: 
			
			sus nombres comienzan con # 
			
			solo pueden ser llamados mediante los métodos propios del objeto
			
			```
			class Example {
			  somePublicMethod() {
				this.#somePrivateMethod();
			  }

			  #somePrivateMethod() {
				console.log("You called me?");
			  }
			}

			const myExample = new Example();

			myExample.somePublicMethod(); // 'You called me?'

			myExample.#somePrivateMethod(); // SyntaxError
			
			```
		
		
		
|| JSON 
		
	JavaScript Object Notation
	
	es un formato estándar basado en texto
	
	para representar datos estructurados
	
	basados ​​en la sintaxis de objetos JavaScript
	
	
	Se usa comúnmente para transmitir datos en aplicaciones web
	
	Ej, enviar algunos datos desde el servidor al cliente
	
	para que puedan mostrarse en una página web, o viceversa. 
	
	
	Aunque se parece mucho a la sintaxis literal de objetos de JavaScript
	
	Se puede utilizar independientemente de JavaScript
	
	muchos entornos de programación cuentan con la capacidad de leer (analizar) y generar JSON.


	JSON existe como una cadena
	
	lo que resulta útil cuando desea transmitir datos a través de una red.
	
	Debe convertirse en un objeto JavaScript nativo
	
	cuando desee acceder a los datos.
	
	JavaScript proporciona un objeto JSON global
	
	tiene métodos disponibles para convertir entre los dos.


	Convertir una cadena en un objeto nativo
	
	se llama deserialización
	
	convertir un objeto nativo en una cadena
			
	para que pueda transmitirse a través de la red 
	
	se llama serialización.
			
			
	Una cadena JSON se puede almacenar en su propio archivo
	
	es básicamente solo un archivo de texto
	
	con una extensión .json y un tipo MIME de aplicación/json.


	Estructura de JSON: 
		
		Es una cadena cuyo formato se parece mucho al formato literal del objeto JavaScript

		Puede incluir los mismos tipos de datos básicos dentro de JSON que en un objeto JavaScript estándar
		
		cadenas, números, matrices, booleanos y otros objetos literales.

		Esto le permite construir una jerarquía de datos
		
		```
		{
		  "squadName": "Super hero squad",
		  "homeTown": "Metro City",
		  "formed": 2016,
		  "secretBase": "Super tower",
		  "active": true,
		  "members": [
			{
			  "name": "Molecule Man",
			  "age": 29,
			  "secretIdentity": "Dan Jukes",
			  "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
			},
			{
			  "name": "Madame Uppercut",
			  "age": 39,
			  "secretIdentity": "Jane Wilson",
			  "powers": [
				"Million tonne punch",
				"Damage resistance",
				"Superhuman reflexes"
			  ]
			},
			{
			  "name": "Eternal Flame",
			  "age": 1000000,
			  "secretIdentity": "Unknown",
			  "powers": [
				"Immortality",
				"Heat Immunity",
				"Inferno",
				"Teleportation",
				"Interdimensional travel"
			  ]
			}
		  ]
		}

		
		```
		
		La jerarquía empieza con el nombre del/grupo
		
		Después sigue otra con el nombre de/miembros
		
		etc. 
		
		
		Si cargamos esta cadena en un programa JavaScript
		
		y la analizamos (parsed) en una variable llamada superhéroes
		
		podríamos acceder a los datos que contiene
		
		usando la misma notación de punto/corchete
		
		```
		superHeroes.homeTown;
		superHeroes["active"];

		```
		
		Para acceder a datos más abajo en la jerarquía	
		
		debe encadenar los nombres de propiedad requeridos y los índices de matriz
		
		Ej, para acceder al tercer superpoder del segundo héroe
		
		que figura en la lista de miembros
		
		```
		superHeroes["members"][1]["powers"][2];

		```
			
			1. nombre de la variable: superhéroes.
			
			2. Dentro de eso, queremos acceder a la propiedad de miembros
			
			por eso usamos ["miembros"].

			3. Members contiene una matriz poblada por objetos.
			
			Queremos acceder al segundo objeto dentro de la matriz
		
			usamos [1]. 		
			
			4. Dentro de este objeto, queremos acceder a la propiedad powers
			
			usamos ["powers"].

			5. Dentro de la propiedad de powers
			
			hay una matriz que contiene los superpoderes del héroe seleccionado
			
			Queremos el tercero, así que usamos [2].
			
		
		Código JSON: 
			
			Hemos hecho que el JSON visto arriba esté disponible dentro de una variable
			
			En el archivo de test. 
			
			cargar y acceder a los datos dentro de la variable a través de la consola JavaScript de su navegador.
			
			
	Arrays como JSON : 
			
		el texto JSON básicamente parece un objeto JavaScript 
		
		dentro de una cadena.
		
		podemos convertir matrices a/desde JSON
		
		se muestra un JSON valido: 
		
		```			
		[
		  {
			"name": "Molecule Man",
			"age": 29,
			"secretIdentity": "Dan Jukes",
			"powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
		  },
		  {
			"name": "Madame Uppercut",
			"age": 39,
			"secretIdentity": "Jane Wilson",
			"powers": [
			  "Million tonne punch",
			  "Damage resistance",
			  "Superhuman reflexes"
			]
		  }
		]
		
		```
		
		Los miembros del squad / o todos los datos 
		
		están dentro de una matriz
		
		Sólo tendría que acceder a los elementos de la matriz (en su versión analizada)
		
		comenzando con un índice de matriz
		
		por ejemplo:
		
		```
		[0]["powers"][0]

		```
	
		JSON es puramente una cadena
		
		con un formato de datos específico:
		
		solo contiene propiedades, no métodos.

		requiere el uso de comillas dobles alrededor de cadenas y nombres de propiedades
		
		Las comillas simples no son válidas más que rodear toda la cadena JSON.

		Incluso una sola coma o dos puntos mal colocados puede hacer que un archivo JSON funcione mal y no funcione

		
		Debe tener cuidado al validar cualquier dato 
		
		que intente utilizar
		
		(aunque es menos probable que el JSON generado por computadora incluya errores, siempre que el programa generador funcione correctamente).
		
		Puede validar JSON utilizando una aplicación como JSONLint.


		JSON puede tomar la forma de cualquier tipo de datos que sea válido
		
		para su inclusión dentro de JSON
		
		no solo matrices u objetos.
		
		por ejemplo, una sola cadena o número sería JSON válido.

		
		A diferencia del código JavaScript
		
		en el que las propiedades de los objetos pueden estar sin comillas
		
		en JSON solo se pueden usar cadenas entre comillas como propiedades.
		
		
	Trabajando con JSON: 
	
		para mostrar cómo podríamos utilizar algunos datos con formato JSON en un sitio web.

		copias locales de nuestros archivos heroes.html y style.css

		El HTML contiene un body y un script. 
		
		```
		<header>
		...
		</header>

		<section>
		...
		</section>

		<script>
		...
		</script>

		```
		
		Estan a disposición nuestros datos JSON en github
		
		cargar el JSON en nuestro script
		
		Usar alguna manipulación DOM
		
		```
		async function populate() {
		  const requestURL =
			"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
		  const request = new Request(requestURL);

		  const response = await fetch(request);
		  const superHeroes = await response.json();

		  populateHeader(superHeroes);
		  populateHeroes(superHeroes);
		}

		```
		
		//Funcion async populate()
		//guarda una url en requestURL
		//crea un objeto/instancia de Request
		//pasandole una url a su constructor
		 
		//guardamos una respuesta de fetch en response
		//pasandole a su consturctor 
		//el objeto request/url
		//guardamos los superheroes con el .json() 
		//el archivo será la respuesta/fetch
		//que tenía el objeto request/url 
		
		//tenemos dos llamadas a funciones
		//toman el json.  
		//para llenar los elementos de html
		
		
		Para obtener el JSON utilizamos una API llamada Fetch.
		
		Esta API nos permite realizar solicitudes de red 
		
		(network requests)
		
		para recuperar recursos de un servidor a través de JavaScript
		
		por ejemplo, imágenes, texto, JSON e incluso fragmentos de HTML
		
		Significa que podemos actualizar pequeñas secciones de contenido sin tener que recargar toda la página.

		
		En la función
		
		las primeras cuatro líneas utilizan la API Fetch
		
		para recuperar (fetch) el JSON del servidor:

		
		declaramos la variable requestURL
		
		para almacenar la URL de GitHub

		
		Usamos la URL para inicializar 
		
		un nuevo objeto request (objeto de solicitud)

		
		hacemos la solicitud de red usando (network request)
		
		usando la función fetch()
		
		y esto devuelve un objeto Response

		
		La API fetch() es asíncrona.
		
		necesitamos agregar la palabra clave async
		
		antes del nombre de la función 
		
		que usa la API Fetch
		
		y agregar la palabra clave await 
		
		antes de llamadar a cualquier 
		
		función asincrónica.
		
		
		Después de todo eso
		
		la variable superHeroes
		
		contendrá el objeto JavaScript
		
		basado en JSON
		
		(empezamos con un json)
		
		
		Luego pasamos ese objeto a dos llamadas a funciones
		
		la primera llena el <header>
		
		con los datos correctos
		
		la segunda crea una tarjeta de información
		
		para cada héroe del equipo y la inserta
		
		en <section>. 
		
		
	Completando HTML: 
		
		Header: 
		
			Ahora que recuperamos los datos JSON
			
			y los convertimos en un objeto JavaScript
			
			usémoslos escribiendo las dos funciones
			
			funciones a las que hicimos referencia
			
			agregue código en las funciones: 
			
			```
			function populateHeader(obj) {
			  const header = document.querySelector("header");
			  const myH1 = document.createElement("h1");
			  myH1.textContent = obj.squadName;
			  header.appendChild(myH1);

			  const myPara = document.createElement("p");
			  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
			  header.appendChild(myPara);
			}
			
			```
			
			primero creamos un elemento h1 con createElement(),
			
			configuramos su textContent
			
			para que sea igual a la propiedad squadName
			
			del objeto
			
			luego lo agregamos al encabezado usando appendChild().
			
			
			creamos un p, configuramos su contenido de texto
			
			lo agregamos al encabezado
		
		
		Tarjetas de información: 
		
			```
			function populateHeroes(obj) {
			  const section = document.querySelector("section");
			  const heroes = obj.members;

			  for (const hero of heroes) {
				const myArticle = document.createElement("article");
				const myH2 = document.createElement("h2");
				const myPara1 = document.createElement("p");
				const myPara2 = document.createElement("p");
				const myPara3 = document.createElement("p");
				const myList = document.createElement("ul");

				myH2.textContent = hero.name;
				myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
				myPara2.textContent = `Age: ${hero.age}`;
				myPara3.textContent = "Superpowers:";

				const superPowers = hero.powers;
				for (const power of superPowers) {
				  const listItem = document.createElement("li");
				  listItem.textContent = power;
				  myList.appendChild(listItem);
				}

				myArticle.appendChild(myH2);
				myArticle.appendChild(myPara1);
				myArticle.appendChild(myPara2);
				myArticle.appendChild(myPara3);
				myArticle.appendChild(myList);

				section.appendChild(myArticle);
			  }
			}
					
			```
			almacenamos la propiedad members
			
			del objeto JavaScript en una nueva variable.
			
			matriz contiene múltiples objetos
			
			contienen la información de cada héroe.

			
			utilizamos un bucle for...of para recorrer 
			
			cada objeto de la matriz
			
			para cada uno, haremos algo: 
			
			
			Cree varios elementos nuevos:
			
			un <article>, un <h2>, tres <p>s 
			
			y un <ul>.
		
					
			Establece <h2> para que contenga 
			
			el nombre del héroe actual.


			Complete los tres párrafos con su 
			
			identidad secreta

			edad y una línea que diga "Superpoderes:"
			
			para introducir la información en la lista.

			
			Almacene la propiedad de poderes
			
			en otra nueva constante llamada superPoderes; 
			
			contiene una matriz
			
			enumera los superpoderes del héroe actual.

			
			Utilice otro bucle for...of
			
			para recorrer los superpoderes
			
			del héroe actual
			
			
			para cada uno creamos un elemento <li>,
			
			colocamos el superpoder dentro de él
			
			luego colocamos el elemento listItem
			
			dentro del elemento <ul> (myList)
			
			usando appendChild().


			Lo último que hacemos es agregar
			    
			<h2>, <p>s y <ul> dentro del 
			
			<artículo> (myArticle),
			
			
			El orden en el que se agregan los elementos es importante
			
			es el orden en que se mostrarán dentro del HTML.
			

			Si tiene problemas para seguir la notación de punto/corchete
			
			para acceder al objeto JavaScript
			
			es útil tener el archivo superheroes.json abierto
			
			y consultarlo. 
			
		
		Llamar a la función principal: 
		
			```
			populate();
			
			```
	
	
	Convertir entre Objetos y Texto 
		
		El ejemplo anterior fue simple en términos de acceso al objeto JavaScript
		
		convertimos la respuesta de la red directamente en un objeto JavaScript 
		
		usando Response.json().

		
		A veces no lo tenemos
		
		recibimos una cadena JSON sin formato
		
		y necesitamos convertirla en un objeto nosotros mismos.
		 
		Y cuando queremos enviar un objeto JavaScript
		
		a través de la red
		
		debemos convertirlo a JSON
		
		(una cadena)
		
		antes de enviarlo.
		
		
		estos dos problemas son tan comunes
		
		hay un objeto JSON integrado
		
		disponible en los navegadores
		
		contiene los dos métodos siguientes:
		
		
		1. parse():
			
			acepta una cadena JSON como parámetro
			
			devuelve el objeto JavaScript correspondiente
			
			
		2. stringify():
			
			acepta un objeto como parámetro
			
			devuelve la cadena JSON equivalente
			
		
		En un ej: 
			
			heroes-finished-json-parse.html
			
			hace exactamente lo mismo que el anterior 
			
			Pero cambia: 
			
			1. fetch/recuperacion de response 
				
				como texto en lugar de JSON
				
				llamando al método text()
				
				de response 
				
				
			2. usamos parse():
			
				para convertir el texto en un objeto JavaScript.

			
			```
			async function populate() {

			  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
			  const request = new Request(requestURL);

			  const response = await fetch(request);
			  const superHeroesText = await response.text();

			  const superHeroes = JSON.parse(superHeroesText);
			  populateHeader(superHeroes);
			  populateHeroes(superHeroes);

			}
				
			```
			
			stringify() funciona al revés. 
			
			ingresar las siguientes líneas en la consola:
			
			```
			let myObj = { name: "Chris", age: 38 };
			myObj;
			let myString = JSON.stringify(myObj);
			myString;
			
			```
			
			devuelve el objeto en string 
			
			'{"name":"Chris","age":38}' 
			
				
			estamos creando un objeto JavaScript
			
			luego comprobamos lo que contiene,
			
			luego lo convertimos en una cadena JSON 
			
			usando stringify()
			
			guardamos el valor de retorno en una nueva variable
			
			luego lo comprobamos nuevamente.
			
			
					
				
						
|| 4. Asynchronous JavaScript

	JavaScript asincrónico
	
	se puede utilizar para manejar
	
	posibles operaciones de bloqueo
	
	como la recuperación de recursos de un servidor.
	
	
	
	Guia: 

		1. Intro a JavaScript asincrónico

			Programación sincrónica y asincrónica
			
			a menudo necesitamos usar técnicas asincrónicas
			
			problemas relacionados  
			
			implementado las funciones asincrónicas
			
		
		2. Usar Promises
			
			Presentaremos a las promesas
			
			usar API basadas en promesas
			
			palabras clave async y await.
			
		
		3. Implementación de promise-based API
			
			implementar su propia API
			
			basada en promesas
			
			
		4. Introducción a workers
		
			Los workers permiten ejecutar ciertas tareas
		
			en un hilo separado
			
			para mantener su código principal receptivo/responsive.			
			
			reescribiremos una async function 
			
			de larga duración
			
			para utilizar un worker 



|| Intro a JavaScript asincrónico

	La programación asincrónica es una técnica que permite
	
	que el programa inicie una tarea potencialmente de larga duración
	
	y aún pueda responder a otros eventos
	
	mientras se ejecuta esa tarea
	
	en lugar de tener que esperar hasta que finalice.
	
	Una vez que la tarea ha finalizado
	
	se presenta el resultado a su programa.

	
	Muchas funciones proporcionadas por los navegadores
	
	especialmente las más interesantes
	
	pueden tardar mucho tiempo
	
	por tanto, son asincrónicas
	
	
	Ej: 
		
		Realizar solicitudes HTTP 
			
			usando fetch()
		
		Acceder a la cámara o al micrófono
		
			usando getUserMedia()

		Pedirle a un usuario que seleccione archivos 
			
			showOpenFilePicker()

			
	aunque no tenga que implementar
	
	sus propias funciones asincrónicas con frecuencia. 
	
	es probable que necesite usarlas correctamente.

	
	comenzaremos analizando el problema
	
	con las funciones síncronas de larga ejecución
	
	que hacen que la programación asincrónica
	
	sea una necesidad.
	

	Programación sincrónica:
		
		Considere el código
		
		```
		const name = "Miriam";
		const greeting = `Hello, my name is ${name}!`;
		console.log(greeting);
		// "Hello, my name is Miriam!"

		```
		
		Declara una cadena name
	
		Declara otra cadena greeting, usa name 
		
		Envía greeting a la consola JavaScript.
			
		
		el navegador recorre el programa 
		
		una línea a la vez
		
		en el orden en que lo escribimos
		
		
		En cada punto
		
		el navegador espera
		
		a que la línea termine su trabajo
		
		antes de pasar a la siguiente línea.
		
		Tiene que hacer esto porque
		
		cada línea depende del trabajo realizado en las líneas anteriores
		
		
		Hace que este sea un programa sincrónico
		
		Seguiría siendo sincrónico incluso si llamaramos a una función separada
			
		```
		function makeGreeting(name) {
		  return `Hello, my name is ${name}!`;
		}

		const name = "Miriam";
		const greeting = makeGreeting(name);
		console.log(greeting);
		// "Hello, my name is Miriam!"
		
		```

		makeGreeting() es una función sincrónica
		
		porque la persona que llama
		
		tiene que esperar a que la función termine su trabajo
		
		y devuelva un valor antes de que la persona que llama pueda continuar.
		
		
	Una función síncrona de larga duración:
	
		El siguiente programa utiliza un algoritmo muy ineficiente
		
		para generar múltiples números primos grandes
		
		cuando un usuario hace clic en el botón "Generar números primos". 
		
		Cuanto mayor sea el número de números primos
		
		que especifique un usuario
		
		más tardará la operación
		
		```
		<label for="quota">Number of primes:</label>
		<input type="text" id="quota" name="quota" value="1000000" />

		<button id="generate">Generate primes</button>
		<button id="reload">Reload</button>

		<div id="output"></div>
		
		```
		
		```
		const MAX_PRIME = 1000000;

		function isPrime(n) {
		  for (let i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) {
			  return false;
			}
		  }
		  return n > 1;
		}

		const random = (max) => Math.floor(Math.random() * max);

		function generatePrimes(quota) {
		  const primes = [];
		  while (primes.length < quota) {
			const candidate = random(MAX_PRIME);
			if (isPrime(candidate)) {
			  primes.push(candidate);
			}
		  }
		  return primes;
		}

		const quota = document.querySelector("#quota");
		const output = document.querySelector("#output");

		document.querySelector("#generate").addEventListener("click", () => {
		  const primes = generatePrimes(quota.value);
		  output.textContent = `Finished generating ${quota.value} primes!`;
		});

		document.querySelector("#reload").addEventListener("click", () => {
		  document.location.reload();
		});
		
		```
		
		Dependiendo de qué tan rápida sea su computadora
			
		probablemente pasarán unos segundos 
		
		antes de que el programa muestre el mensaje "¡Terminado!" 
		
		
	El problema de las funciones síncronas de larga duración:
	
		El siguiente ejemplo es igual al anterior
		
		excepto que agregamos un cuadro de texto para que usted escriba
		
		haga clic en "Generar números primos" e intente escribir en el cuadro de texto inmediatamente después.


		Descubrirá que mientras nuestra función
		
		generatePrimes() se está ejecutando
		
		nuestro programa no responde en absoluto
		
		no puede escribir nada, hacer clic en nada
		
		ni hacer nada más.
		
		
		La razón de esto es que este programa JavaScript
		
		tiene un solo subproceso.
		
		Un hilo es una secuencia de instrucciones
		
		que sigue un programa. 
		
		Debido a que el programa consta de un solo hilo
		
		solo puede hacer una cosa a la vez
		
		si está esperando que regrese nuestra llamada sincrónica de larga duración
		
		no puede hacer nada más.


		Lo que necesitamos es una manera 
		
		para que nuestro programa

		
		1. Inicie una operación de larga duración
			
			llamando a una función.

		2. Haga que esa función inicie la operación y regrese inmediatamente
			
			para que nuestro programa
			
			pueda responder a otros eventos.

		3. Haga que la función ejecute la operación
		
			de una manera que no bloquee el hilo principal
			
			por ejemplo iniciando un nuevo
		
		4. Notificarnos con el resultado de la operación
			
			cuando finalmente se complete.

			
		Es precisamente lo que nos permiten hacer las funciones asincrónicas
		
	
	Event Handlers: 
		
		La descripción de recien sobre las funciones asincrónicas
		
		puede recordarle a los controladores de eventos
		
		Son una forma de programación asincrónica
	
		usted proporciona una función
		
		(el controlador de eventos)
		
		que será llamada, no de inmediato
		
		sino cada vez que ocurra el evento
		
		Si "el evento" es "la operación asincrónica se ha completado"
		
		entonces ese evento podría usarse
		
		para notificar a la persona que llama
		
		sobre el resultado de una llamada
		
		a una función asincrónica.
		
		
		Algunas de las primeras API asincrónicas
		
		usaban eventos precisamente de esta manera
		
		La API XMLHttpRequest
		
		le permite realizar solicitudes HTTP
		
		a un servidor remoto mediante JavaScript
		
		Dado que esto puede llevar mucho tiempo
		
		es una API asincrónica
		
		se le notifica sobre el progreso
		
		y la eventual finalización de una solicitud
		
		adjuntando detectores de eventos
		
		al objeto XMLHttpRequest.


		El siguiente ejemplo muestra esto. 
		
		Presione "Haga clic para iniciar solicitud"
		
		para enviar una solicitud.
		
		Creamos una nueva XMLHttpRequest
		
		y escuchamos su evento de carga
		
		El controlador registra un "¡Terminado!"
		
		junto con el código de estado.

		
		Después de agregar el detector de eventos

		enviamos la solicitud
		
		Tenga en cuenta que después de esto
		
		podemos registrar la "Solicitud XHR iniciada":
		
		nuestro programa puede continuar ejecutándose
		
		mientras se realiza la solicitud
		
		y se llamará a nuestro controlador de eventos
		
		cuando se complete la solicitud.
		
		```
		<button id="xhr">Click to start request</button>
		<button id="reload">Reload</button>

		<pre readonly class="event-log"></pre>
		
		```
		
		```
		const log = document.querySelector(".event-log");

		document.querySelector("#xhr").addEventListener("click", () => {
		  log.textContent = "";

		  const xhr = new XMLHttpRequest();

		  xhr.addEventListener("loadend", () => {
			log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
		  });

		  xhr.open(
			"GET",
			"https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
		  );
		  xhr.send();
		  log.textContent = `${log.textContent}Started XHR request\n`;
		});

		document.querySelector("#reload").addEventListener("click", () => {
		  log.textContent = "";
		  document.location.reload();
		});
		
		```
		
		Similar a los controladores de eventos usados hasta ahora. 
		
		excepto que en lugar de que el evento sea una acción del usuario
		
		como que el usuario haga clic en un botón
		
		el evento es un cambio en el estado de algún objeto.
		
	
	Callbacks: 
		
		Un event handler es un tipo particular de callback
		
		Un callback es simplemente una función
		
		que se pasa a otra función
		
		con la expectativa de que se llame al callback 
		
		en el momento adecuado. 
		
		solían ser la forma principal en que se implementaban las funciones asincrónicas en JS. 
		
		
		El código basado en un callback 
		
		puede resultar difícil de entender
		
		cuando la devolución de llamada tiene que llamar a funciones
		
		que aceptan una devolución de llamada
		
		Es una situación común
		
		si necesita realizar alguna operación
		
		que se divide en una serie de funciones asincrónicas
		
		```
		function doStep1(init) {
		  return init + 1;
		}

		function doStep2(init) {
		  return init + 2;
		}

		function doStep3(init) {
		  return init + 3;
		}

		function doOperation() {
		  let result = 0;
		  result = doStep1(result);
		  result = doStep2(result);
		  result = doStep3(result);
		  console.log(`result: ${result}`);
		}

		doOperation();
	
		```
		
		tenemos una única operación que se divide en tres pasos
		
		donde cada paso depende del último paso
		
		el primer paso suma 1 a la entrada
		
		el segundo suma 2
		
		el tercero suma 3. 
		
		Comenzando con una entrada de 0
		
		el resultado final es 6
		
		(0 + 1 + 2 + 3)
		
		
		Como programa sincrónico es sencillo
		
		si implementáramos los pasos mediante callbacks
		
		```
		function doStep1(init, callback) {
		  const result = init + 1;
		  callback(result);
		}

		function doStep2(init, callback) {
		  const result = init + 2;
		  callback(result);
		}

		function doStep3(init, callback) {
		  const result = init + 3;
		  callback(result);
		}

		function doOperation() {
		  doStep1(0, (result1) => {
			doStep2(result1, (result2) => {
			  doStep3(result2, (result3) => {
				console.log(`result: ${result3}`);
			  });
			});
		  });
		}

		doOperation();
		
		```
		
		Debido a que tenemos que llamar a callbacks
		
		dentro de callbacks, obtenemos una función doOperation()
		
		profundamente anidada, que es mucho más difícil de leer y depurar
		
		A esto se llama callback hell o pyramid of doom. 
		
		Cuando anidamos devoluciones de llamada
		
		puede resultar muy difícil manejar los errores
		
		hay que manejar los errores en cada nivel de la "pirámide",
		
		en lugar de manejar los errores solo una vez en el nivel superior.


		La mayoría de las API asincrónicas modernas no utilizan callbacks
		
		La base de la programación asincrónica en JS
		
		es Promise.
		
		
|| Promise 
		
	Las promesas son la base de la programación asincrónica en JavaScript moderno.
	
	es un objeto devuelto por una función asincrónica
	
	que representa el estado actual de la operación
	
	En el momento en que se devuelve la promesa
	
	a la persona que llama, la operación a menudo no finaliza
	
	pero el objeto de promesa proporciona métodos
	
	para manejar el eventual éxito o fracaso de la operación.
	
	
	Con el uso de callbacks para implementar funciones asincrónicas 
	
	llamas a la función asincrónica y pasas tu función callback
	
	La función regresa inmediatamente
	
	y llama a su llama a su callback 
	
	cuando finaliza la operación.
	
	
	Con una API basada en promesas
	
	la función asincrónica inicia la operación
	
	y devuelve un objeto Promise
	
	Luego puede adjuntar controladores 
	
	a este objeto de promesa
	
	estos controladores se ejecutarán
	
	cuando la operación haya tenido éxito
	
	o haya fallado.
	
	
	Usando fetch() API: 
		
		Exploraremos las promesas copiando ejemplos de código en la consola 
		
		Para configurar: 
			
		Entrar en https://example.org

		abrir la consola 
		
		copiar los ejemplos, recargar 
		
		o la consola se quejará de que ha vuelto a declarar fetchPromise.
		
		Usar el archivo JSON 
		
		registraremos (log) información al respecto.
		
		
		Para hacer esto, realizaremos una HTTP request al servidor
		
		En una solicitud HTTP, enviamos un mensaje de solicitud
		
		(request message) a un servidor remoto
		
		y este nos envía una respuesta
		
		enviaremos una solicitud para obtener un archivo JSON del servidor.
		
		Realizamos solicitudes HTTP
		
		API fetch() que es el reemplazo moderno 
		
		y basado en promesas de XMLHttpRequest del ej anterior. 
		
		
		Copiar en la consola: 
		
		```
		const fetchPromise = fetch(
		  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		);

		console.log(fetchPromise);

		fetchPromise.then((response) => {
		  console.log(`Received response: ${response.status}`);
		});

		console.log("Started request…");
		
		```
		
		Consola: 
		
			Started request... 
			
			Received response: 200 
		
		
		1. llamar a la API fetch()
			
			asignar el valor de retorno
			
			a la variable fetchPromise
			
		
		2. después, registrando la variable fetchPromise
			
			Esto debería generar algo como
			
			Promise { <state>: "pending" }
			
			nos indica que tenemos un objeto Promise
			
			y que tiene un estado 
			
			cuyo valor es "pending".
					
			El estado "pendiente" 
			
			significa que la operación fetch (recuperación)
			
			aún continúa.

		3. pasando una función de controlador
			
			controlador al método then() de Promise
			
			Cuando (y si)
			
			la operación fetch tiene éxito
			
			la promesa llamará a nuestro controlador
			
			y pasará un objeto Response
			
			que contiene la respuesta del servidor
			
		4. registrando un mensaje
				
			de que hemos iniciado la request/solicitud 
			
			
		La salida completa sería: 
			
			Promise { <state>: "pending" }
			Started request…
			Received response: 200

		
		Tenga en cuanta que Star request...
		
		se registra antes
		
		de que recibamos la respuesta
		
		A diferencia de una función síncrona,
		
		fetch() regresa mientras la request 
		
		aún está en curso
		
		permite que el programa siga respondiendo
			
		La respuesta muestra el código de estado 200 (OK)
		
		significa que nuestra request 
		
		se realizó correctamente. 
		
		
		Se puede parecer al ejemplo de XML
		
		donde agregamos controladores de eventos
		
		al objeto XMLHttpRequest
		
		
		En lugar de eso
		
		pasamos un controlador al método then()
		
		de la promesa devuelta
		
		
	Encadenando Promesas: 
		
		Con la API fetch()
		
		una vez que obtienes un objeto response
		
		necesitas llamar a otra función
		
		para obtener los datos de response. 
		
		
		En este caso queremos obtener 
		
		los datos de respuesta como JSON
		
		por lo que llamaríamos al método json()
		
		del objeto Response.
		
		json() también es asincrónico
		
		Este es un caso en el que tenemos que llamar
		
		a dos funciones asincrónicas sucesivas
		
		Intentemos: 
		
		```
		const fetchPromise = fetch(
		  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		);

		fetchPromise.then((response) => {
		  const jsonPromise = response.json();
		  jsonPromise.then((data) => {
			console.log(data[0].name);
		  });
		});

		```
		
		como antes
		
		agregamos un controlador then()
		
		a la promesa devuelta por fetch().
		
		Pero esta vez nuestro controlador llama a 
		
		response.json()
		
		y luego pasa un nuevo controlador then()
		
		a la promesa devuelta por response.json().
		
		
		Esto debería registrar baked beans
		
		el nombre del primer producto enumerado en "products.json"
		
		
		Con los callback podiamos producir 
		
		un callback hell al anidarlos sucesivamente 
		
		hacía que nuestro código fuera difícil de entender
		
		
		con las llamadas then()
		
		también puede pasar
		
		la característica elegante de promises 
		
		es que el propio then() 
		
		devuelve una promesa
		
		que se completará con el resultado de la función que se le pasa
		
		significa que podemos y deberíamos 
		
		reescribir el código
		
		```
		const fetchPromise = fetch(
		  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		);

		fetchPromise
		  .then((response) => response.json())
		  .then((data) => {
			console.log(data[0].name);
		  });

		```
		
		En lugar de llamar al segundo then() 
		
		dentro del controlador del primer then()
		
		podemos devolver la promesa por json()
		
		y llamar al segundo then() 
		
		con ese valor de retorno
		
		
		Esto se llama encadenamiento de promesas
		
		significa que podemos evitar niveles
		
		cada vez mayores de sangría
		
		cuando necesitamos realizar llamadas a
		
		funciones asincrónicas consecutivas.
		
		
		Hay una pieza más que agregar
		
		Necesitamos verificar que el servidor 
		
		aceptó y pudo manejar la request 
		 
		antes de intentar leerla
		
		Haremos esto verificando 
		
		el código de estado en la respuesta
		
		y arrojando un error si no estaba "OK"
		
		```
		const fetchPromise = fetch(
		  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		);

		fetchPromise
		  .then((response) => {
			if (!response.ok) {
			  throw new Error(`HTTP error: ${response.status}`);
			}
			return response.json();
		  })
		  .then((data) => {
			console.log(data[0].name);
		  });
		
		```
		
	
	Capturar Errores: 
	
		Manejar errores en la API fetch() 
		
		puede generar un error por muchas razones
		
		Ej, no había conectividad de red 
		
		o la URL tenía un formato incorrecto
		
		y nosotros mismos estamos generando un error
		
		si el servidor devolvió un error.

		
		El manejo de errores puede resultar dificil 
		
		usando callbacks, obliga a manejar errores
		
		en todos los niveles de anidamiento
		
		
		los objetos Promise
		
		proporcionan un método catch().
		
		parecido a then():
		
		lo llamas y le pasas una función de controlador
		
		mientras que el controlador pasado a then()
		
		se llama cuando la operación asincrónica
		
		tiene éxito, el controlador pasado a catch()
		
		se llama cuando la operación asincrónica falla.

		
		Si agrega catch()
		
		al final de una cadena de promesa
		
		se llamará cuando falle
		
		cualquiera de las llamadas a funciones asincrónicas
		
		puede implementar una operación
		
		como varias llamadas a funciones asincrónicas consecutivas 
		
		y tener un solo lugar para manejar todos los errores.
		
		
		Agregamos un controlador de errores usando catch()
		
		también modificamos la URL para que la solicitud falle.
		
		```
		const fetchPromise = fetch(
		  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		);

		fetchPromise
		  .then((response) => {
			if (!response.ok) {
			  throw new Error(`HTTP error: ${response.status}`);
			}
			return response.json();
		  })
		  .then((data) => {
			console.log(data[0].name);
		  })
		  .catch((error) => {
			console.error(`Could not get products: ${error}`);
		  });
		
		```
		
		
	Terminología en Promesas: 
		
		Una promesa puede estar en uno de tres estados
		
		1. pending: 
			
			la promesa se ha creado
			
			la función asincrónica 
			
			a la que está asociada
			
			no ha tenido éxito o no ha fallado todavía.
			
			Este es el estado en el que se encuentra
			
			su promesa cuando se devuelve
			
			de una llamada a fetch()
			
			y la request aún se está realizando.
			
		
		2. fulfilled:
			
			la función asincrónica ha tenido éxito.
			
			Cuando se cumple una promesa
			
			se llama a su controlador then().


		3. rejected:
			
			 la función asincrónica ha fallado.
			 
			 Cuando se rechaza una promesa
			 
			 se llama a su controlador catch().


		Lo que significa: "tuvo éxito" o "falló"
			
		depende de la API en cuestión
		
		fetch() rechaza la promesa devuelta
		
		si (entre otras razones)
		
		un error de red impidió
		
		que se enviara la solicitud
		
		pero cumple la promesa		
		
		si el servidor envió response
			
		incluso si la respuesta fue un error como 404 No encontrado.

		
		A veces se usa el termino settled
		
		para el cumplimiento como el rechazo.
		
		(fulfilled o rejected)
		
		
		Una promesa se resuelve/resolve
		
		si se liquida o si ha sido "bloqueada"
		
		(settled o locked in)
		 
		para seguir el estado de otra promesa.

	
	Combinar multiples promesas: 
		
		La cadena de promesas es lo que necesita
		
		cuando su operación 
		
		consta de varias funciones asincrónicas
		
		y necesita que cada una
		
		se complete antes de comenzar la siguiente
		
		Pero hay otras formas en las que es posible
		
		que necesites combinar
		
		llamadas a funciones asincrónicas
		
		y la API de Promise proporciona 
		
		algunas ayudas para ellas
		
		
		A veces es necesario que se cumplan 
		
		todas las promesas
		
		pero no dependen unas de otras
		
		En un caso como ese,
		
		es mucho más eficiente 
		
		comenzar con todos juntos y 
		
		luego recibir una notificación 
		
		cuando se hayan cumplido.
		
		El método Promise.all()
		
		es lo que necesita aquí. 
		
		Toma una serie de promesas
		
		y devuelve una única promesa.


		La promesa devuelta por Promise.all():		
		
		1. fulfilled
		
			cuando y si se cumplen todas
			
			las promesas del conjunto
			
			En este caso se llama al controlador then()
			
			con una matriz de todas las respuestas
			
			en el mismo orden en que se pasaron las promesas a all().
		
		
		2. rejected
			
			cuando y si alguna de las promesas de la matriz es rechazada
			
			se llama al controlador catch()
			
			con el error arrojado por la promesa que rechazó
			
			```
			const fetchPromise1 = fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
			);
			const fetchPromise2 = fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
			);
			const fetchPromise3 = fetch(
			  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
			);

			Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
			  .then((responses) => {
				for (const response of responses) {
				  console.log(`${response.url}: ${response.status}`);
				}
			  })
			  .catch((error) => {
				console.error(`Failed to fetch: ${error}`);
			  });
			
			```
			
			Estamos realizando tres solicitudes fetch()
			
			a tres URL diferentes.
			
			Si todos tienen éxito, 
			
			registraremos el estado de respuesta
			
			de cada uno.
			
			Si alguno de ellos falla, 
			
			registraremos el error.

			
			Con las URL que hemos proporcionado
			
			todas las solicitudes deberían cumplirse
			
			aunque para la segunda el servidor devolverá 404
			
			(No encontrado)
						
			en lugar de 200 (OK)
			
			porque el archivo solicitado no existe
			
			
			La salida debería ser: 
			
			```
			https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
			https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
			https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
			
			```
			
			
			Si probamos el mismo código con una URL mal formada
			
			```
			const fetchPromise1 = fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
			);
			const fetchPromise2 = fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
			);
			const fetchPromise3 = fetch(
			  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
			);

			Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
			  .then((responses) => {
				for (const response of responses) {
				  console.log(`${response.url}: ${response.status}`);
				}
			  })
			  .catch((error) => {
				console.error(`Failed to fetch: ${error}`);
			  });
			
			```
			
			Entonces podemos esperar
			
			que se ejecute el controlador catch()
			
			y deberíamos ver algo como:

			```
			Failed to fetch: TypeError: Failed to fetch
			
			```
			
			
			A veces, es posible que necesites
			
			cumplir cualquiera de un conjunto de promesas
			
			y no te importa cuál.
			
			En ese caso, desea Promise.any().
			
			se cumple tan pronto como se cumple
			
			cualquiera de las promesas
			
			o se rechaza si se rechazan todas:
		
			```
			
			const fetchPromise1 = fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
			);
			const fetchPromise2 = fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
			);
			const fetchPromise3 = fetch(
			  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
			);

			Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
			  .then((response) => {
				console.log(`${response.url}: ${response.status}`);
			  })
			  .catch((error) => {
				console.error(`Failed to fetch: ${error}`);
			  });
			
			```
			
			este caso no podemos predecir
			
			qué solicitud de recuperación 
			
			se completará primero
			
			
			son sólo dos de las funciones adicionales
			
			de Promise para combinar múltiples promesas
			
	
	Async y Await 
		
		La palabra clave async
		
		ofrece una forma más sencilla de trabajar
		
		con código asincrónico basado en promesas.
		
		Agregar async al inicio de una función
		
		la convierte en una función asíncrona:
		
		```
		async function myFunction() {
		  // This is an async function
		}

		```
			
		Dentro puede utilizar await
		
		antes de llamar a una función
		
		que devuelve una promesa
		
		Esto hace que el código espere en ese punto
		
		hasta que se resuelva la promesa
		
		momento en el cual el valor cumplido de la promesa
		
		se trata como un valor de retorno
		
		o se arroja el valor rejected.

		
		Esto le permite escribir código
		
		que utiliza funciones asincrónicas
		
		pero que parece código sincrónico
		
		podríamos usarlo para reescribir
		
		nuestro ejemplo de búsqueda:
		
		```
		async function fetchProducts() {
		  try {
			// después de esta línea, nuestra función esperará a que se resuelva la llamada `fetch()`
			// la llamada `fetch()` devolverá una respuesta o lanzará un error
			const response = await fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
			);
			if (!response.ok) {
			  throw new Error(`HTTP error: ${response.status}`);
			}
			// después de esta línea, nuestra función esperará a que se resuelva la llamada `response.json()`
			// la llamada `response.json()` devolverá el objeto JSON analizado o arrojará un error
			const data = await response.json();
			console.log(data[0].name);
		  } catch (error) {
			console.error(`Could not get products: ${error}`);
		  }
		}

		fetchProducts();
		
		```
		
		estamos llamando a await fetch(),
		
		y en lugar de obtener una Promesa
		
		nuestra persona que llama
		
		obtiene un objeto de respuesta 
		
		completamente completo
		
		como si fetch() fuera una función sincrónica!

		
		Incluso podemos usar un bloque try...catch
		
		para el manejo de errores
		
		exactamente como lo haríamos si el código
		
		fuera sincrónico
		
		tenga en cuenta que las funciones asíncronas
		
		siempre devuelven una promesa
		
		por lo que no puede hacer algo como:
		
		```
		async function fetchProducts() {
		  try {
			const response = await fetch(
			  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
			);
			if (!response.ok) {
			  throw new Error(`HTTP error: ${response.status}`);
			}
			const data = await response.json();
			return data;
		  } catch (error) {
			console.error(`Could not get products: ${error}`);
		  }
		}

		const promise = fetchProducts();
		console.log(promise[0].name); // "promise" is a Promise object, so this will not work
		
		```
		
		En su lugar, necesitarías hacer algo como:
		
		```
		async function fetchProducts() {
		  const response = await fetch(
			"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		  );
		  if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		  }
		  const data = await response.json();
		  return data;
		}

		const promise = fetchProducts();
		promise
		  .then((data) => {
			console.log(data[0].name);
		  })
		  .catch((error) => {
			console.error(`Could not get products: ${error}`);
		  });
	
		```
		
		Aquí, movimos el try...catch
		
		nuevamente al controlador de captura
		
		en la promesa devuelta. 
		
		Esto significa que nuestro controlador then()
		
		no tiene que lidiar con el caso
		
		en el que se detectó un error
		
		dentro de la función fetchProducts
		
		lo que provocó que los datos
		
		no estuvieran definidos
		
		Maneje los errores
		
		como último paso de su cadena de promesas.

		
		tenga en cuenta que solo puede usar await
		
		dentro de una función asíncrona
		
		a menos que su código esté 
		
		en un módulo de JavaScript
		
		Eso significa que no puedes hacer esto
		
		en un script normal:
		
		```
		try {
		  // using await outside an async function is only allowed in a module
		  const response = await fetch(
			"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
		  );
		  if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		  }
		  const data = await response.json();
		  console.log(data[0].name);
		} catch (error) {
		  console.error(`Could not get products: ${error}`);
		  throw error;
		}

		```
		
		Tenga en cuenta que
		
		al igual que una cadena de promesas
		
		await obliga a que las operaciones asincrónicas
				
		se completen en serie. 
		
		Esto es necesario si el resultado
		
		de la siguiente operación depende 
		
		del resultado de la última
		
		pero si ese no es el caso, entonces 
		
		algo como Promise.all() 
		
		tendrá más rendimiento.
		
	
	Como conclusión: 
	
		Las promesas son la base de la programación asincrónica
		
		Hacen que sea más fácil expresar y razonar
		
		sobre secuencias de operaciones asincrónicas
		
		sin callbacks profundamente anidadas
		
		y admiten un estilo de manejo de errores
		
		similar a la declaración try...catch sincrónica
		
		
		async y await
		
		facilitan la creación de una operación
		
		a partir de una serie de llamadas 
		
		a funciones asincrónicas consecutivas
		
		lo que evita la necesidad de
		
		crear cadenas de promesas explícitas
		
		y le permite escribir código
		
		que parece código sincrónico
		
		
		Muchas API web modernas
		
		se basan en promesas
		
		incluidas WebRTC
		
		Web Audio API
		
		Media Capture
		
		Streams API
		
		y más 
		
	
		
|| APIs basadas en Promise 	
	
	Utilizamos APIs que devuelven promesas
		
	Ahora implementar APIs que devuelvan promesas
	
	Una tarea mucho menos común que usar API basadas

	
	Cuando implementas una API basada en promesas

	estarás envolviendo una operación asincrónica
	
	que puede usar eventos, devoluciones de llamadas simples
	
	o un modelo de paso de mensajes
	
	Hará los arreglos para que un objeto Promise
	
	maneje adecuadamente el éxito o el fracaso de esa operación
	
	
	Implementar API alarm(): 
		
		API de alarma basada en promesas
		
		llamada alarm(), Tomará como argumentos
		
		nombre de la persona a despertar
		
		y un retraso en milisegundos que se esperará
		
		antes de despertar a la persona
		
		Después del retraso, la función enviará
		
		un "¡Despierta!", incluyendo el nombre de la persona

		que necesitamos despertar.

		
	Envolviendo setTimeout():
	
		Para implementar nuestra función alarm().

		toma como argumentos una función callback
		
		y un retraso, expresado en milisegundos
		
		Cuando se llama a setTimeout(),
		
		inicia un temporizador configurado con el retraso dado
		
		y, cuando el tiempo expira,
		
		llama a la función dada.

		
		Ej, llamamos a setTimeout()
		
		con una función callback 
		
		y un retraso de 1000 milisegundos
		
		```
		<button id="set-alarm">Set alarm</button>
		<div id="output"></div>

		```
		
		```
		const output = document.querySelector("#output");
		const button = document.querySelector("#set-alarm");

		function setAlarm() {
		  setTimeout(() => {
			output.textContent = "Wake up!";
		  }, 1000);
		}

		button.addEventListener("click", setAlarm);
		
		```
	
	
	Constructor Promise(): 
		
		Nuestra función alarm()
		
		devolverá una Promesa
		
		que se cumplirá cuando expire el temporizador
			
		Pasará un "¡Despierta!" 
		
		en el controlador then()
		
		y rechazará la promesa
		
		si la persona que llama proporciona 
		
		un valor de retraso negativo
		
		
		El componente clave aquí es el constructor Promise().
		
		El constructor Promise()
		
		toma una única función como argumento
		
		Llamaremos a esta función executor
		
		Cuando crea una nueva promesa
		
		proporciona la implementación del executor.

		
		executor en sí misma toma dos argumentos
		
		que también son funciones
		
		convencionalmente se denominan resolve
		
		y reject 
		
		En la implementación de executor 
		
		llama a la función asincrónica subyacente
		
		Si la función asincrónica tiene éxito
		
		llama a resolve y
		
		si falla, llama a reject 
		
		Si la función ejecutora arroja un error
		
		se llama automáticamente a reject 
		
		Puede pasar un único parámetro
		
		de cualquier tipo para resolve y reject
		
		podemos implementar alarm() como:
		
		```
		function alarm(person, delay) {
		  return new Promise((resolve, reject) => {
			if (delay < 0) {
			  throw new Error("Alarm delay must not be negative");
			}
			setTimeout(() => {
			  resolve(`Wake up, ${person}!`);
			}, delay);
		  });
		}

		```
		
		Esta función crea y devuelve una nueva Promesa
		
		Dentro de executor de la promesa: 
		
			1. compruebe que el retraso no sea negativo
			
			arroje un error si lo es
					
			
			2. llame a setTimeout(),
		
			pasando un callback y delay 
			
			El callback se llamará 
			
			cuando expire el temporizador
			
			y en la devolución de llamada 
			 
			llamamos a resolve 
			 
			pasando "¡Despertar!
			
		
		Usando alarm() API: 
			
			Esta parte debería resultarte bastante familiar por el artículo anterior
			
			Podemos llamar a alarm(),
			
			y en la promesa devuelta 
			
			llamar a then()
			
			() y catch() para configurar
			
			controladores para el cumplimiento
			
			y rechazo de la promesa.
			
			```
			const name = document.querySelector("#name");
			const delay = document.querySelector("#delay");
			const button = document.querySelector("#set-alarm");
			const output = document.querySelector("#output");

			function alarm(person, delay) {
			  return new Promise((resolve, reject) => {
				if (delay < 0) {
				  throw new Error("Alarm delay must not be negative");
				}
				setTimeout(() => {
				  resolve(`Wake up, ${person}!`);
				}, delay);
			  });
			}

			button.addEventListener("click", () => {
			  alarm(name.value, delay.value)
				.then((message) => (output.textContent = message))
				.catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
			});
			
			```
			
			Intente configurar valores diferentes para "Nombre" y "Retraso".

			Intente establecer un valor negativo para "Retraso".
			
			
			
	Usar async y await para la API alarm(): 
		
		Dado que alarm()
		
		devuelve una Promesa
		
		podemos hacer con ella
		
		todo lo que podríamos hacer con cualquier otra promesa
		
		encadenamiento de promesas,
		
		Promise.all() y async/await:

		```	
		const name = document.querySelector("#name");
		const delay = document.querySelector("#delay");
		const button = document.querySelector("#set-alarm");
		const output = document.querySelector("#output");

		function alarm(person, delay) {
		  return new Promise((resolve, reject) => {
			if (delay < 0) {
			  throw new Error("Alarm delay must not be negative");
			}
			setTimeout(() => {
			  resolve(`Wake up, ${person}!`);
			}, delay);
		  });
		}

		button.addEventListener("click", async () => {
		  try {
			const message = await alarm(name.value, delay.value);
			output.textContent = message;
		  } catch (error) {
			output.textContent = `Couldn't set alarm: ${error}`;
		  }
		});

		```



|| Workers 

	Los workers permiten ejecutar algunas tareas
	
	en un hilo de ejecución separado

	
	Vimos lo que sucede cuando tienes 
	
	una tarea sincrónica de larga duración
	
	toda la ventana deja de responder por completo.
	
	la razón de esto es que el programa 
	
	es de un solo subproceso
	
	
	Un hilo es una secuencia de instrucciones 
	
	que sigue un programa
	
	Debido a que el programa consta de un solo hilo
	
	solo puede hacer una cosa a la vez
	
	por lo tanto, si está esperando
	
	que regrese nuestra llamada sincrónica
	
	de larga duración, no puede hacer nada más
			
	
	Los workers brindan la posibilidad de ejecutar
	
	algunas tareas en un subproceso diferente
	
	de modo que pueda iniciar la tarea
	
	continuar con otro procesamiento
	
	(como manejar las acciones del usuario).

	
	Una preocupación es que si varios subprocesos
	
	pueden tener acceso a los mismos datos compartidos
	
	es posible que los cambien de forma
	
	independiente e inesperada (entre sí). 
	
	Esto puede provocar errores difíciles de encontrar
	
	
	Para evitar estos problemas en la web
	
	su código principal y su código de trabajo
	
	nunca obtienen acceso directo a las variables
	
	de cada uno y solo pueden "compartir" datos
	
	en casos muy específicos
	
	Los workers y el código principal
	
	se ejecutan en mundos completamente separados
	
	y solo interactúan enviándose mensajes entre sí. 
	
	significa que los workers no pueden acceder
	
	al DOM  (la ventana, el documento, los elementos de la página, etc.).
	
	
	Hay tres tipos diferentes de trabajadores
	
		dedicated workers 
		
		shared workers 
		
		service workers 
	
	
	Usando web workers: 
		
		Antes teníamos una página 
		
		que calculaba números primos
		
		Usaremos un worker para ejecutar el cálculo
		
		de modo que nuestra página siga respondiendo
		
		a las acciones del usuario.
		
	
	Generador primario síncrono:
	
		Tenía una forma como está: 
		
		```
		function generatePrimes(quota) {
		  function isPrime(n) {
			for (let c = 2; c <= Math.sqrt(n); ++c) {
			  if (n % c === 0) {
				return false;
			  }
			}
			return true;
		  }

		  const primes = [];
		  const maximum = 1000000;

		  while (primes.length < quota) {
			const candidate = Math.floor(Math.random() * (maximum + 1));
			if (isPrime(candidate)) {
			  primes.push(candidate);
			}
		  }

		  return primes;
		}

		document.querySelector("#generate").addEventListener("click", () => {
		  const quota = document.querySelector("#quota").value;
		  const primes = generatePrimes(quota);
		  document.querySelector("#output").textContent =
			`Finished generating ${quota} primes!`;
		});

		document.querySelector("#reload").addEventListener("click", () => {
		  document.querySelector("#user-input").value =
			'Try typing in here immediately after pressing "Generate primes"';
		  document.location.reload();
		});

		```
		
		después de llamar a generatePrimes()
		
		el programa deja de responder por completo.


	Generar primos con un worker 
		
		Podemos ver que el código del worker 
		
		se mantiene en un script separado del código principal
		
		En el index.html solo está el main.js 
		
		```
		// Create a new worker, giving it the code in "generate.js"
		const worker = new Worker("./generate.js");

		// When the user clicks "Generate primes", send a message to the worker.
		// The message command is "generate", and the message also contains "quota",
		// which is the number of primes to generate.
		document.querySelector("#generate").addEventListener("click", () => {
		  const quota = document.querySelector("#quota").value;
		  worker.postMessage({
			command: "generate",
			quota,
		  });
		});

		// When the worker sends a message back to the main thread,
		// update the output box with a message for the user, including the number of
		// primes that were generated, taken from the message data.
		worker.addEventListener("message", (message) => {
		  document.querySelector("#output").textContent =
			`Finished generating ${message.data} primes!`;
		});

		document.querySelector("#reload").addEventListener("click", () => {
		  document.querySelector("#user-input").value =
			'Try typing in here immediately after pressing "Generate primes"';
		  document.location.reload();
		});
		
		```
	
		Primero, estamos creando el worker 
		
		usando el constructor Worker().
		
		Le pasamos una URL que apunta al script 
		
		del worker.
		
		Tan pronto como se crea el worker
		
		se ejecuta el script del trabajador.

		
		A continuación, como en la versión síncrona
		
		controlador de eventos de clic al botón 
		
		"Generar números primos". 
		
		Pero ahora, en lugar de llamar a una 
		
		función generatePrimes(), 
		
		enviamos un mensaje al worker 
		
		worker.postMessage().
		
		Este mensaje puede recibir un argumento
		
		en este caso, pasamos un objeto JSON
				
		que contiene dos propiedades:
		
		command:
		
			una cadena que identifica lo que 
			
			queremos que haga el worker 
			
			(en caso de que nuestro worker 
			
			pueda hacer más de una cosa)
			
		quota:
			
			el número de números primos a generar
		
		
		A continuación, agregamos
		
		un controlador de eventos de mensaje 
		
		al worker, es para que el worker 
		
		pueda decirnos cuando ha terminado
		
		y pasarnos los datos resultantes. 
		
		Nuestro controlador toma los datos
		
		de la propiedad de datos del mensaje
		
		y los escribe en el elemento de salida
		
		(los datos son exactamente
		
		los mismos que la cuota,
		
		por lo que esto es un poco inútil
		
		pero muestra el principio).

		
		Finalmente, implementamos
		
		el controlador de eventos
		
		de clic para el botón "Recargar". 
		
		Esto es exactamente igual que en la versión síncrona.
		
		
		The worker code in "generate.js"
		
		```
		// Listen for messages from the main thread.
		// If the message command is "generate", call `generatePrimes()`
		addEventListener("message", (message) => {
		  if (message.data.command === "generate") {
			generatePrimes(message.data.quota);
		  }
		});

		// Generate primes (very inefficiently)
		function generatePrimes(quota) {
		  function isPrime(n) {
			for (let c = 2; c <= Math.sqrt(n); ++c) {
			  if (n % c === 0) {
				return false;
			  }
			}
			return true;
		  }

		  const primes = [];
		  const maximum = 1000000;

		  while (primes.length < quota) {
			const candidate = Math.floor(Math.random() * (maximum + 1));
			if (isPrime(candidate)) {
			  primes.push(candidate);
			}
		  }

		  // When we have finished, send a message to the main thread,
		  // including the number of primes we generated.
		  postMessage(primes.length);
		}

		```
		
		Esto se ejecuta tan pronto como el 
		
		script principal crea el worker 
		
		Lo primero que hace el worker 
		
		es empezar a escuchar
		
		mensajes del script principal
		
		Lo hace usando addEventListener()
		
		que es una función global en un worker 
		
		Dentro del controlador de eventos del mensaje
		
		la propiedad de datos del evento
		
		contiene una copia del argumento pasado
		
		desde el script principal
		
		Si el script principal pasó el comando generar
		
		llamamos a generarPrimes(),  
		
		pasando el valor de cuota del evento del mensaje.

		
		La función generatePrimes()
		
		es como la versión síncrona
		
		excepto que en lugar de devolver un valor
		
		enviamos un mensaje al script principal
		
		cuando terminamos
		
		Usamos la función postMessage() para esto
		
		que al igual que addEventListener() 
		
		es una función global en un trabajador
		
		Como ya vimos, el script principal
		
		está escuchando este mensaje
		
		y actualizará el DOM cuando se reciba el mensaje.


		Para ejecutar este sitio
		
		deberá ejecutar un servidor web local
		
		porque las URL file://
		
		no pueden cargar workers 
		
		configurar un servidor de pruebas local
		
		con node(js) o django(python)
		
		Una vez hecho esto
		
		debería poder hacer clic en "Generar números primos"
		
		y hacer que su página principal siga respondiendo.

		
	Otros tipos de workers: 
	
		El worker que creamos es dedicado
		
		significa que lo utiliza una única
		
		instancia de script	
		
		
		shared workers: 
			
			pueden ser compartidos por varios 
			
			scripts diferentes que se ejecutan
			
			en diferentes ventanas
		
		
		service workers
			
			actúan como servidores proxy
	
			almacenando en caché los recursos
			
			para que las aplicaciones web puedan funcionar
	
			cuando el usuario está desconectado.
			
			Son un componente clave de las 
			
			aplicaciones web progresivas
			
	
	Los web workers permiten que una aplicación web 
	
	descargue tareas a un hilo separado
	
	El hilo principal y el trabajador no comparten 
	
	directamente ninguna variable, sino que se
	
	comunican enviando mensajes
	
	que el otro lado recibe como eventos de mensaje

	
	Pueden ser una forma eficaz de mantener
	
	la capacidad de respuesta de la aplicación principal
	
	aunque no pueden acceder a todas las API
	
	a las que puede acceder la aplicación principal
	
	y, en particular, no pueden acceder al DOM.
	



|| 5. Client-side web APIs
	
	Al escribir JavaScript del lado del cliente para sitios web o aplicaciones
	
	rápidamente encontrará interfaces de programación de aplicaciones (API).
	
	Las API son funciones de programación
	
	para manipular diferentes aspectos del navegador y el sistema operativo
	
	en el que se ejecuta el sitio o manipular datos de otros sitios web o servicios
	
	Es difícil escribir ejemplos de JavaScript del lado del cliente sin ellos
	
	
	Guia: 
	
		1. Intro a las APIs web
			
			¿qué son, cómo funcionan, cómo se usan en el código y cómo están estructuradas? 
			
			diferentes clases principales de API
			
			qué tipo de usos tienen.

		
		2. Manipulación del Documentos  
			
			Al escribir páginas web y aplicaciones
			
			una de las cosas más comunes que querrás hacer es manipular documentos web
			
			se hace mediante el modelo de objetos de documento (DOM),
			
			un conjunto de API para controlar HTML
			
			aplicar estilos a la información que hace un uso intensivo del objeto de documento
			
			El DOM junto con algunas otras API interesantes que pueden alterar su entorno de maneras interesantes.
			
		
		3. Obteniendo datos del servidor (fetch)
		
			Otra tarea muy común es recuperar elementos de datos individuales
			
			del servidor para actualizar secciones de una página web
			
			sin tener que cargar una página completamente nueva
			
			ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios
			
			tecnologías que lo hacen posible, como XMLHttpRequest y Fetch API. 
		
		
		4. APIs de terceros 
			
			Las API que hemos cubierto hasta ahora están integradas en el navegador, pero no todas las API lo están
		
			Muchos sitios web y servicios grandes, como Google Maps, Facebook, PayPal, etc.
			
			proporcionan API que permiten a los desarrolladores hacer uso de sus datos o servicios
			
			por ejemplo, mostrar Google Maps personalizados en su sitio
			
			o utilizar el inicio de sesión de Facebook para iniciar sesión con sus usuarios
			
			analiza la diferencia entre las API del navegador y las API de terceros
			
			muestra algunos usos típicos de estas últimas
			
			
		5. Dibujar gráficos
			
			El navegador contiene algunas herramientas de programación de gráficos
			
			desde el lenguaje de gráficos vectoriales escalables (SVG) 
			
			hasta API para dibujar en elementos HTML <canvas> (API de Canvas y WebGL)
			 
		
		6. API de vídeo y audio

			HTML viene con elementos para incrustar medios enriquecidos en documentos (<video> y <audio>)
			
			que a su vez vienen con sus propias API para controlar la reproducción, la búsqueda, etc.
			
			
		7. Almacenamiento del lado del cliente
			
			Los navegadores web modernos cuentan con una serie de tecnologías diferentes que le permiten almacenar datos relacionados con sitios web y recuperarlos cuando sea necesario
			
			permite conservar datos a largo plazo, guardar sitios sin conexión y más
			
	
			
|| Intro a las API web del lado del cliente 


	Una API: 
		
		Las interfaces de programación de aplicaciones (API)
		
		son construcciones disponibles en lenguajes de programación
		
		para permitir a los desarrolladores crear funciones complejas más fácilmente
		
		Abstraen código más complejo, proporcionando una sintaxis más fácil de usar en su lugar
		
		
		Si quiere programar algunos gráficos 3D, es mucho más fácil hacerlo usando una API escrita en un lenguaje de nivel superior como JavaScript o Python,
		
		en lugar de intentar escribir directamente código de bajo nivel  (C o C++). 
		
		que controla directamente la GPU de la computadora u otras funciones gráficas.
		
	
	API en JavaScript del lado del cliente:
	
		Tiene muchas API disponibles
	
		estas no son parte del lenguaje JavaScript en sí
		
		sino que están construidas sobre el lenguaje JavaScript central
		
		le brinda superpoderes adicionales para usar en su código JavaScript. 
		
		se dividen en dos categorías:


			1. Las API del navegador
				
				están integradas en su navegador web
				
				y pueden exponer datos del navegador y del entorno informático circundante
				
				y hacer cosas complejas y útiles con ellos.
				
				Web Audio API proporciona construcciones de JavaScript
				
				para manipular audio en el navegador
				
				tomar una pista de audio, alterar su volumen, aplicarle efectos, etc
				
				En segundo plano, el navegador en realidad utiliza algún código complejo
				
				de nivel inferior (p. ej. C++ o Rust) para realizar el procesamiento de audio real
				
				Pero nuevamente, la API le abstrae esta complejidad.


			2. Las API de terceros no están integradas en el navegador de forma predeterminada
			
				y, por lo general, es necesario recuperar su código e información desde algún lugar de la Web
				
				Por ejemplo, la API de Google Maps le permite hacer cosas como mostrar un mapa interactivo de su oficina en su sitio web
				
				Proporciona un conjunto especial de construcciones que puede utilizar para consultar el servicio Google Maps y devolver información específica.

							
	Relación entre JavaScript, API y otras herramientas de JavaScript:
	
		JavaScript: un lenguaje de scripting de alto nivel integrado en los navegadores
			
		permite implementar funciones en páginas web/aplicaciones
		
		también está disponible en otros entornos de programación, como Node.

		
		API del navegador: construcciones integradas en el navegador
		
		que se ubican sobre el lenguaje JavaScript
		
		y le permiten implementar funciones más fácilmente.
		 
		
		API de terceros: construcciones integradas en plataformas de terceros 
		 
		que le permiten utilizar algunas de las funciones de esas plataformas en sus propias páginas web
		
		por ejemplo, Disqus, Facebook y , mostrar sus comentarios de Disqus en una página web).
	

		Bibliotecas/Librerias de JavaScript: normalmente uno o más archivos JavaScript
		
		que contienen funciones personalizadas
		
		que puede adjuntar a su página web para acelerar o permitir la escritura de funciones comunes
		
		Los ejemplos incluyen jQuery, Mootools y React
			
			
		Frameworks de JavaScript: el siguiente paso de las bibliotecas
		
		por ejemplo, Angular y Ember
		
		tienden a ser paquetes de HTML, CSS, JavaScript y otras tecnologías
		
		tecnologías que se instalan y luego se usan para escribir una aplicación web completa desde cero
		
		La diferencia clave entre una biblioteca y un marco es la "inversión de control".
		
		Cuando se llama a un método desde una biblioteca
				
		el desarrollador tiene el control
		
		Con el framework, el control se invierte
		
		el marco llama al código del desarrollador
		
	
	Funciones de una API: 
		
		Hay una gran cantidad de API disponibles en los navegadores
		
		permiten hacer una amplia variedad de cosas en su código
		
		Podemos encontrarlas en MDN API index 
		
		Las categorías más comunes de API de navegador que utilizará
			
		
		1. API para manipular documentos cargados en el navegador.
			
			es la API DOM (Document Object Model),
			
			permite manipular HTML y CSS
			
			crear, eliminar y cambiar HTML, aplicar dinámicamente nuevos estilos a su página, etc
			
			Cada vez que ve aparecer una ventana emergente en un página
			
			o algún contenido nuevo mostrado
			
			ese es el DOM en acción. 
			
			
		2. Fetch API 
			
			obtienen datos del servidor para actualizar pequeñas secciones de una página web por sí solas.
			
			ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios
			
			si solo necesita actualizar una lista de acciones o una lista de nuevas historias disponibles, hacerlo instantáneamente
			
			sin tener que volver a cargar toda la página desde el servidor
			
			puede hacer que El sitio o la aplicación se sienten mucho más receptivos y "ágiles".
			
			La API principal utilizada para esto es la API Fetch
			
			aunque es posible que el código anterior aún use la API XMLHttpRequest
			
			También puedes encontrarte con el término Ajax que describe esta técnica
			
			
		3. API para dibujar y manipular gráficos:
			
			son ampliamente compatibles con los navegadores
			
			las más populares son Canvas y WebGL,
			
			le permiten actualizar mediante programación
			
			los datos de píxeles contenidos en un elemento HTML <canvas>
			
			para crear escenas 2D y 3D.
			
			puede dibujar formas como rectángulos o círculos
			
			importar una imagen al lienzo y aplicarle un filtro como sepia o escala de grises usando la API de Canvas
			
			o crear una escena 3D compleja con iluminación y texturas usando WebGL. 
			
			Estas API a menudo se combinan con API para crear bucles de animación
			
			como window.requestAnimationFrame() y otras 
			
			para crear escenas que se actualizan constantemente como dibujos animados y juegos.

		
		4. API de audio y video
		
			como HTMLMediaElement, Web Audio API y WebRTC
			
			permiten hacer cosas como crear controles de interfaz de usuario personalizados para reproducir audio y video
			
			mostrar pistas de texto como leyendas y subtítulos junto con sus videos, capturar videos
			
			manipular su cámara web a través de un lienzo (ver arriba) o mostrarla en la computadora de otra persona en una conferencia web
			
			o agregar efectos a las pistas de audio (como ganancia, distorsión, panorámica, etc.).
			
		
		5. Las API del dispositivo
		
			permiten interactuar con el hardware del dispositivo
			
			acceder al GPS del dispositivo para encontrar la posición del usuario mediante la API de geolocalización.


		6. Las API de almacenamiento del lado del cliente
		
			permiten almacenar datos en el lado del cliente
			
			puede crear una aplicación que guardará su estado entre cargas de página
			
			y tal vez incluso funcione cuando el dispositivo esté fuera de línea
			
			Hay varias opciones disponibles
			
			Para almacenamiento nombre/valor con  Web Storage AP
			
			y almacenamiento de bases de datos más complejo con la API IndexedDB.
			
			
	API de terceros:
			
		Algunos de los más populares que probablemente utilizará tarde o temprano son:
		
		
			1. API de mapas, como Mapquest y la API de Google Maps
				
				permiten hacer todo tipo de cosas con mapas en sus páginas web
				
			
			2. Facebook suite of APIs
				
				permite utilizar varias partes del ecosistema de Facebook para beneficiar su aplicación
				
				como proporcionar inicio de sesión en la aplicación mediante el inicio de sesión de Facebook
				
				aceptar pagos dentro de la aplicación, implementar campañas publicitarias específicas, etc.
				
				
			3. Telegram APIs
				
				permiten incrustar contenido de canales de Telegram en su sitio web, además de brindar soporte para bots.


			4. YouTube API
				
				permite insertar vídeos de YouTube en su sitio
				
				realizar búsquedas en YouTube, crear listas de reproducción y más.
				
				
			5. Pinterest API
				
				proporciona herramientas para administrar tableros y pines de Pinterest para incluirlos en su sitio web.


			6. Twilio API
			
				proporciona un framework para crear funciones de llamadas de voz y video en su aplicación
				
				enviar SMS/MMS desde sus aplicaciones y más.


			7. Disqus API
				
				proporciona una plataforma de comentarios que se puede integrar en su sitio.


			8. Mastodon API
				
				permite manipular funciones de la red social Mastodon mediante programación
				
			
			9. IFTTT API
				
				permite integrar múltiples API a través de una plataforma
				
				
	Funcionamiento de las APIs: 
	
		Las diferentes API de JavaScript funcionan de maneras ligeramente diferentes
		
		en general tienen características comunes y temas similares en su funcionamiento.
		
		
	Basadas en objetos: 
			
		Su código interactúa con las API utilizando uno o más objetos JavaScript
		
		sirven como contenedores para los datos que utiliza la API
		
		(contenidos en las propiedades del objeto)
		
		y la funcionalidad que la API pone a disposición
		
		(contenida en los métodos del objeto)

		
		Ejemplo de la API Web Audio:
			
			Se trata de una API bastante compleja que consta de varios objetos
			
			Objetos más comunes: 
			
			
			AudioContext:
				
				representa un gráfico de audio (audio graph) que se puede utilizar para manipular la reproducción de audio dentro del navegador
				
				y tiene varios métodos y propiedades disponibles para manipular ese audio.


			MediaElementAudioSourceNode:
				
				representa un elemento <audio>
				
				que contiene el sonido que desea reproducir
				
				y manipular dentro audio context.
			
			
			AudioDestinationNode:
					
				representa el destino del audio, es decir, el dispositivo de su computadora que realmente lo emitirá
				
				generalmente sus parlantes o auriculares.
				
				
		Interacción entre estos objetos:
		
			Ejemplo de audio web 	
		
			```
			<audio src="outfoxing.mp3"></audio>

			<button class="paused">Play</button>
			<br />
			<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
		
			```
			
			Incluimos un elemento <audio> con el que incrustamos un MP3 en la página
			
			No incluimos ningún control de navegador predeterminado
			
			incluimos un <button> que usaremos para reproducir y detener la música
			
			un elemento <input> de tipo rango
			
			que usaremos para ajustar el volumen de la pista mientras se reproduce
			
			
			En el JS: 
			
			Comenzamos creando una instancia AudioContext
			
			dentro de la cual manipular nuestra pista:
			
			```
			const audioCtx = new AudioContext();

			```
			
			creamos constantes que almacenan referencias
			
			a nuestros elementos <audio>, <button> y <input>,
			
			y  usamos el método AudioContext.createMediaElementSource()
			
			para crear un MediaElementAudioSourceNode
			
			que represente la fuente de nuestro audio
		
			el elemento <audio> se reproduce desde

			```
			const audioElement = document.querySelector("audio");
			const playBtn = document.querySelector("button");
			const volumeSlider = document.querySelector(".volume");

			const audioSource = audioCtx.createMediaElementSource(audioElement);
	
			```
			
			A continuación, incluimos un par de controladores de eventos
			
			que sirven para alternar entre reproducción y pausa
			
			cuando se presiona el botón y restablecer la pantalla al principio cuando la canción ha terminado de reproducirse
			
			```
			// play/pause audio
			playBtn.addEventListener("click", () => {
			  // check if context is in suspended state (autoplay policy)
			  if (audioCtx.state === "suspended") {
				audioCtx.resume();
			  }

			  // if track is stopped, play it
			  if (playBtn.getAttribute("class") === "paused") {
				audioElement.play();
				playBtn.setAttribute("class", "playing");
				playBtn.textContent = "Pause";
				// if track is playing, stop it
			  } else if (playBtn.getAttribute("class") === "playing") {
				audioElement.pause();
				playBtn.setAttribute("class", "paused");
				playBtn.textContent = "Play";
			  }
			});

			// if track ends
			audioElement.addEventListener("ended", () => {
			  playBtn.setAttribute("class", "paused");
			  playBtn.textContent = "Play";
			});

			```
			
			pueden notar que los métodos play() y pause()
			
			que se utilizan para reproducir y pausar la pista
			
			no son parte de la API de Web Audio
			
			son parte de la API HTMLMediaElement
			
			que es diferente pero está estrechamente relacionada.


			A continuación, creamos un objeto GainNode
			
			usando el método AudioContext.createGain()
			
			que se puede usar para ajustar el volumen del audio que pasa a través de él
			
			y creamos otro controlador de eventos
			
			que cambia el valor de la ganancia (volumen)
			
			del gráfico de audio cada vez que se mueve el control deslizante. se cambia el valor
			
			```
			// volume
			const gainNode = audioCtx.createGain();

			volumeSlider.addEventListener("input", () => {
			  gainNode.gain.value = volumeSlider.value;
			});
	
			```
			
			Lo último que hay que hacer para que esto funcione
			
			es conectar los diferentes nodos en el gráfico de audio
			
			lo cual se hace usando el método AudioNode.connect()
			
			disponible en cada tipo de nodo:
			
			```
			audioSource.connect(gainNode).connect(audioCtx.destination);
			
			```
			
			El audio comienza en la fuente
			
			que luego se conecta al nodo de ganancia
			
			para que se pueda ajustar el volumen del audio. 
			
			Luego, el nodo de ganancia se conecta al nodo de destino
			
			para que el sonido se pueda reproducir en su computadora
			
			(la propiedad AudioContext.destination
			
			representa el AudioDestinationNode
			
			predeterminado disponible en el hardware de su computadora
			
			por ejemplo, sus parlantes).
	
	
	Puntos de entrada reconocibles:
		
		Al utilizar una API 
		
		debe asegurarse de saber dónde está 
		
		el punto de entrada de la API
		
		En Web Audio API, es simple 
		
		es el objeto AudioContext
		
		que debe usarse para realizar cualquier
		
		manipulación de audio.

		
		La API del Modelo de objetos de documento (DOM)
		
		también tiene un punto de entrada simple
		
		sus características tienden a encontrarse colgando
		
		del objeto Documento o en una instancia de un elemento HTML
		
		que desea afectar de alguna manera, por ejemplo.
		
		```
		const em = document.createElement("em"); // create a new em element
		const para = document.querySelector("p"); // reference an existing p element
		em.textContent = "Hello there!"; // give em some text content
		para.appendChild(em); // embed em inside para
	
		```
		
		También se basa en obtener un objeto de contexto
		
		para manipular cosas, aunque en este caso
		
		es un contexto gráfico en lugar de un contexto de audio.	
		
		Su objeto de contexto se crea obteniendo una referencia
		
		al elemento <canvas> que desea dibujar
		
		y luego llamando a su método HTMLCanvasElement.getContext():
		
		```
		const canvas = document.querySelector("canvas");
		const ctx = canvas.getContext("2d");
		
		```
		
		Todo lo que queramos hacer con el lienzo
		
		se logra llamando a las propiedades
		
		y métodos del objeto de contexto
		
		(que es una instancia de CanvasRenderingContext2D)	
		
		```
		Ball.prototype.draw = function () {
		  ctx.beginPath();
		  ctx.fillStyle = this.color;
		  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		  ctx.fill();
		};
		
		```
		
		
	Usar eventos para manejar cambios de estado:
		
		Algunas API web no contienen eventos
		
		pero la mayoría contiene al menos algunos
		
		Las propiedades del controlador
		
		que nos permiten ejecutar funciones
		
		cuando se activan eventos
		
		generalmente se enumeran en "Event handlers"
		
		
		Vimos varios controladores de eventos
		
		en uso en nuestro ejemplo de Web Audio API
	
		```
		// play/pause audio
		playBtn.addEventListener("click", () => {
		  // check if context is in suspended state (autoplay policy)
		  if (audioCtx.state === "suspended") {
			audioCtx.resume();
		  }

		  // if track is stopped, play it
		  if (playBtn.getAttribute("class") === "paused") {
			audioElement.play();
			playBtn.setAttribute("class", "playing");
			playBtn.textContent = "Pause";
			// if track is playing, stop it
		  } else if (playBtn.getAttribute("class") === "playing") {
			audioElement.pause();
			playBtn.setAttribute("class", "paused");
			playBtn.textContent = "Play";
		  }
		});

		// if track ends
		audioElement.addEventListener("ended", () => {
		  playBtn.setAttribute("class", "paused");
		  playBtn.textContent = "Play";
		});
		
		```
		
		
	Mecanismos de seguridad en las APIs: 
		
		Las funciones de WebAPI
		
		están sujetas a las mismas consideraciones
		
		que JavaScript y otras tecnologías web
		
		(por ejemplo, la política del mismo origen), 
		
		pero a veces cuentan con mecanismos de seguridad adicionales
		
		Por ejemplo, algunas de las WebAPI más modernas 
		
		solo funcionarán en páginas servidas a través de HTTPS
		
		debido a que transmiten datos potencialmente confidenciales
		
		los ejemplos incluyen Service Workers y Push
		
		
		Además, algunas WebAPI solicitan permiso al usuario
		
		para habilitarlas una vez que se realizan llamadas en su código
		
		la API de notificaciones solicita permiso mediante un cuadro de diálogo emergente
		
		
		Las API Web Audio y HTMLMediaElement
		
		están sujetas a un mecanismo de seguridad
		
		llamado política de reproducción automática
		
		significa que no puedes reproducir audio automáticamente
		
		cuando se carga una página; debes permitir que tus usuarios
		
		inicien la reproducción de audio a través de un control como un botón
		
		la reproducción automática de audio suele ser realmente molesta
		
		no deberíamos someter a nuestros usuarios a ella.


		Dependiendo de cuán estricto sea el navegador
		
		dichos mecanismos de seguridad podrían incluso impedir que el ejemplo funcione localmente
		
		si carga el archivo de ejemplo local en su navegador en lugar de ejecutarlo desde un servidor web
		
		nuestro ejemplo de Web Audio API no funcionaba localmente en Google Chrome
		
		tuvimos que cargarlo en GitHub antes de que funcionara.
		
		
		
|| DOM API 
	
	Una de las cosas más comunes que querrás hacer es
	
	manipular la estructura del documento de alguna manera
	
	Generalmente se hace mediante el modelo de objetos de documento (DOM)
		
	Un conjunto de APIs para controlar HTML y aplicar estilos a la información
		
	que hace un uso intensivo del objeto Document. 
	
	
	Partes importantes de un navegador web:
		
		Los navegadores web son piezas de software muy complicadas
		
		con muchas partes móviles muchas de las cuales no pueden ser controladas
		
		ni manipuladas por un desarrollador web que utilice JavaScript
		
		bloqueados por buenas razones, principalmente centradas en la seguridad
		
		
		Las API web todavía nos brindan acceso a muchas funciones
			
		que nos permiten hacer muchas cosas con las páginas web.
		
		Hay algunas partes obvias a las que hará referencia regularmente en su código
		
		
		Diagrama que representa las partes principales de un navegador

		directamente involucradas en la visualización de páginas web
		
			Navigator 
			
			Window 
			
			Document 
			
			
		Window:
			
			es la pestaña del navegador en la que se carga una página web
				
			está representado en JavaScript por el objeto Window
			
			Usando los métodos disponibles en este objeto
			
			puede hacer cosas como devolver el tamaño de la ventana
			
			(Window.innerWidth y Window.innerHeight)
			
			manipular el documento cargado en esa ventana
			
			almacenar datos específicos de ese documento en el lado del cliente
			
			por ejemplo, usando un base de datos local u otro mecanismo de almacenamiento
				
			adjuntar un controlador de eventos a la ventana actual y más
			
			
		Navigator:
			
			representa el estado y la identidad del navegador
			
			(es decir, el agente de usuario) 
			
			tal como existe en la web
			
			En JavaScript, esto está representado por el objeto Navigator
			
			Puede utilizar este objeto para recuperar cosas como el idioma preferido del usuario
			
			una transmisión multimedia de la cámara web del usuario, etc. 
			
		
		Document: 
			
			(representado por el DOM en los navegadores)
			
			es la página real cargada en la ventana
			
			y está representada en JavaScript por el objeto Document
			
			Puede utilizar este objeto para devolver y manipular información sobre
			
			HTML y CSS que compone el documento
			
			por ejemplo, obtener una referencia a un elemento en el DOM
			
			cambiar su contenido de texto
			
			aplicarle nuevos estilos
			
			crear nuevos elementos y agregarlos a el elemento actual como hijo
			
			o incluso eliminarlo por completo
			
			
	El DOM: 
	
		El documento actualmente cargado en cada una de las pestañas de su navegador
	
		está representado por un modelo de objetos de documento
		
		Se trata de una representación de "estructura de árbol" 
		
		creada por el navegador que permite que los lenguajes de programación accedan fácilmente a la estructura HTML
		
		por ejemplo, el propio navegador la utiliza para aplicar estilo y otra información a los elementos correctos a medida que representa una página
		
		y los desarrolladores pueden manipular el DOM con JavaScript después de que se haya renderizado la página.

		
		una página de ejemplo sencilla en dom-example.html
		
		Intente abrir esto en su navegador
		
		contiene un elemento <section> 
		
		dentro del cual puede encontrar una imagen 
		
		un párrafo con un enlace dentro
		
		```
		<!doctype html>
		<html lang="en-US">
		  <head>
			<meta charset="utf-8" />
			<title>Simple DOM example</title>
		  </head>
		  <body>
			<section>
			  <img
				src="dinosaur.png"
				alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
			  <p>
				Here we will add a link to the
				<a href="https://www.mozilla.org/">Mozilla homepage</a>
			  </p>
			</section>
		  </body>
		</html>

		```
		
		Como un arbol, el DOM tiene sus ramificaciones 
		
		Empieza con el elemento HTML que el la raíz. 
		
		tiene como ramas al HEAD y al BODY 
		
		A su vez, estos tiene como ramas a otros elementos. 
		
		
		Cada entrada del árbol se llama nodo
		
		algunos nodos representan elementos
		
		(identificados como HTML, HEAD, META, etc.)
		
		y otros representan texto
		
		(identificado como #text)
		
		También existen otros tipos de nodos
		
		
		También se hace referencia a los nodos por su posición
		
		en el árbol en relación con otros nodos:
		
		
		Nodo raíz/root:	
			
			Nodo superior del árbol
			
			en el caso de HTML
			
			siempre el nodo HTML
			
			(otros lenguajes de marcado como SVG y XML tendran otro root)
			
			
		Nodo hijo/child:
			
			Nodo directamente dentro de otro nodo
			
			En el ej, IMG es hijo de SECTION
		
		
		Nodo descenciente/descendent: 
			
			Nodo en cualquier lugar dentro de otro nodo
			
			IMG es hijo de SECTION, tambien descenciente
			
			IMG no es hijo de BODY, está dos niveles debajo del body
			
			pero es descendiente de BODY
			
			
		Nodo principal/parent: 
			
			Nodo que tiene otro nodo en su interior
			
			BODY es el nodo padre de SECTION
			
			
		Nodos hermanos/sibling: 
			
			Nodos que se encuentran en el mismo nivel en el árbol DOM
			
			IMG y P son hermanos
			
			
		Es útil familiarizarse con esta terminología
		
		antes de trabajar con el DOM
		
		ya que varios de los términos de código
		
		que encontrará hacen uso de ellos
		
			
	Ejercicio: 
			
		Para manipular un elemento dentro del DOM
		
		primero debe seleccionarlo y almacenar una referencia dentro de una variable
			
		En script agrege la linea: 
		
		```
		const link = document.querySelector("a");
	
		```
		
		podemos comenzar a manipularla
		
		usando las propiedades y métodos disponibles
		
		(estos se definen en interfaces como
		
		HTMLAnchorElement en el caso del elemento <a>,
		
		su interfaz principal/parent más general HTMLElement
		
		y Node que representa todos los nodos en un DOM).
		
		
		En primer lugar, cambiemos el texto dentro del enlace
		
		actualizando el valor de la propiedad Node.textContent
		
		con la siguiente linea:
			
		```
		link.textContent = "Mozilla Developer Network";
		
		```
		
		También deberíamos cambiar la URL
		
		a la que apunta el enlace, para que no vaya al lugar equivocado
		
		```
		link.href = "https://developer.mozilla.org";
		
		```
		
		
		hay muchas formas de seleccionar un elemento
		
		y almacenar una referencia a él en una variable.
		
		Document.querySelector() es el enfoque moderno recomendado
		
		Es conveniente porque le permite seleccionar elementos usando selectores CSS
		
		La llamada a querySelector() anterior coincidirá 
		
		coincidirá con el primer elemento <a>
		
		que aparece en el documento
		
		
		Si desea hacer coincidir y hacer cosas con varios elementos
		
		puede usar Document.querySelectorAll(),
		
		coincide con cada elemento del documento que coincide con el selector
		
		y almacena referencias a ellos en un objeto similar a una matriz
		
		llamado NodeList.
		
		
		Hay métodos más antiguos disponibles para capturar referencias de elementos			
		
		Document.getElementById():
			
			selecciona un elemento con un valor de atributo de identificación
			
			<p id="myId">Mi párrafo</p>.
			
			El ID se pasa a la función como parámetro
			
			const elementRef = document.getElementById('myId').
		
		Document.getElementsByTagName()
			
			devuelve un objeto similar a una matriz
			
			que contiene todos los elementos de la página de un tipo determinado
			
			ej, <p>s, <a>s, etc
			 
			El tipo de elemento se pasa a la función como parámetro
			
			const elementRefArray = document.getElementsByTagName('p').
			
			
		Estos dos funcionan mejor en navegadores antiguos
			
		
	Creando y colocando nuevos nodos.
		
		tomando una referencia a nuestro elemento <section>:	
		
		despues de la ultima linea en script: 
		
		```
		const sect = document.querySelector("section");

		```
		
		creemos un nuevo párrafo usando Document.createElement()
		
		y le damos algo de contenido de texto
		
		```
		const para = document.createElement("p");
		para.textContent = "We hope you enjoyed the ride.";

		```
		
		agregar el nuevo párrafo al final de la sección usando Node.appendChild():
		
		```
		sect.appendChild(para);

		```
			
		agreguemos un nodo de texto al párrafo 
		
		dentro del cual se encuentra el enlace
		
		para redondear bien la oración
		
		Primero crearemos el nodo de texto usando Document.createTextNode():
		
		```
		const text = document.createTextNode(
		  " — the premier source for web development knowledge.",
		);
		
		```
		
		tomaremos una referencia al párrafo dentro del enlace
		
		enlace y le agregaremos el nodo de texto
		
		```
		const linkPara = document.querySelector("p");
		linkPara.appendChild(text);

		```
		
		es la mayor parte de lo que necesita para agregar nodos al DOM
		
		utilizará mucho estos métodos al crear interfaces dinámicas
		
	
	Mover y eliminar elementos:
		
		Puede haber ocasiones en las que desee mover nodos
		
		o eliminarlos del DOM por completo
		
		Si quisiéramos mover el párrafo con el enlace
		
		dentro al final de la sección
		
		```
		sect.appendChild(linkPara);
		
		```
		
		Esto mueve el párrafo hacia la parte inferior de la sección
		
		Es posible que haya pensado que haría una segunda copia
		
		pero este no es el caso:
		
		linkPara es una referencia a la única copia de ese párrafo
		
		Si desea hacer una copia y agregarla también
		
		deberá usar Node.cloneNode() en su lugar.

		
		
		Eliminar un nodo, es sencillo 
		
		al menos cuando se tiene una referencia al nodo
		
		que se va a eliminar y a su padre.
		
		En nuestro caso actual
		
		usamos Node.removeChild()
		
		```
		sect.removeChild(linkPara);
		
		```
		
		
		Cuando desee eliminar un nodo basándose
		
		únicamente en una referencia a sí mismo
		
		puede usar Element.remove():
		
		```
		linkPara.remove();
		
		```
		
		Este método no es compatible con navegadores más antiguos
		
		No tienen ningún método para decirle a un nodo que se elimine		
		
		tendría que hacer
		
		```
		linkPara.parentNode.removeChild(linkPara);

		```
		
		
	Manipular estilos: 
		
		puede obtener una lista de todas las hojas de estilo
		
		adjuntas a un documento usando Document.stylesheets
		
		que devuelve un objeto similar a una matriz con objetos CSSStyleSheet
		
		Luego puede agregar/eliminar estilos como desee. 
		
		
		La primera forma es agregar estilos en línea
		
		directamente a los elementos a los que desea aplicar estilo dinámicamente
		
		Esto se hace con la propiedad HTMLElement.style
		
		contiene información de estilo en línea para cada elemento del documento
		
		Puede configurar las propiedades de este objeto
		
		para actualizar directamente los estilos de los elementos.
		
		
		```
		para.style.color = "white";
		para.style.backgroundColor = "black";
		para.style.padding = "10px";
		para.style.width = "250px";
		para.style.textAlign = "center";
		
		```
		
		Al cargar la página y verá que los estilos se han aplicado al párrafo.
		
		estas líneas efectivamente agregan estilos en línea al documento
		
		```
		<p
		  style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
		  We hope you enjoyed the ride.
		</p>
		
		```
		
		las versiones de las propiedades de JavaScript de los estilos CSS
		
		están escritas en minúsculas camel,
		
		mientras que las versiones de CSS están divididas con guiones (kebab-case) 
		
		
		Otra forma común de manipular dinámicamente estilos
		
		Primero, eliminar lo anterior del script. 
		
		y agregar en head, un style 
		
		```
		<style>
		  .highlight {
			color: white;
			background-color: black;
			padding: 10px;
			width: 250px;
			text-align: center;
		  }
		</style>
	
		```
		
		Ahora un método muy util 
		
		para la manipulación general de HTML: Element.setAttribute()
		
		requiere dos argumentos
		
		el atributo que desea establecer en el elemento
		
		y el valor que desea establecer
		
		En este caso estableceremos un nombre de clase
		
		para resaltar en nuestro párrafo
		
		```
		para.setAttribute("class", "highlight");
		
		```
		
		Actualice su página y no verá ningún cambio
		
		el CSS aún se aplica al párrafo,
		
		pero esta vez dándole una clase seleccionada por nuestra regla CSS
		
		no como estilos CSS en línea
		
		
		El método que elijas depende de ti
		
		Ambos tienen sus ventajas y desventajas
		
		El primer método requiere menos configuración
		
		es bueno para usos simples
		 
		mientras que el segundo método es más purista
		
		(sin mezclar CSS y JavaScript, sin estilos en línea, que se consideran una mala práctica).
		
		A medida que empieces a crear aplicaciones más grandes y complejas
		
		probablemente empezarás a utilizar más el segundo método
		
		
		En este punto, realmente no hemos hecho nada útil
		
		No tiene sentido usar JavaScript para crear contenido estático
		
		también puedes escribirlo en tu HTML y no usar JavaScript
		
		Es más complejo que HTML y la creación de contenido con JavaScript
		
		también conlleva otros problemas
		
		(como no ser legible por los motores de búsqueda).
		
		
		
	Lista de compras: 
	
		permita agregar artículos dinámicamente a la lista
		
		usando una entrada de formulario y un botón. 
		
		Cuando agrega un artículo a la entrada y presiona el botón:
		
			El artículo debería aparecer en la lista.
			
			Cada artículo debería tener un botón
				
				que se pueda presionar 
				
				para eliminar ese artículo de la lista.
				
			La entrada debería estar vacía y enfocada 
				
				lista para que ingrese otro artículo.
				
		
		siga los pasos a continuación
		
		asegúrese de que la lista se comporte como se describe arriba
		 
		
		archivo de inicio shopping-list.html
		
		tiene un CSS mínimo,
		
		un div con una etiqueta
		
		un elemento de entrada y un botón
		
		y una lista vacía y un elemento <script>
		 
		
		Crea tres variables que contengan referencias a los elementos de lista (<ul>), <input> y <button>.
		
		Crea una función que se ejecutará en respuesta al clic en el botón.
		
		Dentro del cuerpo de la función, comienza almacenando el valor actual del elemento de entrada en una variable.
		
		A continuación, vacía el elemento de entrada estableciendo su valor en una cadena vacía: ''.
		
		Crea tres elementos nuevos: un elemento de lista (<li>), <span> y <button>, y almacénalos en variables.
		
		Agrega el span y el botón como elementos secundarios del elemento de lista.
		
		Establece el contenido de texto del span en el valor del elemento de entrada que guardaste anteriormente y el contenido de texto del botón en 'Eliminar'.
		
		Agrega el elemento de lista como elemento secundario de la lista.
		
		Adjunte un controlador de eventos al botón de eliminar para que, al hacer clic, elimine todo el elemento de la lista (<li>...</li>).
		
		Por último, utilice el método focus() para enfocar el elemento de entrada y dejarlo listo para ingresar el siguiente elemento de la lista de compras.
		


|| Fetch 

	recuperar elementos de datos individuales del servidor
	
	para actualizar secciones de una página web
	
	sin tener que cargar una página nueva completa
	
	pequeño ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios
	
	
	Un problema: 
		
		Una página web consta de una página HTML
		
		varios otros archivos, como hojas de estilo, scripts e imágenes. 
		
		El modelo básico de carga de páginas en la Web
		
		su navegador realiza una o más solicitudes HTTP al servidor de los archivos
		
		de los archivos necesarios para mostrar la página
		
		y el servidor responde con los archivos solicitados.
		
		Lo mismo si visitas otra página. 
		
		Diagrama: 
		
			Navegador -> Request Page (html, css, js...) -> Server
			
			Navegador <- Request Page (html, css, js...) <- Server
				
		
		Este modelo funciona perfectamente para muchos sitios
		
		Pero considere un sitio web que se base en gran medida en datos
		
		Por ejemplo, el sitio web de una biblioteca como la Biblioteca Pública de Vancouver
		
		Entre otras cosas, se podría pensar en un sitio como este
		
		como una interfaz de usuario para una base de datos
		
		Podría permitirle buscar un género de libro en particular
		
		o mostrarle recomendaciones de libros que podrían gustarle
		
		basándose en libros que haya tomado prestados anteriormente
		
		Cuando hace esto, es necesario actualizar la página
		
		con el nuevo conjunto de libros para mostrar
		
		Pero tenga en cuenta que la mayor parte del contenido de la página
		
		incluidos elementos como el encabezado, la barra lateral y el pie de página, permanece igual.
		
		
		El problema con el modelo tradicional
		
		es que tendríamos que buscar y cargar la página completa
		
		incluso cuando solo necesitamos actualizar una parte de ella
		
		Esto es ineficiente y puede resultar en una mala experiencia de usuario.

		
		Entonces, en lugar del modelo tradicional
		
		muchos sitios web utilizan API de JavaScript
		
		para solicitar datos del servidor y actualizar
		
		el contenido de la página sin cargar la página.
		
		Entonces, cuando el usuario busca un nuevo producto
		
		el navegador solo solicita los datos necesarios para actualizar la página
		
		el conjunto de libros nuevos que se mostrarán, por ejemplo
		
		Diagrama: 
			
			Navegador -> Request Page (html, css, js...) -> Server
			
			Search -> Request Data -> Server 
			
			Update Page <- Request Data <- Server 

		
		La API principal aquí es la API Fetch
		
		permite que JavaScript se ejecute en una página
		
		para realizar una solicitud HTTP a un servidor
		
		para recuperar recursos específicos
		
		Cuando el servidor los proporciona
		
		JavaScript puede usar los datos para actualizar la página
		
		generalmente mediante el uso de API de manipulación DOM
		
		Los datos solicitados suelen ser JSON
		
		que es un buen formato para transferir datos estructurados
		
		pero también pueden ser HTML o simplemente texto.

		Este es un patrón común para sitios basados ​​en datos como Amazon, YouTube, eBay
		
		
		1. Las actualizaciones de la página son mucho más rápidas
		
			no es necesario esperar a que se actualice
			
			significa que el sitio se siente más rápido y con mayor capacidad de respuesta
			
			
		2. Se descargan menos datos en cada actualización
		
			significa menos ancho de banda desperdiciado
			
			Puede que esto no sea un problema tan grande
			
			en una computadora de escritorio
			
			con una conexión de banda ancha
			
			pero es un problema importante en dispositivos móviles
			
			y en países que no tienen un servicio de Internet rápido y ubicuo.
			
		
		Al principio, esta técnica general
			
		se conocía como JavaScript y XML asincrónicos (Ajax)
		
		porque tendía a solicitar datos XML.
		
		Normalmente, este no es el caso hoy en día
		
		(sería más probable que solicite JSON)
		
		pero el resultado sigue siendo el mismo
		
		
		Para acelerar aún más las cosas
		
		algunos sitios también almacenan recursos 
		
		y datos en la computadora del usuario
		
		cuando se solicitan por primera vez
		
		significa que en visitas posteriores
		
		usan las versiones locales
		
		locales en lugar de descargar copias
		
		El contenido sólo se recarga desde 
		
		el servidor cuando ha sido actualizado
		
	
	Fetch API: 
	
		Recuperar u obtener datos o recursos
		
	
	Fetch contenido de texto: 
		
		solicitaremos datos de archivos de texto
	
		para completar un área de contenido
		
		Esta serie de archivos actuará
		
		como nuestra base de datos falsa
		
		en una aplicación real
		
		sería más probable que usáramos
		
		un lenguaje del lado del servidor
		
		para solicitar nuestros datos de una base de datos
		
		como PHP, Python o Node
		
		Porque un lenguaje de backend interactuar
		
		con una computadora/servidor que almacena archivos, datos, recursos 
	
		Un lenguaje frontend interactua con el navegador
		
		cliente/programa
		
		
		Hacemos una copia local de fetch-start.html
		
		y los cuatro archivos de texto
		
		en un nuevo directorio de su computadora
		
		Buscaremos un verso diferente del poema
		
		cuando esté seleccionado en el menú desplegable
			
		
		Dentro del elemento <script> agregamos código
		
		almacena referencias a los elementos <select> y <pre>
		
		y agrega un detector al elemento <select>
		
		de modo que cuando el usuario selecciona un nuevo valor
		
		el nuevo valor se pasa a la función 
		
		updateDisplay() como parámetro.
		
		```
		const verseChoose = document.querySelector("select");
		const poemDisplay = document.querySelector("pre");

		verseChoose.addEventListener("change", () => {
		  const verse = verseChoose.value;
		  updateDisplay(verse);
		});
	
		```
		
		Definamos nuestra función updateDisplay()
		
		```
		function updateDisplay(verse) {

		}

		```
		
		Comenzaremos construyendo una URL relativa
		
		que apunte al archivo de texto que queremos cargar
		
		ya que lo necesitaremos más adelante
		
		El valor del elemento <select>
		
		en cualquier momento es el mismo
		
		que el texto dentro de la <opción> 
		
		seleccionada (a menos que especifique un valor diferente en un atributo de valor),
		
		por ejemplo, "Verso 1"
		
		El archivo de texto de verse correspondiente es "verse1.txt"
		
		está en el mismo directorio que el archivo HTML
		
		bastará con el nombre del archivo.

		
		Sin embargo, los servidores web
		
		tienden a distinguir entre mayúsculas y minúsculas
		
		y el nombre del archivo no tiene espacios. 
		
		Para convertir "Verse 1" a "verse1.txt"
		
		necesitamos convertir la 'V' a minúscula
		
		eliminar el espacio y agregar ".txt" al final
		
		Esto se puede hacer con replace(),
		
		toLowerCase() y literal de plantilla. 
		
		```
		verse = verse.replace(" ", "").toLowerCase();
		const url = `${verse}.txt`;
		
		```
		 
		 
		Después usamos Fetch: 
		
		```
		// Llama a `fetch()`, pasando la URL.
		fetch(url)
		  // fetch() devuelve una promesa. Cuando hayamos recibido una respuesta del servidor,
		  // el controlador `then()` de la promesa se llama con la respuesta.
			.then((response) => {
			// Nuestro controlador arroja un error si la solicitud no tuvo éxito.
			if (!response.ok) {
			  throw new Error(`HTTP error: ${response.status}`);
			}
			// De lo contrario (si la respuesta fue exitosa), nuestro controlador recupera la respuesta
			// como texto llamando a respuesta.text(), y devuelve inmediatamente la promesa
			// devuelto por `respuesta.text()`
			return response.text();
			})
		  // Cuando respuesta.text() ha tenido éxito, se llama al controlador `then()` con
		  // el texto, y lo copiamos en el cuadro `poemDisplay`.
		  .then((text) => {
			poemDisplay.textContent = text;
		  })
		  // Detecta cualquier error que pueda ocurrir y muestra un mensaje
		  // en el cuadro `poemDisplay`.
		  .catch((error) => {
			poemDisplay.textContent = `Could not fetch verse: ${error}`;
		  });
			
		```
			
		Primero, el punto de entrada a Fetch API
		
		es una función global llamada fetch(),
		
		que toma la URL como parámetro
		
		(toma otro parámetro opcional para configuraciones personalizadas)
		
		
		fetch() es una API asincrónica
		
		que devuelve una Promesa
		
		debido a que fetch() devuelve una promesa
		
		pasamos una función al método then()
		
		de la promesa devuelta
		
		Este método se llamará
		
		cuando la solicitud HTTP haya recibido una respuesta del servidor
		
		En el controlador, verificamos 
		
		que la solicitud se realizó correctamente
		
		y arrojamos un error si no fue así
		
		De lo contrario, llamamos a Response.text()
		
		para obtener el cuerpo de la respuesta
		
		como texto.


		Response.text() también es asíncrono
		
		por lo que devolvemos la promesa que devuelve
		
		y pasamos una función al método then() de esta nueva promesa
		
		Esta función será llamada cuando el texto de respuesta esté listo
		
		y dentro de ella actualizaremos nuestro bloque <pre> con el texto.
		
		
		Encadenamos un controlador catch() al final
		
		para detectar cualquier error arrojado
		
		en cualquiera de las funciones asincrónicas que llamamos
		
		o sus controladores.
		
	
		Un problema con el ejemplo tal como está
		
		es que no mostrará nada del poema 
		
		cuando se carga por primera vez.
		
		Para solucionar este problema
		
		Agregar al final del código 
		
		para cargar el verso 1 
		
		de forma predeterminada y asegúrese 
		
		de que el elemento <select>
		
		siempre muestre el valor correcto
		 
		```
		updateDisplay("Verse 1");
		verseChoose.value = "Verse 1";

		``` 


	Correr ejemplo desde un servidor:
	
		Los navegadores modernos no ejecutarán solicitudes HTTP
		
		si simplemente ejecuta el ejemplo desde un archivo local
		
		Esto se debe a restricciones de seguridad
		
		debemos probar el ejemplo ejecutándolo
		
		a través de un servidor web local
		
		
	Can store: 
		
		

		
		
			
|| RS




	1. 

		Ejecución de Js

		Orden de ejecución JS

		Estrategias de carga




		Juego js + html: 

			Divs para form y parrafos que están vinculados con constantes de JS. 

			Variables para valores interactivos, botones, funciones cambiantes, etc. 

			En los condicionales validamos los campos con funciones incorporadas para asegurarnos que ingrese el adecuado. 

			Tambien comparamos valores de varibles para activar los diferentes escenarios que planteamos en el condicional. 

			Para crear una coincidencia o match, usamos el operador de igualdad estricta. 

			Para hacer otras comparaciones usamos <, >, etc. 

			Necesitamos llamar a la función principal y para eso usamos un evento incorporado que toma como parametros un tipo de acción y una función, la asociamos a un botón. 

			Cuando el usuario pierde el juego no debería poder acceder a ciertas funciones o botones por lo que las deshabilitamos y cambiamos el aspecto gráfico del juego

			Además debemos establecer el reinicio del juego, creamos el boton de reset asociandole un evento y una función. 

			Creamos la funcion de reset, deshabilitando funciones, resetenado valores al valor original y cambiamos el aspecto del juego. 

			Bucles: recorre un array para guardar en una variable cada elemento de ese array. Seguido de eso puede imprimir los valores, operarlos o cualquier acción dentro de las llaves. 

			Objetos: son funciones relacionadas. 

			Focus en un campo para que el usuario pueda escribir directamente sin tener que mover el cursor hacia el campo.


		Variables1: 

			declarar const o let: 

				depende del contendio, ej: 

				let myName;
				myName = "Chris";
				let myAge = 42;

				`let` es ideal para ambas declaraciones.

				`const` no es realmente apropiado, ya que dichos valores pueden cambiar y no funcionará en primera instancia. 

				`var` no está bien.


		Matemática1: 

			Comprobar resultado o número par: 

				usar operador %(resto)
				y además el número 2. 

				0 = par
				1 = impar

				let num1 = 2
				let esPar = num1%2


			typeof var1;
			

			.toFixed();
				
				let numFixed = bigNum.toFixed(2);


		Buenas Prácticas1: 

			Nombrar variables: 

				Debemos pensar que es lo que mejor representa lo que contiene en la parte derecha. 

				ej: si es un número

					let var1 = 10 // no es lo mejor

					let num1 = 10 // el contenido está mejor representado por el noombre elegido. 

					o

					let number1 = 10 // mucho mejor


		Cadenas: 

			template literals: 

				Las comillas invertidas

				(``) tienen propiedades: 

				1. incrustan Js

					const name = "Chris";
					const greeting = `Hello, ${name}`;


				2. declarar multiples líneas en nueva línea:

					const newline = `One day you finally knew
					what you had to do, and began,`;
					console.log(newline);

					/*
					One day you finally knew
					what you had to do, and began,
					*/


			Formas de concatenación


			Código JS: 

				Función y evento: 

					La función de JS modifica los elementos html y el Evento en un elemento de html activa la función 


		Métodos de Cadena: 

			1. Recuperar el ultimo elemento de cualquier cadena: 

				Hay que hacer un cálculo lógico: 

				```
				const browserType = "mozilla";
				browserType.length;

				browserType[browserType.length - 1];

				```

				La longitud de la cadena "mozilla" es 7, pero como el recuento comienza en 0, la posición del último carácter es 6; usar longitud-1 nos da el último carácter.


			2. Subcadenas y condicional: 

				1. includes()

				2. startsWith()

				3. endsWith()

				4. indexOf(cadenaBuscada, indiceComienzoBusqueda) 

				5. slice()

				6. toUpperCase y toLowerCase()

				7. replace():

				Cambiar cadena:

					Si la queremos guardar en el mismo lugar, contenedor o variable;
					declarar browserType usando let, no const, porque lo estamos reasignando.

				8. replaceAll()
