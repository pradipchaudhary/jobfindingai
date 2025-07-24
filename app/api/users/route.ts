import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        const body = await request.json();

        const {
            username,
            email,
            password,
            avatar,
            resume,
            skills,
            experience,
            education,
            preferences,
            matchedJobs,
            isVerified,
            profileCompleted
        } = body;

        if (!username || !email || !password) {
            return NextResponse.json(
                { success: false, error: "Username, email and password are required" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { success: false, error: "User already exists" },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            avatar,
            resume,
            skills,
            experience,
            education,
            preferences,
            matchedJobs,
            isVerified: isVerified ?? false,
            profileCompleted: profileCompleted ?? false,
        });

        await newUser.save();

        return NextResponse.json(
            { success: true, user: newUser },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            { success: false, error: "Failed to register user" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const users = await User.find().select("-password"); // Don't return password

        return NextResponse.json(
            { success: true, users },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}
