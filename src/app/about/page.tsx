// src/app/about/page.tsx
export default function About() {
  return (
    <div className="container mx-auto py-16 px-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-10">About Me</h1>
      
      <p className="text-lg leading-relaxed mb-6">
        I'm a passionate full-stack developer with 3+ years of experience building modern web applications. 
        I enjoy turning complex problems into simple, beautiful and intuitive solutions.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        My current focus is on Next.js, TypeScript, Tailwind CSS, PostgreSQL/Prisma and building performant, 
        SEO-friendly applications that provide great user experience.
      </p>

      <p className="text-lg leading-relaxed">
        When I'm not coding, you can find me reading sci-fi, playing guitar or exploring new coffee shops.
      </p>
    </div>
  );
}