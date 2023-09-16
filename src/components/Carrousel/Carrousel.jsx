import React, { useState } from "react";
import "./Carrousel.css";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"

export default function Carousel(props) {
    const images = props.images;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (index, images, next = true) => {
      
    const condition = next
      ? selectedIndex < props.images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    };

  return (
    <div>
      {images.length >= 1 ? (
        <div className="proyect-img-modal-div">
          <img
            src={selectedImage}
            className="proyect-img-modal"
            alt={`imagen ${selectedIndex}`}
          />
          <div className="button-div">
            <button onClick={previous} className="btn-previous">
            <FaArrowCircleLeft/>
            </button>
            <button onClick={next} className="btn-next">
            <FaArrowCircleRight/>
            </button>
          </div>
        </div>
      ) : (
        <img
          src={images[0]}
          className="proyect-img-modal"
          alt={`imagen ${images[0]}`}
        />
      )}
    </div>
  )
}