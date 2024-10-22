import { Button } from "@/components/ui/button";
import { User, History, Settings, Play } from "lucide-react";
import Link from "next/link";

export default function Toolbar() {
  return (
    <div className="fixed bottom-[10px] left-4 right-4 bg-gray-800 rounded-full shadow-lg shadow-black/50">
      <div className="flex justify-around items-center h-12">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Link href="/user">
            <User className="h-6 w-6" />
            <span className="sr-only">User Profile</span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Link href="/selection">
            <Play className="h-6 w-6" />
            <span className="sr-only">User Profile</span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <History className="h-6 w-6" />
          <span className="sr-only">History</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Settings className="h-6 w-6" />
          <span className="sr-only">Support</span>
        </Button>
      </div>
    </div>
  );
}
