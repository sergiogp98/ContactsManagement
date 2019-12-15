# MultimediaManagement

[![GitHub issues](https://img.shields.io/github/issues/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/issues) [![GitHub license](https://img.shields.io/github/license/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/network) [![GitHub stars](https://img.shields.io/github/stars/sergiogp98/MultimediaManagement)](https://github.com/sergiogp98/MultimediaManagement/stargazers) [![Build Status](https://travis-ci.org/sergiogp98/MultimediaManagement.svg?branch=master)](https://travis-ci.org/sergiogp98/MultimediaManagement) [![CircleCI](https://circleci.com/gh/sergiogp98/MultimediaManagement.svg?style=svg)](https://circleci.com/gh/sergiogp98/MultimediaManagement) [![codecov](https://codecov.io/gh/sergiogp98/MultimediaManagement/branch/master/graph/badge.svg)](https://codecov.io/gh/sergiogp98/MultimediaManagement)

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

### Enlace a la documentación
* [Historias de usuario](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/historias_usuario.md)
* [Herramientas usadas](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas.md)
* [Herramienta de construcción](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_construccion.md)
* [Documentación de rutas](https://multimedia-management.herokuapp.com/api-docs/) 
* [Integración continua](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/herramientas_ci.md)
* [PasS](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/paas.md)
* [Docker](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/docker.md)
* [Provisión](https://github.com/sergiogp98/MultimediaManagement/blob/master/docs/provisionamiento.md)

### ¿Cómo instalarla?
`npm install` 

### ¿Cómo testearla?
`npm test`

### Despliegue
despliegue: https://multimedia-management.herokuapp.com/

Contenedor: https://multimedia-management-docker.azurewebsites.net/

### Herramienta de construcción
buildtool: package.json

### Docker Hub
URL: https://hub.docker.com/r/sergiogp98/multimedia-management

### Provisión
provision: provision/playbook.yml

### Autor
[Sergio Garcia Prados](https://github.com/sergiogp98)


