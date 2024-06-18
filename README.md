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






|| 2. Entendiendo los Bloques en JS


	Guia: 

		1. 





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