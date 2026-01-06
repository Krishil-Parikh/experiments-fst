// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Alex Johnson</p>
        <p className="text-sm">
          Built with Next.js • Tailwind CSS • Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}