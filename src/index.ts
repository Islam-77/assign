import express, { Application } from 'express';
import carRoutes from './routes/car';
import userRoutes from './routes/user';
import interestsRoutes from './routes/interests';

const app: Application = express(); 
const port: number = 1234; 
const host: string = 'localhost'; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => { 
  res.send('Welcome to The Car Store API'); 
});

app.use(carRoutes); 
app.use(userRoutes); 
app.use(interestsRoutes); 

app.listen(port, host, () => { 
  console.log(`Server is running at http://${host}:${port}`); 
});
