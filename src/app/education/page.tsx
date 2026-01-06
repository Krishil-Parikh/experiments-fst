// src/app/education/page.tsx
export default function Education() {
  return (
    <div className="container mx-auto py-16 px-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-10">Education</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">B.Sc. Computer Science</h2>
          <p className="text-gray-600 mb-1">University of Technology • 2020 – 2024</p>
          <p className="text-gray-700">
            Graduated with First Class Honours • GPA: 3.8/4.0
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Full-Stack Web Development Bootcamp</h2>
          <p className="text-gray-600 mb-1">The Odin Project & freeCodeCamp • 2022 – 2023</p>
          <p className="text-gray-700">
            1300+ hours of hands-on JavaScript, React, Node.js and database training
          </p>
        </div>
      </div>
    </div>
  );
}