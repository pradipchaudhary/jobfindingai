import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectToDatabase()
        return NextResponse.json({
            success: true,
            message: "MongoDB connected successfully!"
        })
    }
    catch (error: any) {
        console.error("MongoDB connection error:", error.message)
        return NextResponse.json(
            {
                success: false,
                error: error.message
            }, { status: 500 }
        )
    }
}