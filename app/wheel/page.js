"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";

const results = [
  {
    text: "Rug Pull: The chart suddenly drops 90%, leaving investors puzzled.",
    bias: -90,
  },
  {
    text: "Moon Shot: The chart skyrockets 1000%, showing massive growth.",
    bias: 1000,
  },
  {
    text: "Sideways Drift: The chart remains almost unchanged, creating an illusion of stability.",
    bias: 0,
  },
  {
    text: "Bear Attack: The chart drops 50%, scaring investors.",
    bias: -50,
  },
  {
    text: "Bull Run: The chart rises 100%, creating widespread excitement.",
    bias: 100,
  },
  {
    text: "Exchange Hack: The chart falls 70% due to rumors of a hack.",
    bias: -70,
  },
  {
    text: "Whale Buy: The chart jumps 200% thanks to a large purchase.",
    bias: 200,
  },
  {
    text: "Whale Sell: The chart drops 80% due to a large sale.",
    bias: -80,
  },
  {
    text: "Flash Crash: The chart plummets 60% in minutes due to automated trading errors, causing panic selling.",
    bias: -60,
  },
  {
    text: "Pump and Dump: The chart surges 400% from coordinated buying, only to crash quickly as major holders sell off.",
    bias: 400,
  },
  {
    text: "Dead Cat Bounce: The chart briefly recovers 30% after a steep fall, misleading investors with false hopes.",
    bias: 30,
  },
  {
    text: "Volcano Eruption: The chart suddenly erupts 500%, fueled by groundbreaking news, capturing market attention.",
    bias: 500,
  },
  {
    text: "Winter Slump: The chart steadily declines 25% over months, reflecting a prolonged bearish sentiment.",
    bias: -25,
  },
  {
    text: "Golden Cross: The chart rises 20% as short-term moving averages cross above long-term averages, signaling potential uptrend.",
    bias: 20,
  },
  {
    text: "Death Cross: The chart falls 30% as short-term moving averages drop below long-term averages, indicating further decline.",
    bias: -30,
  },
  {
    text: "Sudden Freeze: Trading volume drops to a trickle, leaving the chart flat and traders uncertain about future directions.",
    bias: 0,
  },
  {
    text: "Breakout Rally: The chart breaks through long-established resistance levels, climbing 150% in a bullish reversal.",
    bias: 150,
  },
  {
    text: "Capitulation Dive: The chart loses 40% as investors finally give up, selling off holdings in a mass exodus.",
    bias: -40,
  },
];

console.log(results.length);

export default function CryptoSlotMachine() {
  const [result, setResult] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [day, setDay] = useState(1);
  const [money, setMoney] = useState(1000);
  const drumRef = useRef(null);
  const modalRef = useRef(null);

  const statusMessage = isSpinning ? "Spinning..." : showResult ? "" : "Ready!";
  console.log(result)
  const spinDrum = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult("");

    // Animate the drum
    if (drumRef.current) {
      drumRef.current.style.transition =
        "transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)";
      drumRef.current.style.transform = `rotateX(${360 * 10}deg)`;
    }

    // Set the result after a delay
    setTimeout(() => {
      const randomResult = results[Math.floor(Math.random() * results.length)];

      setResult({
        output: randomResult.text,
        affectChange: randomResult.bias,
      });
      setIsSpinning(false);
      setShowResult(true);

      // Reset the drum rotation
      if (drumRef.current) {
        drumRef.current.style.transition = "none";
        drumRef.current.style.transform = "rotateX(0deg)";
      }
    }, 3000);

    setTimeout(() => {
      openModal();
    }, 4000);
  };

  useEffect(() => {
    // Reset the drum rotation after the animation
    if (!isSpinning && drumRef.current) {
      setTimeout(() => {
        drumRef.current.style.transition = "none";
        drumRef.current.style.transform = "rotateX(0deg)";
      }, 0);
    }
  }, [isSpinning]);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    // Проверяем, был ли клик вне модального окна
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
      setDay((prev) => prev + 1);
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
      <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-semibold text-white">
                **Day {day}**
              </h3>
              <h3 className="text-lg font-semibold text-green-400">
                **Crypto Account: ${money}**
              </h3>
            </div>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Молодой трейдер Элиас вдыхал ароматы порта, готовясь к первым
              шагам на рынке с монетой на удачу. Несмотря на хмурое небо, он
              верил в яркие перспективы. Удача дала ему шанс на выгодные сделки
              с подешевевшими товарами. С уверенностью Элиас начал своё
              путешествие к великим достижениям.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[350px] flex flex-col items-center ">
        {showModal && (
          <div
            ref={modalRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#516285] bg-opacity-90 p-8 rounded w-11/12 h-[530px] flex flex-col items-center justify-center"
          >
            тут показывается модальное окно
          </div>
        )}

        {/* Result display above the drum */}
        {/* <div className="w-full rounded-lg p-4 mb-4  text-center">
      <p className="text-xl font-bold text-white-800 h-16 flex items-center justify-center">
      {result || ""}
      </p>
      </div> */}

        {/* Drum */}
        <div className="w-[340px] bg-red-400 rounded-3xl p-4 shadow-lg overflow-hidden mb-4 mt-10">
          <div className="bg-white rounded-lg p-4 shadow-inner">
            {showResult && (
              <p className="text-lgl font-bold text-white-800 flex items-center justify-center absolute w-[290px] text-center text-black">
                {result.output || ""}
              </p>
            )}
            <div
              ref={drumRef}
              className="h-[100px] flex items-center justify-center text-xl font-bold text-gray-800 overflow-hidden z-0"
            >
              {statusMessage}
            </div>
          </div>

          {/* Pins below the drum */}
        </div>

        {/* Spin button */}
        <Button
          onClick={spinDrum}
          disabled={isSpinning}
          className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          {isSpinning ? "Spinning..." : "Spin the Crypto Wheel!"}
        </Button>
      </div>
    </div>
  );
}
