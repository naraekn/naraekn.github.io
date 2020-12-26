import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

interface Props {
  categories: string[]
}

export default function Menu({ categories }: Props) {
  const etc = "기타";

  return (
    <div className="menus">
      <div className="menu">
        <FontAwesomeIcon
          icon={faAngleRight} 
          size="xs"
        />
        <Link to="/" className="title">
          Home
        </Link>
      </div>
      <div className="menu">
        <FontAwesomeIcon
          icon={faAngleRight} 
          size="xs"
        />
        <Link to="/aboutme" className="title">
          About Me
        </Link>
      </div>
      <div className="menu">
        <FontAwesomeIcon
          icon={faAngleRight} 
          size="xs"
        />
        <Link to="/posts" className="title">
          Posts
        </Link>
      </div>
      {
        [...categories, etc].map((category) => (
          <div className="posts" key={category}>
            <span className="title">
              {category}
            </span>
          </div>
        ))
      }
    </div>
  );
}
