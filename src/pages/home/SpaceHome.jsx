import "./SpaceHome.css";
import { Link } from "react-router-dom";

const SpaceHome = () => {
  return (
    <main className="home__hero">
      <div className="wrapper">
        <div className="hero__content__container">
          {/* hero text */}
          <div className="hero__text">
            <p className="intro_text">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="hero__heading">space</h1>
            <p className="hero__insight__text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          {/* hero explore */}
          <div>
            <Link to="destination">
              <div className="hero__explore">
                <p>EXPLORE</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpaceHome;
