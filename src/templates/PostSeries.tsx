import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

interface Props {
  series: any;
  slug: any;
}

export default function PostSeries({
  series,
  slug,
}: Props) {
  return (
    <div className="series">
      <div className="series-head">
        <span className="head">Post Series</span>
        <div className="icon-wrap">
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
      </div>
      <ul className="series-list">
        {
          series.map((post: any) => (
            <li 
              key={`${post.slug}-series-${post.num}`} 
              className={`series-item ${slug === post.slug ? 'current-series' : ''}`}
            >
              <Link to={post.slug}>
                <span>{post.title}</span>
                <div className="icon-wrap">
                  {slug === post.slug && <FontAwesomeIcon icon={faAngleLeft} />}
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
