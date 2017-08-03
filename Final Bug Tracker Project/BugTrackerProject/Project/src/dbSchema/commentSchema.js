var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var commentSchema = new Schema({
    postId: {
        type: string
    },
    commentText: {
        type: string
    }
});

module.exports = mongoose.model("post", postSchema);

