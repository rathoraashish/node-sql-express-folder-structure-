import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { requestLogger } from './middleware/requestLogger.js';

const app = express();

app.use(bodyParser.json());

// Use Morgan request logger middleware
app.use(requestLogger);

app.use('/api/users', userRoutes);

sequelize.sync();

export default app;
