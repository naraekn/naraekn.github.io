import React from 'react';

interface Props {
  author: string;
}

export default function Footer({ author }: Props) {
  return (
    <footer>
      <span>{`© ${new Date().getFullYear()} ${author} | Initialized by `}</span>
      <a href="https://github.com/junhobaik">JunhoBaik</a>
      <span>{` | Developed by `}</span>
      <a href="https://github.com/naraekn">NanKim</a>
      <span>{` | Built with `}</span>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );
}
