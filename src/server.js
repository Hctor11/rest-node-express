import express from 'express'
import { PORT } from './config';
// setup express
/*
The app.use() function adds a new middleware to the app. Essentially, 
whenever a request hits your backend, Express will execute the functions 
you passed to app.use() in order.
*/
const app = express();
// express.json() is a built in middleware function in Express starting from v4.16.0. 
// It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


