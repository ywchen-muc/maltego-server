const request = require('supertest');
const { app, server } = require('./server');

describe('TEST server.js', () => {
    afterAll(async () => {
        server.close();
      });

    it("GET / route , should return graphs", async () => {
        return request(app)
          .get("/")
          .expect(200)
          .then(res => {
            expect(res.body).toMatchSnapshot();
          });
    });
    
    it("GET /:id , should return graph where id=graph_1", async () => {
        const id = "grph_1";
        return request(app)
          .get(`/${id}`)
          .expect(200)
          .then(res => {
            expect(res.body).toMatchSnapshot();
          });
    });
    
    it("GET /:id , should return error message when graph with the specified id is not found", async () => {
        const id = 10;
        return request(app)
          .get(`/${id}`)
          .expect(400)
          .then(res => {
            expect(res.body).toMatchSnapshot();
          });
    });

    it("GET /node:searchfield , should return graph where contains node id=serachfield", async () => {
        const searchfield = "Node 3";
        return request(app)
          .get(`/node/${searchfield}`)
          .expect(200)
          .then(res => {
            expect(res.body).toMatchSnapshot();
          });
    });

    it("DELETE /:id , should return success message when id=graph_1 deleted", async () => {
        const id = "grph_1";
        return request(app)
          .delete(`/${id}`)
          .expect(200)
          .then(res => {
            expect(res.body).toMatchSnapshot();
          });
    });

    it("DELETE /:id , should return error message when graph with the specified id is not found", async () => {
        const id = 10;
        return request(app)
          .delete(`/${id}`)
          .expect(400)
          .then(res => {
            expect(res.body).toMatchSnapshot();
          });
    });

    it("POST / , should return the successfully inserted new graph object", async () => {
        const newGraph = {
            id: '',
            name: 'Grph_27',
            data: {}
        };

        return request(app)
            .post("/")
            .send(newGraph)
            .expect(200)
            .then(res => {
            expect(res.body).toMatchSnapshot();
            });
    });

    it("POST / , should return error if name is null", async () => {
        const newGraph = {
            id: '',
            name: null,
            data: {}
        };

        return request(app)
            .post("/")
            .send(newGraph)
            .expect(400)
            .then(res => {
            expect(res.body).toMatchSnapshot();
        });
    });
});