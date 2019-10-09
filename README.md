
# Historias de usuario

## ¿Qué se pretede cubrir con este microservicio?

Hoy en día el consumo de contenido multimedia se ha disparado gracias a la aparición de empresas tales como Netflix, HBO, Amazos Prime, etc. Por ello cada vez es más dificl recordar por qué temporada ibas de tal serie o incluso que te pareció aquella película. Como hipotetica empresa TIC, un grupo de críticos de cine nos piden crear un microservicio web que se pueda desplegar en la nube con el cual puedan organizar las películas que ven y poder valorarlos para luego publicar dichas críticas.

En concreto, el cliente pide que el microservicio les permita guardar información de aquellas películas que ha visto (con su correspondiente cŕitica) y aquellas que tienen pendientes de ver

### Datos manejados
* Película:
	* Título
	* Año de estreno
	* Duración
	* Género
	* Resumen
	* Escritores
	* Actores principales
	* Opinión 
	* Estado: visto o pendiente

### Requisitos funcionales
* RF1 Añadir una película: esta función almacena una película. Su estado inicial es pendiente
* RF2 Modificar una película: esta función modifica los datos de una película. Aserciones:
	* Existe la película (almacenada en la base de datos)
* RF3 Devolver una película: esta función devolverá la información de una película. Se podrá consultar por cualquier campo
* RF4 Elminar una película: esta función elimina una película. Aserciones:
	* Existe la película (almacenada en la base de datos)
* RF5 Modificar el estado: modifica el estado de una película
	* Existe la película (almacenada en la base de datos)
	* Para pasar de pendiente a visto hay que añadir una opinión
	* Para pasar de visto a pediente, el campo opinión debe estar vacio
	