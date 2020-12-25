import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  categories: string[]
}

export default function Categories({ categories }: Props) {
  const etc = "기타";

  return (
    <div className="categories">
      {
        [...categories, etc].map((category) => (
          <div className="category" key={category}>
            <FontAwesomeIcon
              icon={faAngleRight} 
              size="xs"
            />
            <span className="title">
              {category}
            </span>
          </div>
        ))
      }
    </div>
  );
}
