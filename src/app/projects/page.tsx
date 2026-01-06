// src/app/projects/page.tsx
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getAllProjects } from "@/lib/api/projects";

// Your original featured projects (always shown - you can keep these forever)
const featuredProjects = [
  {
    id: "featured-1",
    title: "TaskFlow",
    description:
      "Modern project management tool with real-time collaboration, drag & drop, and beautiful UI.",
    tech: "Next.js 15 • Supabase • Tailwind • TypeScript",
  },
  {
    id: "featured-2",
    title: "MovieMood",
    description:
      "Movie recommendation platform that suggests films based on your current mood.",
    tech: "React • TMDB API • Framer Motion • Tailwind",
  },
  {
    id: "featured-3",
    title: "Finance Tracker",
    description: "Personal expense tracker with beautiful charts and monthly insights.",
    tech: "Next.js • Prisma • PostgreSQL • Recharts",
  },
];

export default async function Projects() {
  const apiProjects = await getAllProjects(); // Fetches from /api/projects

  // Combine: featured first, then latest from API
  const allProjects = [...featuredProjects, ...apiProjects];

  return (
    <Section className="bg-gray-50">
      <Container size="xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my best work — from core projects to the latest experiments
          </p>
        </div>

        {allProjects.length === 0 ? (
          <p className="text-center text-gray-600 py-12 text-lg">
            No projects available yet...
          </p>
        ) : (
          <div className="grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => {
              const isFeatured = project.id?.startsWith("featured-");

              return (
                <Card key={project.id || project.title} hoverable className="flex flex-col">
                  <Card.Content className="flex flex-col h-full p-6 md:p-8">
                    {/* Badge for dynamic/API projects */}
                    {!isFeatured && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded mb-3 w-fit">
                        Latest Experiment
                      </span>
                    )}

                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                    <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <p className="text-sm text-gray-500 font-medium mb-5">
                        {Array.isArray(project.tech)
                          ? project.tech.join(" • ")
                          : project.tech}
                      </p>

                      <Button
                        variant="outline"
                        size="sm"
                        href="#"
                        className="w-full sm:w-auto"
                      >
                        View Project →
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}