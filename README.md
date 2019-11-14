# MultimediaManagement

[![GitHub issues](https://img.shields.io/github/issues/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/issues) [![GitHub license](https://img.shields.io/github/license/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/network) [![GitHub stars](https://img.shields.io/github/stars/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/stargazers) [![Build Status](https://travis-ci.org/sergiogp98/MultimediaManagement.svg?branch=master)](https://travis-ci.org/sergiogp98/MultimediaManagement) [![CircleCI](https://circleci.com/gh/sergiogp98/MultimediaManagement.svg?style=svg)](https://circleci.com/gh/sergiogp98/MultimediaManagement)

## Proyecto para la asignatura Infraestructura Virtual (4º II, ETSIIT)

### Introducción
Este proyecto se basa en el desarrollo de un microservicio de una aplicación sobre gestión de contenido multimedia. Esta aplicación está orientada a cinéfilos y les permite gestionar películas que hayan visto o tienen intención de ver. Para saber más sobre qué es y para que sirve lea las [historias de usuario](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/historias_usuario.md)

### Organización
* **controllers**: define las rutas y su lógica
* **docs**: documentación
* **helpers**: funciones compartidas en diferentes partes del proyecto
* **middlewares**: *express* middlewares que procesan la información recibida previa a enviarla a las rutas
* **models**: representación de los datos y manejo de la base de datos
* **tests**: tests que verifican la funcionalidad del código

### Herramientas usadas
Dirigite a este [enlace](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas.md) para ver las herramientas usadas.

### Herramienta de construcción
buildtool: package.json 
Ver [herramienta de construcción](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_construccion.md) para más detalle

### Integración continua
Para poder ver las herramientas de integración continua usadas, dirígete a este [enlace](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_ci.md) para más detalle

### ¿Cómo instalarla?
`npm install` 
* Esta orden instala las dependencias necesarias para poder correr la API. Ver [herramienta de construcción](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_construccion.md) para más detalle

### ¿Qué se va a testear?
Todas las funcionalidades que se encargan de manejar el contenido de películas.

### ¿Cómo testearla?
`npm test`
* Esta orden ejecuta los tests. Ver [herramienta de construcción](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_construccion.md) para más detalle

### Autor
[Sergio Garcia Prados](https://github.com/sergiogp98)


