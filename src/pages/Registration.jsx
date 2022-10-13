import "../styles/Registration.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="registration-container">
      <div className="registration-content">
        <div className="registration--header">
          <img
            className="registration--logo"
            src="./images/CheckMate Logo Transparent Background.png"
            alt=""
          />
          <p className="registration--logo-slogan">
            A project of TUM Junge Akademie
          </p>
        </div>

        <div className="registration--form-container">
          <h2 className="registration--form-title">Who are you?</h2>
          <form className="form">
            <div className="registration--field-container">
              <label htmlFor="">
                Age: <br />
                <input type="number" placeholder="18" />
              </label>
            </div>

            <div className="registration--field-container">
              <label htmlFor="">
                Gender: <br />
                <input type="radio" name="gender" />
                <label htmlFor="">Male</label>
                <br />
                <input type="radio" name="gender" />
                <label htmlFor="">Female</label>
                <br />
                <input type="radio" name="gender" />
                <label htmlFor="">Diverse</label>
                <br />
                <input type="radio" name="gender" />
                <label htmlFor="">No Answer</label>
                <br />
              </label>
            </div>

            <div className="registration--field-container">
              <label htmlFor="media-consumption">
                How much media do you consume in a week? <br />
                <input type="number" min={0} placeholder="3" />
              </label>
            </div>

            <div className="registration--field-container">
              <label htmlFor="self-assessment">
                In your opinion, how well can you detect fake news? (from 1 to
                5) <br />
                <input type="range" min={1} max={5} list="tickmarks" />
                <datalist id="tickmarks">
                  <option value="1" label="1"></option>
                  <option value="2" label="2"></option>
                  <option value="3" label="3"></option>
                  <option value="4" label="4"></option>
                  <option value="5" label="5"></option>
                </datalist>
              </label>
            </div>

            <Link to="/game">
              <div className="submit-container">
                <input
                  type="submit"
                  value={"Continue"}
                  className="registration--submit-button"
                />
              </div>
            </Link>
          </form>
        </div>
      </div>

      <div className="registration--picture-container">
        <img
          className="registration--picture"
          src="./images/registration.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Registration;
