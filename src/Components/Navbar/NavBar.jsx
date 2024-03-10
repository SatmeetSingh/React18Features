import useAPI from "../../utils/Context";
import styles from "./navbar.module.css";

function NavBar() {
  const { handleChange, name } = useAPI();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="reactlogo.png"
          alt="React18Logo"
          style={{ width: "100px", height: "70px" }}
        />
      </div>
      <div className={styles.NavSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={handleChange}
        ></input>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default NavBar;
