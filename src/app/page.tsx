"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 💡 確実に環境変数から読み込む設定
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
    // 💡 advice, category_id なども取得対象に追加
    const { data, error } = await supabase
      .from("quiz")
      .select("id, question, choices, correct_index, explanations, advice, category_id")
      .order('id', { ascending: false }) // 最新の問題を取得
      .limit(1)
      .single();

    if (data) {
      setQuiz(data);
      setSelected(null);
      setIsCorrect(null);
    }
  };

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setIsCorrect(index === quiz.correct_index);
  };

  if (!quiz) return <div className="p-8 text-center">読み込み中...</div>;

  return (
    <main className="max-w-2xl mx-auto p-4 md:p-8">
      {/* カテゴリ表示 */}
      {quiz.category_id && (
        <div className="mb-2 text-sm font-bold text-blue-600 uppercase tracking-wide">
          Category: {quiz.category_id}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-6 whitespace-pre-wrap">{quiz.question}</h2>
        
        <div className="space-y-3">
          {/* 💡 DBにある全ての選択肢をループで表示（これで⑤が出る） */}
          {quiz.choices?.map((choice: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== null}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selected === index
                  ? index === quiz.correct_index
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : "border-gray-100 hover:border-blue-300"
              }`}
            >
              <span className="font-bold mr-3">{index + 1}.</span>
              {choice}
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className={`p-6 rounded-xl mb-6 ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
            <p className="text-2xl font-bold mb-2">{isCorrect ? "正解！" : "不正解..."}</p>
            <p className="font-bold mb-4">正解は {quiz.correct_index + 1} です。</p>
            
            <div className="space-y-2 text-sm text-gray-700">
              {quiz.explanations?.map((exp: string, i: number) => (
                <p key={i} className={i === quiz.correct_index ? "font-bold text-green-700" : ""}>
                  {i + 1}: {exp}
                </p>
              ))}
            </div>
          </div>

          {/* 💡 アドバイス表示エリア（これでアドバイスが出る） */}
          {quiz.advice && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-6 shadow-sm">
              <h3 className="flex items-center font-bold text-yellow-800 mb-2">
                <span className="mr-2">💡</span> 合格者アドバイス
              </h3>
              <p className="text-yellow-900 leading-relaxed italic">{quiz.advice}</p>
            </div>
          )}

          <button
            onClick={fetchQuiz}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg"
          >
            次の問題へ
          </button>
        </div>
      )}
    </main>
  );
}