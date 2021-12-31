import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const HeroImg = function ({ filename, alt }) {
  return (
    <StaticQuery
      query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
      render={(data) => {
        const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

        if (!image) return null;

        const imageFixed = image.node.childImageSharp.fixed;
        return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
      }}
    />
  );
};

HeroImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

HeroImg.defaultProps = {
  filename: 'iaWeds_Hero.jpeg',
  alt: 'picture',
};

export default HeroImg;
