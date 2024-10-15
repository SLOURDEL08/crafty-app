import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ov1 from '../images/ov1.png';
import ov2 from '../images/ov2.png';
import ov3 from '../images/ov3.png';

const SectionCarousel: React.FC = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    dots: true,
    swipe: true,
    draggable: true,
    touchMove: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    customPaging: (i: number) => (
      <div
        className={`w-2.5 h-2.5 mt-14 rounded-full transition-colors duration-300 cursor-pointer ${
          i === 1 ? 'bg-gray-900' : 'bg-gray-200 hover:bg-gray-500'
        }`}
      />
    ),
    dotsClass: 'slick-dots slick-thumb',
  };

  return (
    <section className="-mx-40 py-10">
      <Slider {...settings}>
        <div className="px-10">
          <div className="h-[400px] border rounded-3xl relative flex items-center justify-center text-white font-bold text-2xl">
            <img src={ov1} className="absolute rounded-3xl object-cover object-left-top w-full h-full inset-0" alt="" />
            <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
          </div>
        </div>
        <div className="px-10">
          <div className="h-[400px] border rounded-3xl relative flex items-center justify-center text-white font-bold text-2xl">
            <img src={ov2} className="absolute rounded-3xl scale-100 object-cover object-left-top w-full h-full inset-0" alt="" />
            <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
          </div>
        </div>
        <div className="px-10">
          <div className="h-[400px] border rounded-3xl relative flex items-center justify-center text-white font-bold text-2xl">
            <img src={ov3} className="absolute object-cover rounded-3xl object-left-top w-full h-full inset-0" alt="" />
            <div className="absolute w-full h-full rounded-3xl bg-gradient-to-t from-black to-transparent z-10 inset-0 transition-opacity duration-500 hover:opacity-0"></div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SectionCarousel;