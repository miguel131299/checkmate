import "../styles/Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu--info-container">
        <div className="menu--user-greeting menu--section">
          <img src="./images/user-icon.png" alt="" />
          <h2>Hi, Test User!</h2>
        </div>
        <div className="menu--user-info menu--section">
          <div className="menu--user-point">
            Points: <span className="bold score">1850</span>
          </div>
          <div className="menu--user-level ">
            Level: <span className="bold score">Semi-expert</span>
          </div>
        </div>
      </div>
      <div className="menu--logo-container">
        <img
          className="menu--logo"
          src="./images/CheckMate Logo Transparent Background.png"
          alt=""
        />
        <p className="menu--logo-slogan">A project of TUM Junge Akademie</p>
      </div>
    </div>
  );
}
