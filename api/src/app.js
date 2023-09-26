const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;










/* 
*cookie-parser: es un middleware que se utiliza para analizar las cookies incluidas en las solicitudes HTTP que llegan al servidor. Las cookies se utilizan comúnmente para mantener el estado de la sesión del usuario, rastrear la información del usuario y realizar otras tareas de seguimiento o autenticación.

*ayuda a tu aplicación Node.js a analizar las cookies que llegan con las solicitudes HTTP, convirtiéndolas en un objeto JavaScript fácil de manejar. De esta manera, puedes acceder a las cookies enviadas por el cliente y tomar decisiones basadas en su contenido.


?bodyParser: s un middleware que se utiliza comúnmente en aplicaciones web Node.js para procesar los cuerpos de las solicitudes HTTP, especialmente en el contexto de solicitudes POST y PUT.

todo: morgan, se utiliza para registrar (log) información sobre las solicitudes HTTP que llegan al servidor, lo que facilita el seguimiento y la depuración de las solicitudes entrantes en una aplicación web. Puede registrar detalles como la URL, el método HTTP, el código de estado de respuesta y otros datos relacionados con las solicitudes y respuestas HTTP.

*/