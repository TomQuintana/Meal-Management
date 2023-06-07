import express  from 'express';
import morgan from 'morgan';
import routesMeal from './src/routes/meals.routes';

const app = express();

app.use(morgan('dev'));

app.use('/api/meal', routesMeal);

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000');
});
