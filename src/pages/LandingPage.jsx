import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="lp-container">
      <header className="lp--header">
        <div className="lp--logo-container">
          <img
            className="lp--logo"
            src="./images/CheckMate Logo Transparent Background.png"
            alt="Checkmate Logo"
          />
          <p className="lp--logo-slogan">A project of TUM Junge Akademie</p>
        </div>

        <div className="lp--sign-buttons-container">
          <Link to="/register">
            <button className="lp--button lp--sign-in-button">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="lp--button lp--sign-up-button">Sign Up</button>
          </Link>
        </div>
      </header>

      <div className="lp--main-container">
        <div className="lp--main-text">
          <h2 className="lp--main-title">
            Improve your skills to identify Fake News, wherever you are
          </h2>
          <p className="lp--main-description">
            Test your knowledge with our "fake" news and compete with your
            friends
          </p>
          <Link to="/register">
            <button className="lp--main-button">Let's get started!</button>
          </Link>
        </div>
        <div className="lp--main-img-container">
          <img
            className="lp--main-img"
            src="./images/People using their phones.png"
            alt="People using their phones"
          />
        </div>
      </div>

      <div className="lp--trivia-container">
        <h2 className="lp--trivia-question">Did you know?</h2>

        <div className="lp--facts-container">
          <div className="lp--fact-container">
            <h3 className="lp--fact-title">45%</h3>
            <p className="lp--fact-description">
              News consumers believed that they encounter fake news on a daily
              basis
            </p>
          </div>

          <div className="lp--fact-container">
            <h3 className="lp--fact-title">74%</h3>
            <p className="lp--fact-description">
              News consumers worried about the spread of fake news
            </p>
          </div>

          <div className="lp--fact-container">
            <h3 className="lp--fact-title">Social Media</h3>
            <p className="lp--fact-description">
              Most likely platform to ecounter fake news
            </p>
          </div>

          <div className="lp--fact-container">
            <h3 className="lp--fact-title">10%</h3>
            <p className="lp--fact-description">
              News consumers admitted to sharing fake news
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
