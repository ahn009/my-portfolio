import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frontend Web Development Services | React & Next.js',
  description:
    'Professional frontend development services including React, Next.js, TypeScript, Tailwind CSS, and AI integration. Build modern, performant web applications.',
  keywords: [
    'Frontend development',
    'React development',
    'Next.js development',
    'TypeScript services',
    'Tailwind CSS',
    'AI integration',
    'Web development',
    'UI development',
  ],
  openGraph: {
    type: 'website',
    title: 'Frontend Web Development Services',
    description:
      'Professional frontend development services including React, Next.js, TypeScript, and AI integration.',
    url: 'https://byahsan.vercel.app//services',
    images: [
      {
        url: 'https://byahsan.vercel.app//og-image.png',
        width: 1200,
        height: 630,
        alt: 'Frontend Web Development Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://byahsan.vercel.app//services',
  },
};

const services = [
  {
    title: 'Next.js Development',
    slug: 'nextjs-development',
    description: 'Build fast, scalable, SEO-optimized web applications with Next.js and modern React patterns',
    icon: '⚡',
  },
  {
    title: 'React Development',
    slug: 'react-development',
    description: 'Create dynamic, interactive, and performant user interfaces with React and component best practices',
    icon: '⚛️',
  },
  {
    title: 'Frontend Optimization',
    slug: 'ai-integration-development',
    description: 'Optimize Web Core Vitals, performance, and user experience with AI-driven insights and modern techniques',
    icon: '🚀',
  },
  {
    title: 'Custom Web Solutions',
    slug: 'mern-stack-development',
    description: 'Full-featured web applications combining frontend expertise with modern backend integration',
    icon: '💻',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frontend Development Services</h1>
          <p className="text-xl text-gray-400">
            Professional frontend solutions tailored to your business needs. From concept to deployment, I deliver
            high-quality, performant, and user-focused web applications.
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
            Let's discuss your project and how I can help bring your ideas to life with modern frontend solutions.
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
