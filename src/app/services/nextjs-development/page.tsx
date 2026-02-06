import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js Development Services | High-Performance Web Apps',
  description:
    'Professional Next.js development services. Build fast, scalable, and SEO-friendly web applications with modern Next.js technology.',
  keywords: [
    'Next.js developer',
    'Next.js development',
    'React framework',
    'Server-side rendering',
    'Static site generation',
    'Web development',
  ],
  openGraph: {
    type: 'website',
    title: 'Next.js Development Services',
    description: 'Professional Next.js development for high-performance web applications.',
    url: 'https://muhammad-awais-portfolio.vercel.app/services/nextjs-development',
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/services/nextjs-development',
  },
};

export default function NextJsServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/services" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Next.js Development</h1>
          <p className="text-xl text-gray-400">
            Build fast, scalable, and SEO-friendly web applications with Next.js. I specialize in creating modern web
            solutions that drive results.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Next.js?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">⚡ Performance</h3>
              <p className="text-gray-400">Optimized for speed with automatic code splitting and image optimization.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🔍 SEO Friendly</h3>
              <p className="text-gray-400">Server-side rendering and static generation for better search visibility.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">📱 Responsive</h3>
              <p className="text-gray-400">Works seamlessly on all devices and screen sizes.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🚀 Scalable</h3>
              <p className="text-gray-400">Handles growth from startups to enterprise-level applications.</p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Custom Next.js Development</h3>
                <p>Build tailored applications from scratch with modern Next.js best practices.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Migration Services</h3>
                <p>Upgrade your existing React applications to Next.js for better performance.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">E-commerce Solutions</h3>
                <p>Build fast, conversion-optimized e-commerce platforms with Next.js.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">API Development</h3>
                <p>Create robust backend APIs using Next.js API routes.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'PostgreSQL',
              'MongoDB',
              'Vercel',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to build something amazing?</h2>
          <p className="text-gray-100 mb-6">Let's create a high-performance Next.js application for your business.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
