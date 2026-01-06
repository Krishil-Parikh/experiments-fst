// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-10">Get in Touch</h1>
      
      <p className="text-lg mb-10">
        I'm currently open to new opportunities and interesting projects. 
        Feel free to reach out if you want to talk about web development, Next.js, 
        open source or just want to say hi!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Email</h3>
          <p className="text-lg">hello@alexjohnson.dev</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}