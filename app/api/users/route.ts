import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(request: NextRequest) {
    try {
        // Connect to the database
        await connectToDatabase();
        // Parse the request body   
        const body = await request.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json({ success: false, error: "Name and email are required" }, { status: 400 });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ success: false, error: "User already exists" }, { status: 409 });
        }
        // Create a n}ew user
        const newUser = new User({ name, email });
        await newUser.save();

        return NextResponse.json({ success: true, user: newUser }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ success: false, error: "Failed to create user" }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        // Connect to MongoDB
        await connectToDatabase();

        // Fetch all users from MongoDB
        const users = await User.find({}) // Remove __v field (optional)

        // Return success response
        return NextResponse.json(
            { success: true, users },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching users:', error);

        return NextResponse.json(
            { success: false, error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
}