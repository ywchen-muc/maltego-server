const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());

let graphData = [
    {
        "id": "grph_1",
        "name": "Graph 1",
        "data": {
            "nodes": [{
                "id": "nd_1",
                "label": "Node 1"
            }, {
                "id": "nd_2",
                "label": "Node 2"
            },{
                "id": "nd_3",
                "label": "Node 3"
            },{
                "id": "nd_4",
                "label": "Node 4"
            }],
            "edges": [{
                "source": "nd_1",
                "target": "nd_2"
            }, {
                "source": "nd_1",
                "target": "nd_3"
            }, {
                "source": "nd_1",
                "target": "nd_4"
            }]
        }
    },     {
        "id": "grph_2",
        "name": "Graph 2",
        "data": {
            "nodes": [{
                "id": "nd_1",
                "label": "Node 1"
            }, {
                "id": "nd_2",
                "label": "Node 2"
            }],
            "edges": [{
                "source": "nd_1",
                "target": "nd_2"
            }]
        }
    },     {
        "id": "grph_3",
        "name": "Graph 3",
        "data": {
            "nodes": [{
                "id": "nd_1",
                "label": "Node 1"
            }, {
                "id": "nd_2",
                "label": "Node 2"
            },{
                "id": "nd_3",
                "label": "Node 3"
            },{
                "id": "nd_4",
                "label": "Node 4"
            },{
                "id": "nd_5",
                "label": "Node 5"
            },{
                "id": "nd_6",
                "label": "Node 6"
            }],
            "edges": [{
                "source": "nd_1",
                "target": "nd_2"
            }, {
                "source": "nd_1",
                "target": "nd_3"
            }, {
                "source": "nd_1",
                "target": "nd_4"
            }, {
                "source": "nd_1",
                "target": "nd_5"
            }]
        }
    }
];
// fs.readFile('./data.json', 'utf8', (err, data) => {
//     // TODO: try catch
//     if(err) {
//         console.log(err);
//     }
//     graphData = JSON.parse(data);
// })


app.get('/', (req, res) => {
    return res.send(graphData)
})

app.get('/:id', (req, res) => {
    const {id} = req.params;
    for (i = 0; i < graphData.length; i++) {
        if(graphData[i].id === id) {
            return res.json(graphData[i]);
        } 
    }
    return res.status(400).json('Not found');     
})

app.delete('/:id', (req, res) => {
    const {id} = req.params;
    for (i = 0; i < graphData.length; i++) {
        if(graphData[i].id === id) {
            graphData.splice(i, 1);
            return res.status(204);
        }
    }
    return res.status(404).json({error: 'Graph not found'});
})

app.listen(3001);