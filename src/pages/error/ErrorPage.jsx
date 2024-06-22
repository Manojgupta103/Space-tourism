import "./errorpage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error">
      <div className="wrapper">
        <div className="error__container">
          {/* error left */}
          <div className="error__left">
            <img src="./assets/error/errorimage.png" alt="error" />
          </div>

          {/* error right */}
          <div className="error__right">
            <p className="error__introText">error code: 404</p>
            <h3>looks like you're lost</h3>
            <p>
              sorry buddy but the page you're trying to open doesn't exist here,
              maybe you go to space and then it become visible
            </p>
            <Link to="..">go back to home page</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
