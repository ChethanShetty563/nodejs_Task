import cors from 'cors';
import express from 'express';
import stockApi from './controller/stockApi';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', stockApi);

// Server listening on 3002 port
app.listen(3002, () => {
  console.log('Server listening on port 3002');
});
