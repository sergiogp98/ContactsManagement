# Historias de usuario

## ¿Qué se pretede cubrir con este microservicio?

Hoy en día el consumo de contenido multimedia se ha disparado gracias a la aparición de empresas tales como Netflix, HBO, Amazos Prime, etc. Por ello cada vez es más dificl recordar por qué temporada ibas de tal serie o incluso que te pareció aquella película. Como hipotetica empresa TIC, un grupo de críticos de cine nos piden crear un microservicio web que se pueda desplegar en la nube con el cual puedan organizar las películas que ven y poder valorarlos para luego publicar dichas críticas.

En concreto, el cliente pide que el microservicio les permita guardar información de aquellas películas que ha visto (con su correspondiente cŕitica) y aquellas que tienen pendientes de ver

### Datos manejados
* Película:
	* _id (ID de la película)
	* Título
	* Año de estreno
	* Duración
	* Género
	* Resumen
	* Director
* Review:
	* Nickname (clave primaria)
	* ID de película (clave primaria)
	* Opinión
	* Estado: pendiente o vista

### Requisitos funcionales
* RF1 Añadir una película: esta función almacena una película. Aserciones
	* No puede haber dos películas con el mismo ID
* RF2 Modificar una película: esta función modifica los datos de una película. Aserciones:
	* Existe la película (almacenada en la base de datos)
	* No se puede modificar el ID
* RF3 Devolver una película: esta función devolverá la información de una película. Aserciones:
	* Se podrá consultar por cualquier campo
* RF4 Elminar una película: esta función elimina una película. Aserciones:
	* Existe la película (almacenada en la base de datos)
* RF5 Añadir una review: esta función añade una review de un usuario. Aserciones:
	* Si el estado es visto, el campo opinion no puede estar vacio
	* Si el estado es pendiente, el campo opinión tiene que estar vacio
	* No puede haber dos reviews con el mismo nickname e ID de película
* RF5 Modificar una review: esta función modifica el estado de una review. Aserciones:
	* Se busa por ambos campos: nickname e ID de película
	* Si pasa de pendiente a vista, el campo de opinión no puede estar vacio
	* Si pasa de vista a pendiente, el campo de opinión tiene que estar vacio
* RF6 Devolver review: esta función devuelve la review. Aserciones:
	* Se podrá consultar por cualquier campo
* RF7 Eliminar review: esta función elimina uan review:
	* Existe l review (almacenada en la base de datos)
	
	