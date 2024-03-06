import useAPI from "../../utils/Context";
import styles from "./navbar.module.css";

function NavBar() {
  const { handleChange, name } = useAPI();

  return (
    <div className={styles.navbar}>
      <h1>React 18 Features</h1>

      <input
        type="text"
        placeholder="Search..."
        value={name}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default NavBar;
