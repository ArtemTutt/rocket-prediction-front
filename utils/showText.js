// import React, { useEffect, useState } from "react";

// const WordReveal = ({text}) => {
//   const words = text.split(" ");
//   const [visibleWords, setVisibleWords] = useState([]);

//   useEffect(() => {
//     setVisibleWords([])

//     let index = 0;

//     const intervalId = setInterval(() => {
//       if (index < words.length) {
//         setVisibleWords((prev) => [...prev, words[index]]);
//         index++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 70);

//     return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
//   }, [text]);

//   return (
//     <p className="mt-2 text-gray-300 leading-relaxed">
//       {visibleWords.join(" ")}
//     </p>
//   );
// };

// export default WordReveal;
import React, { useEffect, useState } from "react";

const WordDisplay = ({ text }) => {
  const words = text.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    // Сбрасываем видимые слова при изменении текста
    setVisibleWords([]);

    let index = 0; // Индекс текущего слова

    const displayWords = () => {
      if (index < words.length) {
        setVisibleWords(words.slice(0, index + 1)); // Устанавливаем все слова до текущего индекса
        index++;
        setTimeout(displayWords, 70); // Рекурсивный вызов для следующего слова
      }
    };

    displayWords(); // Начинаем с первого слова

    // Очистка при размонтировании компонента
    return () => setVisibleWords([]);
  }, [text]);

  return (
    <div>
      {visibleWords.join(" ")} {/* Отображаем видимые слова */}
    </div>
  );
};

export default WordDisplay;

