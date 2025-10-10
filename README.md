# Docs

## Backend

### API Rest

#### Definición

Una API REST es un puente entre el cliente y el servidor, que permite la comunicacion entre ambos mediante peticiones HTTP para realizar funciones de base de datos como CRUD(crear, leer, actualizar y borrar).

La información de peticiones que recibimos puede venir en cualquier formato como JSON, HTML, XTYL, etc. Con los encabezados podemos usar información importante, como identificadores, metadatos, autorizaciones, identificadores uniformes de recursos (URI), almacenamiento en cache, cookies y mucho mas.

#### Características

- Interfaz uniforme: cuando creamos peticiones HTTP tienen que ser muy parecidas entre ellas, pero cambiando los verbos de cada petición, que seran los que le daran distinto funcionamiento a cada una.

- Desacoplamiento cliente-servidor: las aplicaciones por parte del servidor y el cliente deberan ser independientes, la unica manera de interactuar será mediante peticiones HTTP.

- Sin estado: para hacer peticiones HTTP deberemos pasar toda la información necesaria dependiendo del verbo usado en la peticion, ya que no se usará ningún tipo de sesión.

- Capacidad de almacenamiento en caché: podremos aumentar la escalabilidad del servidor, ya que se almacenará en caché, tanto en servidor como en cliente y esto nos dará una disminución del tiempo de espera.

- Arquitectura del sistema en capas: para realizar la comunicación entre cliente y servidor, ya que no es de manera directa, sino que hay un bucle que usa diversas capaz para realizar toda la comunicación, de esta manera ni el cliente ni el servidor sabe si se estan comunicando con la aplicación final o con un intermediario.

#### Ventajas de su uso

- Flexibilidad: se pueden comunicar utilizando cualquier formato de información, esto se refiere a que pueden ser adaptadas a casi todas las aplicaciones, sin importar su formato, lenguaje y arquitectura.

- Escalabilidad: son muy escalables, pueden manejar y almacenar desde poca información hasta mucha, sin afectar a su eficiencia.

- Seguridad: se suele usar el token de autenticación, ya que estos son muy complicados de descifrar, ya que son únicos y pueden añadirse más metodos de autenticación, para hacerlo mucho más seguro. De esta manera la información y privacidad se vuelven más seguras y dificiles de hackear por ciberdelincuentes.

- Facilidad de uso: son muy sencillas de utilizar, aunque tu nivel de desarrollador web y programacion sea bajo, lo veras bastante intuitivo y facil de aprender y sí sabes tecnologías, como HTML,Python o JavaScript, lo tendrás mas sencillo.

#### Desventajas de su uso

- Incremento de dificultad: a pesar de ser sencillas de usar, API REST puede ser más compleja que otras APIs, y si no estas familiarizado con el diseño web, sera mas.

- Conexión web: todos los cambios que realices dentro de la API REST deben ser ejecutados en la web, no puede haber cambios sin conexión a internet.

- Eficiencia y flexibilidad variable: dependiendo de tu conexión a internet y de los servidores, puede ser más lenta tu API REST y en algunos casos pueden llegar a ser menos flexible que otras, por los principios de arquitectura que debes seguir.

### ORM

#### Definición

Es una herramienta que nos permite convertir los objetos de una aplicación a un formato adecuado para ser almacenados en base de datos, esto se lleva a cabo mediante la creación de una base de datos virtual, donde los datos van a quedarse vinculados con la base de datos final.

Para realizar todo lo mencionado anteriormente, seria necesario el uso de sentencias SQL para realizar todo, pero el ORM tambien sirve de traductor y asi nos evitamos tener que usar todo lo mencionado anteriomente, en caso de querer modificar una columna de nuestra base de datos, el ORM hará la parte más compleja mediante las indicaciones que le digamos nosotros y que el luego traducirá a sentencias SQL, esto facilita mucho el manejo de base de datos.

#### Ventajas de su uso

- Velocidad de desarrollo: evitamos tener que usar código SQL, por lo tanto el tiempo de desarrollo y costes se reducen.

- Sencillez: el ORM sirve de traductor SQL, por lo tanto a la hora de querer hacer peticiones a la base de datos lo tendremos mas fácil.

#### Ventajas de su uso

- lentitud: los ORM pueden ser lentos a veces

- complejidad: a la hora de querer hacer sentencias SQL que requieran información mas compleja de obtener, es mejor el uso de código SQL.

#### Ejemplos de ORM

- Hibernate (Java)
- Entity framework (.NET)
- Doctrine (PHP)
- SQLAlchemy (Python)
- TypeORM (JavaScript)

### Repository Pattern

#### Definición

El patron repositorio actua como un intermediario entre la capa de negocio de una aplicacion y la base de datos.

Usando este patron podremos acceder y manejar mejor la información de la base de datos y tendremos los conceptos mejor separados y limpios, haciendo que el código sea mas facil de mantener, testear y adaptarlo a cambios en la base de datos.

#### Ejemplo

Si nosotros estamos en una biblioteca y queremos encontrar un libro, no vamos a buscarlo por toda la biblioteca, ya que no sabemos donde podemos encontrarlo y en caso de hacerlo tardaremos mucho, entonces preguntaremos al bibliotecario a que nos ayude a encontrarlo, el bibliotecario sabe donde esta ese libro y nos lo puede dar sin que nosotros nos preocupemos de encontrar donde está.

#### Ventajas de su uso

- Se hace mas sencillo el manejo de la información permitiendo al resto de la aplicación interactuar con la información de una manera mas sencilla mediante una interfaz, esto facilita el mantenimiento y actualización del código.

- Separando el acceso a la información de la capa de negocio, el testing se vuelve mucho mas sencillo, puedes imitar el repositorio de manera mas sencilla permitiendonos testear otras partes de la aplicación de manera independiente.

- Separando la lógica del acceso a la información, el diseño del repositorio permite tener un codigo mas limpio y se vuelve mas sencillo el modificar y optimizar el acceso a la información, sin tener mucho impacto sobre toda la aplicacion.

#### Desventajas de su uso

- En aplicaciones pequeñas se pueden hacer las cosas mas complejas y hacer el código mas incomodo de desarrollar.

- Implementar este patron requiere tiempo para implementar interfaces y repositorios de clase, y esto puede retrasar el avance del proyecto.

#### Casos para usar el patron repositorio

- Aplicaciones web: es muy usado para manejar operaciones con la base de datos, se facilita el cambio de diferentes sistemas de bases de datos entre si

- APIs y servicios: organiza el acceso a la información y asegura las operaciones consistentes entre ellas.

- Sistemas grandes: Para sistemas complejos este patron ayuda a mantener el acceso a la informacion de manera ordenada, haciendo que el código sea mas facil de mantener.

- Lugar de testeo: Es útil para la clonación de repositorios en el testing, permitiendonos simular acceso a información sin tocar o poner en peligro la información asegurada.

- Migración de información: A la hora de mover información entre bases de datos, este patron nos permite hacerlo de manera más fluida mientras deja la aplicación intacta.