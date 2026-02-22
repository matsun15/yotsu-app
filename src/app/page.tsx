"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase接続設定
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
    // 💡 全件取得してランダムに1問選ぶ（1問ループ問題の解消）
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

  if (!quiz) return <div className="p-8 text-center text-gray-500 font-medium">読み込み中...</div>;

  return (
    <main className="max-w-2xl mx-auto p-4 md:p-8 min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 問題カード */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-4">
        <div className="flex justify-between items-center mb-6">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
            {quiz.category_id || "Q"}
          </span>
        </div>
        
        <h2 className="text-lg md:text-xl font-bold mb-8 leading-relaxed whitespace-pre-wrap">
          {quiz.question}
        </h2>
        
        <div className="space-y-3">
          {quiz.choices?.map((choice: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== null}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start ${
                selected === index
                  ? index === quiz.correct_index
                    ? "border-blue-500 bg-blue-50 text-blue-900"
                    : "border-red-500 bg-red-50 text-red-900"
                  : selected !== null && index === quiz.correct_index
                    ? "border-blue-500 bg-blue-50 text-blue-900"
                    : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 rounded-full ${
                selected === index ? "bg-white" : "bg-gray-100 text-gray-500"
              }`}>
                {index + 1}
              </span>
              <span className="leading-relaxed">{choice}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 解説エリア */}
      {selected !== null && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-4">
            <div className="mb-6">
              <p className={`text-xl font-bold mb-1 ${isCorrect ? "text-blue-600" : "text-red-600"}`}>
                {isCorrect ? "正解" : "不正解"}
              </p>
              <p className="text-gray-600 text-sm font-medium">正解は {quiz.correct_index + 1} です</p>
            </div>
            
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              {quiz.explanations?.map((exp: string, i: number) => (
                <div key={i} className={`flex gap-3 ${i === quiz.correct_index ? "font-bold text-gray-900" : ""}`}>
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs mt-0.5">
                    {i + 1}
                  </span>
                  <p>{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 合格者アドバイス (Matchuda風にミニマルに配置) */}
          {quiz.advice && (
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-8">
              <h3 className="text-blue-800 font-bold text-sm mb-2">
                合格者アドバイス
              </h3>
              <p className="text-blue-900 text-sm leading-relaxed">{quiz.advice}</p>
            </div>
          )}

          <button
            onClick={fetchQuiz}
            className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
          >
            次の問題へ
          </button>
        </div>
      )}
    </main>
  );
}