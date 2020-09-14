const mongoose= require("mongoose");

const JokeSchema =  new mongoose.Schema(
    {
        setup: {
            type: String,
            require: [true, "{PATH} is required."],
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters."]
        },
        punchline: {
            type: String,
            require: [true, "{PATH} is a required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
        },
    },
    { timpestamps: true }
);

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;