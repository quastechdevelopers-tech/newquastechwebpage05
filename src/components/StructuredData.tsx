import { Helmet } from 'react-helmet-async';

interface CourseStructuredDataProps {
  name: string;
  description: string;
  provider: string;
  url: string;
  price?: string;
  priceCurrency?: string;
  duration?: string;
  courseMode?: string;
  image?: string;
}

export const CourseStructuredData = ({
  name,
  description,
  provider = "QUASTECH",
  url,
  price = "Contact for Price",
  priceCurrency = "INR",
  duration,
  courseMode = "blended",
  image = "/images/1 quastech.png"
}: CourseStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": provider,
      "sameAs": "https://quastech.co.in"
    },
    "url": url,
    "image": image,
    "courseMode": courseMode,
    "educationalLevel": "Professional",
    "inLanguage": "en-IN",
    "availableLanguage": ["English", "Hindi", "Gujarati"],
    ...(price !== "Contact for Price" && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": priceCurrency,
        "availability": "https://schema.org/InStock",
        "url": url
      }
    }),
    ...(duration && {
      "timeRequired": duration
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const OrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "QUASTECH",
    "alternateName": "QUASTECH IT Training Institute",
    "url": "https://quastech.co.in",
    "logo": "https://quastech.co.in/images/1 quastech.png",
    "description": "Leading IT training institute offering professional courses in software development, web development, data science, digital marketing with guaranteed placement assistance",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Various Locations",
      "addressLocality": "Mumbai",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    "sameAs": [
      "https://www.facebook.com/quastech",
      "https://www.instagram.com/quastech",
      "https://www.linkedin.com/company/quastech",
      "https://twitter.com/quastech"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Training Courses",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Full Stack Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Software Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Data Science"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Digital Marketing"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbStructuredData = ({ items }: { items: BreadcrumbItem[] }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://quastech.co.in${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const FAQStructuredData = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};








