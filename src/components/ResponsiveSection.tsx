import React from 'react';
import iconImac from '../images/imac.svg';
import iconBook from '../images/book.svg';
import iconTab from '../images/tab.svg';
import iconPhone from '../images/phone.svg';
import GroupSectionImage from '../images/groupsection.png';

const ResponsiveSection: React.FC = () => {
  const devices = [
    { icon: iconImac, alt: 'iMac' },
    { icon: iconBook, alt: 'Laptop' },
    { icon: iconTab, alt: 'Tablet' },
    { icon: iconPhone, alt: 'Smartphone' },
  ];

  return (
    <section className="pt-28 space-y-14 w-full">
      <h2 className="text-6xl font-bold w-2/3 mx-auto leading-snug">
        Votre site web adapté pour chaque appareil.
      </h2>

      <article className="flex items-center justify-center gap-6">
        {devices.map((device, index) => (
          <div key={index}>
            <img src={device.icon} alt={device.alt} className="h-10" />
          </div>
        ))}
      </article>

      <div className="w-full">
        <img src={GroupSectionImage} className="w-full -mt-10" alt="" />
      </div>
    </section>
  );
};

export default ResponsiveSection;