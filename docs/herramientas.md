# Herramientas usadas para la elaboración del servicio web

## Lenguaje de programación
Para construir mi API, voy a usar el lenguaje [JavaScript](https://www.javascript.com) con su entorno de ejecución en el lado del servidor [Node.js](https://nodejs.org/es/). He decidido usarla ya que este servicio esta orientado al lado del servidor, más que del lado del cliente

## Base de datos
Para almacenar la infromación y poder gestionarla voy a implementar el sistema de gestion de base de datos NoSQL [MongoDB](https://www.mongodb.com/es) y su framework específico para Node.js [mongoose](https://mongoosejs.com)

## Framework 
Como framework de desarrollo de aplicaicones web usaré el conocido [Express.js](https://expressjs.com/es/) ya que es minimalista y muy flexible

## Test
Para que todo proyecto vaya sobre ruedas, es necesario controlar cualquier modificación que se haga sobre el mismo. Estas modificaciones no solo pueden añadir nuevas funcionalidades sino también afectar a las ya implementadas. Para ello son necesrios los tests, para controlar que el resultado de todas las funcionalidades añadidas hasta el momento sean las esperadas. En mi caso, usaré el framework [Mocha](https://mochajs.org)

## Sistema de logs
Depuarar el código es tan importante como su implementación. Para tener todo detalle de los errores que ocurren es necesario tener integrado un sistema de logs y así agilizar la detección y corrección de los mismos. Hay muchos middleware para ello pero en este proyecto usaré [Morgan](https://www.npmjs.com/package/morgan)

## Herramienta de construcción
Permite simplificar órdenes tales como instalación o testeo de tal foma que el usuario no tenga que indagar mucho para ejecutarlas. Dado el lenguaje de programación que se va a usar, aprovecharé la gran herramienta [npm](https://www.npmjs.com). Para poder usar esta herramienta, es necesario que exista el archivo [package.json](https://github.com/sergiogp98/MultimediaManagement/blob/master/package.json) en el directorio raiz del proyecto. En él se especifican los siguientes puntos:
* Nombre del proyecto (name)
* Versión del proyecto (version)
* Script principal (main)
* Descripción del proyecto (description)
* Directorios del proyecto (directories)
* Dependencias (dependencies)
* Dependencias de desarrollo (devDependencies)
* Reglas para ejecutar diferenetes comando (scripts)
* Información del repositorio (repository)
* Autor del proyecto (author)
* Licencia del proyecto (license)

## Sistema de integración continua (CI)
Estos sistemas añaden agilidad a la hora de detectar fallos. Se componen de compilación y ejecución de pruebas. Para el desarrollo de este servicio, usaré dos:  
* [Circle CI](https://circleci.com)

* [TravisCI](https://travis-ci.org/). En el archivo de configuración ([.travis.yml](https://github.com/sergiogp98/MultimediaManagement/blob/master/.travis.yml)), se detallan los siguintes apartados:
    * Espcifico el lenguaje usado: node_js
    * Prueba con diferentes versiones de node.js: 10, 8 y 6
    * Instala las dependencias necesarias para correr la API: npm install (ver apartado herramientas de construcción)
    * Ejecuta los tests: npm test (ver apartado herramientas de construcción)
