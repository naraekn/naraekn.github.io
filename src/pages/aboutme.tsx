import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../components/Layout';
import Navigation from '../components/Navigation/Navigation';
import './styles/aboutme.scss';

export default function AboutMe() {
  return (
    <Layout>
      <div className="index-wrap">
        <Navigation />
        <div className="index-post-list-wrap">
          <div id="aboutme">
            <div className="content">
              준비중 뚝딱뚝딱
              <FontAwesomeIcon className="icon" icon={faCoffee} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
