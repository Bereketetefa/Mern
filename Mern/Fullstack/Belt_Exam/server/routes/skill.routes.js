console.log("skill.routes.js");

const skills = require("../controllers/skill.controller");

module.exports = app => {
    app.get("/api/skill", skills.getAll);
    app.post("/api/skill", skills.create);
    app.get("/api/skill/:_id", skills.getOne);
    app.put("/api/skill/:_id", skills.update);
    app.put("/api/skill/:_id", skills.like);
    app.delete("/api/skill/:_id", skills.remove);
}