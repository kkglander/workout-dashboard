const express = require("express");
const cors = require("cors");
const app = express();

const data = require("./data.json");

app.use(cors());

app.get("/fuck", (req, res) => {
    console.log("tickle me pink")
    res.json(data);
})

app.listen(3000, () => {//this is an arrow function
        console.log("live on http://100.91.90.9:3000");
})
