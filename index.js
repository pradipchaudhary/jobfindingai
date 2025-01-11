import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import blogRouter from "./routes/BlogRouter.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to the database
connectDB();

// Routes
app.use("/api/blogs", blogRouter); // Use the blog router
app.use("/api/projects", projectRoutes);

// Error handling for unmatched routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
