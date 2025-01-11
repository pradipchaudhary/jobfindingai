// src/routes/projectRoutes.js
import express from "express";
import {
    createProject,
    getProjects,
    getProjectBySlug,
    updateProject,
    deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Route to create a new project
router.post("/", createProject);

// Route to get all projects
router.get("/", getProjects);

// Route to get a single project by slug
router.get("/:slug", getProjectBySlug);

// Route to update a project by id
router.put("/:id", updateProject);

// Route to delete a project by id
router.delete("/:id", deleteProject);

export default router;
