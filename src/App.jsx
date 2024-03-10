import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import FormData from "./Components/Form/formData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formdata" element={<FormData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
