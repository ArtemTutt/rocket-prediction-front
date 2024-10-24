"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowBigLeftDash } from "lucide-react"
import Toolbar from '@/components/toolbar'
export default function InfoPage() {
  const [username, setUsername] = useState("");

//   useEffect(() => {
//     // Проверяем наличие объекта Telegram.WebApp
//     if (
//       typeof window !== "undefined" &&
//       window.Telegram &&
//       window.Telegram.WebApp
//     ) {
//       const webApp = window.Telegram.WebApp;
//       webApp.ready();

//       // Получаем данные пользователя
//       const user = webApp.initDataUnsafe?.user;
//       if (user) {
//         setUsername(user.first_name || "Guest");
//       }
//     }
//   }, []);

  return (
    <>
      <div className="flex flex-col items-center pt-10 justify-top min-h-screen bg-gray-900">
        <Link
          href="/"
          style={{ position: "absolute", top: "15px", left: "15px" }}
        >
          <ArrowBigLeftDash size={34} />
        </Link>
        <h2 className="text-2xl font-bold text-center p-4">
            Show your own or upgrade it and earn
        </h2>
        <Toolbar />
      </div>
    </>
  );
}
