import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { a } from '@react-spring/three';

const sponsors = [
  {
    name: 'UNAM',
    Svg: require('@site/static/sponsors/unam.svg').default,
  },
  {
    name: 'UMSNH',
    Svg: require('@site/static/sponsors/umsnh.svg').default,
  },
  {
    name: 'CCM',
    Svg: require('@site/static/sponsors/unam.svg').default,
  },
    {
    name: 'UMSNH',
    Svg: require('@site/static/sponsors/umsnh.svg').default,
  },
    {
    name: 'UMSNH',
    Svg: require('@site/static/sponsors/umsnh.svg').default,
  },
    {
    name: 'UMSNH',
    Svg: require('@site/static/sponsors/umsnh.svg').default,
  },
];

export default function Sponsors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.sponsors}>
      <h2>Sponsors</h2>
      <Slider {...settings} className={styles.carousel}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className={styles.sponsor}>
            <div className="text--center">
              <sponsor.Svg className={styles.logo} role="img" />
            </div>
            <h4 className="text--center">{sponsor.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
}