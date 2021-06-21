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

var PostComponent = mongoose.model('PostComponent', postSchema);

export default PostComponent;