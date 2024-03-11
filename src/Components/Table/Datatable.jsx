import useAPI from "../../utils/Context";
import Card from "../card/Card";
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
              <td className={styles.tableData}>
                {val.name}
                <span className={styles.span}>
                  <Card
                    name={val.name}
                    Username={val.username}
                    Email={val.email}
                    Phone={val.phone}
                    Company={val.company.name}
                    Website={val.website}
                    Address={val.address.city}
                    Street={val.address.street}
                    Zipcode={val.address.zipcode}
                  />
                </span>
              </td>
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
                <button
                  className={styles.delete}
                  onClick={() => handleDelete(val.id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {users.length === 0 && (
        <h1 className={styles.ErrorMsg}>Sorry,User Is Not Found!</h1>
      )}
    </div>
  );
}

export default Datatable;
