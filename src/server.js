import express from 'express'

// Defining the route port of the application
const PORT = process.env.PORT || 2222;

// setup express
/*
The app.use() function adds a new middleware to the app. Essentially, 
whenever a request hits your backend, Express will execute the functions 
you passed to app.use() in order.
*/
const app = express();

/* 
express.json() is a built in middleware function in Express starting from v4.16.0. 
It parses incoming JSON requests and puts the parsed data in req.body.
*/
app.use(express.json())

app.get("/", (req, res) => {
    const status = {
        "Greeting":"Hellooo!"
    }
    
    res.send(status.Greeting);
})

app.get("/api/", (req, res) => {
    const data = fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => res.send(json))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});