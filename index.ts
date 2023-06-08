import express  from 'express';
import morgan from 'morgan';
import swaggerJsonDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import routesMeal from './src/routes/meals.routes';
import { options } from './src/docs/swaggerOptions';
import conectarDB from './src/confif/db';

const app = express();
app.use(express.json());

dotenv.config();
//conectarDB()

const spect = swaggerJsonDoc(options);

app.use(morgan('dev'));

app.use('/api/meal', routesMeal);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spect));

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000');
});
