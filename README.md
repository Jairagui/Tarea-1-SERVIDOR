# Tarea-1
¿Qué problema intenta resolver una arquitectura en capas?
R:Es básicamente lo que vimos en clase que si quieres cambiar algo del backend, no tengas que cambiar todo el sistema, sino solamente la capa, función o información que sea necesaria.
¿Qué consecuencias tendría colocar toda la lógica en el Controller?
R:Pues mucho, la verdad. Cuando quieres cambiar algo o incluso leer el código que alguien más te pasa, se vuelve muy complejo y difícil de entender. Además, las funciones empiezan a crecer y crecer. Y si necesitas la misma lógica en otro endpoint, tendrías que copiar y pegar todo. Por eso es mejor tenerlo separado y organizado.
¿Qué ventaja obtienes al separar la lógica de negocio del acceso a datos?
R:Pues mucho, la verdad. Cuando quieres cambiar algo o incluso leer el código que alguien más te pasa, se vuelve muy complejo y difícil de entender. Además, las funciones empiezan a crecer y crecer. Y si necesitas la misma lógica en otro endpoint, tendrías que copiar y pegar todo. Por eso es mejor tenerlo separado y organizado.
Si cambiaras PostgreSQL por MongoDB, ¿qué componentes deberían modificarse?
R:Justo como decía en la pregunta pasada, profe. En mi caso, solo cambiaría el Repository, porque ahí es donde están las consultas. Tendría que modificar sus cinco funciones para que trabajen con Mongo en vez de SQL.
¿Existe una arquitectura "perfecta" para cualquier sistema? ¿Por qué?
R:Y la respuesta es muy simple, profe . Todo depende del caso y de lo que se necesite.Por ejemplo, para una API de libros, estas cuatro capas están bien. Pero para algo más pequeño podrían ser demasiado, y para un sistema mucho más grande probablemente no serían suficientes. Entonces, siempre depende del proyecto.
¿En qué momento agregar más capas puede comenzar a generar complejidad innecesaria?
R:Por ejemplo, cuando solo agrego capas que no hacen nada y únicamente pasan la información, se vuelven capas de paso. Solo voy agregando más y más capas, pero no aportan nada. Ahí es cuando el sistema se vuelve más complejo sin necesidad.
