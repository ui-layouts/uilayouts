interface FaqItem {
  question: string;
  answer: string;
}

interface FaqStructuredDataProps {
  items: FaqItem[];
}

export function FaqStructuredData({ items }: FaqStructuredDataProps) {
  if (!items.length) return null;

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
}
