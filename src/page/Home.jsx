import { NavLink } from "react-router-dom";
import FormData from "../Components/Form/formData";
import Hero from "../Components/MainPage/Hero";
import NavBar from "../Components/Navbar/NavBar";
import useAPI from "../utils/Context";
import { useState } from "react";

function Home() {
  const { handleOpen } = useAPI();
  // console.log(FormData()) VirtualDom
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (value) => {
    setShowForm(value);
  };

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <Hero />
      <NavLink
        onClick={() => {
          handleOpen();
          toggleForm(true);
        }}
        style={{
          position: "absolute",
          color: "#fff",
          left: "250px",
          backgroundColor: "#000",
          padding: "7px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Add User <i className="fa-solid fa-user-plus"></i>
      </NavLink>
      {showForm && (
        <div style={{ position: "absolute", top: "18%", right: "0%" }}>
          <FormData toggleForm={toggleForm} />
        </div>
      )}
    </div>
  );
}

export default Home;
