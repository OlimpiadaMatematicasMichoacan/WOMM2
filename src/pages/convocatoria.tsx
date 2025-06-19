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
        <Heading as="h1" className={clsx(styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
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

import React from 'react';

export function Convocatoria() {
  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: '2rem 1rem'}}>
      <h1>Convocatoria Olimpiada Michoacana de Matemáticas 2025</h1>
      <p>
        ¡Participa en la Olimpiada Michoacana de Matemáticas! Si eres estudiante de secundaria o bachillerato en Michoacán y te apasionan los retos matemáticos, esta es tu oportunidad para demostrar tu ingenio y creatividad.
      </p>
      <h2>¿Quiénes pueden participar?</h2>
      <ul>
        <li>Estudiantes de secundaria y bachillerato del estado de Michoacán.</li>
        <li>No es necesario tener experiencia previa en olimpiadas matemáticas.</li>
      </ul>
      <h2>Etapas del concurso</h2>
      <ol>
        <li><strong>Examen selectivo:</strong> Se realizará en línea y estará abierto a todos los inscritos.</li>
        <li><strong>Entrenamientos:</strong> Los mejores puntajes serán invitados a sesiones de preparación y resolución de problemas.</li>
        <li><strong>Examen estatal:</strong> Los finalistas competirán por un lugar en la delegación de Michoacán para la Olimpiada Mexicana de Matemáticas.</li>
      </ol>
      <h2>¿Cómo me inscribo?</h2>
      <p>
        Regístrate en nuestro sistema en línea: <a href="https://registro.olimpiadamatematicasmichoacan.org:8443/login/signup.php?" target="_blank" rel="noopener noreferrer">Formulario de inscripción</a>
      </p>
      <h2>Fechas importantes</h2>
      <ul>
        <li><strong>Inscripciones:</strong> 1 de julio al 31 de agosto de 2025</li>
        <li><strong>Examen selectivo:</strong> 7 de septiembre de 2025</li>
        <li><strong>Entrenamientos:</strong> septiembre - octubre de 2025</li>
        <li><strong>Examen estatal:</strong> 25 de octubre de 2025</li>
      </ul>
      <h2>Contacto</h2>
      <p>
        Si tienes dudas, escríbenos a <a href="mailto:olimpiada.omm@gmail.com">olimpiada.omm@gmail.com</a> o visita nuestras redes sociales.
      </p>
    </div>
  );
}
