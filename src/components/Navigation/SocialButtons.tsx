import React from 'react';
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navigation.scss';

interface Props {
  linkedin: string;
  facebook: string;
  instagram: string;
  github: string;
}

export default function SocialButtons({
  linkedin, 
  facebook, 
  instagram, 
  github
}: Props) {
  return (
    <div className="social">
      { linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
        </a>
      )}

      { facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="facebook" />
        </a>
      )}
      { instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="instagram" />
        </a>
      )}
      { github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github" />
        </a>
      )}
    </div>
  );
}
