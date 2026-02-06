import { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData, generateArticleSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Blog - Muhammad Ahsan | Frontend Developer & React Specialist',
  description:
    'Read articles and tutorials about React, Next.js, TypeScript, frontend optimization, and modern web development. Expert insights from Muhammad Ahsan.',
  keywords: [
    'Next.js tutorials',
    'React tutorials',
    'Frontend development',
    'Web development',
    'AI integration',
    'JavaScript tutorials',
    'TypeScript guides',
  ],
  openGraph: {
    type: 'website',
    title: 'Blog - Muhammad Ahsan | Frontend Developer',
    description: 'Articles about React, Next.js, TypeScript, and modern web development.',
    url: 'https://byahsan.vercel.app//blog',
    siteName: 'Muhammad Ahsan',
    images: [
      {
        url: 'https://byahsan.vercel.app//og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Ahsan Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Muhammad Ahsan | Frontend Developer',
    description: 'Articles about React, Next.js, and modern web development.',
    images: ['https://byahsan.vercel.app//og-image.png'],
  },
  alternates: {
    canonical: 'https://byahsan.vercel.app//blog',
  },
};

const blogs = [
  {
    id: 1,
    slug: 'why-nextjs-is-best-2024',
    title: 'Why Next.js is the Best Choice for Web Development in 2024',
    excerpt:
      'Discover why Next.js has become the go-to framework for building modern web applications. Learn about its performance benefits, SEO optimization, and developer experience.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://byahsan.vercel.app//og-image.png',
  },
  {
    id: 2,
    slug: 'mern-vs-mean-stack',
    title: 'MERN Stack vs MEAN Stack: Which One Should You Choose?',
    excerpt:
      'A comprehensive comparison of MERN and MEAN stacks. Understand the differences, pros, cons, and use cases for each technology stack.',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'Full Stack Development',
    image: 'https://byahsan.vercel.app//og-image.png',
  },
  {
    id: 3,
    slug: 'ai-transforming-web-development',
    title: 'How AI is Transforming Web Development: A 2024 Guide',
    excerpt:
      'Explore how artificial intelligence is revolutionizing web development. Learn about AI tools, use cases, and how to integrate AI into your projects.',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    image: 'https://byahsan.vercel.app//og-image.png',
  },
];

export default function BlogPage() {
  return (
    <>
      <StructuredData
        suppressHydrationWarning
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Muhammad Ahsan Blog',
          description: 'Articles about Next.js, React, MERN Stack, and AI integration.',
          url: 'https://byahsan.vercel.app//blog',
          author: {
            '@type': 'Person',
            name: 'Muhammad Ahsan',
            url: 'https://byahsan.vercel.app/',
          },
          mainEntity: blogs.map((blog) => ({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.excerpt,
            image: blog.image,
            datePublished: blog.date,
            author: {
              '@type': 'Person',
              name: 'Muhammad Ahsan',
            },
            url: `https://byahsan.vercel.app//blog/${blog.slug}`,
          })),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-400">
              Articles and insights about React, Next.js, TypeScript, frontend optimization, and modern web development.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative rounded-lg overflow-hidden bg-slate-800 hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-slate-600"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-blue-400">{blog.category}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400">{blog.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</time>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
            <p className="text-gray-100 mb-6">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
