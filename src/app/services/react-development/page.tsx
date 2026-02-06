import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'React Development Services | Dynamic Web Applications',
  description:
    'Professional React development services. Build interactive and dynamic user interfaces with React. Hire experienced React developer.',
  keywords: [
    'React developer',
    'React development',
    'React services',
    'UI development',
    'JavaScript',
    'Component development',
  ],
  openGraph: {
    type: 'website',
    title: 'React Development Services',
    description: 'Professional React development for interactive web applications.',
    url: 'https://muhammad-awais-portfolio.vercel.app/services/react-development',
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/services/react-development',
  },
};

export default function ReactServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/services" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">React Development</h1>
          <p className="text-xl text-gray-400">
            Create dynamic, interactive user interfaces with React. I build component-based applications that provide
            exceptional user experiences.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">React Development Benefits</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">⚛️ Component-Based</h3>
              <p className="text-gray-400">Reusable components for faster development and maintenance.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">⚡ Fast Rendering</h3>
              <p className="text-gray-400">Virtual DOM for optimal performance and smooth interactions.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🔄 State Management</h3>
              <p className="text-gray-400">Efficient state management with Redux, Zustand, or Context API.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🧪 Testable</h3>
              <p className="text-gray-400">Easy to test components with comprehensive testing frameworks.</p>
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
                <h3 className="font-bold text-white mb-1">Component Development</h3>
                <p>Build reusable, well-documented React components.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Single Page Applications (SPA)</h3>
                <p>Create interactive SPAs with React Router and advanced routing.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Dashboard Development</h3>
                <p>Build data-driven dashboards with interactive visualizations.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">React Native Apps</h3>
                <p>Extend your React expertise to mobile development.</p>
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
              'TypeScript',
              'Redux',
              'React Router',
              'Tailwind CSS',
              'Jest',
              'React Testing Library',
              'Vite',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Build interactive experiences</h2>
          <p className="text-gray-100 mb-6">Let's create engaging React applications that users love.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Project
          </Link>
        </div>
      </div>
    </main>
  );
}
