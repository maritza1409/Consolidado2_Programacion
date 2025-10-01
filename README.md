# Consolidado2_Programacion
Desarrollo de crud 
1. Descripción de la aplicación y sus funcionalidades

La aplicación desarrollada es un sistema web con arquitectura backend + frontend que permite gestionar los productos de una pollería mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Funcionalidades principales:

Registrar productos con información como nombre, precio, categoría y stock.

Listar productos disponibles en la base de datos.

Editar productos para modificar precios, categorías o cantidades.

Eliminar productos que ya no estén en stock o no sean necesarios.

Conexión a MongoDB Atlas, permitiendo que los datos estén alojados en la nube y disponibles desde cualquier ubicación.

2. Desafíos de optimización encontrados

Durante el desarrollo se presentaron algunos retos técnicos que impactaron el rendimiento y la estabilidad de la aplicación:

Problemas de conexión con MongoDB Atlas, debido a configuraciones de red e IP.

Gestión de dependencias en Node.js, ya que faltaban librerías como express y mongoose.

Estructura inicial del backend, que no respondía en la raíz (/) y dificultaba comprobar si el servidor funcionaba.

Rendimiento en la carga de productos, ya que era necesario optimizar las consultas para evitar bloqueos en la base de datos.

3. Estrategias de optimización aplicadas

Para superar los desafíos, se aplicaron las siguientes estrategias:

Uso de Mongoose como ORM para mejorar la interacción con MongoDB y validar datos antes de guardarlos.

Implementación de CORS para permitir comunicación fluida entre frontend y backend.

Creación de rutas organizadas mediante express.Router() para separar la lógica del CRUD.

Optimización de consultas utilizando métodos eficientes como findByIdAndUpdate y findByIdAndDelete.

Uso de Nodemon para facilitar el desarrollo y reiniciar automáticamente el servidor tras cambios.

4. Herramientas y técnicas utilizadas

Lenguaje: JavaScript (Node.js + Express en backend).

Base de datos: MongoDB Atlas (base en la nube).

ORM: Mongoose.

Servidor de desarrollo: Nodemon.

Control de versiones: Git y GitHub.

Frontend: (en proceso) con consumo de API REST del backend.

5. Resultados de las optimizaciones (antes y después)
Aspecto	Antes	Después
Conexión a base de datos	Error ECONNREFUSED 127.0.0.1:27017	Conexión estable a MongoDB Atlas ✅
Dependencias	Faltaban librerías (express, mongoose)	Todas instaladas correctamente con npm install
Servidor	No mostraba confirmación al iniciar	Muestra mensajes de conexión y estado del servidor
CRUD	No implementado	Rutas definidas para crear, leer, actualizar y eliminar productos
6. Conclusiones

El proyecto permitió implementar una aplicación web CRUD con backend en Node.js y base de datos en MongoDB Atlas. A pesar de los retos iniciales de conexión y configuración, se aplicaron estrategias de optimización que mejoraron la estabilidad del sistema y facilitaron el desarrollo.
El trabajo continuará con la integración completa del frontend, pero la base sólida del backend ya está lista para extenderse.
