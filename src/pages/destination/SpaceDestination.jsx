import React, { useState } from "react";
import "./SpaceDestination.css";
import { useOutletContext } from "react-router-dom";

const SpaceDestination = () => {
  const { destinations } = useOutletContext();

  const [displayedIndex, setDisplayedIndex] = useState(0);

  if (!destinations) {
    return <h1>Loading</h1>;
  }

  const {
    description,
    distance,
    images: { webp },
    name,
    travel,
  } = destinations[displayedIndex];

  const planetNames = destinations.map((planet) => planet.name);

  return (
    <section className="destination">
      <div className="wrapper">
        <p className="intro_text">
          <span className="intro_num">01</span>
          Pick your destination
        </p>
        <div className="destination__container">
          {/* destination left */}
          <div className="destination__left">
            <img src={webp} alt={name} />
          </div>

          {/* destination right */}
          <div className="destination__right">
            {/* planet names*/}
            {planetNames.map((planet, index) => (
              <button
                key={index}
                className={`destination__planet__btn ${
                  index === displayedIndex && "isActive"
                }`}
                onClick={() => setDisplayedIndex(index)}
              >
                {planet}
              </button>
            ))}

            <h2>{name}</h2>
            <p>{description}</p>

            <div className="destination__distance_wrapper">
              {/*  DISTANCE */}
              <div className="destination__distance">
                <h4>AVG. DISTANCE</h4>
                <p>{distance}</p>
              </div>
              {/* travel */}
              <div className="destination__travel">
                <h4>Est. travel time</h4>
                <p>{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceDestination;
