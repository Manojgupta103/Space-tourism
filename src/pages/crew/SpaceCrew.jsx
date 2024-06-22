import "./spacecrew.css";
import { useOutletContext } from "react-router-dom";
import ImageSlider from "../../component/imageSlider/ImageSlider";

const SpaceCrew = () => {
  const { crew } = useOutletContext();

  if (!crew) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="crew">
      <div className="wrapper">
        <p className="intro_text">
          <span className="intro_num">02</span>
          Meet your crew
        </p>

        <ImageSlider details={crew} />
      </div>
    </section>
  );
};

export default SpaceCrew;
