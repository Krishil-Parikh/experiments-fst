// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center md:text-left">Get in Touch</h1>

        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center md:text-left leading-relaxed">
          I&apos;m currently open to interesting projects, freelance opportunities and good conversations. 
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-xl text-gray-800">hello@alexjohnson.dev</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Find me on</h3>
            <div className="flex gap-8 text-2xl">
              <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter/X</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}