const mongoose= require("mongoose");

const AthleteSchema =  new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: [true, "First name is required."],
            minlength: [3, "First name must be at least 3 characters."]
        },
        lastName: {
            type: String,
            require: [true, "Last name is required."],
            minlength: [3, "Last name must be at least 3 characters."]
        },
        snatch: {
            type: Number,
        },
        cleanAndJerk: {
            type: Number,
        },
        deadlift: {
            type: Number,
        },
        backsquat: {
            type: Number,
        }
    }, { timpestamps: true }
);

const Athlete  = mongoose.model("Athlete", AthleteSchema);

module.exports = Athlete;