"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function QuizPage() {
  const [quizList, setQuizList] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState<any>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    initQuiz();
  }, []);

  const initQuiz = async () => {
    const { data } = await supabase.from("quiz").select("*");
    if (data && data.length > 0) {
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      setQuizList(shuffled);
      setCurrentIndex(0);
      setQuiz(shuffled[0]);
      setSelected(null);
      setIsCorrect(null);
    }
  };

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setIsCorrect(index === quiz.correct_index);
  };

  const nextQuiz = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx < quizList.length) {
      setCurrentIndex(nextIdx);
      setQuiz(quizList[nextIdx]);
      setSelected(null);
      setIsCorrect(null);
    } else {
      initQuiz();
    }
  };

  if (!quiz) return <div className="p-8 text-center text-gray-400">Loading...</div>;

  return (
    <main className="max-w-2xl mx-auto bg-white min-h-screen font-sans text-gray-900">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        <span className="text-xl font-bold tracking-tighter text-gray-800">乙4.jp</span>
        <span className="text-sm font-medium text-gray-400">
          {currentIndex + 1} / {quizList.length}
        </span>
      </div>

      <div className="p-6 md:p-10">
        <div className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
          {quiz.category_id}
        </div>
        <h2 className="text-lg md:text-xl font-bold leading-snug mb-10 text-gray-800">
          {quiz.question}
        </h2>

        <div className="space-y-0 border-t border-gray-100">
          {quiz.choices.map((choice: string, index: number) => {
            const isSelected = selected === index;
            const isCorrectChoice = index === quiz.correct_index;
            const hasAnswered = selected !== null;

            let bgClass = "bg-white";
            if (isSelected) {
              bgClass = isCorrectChoice ? "bg-green-50" : "bg-red-50";
            }

            let circleClass = "border border-gray-300 text-gray-500";
            if (hasAnswered) {
              if (isSelected && !isCorrectChoice) {
                circleClass = "bg-red-400 border-red-400 text-white";
              } else if (isCorrectChoice) {
                circleClass = "bg-green-500 border-green-500 text-white";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={hasAnswered}
                className={`w-full text-left py-5 flex items-center border-b border-gray-100 transition-colors ${bgClass}`}
              >
                <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full mr-5 ${circleClass}`}>
                  {index + 1}
                </span>
                <span className="text-base text-gray-700 leading-relaxed">{choice}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selected !== null && (
        <div className="px-6 md:px-10 pb-20">
          <div className="mt-8 mb-10">
            <h3 className="text-lg font-bold mb-6 text-gray-800">解説</h3>
            <div className="space-y-4 text-sm leading-relaxed text-gray-500">
              {quiz.explanations.map((exp: string, i: number) => (
                <p key={i} className={i === quiz.correct_index ? "text-gray-900 font-bold" : ""}>
                  [{i + 1}] {exp}
                </p>
              ))}
            </div>
          </div>

          {quiz.advice && (
            <div className="bg-gray-50 p-6 rounded-lg mb-10">
              <p className="text-xs font-bold text-gray-400 mb-2">💡 合格者アドバイス</p>
              <p className="text-sm text-gray-600 font-medium italic">{quiz.advice}</p>
            </div>
          )}

          <button
            onClick={nextQuiz}
            className="w-full py-4 text-center text-sm font-bold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50"
          >
            次の問題へ →
          </button>
        </div>
      )}
    </main>
  );
}