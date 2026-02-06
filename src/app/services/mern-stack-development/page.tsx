import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MERN Stack Development Services | Full Stack Solutions',
  description:
    'Professional MERN Stack development services. Build complete web applications with MongoDB, Express, React, and Node.js. Hire MERN developer.',
  keywords: [
    'MERN Stack developer',
    'MERN development',
    'Full stack development',
    'MongoDB',
    'Express',
    'Node.js',
    'React',
  ],
  openGraph: {
    type: 'website',
    title: 'MERN Stack Development Services',
    description: 'Professional MERN Stack development for complete web solutions.',
    url: 'https://muhammad-awais-portfolio.vercel.app/services/mern-stack-development',
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/services/mern-stack-development',
  },
};

export default function MernStackServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/services" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">MERN Stack Development</h1>
          <p className="text-xl text-gray-400">
            Build complete, end-to-end web applications with the MERN Stack. I deliver scalable, production-ready
            solutions.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">MERN Stack Advantages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🔗 Full Stack Solution</h3>
              <p className="text-gray-400">Complete control over frontend and backend with one language.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">📦 Modern Stack</h3>
              <p className="text-gray-400">Uses modern, industry-standard technologies and best practices.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">💾 NoSQL Database</h3>
              <p className="text-gray-400">MongoDB for flexible, scalable data storage.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">⚡ Fast Development</h3>
              <p className="text-gray-400">Rapid development cycles and quick time to market.</p>
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
                <h3 className="font-bold text-white mb-1">Custom MERN Applications</h3>
                <p>Build tailored applications from scratch with MERN Stack architecture.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">API Development</h3>
                <p>Create robust REST and GraphQL APIs with Express and Node.js.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Database Design & Management</h3>
                <p>MongoDB database design, optimization, and management.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Real-time Applications</h3>
                <p>Build real-time applications with WebSocket and Socket.io.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'MongoDB',
              'Express.js',
              'React',
              'Node.js',
              'TypeScript',
              'Mongoose',
              'JWT',
              'Redux',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a full-stack solution?</h2>
          <p className="text-gray-100 mb-6">Let's build a scalable MERN Stack application for your business.</p>
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
