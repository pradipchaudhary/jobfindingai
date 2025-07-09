<p align="center">
  <img src="./public/logo.png" alt="JobFindingAI Logo" width="180"/>
</p>

<h1 align="center">JobFindingAI</h1>

<p align="center"><b>AI-powered intelligent job discovery engine</b></p>

---

## 📌 Executive Summary

**JobFindingAI** is a private, proprietary project designed to leverage AI and real-time data to transform the way individuals discover job opportunities. By integrating advanced resume parsing, machine learning matching algorithms, and live job market insights, the system offers hyper-personalized job recommendations that are efficient, accurate, and relevant.

This project is part of my portfolio showcasing skills in full-stack architecture, AI integration, and real-world problem solving in the HRTech space.

---

## 🧠 Key Capabilities

| Functionality                    | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| 🧾 Resume Intelligence           | Extracts user skills, experience, and intent using OpenAI NLP               |
| 🧠 AI Matching Engine            | Maps candidate profiles to job listings using semantic vector matching      |
| 🌐 Job Market Crawler            | Scrapes live data from job platforms like MeroJob and JobsNepal             |
| 🔎 Smart Search & Filters        | Advanced search with relevance scoring, filters, and keyword matching       |
| 📬 Weekly Recommendation Engine  | Scheduled job curation and email dispatch (in development)                 |
| 📈 Scalable Microservice APIs    | Secure and scalable backend using Node.js and MongoDB                      |

---

## ⚙️ Tech Stack & Architecture

| Layer          | Technology                                      |
|----------------|--------------------------------------------------|
| Frontend       | Next.js + Tailwind CSS *(coming soon)*          |
| Backend API    | Node.js, Express.js, TypeScript                 |
| Database       | MongoDB Atlas (Mongoose ODM)                   |
| AI Layer       | OpenAI (GPT-4, embeddings), NLP parsing         |
| Scraping Engine| Cheerio, Puppeteer                              |
| Deployment     | Render (backend), MongoDB Atlas (database)      |

Architecture follows a clean modular service-based approach, enabling independent scaling of scraping, AI, and API services.

---

## 🔐 Security & Compliance

- 🔒 All API routes protected by JWT and role-based middleware (in progress)
- 📁 .env environment separation for secrets & keys
- 🧪 Unit-tested routes and services using Jest and Supertest
- ⛑️ Future-proofed for GDPR-compliant data storage & anonymization

---

## 📁 Project Modules Overview

