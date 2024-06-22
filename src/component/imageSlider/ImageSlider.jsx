import { useState, useEffect, useCallback } from "react";
import "./imageSlider.css";

const ImageSlider = ({ details }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setSliderPosition = (index) => {
    let position = "nextSlide";
    if (currentIndex === index) {
      position = "activeSlide";
    }

    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === details.length - 1)
    ) {
      position = "lastSlide";
    }

    return position;
  };

  // validate slide index
  const validateSlideIndex = useCallback(
    (number) => {
      if (number >= details.length) {
        return 0;
      }
      if (number < 0) {
        return details.length - 1;
      }
      return number;
    },
    [details.length]
  );

  //show new slide every 5s
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prevIndex) => validateSlideIndex(prevIndex + 1));
    }, 3000);

    //  clear interval when component unmounts
    return () => clearInterval(slider);
  }, [validateSlideIndex, currentIndex]);

  return (
    <div className="slider__container">
      <div className="slider__left">
        <div className="image__container">
          {details.map((item, index) => {
            const position = setSliderPosition(index);
            return (
              <div key={item.name} className={`image ${position}`}>
                <img src={item.images.webp} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>

      {/* slider__right */}
      <div className="slider__right">
        {/* carousel btn */}
        <div className="carousel__btns">
          {details.map((btn, index) => (
            <span
              key={index}
              className={`carousel__btn ${index === currentIndex && "active"}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        <div className="description">
          {details.map((desc, index) => {
            const { role, bio, name } = desc;
            const position = setSliderPosition(index);

            return (
              <div className={`desc__text ${position}`} key={index}>
                <p className="role">{role}</p>
                <h3>{name}</h3>
                <p className="info">{bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
