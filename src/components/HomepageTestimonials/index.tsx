// filepath: /Users/roicort/GitHub/WOMM2/src/components/HomepageTestimonials/index.tsx
import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Juan Pérez',
    text: 'La Olimpiada de Matemáticas me ayudó a desarrollar mi pensamiento lógico y a disfrutar de las matemáticas.',
  },
  {
    name: 'María López',
    text: 'Participar en la Olimpiada fue una experiencia increíble que me motivó a seguir aprendiendo.',
  },
  {
    name: 'Carlos García',
    text: 'Gracias a la Olimpiada, descubrí mi pasión por resolver problemas matemáticos.',
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={styles.testimonials}>
      <h2>Testimonios</h2>
      <Slider {...settings} className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
}