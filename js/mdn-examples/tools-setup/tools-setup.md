# Configurar Servidor Local de Prueba
	
	Local files vs remote files: 
		
		Podemos abrir los ejemplos directamente  en un navegador
			
		Si la ruta de la dirección web comienza con file://
		
		seguido de la ruta al archivo en su disco duro local
		
		se está utilizando un archivo local
		
		
		Los ej alojados en GitHub o un ejemplo en algún otro servidor remoto
		
		la dirección web comenzará con http:// o https://,
		
		para mostrar que el archivo se recibió a través de HTTP.
		
		
	El problema de probar archivos locales:
		
		Algunos ejemplos no se ejecutarán si los abre como archivos locales
		
		puede deberse a diversos motivos:
		
			1. Presentan solicitudes asincrónicas. 
		
		
			2. Algunos navegadores (incluido Chrome)
				
				no ejecutarán solicitudes asíncronas
				
				(fetch: obtención/recuperacion de datos del servidor)
	
				si simplemente ejecuta el ejemplo desde un archivo local
	
				Esto se debe a restricciones de seguridad
				
				
			3. Cuentan con un lenguaje del lado del servidor
	
				Los lenguajes del lado del servidor
				
				(como PHP, Python o nodejs) 
				
				requieren un servidor especial 
				
				para interpretar el código
				
				y entregar los resultados.


			4. Incluyen otros archivos
				
				Los navegadores suelen tratar las solicitudes
				
				para cargar recursos utilizando el esquema file://

				como solicitudes de origen cruzado 
				
				(cross-origin requests)
				
				si carga un archivo local
				
				que incluye otros archivos locales
				
				esto puede desencadenar un error CORS


			CORS (Cross-Origin Resource Sharing)
			
			es un sistema que consiste en transmitir encabezados HTTP,
			
			que determina si los navegadores bloquean el código JavaScript frontal
			
			para acceder a las respuestas para solicitudes de origen cruzado.

			La política de seguridad del mismo origen
			
			prohíbe el acceso a recursos entre orígenes
			
			Pero CORS brinda a los servidores web
			
			la capacidad de decir que desean optar
			
			por permitir el acceso entre orígenes a sus recursos.
			
			
	Ejecutar un servidor HTTP local:
		
		Para solucionar el problema de las solicitudes asíncronas
		
		debemos probar dichos ejemplos ejecutándolos a través de un servidor web local
		
		
	Usando una extensión en su editor de código:
		
		Si solo necesita HTML, CSS y JavaScript
		
		y ningún lenguaje del lado del servidor
		
		la forma más sencilla puede ser buscar extensiones  en su editor de código.

		Además de automatizar la instalación y configuración de su servidor HTTP local
		
		también se integran muy bien con sus editores de código
		
		Probar archivos locales en un servidor HTTP puede estar a un clic de distancia.

		
		Para VSCode:
			
			vscode-preview-servidor

		
	Usando NodeJs: 
		
		El módulo http-server  es la forma más sencilla de alojar archivos HTML en cualquier directorio
		
		utilizar el módulo:
		
		1. Verificar si está instalado 
		
			```
			node -v
			npm -v
			npx -v

			```
		
		2. Supongamos que el directorio del proyecto es 
		
			/path/to/project
			
			Ejecutar el comando para iniciar el server: 
			
			```
			npx http-server /path/to/project -o -p 9999

			```
			
			Esto aloja todos los archivos en el directorio
			
			/path/to/project en localhost:9999
			
			La opción -o abrirá la página index.html
			
			Si index.html no existe, entonces se muestra el directorio
	
	Python: 
		
		Otra forma es utilizar el módulo http.server de Python.
		
		1. Verificar Python: 
		
			```
			python -V
			# If the above fails, try:
			python3 -V
			# Or, if the "py" command is available, try:
			py -3 -V

			```

		2. Si Python está configurado
		
			navegue hasta el directorio que contiene el código
			
			del sitio web que desea probar, usando el comando cd.

			```
			# include the directory name to enter it, for example
			cd Desktop
			# use two dots to jump up one directory level if you need to
			cd ..
			
			```
		
		3. Ingrese el comando para iniciar el servidor en ese directorio
		
			```
			# On Windows, try "python -m http.server" or "py -3 -m http.server"
			python3 -m http.server
			
			```
			
		4. De forma predeterminada
			
			esto ejecutará el contenido del directorio en un servidor web local,
			
			Puede ir a este servidor accediendo a la URL localhost:8000 en su navegador web
			
			Aquí verá el contenido del directorio enumerado
			
			haga clic en el archivo HTML que desea ejecutar.


		Si ya tiene algo ejecutándose en el puerto 8000
		
		puede elegir otro puerto ejecutando el comando del servidor
		
		seguido de un número de puerto alternativo
		
		como python3 -m http.server 7800. 
		
		Luego puede acceder a su contenido en localhost:7800.
		
		
	Ejecutar lenguajes del lado del servidor localmente:
				
		El mejor enfoque para trabajar con lenguajes del lado del servidor
	
		como Python, PHP o JavaScript
		
		depende del lenguaje del lado del servidor que esté utilizando
		
		y de si está trabajando con un framework 
		
		o con un código "independiente".

		
		Si está trabajando con un framework
		
		normalmente proporcionará su propio servidor de desarrollo
		
		los siguientes lenguajes/frameworks 
		
		marcos vienen con un servidor de desarrollo:

		Para python: 
		
			Django, Flask y Pyramid.

		Node/JavaScript:
			
			Express Web Framework
			
		PHP tiene su propio servidor de desarrollo integrado
		
		```
		cd path/to/your/php/code
		php -S localhost:8000

		```
		
		
	Si no está trabajando directamente con un framework
	
	del lado del servidor o un lenguaje de programación
	
	que proporcione un servidor de desarrollo
	
	el módulo http.server de Python también se puede utilizar para probar el código del lado del servidor
	
	escrito en lenguajes como Python, PHP, JavaScript y y así sucesivamente
	
	invocando scripts de interfaz de puerta de enlace común (CGI)
	
	(Common Gateway Interface)
	
	
