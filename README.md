# MultimediaManagement

[![GitHub issues](https://img.shields.io/github/issues/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/issues) [![GitHub license](https://img.shields.io/github/license/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/network) [![GitHub stars](https://img.shields.io/github/stars/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/stargazers) [![Build Status](https://travis-ci.org/sergiogp98/MultimediaManagement.svg?branch=master)](https://travis-ci.org/sergiogp98/MultimediaManagement) [![CircleCI](https://circleci.com/gh/sergiogp98/MultimediaManagement.svg?style=svg)](https://circleci.com/gh/sergiogp98/MultimediaManagement) <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="146" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="146" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h93v20H0z"/><path fill="#e05d44" d="M93 0h53v20H93z"/><path fill="url(#b)" d="M0 0h146v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110"> <text x="475" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="830">Coverage:lines</text><text x="475" y="140" transform="scale(.1)" textLength="830">Coverage:lines</text><text x="1185" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">68.71%</text><text x="1185" y="140" transform="scale(.1)" textLength="430">68.71%</text></g> </svg>

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
buildtool: package.json (ver [herramienta de construcción](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_construccion.md) para más detalle)

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


