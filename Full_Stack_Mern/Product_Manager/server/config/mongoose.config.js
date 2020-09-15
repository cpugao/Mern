const mongoose = require("mongoose");

module.exports = (db_name) => {
    mongoose.connect(`mongodb://localhost/${db_name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
        .then(() => {
            console.log(`Established a connection to the ${db_name}`);
        })
        .catch((err) => {
            console.log(`Something went wrong when connectiong to the ${db_name}`, err);
    });
}
