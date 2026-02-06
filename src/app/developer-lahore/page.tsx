import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frontend Developer in Lahore | React & Next.js',
  description:
    'Hire a professional Frontend Developer in Lahore, Pakistan. Muhammad Ahsan specializes in React, Next.js, TypeScript development. Local & remote services available.',
  keywords: [
    'frontend developer Lahore',
    'React developer Lahore',
    'Next.js developer Lahore',
    'web developer Lahore',
    'freelance developer Lahore',
    'local developer Lahore',
    'hire developer Lahore',
    'TypeScript developer Lahore',
  ],
  openGraph: {
    type: 'website',
    title: 'Web Developer in Lahore | Muhammad Ahsan',
    description: 'Professional web development services from Lahore, Pakistan',
    url: 'https://byahsan.vercel.app//developer-lahore',
    images: [
      {
        url: 'https://byahsan.vercel.app//og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://byahsan.vercel.app//developer-lahore',
  },
};

export default function DeveloperLahorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frontend Developer in Lahore</h1>
          <p className="text-xl text-gray-400">
            Professional frontend development services based in Lahore, Pakistan. Muhammad Ahsan specializes in React, Next.js, and modern web technologies for high-performance applications.
          </p>
        </div>

        {/* About Lahore */}
        <section className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Web Development in Lahore</h2>
            <p className="text-gray-400 mb-4">
              Lahore is Pakistan's tech hub with a thriving tech community. As a developer based in Lahore, I combine local market expertise with global standards.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Local presence for easy collaboration</li>
              <li>✓ Understanding of Lahore's business landscape</li>
              <li>✓ Access to the city's tech talent pool</li>
              <li>✓ Convenient for in-person meetings if needed</li>
            </ul>
          </div>

          <div className="p-8 rounded-lg bg-slate-800 border border-slate-700 h-fit">
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
            <div className="space-y-3 text-sm">
              <p><span className="font-bold text-blue-400">Location:</span> Lahore, Pakistan</p>
              <p><span className="font-bold text-blue-400">Experience:</span> 1+ years</p>
              <p><span className="font-bold text-blue-400">Clients:</span> Local & International</p>
              <p><span className="font-bold text-blue-400">Specialization:</span> Frontend Development</p>
              <p><span className="font-bold text-blue-400">Availability:</span> Full-time & Freelance</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Services for Lahore Businesses</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Startup Web Development', desc: 'Launch your startup with a solid web presence' },
              { title: 'E-commerce Platforms', desc: 'Online shopping solutions for retailers' },
              { title: 'Corporate Websites', desc: 'Professional sites for established companies' },
              { title: 'Mobile-First Design', desc: 'Responsive design for all devices' },
              { title: 'Business Automation', desc: 'Streamline operations with web apps' },
              { title: 'Digital Transformation', desc: 'Modernize your digital presence' },
            ].map((service) => (
              <div key={service.title} className="p-4 rounded-lg bg-slate-800 border border-slate-700">
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Hire From Lahore */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Hire a Lahore-Based Developer?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-blue-400 mb-2">🏙️ Local Expertise</h3>
              <p className="text-gray-400">Understand Lahore's business culture and market needs</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">💼 Professional Service</h3>
              <p className="text-gray-400">Face-to-face meetings and direct communication</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">⏰ Same Time Zone</h3>
              <p className="text-gray-400">Real-time collaboration without time zone issues</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">💪 Competitive Rates</h3>
              <p className="text-gray-400">High quality at affordable Pakistani rates</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js',
              'React',
              'Node.js',
              'TypeScript',
              'MongoDB',
              'PostgreSQL',
              'Tailwind CSS',
              'AWS',
              'Git',
              'Docker',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Serving Lahore's Businesses</h2>
          <p className="text-gray-400 mb-6">
            I have successfully delivered web solutions for startups, small businesses, and established companies across Lahore. Check out my project portfolio to see what I can do for your business.
          </p>
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            View Completed Projects →
          </Link>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a web developer in Lahore?</h2>
          <p className="text-gray-100 mb-6">
            Let's work together to bring your web project to life. Contact me for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
