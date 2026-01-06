// src/app/blog/page.tsx
export default function Blog() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16">Blog</h1>

      <div className="max-w-3xl mx-auto space-y-12">
        <article className="group">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            <a href="/blog/nextjs-15-new-features">What&apos;s New in Next.js 15 (2026 Edition)</a>
          </h2>
          <div className="text-gray-500 text-sm mb-3">January 5, 2026 • 7 min read</div>
          <p className="text-gray-700 leading-relaxed">
            A deep dive into the latest features, improvements and best practices for Next.js 15...
          </p>
        </article>

        <article className="group">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            <a href="/blog/prisma-vs-drizzle">Prisma vs Drizzle ORM – Real World Comparison 2026</a>
          </h2>
          <div className="text-gray-500 text-sm mb-3">December 12, 2025 • 10 min read</div>
          <p className="text-gray-700 leading-relaxed">
            After using both in production for 8+ months, here&apos;s my honest take...
          </p>
        </article>
      </div>
    </div>
  );
}