import React from 'react';

import Profile from './Profile';
import Menu from './Menu';
import SocialButtons from './SocialButtons';
import config from '../../../_config';
import './navigation.scss';

export default function Navigation () {
  const { comment, name, company, location, email, website, linkedin, facebook, instagram, github } = config;

  const categories: string[] = [
    'Today I Leared',
    '서평',
    '스터디회고',
    'Experience'
  ];

  return (
    <div className="navigation">
      <Profile 
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
      <Menu 
        categories={categories}
      />
    </div>
  );
};
