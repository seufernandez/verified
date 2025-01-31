import express from 'express';
import messageRoutes from './routes/message.routes';
import dotenv from "dotenv";
import ErrorHandler from './middlewares/errorHandler.middleware';
import { setupSwagger } from './config/swagger.config';

dotenv.config();

const app = express();
app.use(express.json());

setupSwagger(app);

app.use('/messages', messageRoutes);

app.use(ErrorHandler);

export default app;
