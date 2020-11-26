import React from "react";
import styles from "./SliderCheckout.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CheckoutItem from "../../molecules/CheckoutItem/CheckoutItem";
import { useMediaQuery } from "react-responsive";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 105,
  },
};

const SliderCheckout = ({ cartItems }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.sliderCheckout}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        responsive={responsive}
        containerClass={styles.sliderCheckout_container}
        arrows={false}
        partialVisible={true}
      >
        {cartItems &&
          cartItems.map((item, index) => {
            return <CheckoutItem item={item} index={index} isMobile={isMobile} />;
          })}
      </Carousel>
    </div>
  );
};

export default SliderCheckout;
