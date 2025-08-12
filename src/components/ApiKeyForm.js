"use client";
import React, { useEffect, useState } from "react";
import styles from "./ApiKeyForm.module.css";

export default function ApiKeyForm({ onSubmitApiKey }) {
  const [apiKey, setApiKey] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [savedId, setSavedId] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("apiKeyId");
    if (storedId) {
      setSavedId(storedId);
      setMessage(`API Key already saved with ID: ${storedId}`);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setSavedId(null);
    try {
      const response = await fetch("api/apikey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKey }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unknown error");
      } else {
        setMessage(data.message);
        setSavedId(data.data);
        localStorage.setItem("apiKeyId", data.data);
        setApiKey("");
      }
    } catch (err) {
      setError("Failed to send request: " + err.message);
    }
  };

  return (
    <div className={styles["api-key-form-box"]}>
      <h1>Give your API Key</h1>
      <form className={styles["api-key-form"]} onSubmit={handleSubmit}>
        <input
          id="apiKey"
          type="text"
          placeholder="Type in your API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          disabled={!!savedId}
        />
        <button type="submit">Save API Key</button>

        {message && <p style={{ color: "green" }}></p>}
        {error && <p style={{ color: "red" }}></p>}
      </form>
    </div>
  );
}
