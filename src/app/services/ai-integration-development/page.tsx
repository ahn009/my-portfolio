import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Integration Services | Smart Web Applications',
  description:
    'Professional AI integration services for web applications. Add AI-powered features like chatbots, recommendations, and automation to your platform.',
  keywords: [
    'AI integration',
    'Machine learning',
    'AI chatbots',
    'AI development',
    'Web development',
    'Smart applications',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Integration Services',
    description: 'Professional AI integration for intelligent web applications.',
    url: 'https://muhammad-awais-portfolio.vercel.app/services/ai-integration-development',
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/services/ai-integration-development',
  },
};

export default function AIIntegrationServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/services" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Integration</h1>
          <p className="text-xl text-gray-400">
            Transform your web applications with AI-powered features. From chatbots to predictive analytics, I help
            you leverage AI to drive business value.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI Integration Benefits</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🤖 Intelligent Automation</h3>
              <p className="text-gray-400">Automate repetitive tasks and improve operational efficiency.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">💬 Smart Chatbots</h3>
              <p className="text-gray-400">24/7 customer support with AI-powered conversational agents.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">📊 Predictive Analytics</h3>
              <p className="text-gray-400">Data-driven insights for better decision making.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">🎯 Personalization</h3>
              <p className="text-gray-400">Personalized user experiences that increase engagement.</p>
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
                <h3 className="font-bold text-white mb-1">AI Chatbot Development</h3>
                <p>Build intelligent chatbots using OpenAI, Claude, or other LLM APIs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Machine Learning Integration</h3>
                <p>Integrate ML models for predictions, classifications, and recommendations.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Image & Vision AI</h3>
                <p>Implement image processing, object detection, and computer vision features.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">✓</span>
              <div>
                <h3 className="font-bold text-white mb-1">Natural Language Processing</h3>
                <p>Add NLP capabilities for text analysis, sentiment analysis, and more.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'OpenAI API',
              'Claude API',
              'TensorFlow',
              'PyTorch',
              'LangChain',
              'Vector Databases',
              'Python',
              'Node.js',
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to leverage AI?</h2>
          <p className="text-gray-100 mb-6">Let's integrate AI features into your application and unlock new possibilities.</p>
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
