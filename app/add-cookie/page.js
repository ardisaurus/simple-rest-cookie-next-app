"use client";
import { useEffect, useState } from "react";
// import useStoragePermission from "./Home/useStoragePermission";
// import CookiesTest from "../components/CookiesTest";

export default function SafariPermission() {
  const [isError, setisError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    document.cookie =
      "onLoadCookie=main; max-age=3153600000; Secure; SameSite=None";
  }, []);
  const handleAddCookieButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    var CookieItem = "main";
    document.cookie =
      "onClickCookie=main; max-age=3153600000; Secure; SameSite=None";
    if (document.cookie.indexOf(CookieItem) == -1) {
      setisError(true);
    }
  };

  const handleAddCookieButtonClick2 = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;
    document.cookie =
      "set-cookie: your=cookie; Domain=phenomenal-lollipop-87c933.netlify.app; Path=/; Expires=Thu, 22 Dec 2027 04:17:44 GMT; Secure; SameSite=None";
  };

  const handleCloseButtonClick = () => {
    // const cookieValue = 'foo'; // Set the cookie value to 'foo'
    // document.cookie = `myCookie=${cookieValue}; path=/; expires=${new Date(new Date().getTime() + 3600000).toUTCString()}`;

    window.close();
  };

  // const { askForPermission } = useStoragePermission();

  return (
    <div>
      <h1>Click button bellow</h1>
      <p style={{ color: "red" }}>{isError ? "Unable to set cookie" : null}</p>
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleCloseButtonClick}
      >
        Close Tab
      </button>
      {/* <p>needPermission : {needPermission ? "true" : "false"}</p>
      <p>haveCheckedPermission : {haveCheckedPermission ? "true" : "false"}</p> */}
      {/* <button
        type="button"
        onClick={() => askForPermission()}
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
      >
        click here for ask perm
      </button> */}
      {/* <CookiesTest /> */}
      <hr />
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleAddCookieButtonClick}
      >
        Add Cookie
      </button>
      <hr />
      <button
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
        onClick={handleAddCookieButtonClick2}
      >
        Add Cookie 2
      </button>
      <hr />
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="btn yellow continue btn-yellow-hover"
        style={{ padding: ".4em", margin: ".2em" }}
      >
        click to Reload
      </button>
    </div>
  );
}
