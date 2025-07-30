import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, email, password } = body;

        // Validate input
        if (!username || !email || !password) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }
        // Connect to the database
        await connectToDatabase();

        // Check the database for an existing user
        const existingUser = await User.findOne({ email });

        // Check if user already exists 
        if (existingUser) {
            return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
        }


        // Here you would typically hash the password and save the user to your database
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        newUser.save();

        // For now, we will just return a success message
        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
    } catch (error) {
        console.error("Registration error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }

}