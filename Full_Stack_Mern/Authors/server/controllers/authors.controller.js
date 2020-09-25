const Author = require("../models/authors.model");

module.exports = {
    create: function (req, res) {
        Author.create(req.body)
            .then((author) => {
                res.json(author);
            })
            .catch((err) =>{
                res.status(400).json(err);
            })
    },
    getAll(req, res) {
        console.log("getAll executed");
        Author.find()
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    getOne(req, res) {
        console.log("getOne executed");
        Author.findById(req.params.id)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    delete(req, res) {
        Author.findByIdAndDelete(req.params.id)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
};