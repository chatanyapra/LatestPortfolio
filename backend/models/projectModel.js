import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    techStack: {
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v.length > 0;
            },
            message: 'Tech stack cannot be empty!',
        },
    },
    link: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(http|https):\/\/[^\s]+$/.test(v);
            },
            message: 'Please enter a valid URL!',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
