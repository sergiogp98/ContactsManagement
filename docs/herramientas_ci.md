# Herramienta usada para implementar integración continua en el proyecto
 
## ¿Qué es un sistema de integración continua (CI)?
Un sistema de integración continua se podría definir como un modelo informático basado en la integración automática de un proyecto lo más frecuente posible para así facilitar la posible detección de errores. Se entiende integración como compilación y ejecución de pruebas. 
Existen infinidad de sistemas CI. A pesar de ello, en este proyecto se usarán dos: [Circle CI](https://circleci.com) y [TravisCI](https://travis-ci.org/).
 
## ¿Cómo se implementa un sistema de CI?
Para poder usar estos sistemas, es necesario añadir unos archivos de configuración, uno por sistema. Cada uno tiene una estructura distinta:
* **Circle CI**: en el archivo de configuración ([config.yml](https://github.com/sergiogp98/MultimediaManagement/blob/master/.circleci/config.yml)), se detallan los siguientes apartados:
    * **version**: a parte de indicar la versión usada del sistema CI, se usa también para advertir en caso de cambios importantes en la misma 
    * **jobs**: una ejecución consta de uno o maś trabajos, también llamados mapa de trabajo. Cada uno consta de un nombre o clave del mapa (*build* se encarga de instalar las dependencias mientras que *test* ejecuta los test) y tiene asociado un valor que describe el trabajo (*docker* y *steps*)
        * **docker**: indica que se va a usar el ejecutor docker
            * **image**: Determina la imagen del contenedor primario. En este caso la última versión de node
        * **steps**: lista de pares clave-valor, donde la clave indica el tipo de paso y el valor puede ser otro mapa de trabajo o cadena: 
            * **checkout**: comprueba el código fuente de la ruta configurada, la cual está inicializada a la variable *working-directory* (por defecto la carpeta personal del proyecto). Al ser un repositorio, no lo clona sino que hace un *pull origin*
            * **run**: define comandos a ejecutar. Concretamente se ejecutan dos:
                * Instalar las dependencias
                * Ejecutar los test
    * **workflow**: se usa para optimizar la ejecución de los trabajos. Paraleliza la ejecución de los trabajos definidos arriba: *build* y *test*.

Para más información mira la [documentación](https://circleci.com/docs/2.0/configuration-reference/) oficial en la web de Circle CI
 
* **TravisCI**: en el archivo de configuración ([.travis.yml](https://github.com/sergiogp98/MultimediaManagement/blob/master/.travis.yml)), se detallan los siguientes apartados:
    * **language**: especifica el lenguaje usado para desarrollar el proyecto. En este caso node
    * **node_js**: especifica las versiones de node a usar (10, 8 y 6)
    * **install**: comando para instalar las dependencias necesarias para correr la API 
    * **scripts**: lista un conjunto de comandos a ejecutar. En concreto ejecuta los test 

Para más información mira la [documentación](https://docs.travis-ci.com/) oficial en la web de Travis CI
 
 

