import React from "react";
import PropTypes from "prop-types";

const ImagePreview=({title, image, alt})=>(
    <div>
        <h2>{title}</h2>
        <img src={image} alt={alt}/>
    </div>
);

ImagePreview.propTypes={
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ImagePreview;
