const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
// const fs = require('fs');
const shortid = require('shortid');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true})); 
// app.use(bodyParser.json());


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

processNodeLabel = (graphs) => {
    for(let i = 0; i< graphs.length; i++){
        let nodeList = graphs[i].data.nodes;
        for(let j =0; j < nodeList.length; j++){
                let convertedLabel = {
                        "label":{
                            "value": nodeList[j].label
                        }
                    };
                nodeList[j].style = convertedLabel;
    }
        graphs[i].data.nodes = nodeList;  
    }
    return graphs;
};
app.get('/', (req, res) => {
    // 5/21 10:32 modified the return:
    return res.status(200).json(processNodeLabel(graphData));
    // return res.status.send(graphData)
})

app.get('/:graphId', (req, res) => {
    const {graphId} = req.params;
    for (i = 0; i < graphData.length; i++) {
        if(graphData[i].id === graphId) {
            return res.status(200).json(graphData[i]);
        } 
    }
    return res.status(400).json('Not found');     
})

app.get('/node/:searchfield', (req, res) => {
    const {searchfield} = req.params;
    let matchedGraph = [];
    for(let i=0; i< graphData.length; i++){
        let graph = graphData[i]
        let nodeList = graph.data.nodes;
        for(let j=0; j< nodeList.length; j++){
            if(nodeList[j].label.toLowerCase()  === searchfield.toLowerCase()){
                matchedGraph.push(graph);
                break;
            }
        }
    }
    if(matchedGraph){
        return res.status(200).json(matchedGraph);
    } else {
        return res.status(400).json('Not found');
    }

    // graphData.forEach((graph) => {
    //   let nodeList= graph.data.nodes;
    //   console.log(graph);
    //   nodeList.filter( node => {
    //       console.log("I am searchfield: ",node.label);
    //     if(node.label.toLowerCase()  === searchfield.toLowerCase()){
    //         console.log(node.label," == ",searchfield);
    //         matchedGraph.push(graph);
    //     }
    //     return res.status(200).json(matchedGraph);
    //   });
    // });
    // return res.status(400).json('Not found');     
})

app.delete('/:id', (req, res) => {
    const {id} = req.params;
    for (i = 0; i < graphData.length; i++) {
        if(graphData[i].id === id) {
            graphData.splice(i, 1);
            // 5/21 10:16 modified the return: not return graphData
            // return res.send(graphData);
            return res.status(200).json({success: 'Graph deleted!'});
        }
    }
    return res.status(400).json({error: 'Graph not found'});
})

app.post('/', (req, res) => {
    const { name, data } = req.body;
    // 5/21 13:17 Add if statement for invalid name
    if (!name) {
        return res.status(400).json({error: "Invalid params"});
    }
    let newGraph = {
        // id: shortid.generate(),
        id: name.toLowerCase().split(' ').join('_'),
        name: name,
        data: data
    };
    // console.log(typeof(newGraph.id), typeof(newGraph.name));
    graphData.push(newGraph);
    // 5/21 10:13 modified the return: not return graphData
    // return res.send(graphData); 
    return res.status(200).json(newGraph); // TO DO: check the response
})

const server = app.listen(PORT, () =>{
    console.info(`App is now running on port ${PORT}!`)
});


module.exports = { app, server };