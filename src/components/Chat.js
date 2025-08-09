"use client";
import React, { useEffect, useState } from "react";
import styles from "./Chat.module.css";

export default function Card() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    setMessages((prev) => [...prev, newMessage]);
    setNewMessage("");
  };

  return (
    <div className={styles["chat-box"]}>
      <div className={styles["chat-messages"]}>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form className={styles["chat-input"]} onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
