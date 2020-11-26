//SHOWCASE
export const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

export const frameVariants = {
  hover: { scale: 0.95 }
};

export const imageVariants = {
  hover: { scale: 1.1 }
};

//ITEM PAGE
export const transitionItem = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const imageVariantsItem = {
  exit: { y: "50%", opacity: 0, transitionItem },
  enter: {
    y: "0%",
    opacity: 1,
    transitionItem
  }
};

export const backVariantsItem = {
  exit: { x: 100, opacity: 0, transitionItem },
  enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transitionItem } }
};
