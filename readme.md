# 🦍🦁**ZooDB**🦁🦍

## Descripcion del proyecto

<justify>El proyecto "ZooDB" es una plataforma de gestión integral diseñada para facilitar y mejorar la administración de un zoológico. La plataforma está basada en una API desarrollada con las tecnologías MongoDB, Express, y Node.js que permite a los administradores del zoológico manejar de manera eficiente y centralizada todas las operaciones relacionadas con los animales, empleados, exhibiciones, entradas, comentarios y valoraciones.</justify>

## Progreso del proyecto

### 📚Fase de Planificacion📚

- [x] Investigar el funcionamiento de un zoologico.

- [x] Identificar las funcionalidades principales en las que se divide el funcionamiento del zoologico.

- [x] Establecer la estructura de la base de datos necesaria para cada funcionalidad.

- [x] Definir los endpoints necesarios para cada funcionalidad.

### 🚧👷Fase de Desarrollo👷🚧

- [x] Configuracion de dependencias a utilizar.

- [x] Creacion de los scripts necesarios para cada coleccion, incluyendo los schemas de estas.

- [x] Implementacion de roles para limitar los accesos a la API

- [x] Realizacion de pruebas para la comprobacion de funcionamiento correcto de la API

- [x] Creacion de documentacion clara y concisa (esta se debe ir actualizacon al progreso de cada uno de los anteriores pasos)

## Funcionamiento de un zoologico:

<justify>El presente proyecto basara su estructura en el siguiente concepto de funcionamiento de un zoologico:</justify>

<justify>El funcionamiento puede dividirse en 5 sectores o funcionalidades principales, gestion de animales, gestion de empleados, gestion de exhibiciones e infraestructura, gestion de entradas y gestion de visibilidad, cada uno de estos sectores sera descrito acontinuacion:</justify>

1. **Gestión de Animales:** Esta funcionalidad se encarga de administrar todos los aspectos relacionados con los animales en el zoológico. Incluye el registro y seguimiento de la salud, alimentación, hábitat y reproducción de los animales. También puede involucrar la catalogación de especies, la programación de tratamientos médicos y la coordinación con veterinarios y expertos en cuidado animal. La gestión de animales asegura que los animales en el zoológico reciban el cuidado necesario para su bienestar.

2. **Gestión de Empleados:** Esta función se ocupa de supervisar el personal del zoológico. Incluye la gestión de horarios, asignación de tareas, seguimiento de capacitaciones y evaluación del desempeño de los empleados. También puede abarcar la contratación de nuevo personal, la gestión de beneficios y la comunicación interna. La gestión de empleados es esencial para garantizar que el equipo del zoológico funcione de manera eficiente y cohesiva.

3. **Gestión de Exhibiciones e Infraestructura:** En esta función se manejan las instalaciones físicas del zoológico, así como la planificación y creación de exhibiciones para los visitantes. Incluye la coordinación de construcciones, mantenimiento de instalaciones, diseño de hábitats adecuados para los animales y la creación de entornos educativos y atractivos para los visitantes. La gestión de exhibiciones e infraestructura asegura que los animales vivan en condiciones óptimas y que los visitantes tengan una experiencia agradable y educativa.

4. **Gestión de Entradas:** Esta funcionalidad se encarga de la venta y seguimiento de entradas para los visitantes del zoológico. Incluye la implementación de sistemas de venta de boletos, precios, promociones y la generación de ingresos. También puede abarcar la planificación de eventos especiales y la gestión de grupos. La gestión de entradas garantiza un flujo constante de visitantes y contribuye a la sostenibilidad financiera del zoológico.

5. **Gestión de Visibilidad:** Esta función se refiere a la promoción y marketing del zoológico. Incluye la creación de estrategias de publicidad, presencia en redes sociales, colaboración con medios de comunicación y desarrollo de programas educativos. También puede abarcar la interacción con la comunidad local y la promoción de la conservación y la importancia de la biodiversidad. La gestión de visibilidad busca aumentar la conciencia pública sobre el zoológico y su misión.

## Funcionalidades Destacadas:

1. **Gestión de Animales:**
   Los administradores pueden agregar nuevos animales al zoológico, proporcionando detalles como su nombre, especie, hábitat y una descripción. También pueden actualizar información existente y eliminar registros.

2. **Gestión de Empleados:**
   Los datos de los empleados del zoológico se registran y gestionan en la plataforma. Esto incluye información sobre su puesto, fecha de inicio y otros detalles relevantes.

3. **Gestión de Exhibiciones:**
   Cada exhibición en el zoológico se registra en la plataforma con su nombre, descripción y una lista de los animales que se encuentran en ella. Los horarios de alimentación y otras actividades también pueden ser gestionados aquí.

4. **Venta de Entradas:**
   Los visitantes pueden adquirir diferentes tipos de entradas, con opciones como entradas para adultos, niños y grupos. Los precios y la disponibilidad se gestionarán también.

5. **Comentarios y Valoraciones:**
   Los visitantes tienen la opción de dejar comentarios y valoraciones sobre su experiencia en el zoológico. Estos comentarios ayudan a los administradores a mejorar los servicios y la experiencia general.

## Flujo de Trabajo:

1. Un administrador accede a ZooDB con su respectivo rol.

2. El administrador puede agregar, editar o eliminar información sobre animales, empleados, exhibiciones, entradas, etc., según sea necesario.

3. Los visitantes del zoológico pueden comprar entradas en línea o de manera presencial seleccionando el tipo de entrada y la fecha deseada.

4. Después de la visita, los visitantes pueden dejar comentarios y valoraciones en la plataforma para compartir su experiencia.

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"user":"admin","password":"admin123","database": "db_zoologico_campus"}
        MY_SERVER={"hostname":"127.20.30.1", "port":5005}
        JWT_PRIVATE_KEY="claves3cret4"

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.mongodb` que esta ubicado en la carpeta utils dentro de la carpeta src. Ya sea en alguna extensión de tu editor de texto que te permita hacer conexión a tu base local o en tu programa de preferencia puedes copiar y pegar el script.
**Recuerda que para usar tu propio cluster, debes cambiar el link ubicado en _src/utils/connect.js_, si usarás el cluster que trae por defecto, no es necesario correr el script**

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Autorización

Para ejecutar correctamente los endpoints, debes obtener el token de cada tabla antes de hacer la consulta, por lo que en el apartado de los endpoints dejaremos escrita la url a ejecutar antes, y debes copiar el token en el header de autorización, además de copiar correctamente un header de aceptación de versión con la versión de endpoint que vas a usar. También dejaremos esto descrito en cada endpoint

## Versiones

Según el tipo de consulta que vayas a usar, debes poner en el header la versión a la que vayas a acceder:

- Versión 1.0.0: GET y POST
- Versión 2.0.0: PUT y DELETE

Recuerda poner en el header **Accept-Version : X.0.0**

## Endpoints GET y DELETE

RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`.

Los datos acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

### Endpoints GET

1.  Lista de tipos de alimentación

    - Authorization: `http://127.20.30.1:5005/token/alimentacion`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerTiposAlimentacion`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarTiposAlimentacion?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 5 resultados",
            "result": [
               {
                     "id": 2,
                     "tipo": "prueba middleware"
               },
               {
                     "id": 3,
                     "tipo": "omnívora"
               },
               {
                     "id": 4,
                     "tipo": "a1z"
               },
               {
                     "id": 5,
                     "tipo": "carnivora"
               },
               {
                     "id": 6,
                     "tipo": "prueba middleware"
               }
            ]
         }
      ```

1.  Lista de tipos de alimentación por id

    - Authorization: `http://127.20.30.1:5005/token/alimentacion`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerTiposAlimentacion?id=3`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 2,
                     "tipo": "prueba middleware"
               }
            ]
         }
      ```

1.  Lista de animales

    - Authorization: `http://127.20.30.1:5005/token/animales`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerAnimales`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarAnimal?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 5 resultados",
            "result": [
               {
                     "Id": 1,
                     "Nombre": "Prueba",
                     "Especie": 2,
                     "HistorialSalud": 2,
                     "Alimentacion": 2,
                     "Habitat": 2,
                     "Reproduccion": {
                        "gestacion": "100 días",
                        "camadas_anuales": 1,
                        "promedio_crias": 2
                     }
               },
               {
                     "Id": 3,
                     "Nombre": "Jirafa",
                     "Especie": 3,
                     "HistorialSalud": 3,
                     "Alimentacion": 3,
                     "Habitat": 3,
                     "Reproduccion": {
                        "gestacion": "450 días",
                        "camadas_anuales": 1,
                        "promedio_crias": 1
                     }
               },
               {
                     "Id": 4,
                     "Nombre": "León",
                     "Especie": 1,
                     "HistorialSalud": 1,
                     "Alimentacion": 1,
                     "Habitat": 1,
                     "Reproduccion": {
                        "gestacion": "90 días",
                        "camadas_anuales": 1,
                        "promedio_crias": 3
                     }
               },
               {
                     "Id": 5,
                     "Nombre": "aaaaaaaaaaa",
                     "Especie": 1,
                     "HistorialSalud": 1,
                     "Alimentacion": 0,
                     "Habitat": 1,
                     "Reproduccion": {
                        "gestacion": "20 días",
                        "camadas_anuales": 1,
                        "promedio_crias": 3
                     }
               },
               {
                     "Id": 6,
                     "Nombre": "Prueba",
                     "Especie": 2,
                     "HistorialSalud": 2,
                     "Alimentacion": 2,
                     "Habitat": 2,
                     "Reproduccion": {
                        "gestacion": "100 días",
                        "camadas_anuales": 1,
                        "promedio_crias": 2
                     }
               }
            ]
         }
      ```

1.  Lista de animales por id

    - Authorization: `http://127.20.30.1:5005/token/animales`
    - URL: `http://127.20.30.1:5005/api/get/obtenerAnimales?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "nombre": "Jirafa",
                     "especie": 3,
                     "estadoSalud": "En recuperacion",
                     "tipoAlimentacion": "omnívora",
                     "tipoHabitat": "sabana africana",
                     "descripcionHabitat": "llanura exteeeensa",
                     "eventos": [
                        {
                           "_id": "64ebccadf277024cd0d0355c",
                           "id": 3,
                           "historialId": 3,
                           "empleadoId": "3677888222",
                           "fecha_evento": "2023-09-01T14:00:00.000Z",
                           "descripcion": "Visitantes en el área restringida",
                           "recomendaciones": "Reforzar la seguridad"
                        },
                        {
                           "_id": "64ed3ae28735205f3c7f1ad4",
                           "id": 4,
                           "historialId": 3,
                           "empleadoId": "3677888222",
                           "fecha_evento": "2023-09-01T00:00:00.000Z",
                           "descripcion": "Visitantes en el área restringida",
                           "recomendaciones": "Reforzar la seguridad"
                        }
                     ]
               }
            ]
         }
      ```

1.  Lista de boletas

    - Authorization: `http://127.20.30.1:5005/token/boletas`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerBoletas`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarBoleta?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 4 resultados",
            "result": [
               {
                     "id": 1,
                     "lista": 2,
                     "tipo": 2,
                     "cantidad": 2
               },
               {
                     "id": 3,
                     "lista": 1,
                     "tipo": 2,
                     "cantidad": 5
               },
               {
                     "id": 4,
                     "lista": 1,
                     "tipo": 1,
                     "cantidad": 1
               },
               {
                     "id": 5,
                     "lista": 1,
                     "tipo": 2,
                     "cantidad": 2
               }
            ]
         }
      ```

1.  Lista de boletas por id

    - Authorization: `http://127.20.30.1:5005/token/boletas`
    - URL: `http://127.20.30.1:5005/api/get/obtenerBoletas?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "lista": 1,
                     "tipo": 2,
                     "cantidad": 5
               }
            ]
         }
      ```

1.  Lista de capacitaciones

    - Authorization: `http://127.20.30.1:5005/token/capacitaciones`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerCapacitaciones`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarCapacitaciones?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 3,
                     "seguimiento": 3,
                     "nombre": "Entrenamiento",
                     "fecha": "2023-09-20T00:00:00.000Z",
                     "descripcion": "Capacitación en técnicas de conservación de la fauna"
               },
               {
                     "id": 4,
                     "seguimiento": 1,
                     "nombre": "asdsa",
                     "fecha": "1970-01-01T00:00:00.000Z",
                     "descripcion": "sadasdsadsadsadsadsa"
               },
               {
                     "id": 5,
                     "seguimiento": 1,
                     "nombre": "sdasdas",
                     "fecha": "2023-09-03T04:24:01.000Z",
                     "descripcion": "2023-09-02 23:24:01"
               }
            ]
         }
      ```

1.  Lista de capacitación por id

    - Authorization: `http://127.20.30.1:5005/token/capacitaciones`
    - URL: `http://127.20.30.1:5005/api/get/obtenerCapacitaciones?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "seguimiento": 3,
                     "nombre": "Entrenamiento",
                     "fecha": "2023-09-20T00:00:00.000Z",
                     "descripcion": "Capacitación en técnicas de conservación de la fauna"
               }
            ]
         }
      ```

1.  Lista de citas médicas

    - Authorization: `http://127.20.30.1:5005/token/citasMedicas`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerCitasMedicas`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarCitaMedica?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
         "message": "se han encontrado 4 resultados",
         "result": [
            {
                  "id": 2,
                  "idHistorialSalud": 2,
                  "fecha_cita": "2023-08-29T19:00:00.000Z",
                  "descripcion": "Cita de seguimiento",
                  "id_veterinario": "2088776555"
            },
            {
                  "id": 3,
                  "idHistorialSalud": 3,
                  "fecha_cita": "2023-08-30T00:00:00.000Z",
                  "descripcion": "Cita ",
                  "id_veterinario": "3078634444"
            },
            {
                  "id": 4,
                  "idHistorialSalud": 1,
                  "fecha_cita": "1970-01-01T00:00:00.000Z",
                  "descripcion": "sadasdsadsadsadsadsa",
                  "id_veterinario": "1111111111"
            },
            {
                  "id": 5,
                  "idHistorialSalud": 2,
                  "fecha_cita": "2023-08-29T00:00:00.000Z",
                  "descripcion": "Cita de seguimiento",
                  "id_veterinario": "2088776555"
            }
         ]
      }
      ```

1.  Lista de cita médica por id

    - Authorization: `http://127.20.30.1:5005/token/citasMedicas`
    - URL: `http://127.20.30.1:5005/api/get/obtenerCitasMedicas?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "idHistorialSalud": 3,
                     "fecha_cita": "2023-08-30T00:00:00.000Z",
                     "descripcion": "Cita ",
                     "id_veterinario": "3078634444"
               }
            ]
         }
      ```

1.  Lista de empleados

    - Authorization: `http://127.20.30.1:5005/token/empleado`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerEmpleados`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarEmpleado?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 2 resultados",
            "result": [
               {
                     "id": "5432109876",
                     "nombre": "Carlos Rodríguez",
                     "fecha_contratacion": "2022-03-20T00:00:00.000Z",
                     "id_seguimiento": 3,
                     "fecha_creacion_seguimiento": "2023-08-27T00:00:00.000Z",
                     "fecha_actualizacion_seguimiento": "2023-08-17T00:00:00.000Z",
                     "idPuesto": 1,
                     "nombrePuesto": "prueba",
                     "salario": 520000
               },
               {
                     "id": "1111111111",
                     "nombre": "Juana Pérez",
                     "fecha_contratacion": "2022-01-15T00:00:00.000Z",
                     "id_seguimiento": 1,
                     "fecha_creacion_seguimiento": "2023-08-08T00:00:00.000Z",
                     "fecha_actualizacion_seguimiento": "2023-08-08T00:00:00.000Z",
                     "idPuesto": 1,
                     "nombrePuesto": "prueba",
                     "salario": 45000
               }
            ]
         }
      ```

1.  Lista de empleados por id

    - Authorization: `http://127.20.30.1:5005/token/empleados`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEmpleados?id=1111111111`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
      {
         "message": "se han encontrado 1 resultados",
         "result": [
            {
                  "id": "1111111111",
                  "nombre": "Juana Pérez",
                  "fecha_contratacion": "2022-01-15T00:00:00.000Z",
                  "id_seguimiento": 1,
                  "fecha_creacion_seguimiento": "2023-08-08T00:00:00.000Z",
                  "fecha_actualizacion_seguimiento": "2023-08-08T00:00:00.000Z",
                  "idPuesto": 1,
                  "nombrePuesto": "prueba",
                  "salario": 45000
            }
         ]
      }
      ```

1.  Lista de estado habitat

    - Authorization: `http://127.20.30.1:5005/token/estadoHabitat`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerEstadoHabitat`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarEstadoHabitat?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 2,
                     "descripcion": "Requiere mantenimiento"
               },
               {
                     "id": 3,
                     "descripcion": "En construción"
               },
               {
                     "id": 4,
                     "descripcion": "En construcción"
               }
            ]
         }
      ```

1.  Lista de estado habitat por id

    - Authorization: `http://127.20.30.1:5005/token/estadoHabitat`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEstadoHabitat?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
      {
         "message": "se han encontrado 1 resultados",
         "result": [
            {
                  "id": 3,
                  "descripcion": "En construción"
            }
         ]
      }
      ```

1.  Lista de estado salud

    - Authorization: `http://127.20.30.1:5005/token/estadoSalud`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerEstadosSalud`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarEstadoSalud?id=3`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 6 resultados",
            "result": [
               {
                     "_id": "64ebccaaf277024cd0d03544",
                     "id": 2,
                     "estado": "En tratamiento"
               },
               {
                     "_id": "64ebccaaf277024cd0d03545",
                     "id": 3,
                     "estado": "En recuperacion"
               },
               {
                     "_id": "64ebccaaf277024cd0d03546",
                     "id": 4,
                     "estado": "Estado critico"
               },
               {
                     "_id": "64ebccaaf277024cd0d03547",
                     "id": 5,
                     "estado": "Muerto"
               },
               {
                     "_id": "64ed18f30ac5bd7a735ab3f2",
                     "id": 6,
                     "estado": "En tratamienaaato"
               },
               {
                     "_id": "64f3aea6300a106c77bff5f6",
                     "id": 7,
                     "estado": "prueba"
               }
            ]
         }
      ```

1.  Lista de estado salud por id

    - Authorization: `http://127.20.30.1:5005/token/estadoSalud`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEstadosSalud?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": {
               "id": 3,
               "estado": "En recuperacion"
            }
         }
      ```

1.  Lista de evaluación de desempeño

    - Authorization: `http://127.20.30.1:5005/token/evaluacionDesempeno`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerEvaluacionesDesempeno`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarEvaluacionDesempeno?id=3`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 1,
                     "seguimiento": 1,
                     "fecha": "2023-09-25T00:00:00.000Z",
                     "jefe": "1234567890",
                     "descripcion": "Evaluación de desempeño trimestral"
               },
               {
                     "id": 2,
                     "seguimiento": 2,
                     "fecha": "2023-09-30T00:00:00.000Z",
                     "jefe": "9876543210",
                     "descripcion": "Evaluación de desempeño anual"
               },
               {
                     "id": 3,
                     "seguimiento": 3,
                     "fecha": "2023-10-05T00:00:00.000Z",
                     "jefe": "5432109876",
                     "descripcion": "Evaluación de desempeño semestral"
               }
            ]
         }
      ```

1.  Lista de evaluación de desempeño por id

    - Authorization: `http://127.20.30.1:5005/token/evaluacionDesempeno`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEvaluacionesDesempeno?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result":
            {
               "id": 3,
               "seguimiento": 3,
               "fecha": "2023-10-05T00:00:00.000Z",
               "jefe": "5432109876",
               "descripcion": "Evaluación de desempeño semestral"
            }
         }
      ```

1.  Lista de eventos

    - Authorization: `http://127.20.30.1:5005/token/eventos`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerEventos`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarEvento?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 4 resultados",
            "result": [
               {
                     "id": 2,
                     "historialId": 2,
                     "empleadoId": "2599777333",
                     "fecha_evento": "2023-08-31T00:00:00.000Z",
                     "descripcion": "Lluvia intensa en el hábitat de lo leones",
                     "recomendaciones": "Verificar el drenaje"
               },
               {
                     "id": 3,
                     "historialId": 3,
                     "empleadoId": "3677888222",
                     "fecha_evento": "2023-09-01T14:00:00.000Z",
                     "descripcion": "Visitantes en el área restringida",
                     "recomendaciones": "Reforzar la seguridad"
               },
               {
                     "id": 4,
                     "historialId": 3,
                     "empleadoId": "3677888222",
                     "fecha_evento": "2023-09-01T00:00:00.000Z",
                     "descripcion": "Visitantes en el área restringida",
                     "recomendaciones": "Reforzar la seguridad"
               },
               {
                     "id": 5,
                     "historialId": 1,
                     "empleadoId": "1526684995",
                     "fecha_evento": "2023-09-02T22:08:28.737Z",
                     "descripcion": "testing",
                     "recomendaciones": "testing"
               }
            ]
         }
      ```

1.  Lista de eventos por id

    - Authorization: `http://127.20.30.1:5005/token/eventos`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEventos?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "historialId": 3,
                     "empleadoId": "3677888222",
                     "fecha_evento": "2023-09-01T14:00:00.000Z",
                     "descripcion": "Visitantes en el área restringida",
                     "recomendaciones": "Reforzar la seguridad"
               }
            ]
         }
      ```

1.  Lista de facuras entrada

    - Authorization: `http://127.20.30.1:5005/token/facturaEntrada`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerFacturasEntrada`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarFacturasEntrada?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 4 resultados",
            "result": [
               {
                     "id": 2,
                     "fecha": "2023-09-03T03:23:59.000Z",
                     "visitante": "1234567890",
                     "precio": 55,
                     "evento": false,
                     "precioDescuento": 0,
                     "listaBoletas": 1
               },
               {
                     "id": 3,
                     "fecha": "2023-08-27T00:00:00.000Z",
                     "visitante": "0987654321",
                     "precio": 75,
                     "evento": true,
                     "precioDescuento": 0,
                     "listaBoletas": 2
               },
               {
                     "id": 4,
                     "fecha": "2023-09-03T03:23:59.000Z",
                     "visitante": "1234567890",
                     "precio": 55,
                     "evento": false,
                     "precioDescuento": 0,
                     "listaBoletas": 1
               },
               {
                     "id": 5,
                     "fecha": "2023-09-03T03:23:59.000Z",
                     "visitante": "1234567890",
                     "precio": 55,
                     "evento": false,
                     "precioDescuento": 0,
                     "listaBoletas": 1
               }
            ]
         }
      ```

1.  Lista de factura de entrada por id

    - Authorization: `http://127.20.30.1:5005/token/facturaEntrada`
    - URL: `http://127.20.30.1:5005/api/get/obtenerFacturasEntrada?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "fecha": "2023-08-27T00:00:00.000Z",
                     "visitante": "0987654321",
                     "precio": 75,
                     "evento": true,
                     "precioDescuento": 0,
                     "listaBoletas": 2
               }
            ]
         }
      ```

1.  Lista de habitats

    - Authorization: `http://127.20.30.1:5005/token/habitat`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerHabitats`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarHabitat?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 6 resultados",
            "result": [
               {
                     "id": 2,
                     "tipo": "selva tropical",
                     "descripcion": "entorno exuberante",
                     "idHistorial": 2,
                     "idZona": 2
               },
               {
                     "id": 3,
                     "tipo": "sabana africana",
                     "descripcion": "llanura exteeeensa",
                     "idHistorial": 3,
                     "idZona": 3
               },
               {
                     "id": 4,
                     "tipo": "sabana africana",
                     "descripcion": "llanura extensa",
                     "idHistorial": 3,
                     "idZona": 3
               },
               {
                     "id": 5,
                     "tipo": "sabana africana",
                     "descripcion": "llanura extensa",
                     "idHistorial": 3,
                     "idZona": 3
               },
               {
                     "id": 6,
                     "tipo": "acuario",
                     "descripcion": "zona húmeda",
                     "idHistorial": 1,
                     "idZona": 1
               },
               {
                     "id": 7,
                     "tipo": "acuario",
                     "descripcion": "zona húmeda",
                     "idHistorial": 1,
                     "idZona": 1
               }
            ]
         }
      ```

1.  Lista de habitat por id

    - Authorization: `http://127.20.30.1:5005/token/habitat`
    - URL: `http://127.20.30.1:5005/api/get/obtenerHabitats?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "tipo": "sabana africana",
                     "descripcion": "llanura exteeeensa",
                     "idHistorial": 3,
                     "idZona": 3
               }
            ]
         }
      ```

1.  Lista de historiales de salud

    - Authorization: `http://127.20.30.1:5005/token/historialesSalud`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerHistorialesSalud`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarHistorialesSalud?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 3,
                     "estadoSalud": "En recuperacion",
                     "fecha_apertura": "2023-08-27T00:00:00.000Z",
                     "ultima_modificacion": "2023-08-17T00:00:00.000Z"
               },
               {
                     "id": 4,
                     "estadoSalud": "En recuperacion",
                     "fecha_apertura": "2023-08-27T00:00:00.000Z",
                     "ultima_modificacion": "2023-08-27T00:00:00.000Z"
               },
               {
                     "id": 5,
                     "estadoSalud": "En recuperacion",
                     "fecha_apertura": "2023-08-27T00:00:00.000Z",
                     "ultima_modificacion": "2023-08-17T00:00:00.000Z"
               }
            ]
         }
      ```

1.  Lista de historiales de salud por id

    - Authorization: `http://127.20.30.1:5005/token/historialesSalud`
    - URL: `http://127.20.30.1:5005/api/get/obtenerHistorialesSalud?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "estadoSalud": "En recuperacion",
                     "fecha_apertura": "2023-08-27T00:00:00.000Z",
                     "ultima_modificacion": "2023-08-17T00:00:00.000Z"
               }
            ]
         }
      ```

1.  Lista de historial eventos

    - Authorization: `http://127.20.30.1:5005/token/historialEventos`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerHistorialesEvento`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarHistorialEvento?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 4 resultados",
            "result": [
               {
                     "id": 1,
                     "fecha_creacion": "2023-09-03T06:02:07.000Z",
                     "ultima_modificacion": "2023-09-03T06:02:07.000Z"
               },
               {
                     "id": 2,
                     "fecha_creacion": "2023-08-27T22:22:37.267Z",
                     "ultima_modificacion": "2023-08-27T22:22:37.267Z"
               },
               {
                     "id": 3,
                     "fecha_creacion": "2023-08-27T22:22:37.361Z",
                     "ultima_modificacion": "2023-08-27T22:22:37.361Z"
               },
               {
                     "id": 4,
                     "fecha_creacion": "2023-08-29T00:00:00.000Z",
                     "ultima_modificacion": "2023-08-29T00:00:00.000Z"
               }
            ]
         }
      ```

1.  Lista de historial eventos por id

    - Authorization: `http://127.20.30.1:5005/token/historialEventos`
    - URL: `http://127.20.30.1:5005/api/get/obtenerHistorialesEvento?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "fecha_creacion": "2023-08-27T22:22:37.361Z",
                     "ultima_modificacion": "2023-08-27T22:22:37.361Z"
               }
            ]
         }
      ```

1.  Lista de horarios de alimentación y mantenimiento

    - Authorization: `http://127.20.30.1:5005/token/horariosAlimentacion`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerHorarAlMant`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarHorarAlMant?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
      {
         "message": "se han encontrado 2 resultados",
         "result": [
            {
                  "id": 2,
                  "habitat": 1,
                  "hora": "08:07",
                  "encargado": "0000000000",
                  "descripcion": "prueba"
            },
            {
                  "id": 3,
                  "habitat": 3,
                  "hora": "09:45",
                  "encargado": "3866554444",
                  "descripcion": "limpieza y mantenimiento"
            }
         ]
      }
      ```

1.  Lista de horarios de alimentación y mantenimiento

    - Authorization: `http://127.20.30.1:5005/token/horariosAlimentacion`
    - URL: `http://127.20.30.1:5005/api/get/obtenerHorarAlMant?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "habitat": 3,
                     "hora": "09:45",
                     "encargado": "3866554444",
                     "descripcion": "limpieza y mantenimiento"
               }
            ]
         }
      ```

1.  Lista de horarios trabajo

    - Authorization: `http://127.20.30.1:5005/token/horariosTrabajo`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerHorariosTrabajo`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarHorarioTrabajo?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 6 resultados",
            "result": [
               {
                     "id": 2,
                     "horaInicio": "12:00",
                     "horaFin": "20:00"
               },
               {
                     "id": 3,
                     "horaInicio": "09:00",
                     "horaFin": "17:00"
               },
               {
                     "id": 4,
                     "horaInicio": "07:30",
                     "horaFin": "15:30"
               },
               {
                     "id": 5,
                     "horaInicio": "10:00",
                     "horaFin": "18:00"
               },
               {
                     "id": 6,
                     "horaInicio": "12:00",
                     "horaFin": "18:00"
               },
               {
                     "id": 7,
                     "horaInicio": "06:20",
                     "horaFin": "12:50"
               }
            ]
         }
      ```

1.  Lista de horarios trabajo por id

    - Authorization: `http://127.20.30.1:5005/token/horariosTrabajo`
    - URL: `http://127.20.30.1:5005/api/get/obtenerHorariosTrabajo?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "horaInicio": "09:00",
                     "horaFin": "17:00"
               }
            ]
         }
      ```

1.  Lista de lista de boletas

    - Authorization: `http://127.20.30.1:5005/token/listaBoletas`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerListasBoletas`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarListaBoletas?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 2,
                     "factura": 4
               },
               {
                     "id": 3,
                     "factura": 2
               },
               {
                     "id": 4,
                     "factura": 1
               }
            ]
         }
      ```

1.  Lista de lista de boletas por id

    - Authorization: `http://127.20.30.1:5005/token/listaBoletas`
    - URL: `http://127.20.30.1:5005/api/get/obtenerListasBoletas?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "factura": 2
               }
            ]
         }
      ```

1.  Lista de planificacion de eventos

    - Authorization: `http://127.20.30.1:5005/token/planificacionEventos`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerPlanificacionesEventos`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarPlanificacionEventos?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 2,
                     "nombre": "Festival de aves tropicales",
                     "inicio": "2023-10-20T00:00:00.000Z",
                     "fin": "2023-10-23T00:00:00.000Z",
                     "idZona": 3,
                     "descripcion": "Un festivaaaal dedicado a las coloridas aves tropicales del zoológico."
               },
               {
                     "id": 3,
                     "nombre": "Festival de aves tropicales",
                     "inicio": "1970-01-01T00:00:00.000Z",
                     "fin": "1970-01-01T00:00:00.000Z",
                     "idZona": 3,
                     "descripcion": "Un festival dedicado a las coloridas aves tropicales del zoológico."
               },
               {
                     "id": 4,
                     "nombre": "prueba",
                     "inicio": "1970-01-01T00:00:00.000Z",
                     "fin": "1970-01-01T00:00:00.000Z",
                     "idZona": 1,
                     "descripcion": "dsakldnsads"
               }
            ]
         }
      ```

1.  Lista de planificacion de eventos por id

    - Authorization: `http://127.20.30.1:5005/token/planificacionEventos`
    - URL: `http://127.20.30.1:5005/api/get/obtenerPlanificacionesEventos?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "nombre": "Festival de aves tropicales",
                     "inicio": "1970-01-01T00:00:00.000Z",
                     "fin": "1970-01-01T00:00:00.000Z",
                     "idZona": 3,
                     "descripcion": "Un festival dedicado a las coloridas aves tropicales del zoológico."
               }
            ]
         }
      ```

1.  Lista de promociones

    - Authorization: `http://127.20.30.1:5005/token/promociones`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerPromociones`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarPromociones?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 2,
                     "nombre": "Día del Niño",
                     "descripcion": "Promoción especial para niños",
                     "descuento": 15,
                     "inicio": "2023-04-01T00:00:00.000Z",
                     "fin": "2023-04-10T00:00:00.000Z"
               },
               {
                     "id": 3,
                     "nombre": "Día del Niño",
                     "descripcion": "Promoción especial para niños",
                     "descuento": 15,
                     "inicio": "1970-01-01T00:00:00.000Z",
                     "fin": "1970-01-01T00:00:00.000Z"
               },
               {
                     "id": 4,
                     "nombre": "prueba",
                     "descripcion": "dsakldnsads",
                     "descuento": 15,
                     "inicio": "1970-01-01T00:00:00.000Z",
                     "fin": "1970-01-01T00:00:00.000Z"
               }
            ]
         }
      ```

1.  Lista de promociones por id

    - Authorization: `http://127.20.30.1:5005/token/promociones`
    - URL: `http://127.20.30.1:5005/api/get/obtenerPromociones?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "nombre": "Día del Niño",
                     "descripcion": "Promoción especial para niños",
                     "descuento": 15,
                     "fecha_inicio": "1970-01-01T00:00:00.000Z",
                     "fecha_fin": "1970-01-01T00:00:00.000Z"
               }
            ]
         }
      ```

1.  Lista de puestos

    - Authorization: `http://127.20.30.1:5005/token/puestos`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerPuestos`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarPuesto?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 4 resultados",
            "result": [
               {
                     "id": 1,
                     "nombre": "prueba",
                     "salario": 50000,
                     "horario": {
                        "_id": "64ebccaff277024cd0d03565",
                        "id": 2,
                        "hora_inicio": "12:00",
                        "hora_fin": "20:00"
                     }
               },
               {
                     "id": 3,
                     "nombre": "Asistente de Ventas",
                     "salario": 40000,
                     "horario": {
                        "_id": "64ebccaff277024cd0d03566",
                        "id": 3,
                        "hora_inicio": "09:00",
                        "hora_fin": "17:00"
                     }
               },
               {
                     "id": 4,
                     "nombre": "Veterinario",
                     "salario": 55000,
                     "horario": {
                        "_id": "64ebccaff277024cd0d03567",
                        "id": 4,
                        "hora_inicio": "07:30",
                        "hora_fin": "15:30"
                     }
               },
               {
                     "id": 6,
                     "nombre": "prueba",
                     "salario": 50000,
                     "horario": {
                        "_id": "64ebccaff277024cd0d03565",
                        "id": 2,
                        "hora_inicio": "12:00",
                        "hora_fin": "20:00"
                     }
               }
            ]
         }
      ```

1.  Lista de puestos por id

    - Authorization: `http://127.20.30.1:5005/token/puestos`
    - URL: `http://127.20.30.1:5005/api/get/obtenerPuestos?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "nombre": "Asistente de Ventas",
                     "salario": 40000,
                     "horario": {
                        "_id": "64ebccaff277024cd0d03566",
                        "id": 3,
                        "hora_inicio": "09:00",
                        "hora_fin": "17:00"
                     }
               }
            ]
         }
      ```

1.  Lista de seguimientos de empleado

    - Authorization: `http://127.20.30.1:5005/token/seguimientoEmpleado`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerSeguimientoEmpleados`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarSeguimientoEmpleado?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 4 resultados",
            "result": [
               {
                     "id": 1,
                     "creacion": "2023-08-08T00:00:00.000Z",
                     "actualizacion": "2023-08-08T00:00:00.000Z"
               },
               {
                     "id": 3,
                     "creacion": "2023-08-27T00:00:00.000Z",
                     "actualizacion": "2023-08-17T00:00:00.000Z"
               },
               {
                     "id": 4,
                     "creacion": "2023-08-27T00:00:00.000Z",
                     "actualizacion": "2023-08-27T00:00:00.000Z"
               },
               {
                     "id": 5,
                     "creacion": "2023-08-08T00:00:00.000Z",
                     "actualizacion": "2023-08-08T00:00:00.000Z"
               }
            ]
         }
      ```

1.  Lista de seguimientos de empleado por id

    - Authorization: `http://127.20.30.1:5005/token/seguimientoEmpleado`
    - URL: `http://127.20.30.1:5005/api/get/obtenerSeguimientoEmpleados?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "creacion": "2023-09-03T23:27:26.339Z",
                     "actualizacion": "2023-09-03T23:27:26.339Z"
               }
            ]
         }
      ```

1.  Lista de tipos de boleta

    - Authorization: `http://127.20.30.1:5005/token/tiposBoleta`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerTiposBoleta`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarTipoBoleta?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 1,
                     "tipo": "Adulto",
                     "precio": 20
               },
               {
                     "id": 2,
                     "tipo": "Niño",
                     "precio": 10
               },
               {
                     "id": 3,
                     "tipo": "Grupo",
                     "precio": 15
               }
            ]
         }
      ```

1.  Lista de tipos de boleta por id

    - Authorization: `http://127.20.30.1:5005/token/tiposBoleta`
    - URL: `http://127.20.30.1:5005/api/get/obtenerTiposBoleta?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
        {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "tipo": "Grupo",
                     "precio": 15
               }
            ]
         }
      ```

1.  Lista de zonas

    - Authorization: `http://127.20.30.1:5005/token/zonas`
    - URL GET: `http://127.20.30.1:5005/api/get/obtenerZonas`
    - URL DELETE: `http://127.20.30.1:5005/api/delete/eliminarZonas?id=3`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```
         {
            "message": "se han encontrado 3 resultados",
            "result": [
               {
                     "id": 1,
                     "nombre": "Zona de mamiferos selvaticos",
                     "descripcion": "Hábitat de los leones en el zoológico"
               },
               {
                     "id": 2,
                     "nombre": "Zona de agua",
                     "descripcion": "Hábitat de los pandas en el zoológico"
               },
               {
                     "id": 3,
                     "nombre": "Zona de las aves tropicales",
                     "descripcion": "Hábitat de aves tropicales en el zoológico"
               }
            ]
         }
      ```

1.  Lista de zonas por id

    - Authorization: `http://127.20.30.1:5005/token/zonas`
    - URL: `http://127.20.30.1:5005/api/get/obtenerZonas?id=3`
    - Método: `GET`
    - Datos de entrada (query): id a consultar.
    - Datos de salida:

      ```
       {
            "message": "se han encontrado 1 resultados",
            "result": [
               {
                     "id": 3,
                     "nombre": "Zona de las aves tropicales",
                     "descripcion": "Hábitat de aves tropicales en el zoológico"
               }
            ]
         }
      ```

## Endpoint POST y PUT

1.  Agregar o editar tipo de alimentación

    - Authorization: `http://127.20.30.1:5005/token/alimentacion`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarTipoAlimentacion`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarTipoAlimentacion`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
      {
         "id": 1,
         "tipo": "prueba middleware"
      }
      ```

1.  Agregar o editar animales

    - Authorization: `http://127.20.30.1:5005/token/animales`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarAnimal`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarAnimal`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
         "id": 1,
         "nombre": "Prueba",
         "especie": 2,
         "historialSalud": 2,
         "alimentacion": 2,
         "habitat": 2,
         "reproduccion": {
            "gestacion": "100 días",
            "camadas_anuales": 1,
            "promedio_crias": 2
            }
         }

      ```

1.  Agregar o editar boletas

    - Authorization: `http://127.20.30.1:5005/token/boletas`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarBoletas`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarBoleta`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id": 3,
            "lista": 1,
            "tipo": 2,
            "cantidad": 5
         }
      ```

1.  Agregar o editar capacitaciones

    - Authorization: `http://127.20.30.1:5005/token/capacitaciones`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarCapitacion`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarCapacitacion`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "seguimiento":1,
            "nombre": "sdasdas",
            "fecha": "2023-09-02 23:24:01",
            "descripcion": "2023-09-02 23:24:01"
         }
      ```

1.  Agregar o editar citas médicas

    - Authorization: `http://127.20.30.1:5005/token/citasMedicas`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarCitaMedica`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarCitaMedica`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "idHistorialSalud":1,
            "fecha_cita": "2023-08-08 08:08:08",
            "descripcion": "prueba",
            "id_veterinario": "1000000000"
         }
      ```

1.  Agregar o editar empleados

    - Authorization: `http://127.20.30.1:5005/token/empleado`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarEmpleado`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarEmpleado`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id": "0000000000",
            "nombre": "Prueba",
            "fecha_contratacion": "2022-01-15 00:00:00",
            "id_seguimiento": 1,
            "idPuesto": 1
         }
      ```

1.  Agregar o editar estado habitat

    - Authorization: `http://127.20.30.1:5005/token/estadoHabitat`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarEstadoHabitat`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarEstadoHabitat`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
      {
         "id": 1,
         "descripcionEstado":"sdadsa"
      }
      ```

1.  Agregar o editar estado de salud

    - Authorization: `http://127.20.30.1:5005/token/estadoSalud`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarEstadoSalud`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarEstadoSalud`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
        {
            "id":1,
            "estado": "prueba"
         }
      ```

1.  Agregar o editar evaluación de desempeño

    - Authorization: `http://127.20.30.1:5005/token/evaluacionDesempeno`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarEvaluacionDesempeno`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarEvaluacion`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":2,
            "seguimiento": 1,
            "fecha": "2023-09-25 00:00:00",
            "jefe": "1234567890",
            "descripcion": "Evaluación de desempeño trimestral"
         }
      ```

1.  Agregar o editar eventos

    - Authorization: `http://127.20.30.1:5005/token/eventos`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarEventos`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarEvento`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id": 2,
            "historialId": 2,
            "empleadoId": "2599777333",
            "fecha_evento": "2023-08-31T00:00:00.000Z",
            "descripcion": "Lluvia intensa en el hábitat de lo leones",
            "recomendaciones": "Verificar el drenaje"
         }
      ```

1.  Agregar o editar factura de entrada

    - Authorization: `http://127.20.30.1:5005/token/facturaEntrada`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarFacturaEntrada`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarFactura`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id": 2,
            "fecha": "2023-09-02 22:23:59",
            "visitante": "1234567890",
            "precio": 55,
            "evento": false,
            "precioDescuento": 0,
            "listaBoletas": 1
         }
      ```

1.  Agregar o editar habitat

    - Authorization: `http://127.20.30.1:5005/token/habitat`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarHabitat`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarHabitat`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "tipo": "acuario",
            "descripcion": "zona húmeda",
            "idHistorial": 1,
            "idZona": 1
         }
      ```

1.  Agregar o editar historiales de salud

    - Authorization: `http://127.20.30.1:5005/token/historialesSalud`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarHistorialSalud`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarHistorialSalud`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "idEstadoSalud": 1,
            "fecha_apertura": "2023-09-02 23:24:01",
            "ultima_modificacion": "2023-09-02 23:24:01"
         }
      ```

1.  Agregar o editar historiales de eventos

    - Authorization: `http://127.20.30.1:5005/token/historialEventos`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarHistorialEvento`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarHistorialEvento`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "fecha_creacion": "2023-09-03 01:02:07",
            "ultima_modificacion": "2023-09-03 01:02:07",
            "idEstadohabitat": 1
         }
      ```

1.  Agregar o editar horarios de alimentación

    - Authorization: `http://127.20.30.1:5005/token/horariosAlimentacion`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarHorariosAlimentacion`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarHorarioAlimentacion`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":2,
            "habitat": 1,
            "hora": "08:07",
            "encargado": "0000000000",
            "descripcion":"prueba"
         }
      ```

1.  Agregar o editar horarios de trabajo

    - Authorization: `http://127.20.30.1:5005/token/horariosTrabajo`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarHorarioTrabajo`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarHorarioTrabajo`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":2,
            "habitat": 1,
            "hora": "08:07",
            "encargado": "0000000000",
            "descripcion":"prueba"
         }
      ```

1.  Agregar o editar lista de boletas

    - Authorization: `http://127.20.30.1:5005/token/listaBoletas`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarListaBoletas`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarListaBoletas`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "factura":1
         }
      ```

1.  Agregar o editar planificación de eventos

    - Authorization: `http://127.20.30.1:5005/token/planificacionEventos`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarPlanificacionEvento`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarPlanificacionEventos`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "nombre": "prueba",
            "inicio": "2023-07-07",
            "fin": "2023-07-08",
            "idZona": 1,
            "descripcion": "dsakldnsads"
         }
      ```

1.  Agregar o editar promociones

    - Authorization: `http://127.20.30.1:5005/token/promociones`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarPromocion`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarPromociones`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
      {
      "id":1,
      "nombre": "prueba",
      "inicio": "2023-07-07",
      "fin": "2023-07-08",
      "descuento": 15,
      "descripcion": "dsakldnsads"
      }
      ```

1.  Agregar o editar puestos

    - Authorization: `http://127.20.30.1:5005/token/puestos`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarPuesto`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarPuesto`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
         "id":1,
         "nombre": "prueba",
         "salario": 50000,
         "idHorario": 2
         }
      ```

1.  Agregar o editar seguimiento de empleado

    - Authorization: `http://127.20.30.1:5005/token/seguimientoEmpleado`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarSeguimientoEmpleado`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarSeguimientoEmpleado`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id": 1,
            "creacion":"2023-08-08",
            "actualizacion": "2023-08-08"
         }
      ```

1.  Agregar o editar tipo de boletas

    - Authorization: `http://127.20.30.1:5005/token/tiposBoletas`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarTipoBoleta`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarTipoBoleta`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "tipo": "prueba",
            "precio":10000
         }
      ```

1.  Agregar o editar zonas

    - Authorization: `http://127.20.30.1:5005/token/zonas`
    - URL POST: `http://127.20.30.1:5005/api/post/agregarZona`
    - URL PUT: `http://127.20.30.1:5005/api/put/actualizarZona`
    - Notas: **En el metodo POST no es necesario poner id**
    - Datos de entrada (body):

      ```
         {
            "id":1,
            "nombre":"prueba",
            "descripcion":"testeando endpoints"
         }
      ```

#### Autores:

- Emily Nieves
- Andrés Elizalde
