import React from 'react';

import styled from '@emotion/styled';

import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBg = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffbb 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px, 1px, 3px, red;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #000;
    margin-top: 0;
  }
`;
const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "slothdolphin.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBg Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1> Frontend Masters: Gatsby intro workshop &hearts;</h1>
        <p>
          {' '}
          <Link to="/about/">Learn more &rarr; </Link>
        </p>
      </TextBox>
    </ImageBg>
  );
};

export default Hero;
