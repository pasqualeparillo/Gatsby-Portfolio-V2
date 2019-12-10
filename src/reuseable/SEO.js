import React from 'react';
import Helmet from 'react-helmet';
import {
	url,
	defaultDescription,
	defaultTitle,
	socialLinks,
	address,
	contact,
	legalName,
	foundingDate
} from './SEOconfig';

export const SEO = ({ title = defaultTitle, description = defaultDescription }) => {
	const structuredDataOrganization = `{ 
          "@context": "http://schema.org",
          "@type": "Organization",
          "legalName": "${legalName}",
          "url": "${url}",
          "foundingDate": "${foundingDate}",
          "founders": [{
              "@type": "Person",
              "name": "${legalName}"
          }],
          "contactPoint": [{
              "@type": "ContactPoint",
              "email": "${contact.email}",
              "telephone": "${contact.phone}",
              "contactType": "customer service"
          }],
          "address": {
              "@type": "PostalAddress",
              "addressLocality": "${address.city}",
              "addressCountry": "${address.country}",
              "postalCode": "${address.zipCode}"
          },
          "sameAs": [
              "${socialLinks.linkedin}",
              "${socialLinks.github}"
          ]
        }`;

	return (
		<Helmet>
			<meta name="description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<title>{title}</title>
			<html lang="en" dir="ltr" />
		</Helmet>
	);
};
