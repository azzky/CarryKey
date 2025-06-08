import React from 'react';
import Image from "gatsby-plugin-sanity-image"

const ImageComponent = ({ image, alt, className, width }) => {
  if (!image) return null;

  return (
    <Image
        {...image}
        alt={alt || ""}
        width={width}
        className={className}
        loading='lazy'
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }}
    />
  );
};

export default ImageComponent;