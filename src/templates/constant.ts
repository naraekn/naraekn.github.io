import moment from "moment";

export const getPostData = ({
  config, update, date, title,
}: {
  config: any;
  update: any;
  title: any;
  date: any;
}) => `
{
  "@context": "https://schema.org",
  "@type": "Article",
  "datePublished": "${moment(new Date(date)).toISOString()}",
  ${update ? `"dateModified": "${moment(new Date(update)).toISOString()}",` : ''}
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "${config.siteUrl}"
  },
  "author": {
    "@type": "Person",
    "name": "${config.name}"
  },
  "headline": "${title}",
  ${
    config.profileImageFileName
      ? `"publisher": {
    "@type" : "organization",
    "name" : "${config.name}",
    "logo": {
      "@type": "ImageObject",
      "url": "${config.siteUrl}${require(`../images/${config.profileImageFileName}`)}"
    }
  },
  "image": ["${config.siteUrl}${require(`../images/${config.profileImageFileName}`)}"]`
      : `"publisher": {
    "@type" : "organization",
    "name" : "${config.name}"
  },
  "image": []`
  }
}
`;