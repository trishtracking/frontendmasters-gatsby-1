import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About this</h1>
    <p>
      I did the Gatsby intro from Front End Masters in my first week at the
      Ellen MacArthur Foundation.
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
