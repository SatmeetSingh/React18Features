/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import FetchData from "../APi/User";

export const DataContext = createContext();

export function APIContextProvider({ children }) {
  const [value, setValue] = useState([]);
  const [name, setName] = useState("");
  const [users, setUsers] = useState(value);
  const Datafetch = async () => {
    const data = await FetchData();
    setValue(data);
    setUsers(data);
  };
  useEffect(() => {
    Datafetch();
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
    setUsers(() =>
      value.filter((elem) => {
        return elem.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <DataContext.Provider value={{ value, handleChange, users, name }}>
      {children}
    </DataContext.Provider>
  );
}

function useAPI() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
export default useAPI;
