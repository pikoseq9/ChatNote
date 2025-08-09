"use client";
import React, { useState } from "react";

export default function ApiKeyForm({ onSubmitApiKey }) {
  const [newApiKey, setNewApiKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newApiKey.trim() === "") return;
    onSubmitApiKey(newApiKey);
    setNewApiKey("");
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type in your API key"
        value={newApiKey}
        onChange={(e) => setNewApiKey(e.target.value)}
      />
      <button type="submit">Użyj klucza</button>
    </form>
  );
}
