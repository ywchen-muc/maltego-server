const express = require('express');
const fs = require('fs');

const app = express();

let graphData;
fs.readFile('./data.json', 'utf8', (err, data) => {
    // TODO: try catch
    if(err) {
        console.log(err);
    }
    graphData = JSON.parse(data);
})


app.get('/', (req, res) => {
    res.send(graphData);
})

app.listen(3000);