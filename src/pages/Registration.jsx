import "../styles/Registration.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

function Registration() {
  const { user, handleRegistrationChange } = useContext(Context);

  return (
    <div className="registration-container">
      <div className="registration-content">
        <div className="registration--header">
          <Link to="/">
            <div className="logo-container">
              <img
                className="registration--logo"
                src="./images/CheckMate Logo Transparent Background.png"
                alt=""
              />
            </div>
          </Link>
          <p className="registration--logo-slogan">
            A project of TUM: Junge Akademie
          </p>
        </div>

        <div className="registration--form-container">
          <h2 className="registration--form-title">Who are you?</h2>
          <form className="form">
            <div className="registration--field-container">
              <label htmlFor="">
                Age: <br />
                <input
                  type="number"
                  placeholder="18"
                  onChange={handleRegistrationChange}
                  name="age"
                  value={user.age}
                />
              </label>
            </div>

            <div className="registration--field-container">
              <label htmlFor="">
                Gender: <br />
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  checked={user.gender === "male"}
                  onChange={handleRegistrationChange}
                />
                <label htmlFor="">Male</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  checked={user.gender === "female"}
                  onChange={handleRegistrationChange}
                />
                <label htmlFor="">Female</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  value={"diverse"}
                  checked={user.gender === "diverse"}
                  onChange={handleRegistrationChange}
                />
                <label htmlFor="">Diverse</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  value={"noAnswer"}
                  checked={user.gender === "noAnswer"}
                  onChange={handleRegistrationChange}
                />
                <label htmlFor="">No Answer</label>
                <br />
              </label>
            </div>

            <div className="registration--field-container">
              <label htmlFor="media-consumption">
                How much media do you consume in a week? <br />
                <input
                  type="number"
                  placeholder="3"
                  onChange={handleRegistrationChange}
                  name="mediaConsumtion"
                  value={user.mediaConsumtion}
                />
              </label>
            </div>

            <div className="registration--field-container">
              <label htmlFor="self-assessment">
                In your opinion, how well can you detect fake news? (from 1 to
                5) <br />
                <input
                  type="range"
                  min={1}
                  max={5}
                  list="tickmarks"
                  onChange={handleRegistrationChange}
                  name="fakeNewsDetection"
                  value={user.fakeNewsDetection}
                />
                <datalist id="tickmarks">
                  <option value="1" label="1"></option>
                  <option value="2" label="2"></option>
                  <option value="3" label="3"></option>
                  <option value="4" label="4"></option>
                  <option value="5" label="5"></option>
                </datalist>
              </label>
            </div>

            <Link to="/game" style={{ textDecoration: "none" }}>
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
