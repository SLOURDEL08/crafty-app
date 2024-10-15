declare module 'react-slick' {
  import { ComponentType } from 'react';

  interface Settings {
    className?: string;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    cssEase?: string;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: boolean | 'ondemand' | 'progressive';
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    rtl?: boolean;
    waitForAnimate?: boolean;
  }

  const Slider: ComponentType<Settings>;
  export default Slider;
}
