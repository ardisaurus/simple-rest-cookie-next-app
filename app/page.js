"use client";
import { useState, useEffect } from "react";
import useStoragePermission from "./useStoragePermission";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/hello");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { askForPermission } = useStoragePermission();

  return (
    <div>
      hello
      {data ? <p>API Response: {data.message}</p> : <p>Loading...</p>}
      <hr />
      <div>
        <div className="element">
          <h2 style={{ color: "red", fontSize: "1.2em" }}>
            cookies permission testing
          </h2>
          <ol>
            <li>click `Close Tab` in this new tab.</li>
            <a href="./add-cookie" target="_blank">
              click here
            </a>
            <li>Click this button and click allow permission</li>
            <button
              type="button"
              onClick={() => askForPermission()}
              className="btn yellow continue btn-yellow-hover"
              style={{ padding: ".4em", margin: ".2em" }}
            >
              click here
            </button>
            <li>Reload this page </li>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn yellow continue btn-yellow-hover"
              style={{ padding: ".4em", margin: ".2em" }}
            >
              click to Reload
            </button>
          </ol>
        </div>
      </div>
    </div>
  );
}
