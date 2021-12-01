const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get("/user", (req, res, next) => {
    res.json({msg: "CORS enabled for all origins"})
    res.send("I've received your GET request")
})

app.post("/user", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log("REQUEST BODY: ", req.body);
    res.send(`I've received the following data: ${req.body.userName} - ${req.body.favBand} - ${req.body.whoBecome} `)
})

app.listen(PORT, ()=> {
    console.log(`App has been started on port ${PORT}`)
})