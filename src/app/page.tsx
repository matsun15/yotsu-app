"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function QuizPage() {
  const [quiz, setQuiz] = useState<any>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    const { data, error } = await supabase
      .from("quiz")
      .select("id, question, choices, correct_index, explanations, advice, category_id");

    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuiz(data[randomIndex]);
      setSelected(null);
      setIsCorrect(null);
    }
  };

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setIsCorrect(index === quiz.correct_index);
  };

  if (!quiz) return <div className="p-8 text-center text-gray-500 font-bold text-lg">読み込み中...</div>;

  return (
    <main className="max-w-2xl mx-auto bg-white min-h-screen text-gray-900 font-sans pb-20">
      
      {/* 💡 問題文（タグを削除し、文字を大きく力強く） */}
      <div className="p-5 md:p-8 pb-6">
        <h2 className="text-lg md:text-xl font-bold leading-relaxed whitespace-pre-wrap text-gray-900">
          {quiz.question}
        </h2>
      </div>

      {/* 💡 選択肢リスト（文字を大きく、背景色をはっきりと） */}
      <div className="border-t border-b border-gray-200">
        {quiz.choices?.map((choice: string, index: number) => {
          const isSelected = selected === index;
          const isCorrectChoice = index === quiz.correct_index;
          const hasAnswered = selected !== null;

          // 背景色の決定（よりはっきりとした色合いに）
          let bgClass = "bg-white";
          if (isSelected) {
            bgClass = isCorrectChoice ? "bg-green-100" : "bg-rose-100"; // ピンク寄りの赤と、はっきりした緑
          }

          // 丸い数字の色の決定
          let circleClass = "bg-white border-2 border-gray-400 text-gray-700";
          if (hasAnswered) {
            if (isSelected && !isCorrectChoice) {
              circleClass = "bg-red-500 border-red-500 text-white"; 
            } else if (isCorrectChoice) {
              circleClass = "bg-green-600 border-green-600 text-white"; 
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={hasAnswered}
              className={`w-full text-left py-5 px-5 border-b border-gray-200 last:border-b-0 flex items-center transition-colors ${bgClass}`}
            >
              <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-base font-bold rounded-full mr-4 ${circleClass}`}>
                {index + 1}
              </span>
              {/* 文字サイズを text-lg に拡大し、フォントウェイトも medium に */}
              <span className="text-lg text-gray-900 leading-relaxed font-medium">{choice}</span>
            </button>
          );
        })}
      </div>

      {/* 💡 解説・アドバイスエリア（文字を大きく読みやすく） */}
      {selected !== null && (
        <div className="p-5 md:p-8 animate-in fade-in duration-300">
          
          <h3 className="font-extrabold text-gray-900 text-xl mb-5">解説</h3>
          
          <div className="space-y-5 text-base text-gray-900 leading-relaxed mb-10">
            {quiz.explanations?.map((exp: string, i: number) => (
              <div key={i} className={`flex gap-3 ${i === quiz.correct_index ? "font-bold text-gray-900" : "text-gray-800"}`}>
                <span className="flex-shrink-0 text-gray-500 font-bold mt-0.5">
                  [{i + 1}]
                </span>
                <p>{exp}</p>
              </div>
            ))}
          </div>

          {/* アドバイスも文字を大きく力強く */}
          {quiz.advice && (
            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl mb-10">
              <h3 className="flex items-center font-extrabold text-gray-900 mb-3 text-lg">
                <span className="mr-2 text-xl">💡</span> 合格者アドバイス
              </h3>
              <p className="text-gray-900 text-base leading-relaxed font-bold">{quiz.advice}</p>
            </div>
          )}

          <div className="flex justify-center mt-8">
            <button
              onClick={fetchQuiz}
              className="bg-gray-900 text-white font-bold py-4 px-12 rounded-full hover:bg-black shadow-lg transition-all text-lg w-full md:w-auto"
            >
              次の問題へ
            </button>
          </div>
        </div>
      )}
    </main>
  );
}