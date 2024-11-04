"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";
import { Button } from "@/components/ui/button";

const COIN_TYPES = {
  SOLANA: {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6001527-2azwvnz0jdd2uZ2kKMXAefWMuX4WCu.png",
    points: 1,
    chance: 0.5,
  },
  ETHEREUM: {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethereum-icon-purple.svg-YVvHduTvG9Q5tL2Eto5mcQkRR9ADBc.png",
    points: -1,
    chance: 0.3,
  },
  TON: {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7947912-oOxMyQwNbE5ErLIFmluIvfETlPaYgz.webp",
    points: -2,
    chance: 0.2,
  },
};

export default function CryptoGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [coins, setCoins] = useState([]);
  const gameAreaRef = useRef(null);
  const coinIdRef = useRef(0);

  const getRandomCoinType = () => {
    const random = Math.random();
    let cumulativeChance = 0;

    for (const [type, data] of Object.entries(COIN_TYPES)) {
      cumulativeChance += data.chance;
      if (random < cumulativeChance) return type;
    }

    return "SOLANA"; // fallback
  };

  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
      setGameOver(true);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  useEffect(() => {
    let animationFrame;
    const updateCoins = () => {
      setCoins((prevCoins) => {
        const updatedCoins = prevCoins
          .map((coin) => ({ ...coin, y: coin.y + 2 }))
          .filter((coin) => coin.y < (gameAreaRef.current?.clientHeight ?? 0));

        if (gameActive && Math.random() < 0.02) {
          const coinType = getRandomCoinType();
          const newCoin = {
            id: coinIdRef.current++,
            x: Math.random() * ((gameAreaRef.current?.clientWidth ?? 0) - 60),
            y: -60,
            type: coinType,
          };
          updatedCoins.push(newCoin);
        }

        return updatedCoins;
      });
      animationFrame = requestAnimationFrame(updateCoins);
    };

    if (gameActive) {
      animationFrame = requestAnimationFrame(updateCoins);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    setCoins([]);
    coinIdRef.current = 0;
  };

  const catchCoin = (id, coinType) => {
    setScore((prevScore) => prevScore + COIN_TYPES[coinType].points);
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
  };

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
        <Link
          href="/drops"
          style={{ position: "absolute", top: "15px", left: "15px" }}
        >
          <ArrowBigLeftDash size={34} />
        </Link>
        <div className="text-center">
          <p className="text-4xl font-bold text-white mb-4">
            Well done, but it's better!
          </p>
          <p className="text-2xl text-white mb-8">
            Solan в твоем кармане: {score}
          </p>
          <Button
            onClick={startGame}
            className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 w-full"
          >
            Play Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <Link
        href="/selection"
        style={{ position: "absolute", top: "15px", left: "15px" }}
      >
        <ArrowBigLeftDash size={34} />
      </Link>
      <div className="text-white mb-4">
        <span className="text-2xl font-bold">Score: {score}</span>
        <span className="ml-4 text-2xl font-bold">Time: {timeLeft}s</span>
      </div>
      <div
        ref={gameAreaRef}
        className="relative w-full max-w-md h-[80vh] bg-gray-800 rounded-lg overflow-hidden"
      >
        {gameActive &&
          coins.map((coin) => (
            <div
              key={coin.id}
              className="absolute cursor-pointer w-[60px] h-[60px] rounded-full bg-transparent"
              style={{
                left: `${coin.x}px`,
                top: `${coin.y}px`,
              }}
              onClick={() => catchCoin(coin.id, coin.type)}
            >
              <img
                src={COIN_TYPES[coin.type].image}
                alt={`${coin.type} Coin`}
                className="w-full h-full pointer-events-none"
              />
            </div>
          ))}
      </div>
      {!gameActive && !gameOver && (
        <div className="mt-4 text-center">
          <Button
            onClick={startGame}
            className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 w-full"
          >
            {timeLeft === 30 ? "Start Game" : "Play Again"}
          </Button>
        </div>
      )}
    </div>
  );
}
