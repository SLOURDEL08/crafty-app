import React from 'react';
import elipsblue from '../images/elipsblue.png';
import elips from '../images/elips.svg';
import card from '../images/card.svg';
import calendar from '../images/calendar.svg';
import chat from '../images/chat.svg';
import loca from '../images/loca.svg';
import stat from '../images/stat.svg';
import pouce from '../images/pouce.svg';
import mail from '../images/mail.svg';
import bag from '../images/bag.svg';
import arrow from '../images/arrow.svg';
import iconStripe from '../images/lay/stripe.png';

const PluginsSection: React.FC = () => {
  const plugins = [
    { icon: card, title: 'Boutique' },
    { icon: calendar, title: 'Boutique' },
    { icon: chat, title: 'Boutique' },
    { icon: loca, title: 'Boutique' },
    { icon: stat, title: 'Boutique' },
    { icon: pouce, title: 'Boutique' },
    { icon: mail, title: 'Boutique' },
    { icon: bag, title: 'Boutique' },
  ];

  return (
    <section className="space-y-14 relative w-full">
      <img
        src={elipsblue}
        className="w-full opacity-15 absolute top-0 -left-96 pointer-events-none"
        alt=""
      />
      <img
        src={elips}
        className="w-full opacity-15 absolute bottom-0 -right-96 pointer-events-none"
        alt=""
      />
      <h2 className="text-6xl font-bold w-3/4 mx-auto leading-snug">
        Des dizaines d'options disponible à ajouter sur votre site.
      </h2>

      <article className="grid w-3/4 grid-cols-3 gap-12 py-10 px-20 mx-auto">
        {plugins.map((plugin, index) => (
          <div
            key={index}
            className="w-full group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl"
          >
            <img src={plugin.icon} alt="" className="w-[100px] mx-auto mb-4 text-center" />
            <span className="text-xl font-regular">{plugin.title}</span>
            <div className="inset-0 group-hover:opacity-100 opacity-0 transition-all duration-700 flex flex-col gap-4 justify-center items-center p-6 absolute bg-black/80 backdrop-blur-xl rounded-3xl w-full h-full">
              <img src={iconStripe} alt="" className="h-10 invert" />
              <p className="text-sm text-white">
                Extension paiement sécurisé avec Stripe. (généralement utilisé pour la vente de services).
              </p>
            </div>
          </div>
        ))}

        <div className="w-full cursor-pointer h-full flex flex-col justify-center items-center gap-4 gradient-layer group z-20 relative shadowed text-center my-auto bg-white p-8 rounded-3xl">
          <span className="text-2xl font-bold text-white">Voir toutes les options</span>
          <img src={arrow} alt="" className="w-[50px] mx-auto text-center" />
        </div>
      </article>
    </section>
  );
};

export default PluginsSection;