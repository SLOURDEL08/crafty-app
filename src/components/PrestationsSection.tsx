import React from 'react';
import elips from '../images/elips.svg';
import iconCrea from '../images/crea.svg';
import iconChart from '../images/chart.svg';
import iconCom from '../images/comm.svg';
import iconNet from '../images/network.svg';
import iconElem from '../images/lay/elementor.png';
import iconDivi from '../images/lay/divi.png';
import iconStripe from '../images/lay/stripe.png';
import iconWp from '../images/lay/wp.png';
import iconSeo from '../images/lay/seo.png';
import iconCad from '../images/lay/cadena.png';
import iconAdob from '../images/lay/adobe.png';
import iconFig from '../images/lay/figma.png';

const PrestationsSection: React.FC = () => {
  const services = [
    {
      icon: iconCrea,
      title: 'Création de site web',
      description: 'Vitrine ou e-commerce professionel',
    },
    {
      icon: iconChart,
      title: 'Création de site web',
      description: 'Vitrine ou e-commerce professionel',
    },
    {
      icon: iconCom,
      title: 'Création de site web',
      description: 'Vitrine ou e-commerce professionel',
    },
    {
      icon: iconNet,
      title: 'Création de site web',
      description: 'Vitrine ou e-commerce professionel',
    },
  ];

  const frameworks = [
    iconElem,
    iconDivi,
    iconStripe,
    iconWp,
    iconSeo,
    iconCad,
    iconAdob,
    iconFig,
  ];

  return (
    <section className="relative pt-10 w-3/4 overflow-visible space-y-14 mx-auto">
      <h2 className="text-6xl font-bold mx-auto leading-snug">
        Nous nous occupons de la digitalisation de votre marque.
      </h2>
      <img src={elips} className="w-full opacity-10 z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute" alt="" />

      <article className="grid min-w-[900px] w-[900px] grid-cols-2 gap-12 py-10 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full z-20 shadowed flex gap-6 items-start bg-white p-6 px-8 rounded-3xl"
          >
            <img src={service.icon} alt="" className="w-[70px]" />
            <div className="text-left">
              <span className="text-xl uppercase rubik font-semibold">{service.title}</span>
              <p className="pt-1 leading-6">{service.description}</p>
            </div>
          </div>
        ))}
      </article>

      <div className="flex items-center justify-center gap-10 opacity-20">
        {frameworks.map((framework, index) => (
          <img key={index} src={framework} className="h-10" alt="" />
        ))}
      </div>
    </section>
  );
};

export default PrestationsSection;