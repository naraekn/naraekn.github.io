import React from 'react';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Navigation from '../components/Navigation/Navigation';
import './styles/index.scss';
import PostList from '../components/PostList';

interface Props {
  path: string;
  data: any;
}

export default function PostsPage ({
  path, data,
}: Props) {
  const posts = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO title={title} />
      <div className="index-wrap">
        <Navigation />
        <div className="index-post-list-wrap">
          <PostList posts={posts} title="All Posts" />
          {posts.length < 100 ? null : (
            <div className="show-more-posts">
              <div className="show-more-btn">
                <Link to="/search">
                  <Fa icon={faSearch} />
                  <span>SHOW MORE POSTS</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 100) {
      edges {
        node {
          excerpt(truncate: true, format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            update(formatString: "MMM DD, YYYY")
            title
            tags
            category
          }
        }
      }
    }
  }
`;
