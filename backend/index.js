const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});
app.use(express.json())
app.use('/api' ,require('./Routes/CreatUser'))
app.use('/api' ,require('./Routes/DisplayData'))
app.use('/api' ,require('./Routes/OrderData'))
app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.listen(port,()=>{
    console.log(`running in port ${port}`)
})