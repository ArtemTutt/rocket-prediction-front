"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";

const results = [
  "Rug Pull: The chart suddenly drops 90%, leaving investors puzzled.",
  "Moon Shot: The chart skyrockets 1000%, showing massive growth.",
  "Sideways Drift: The chart remains almost unchanged, creating an illusion of stability.",
  "Bear Attack: The chart drops 50%, scaring investors.",
  "Bull Run: The chart rises 100%, creating widespread excitement.",
  "Exchange Hack: The chart falls 70% due to rumors of a hack.",
  "Whale Buy: The chart jumps 200% thanks to a large purchase.",
  "Whale Sell: The chart drops 80% due to a large sale.",
];

export default function CryptoSlotMachine() {
  const [result, setResult] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const drumRef = useRef(null);

  const spinDrum = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult("");

    // Animate the drum
    if (drumRef.current) {
      drumRef.current.style.transition =
        "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
      drumRef.current.style.transform = `rotateX(${360 * 10}deg)`;
    }

    // Set the result after a delay
    setTimeout(() => {
      const randomResult = results[Math.floor(Math.random() * results.length)];
      setResult(randomResult);
      setIsSpinning(false);

      // Reset the drum rotation
      if (drumRef.current) {
        drumRef.current.style.transition = "none";
        drumRef.current.style.transform = "rotateX(0deg)";
      }
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

  if (result.length !== 0) {
    setTimeout(() => {
      openModal();
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <Link
        href="/selection"
        style={{ position: "absolute", top: "15px", left: "15px" }}
      >
        <ArrowBigLeftDash size={34} />
      </Link>
      <div className="w-[350px] flex flex-col items-center">
        {showModal && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#516285] bg-opacity-90 p-8 rounded w-11/12 h-[530px] flex flex-col items-center justify-center">
            тут показывается модальное окно
          </div>
        )}

        {/* Result display above the drum */}
        <div className="w-full rounded-lg p-4 mb-4  text-center">
          <p className="text-xl font-bold text-white-800 h-16 flex items-center justify-center">
            {result || ""}
          </p>
        </div>

        {/* Drum */}
        <div className="w-80 bg-red-400 rounded-3xl p-4 shadow-lg overflow-hidden mb-4 ">
          <div className="bg-white rounded-lg p-4 shadow-inner">
            <div
              ref={drumRef}
              className="h-16 flex items-center justify-center text-xl font-bold text-gray-800 overflow-hidden z-0"
            >
              {isSpinning ? "Spinning..." : "Ready!"}
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
