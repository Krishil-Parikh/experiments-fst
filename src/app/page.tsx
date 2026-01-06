// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8">
          Hi, I&apos;m Alex Johnson
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Full-Stack Developer • TypeScript Enthusiast • Building modern web experiences
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8">
          <a
            href="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-medium text-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Explore My Projects
          </a>
          
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-xl font-medium text-lg hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </div>
  );
}