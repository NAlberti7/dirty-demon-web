import React from "react";
import PreviewContainer from "./PreviewContainer";

export default {
  title: "Molecules | PreviewContainer",
};

const images = [
  "https://res.cloudinary.com/dvmll0ruo/image/upload/v1582160473/lookbook/7V9A3365_rf2e32.jpg",
  "https://res.cloudinary.com/dvmll0ruo/image/upload/v1582160473/lookbook/7V9A3365_rf2e32.jpg",
];

export const previewContainer = () => <PreviewContainer previewImages={images} />;
