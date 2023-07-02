import express from 'express';

// setup express
/*
The app.use() function adds a new middleware to the app. Essentially, 
whenever a request hits your backend, Express will execute the functions 
you passed to app.use() in order.
*/
const app = express();
app.use(express.json())

// Defining the route port of the application
const PORT = process.env.PORT || 2222;

