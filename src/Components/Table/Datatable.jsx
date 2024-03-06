import useAPI from "../../utils/Context";
import styles from "./table.module.css";

function Datatable() {
  const { users } = useAPI();
  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr className={styles.place}>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>ZipCode</th>
          </tr>
        </tbody>
        {users?.map((val) => (
          <tbody key={val.id}>
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.address.city}</td>
              <td>{val.email}</td>
              <td>{val.address.zipcode}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Datatable;
