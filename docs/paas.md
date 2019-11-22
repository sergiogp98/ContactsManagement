# Despliegue en un  *PaaS* (*Platform as a Service*)

## ¿Qué es un *PaaS*?

Una plataforma como servicio es una oferta de cloud computing que proporciona a los usuarios un entorno de cloud en el que pueden desarrollar, gestionar y distribuir aplicaciones. Además del almacenamiento y otros recursos informáticos, los usuarios pueden utilizar un conjunto de herramientas prediseñadas para desarrollar, personalizar y probar sus propias aplicaciones.

Funciones principales:
* PaaS proporciona una plataforma con herramientas para probar, desarrollar y alojar aplicaciones en el mismo entorno.
* Permite a las organizaciones centrarse en el desarrollo, sin tener que preocuparse por la infraestructura subyacente.
* Los proveedores gestionan la seguridad, los sistemas operativos, el software de servidor y las copias de seguridad.
* Facilita la colaboración incluso si los equipos trabajan en remoto.

En esta API se usa [Heroku](https://www.heroku.com). Las siguiente sección explica los pasos y archivos de configuración necesarios para desplegar la API en el correspondiente PaaS.

Nota: esta API se ha desarrollado sobre Ubuntu 18.04 (bionical)

## Heroku

### ¿Por qué Heroku?
Por su simplicidad y facilidad a la hora de añadir el respositorio de deslpiegue y su configuración en un Procfile. Otro de los principales motivos de su elección es el coste económico para usarla, GRATIS.

### ¿Cómo desplegar en Heroku?
Previo a desplegar la API es necesario crear un *Procfile* pero, ¿qué es un 
*Procfile*? Es un archivo de texto plano, el cual tiene que situarse en la carpeta raiz del repositorio, que declara los comandos que deben ser ejecutados para desplegar la API. 

Se compone de declaraciones en el formato: \<proceso>: \<comando> 

`web: npm run start-heroku`

* El proceso es el nombre del comando. Existen muchos tipos especiales los cuales estan ya definidos. El proceso *web* es el único que puede recibir tráfico externo HTTP 
* El comando a ejecutar es simplemente la orden del *package.json* que levanta la API

Una vez creado nuestro archivo de configuración, es hora de deplegar la API. Primero hay que instalar la interfaz de linea de comandos de Heroku (CLI) para poder manejar y escalar la API, añadir funcionalidades, ver logs y poder ejecutar la API localmente. Para ello hay que ejecutar desde la linea de comandos:

`sudo snap install heroku --classic`

Una vez instalado hay que hacer log in en tu cuenta de Heroku (es necesario un registro previo desde la página web):

`heroku login`

En la carpeta del repositorio, tiene que ser necesariamente desde la carpeta raiz, creamos una app en nuestra cuenta de Heroku: 

`heroku create`

No obstante, para desplegar esta API, ejecuté la siguiente orden:

`heroku apps:create --region eu --ssh-git multimedia-management`

donde:
* *--region eu*: asigna la localización del servidor (Europa)
* *--ssh-git*: usa SSH como protocolo de transferencia de archivos. Por defecto asigna HTTP. Para poder usar SSH es necesario ejecutar los siguientes comandos:

    * `ssh-keygen -t rsa`: genera un llave pública en tu máquina (ejecutarlo en caso de no tener una)
    * `heroku keys:add`: guarda la llave pública en tu entorno de Heroku
* *<nombre_app>*: asigna el nombre de la app en Heroku. Si no se especifica te asigna un nombre aleatorio. 

Una vez creada la aplicación en Heroku, es necesario asegurarse que al menos una instancia de la API está ejecutandose. Para ello ejecutamos:

`heroku ps:scale web=1`

Finalmente accedemos a nuestra API ya desplegada ejecutando:

`heroku open`