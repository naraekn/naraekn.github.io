import React from 'react';

import { 
  FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon, PocketIcon, EmailIcon,
  LinkedinShareButton, PocketShareButton,  RedditShareButton, TwitterShareButton,
  EmailShareButton, FacebookShareButton, 
} from 'react-share';

interface Props {
  config: any;
  slug: any;
}

export default function SocialShare({ 
  config, slug 
}: Props) {
  return (
    <div className="social-share">
      <ul>
        <li className="social-share-item email">
          <EmailShareButton url={config.siteUrl + slug}>
            <EmailIcon size={24} round={true} />
          </EmailShareButton>
        </li>
        <li className="social-share-item facebook">
          <FacebookShareButton url={config.siteUrl + slug}>
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
        </li>
        <li className="social-share-item twitter">
          <TwitterShareButton url={config.siteUrl + slug}>
            <TwitterIcon size={24} round={true} />
          </TwitterShareButton>
        </li>
        <li className="social-share-item linkedin">
          <LinkedinShareButton url={config.siteUrl + slug}>
            <LinkedinIcon size={24} round={true} />
          </LinkedinShareButton>
        </li>
        <li className="social-share-item reddit">
          <RedditShareButton url={config.siteUrl + slug}>
            <RedditIcon size={24} round={true} />
          </RedditShareButton>
        </li>
        <li className="social-share-item pocket">
          <PocketShareButton url={config.siteUrl + slug}>
            <PocketIcon size={24} round={true} />
          </PocketShareButton>
        </li>
      </ul>
    </div>
  );
}
