# Consigna
Este punto consiste en armar un API REST en Node.js. El mismo será utilizado en el ejercicio 2.
La funcionalidad de listado y filtrado de hoteles debe estar soportada por la API y
consumida en la aplicación cliente.
A la hora de diseñar la estructura de la aplicación, tener en cuenta factores como
escalabilidad, reutilización y separación de responsabilidades.
Uso de configuraciones para ajustar como se ejecuta la aplicación en entornos productivos
y de desarrollo.

# Iniciar Servidor Node.js

npm install
npm start

# Documentación Swagger

http://localhost:3001/docs/

# Resolución
Se utilizo el siguiente stack de tecnologías, librerias, middlewares para el mismo

    Node.js
    Express
    Bodyparser
    Babel
    ES6
    Swagger Tools
    Nodemon
    
# Estructura
Controllers: Controladores de la app, reciben el request y el response...
Routes: Rutas de la aplicación, divididas por endpoints para ser más práctico
Services: Servicios , simula la conexión a una bd para obtener la info de los hoteles, o otra API...
Swagger.json, contiene la documentacion que se utiliza en el swagger tools, define los tipos de objetos, respuesta,etc ..