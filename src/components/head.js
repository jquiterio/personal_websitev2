import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import ogImage from '@images/og.png';
import appleIcon76x76 from '@images/favicons/apple-touch-icon-76x76.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import safaripinnedtab from '@images/favicons/safari-pinned-tab.svg';
import msIcon144x144 from '@images/favicons/mstile-150x150.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />

    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <link rel="icon" type="image/png" sizes="16x16" href={safaripinnedtab} />
    <meta name="msapplication-TileColor" content={config.navyColor} />
    <meta name="msapplication-TileImage" content={msIcon144x144} />
    <meta name="theme-color" content={config.navyColor} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
