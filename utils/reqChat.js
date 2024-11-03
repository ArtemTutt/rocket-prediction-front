export const sendMessage = async (message) => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.response; // Возвращаем ответ от сервера
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    return null; // Возвращаем null в случае ошибки
  }
};
