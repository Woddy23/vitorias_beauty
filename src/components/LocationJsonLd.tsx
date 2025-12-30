interface LocationJsonLdProps {
  name: string;
  urlPath: string;
  telephone: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry?: string;
  opens?: string;
  closes?: string;
}

export function LocationJsonLd({
  name,
  urlPath,
  telephone,
  streetAddress,
  postalCode,
  addressLocality,
  addressCountry = 'PT',
  opens = '08:00',
  closes = '20:00',
}: LocationJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: `Vitorias Beauty — ${name}`,
    url: `https://vitoriasbeauty.pt${urlPath}`,
    telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      postalCode,
      addressCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens,
        closes,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

