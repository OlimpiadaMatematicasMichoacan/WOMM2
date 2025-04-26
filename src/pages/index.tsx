import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageBackground from '@site/src/components/HomepageBackground';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import styles from './index.module.css';


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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
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
      <HomepageHeader />
      <main>
          <div className={styles.mainContent}>
            <h1>Bienvenido a OMM</h1>
            <p>
            El objetivo de la Olimpiada de Matemáticas es promover el estudio de las matemáticas en forma creativa, lógica y divertida, buscando desarrollar el razonamiento y la imaginación.
            </p>
          </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
