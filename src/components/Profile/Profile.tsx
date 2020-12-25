import React from 'react';

import AboutMe from './AboutMe';
import Categories from './Categories';
import SocialButtons from './SocialButtons';
import './profile.scss';
import config from '../../../_config';

export default function Profile () {
  const { comment, name, company, location, email, website, linkedin, facebook, instagram, github } = config;

  const categories: string[] = [
    'Today I Leared',
    '서평',
    '스터디회고',
    'Experience'
  ];

  return (
    <div className="profile">
      <AboutMe 
        comment={comment}
        name={name}
        company={company}
        location={location}
        email={email}
        website={website}
      />
      <SocialButtons 
        linkedin={linkedin}
        facebook={facebook}
        instagram={instagram}
        github={github}
      />
      <Categories 
        categories={categories}
      />
    </div>
  );
};
