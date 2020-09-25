const athleteController = require("../controllers/athletes.controller");

module.exports = (app) => {
    app.post("/api/athletes/create", athleteController.create);
    app.get("/api/athletes", athleteController.getAll);
    app.get("/api/athletes/:id", athleteController.getOne);
    app.delete("/api/athletes/:id", athleteController.delete);
    app.put("/api/athletes/:id", athleteController.update);
};