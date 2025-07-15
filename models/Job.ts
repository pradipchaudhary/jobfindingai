// models/Job.ts
import mongoose, { Schema, model, models } from 'mongoose'

const jobSchema = new Schema({
  title: String,
  company: String,
}, { timestamps: true })

export const Job = models.Job || model('Job', jobSchema)
