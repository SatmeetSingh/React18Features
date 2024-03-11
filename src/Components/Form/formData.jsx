/* eslint-disable react/prop-types */
import styles from "./form.module.css";
import useAPI from "../../utils/Context";
import { useState } from "react";

function FormData({ toggleForm }) {
  const {
    handlenameChange,
    handlePhoneNumberChange,
    handleEmailChange,
    handleuserChange,
    handleWebsiteChange,
    handleStreetChange,
    handlesuiteChange,
    handleCityChange,
    handleCodeChange,
    handlePlaceChange,
    handleCompanyname,
    handlecatchPhrase,
    handleBsChange,
    handleSubmit,
    handleClose,
  } = useAPI();

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude.toFixed(6));
          setLongitude(longitude.toFixed(6));
          handlePlaceChange(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <form className={styles.formstyle} onSubmit={(e) => e.preventDefault()}>
      <h1>Add New User</h1>
      <p
        onClick={() => {
          handleClose();
          toggleForm(false);
        }}
        style={{
          position: "absolute",
          top: "1%",
          right: "1%",
          cursor: "pointer",
          border: "none",
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </p>
      <ul>
        <li>
          <label>
            Name <span className="required">*</span>
          </label>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => handlenameChange(e.target.value)}
            className={styles.fieldDivided}
            required
          />{" "}
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => handleuserChange(e.target.value)}
            className={styles.fieldDivided}
            required
          />
        </li>
        <li>
          <label>
            Email <span className="required">*</span>
          </label>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => handleEmailChange(e.target.value)}
            required
            className={styles.fieldlong}
          />
        </li>
        <li>
          <label>
            Phone <span className="required">*</span>
          </label>

          <input
            placeholder="0000000000"
            type="number"
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            required
            className={styles.fieldlong}
          />
        </li>

        <li>
          <label>
            Company Details <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(e) => handleCompanyname(e.target.value)}
            className={styles.fieldDivided}
          />{" "}
          <input
            type="text"
            placeholder="Catch Phrase"
            onChange={(e) => handlecatchPhrase(e.target.value)}
            className={styles.fieldDivided}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Business Services"
            onChange={(e) => handleBsChange(e.target.value)}
            className={styles.fieldDivided}
          />{" "}
          <input
            type="text"
            placeholder="https://website"
            onChange={(e) => handleWebsiteChange(e.target.value)}
            required
            className={styles.fieldDivided}
          />
        </li>

        <li>
          <label>
            Address <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="City"
            onChange={(e) => handleCityChange(e.target.value)}
            required
            className={styles.fieldDivided}
          />{" "}
          <input
            placeholder="Street"
            type="text"
            onChange={(e) => handleStreetChange(e.target.value)}
            required
            className={styles.fieldDivided}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Suite"
            onChange={(e) => handlesuiteChange(e.target.value)}
            required
            className={styles.fieldDivided}
          />{" "}
          <input
            type="number"
            placeholder="Zip Code"
            onChange={(e) => handleCodeChange(e.target.value)}
            required
            className={styles.fieldDivided}
          />
        </li>
        <li>
          <label>
            lat.Lang <span className="required"></span>
          </label>

          <input
            type="text"
            placeholder="Latitude & Longitude"
            value={`${latitude}, ${longitude}`}
            onChange={(e) => handlePlaceChange(e.target.value)}
            className={styles.latlong}
          />
          <button className={styles.click} onClick={handleLocation}>
            Click <i className="fa-solid fa-location-dot"></i>
          </button>
        </li>
        <button onClick={handleSubmit} className={styles.Submit}>
          Submit
        </button>
      </ul>
    </form>
  );
}

export default FormData;
