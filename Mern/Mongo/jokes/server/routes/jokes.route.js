const jokes = require("../controllers/jokes.controller");

// function middlewareFunction(req, res, next){
//     console.log(2, req.body);
//     next();
// }

module.exports = app => {
    app.get("/api/jokes", jokes.getAll);
    app.get("/api/jokes", jokes.getSingle);
    app.post("/api/jokes", jokes.createJoke);
    app.put("/api/jokes/:_id", jokes.updateJoke);
    app.delete("/api/jokes/:_id", jokes.remove);
    app.get("/api/jokes/random", jokes.randomJoke);
}