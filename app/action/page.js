'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Toolbar from '@/components/toolbar'
import { ArrowBigLeftDash } from "lucide-react"

const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams."
]

export default function ActionPage() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')
  const [quote, setQuote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const luckyNumber = Math.floor(Math.random() * 100)
    setResult(`Ты заработаешь: ${luckyNumber} SOL`)
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
        <Link href="/selection" style={{position: "absolute", top: "15px", "left": "15px"}}>
        <ArrowBigLeftDash size={34} />
        </Link>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Размер твоей позиции в SOL"
          className="w-full"
        />
        <Button type="submit" className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 w-full">
          Удача уже рядом!!!
        </Button>
      </form>
      {result && (
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-white mb-4">{result}</p>
          <p className="text-lg text-purple-300 italic">&quot;{quote}&quot;</p>
        </div>
      )}
    </div>
  )
}