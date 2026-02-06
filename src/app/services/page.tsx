import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development Services - Muhammad Ahsan',
  description:
    'Professional web development services including Next.js, React, MERN Stack, and AI integration. Get high-quality web solutions for your business.',
  keywords: [
    'Web development services',
    'Next.js development',
    'React development',
    'MERN Stack services',
    'AI integration',
    'Freelance developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Web Development Services',
    description:
      'Professional web development services including Next.js, React, MERN Stack, and AI integration.',
    url: 'https://muhammad-awais-portfolio.vercel.app/services',
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/services',
  },
};

const services = [
  {
    title: 'Next.js Development',
    slug: 'nextjs-development',
    description: 'Build fast, scalable, and SEO-friendly applications with Next.js',
    icon: '⚡',
  },
  {
    title: 'React Development',
    slug: 'react-development',
    description: 'Create dynamic and interactive user interfaces with React',
    icon: '⚛️',
  },
  {
    title: 'MERN Stack Development',
    slug: 'mern-stack-development',
    description: 'Full-stack development using MongoDB, Express, React, and Node.js',
    icon: '🔗',
  },
  {
    title: 'AI Integration',
    slug: 'ai-integration-development',
    description: 'Integrate AI and machine learning into your web applications',
    icon: '🤖',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Web Development Services</h1>
          <p className="text-xl text-gray-400">
            Professional web development solutions tailored to your business needs. From concept to deployment, I
            deliver high-quality applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative rounded-lg overflow-hidden bg-slate-800 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-slate-600 p-8"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-100 mb-6">
            Let's discuss your project and how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
