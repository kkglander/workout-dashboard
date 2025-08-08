const express = require("express");
const cors = require("cors");
const app = express();

const data = require("./data.json");
let heatmapdata, arrayofsunshine;

function deltaSquared(date, count) {
    return obj = {
        date:date,
        count:count
    };
}

app.use(cors());

app.get("/api/workouts", (req, res) => {
    res.json(data);
})

app.get("/api/heatmaptest", (req, res) => {
    let something = Object.entries(data).map(([key, value]) => {
        let date, count;
        date = (key.split(" "))[1]
        date = (date.split("/"))
        date = (`${date[2]}-${date[0]}-${date[1]}`)
        count = (Object.keys(value)).length;
        return deltaSquared(date, count)
    })
    heatmapdata = {userActivity:something}
    res.status(200).json(heatmapdata);
})

app.listen(3000, () => {//this is an arrow function
        console.log("live on http://100.91.90.9:3000");
})
