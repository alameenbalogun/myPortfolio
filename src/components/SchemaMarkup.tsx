export function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Al-ameen Balogun",
    url: "https://alameenbalogun.com",
    image: "https://alameenbalogun.com/src/assets/images/profile.jpg",
    description:
      "Software Engineer specializing in React, TypeScript, and modern web technologies",
    sameAs: [
      "https://github.com/alameenbalogun",
      "www.linkedin.com/in/al-ameen-balogun-60739419a",
      "https://twitter.com/omobalogun7",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export function WebsiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Al-ameen Balogun",
    url: "https://alameenbalogun.com",
    description:
      "Software Engineer portfolio showcasing projects, experience, and skills",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://alameenbalogun.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
