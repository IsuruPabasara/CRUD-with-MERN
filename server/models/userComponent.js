import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var UserComponent = mongoose.model('UserComponent', userSchema);

export default UserComponent;