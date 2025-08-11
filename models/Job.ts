// models/Job.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  link: string;
  logo?: string;
}

const JobSchema: Schema<IJob> = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  link: { type: String, required: true, unique: true }, // unique to avoid duplicates
  logo: { type: String },
});

const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
