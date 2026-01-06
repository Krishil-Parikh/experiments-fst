// src/app/blog/page.tsx
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const posts = [
  {
    title: "What's New in Next.js 15 (January 2026 Update)",
    excerpt:
      "Turbopack improvements, better partial prerendering, React 19 support and many quality-of-life features.",
    date: "January 5, 2026",
    readTime: "7 min",
    slug: "nextjs-15-new-features",
  },
  {
    title: "Prisma vs Drizzle ORM – Real Production Comparison 2026",
    excerpt:
      "After using both heavily in production for almost a year – performance, DX, type-safety and migration experience.",
    date: "December 12, 2025",
    readTime: "10 min",
    slug: "prisma-vs-drizzle",
  },
  {
    title: "Building Fast & Beautiful UIs with shadcn/ui + Tailwind in 2026",
    excerpt:
      "Modern component library patterns, best practices and how I structure my component folders today.",
    date: "November 28, 2025",
    readTime: "8 min",
    slug: "shadcn-ui-2026",
  },
];

export default function Blog() {
  return (
    <Section className="bg-gray-50">
      <Container size="lg">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts, tutorials and deep-dives into modern web development
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} hoverable className="flex flex-col h-full">
              <Card.Content className="flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-3">
                  {post.date} • {post.readTime} read
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-700 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 p-0"
                  >
                    Read article →
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="#" variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </Container>
    </Section>
  );
}