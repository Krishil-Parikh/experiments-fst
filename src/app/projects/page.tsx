// src/app/projects/page.tsx
export default function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center md:text-left">Projects</h1>

      <div className="grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "TaskFlow",
            description: "Modern project management tool with real-time collaboration, drag & drop, and beautiful UI.",
            tech: "Next.js 15 • Supabase • Tailwind • TypeScript",
          },
          {
            title: "MovieMood",
            description: "Movie recommendation platform that suggests films based on your current mood.",
            tech: "React • TMDB API • Framer Motion • Tailwind",
          },
          {
            title: "Finance Tracker",
            description: "Personal expense tracker with beautiful charts and monthly insights.",
            tech: "Next.js • Prisma • PostgreSQL • Recharts",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <p className="text-sm text-gray-500 font-medium">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}