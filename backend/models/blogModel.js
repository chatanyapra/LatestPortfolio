import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        validate: {
            validator: function (v) {
                return v.length <= 3;
            },
            message: 'You can only upload up to 3 images!',
        },
        required: true,
    },
    savedAt: {
        type: Date,
        default: Date.now,
    },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
