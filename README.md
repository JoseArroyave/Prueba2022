# Configuración

### Librería de estilos

bootstrap: https://getbootstrap.com/docs/5.1/getting-started/introduction/

### BD

Nombre: gc_equipos <br>
Tabla: gce_caracteristicas

- gce_id: Idetificación única del computador
- gce_nombre_equipo: Nombre del equipo
- gce_board: Tipo de placa base
- gce_case: Modelo de la torre
- gce_procesador: Marca del procesador
- gce_grafica: Marca de la trajeta gráfica
- gce_ram: Tamaño total de ram
- gce_disco_duro: Modelo del disco duro
- gce_teclado: Tipo de teclado
- gce_mouse: Tipo de mouse
- gce_pantalla: Tamaño total de la pantalla
- gce_estado: Estado del registro (0. Inactivo, 1. Activo)

#### Instalación

(Xampp) cd C:\xampp\htdocs <br>
(Wamp) cd C:\wamp64\www <br>
git clone https://github.com/aospinagcg/Prueba2022Feb.git Prueba2022 <br>

#### Diseño

https://xd.adobe.com/view/abe67be2-dc70-489b-8cb3-dd24dc61f340-feb5/specs/

# Prueba aspirantes JavaScript y PHP

El proyecto de gestión de equipos permite registrar y listar las características de los computadores de la compañía, es necesario añadir las siguientes funciones al proyecto:

- Agregar una opción a la tabla que permita cambiar el estado de un computador, esta acción deberá verse reflejada en base de datos y en la tabla
- Agregar una regla de estilo a las filas con computadores inactivos, su color de fondo deberá ser rojo
- Actualizar el contenido de la tabla cuando se agregan nuevos computadores
- Agregar una opción a la tabla que permita actualizar los computadores, una vez seleccionado un computador en específico, se deben cargar en un formulario modificable los datos de éste, finalizado el proceso, deberá actualizar en base de datos y en la tabla las propiedades del compuador.
- Agregar una opción a la tabla que permita eliminar un computador, esta acción deberá verse reflejada en base de datos y en la tabla
- Desarrollar los elementos con base en el diseño asignado

Nota: Ninguna de las acciones descritas anteriormente deberá recargar la página

#### Instalación

(Xampp) cd C:\xampp\htdocs\Prueba2022 <br>
(Wamp) cd C:\wamp64\www\Prueba2022 <br>
composer install

#### Apertura

(Navegador) localhost/Prueba2022/views

# Prueba aspirantes Laravel

- Con base en el funcionamiento del código de PHP nativo, realizar migración del mismo para el framework de Laravel.
- Crear la definición de la tabla `gce_caracteristicas` en las migraciones.
- Crear modelo para la tabla `gce_caracteristicas`.
- Crear controlador para definir la lógica y métodos de `gce_caracteristicas`.
- Utilice el ORM Eloquent en todas las peticiones hacia la base de datos
- Crear API de servicios que retornen la información solicitada por el cliente => ANGULAR.

#### Instalación

(Xampp) cd C:\xampp\htdocs\Prueba2022\laravel <br>
(Wamp) cd C:\wamp64\www\Prueba2022\laravel <br>
composer install <br>
npm install

#### Apertura

(Consola) php artisan serve <br>
(Navegador) localhost:8000

# Prueba aspirantes Angular

- Con base en el funcionamiento del código de HTML Y Javascript, realizar migración del mismo para el framework de Angular.
- La regla de estilo de la fila deberá aplicarse por medio de una directiva
- El formulario de actualización debe crearse en un componente por separado y los datos del computador seleccionado deberán pasarse por decoradores Input
- Una vez actualizado el computador, deberá informar al componente app por medio del decorador Output
- Utilice formularios reactivos para la recolección y validación de información de registro y actualización
- La construcción de la tabla deberá hacerce en el html, por medio de la directiva ngFor
- Dentro de la tabla, utilice un pipe que convierta la inicial de cada una de las columnas siempre en mayúscula y el resto en minúscula
- Los servicios deberán consumir la información del API de Laravel

#### Instalación

(Xampp) cd C:\xampp\htdocs\Prueba2022\public\components <br>
(Wamp) cd C:\wamp64\www\Prueba2022\public\components <br>
npm install

#### Apertura

(Consola) ng serve <br>
(Navegador) localhost:4200

# Respuesta

Una vez finalizada la prueba, deberá subir el proyecto en su propio repositorio de git de forma pública y enviar el link al correo aospina@garantiascomnitarias.com,
con el asunto POSTULADO RED SOPORTE TECNOLÓGICO, además deberá incluir sus datos personales como nombre, cédula y contacto.
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo1', 'Board1', 'Case1', 'Procesador1', 'Grafica1', 'Ram1', 'SD1', 'Teclado1', 'Mouse1', 'Pantalla1', b'1');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo2', 'Board2', 'Case2', 'Procesador2', 'Grafica2', 'Ram2', 'SD2', 'Teclado2', 'Mouse2', 'Pantalla2', b'1');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo3', 'Board3', 'Case3', 'Procesador3', 'Grafica3', 'Ram3', 'SD3', 'Teclado3', 'Mouse3', 'Pantalla3', b'1');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo4', 'Board4', 'Case4', 'Procesador4', 'Grafica4', 'Ram4', 'SD4', 'Teclado4', 'Mouse4', 'Pantalla4', b'1');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo5', 'Board5', 'Case5', 'Procesador5', 'Grafica5', 'Ram5', 'SD5', 'Teclado5', 'Mouse5', 'Pantalla5', b'1');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo6', 'Board6', 'Case6', 'Procesador6', 'Grafica6', 'Ram6', 'SD6', 'Teclado6', 'Mouse6', 'Pantalla6', b'0');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo7', 'Board7', 'Case7', 'Procesador7', 'Grafica7', 'Ram7', 'SD7', 'Teclado7', 'Mouse7', 'Pantalla7', b'0');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo8', 'Board8', 'Case8', 'Procesador8', 'Grafica8', 'Ram8', 'SD8', 'Teclado8', 'Mouse8', 'Pantalla8', b'0');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo9', 'Board9', 'Case9', 'Procesador9', 'Grafica9', 'Ram9', 'SD9', 'Teclado9', 'Mouse9', 'Pantalla9', b'0');
INSERT INTO `gce_caracteristicas` (`gce_id`, `gce_nombre_equipo`, `gce_board`, `gce_case`, `gce_procesador`, `gce_grafica`, `gce_ram`, `gce_disco_duro`, `gce_teclado`, `gce_mouse`, `gce_pantalla`, `gce_estado`) VALUES (NULL, 'Equipo10', 'Board10', 'Case10', 'Procesador10', 'Grafica10', 'Ram10', 'SD10', 'Teclado10', 'Mouse10', 'Pantalla10', b'0');