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

  if (!quiz) return <div className="p-8 text-center text-gray-500">読み込み中...</div>;

  return (
    <main className="max-w-2xl mx-auto bg-white min-h-screen text-gray-900 font-sans pb-20">
      
      {/* 💡 ヘッダー＆問題文（文字サイズを少し小さく、自然な太さに調整） */}
      <div className="p-5 md:p-8 pb-4">
        <div className="mb-4 text-sm text-gray-500 font-medium">
          {quiz.category_id || "練習モード"}
        </div>
        <h2 className="text-base md:text-lg font-medium leading-relaxed whitespace-pre-wrap text-gray-800">
          {quiz.question}
        </h2>
      </div>

      {/* 💡 選択肢リスト（Matchuda風に隙間なく線で区切り、選択した行だけ背景色を変える） */}
      <div className="border-t border-b border-gray-200">
        {quiz.choices?.map((choice: string, index: number) => {
          const isSelected = selected === index;
          const isCorrectChoice = index === quiz.correct_index;
          const hasAnswered = selected !== null;

          // 背景色の決定（タップした行だけ背景色全体を変える）
          let bgClass = "bg-white";
          if (isSelected) {
            bgClass = isCorrectChoice ? "bg-green-50" : "bg-red-50"; // Matchudaのピンクっぽい赤
          }

          // 丸い数字の色の決定
          let circleClass = "bg-white border border-gray-400 text-gray-600";
          if (hasAnswered) {
            if (isSelected && !isCorrectChoice) {
              circleClass = "bg-red-400 border-red-400 text-white"; // 不正解を選んだ時の赤い丸
            } else if (isCorrectChoice) {
              circleClass = "bg-green-500 border-green-500 text-white"; // 正解の緑の丸（背景は白のまま）
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={hasAnswered}
              className={`w-full text-left py-4 px-5 border-b border-gray-200 last:border-b-0 flex items-center transition-colors ${bgClass}`}
            >
              <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-sm rounded-full mr-4 ${circleClass}`}>
                {index + 1}
              </span>
              <span className="text-base text-gray-800 leading-relaxed">{choice}</span>
            </button>
          );
        })}
      </div>

      {/* 💡 解説・アドバイスエリア */}
      {selected !== null && (
        <div className="p-5 md:p-8 animate-in fade-in duration-300">
          
          <h3 className="font-bold text-gray-900 text-lg mb-4">解説</h3>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-8">
            {quiz.explanations?.map((exp: string, i: number) => (
              <div key={i} className={`flex gap-3 ${i === quiz.correct_index ? "font-bold text-gray-900" : ""}`}>
                <span className="flex-shrink-0 text-gray-400 mt-0.5">
                  [{i + 1}]
                </span>
                <p>{exp}</p>
              </div>
            ))}
          </div>

          {/* アドバイスは控えめでシンプルなデザインに */}
          {quiz.advice && (
            <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg mb-8">
              <h3 className="flex items-center font-bold text-gray-800 mb-2">
                <span className="mr-2">💡</span> 合格者アドバイス
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{quiz.advice}</p>
            </div>
          )}

          <div className="flex justify-center mt-8">
            <button
              onClick={fetchQuiz}
              className="bg-white border border-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-50 shadow-sm transition-all"
            >
              問題を選択（次へ）
            </button>
          </div>
        </div>
      )}
    </main>
  );
}