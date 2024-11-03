"use client";

import { useState } from "react";

const ChatComponent = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setChatResponse(data.response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="color-white"
          type="text"
          value={userMessage}
          onChange={handleInputChange}
          placeholder="Введите ваш вопрос"
        />
        <button type="submit">Отправить</button>
      </form>

      {chatResponse && <p>Ответ: {chatResponse}</p>}
    </div>
  );
};

export default ChatComponent;
