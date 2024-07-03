import React, { useEffect, useState } from "react";
import MyContext from "@/context/myContext";
// import { toast } from "react-toastify";
// import axios from "axios"

function myState(props) {
  // const apiUrl = import.meta.env.VITE_API_URL;
  // const apiKey = import.meta.env.VITE_API_KEY;
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const [coins, setCoin] = useState([]);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#3c3c3c";
    }
  };

  // auth.onAuthStateChanged(user => {
  //   if (user) {
  //     console.log('User is signed in:', user);
  //     setShow(false);
  //   } else {
  //     console.log('No user is signed in.');
  //     // window.location.href = "/auth/sign-in";
  //   }
  // });

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/sign-in";
  };

  const fetchUser = async () => {
    
  };

  useEffect(() => {
    // fetchData();
    fetchUser();
  }, []);

  // Retrieve user details from localStorage
  // useEffect(() => {
  //   const storedUserDetails = localStorage.getItem("userInfo");

  //   if (storedUserDetails) {
  //     const userInfo = JSON.parse(storedUserDetails);
  //     setUser(userInfo);
  //   }
  // }, []);

  return (
    <MyContext.Provider
      value={{
        mode,
        coins,
        user,
        show,
        setUser,
        toggleMode,
        loading,
        setLoading,
        // fetchData,
        fetchUser,
        logout,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
