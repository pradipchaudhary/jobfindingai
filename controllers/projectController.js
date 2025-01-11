import Project from "../models/Project.js"; // Correct path with file extension
// Create a new project
const createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all projects
const getProjects = async (req, res) => {
  
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single project by slug
const getProjectBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        if (typeof slug !== 'string') {
            console.error("Slug is not a string:", slug);
            return res.status(400).json({ message: "Invalid slug format" });
        }

        console.log("Fetching project with slug:", slug);

        const project = await Project.findOne({ slug });

        if (!project) {
            console.log("No project found for slug:", slug);
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);  // Respond with the found project
    } catch (error) {
        console.error("Error in fetching project:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update a project by id
const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a project by id
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    createProject,
    getProjects,
    getProjectBySlug,
    updateProject,
    deleteProject,
};
