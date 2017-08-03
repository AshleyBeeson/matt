var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var postSchema = new Schema({
    postId: {
        type: string
    },
    postTopic: {
        type: string
    }
});

module.exports = mongoose.model("post", postSchema);

