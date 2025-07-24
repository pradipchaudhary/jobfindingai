import mongoose, { Document, Schema } from 'mongoose';

// 1️⃣ TypeScript Interface
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;

    avatar?: string;
    resume?: string;

    skills?: string[];
    experience?: string;
    education?: string;

    preferences: {
        location?: string;
        jobType?: 'remote' | 'onsite' | 'hybrid';
        categories?: string[];
        salaryRange?: {
            min: number;
            max: number;
        };
    };

    matchedJobs: {
        jobId: mongoose.Types.ObjectId;
        matchedAt: Date;
        status: 'matched' | 'applied' | 'saved';
    }[];

    isVerified: boolean;
    profileCompleted: boolean;

    createdAt: Date;
    updatedAt: Date;
}

// 2️⃣ Mongoose Schema
const UserSchema: Schema = new Schema<IUser>(
    {
        username: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },

        avatar: { type: String },
        resume: { type: String },

        skills: [String],
        experience: { type: String },
        education: { type: String },

        preferences: {
            location: { type: String },
            jobType: { type: String, enum: ['remote', 'onsite', 'hybrid'] },
            categories: [String],
            salaryRange: {
                min: { type: Number },
                max: { type: Number },
            },
        },

        matchedJobs: [
            {
                jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
                matchedAt: { type: Date, default: Date.now },
                status: {
                    type: String,
                    enum: ['matched', 'applied', 'saved'],
                    default: 'matched',
                },
            },
        ],

        isVerified: { type: Boolean, default: false },
        profileCompleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

// 3️⃣ Export Model
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
