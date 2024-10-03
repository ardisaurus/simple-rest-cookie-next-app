"use client";
import { useEffect } from "react";

export default function SafariPermission() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/hello");
        const json = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    document.cookie =
      "onLoadCookie=main; max-age=3153600000; Secure; SameSite=None";
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user");
      const json = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCloseButtonClick = () => {
    window.close();
  };

  return (
    <div>
      <h1>Click button bellow</h1>
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleCloseButtonClick}
      >
        Close Tab
      </button>
      <hr />
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={fetchUser}
      >
        Hit User API
      </button>
    </div>
  );
}
