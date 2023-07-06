import express from 'express';
import cors from 'cors';
import routerCategorias from './routes/categorias.routes.js';

const app = express();
app.set("port",4000);

app.use(cors());

app.use(express.json());
app.use("/home",express.static('../../frontend'));

app.use("/api/categorias",routerCategorias)



export default app;