// import spinner from "../../public/spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src="spinner.gif"
        style={{
          width: "200px",
          margin: "auto",
          display: "block",
          marginTop: "auto",
        }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
