import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    uid: String,
    title: String,
    summary: String,
    description: String,
    category: String,
    status: String,
    remarks: String,
    owner: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    modifiedAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;