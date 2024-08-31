import express from 'express';
import  "express-async-errors";
import peopleRouter from './routers/peopleRouter.js';
import dotenv from 'dotenv';
import connectDB from './utils/connectDB.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import eventRouter from './routers/eventRouter.js';
import invitationRouter from './routers/invitationRouter.js';
import cors from 'cors';
dotenv.config();


connectDB();
const app = express();
//fix cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json());
app.use('/people', peopleRouter);
app.use('/event', eventRouter);
app.use('/invitation', invitationRouter);


app.use(errorHandlerMiddleware);
app.use((req, res) => {
  res.status(404).json({
    message: 'NOT FOUND',
  });
});

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
    console.log(`server is listening on port http://localhost:${PORT}`)
});