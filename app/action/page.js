"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Toolbar from "@/components/toolbar";
import { ArrowBigLeftDash } from "lucide-react";

const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

export default function ActionPage() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState("");

  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const luckyNumber = Math.floor(Math.random() * 100);
    setResult(`Ты заработаешь: ${luckyNumber} SOL`);
    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  };

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setInputValue("");
  };

  const handleClickOutside = (event) => {
    // Проверяем, был ли клик вне модального окна
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Добавляем обработчик события клика
    document.addEventListener("mousedown", handleClickOutside);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <Link
        href="/selection"
        style={{ position: "absolute", top: "15px", left: "15px" }}
      >
        <ArrowBigLeftDash size={34} />
      </Link>
      <div className="text-center absolute top-20">
        <p className="text-2xl font-bold text-center mb-8 animate-pulse">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Create a successful trader's story with the help of Tarot magic 
          </span> 💥
        </p>
      </div>
      {showModal && (
        <div
          ref={modalRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#516285] bg-opacity-90 p-8 rounded w-11/12 h-[530px] flex flex-col items-center justify-center"
        >
          {result && (
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-white mb-4">{result}</p>
              <p className="text-purple-300 italic text-red-950 text-2xl font-bold">
                &quot;{quote}&quot;
              </p>
            </div>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="The size of your position in SOL"
          className="w-full"
        />
        <Button
          type="submit"
          className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 w-full"
          onClick={() => openModal()}
        >
          Luck is already near!!!
        </Button>
      </form>
    </div>
  );
}
