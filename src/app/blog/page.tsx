// src/app/blog/page.tsx
export default function Blog() {
  return (
    <div className="container mx-auto py-16 px-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      <div className="space-y-10">
        <article>
          <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600">
            <a href="/blog/nextjs-15-new-features">What's New in Next.js 15</a>
          </h2>
          <p className="text-gray-600 mb-2">December 18, 2025 • 6 min read</p>
          <p className="text-gray-700">
            A quick overview of the most important changes and new features in Next.js 15...
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600">
            <a href="/blog/prisma-vs-drizzle">Prisma vs Drizzle in 2026 – Which is better?</a>
          </h2>
          <p className="text-gray-600 mb-2">November 5, 2025 • 9 min read</p>
          <p className="text-gray-700">
            Comparing modern TypeScript ORMs after using both in production for 6+ months...
          </p>
        </article>
      </div>
    </div>
  );
}