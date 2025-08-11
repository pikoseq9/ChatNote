"use client";
import React, { useState } from "react";
import styles from "./ApiKeyForm.module.css";

export default function ApiKeyForm({ onSubmitApiKey }) {
  const [newApiKey, setNewApiKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newApiKey.trim() === "") return;
    onSubmitApiKey(newApiKey);
    setNewApiKey("");
  };

  return (
    <div className={styles["api-key-form-box"]}>
      <h1>Give your API Key</h1>
      <form className={styles["api-key-form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type in your API key"
          value={newApiKey}
          onChange={(e) => setNewApiKey(e.target.value)}
        />
        <button type="submit">Użyj klucza</button>
      </form>
    </div>
  );
}
