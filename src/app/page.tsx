// src/app/page.tsx          ← Home / Hero
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm Alex Johnson
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          Full-Stack Developer & Open Source Enthusiast
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/projects"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            See My Work
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border-2 border-gray-800 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}