import { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData, generateArticleSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Why Next.js is the Best Choice for Web Development in 2024',
  description:
    'Discover why Next.js has become the go-to framework for building modern web applications. Learn about its performance benefits, SEO optimization, and developer experience.',
  keywords: [
    'Next.js',
    'React framework',
    'Web development',
    'Performance optimization',
    'SEO',
    'Full stack development',
  ],
  openGraph: {
    type: 'article',
    title: 'Why Next.js is the Best Choice for Web Development in 2024',
    description:
      'Discover why Next.js has become the go-to framework for building modern web applications.',
    url: 'https://muhammad-awais-portfolio.vercel.app/blog/why-nextjs-is-best-2024',
    authors: ['Muhammad Ahsan'],
    publishedTime: '2024-01-15T00:00:00Z',
    tags: ['Next.js', 'React', 'Web Development'],
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Why Next.js is the Best Choice for Web Development in 2024',
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/blog/why-nextjs-is-best-2024',
  },
};

const articleSchema = generateArticleSchema({
  title: 'Why Next.js is the Best Choice for Web Development in 2024',
  description:
    'Discover why Next.js has become the go-to framework for building modern web applications. Learn about its performance benefits, SEO optimization, and developer experience.',
  author: 'Muhammad Ahsan',
  publishedDate: '2024-01-15',
  url: 'https://muhammad-awais-portfolio.vercel.app/blog/why-nextjs-is-best-2024',
});

export default function NextJsBlogPost() {
  return (
    <>
      <StructuredData schema={articleSchema} suppressHydrationWarning />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <article className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="text-sm font-semibold text-blue-400">Web Development</span>
              <span className="text-sm text-gray-400 mx-2">•</span>
              <span className="text-sm text-gray-400">8 min read</span>
              <span className="text-sm text-gray-400 mx-2">•</span>
              <time className="text-sm text-gray-400">January 15, 2024</time>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Next.js is the Best Choice for Web Development in 2024
            </h1>
            <p className="text-xl text-gray-400">
              Discover why Next.js has become the go-to framework for building modern web applications.
              Learn about its performance benefits, SEO optimization, and developer experience.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              Next.js has revolutionized the way developers build web applications. With its powerful features and
              excellent developer experience, it's no wonder it has become the framework of choice for many
              organizations worldwide.
            </p>

            <h2>1. Performance Optimization</h2>
            <p>
              Next.js provides automatic code splitting, image optimization, and lazy loading out of the box. This
              results in faster page loads and better user experience. The framework's built-in optimizations can
              improve your Core Web Vitals scores significantly.
            </p>

            <h2>2. SEO-Friendly</h2>
            <p>
              With server-side rendering (SSR) and static site generation (SSG), Next.js makes it easy to create
              SEO-friendly applications. Search engines can easily crawl and index your content, improving your
              visibility in search results.
            </p>

            <h2>3. Developer Experience</h2>
            <p>
              Next.js comes with hot module replacement, built-in CSS support, and a great developer experience.
              The framework handles much of the configuration, allowing developers to focus on building features.
            </p>

            <h2>4. Full-Stack Capabilities</h2>
            <p>
              With API routes, you can build your entire application with Next.js. No need for a separate backend
              server. This makes development faster and deployment easier.
            </p>

            <h2>5. Scalability</h2>
            <p>
              Next.js scales from small side projects to large enterprise applications. Companies like Netflix,
              TikTok, and Hulu use Next.js for their applications, proving its scalability and reliability.
            </p>

            <h2>Conclusion</h2>
            <p>
              Next.js is the best choice for web development in 2024 because it combines performance, developer
              experience, and scalability. Whether you're building a small project or a large-scale application,
              Next.js has the tools you need to succeed.
            </p>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-bold">Muhammad Ahsan</h3>
                <p className="text-gray-400">Full Stack Developer & Next.js Expert</p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/mern-vs-mean-stack"
                className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <h3 className="font-bold mb-2">MERN Stack vs MEAN Stack</h3>
                <p className="text-sm text-gray-400">A comparison of two popular JavaScript stacks</p>
              </Link>
              <Link
                href="/blog/ai-transforming-web-development"
                className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <h3 className="font-bold mb-2">How AI is Transforming Web Development</h3>
                <p className="text-sm text-gray-400">Explore the impact of AI on modern web development</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Next.js?</h2>
            <p className="text-gray-100 mb-6">
              I can help you build fast, scalable, and SEO-friendly applications with Next.js.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Let's Work Together
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
