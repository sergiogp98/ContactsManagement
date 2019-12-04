# Contenedores para un microservicio

## ¿Qué es un contenedor?
Si bien las máquinas virtuales (VM) tradicionales permiten la virtualización de la infraestructura de computación, los contenedores habilitan la de las aplicaciones de software. A diferencia de las máquinas virtuales, los contenedores utilizan el sistema operativo (SO) de su host en lugar de proporcionar uno propio.

## ¿Por qué usar contenedores?
Dado que no incluyen sistemas operativos completos, los contenedores requieren recursos informáticos mínimos y son rápidos y fáciles de instalar. Esta eficiencia permite que se implementen en clústeres, con contenedores individuales que encapsulan componentes únicos de aplicaciones complejas. Separar los componentes de la aplicación en diferentes contenedores permite a los desarrolladores actualizar componentes individuales sin necesidad de rehacer la aplicación completa.
Estos contenedores guardan una pila o *stack* (conjunto de aplicaciones) que unidos entre si nos sirve para crear una imagen.

## Docker
Existen múltiples herramientas para virtualizar a nivel de sistema operativo. No obstante, una de las herramienta más usada últimamente es Docker. Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos. ​Docker utiliza características de aislamiento de recursos del kernel Linux, tales como cgroups y espacios de nombres (namespaces) para permitir que "contenedores" independientes se ejecuten dentro de una sola instancia de Linux, evitando la sobrecarga de iniciar y mantener máquinas virtuales.2

## Configuración del Dockerfile
Para desplegar la API en Docker es necesario crear en el directorio raiz del proyecto un Dockerfile. Un Dockerfile es un archivo de texto plano que contiene una serie de instrucciones necesarias para crear una imagen (citado anteriormente) que, posteriormente, se convertirá en una sola aplicación utilizada para un determinado propósito.
En concreto, el Dockerfile de este proyecto consta de las siguientes instrucciones:
* **FROM**: indica la imagen base sobre la que se construirá la aplicación dentro del contenedor. En concreto, usaré la imagen oficila de NodeJS pero  
con el *[tag](https://hub.docker.com/_/node)* de *alpine*. Los *tag* son las etiquetas de las imágenes que permite tener una amplia gama la misma imagen. Yo he usado la de *alpine* la cual levanta la imagen sobre el la distribución de Liux *Alpine*.
* **WORKDIR**: indica el directorio de trabajo para las instrucciones de RUN, CMD, ENTRYPOINT, COPY y ADD. 
* **COPY**: copia los archivos de la primera ruta pasada por argumento a la segunda. Simplemente copia los archivos necesarios
* **EXPOSE**: informa a Docker que el contenedor escucha el puerto pasado por argumento. En concreto le paso la variable de entorno
* **RUN**: ejecuta los comandos pasados como argumento. En concreto indico que se instalen las dependencias necesarias para lanzarlo solo en producción
* **ENTRYPOINT**: permite configurar un contenedor para que se lanze como un ejecutable. Si hay varios, solo tendrá efecto el último

## Despliegue y automatización
Una vex creado el Dockerfile, podemos pasar al despliegue del contenedor. Para ello primero nos creamos una cuenta en [Docker Hub](https://hub.docker.com/). Docker Hub es un repositorio público en la nube, similar a Github, para distribuir los contenidos. Está mantenido por la propia Docker y hay multitud de imágenes, de carácter gratuito, que se pueden descargar y asi no tener que hacer el trabajo desde cero al poder aprovechar “plantillas”.

Tras crearnos una cuenta, accedemos a *Repositories* y crearemos uno donde:
* Indicamos la visibilidad: pública o privada (en mi caso pública)
* Le damos acceso a nuestra cuenta de GitHub para quue al hacer *push* a nuestro repositorio, haga lo mismo en el repositorio de Docker

![](./img/docker1.png)

A continuación, indicamos el respositorio en concreto que queremos subir. Algunos parámetros importantes a configurar:
* **Autotest**: nunca ejecutar los tests, cuand solo haya pull requests internos o pull requests internos y externos. Yo habilité esta última opción
* **Build rules**: cómo construir tu respositorio en una imagen de Docker. Se especifica la rama y el nombre de la misma(*source type* y *source*), la etiqueta de la imagen (*tag*), la localización del Dockerfile (*Dockerfile location*), a partir de qué rama del repositorio construir la imagen (*Build context*), automatizar el despliegue (*Autobuild*), el cual permite hacer *push* al contenedor automáticamente tras hacer *push* en el respositorio y haber pasado los tests y *Build catching* que permite ahorrar tiempo con imágenes pesadas (al inicio, usé la última version de *node* la cual ocupaba mucho)

![](./img/docker2.png)

Una vez creado, tan solo es necesario hacer un *push* a tu respositorio, y si pasa los tests, se creará la imagen.

![](./img/docker3.png)
