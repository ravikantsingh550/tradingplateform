import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await axios.post(
          "https://tradingplateform.onrender.com/verify",
          {},
          {
            withCredentials: true,
          }
        );

        if (!response.data.status) {
          window.location.href = "http://localhost:5173/login";
          return;
        }

        setUsername(response.data.user);
      } catch (err) {
        console.error(err);
        window.location.href = "http://localhost:5173/login";
      }
    };

    verify();
  }, []);

  return (
    <>
      <TopBar />

      

      <Dashboard />
    </>
  );
};

export default Home;