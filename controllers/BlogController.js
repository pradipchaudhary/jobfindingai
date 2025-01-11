// controllers/BlogController.js
import Blog from "../models/Blog.js";

// Fetch all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch blogs",
            error: error.message,
        });
    }
};

// Fetch a single blog by ID
export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the blog",
            error: error.message,
        });
    }
};

// Fetch a single blog by slug
export const getBlogBySlug = async (req, res) => {
    try {
        const { slug } = req.params;  // Get the slug from the request params
        console.log("slug:", slug)
        const blog = await Blog.findOne({ slug });  // Find the blog by the slug field

        if (!blog) return res.status(404).json({ message: "Blog not found" });
        
        res.status(200).json(blog);  // Send the found blog as a response
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the blog by slug",
            error: error.message,
        });
    }
};

// Create a new blog
export const createBlog = async (req, res) => {
    try {
        const blogData = req.body;
        const newBlog = new Blog(blogData);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create blog",
            error: error.message,
        });
    }
};

// Update an existing blog
export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        if (!updatedBlog)
            return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update blog",
            error: error.message,
        });
    }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog)
            return res.status(404).json({ message: "Blog not found" });
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete blog",
            error: error.message,
        });
    }
};
