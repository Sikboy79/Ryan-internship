import React from "react";

export const FadeInItem = ({children, delay= 800}) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={delay}
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
      data-aos-once="false"
    >
      {children}
    </div>
  );
};


export const FadeUpSlowItem = ({children, delay=600}) => {
    return (
    <div
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
    >
        {children}
    </div>
    );
};


export const FadeUpFastItem = ({children, delay=800}) => {
    return (
    <div
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
    >
        {children}
    </div>
    );
};


export const SlideRightItem = ({children, delay=100}) => {
    return (
    <div
        data-aos="fade-left"
        data-aos-delay={delay}
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
        data-aos-once="false"
    >
        {children}
    </div>
    );
};