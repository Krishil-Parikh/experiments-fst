// src/app/projects/page.tsx
export default function Projects() {
  return (
    <div className="container mx-auto py-16 px-6 max-w-5xl">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-3">TaskFlow – Project Management</h3>
          <p className="text-gray-700 mb-4">
            Modern task management app with real-time collaboration, drag & drop, 
            and dark mode. Built with Next.js 14, Supabase & Tailwind.
          </p>
          <div className="text-sm text-gray-500">Next.js • TypeScript • Supabase • Tailwind</div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-3">MovieMood</h3>
          <p className="text-gray-700 mb-4">
            Movie recommendation app that suggests films based on your current mood.
            Uses TMDB API and features beautiful UI/UX.
          </p>
          <div className="text-sm text-gray-500">React • Tailwind • TMDB API • Framer Motion</div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-3">Personal Finance Tracker</h3>
          <p className="text-gray-700 mb-4">
            Simple yet powerful expense tracker with charts and monthly reports.
          </p>
          <div className="text-sm text-gray-500">Next.js • Chart.js • Prisma • PostgreSQL</div>
        </div>
      </div>
    </div>
  );
}