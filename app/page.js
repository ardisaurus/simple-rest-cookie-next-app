"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);

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
  }, []);

  return (
    <div>
      hello
      {data ? <p>API Response: {data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
