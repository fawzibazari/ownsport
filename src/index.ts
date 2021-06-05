import express from 'express';

import './connect';

import routes from './routes';

const app = express();


app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Sa marche'));
