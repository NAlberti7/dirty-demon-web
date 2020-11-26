import React from "react";
import styles from "./Slider.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "../../atoms/SliderItem/SliderItem";
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
    partialVisibilityGutter: 100,
  },
};

const Slider = ({ currentItem }) => {
  const { preview, itemPicture } = currentItem;
  const { front, back } = itemPicture;
  const isSlipper = currentItem.category === "merch";
  const isPants = currentItem.category === "pants";
  const isHoodie = currentItem.category === "buzo";
  const showPreview = !isPants || !isSlipper;

  console.log("isPants", isPants);

  let previewFront;
  let previewBack;

  if (!isSlipper && !isPants) {
    previewFront = preview[0];
    previewBack = preview[1];
  }

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (isMobile && !isSlipper && !isPants) {
    previewFront.replace("800", "600");
    previewBack.replace("800", "600");
  }

  const isHoodieConfig = {
    ...responsive,
    mobile: {
      ...responsive.mobile,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className={styles.slider}>
      {!isSlipper ? (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={false} // means to render carousel on server-side.
          infinite={false}
          autoPlay={false}
          responsive={isHoodie ? isHoodieConfig : responsive}
          containerClass={styles.slider_container}
          arrows={false}
          partialVisible={true}
        >
          <SliderItem image={front} isHoodie={isHoodie} />
          <SliderItem image={back} isHoodie={isHoodie} />
          {!isPants && <SliderItem image={previewFront} isPreview />}
          {!isPants && <SliderItem image={previewBack} isPreview />}
        </Carousel>
      ) : (
        <SliderItem image={front} isSlipper />
      )}
    </div>
  );
};

export default Slider;
