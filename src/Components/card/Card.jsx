/* eslint-disable react/prop-types */
import styles from "./card.module.css";

function Card({name,Username, Email, Phone, Company, Website, Address, Street, Zipcode}) {
  

  return (
    <div className={styles.card }>
      <div className={styles.cardbody}>
        <h2 className="card-title">{name}</h2>
        <u><h5>{Username}</h5></u>
        <div className={styles.cardInfo}>
          <p><i className="fa-solid fa-envelope"></i> Email: {Email}</p>
          <p><i className="fa-solid fa-phone"></i> Phone : {Phone} </p>
          <p><i className="fa-solid fa-building"></i> Company: {Company}</p>
          <p><i className="fa-solid fa-globe"></i> Website: {Website}</p>
          <p><i className="fa-solid fa-location-dot"></i> Address: {Address},{Street},{Zipcode}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
