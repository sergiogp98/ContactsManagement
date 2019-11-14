# Herramienta usada para la construcción del proyecto
 
## ¿Qué es una herramienta de construcción?
Una herramienta de construcción o de gestión de dependencias, principalmente las que existen entre los archivos que componen el código fuente de un programa, se usan para dirigir su recopilación o "generación" automáticamente. Su función básica consiste en determinar automáticamente qué partes de un programa requieren ser recopiladas y ejecutar los comandos necesarios para hacerlo.
 
Existen múltiples herramientas de gestión de dependencias, de entre las que destaca make. No obstante, dado que voy a usar node como lenguaje de programación para mi API, este incluye su propio sistema de gestión de paquetes [npm](https://www.npmjs.com) (Node Package Manager). Este se ejecuta desde la línea de comandos y maneja las dependencias. Cabe destacar que al instalar paquetes nuevos, estos se almacenan dentro de la carpeta node_modules dentro del proyecto. 
 
## ¿Cómo se usa esta herramienta?
Para poder usar esta herramienta, es necesario que exista el archivo [package.json](https://github.com/sergiogp98/MultimediaManagement/blob/master/package.json) en el directorio raiz del proyecto. En él se especifican los siguientes puntos:
* **name**: nombre del proyecto
* **version**: versión del proyecto: 
* **main**: script principal de ejecución de la API 
* **description**: descripción breve del proyecto 
* **directories**: finalidad de algunos directorios del proyecto 
* **dependencies**: dependencias necesarias para instalar (se instalan con *npm install*)
* **devDependencies**: dependencias necesarias para instalar durante el proceso de desarrollo (se instalan con *npm install*)
* **scripts**: reglas para ejecutar diferentes comandos. En concreto se lista:    
    * *test*: ejecuta los tests de prueba localizados en el directorio [tests](https://github.com/sergiogp98/MultimediaManagement/tree/master/tests)
    * *start*: lanza la aplicación cuando está en producción 
    * *start-dev*: lanza la aplicación cuando está en desarrollo
    * *stop*: detiene la ejecución de la aplicación cuando está en producción
    * *restart*: reincia la ejecución de la aplicación cuando está en producción
    * *status*: devuelve el estado de la ejecución de la aplicación cuando está en producción
    * *monit*: permite visualizar la gestión de las tareas desde el shell
    * *plus*: permite visualizar la gestión de las tareas desde la web (requiere autenticación)
    * *logs*: permite ver los logs de las tareas en ejecución
    * *delete*: eliminas las tareas guardadas
* **repository**: información sobre la localización del código (repositorio)
* **author**: autor del proyecto
* **license**: licencia del proyecto 
 
 ## ¿Qué usa la herramienta de construcción?
La herramienta de construcción usada en producción se llama [PM2](https://pm2.keymetrics.io/). Es un gestor de procesos para NodeJS.

Para más información sobre el significado de las partes de un archivo *package.json* mira este [enlace](https://areknawo.com/whats-what-package-json-cheatsheet/)

