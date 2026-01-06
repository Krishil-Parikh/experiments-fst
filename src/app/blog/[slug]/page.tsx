// src/app/blog/[slug]/page.tsx   ← example
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-16 px-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">
        Blog Post: {params.slug.replace(/-/g, ' ')}
      </h1>
      
      <p className="text-gray-600 mb-10">December 18, 2025 • 6 min read</p>
      
      <div className="prose prose-lg max-w-none">
        <p>This is placeholder content for the blog post.</p>
        <p>In real application we would fetch the markdown / content from database or files.</p>
      </div>
    </div>
  );
}