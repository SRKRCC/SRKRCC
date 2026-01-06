import { Helmet } from 'react-helmet-async';

/** 
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.keywords
 * @param {string} props.canonical
 * @param {string} props.image
 * @param {string} props.type
 * @param {Object} props.structuredData
 */
const SEO = ({
  title = "SRKR Coding Club",
  description = "SRKR Coding Club is a student-led organization empowering students to enhance coding skills, foster innovation, and build a community of tech enthusiasts at SRKR Engineering College, Bhimavaram.",
  keywords = "SRKR Coding Club, SRKRCC, coding, programming, hackathon, SRKR Engineering College",
  canonical = "",
  image = "/srkrcc-logo.png",
  type = "website",
  structuredData = null
}) => {
  const siteUrl = "https://srkrcodingclub.in";
  const fullUrl = `${siteUrl}${canonical}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = title === "SRKR Coding Club" 
    ? "SRKR Coding Club | Learn, Build, Innovate at SRKR Engineering College"
    : `${title} | SRKR Coding Club`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
