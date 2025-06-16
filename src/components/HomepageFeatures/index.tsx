import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pruébate',
    Svg: require('@site/static/problemas/tablaSumas.svg').default,
    description: (
      <>
        A mi tabla de sumas le cayó tinta encima. ¿Qué número debe ir en lugar de la estrella?
      </>
    ),
  },
  {
    title: 'Asómbrate',
    Svg: require('@site/static/problemas/cubosPagina.svg').default,
    description: (
      <>
        ¿Cuántos cubitos más deben agregarse para formar un cubo más grande?
      </>
    ),
  },
  {
    title: 'Diviértete',
    Svg: require('@site/static/problemas/pentagono.svg').default,
    description: (
      <>
        ¿Qué porcentaje del pentágono está sombreado?
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h1 className="section-title text-white">Problemas de <span style={{color:"cyan"}}>ingenio</span>, no de memorización.</h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
