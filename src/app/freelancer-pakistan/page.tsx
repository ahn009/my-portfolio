import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Freelance Frontend Developer in Pakistan | React & Next.js',
  description:
    'Hire a freelance Frontend Developer from Pakistan. Muhammad Ahsan offers flexible freelance services for React, Next.js, and modern web development projects. Remote work available.',
  keywords: [
    'freelance frontend developer',
    'freelance React developer',
    'freelance Next.js developer',
    'freelancer Pakistan',
    'remote developer Pakistan',
    'contract developer',
    'freelance TypeScript developer',
    'hire freelance developer Pakistan',
  ],
  openGraph: {
    type: 'website',
    title: 'Freelance Web Developer in Pakistan | Muhammad Ahsan',
    description: 'Professional freelance web development services from Pakistan',
    url: 'https://byahsan.vercel.app//freelancer-pakistan',
    images: [
      {
        url: 'https://byahsan.vercel.app//og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://byahsan.vercel.app//freelancer-pakistan',
  },
};

export default function FreelancerPakistanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Freelance Frontend Developer in Pakistan</h1>
          <p className="text-xl text-gray-400">
            Flexible freelance frontend development services from Muhammad Ahsan. Available for short-term projects, long-term contracts, and everything in between. Specialized in React, Next.js, and modern web development.
          </p>
        </div>

        {/* Freelance Services */}
        <section className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">Freelance Flexibility</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">Project-Based Work</h3>
                  <p>One-time projects or ongoing development needs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">Remote Collaboration</h3>
                  <p>Work from anywhere with seamless communication</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">Flexible Hours</h3>
                  <p>Adjust work hours to match your timezone</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-white">Transparent Pricing</h3>
                  <p>Clear quotes with no hidden charges</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg bg-slate-800 border border-slate-700 h-fit">
            <h3 className="text-2xl font-bold mb-4">Freelance Rates</h3>
            <p className="text-gray-400 mb-4">
              Competitive freelance rates based on project scope and complexity.
            </p>
            <div className="space-y-3 text-sm">
              <p><span className="font-bold">Project-Based:</span> Customized quotes</p>
              <p><span className="font-bold">Hourly Rate:</span> Competitive Pakistan rates</p>
              <p><span className="font-bold">Time Commitment:</span> Flexible</p>
              <p><span className="font-bold">Payment Terms:</span> Negotiable</p>
              <p><span className="font-bold">Communication:</span> Multiple channels</p>
            </div>
          </div>
        </section>

        {/* Freelance Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Freelance Services</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Full Project Development', desc: 'Complete web applications from scratch' },
              { title: 'Component Development', desc: 'Build specific components or features' },
              { title: 'Code Review & Optimization', desc: 'Improve your existing codebase' },
              { title: 'Bug Fixes & Debugging', desc: 'Quick turnaround for issues' },
              { title: 'Feature Implementation', desc: 'Add new features to your app' },
              { title: 'Consulting & Strategy', desc: 'Expert advice on tech decisions' },
            ].map((service) => (
              <div key={service.title} className="p-4 rounded-lg bg-slate-800 border border-slate-700">
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Freelance Platforms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available On Freelance Platforms</h2>
          <p className="text-gray-400 mb-6">
            I am available on multiple freelance platforms for your convenience. Connect with me through your preferred platform or directly on this website.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { platform: 'Direct Hire', icon: '💼' },
              { platform: 'Freelance Platforms', icon: '🌐' },
              { platform: 'Remote Work', icon: '🏠' },
            ].map((item) => (
              <div key={item.platform} className="p-4 rounded-lg bg-slate-800 border border-slate-700 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold">{item.platform}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose As Freelancer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Hire Me As Your Freelancer?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-blue-400 mb-2">📈 Proven Track Record</h3>
              <p className="text-gray-400">Completed projects with satisfied clients worldwide</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">⚡ Quick Turnaround</h3>
              <p className="text-gray-400">Efficient workflow and timely project delivery</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">💬 Clear Communication</h3>
              <p className="text-gray-400">Regular updates and responsive to feedback</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">🎯 Quality Focused</h3>
              <p className="text-gray-400">Best practices and clean, maintainable code</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">🔒 Professional & Reliable</h3>
              <p className="text-gray-400">Confidentiality and professional conduct</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">🚀 Continuous Learning</h3>
              <p className="text-gray-400">Up-to-date with latest technologies</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Next.js',
              'React',
              'Node.js',
              'TypeScript',
              'MongoDB',
              'PostgreSQL',
              'Tailwind CSS',
              'GraphQL',
              'REST APIs',
              'AWS',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for a freelance developer?</h2>
          <p className="text-gray-100 mb-6">
            Let's discuss your freelance project. I am available for immediate engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Hire Me Now
          </Link>
        </div>
      </div>
    </main>
  );
}
