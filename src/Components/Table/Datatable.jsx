import useAPI from "../../utils/Context";
import styles from "./table.module.css";

function Datatable() {
  const { users, handleDelete } = useAPI();
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
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {val.address.zipcode}
                <button onClick={() => handleDelete(val.id)}>❎</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {(users.length ?? 0) === 0 && <h1>Data Doesn&apos;t match</h1>}
    </div>
  );
}

export default Datatable;
