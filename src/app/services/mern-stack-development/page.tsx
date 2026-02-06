import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Web Applications | Full-Featured Solutions',
  description:
    'Professional custom web application development. Build complete solutions combining modern frontend expertise with scalable backend integration.',
  keywords: [
    'Custom web development',
    'Full-featured applications',
    'React development',
    'Next.js services',
    'Scalable web solutions',
    'API integration',
  ],
  openGraph: {
    type: 'website',
    title: 'Custom Web Application Development',
    description: 'Professional custom web application development for complete business solutions.',
    url: 'https://byahsan.vercel.app//services/mern-stack-development',
    images: [
      {
        url: 'https://byahsan.vercel.app//og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://byahsan.vercel.app//services/mern-stack-development',
  },
};

export default function CustomWebAppServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/services" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Custom Web Applications</h1>
          <p className="text-xl text-gray-400">
            Build complete, full-featured web applications combining modern frontend expertise with scalable backend integration. I deliver production-ready solutions tailored to your business needs.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Custom Web Applications?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🎯 Tailored Solutions</h3>
              <p className="text-gray-400">Custom-built for your specific business requirements and workflows.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🚀 Modern Stack</h3>
              <p className="text-gray-400">Built with cutting-edge technologies for optimal performance.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">📈 Scalability</h3>
              <p className="text-gray-400">Architected to scale as your business grows.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">⚡ High Performance</h3>
              <p className="text-gray-400">Optimized for speed, SEO, and excellent user experience.</p>
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
                <h3 className="font-bold text-white mb-1">Frontend Architecture</h3>
                <p>Modern React and Next.js applications with optimal performance and UX.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Backend Integration</h3>
                <p>Seamless API integration and backend connectivity for full-featured applications.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Database Design</h3>
                <p>Efficient database architecture and optimization for data-intensive applications.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Real-time Features</h3>
                <p>Real-time data synchronization and interactive features for modern applications.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">AI Integration</h3>
                <p>Incorporate AI-powered features for intelligent, adaptive applications.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'PostgreSQL',
              'MongoDB',
              'API Integration',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for your custom web application?</h2>
          <p className="text-gray-100 mb-6">Let's build a scalable, modern web solution tailored to your business goals.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
