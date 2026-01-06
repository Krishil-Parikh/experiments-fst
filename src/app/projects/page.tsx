// src/app/projects/page.tsx
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "TaskFlow",
    description:
      "Modern project management tool with real-time collaboration, drag & drop, dark mode and beautiful UI/UX.",
    tech: "Next.js 15 • Supabase • Tailwind • TypeScript • Realtime",
    href: "#", // placeholder - later can be real project page or github
  },
  {
    title: "MovieMood",
    description:
      "Movie recommendation platform that suggests films based on your current mood using TMDB API.",
    tech: "React • TMDB API • Framer Motion • Tailwind • Zustand",
    href: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Clean expense/income tracker with monthly reports, charts and category analysis.",
    tech: "Next.js • Prisma • PostgreSQL • Recharts • Tailwind",
    href: "#",
  },
  {
    title: "Portfolio 2026",
    description:
      "This very portfolio you're looking at right now – clean, fast, SEO-friendly and built with latest Next.js features.",
    tech: "Next.js App Router • Tailwind • TypeScript • Vercel",
    href: "#",
  },
];

export default function Projects() {
  return (
    <Section className="bg-white">
      <Container size="xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Some of the things I've built recently – from full applications to smaller experiments
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} hoverable>
              <Card.Content className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                
                <p className="text-gray-700 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <p className="text-sm text-gray-500 font-medium mb-4">
                    {project.tech}
                  </p>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    href={project.href}
                    className="w-full sm:w-auto"
                  >
                    View Project →
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}