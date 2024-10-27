"use client";
import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from "react";
import { ArrowBigLeftDash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAtom } from "jotai";
import { performDivinationAtom } from "../app/atoms";

const predictions = [
  {
    text: "Incredible success and joy await you in the near future.",
    bias: 10,
  },
  {
    text: "Positive changes are coming your way, bringing new opportunities.",
    bias: 9,
  },
  {
    text: "Your hard work will soon pay off with unexpected rewards.",
    bias: 8,
  },
  {
    text: "A period of personal growth and self-discovery is approaching.",
    bias: 7,
  },
  {
    text: "Challenges ahead, but you have the strength to overcome them.",
    bias: 6,
  },
  { text: "Be cautious in your decisions, but remain optimistic.", bias: 5 },
  { text: "A time of reflection may lead to important realizations.", bias: 4 },
  { text: "Prepare for some obstacles, but don't lose hope.", bias: 3 },
  {
    text: "Difficult times may be ahead, requiring patience and perseverance.",
    bias: 2,
  },
  {
    text: "Brace yourself for potential setbacks and disappointments (",
    bias: 1,
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function TarotDivination({setAllResult}) {
  const [result, setResult] = useState(null);
  const [, setChildFunction] = useAtom(performDivinationAtom);

  const performDivination = () => {
    const shuffledPredictions = shuffleArray([...predictions]);
    const selectedPrediction = shuffledPredictions[0];

    const cardIndices = shuffleArray([...Array(11)].map((_, i) => i + 1)).slice(
      0,
      3
    );

    setResult({
      prediction: selectedPrediction.text,
      luckCoefficient: selectedPrediction.bias,
      cards: cardIndices,
    });
  };

  useEffect(() => {
    setChildFunction(() => performDivination);
    performDivination()
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <Card className="w-full max-w-2xl bg-gray-800 text-gray-100">
        {/* <CardHeader>
          <CardTitle className="text-2xl text-center">
            Tarot Divination
          </CardTitle>
        </CardHeader> */}
        <CardContent className="flex flex-col items-center space-y-6">
          {/* {!result && (
            <Button
              onClick={performDivination}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Perform Divination
            </Button>
          )} */}

          {result && (
            <>
              <div className="text-center space-y-4 mb-4">
                <p className="text-xl">{result.prediction}</p>
                <p className="text-lg">
                  Luck Coefficient: {result.luckCoefficient}
                </p>
              </div>

              <div className="flex justify-center items-center space-x-4">
                {result.cards.map((cardIndex, index) => (
                  <div
                    key={index}
                    className="relative w-32 h-48 transition-transform duration-300 ease-in-out"
                    style={{
                      transform:
                        index === 0
                          ? "rotate(-10deg)"
                          : index === 2
                          ? "rotate(10deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <Image
                      src={`/taro/${cardIndex}-taro.jpg`}
                      alt={`Tarot Card ${cardIndex}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* <Button
                onClick={performDivination}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                New Divination
              </Button> */}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
