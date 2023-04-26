import express from 'express';
import ticket_router  from './routes/ticket';
import index_router from './routes/index';
import user_router from './routes/user';

import { config } from 'dotenv';

config();

const app = express();

app.use('/ticket', ticket_router);
app.use('/', index_router);

app.listen(process.env.HTTP_PORT, () => {
	console.log(`Server listening on ${process.env.HTTP_PORT}`);
	console.log(process.env);
});