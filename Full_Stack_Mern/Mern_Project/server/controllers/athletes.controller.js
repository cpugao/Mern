const Athlete = require("../models/athletes.model");

module.exports = {
    create: function (req, res) {
        Athlete.create(req.body)
            .then((athlete) => {
                res.json(athlete);
            })
            .catch((err) =>{
                res.status(400).json(err);
            })
    },
    getAll(req, res) {
        console.log("getAll executed");
        Athlete.find()
        .then((athletes) => {
            res.json(athletes);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    getOne(req, res) {
        console.log("getOne executed");
        Athlete.findById(req.params.id)
        .then((athlete) => {
            res.json(athlete);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    delete(req, res) {
        Athlete.findByIdAndDelete(req.params.id)
        .then((athlete) => {
            res.json(athlete);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update(req, res) {
        Athlete.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((athlete) => {
            res.json(athlete);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
};