import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import swaggerTools from 'swagger-tools';
import swaggerDoc from './swagger.json';

const app = express();
const port = process.env.port || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/api', routes);
app.disable('etag');

const optionsSwagger = { swaggerUi: '/swagger.json', controllers: './controllers' };

swaggerTools.initializeMiddleware(swaggerDoc, middleware => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(optionsSwagger));
    app.use(middleware.swaggerUi());
    const server = app.listen(port, () => {
        let hostname = server.address().address;
        hostname = (hostname === '::' ? 'localhost' : hostname);
        console.log('Documentación Swagger en http://%s:%s/docs/', hostname, port);
    });
});
