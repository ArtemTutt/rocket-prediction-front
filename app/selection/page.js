"use client";
import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
export default function HomePage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Проверяем наличие объекта Telegram.WebApp
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      webApp.expand();
      // Получаем данные пользователя
      const user = webApp.initDataUnsafe?.user;
      if (user) {
        setUsername(user.first_name || "Guest");
      }
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center pt-10 min-h-screen bg-gray-900">
        <Link
          href="/action"
          style={{ position: "absolute", top: "15px", left: "15px" }}
        >
          <ArrowBigLeftDash size={34} />
        </Link>
        <Link href="/game">
          <div className="w-80 h-20 bg-gray-800 rounded-full shadow-lg shadow-black/50 flex items-center justify-between pr-4 mb-4">
            <Image
              src="/Component.png"
              alt="Picture of the author"
              width={65}
              height={65}
              className="ml-6"
            />
            <span className="mr-4 text-xl">Solana Drops</span>
          </div>
        </Link>

        <Link href="/game">
          <div className="w-80 h-20 bg-gray-800 rounded-full shadow-lg shadow-black/50 flex items-center justify-between pr-4 mb-4">
            <Image
              src="/wheel-Photoroom.png"
              alt="Picture of the author"
              width={65}
              height={65}
              className="ml-6"
            />
            <span className="mr-4 text-xl">Monkey Wheel</span>
          </div>
        </Link>

        <div className="w-80 h-20 bg-gray-800 rounded-full shadow-lg shadow-black/50 flex items-center justify-end pr-4 mb-4">
          Игра 3
        </div>
      </div>
    </>
  );
}
