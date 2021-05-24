# Maltego Interview Challenge - Server

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a backend service provides CRUD API with pre-existed graph data. It contains unit tests specific to the backend endpoints. They also extend functionality where needed

### Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Jest](https://jestjs.io/)



<!-- GETTING STARTED -->
## Getting Started

You could run this application by following below guideline

### Prerequisites

Please make sure you have npm installed with latest version in the environment.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ywchen-muc/maltego-server
   cd maltego-server
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Test service endpoints 
   ```sh
   npm test
   ```
4. Start the backend service locally
   ```sh
   npm start
   ```
5. Visit the service from browser
   ```sh
   http://localhost:3001/
   ```



<!-- USAGE EXAMPLES -->
## Usage

#### 0. Data
   ```json
   [
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
   ]
   ```

#### 1. Returns a list of all graphs.

You could visit browser and paste below URL to fetch all graph data
```sh
http://localhost:3001/
```
Or you could curl the endpoint via terminal
```console
curl -iX GET \ --url 'http://localhost:3001/'
```

#### 2. Returns a specific graph using the graph id

You could visit browser and paste below URL to fetch the specific graph data
```sh
http://localhost:3001/grph_3
```
Or you could curl the endpoint via terminal
```console
curl -iX GET \ --url 'http://localhost:3001/grph_3''
```
#### 3. Deletes a graph given a graph id.

Or you could curl the endpoint via terminal
```console
curl -iX DELETE --url 'http://localhost:3001/grph_2' --header 'Content-Type: application/json'
```
#### 4. Creates a new graph element with an empty data and id field

You could curl the endpoint via terminal
```console
curl -iX POST --url 'http://localhost:3001/' --header 'Content-Type: application/json' \
  --data ' {
      "name": "grph_27",
      "data": {
            "nodes":[],
             "edges":[]
      }
}'

```
#### 5. Get the graph that contains the requested node name

You could visit browser and pate below URL to fetch the specific graph data
Example: Node 5
```sh
http://localhost:3001/node/node%205
```

You could curl the endpoint via terminal
```console
curl -iX GET \ --url 'http://localhost:3001/node/node%205'
```



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazingFeature`)
3. Commit your Changes (`git commit -m 'Add some amazing features'`)
4. Push to the Branch (`git push origin feature/amazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact 

Email: [imv2w.muc@gmail.com](mailto:imv2w.muc@gmail.com])

My website: [viviennechen.me](https://www.viviennechen.me/)

Project Link: [https://github.com/ywchen-muc/maltego-server](https://github.com/ywchen-muc/maltego-server)
