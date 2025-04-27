import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageBackground from '@site/src/components/HomepageBackground';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import styles from './index.module.css';

import Testimonials from '@site/src/components/HomepageTestimonials';
import Sponsors from '@site/src/components/HomepageSponsors';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <> 

    <header className={clsx(styles.heroCanvas)}>
      <div className={clsx(styles.heroContainer)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>

      <HomepageBackground />

    </header>

    </>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={clsx(styles.heroCanvas)}>
      <HomepageHeader />
      </div>
      <main>
          <div className="padding--xl text--center">
            <p className="hero__subtitle">
            El objetivo de la Olimpiada de Matemáticas es promover el estudio de las matemáticas en forma creativa, lógica y divertida, buscando desarrollar el razonamiento y la imaginación.
            </p>
          </div>
        <HomepageFeatures />
        <Testimonials />
        <Sponsors />
      </main>
    </Layout>
  );
}
