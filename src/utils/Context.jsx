/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import FetchData from "../APi/User";
// import Geolocation from "../APi/geolocation";

export const DataContext = createContext();

export function APIContextProvider({ children }) {
  const [value, setValue] = useState([]);
  const [users, setUsers] = useState(value);
  const defaultUserInput = {
    id: users.length,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const [name, setName] = useState("");
  const [data, setData] = useState(defaultUserInput);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    // console.log("handle");
  };
  const Datafetch = async () => {
    const data = await FetchData();
    setValue(data);
    setUsers(data);
  };

  // const geoData = async () => {
  //   const data1 = await Geolocation();
  //   console.log(data1);
  // };

  useEffect(() => {
    Datafetch();
    // geoData();
  }, []);

  // Filter the user Data by name
  const handleChange = (e) => {
    setName(e.target.value);
    setUsers(() =>
      value.filter((elem) => {
        return elem.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  {
    /* Debaounce on All Input Field */
  }

  debounce();
  const nameChange = (value) => {
    setData((prevData) => ({ ...prevData, name: value }));
  };
  const handlenameChange = debounce(nameChange, 400);

  const userChange = (value) => {
    setData((prevData) => ({ ...prevData, username: value }));
  };
  const handleuserChange = debounce(userChange, 400);

  const PhoneNumberChange = (value) => {
    setData((prevData) => ({ ...prevData, phone: value }));
  };
  const handlePhoneNumberChange = debounce(PhoneNumberChange, 400);

  const EmailChange = (value) => {
    setData((prevData) => ({ ...prevData, email: value }));
  };
  const handleEmailChange = debounce(EmailChange, 400);

  const WebsiteChange = (value) => {
    setData((prevData) => ({ ...prevData, website: value }));
  };
  const handleWebsiteChange = debounce(WebsiteChange, 400);

  const StreetChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, street: value },
    }));
  };
  const handleStreetChange = debounce(StreetChange, 400);

  const CodeChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, zipcode: value },
    }));
  };
  const handleCodeChange = debounce(CodeChange, 400);

  const CityChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, city: value },
    }));
  };
  const handleCityChange = debounce(CityChange, 400);

  const suiteChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, suite: value },
    }));
  };
  const handlesuiteChange = debounce(suiteChange, 400);

  const PlaceChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      address: { ...prevData.address, street: value },
    }));
  };
  const handlePlaceChange = debounce(PlaceChange, 400);

  const Companyname = (value) => {
    setData((prevData) => ({
      ...prevData,
      company: { ...prevData.company, name: value },
    }));
  };
  const handleCompanyname = debounce(Companyname, 400);

  const CatchPhrase = (value) => {
    setData((prevData) => ({
      ...prevData,
      company: { ...prevData.company, catchPhrase: value },
    }));
  };
  const handlecatchPhrase = debounce(CatchPhrase, 400);

  const handleBS = (value) => {
    setData((prevData) => ({
      ...prevData,
      company: { ...prevData.company, bs: value },
    }));
  };
  const handleBsChange = debounce(handleBS, 400);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      id: users.length + 1,
    }));
    setUsers((prevUser) => [...prevUser, data]);
  };

  const handleDelete = (UserId) => {
    setUsers((prev) => {
      return prev.filter((user) => user.id !== UserId);
    });
  };

  const handlelocation = () => {
    console.log("location");
  };

  // Using UseMemo to Prevent Unwanted Rerender

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
      name,
      setName,
      users,
      setUsers,
      data,
      setData,
      open,
      handleOpen,
      handleClose,
      handlenameChange,
      handleuserChange,
      handlePhoneNumberChange,
      handleEmailChange,
      handleWebsiteChange,
      handleStreetChange,
      handleCityChange,
      handlesuiteChange,
      handleCodeChange,
      handlePlaceChange,
      handleCompanyname,
      handlecatchPhrase,
      handleBsChange,
      handleChange,
      handleSubmit,
      handleDelete,
      handlelocation,
    }),
    [
      value,
      setValue,
      name,
      setName,
      users,
      setUsers,
      data,
      setData,
      handlenameChange,
      handleuserChange,
      handlePhoneNumberChange,
      handleEmailChange,
      handleWebsiteChange,
      handleStreetChange,
      handleCityChange,
      handlesuiteChange,
      handleCodeChange,
      handlePlaceChange,
      handleCompanyname,
      handlecatchPhrase,
      handleBsChange,
      handleSubmit,
      open,
      handleOpen,
      handleClose,
      handleDelete,
      handlelocation,
    ]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

// Debounce Function

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function useAPI() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export default useAPI;
