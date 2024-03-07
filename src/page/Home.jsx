import Modal from "../Components/Form/Model";
import FormData from "../Components/Form/formData";
import Hero from "../Components/MainPage/Hero";
import NavBar from "../Components/Navbar/NavBar";

import useAPI from "../utils/Context";

function Home() {
  const { handleOpen, open } = useAPI();
  return (
    <>
      <NavBar />
      <Hero />
      <button onClick={handleOpen}>Form</button>
      <Modal isOpen={open}>
        <FormData />
      </Modal>
    </>
  );
}

export default Home;
