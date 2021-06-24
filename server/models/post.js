import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    status:String,
    creator:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var Post = mongoose.model('Posts', postSchema);

export default Post;