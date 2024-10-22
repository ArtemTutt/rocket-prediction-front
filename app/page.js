import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Try your luck
        </span>
      </h1>
      <Link
        href="/action"
        className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
      >
        Just do It
      </Link>
    </div>
  )
}