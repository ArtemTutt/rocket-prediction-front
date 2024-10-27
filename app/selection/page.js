"use client";
import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";
import Toolbar from '@/components/toolbar'
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
export default function HomePage() {
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   // Проверяем наличие объекта Telegram.WebApp
  //   if (
  //     typeof window !== "undefined" &&
  //     window.Telegram &&
  //     window.Telegram.WebApp
  //   ) {
  //     const webApp = window.Telegram.WebApp;
  //     webApp.ready();
  //     webApp.expand();
  //     // Получаем данные пользователя
  //     const user = webApp.initDataUnsafe?.user;
  //     if (user) {
  //       setUsername(user.first_name || "Guest");
  //     }
  //   }
  // }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <Link
          href="/second"
          style={{ position: "absolute", top: "15px", left: "15px" }}
        >
          <ArrowBigLeftDash size={34} />
        </Link>
        <Link href="/drops">
          <div className="w-80 h-20 bg-gray-800 rounded-full shadow-lg shadow-black/50 flex items-center justify-between pr-4 mb-4 mt-6">
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

        <Link href="/wheel">
          <div className="w-80 h-20 bg-gray-800 rounded-full shadow-lg shadow-black/50 flex items-center justify-between pr-4 mb-4">
            <Image
              src="/wheel.png"
              alt="Picture of the author"
              width={65}
              height={65}
              className="ml-6"
            />
            <span className="mr-4 text-xl">Monkey Wheel</span>
          </div>
        </Link>

        <Link href="/action">
          <div className="w-80 h-20 bg-gray-800 rounded-full shadow-lg shadow-black/50 flex items-center justify-between pr-4 mb-4">
            <Image
              src="/Taro.png"
              alt="Picture of the author"
              width={32}
              height={32}
              className="ml-8"
            />
            <span className="mr-4 text-xl">Solana Taro</span>
          </div>
        </Link>
        <Toolbar />
      </div>
    </>
  );
}
