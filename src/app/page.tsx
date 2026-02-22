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
    // 全データからランダムに1問選ぶ
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

  if (!quiz) return <div className="p-8 text-center text-gray-500 font-medium text-lg">読み込み中...</div>;

  return (
    <main className="max-w-2xl mx-auto p-4 md:p-8 min-h-screen bg-white text-gray-900 font-sans">
      {/* 問題カード */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded">
            {quiz.category_id || "Q"}
          </span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed whitespace-pre-wrap">
          {quiz.question}
        </h2>
        
        <div className="space-y-4">
          {quiz.choices?.map((choice: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== null}
              // 💡 初期画面はシンプルに、回答後は正誤色を表示
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start ${
                selected === index
                  ? index === quiz.correct_index
                    ? "border-green-500 bg-green-50 text-green-900" // 正解の選択肢
                    : "border-red-500 bg-red-50 text-red-900"     // 不正解の選択肢
                  : selected !== null && index === quiz.correct_index
                    ? "border-green-500 bg-green-50 text-green-900" // 正解を表示
                    : "border-gray-200 bg-white hover:border-gray-300 text-gray-900" // 未選択・その他
              }`}
            >
              {/* 💡 番号の丸囲みデザインを調整 */}
              <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-base font-bold mr-4 rounded-full border-2 ${
                selected === index
                  ? index === quiz.correct_index
                    ? "border-green-500 bg-white text-green-700"
                    : "border-red-500 bg-white text-red-700"
                  : selected !== null && index === quiz.correct_index
                    ? "border-green-500 bg-white text-green-700"
                    : "border-gray-300 bg-white text-gray-500"
              }`}>
                {index + 1}
              </span>
              {/* 💡 選択肢の文字サイズを大きく変更 */}
              <span className="text-lg leading-relaxed my-auto">{choice}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 解説エリア（回答後のみ表示） */}
      {selected !== null && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-6">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{isCorrect ? "✅" : "❌"}</span>
              <div>
                <p className={`text-2xl font-bold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                  {isCorrect ? "正解！" : "不正解..."}
                </p>
                <p className="text-gray-700 text-lg font-bold mt-1">正解は {quiz.correct_index + 1} です</p>
              </div>
            </div>
            
            <div className="space-y-4 text-base text-gray-800 leading-relaxed bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">解説</h3>
              {quiz.explanations?.map((exp: string, i: number) => (
                <div key={i} className={`flex gap-3 ${i === quiz.correct_index ? "font-bold" : ""}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-sm font-bold mt-0.5 border border-gray-300">
                    {i + 1}
                  </span>
                  <p>{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 合格者アドバイス（Matchuda風・文字サイズ大） */}
          {quiz.advice && (
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6 mb-8 shadow-sm">
              <h3 className="flex items-center font-bold text-blue-900 mb-3 text-lg">
                <span className="mr-2">💡</span> 合格者アドバイス
              </h3>
              {/* 💡 アドバイスの文字サイズを大きく変更 */}
              <p className="text-blue-900 text-lg leading-relaxed font-medium">{quiz.advice}</p>
            </div>
          )}

          <button
            onClick={fetchQuiz}
            className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-md text-lg"
          >
            次の問題へ
          </button>
        </div>
      )}
    </main>
  );
}