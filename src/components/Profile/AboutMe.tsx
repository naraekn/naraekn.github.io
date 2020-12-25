import React from 'react';
import { faUserCircle, faAddressCard, faMapMarkerAlt, faAt, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  comment: string;
  name: string;
  location: string;
  company: string;
  email: string;
  website: string;
}

export default function AboutMe({
  comment,
  name,
  location,
  company,
  email,
  website,
}: Props) {
  return (
    <>
      { comment && <span className="comment">{comment}</span> }

      { name && (
        <div className="bio-item name">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <span>{name}</span>
        </div>
      )}

      { company && (
        <div className="bio-item company">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <span>{company}</span>
        </div>
      )}

      { location && (
        <div className="bio-item location">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span>{location}</span>
        </div>
      )}

      { email && (
        <div className="bio-item email">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faAt} />
          </div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      )}

      { website && (
        <div className="bio-item website">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faLink} />
          </div>

          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      )}
    </>  
  );
}
