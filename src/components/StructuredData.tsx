import { ReactNode } from 'react';

interface StructuredDataProps {
  schema: Record<string, any>;
  suppressHydrationWarning?: boolean;
}

/**
 * Component for rendering JSON-LD structured data
 * Helps search engines understand your content better
 */
export function StructuredData({ schema, suppressHydrationWarning }: StructuredDataProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
      suppressHydrationWarning={suppressHydrationWarning}
    />
  );
}

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  imageUrl?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.imageUrl || 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://muhammad-awais-portfolio.vercel.app',
    },
    url: article.url,
  };
}

/**
 * Generate BreadcrumbList Schema for navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Muhammad Ahsan - Full Stack Developer',
    url: 'https://muhammad-awais-portfolio.vercel.app',
    logo: 'https://muhammad-awais-portfolio.vercel.app/logo.png',
    description: 'Professional portfolio of Muhammad Ahsan, Full Stack Developer',
    sameAs: [
      'https://linkedin.com/in/muhammad-awais-5b37742ba',
      'https://github.com/mhaawais',
      'https://twitter.com/awais8640107',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'awais8640107@gmail.com',
    },
  };
}
