
import styles from "./form.module.css";
function UserForm() {



  return (
   
    <form>
      <ul className={styles.formstyle}>
      <h1><i className="fa-solid fa-user"></i> Add User</h1>
        <li>
          <label>
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field1"
            className={styles.fieldDivided}
            placeholder="Name"
          />{" "}
          <input
            type="text"
            name="field2"
            className={styles.fieldDivided}
            placeholder="Username"
          />
        </li>
        <li>
          <label>
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="field3"
            className={styles.fieldlong}
            placeholder="example01@gmail.com"
          />
        </li>
        <li>
          <label>
            Address <span className="required">*</span>
          </label>
          <input
            type="text"
            name="field4"
            className={styles.fieldDivided}
            placeholder="Company"
          />{" "}
          <input
            type="text"
            name="field5"
            className={styles.fieldDivided}
            placeholder="City"
          />
        </li>
        <li>
          <input
            type="text"
            name="field6"
            className={styles.fieldDivided}
            placeholder="Street"
          />{" "}
          <input
            type="text"
            name="field7"
            className={styles.fieldDivided}
            placeholder="Zipcode"
          />
        </li>
        <li>
          <label>Subject</label>
          <select name="field4" className={styles.fieldselect}>
            <option value="Advertise">Advertise</option>
            <option value="Partnership">Partnership</option>
            <option value="General Question">General</option>
          </select>
        </li>
        {/* <li>
          <label>
            Your Message <span className="required">*</span>
          </label>
          <textarea
            name="field5"
            id="field5"
            className={styles.fieldlong.fieldtextarea}
          ></textarea>
        </li> */}
        <li>
          <input type="submit" value="Submit" />
        </li>
      </ul>
    </form>
   
  );
}

export default UserForm;
