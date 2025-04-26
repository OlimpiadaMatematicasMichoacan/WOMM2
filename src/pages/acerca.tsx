import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout title="About Us" description="Learn more about us">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Us</h1>
        <p>
          Welcome to our site! We are passionate about sharing knowledge and building a community around our mission.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality resources and tools to help developers and enthusiasts succeed in their projects.
        </p>
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us on <a href="https://github.com/facebook/docusaurus">GitHub</a> or join our{' '}
          <a href="https://discordapp.com/invite/docusaurus">Discord community</a>.
        </p>
      </div>
    </Layout>
  );
}