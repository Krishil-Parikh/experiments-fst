Implement API Routes in Next.js: Building CRUD Operations with GET, POST, PUT, and DELETE
Markdown# Commands & Steps – Experiment 4  
API Routes + CRUD Operations for Projects (Next.js App Router)

## Goal
Create full REST API for managing portfolio projects:
- GET    /api/projects        → list all
- POST   /api/projects        → create new
- GET    /api/projects/[id]   → get one
- PUT    /api/projects/[id]   → update
- DELETE /api/projects/[id]   → delete

Use in-memory storage (array + uuid) for simplicity

## 1. Folder structure creation

```bash
mkdir -p src/app/api/projects/[id]
mkdir -p src/data
Final structure:
textsrc/
├── app/
│   └── api/
│       └── projects/
│           ├── route.ts               # GET all + POST
│           └── [id]/
│               └── route.ts           # GET/PUT/DELETE one
└── data/
    └── projects.ts                     # in-memory data + helpers
2. Install uuid (for generating IDs)
Bashnpm install uuid
npm install --save-dev @types/uuid

### GET all projects
GET http://localhost:3000/api/projects

###

### CREATE new project
POST http://localhost:3000/api/projects
Content-Type: application/json

{
  "title": "New Admin Dashboard",
  "description": "Management panel for portfolio",
  "tech": ["Next.js", "Tailwind", "Prisma"]
}

###

### GET one project (replace with real id)
GET http://localhost:3000/api/projects/ccc54b79-56e2-43b8-a0ba-6b16517ddd6a

###

### UPDATE project
PUT http://localhost:3000/api/projects/ccc54b79-56e2-43b8-a0ba-6b16517ddd6a
Content-Type: application/json

{
  "title": "Updated Admin Dashboard"
}

###

### DELETE project
DELETE http://localhost:3000/api/projects/ccc54b79-56e2-43b8-a0ba-6b16517ddd6a

7. Important notes & common pitfalls

Data resets on every npm run dev restart (in-memory only)
Always await params in dynamic route handlers ([id])
Use absolute URL (http://localhost:3000/api/projects) when fetching from Server Components