// src/routes/projectRoutes.js
import express from "express";
import {
    createProject,
    getProjects,
    getProjectBySlug, // Ensure this is imported
    updateProject,
    deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Route to create a new project
router.post("/", createProject);

// Route to get all projects
router.get("/", getProjects);

// Route to get a project by slug
router.get("/slug/:slug", getProjectBySlug);  // Add this route for fetching by slug

// Route to update a project by id
router.put("/:id", updateProject);

// Route to delete a project by id
router.delete("/:id", deleteProject);

export default router;
