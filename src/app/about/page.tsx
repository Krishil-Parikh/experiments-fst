// src/app/about/page.tsx
export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 md:mb-12">About Me</h1>

        <div className="prose prose-lg md:prose-xl text-gray-700 leading-relaxed space-y-6">
          <p>
            I&apos;m a passionate full-stack developer with more than 3 years of experience creating modern, performant web applications.
          </p>

          <p>
            My current tech stack includes <strong>Next.js (App Router)</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, 
            Prisma/Supabase/PostgreSQL, and I love building beautiful UIs that feel fast and intuitive.
          </p>

          <p>
            Outside of coding, I enjoy playing acoustic guitar, reading sci-fi novels, exploring new hiking trails, and trying out different coffee shops.
          </p>
        </div>
      </div>
    </div>
  );
}