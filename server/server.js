import express from 'express';
import migration from './Database/models';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import Students from './API/Students/routes';
dotenv.config();
const app = express();

// Log all requests to file, but errors to console
app.use(morgan('dev'));

app.use(bodyParser.json());

// Définition des CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

migration.connection
  .authenticate()
  .then(() => console.log('database connected...'))
  .catch(err => console.log(`Error:${err}`));

// Index Rout

app.use('/api/students', Students);

app.use(express.static(path.join(__dirname + '/../build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});
app.get('/*/*', function(req, res) {
  res.redirect('/notFound');
});
export default app;
