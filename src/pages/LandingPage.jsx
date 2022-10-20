import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="lp-container">
      <header className="lp--header">
        <div className="lp--logo-container">
          <Link to="/">
            <div className="logo-container">
              <img
                className="lp--logo"
                src="./images/CheckMate Logo Transparent Background.png"
                alt="Checkmate Logo"
              />
            </div>
          </Link>
          <p className="lp--logo-slogan">Ein Projekt der TUM: Junge Akademie</p>
        </div>
      </header>

      <div className="lp--main-container">
        <div className="lp--main-text">
          <h2 className="lp--main-title">
            Verbessern Sie Ihre Fähigkeiten, Fake News zu erkennen, wo immer Sie
            sind
          </h2>
          <p className="lp--main-description">
            Testen Sie Ihr Wissen mit unseren "gefälschten" Nachrichten und
            messen Sie sich mit Ihren Freunden
          </p>
          <Link to="/register">
            <button className="lp--main-button">Loslegen!</button>
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
        <h2 className="lp--trivia-question">Wussten Sie?</h2>

        <div className="lp--facts-container">
          <div className="lp--fact-container">
            <h3 className="lp--fact-title">33%</h3>
            <p className="lp--fact-description">
              aller Inhalte im Internet sind Fake News oder Hassreden
            </p>
          </div>

          <div className="lp--fact-container">
            <h3 className="lp--fact-title">9,6 Millionen</h3>
            <p className="lp--fact-description">
              Die Zahl der von Facebook entfernten Hassreden im Jahr 2020
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
