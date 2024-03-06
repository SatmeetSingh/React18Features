import Hero from "../Components/MainPage/Hero";
import NavBar from "../Components/Navbar/NavBar";
import { APIContextProvider } from "../utils/Context";

function Home() {
  return (
    <APIContextProvider>
      <NavBar />
      <Hero />
    </APIContextProvider>
  );
}

export default Home;
