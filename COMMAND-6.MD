# Commands & Steps – Experiment 6  
MongoDB (local) + Mongoose + CRUD for Blog Posts (Next.js App Router)

## Goal
Replace in-memory storage with real local MongoDB  
Implement full CRUD for blog posts collection

## 1. Install Mongoose

```bash
npm install mongoose
# or
yarn add mongoose
# or
pnpm add mongoose

### GET all blog posts
GET http://localhost:3000/api/blogs

###

### CREATE blog post (all required fields)
POST http://localhost:3000/api/blogs
Content-Type: application/json

{
  "title": "Building with Local MongoDB in 2026",
  "slug": "local-mongodb-nextjs-2026",
  "excerpt": "How to connect Next.js to local MongoDB with Mongoose...",
  "content": "Full article content here. Supports markdown **bold** *italic* etc...",
  "tags": ["mongodb", "mongoose", "nextjs"],
  "published": true
}

###

### GET single post (use real _id from previous response)
GET http://localhost:3000/api/blogs/67a123456789abcdef123456

###

### UPDATE post
PUT http://localhost:3000/api/blogs/67a123456789abcdef123456
Content-Type: application/json

{
  "excerpt": "Updated short preview..."
}

###

### DELETE post
DELETE http://localhost:3000/api/blogs/67a123456789abcdef123456