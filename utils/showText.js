import React, { useEffect, useState } from "react";

const WordReveal = ({text}) => {
  const sentence =
    "The young trader Elias was inhaling the flavours of the harbour, preparing for his first steps into the market with a lucky coin. Despite the gloomy skies, he believed in bright prospects. Luck had given him a chance to bargain with the cheaper goods. With confidence, Elias began his journey of great achievement.";
  const words = text.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < words.length) {
        setVisibleWords((prev) => [...prev, words[index]]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 70); 

    return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
  }, []);

  return (
    <p className="mt-2 text-gray-300 leading-relaxed">
      {visibleWords.join(" ")}
    </p>
  );
};

export default WordReveal;
