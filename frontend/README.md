# Consigna
Maquetar una página de resultado de hoteles, ver imágenes en el repo (solo mobile y desktop).
Consumir la API desarrollada en el ejercicio anterior, implementando las funcionalidades
necesarias para listar y filtar los hoteles.
Utilizar alguna librería o framework guiado por componentes ( AngularJS o Angular).
Utilizar algún package manager (npm, bower) para manejar dependencias externas.
Utilizar una grilla responsive o similar para el maquetado.
Optimizar todos los recursos para entornos productivos, (minificar, ofuscar, etc).

# Iniciar App

npm install
npm start

Esta configurado para que tome del package.json la url de la API Rest
modificarla en caso de levantar el servidor de node.js en otro puerto que no sea el 3001,
se agrega el proxy, para no tener problema de CORS

# Documentación de componentes

Se utilizó storybook https://storybook.js.org , para documentar los componentes que posee la aplicación.
Para utilizarla , correr el comando npm run storybook
Se puede acceder via http://localhost:9009

# Resolución
Se utilizo el siguiente stack de tecnologías, librerias, middlewares para el mismo

    React
    Redux
    Redux-Form
    React Router
    Redux-Saga
    Redux-Devtools
    PropTypes
    Styled Components
    Recompose
    Axios
    Boostrap 4
    Webpack
    ES6
    Storybook

# Estructura
Actions: Contiene las acciones a ejecutar
Components: Componentes de react stateless
Containers: Contenedores, que se comunican con redux para manejar el state
Servies: Servicios para consumir la API Rest creada en node.js
Constants: Contiene las constantes con los nombres de las acciones a utilizarse en el dispatcher...
