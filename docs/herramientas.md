# Herramientas usadas para la elaboración del proyecto

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
