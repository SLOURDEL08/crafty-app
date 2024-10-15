import React from 'react';
import ov1 from '../images/ov1.png';
import ov2 from '../images/ov2.png';
import ov3 from '../images/ov3.png';
import restab from '../images/restab.png';
import webapp from '../images/webapp.png';
import arrow from '../images/arrow.svg'


const GallerySection: React.FC = () => {
  const images = [
    { src: ov1, alt: 'Image 1' },
    { src: ov3, alt: 'Image 2' },
    { src: ov2, alt: 'Image 3' },
    { src: restab, alt: 'Image 4' },
    { src: webapp, alt: 'Image 4' },
  ];

  return (
    <section className="gallery pb-20 max-w-[1400px] px-20 mx-auto h-80 md:h-auto">
      <div className="flex h-[600px] flex-col md:flex-row gap-10">
        <figure className="relative rounded-3xl border w-full md:w-1/3 overflow-hidden">
          <img src={images[0].src} className="w-full rounded-3xl h-full object-cover" alt={images[0].alt} />
          <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
        </figure>
        <article className="w-full md:w-2/3 flex flex-col gap-10 justify-between h-full">
          <div className="flex w-full h-full gap-10">
            {images.slice(1, 3).map((image, index) => (
              <figure key={index} className="border rounded-3xl relative w-full h-full overflow-hidden">
                <img src={image.src} className="w-full rounded-3xl h-full object-cover" alt={image.alt} />
                <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
              </figure>
            ))}
          </div>
          <figure className="border rounded-3xl relative w-full h-full overflow-hidden">
            <img src={images[3].src} className="w-full rounded-3xl h-full object-cover" alt={images[3].alt} />
            <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
          </figure>
        </article>
      </div>
      <div className="h-[300px] gap-10 mt-10 flex w-full">
        <figure className="relative border rounded-3xl h-full w-2/3 overflow-hidden">
          <img src={images[4].src} className="w-full rounded-3xl h-full object-cover" alt={images[0].alt} />
          <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
        </figure>
        <figure className="relative rounded-3xl backdrop-blur-xl border h-full w-1/3 overflow-hidden">
          <img src={images[0].src} className="w-full  rounded-3xl h-full object-cover" alt={images[0].alt} />
                  <div className="absolute  p-10 w-full h-full rounded-3xl bg-gradient-to-l from-[#8D49F7] opacity-90  flex flex-col gap-4  justify-center items-center to-[#586EE1] z-10 inset-0 transition-opacity duration-500 backdrop-blur-xl">
                      <span className="text-3xl font-bold text-white">Voir toutes les options</span>
          <img src={arrow} alt="" className=" w-[80px] mx-auto text-center" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default GallerySection;