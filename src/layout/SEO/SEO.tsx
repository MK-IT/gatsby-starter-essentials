import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        siteTitle
        siteDescription
        siteKeywords
        siteThemeColor
        siteSocialImageUrl
        facebookAppId
        twitterAccountId
      }
    }
  }
`;

const SEO = ({
  title,
  description,
  keywords,
  image,
  canonicalUrl,
  structuredDataObject
}) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        siteTitle,
        siteDescription,
        siteKeywords,
        siteThemeColor,
        siteSocialImageUrl,
        facebookAppId,
        twitterAccountId
      }
    }
  } = useStaticQuery(siteMetadataQuery);

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || siteDescription;
  const pageKeywords = keywords || siteKeywords;
  const pageImage = image || `${siteUrl}/${siteSocialImageUrl}`;

  return (
    <Helmet>
      <html lang="en" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

      {/* Application */}
      <meta content={siteTitle} name="application-name" />
      <meta content={siteTitle} name="apple-mobile-web-app-title" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
      <meta content={siteThemeColor} name="theme-color" />

      {/* Title */}
      <title>{pageTitle}</title>
      <meta content={pageTitle} property="og:title" />
      <meta content={pageTitle} name="twitter:title" />

      {/* Description */}
      <meta content={pageDescription} name="description" />
      <meta content={pageDescription} property="og:description" />
      <meta content={pageDescription} name="twitter:description" />

      {/* Keywords */}
      <meta content={pageKeywords} name="keywords" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Facebook */}
      <meta content={facebookAppId} property="fb:app_id" />
      <meta content="website" property="og:type" />
      <meta content={siteTitle} property="og:site_name" />
      <meta content={pageImage} property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      {canonicalUrl && <meta content={canonicalUrl} property="og:url" />}

      {/* Twitter */}
      <meta content={`@${twitterAccountId}`} name="twitter:site" />
      <meta content={`@${twitterAccountId}`} name="twitter:creator" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={pageTitle} name="twitter:text:title" />
      <meta content={pageImage} name="twitter:image" />
      <meta content="1024" name="twitter:image:width" />
      <meta content="512" name="twitter:image:height" />
      {canonicalUrl && <meta content={canonicalUrl} name="twitter:url" />}

      {/* JSON-LD */}
      {structuredDataObject && (
        <script type="application/ld+json">
          {JSON.stringify(structuredDataObject)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  canonicalUrl: PropTypes.string,
  structuredDataObject: PropTypes.shape()
};

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
  image: null,
  canonicalUrl: null,
  structuredDataObject: null
};

export default SEO;
