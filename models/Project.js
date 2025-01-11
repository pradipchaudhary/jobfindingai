// src/models/projectModel.js

import mongoose from "mongoose";

// Define the schema for Project
const projectSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, required: true },
        technologies: { type: [String], required: true },
        liveUrl: { type: String, required: true },
        githubUrl: { type: String, required: true },
        featured: { type: Boolean, default: false },
        gallery: { type: [String], default: [] },
        challenges: { type: [String], default: [] },
        solutions: { type: [String], default: [] },
        timeline: { type: String, required: true },
        role: { type: String, required: true },
        team: { type: [String], required: true },
        slug: { type: String, required: true, unique: true },
        status: {
            type: String,
            enum: ["completed", "in-progress", "planned"],
            required: true,
        },
    },
    { timestamps: true }
);

// Create a model from the schema
const Project = mongoose.model("Project", projectSchema);

export default Project;
