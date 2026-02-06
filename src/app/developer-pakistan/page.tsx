import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Developer in Pakistan | Muhammad Ahsan',
  description:
    'Looking for a skilled web developer in Pakistan? Muhammad Ahsan specializes in Next.js, React, MERN Stack development. Hire Pakistani FrontEnd Devloper | Next.js Expert online.',
  keywords: [
    'web developer Pakistan',
    'developer Pakistan',
    'freelance developer Pakistan',
    'Next.js developer Pakistan',
    'React developer Pakistan',
    'MERN Stack developer Pakistan',
    'FrontEnd Devloper | Next.js Expert Pakistan',
    'hire developer Pakistan',
  ],
  openGraph: {
    type: 'website',
    title: 'Web Developer in Pakistan | Muhammad Ahsan',
    description: 'Professional web development services from Pakistan',
    url: 'https://byahsan.vercel.app//developer-pakistan',
    images: [
      {
        url: 'https://byahsan.vercel.app//og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://byahsan.vercel.app//developer-pakistan',
  },
};

export default function DeveloperPakistanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Web Developer in Pakistan</h1>
          <p className="text-xl text-gray-400">
            Professional web development services from Muhammad Ahsan, a full-stack developer based in Pakistan. Specializing in Next.js, React, and MERN Stack development.
          </p>
        </div>

        {/* Why Choose Section */}
        <section className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Hire a Developer from Pakistan?</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">Cost-Effective Solutions</h3>
                  <p>Competitive pricing without compromising on quality</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">24/7 Availability</h3>
                  <p>Time zone advantage for round-the-clock development</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">Skilled Professionals</h3>
                  <p>Access to highly skilled and experienced developers</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">English Proficiency</h3>
                  <p>Clear communication in English for smooth collaboration</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg bg-slate-800 border border-slate-700 h-fit">
            <h3 className="text-2xl font-bold mb-4">About Muhammad Ahsan</h3>
            <p className="text-gray-400 mb-4">
              Based in Pakistan, I am a full-stack developer with 1 years of professional experience in web development.
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="font-bold">Location:</span> Karachi, Pakistan</p>
              <p><span className="font-bold">Specialization:</span> Next.js, React, MERN Stack</p>
              <p><span className="font-bold">Experience:</span> 1 years</p>
              <p><span className="font-bold">Languages:</span> JavaScript, TypeScript, Python</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Services Offered in Pakistan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Web Application Development', desc: 'Custom web apps tailored to your needs' },
              { title: 'E-commerce Solutions', desc: 'Online stores and marketplace platforms' },
              { title: 'API Development', desc: 'RESTful and GraphQL APIs' },
              { title: 'Web Performance Optimization', desc: 'Speed up your existing applications' },
              { title: 'SEO-Friendly Development', desc: 'Sites that rank well in search engines' },
              { title: 'Maintenance & Support', desc: 'Ongoing support and updates' },
            ].map((service) => (
              <div key={service.title} className="p-4 rounded-lg bg-slate-800 border border-slate-700">
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Portfolio & Success Stories</h2>
          <p className="text-gray-400 mb-6">
            I have successfully delivered numerous projects for clients across Pakistan and internationally. Each project demonstrates my commitment to quality and client satisfaction.
          </p>
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            View My Projects →
          </Link>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js',
              'React',
              'Node.js',
              'TypeScript',
              'MongoDB',
              'PostgreSQL',
              'Tailwind CSS',
              'AI Integration',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to work with a Pakistani developer?</h2>
          <p className="text-gray-100 mb-6">
            Let's discuss your project and how I can help bring your vision to life.
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
  );
}
