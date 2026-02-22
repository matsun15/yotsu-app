"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Quiz = {
  id: number;
  question: string;
  choices: string[];
  correct_index: number;
  explanations: string[];
  advice: string;
  category_id: string;
};

export default function QuizPage() {
  const [allQuizzes, setAllQuizzes] = useState<Quiz[]>([]);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [usedIds, setUsedIds] = useState<number[]>([]);

  useEffect(() => {
    fetchAllQuizzes();
  }, []);

  const fetchAllQuizzes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("quiz")
      .select("id, question, choices, correct_index, explanations, advice, category_id");

    if (error) {
      console.error("取得エラー:", error.message);
      setLoading(false);
      return;
    }

    if (data && data.length > 0) {
      setAllQuizzes(data);
      pickNext(data, []);
    }
    setLoading(false);
  };

  const pickNext = (pool: Quiz[], used: number[]) => {
    // 全問使い切ったらリセット
    const available = pool.filter((q) => !used.includes(q.id));
    const source = available.length > 0 ? available : pool;
    const newUsed = available.length > 0 ? used : [];

    const random = source[Math.floor(Math.random() * source.length)];
    setQuiz(random);
    setUsedIds([...newUsed, random.id]);
    setSelected(null);
    setIsCorrect(null);
  };

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const correct_flag = index === quiz!.correct_index;
    setIsCorrect(correct_flag);
    setAnswered((prev) => prev + 1);
    if (correct_flag) {
      setCorrect((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    pickNext(allQuizzes, usedIds);
  };

  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">🔥</div>
          <p className="text-gray-500 font-medium">問題を読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500">問題が見つかりません。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-red-600 text-white shadow-md sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">
              🔥 乙4 CBT合格道場
            </h1>
            <p className="text-red-200 text-xs">危険物取扱者乙種第4類 対策アプリ</p>
          </div>
          <div className="text-right text-sm">
            <div className="font-bold">
              {streak > 0 && <span className="mr-2">🔥 {streak}連続</span>}
              <span className="bg-white text-red-600 rounded-full px-2 py-0.5 text-xs font-bold">
                正答率 {accuracy}%
              </span>
            </div>
            <div className="text-red-200 text-xs mt-0.5">
              {answered}問中{correct}問正解 / 全{allQuizzes.length}問
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* 問題カード */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          {/* カテゴリバッジ */}
          <div className="mb-3">
            <span className="text-xs font-bold bg-red-50 text-red-600 border border-red-200 rounded-full px-3 py-1">
              {quiz.category_id}
            </span>
          </div>

          <h2 className="text-base font-bold text-gray-800 mb-5 leading-relaxed whitespace-pre-wrap">
            {quiz.question}
          </h2>

          {/* 選択肢 */}
          <div className="space-y-3">
            {quiz.choices.map((choice, index) => {
              let btnClass =
                "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ";

              if (selected === null) {
                btnClass += "border-gray-200 hover:border-red-300 hover:bg-red-50 cursor-pointer";
              } else if (index === quiz.correct_index) {
                btnClass += "border-green-500 bg-green-50";
              } else if (index === selected) {
                btnClass += "border-red-500 bg-red-50";
              } else {
                btnClass += "border-gray-100 bg-gray-50 opacity-60";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selected !== null}
                  className={btnClass}
                >
                  {/* 番号バッジ */}
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mt-0.5
                      ${
                        selected === null
                          ? "bg-gray-100 text-gray-600"
                          : index === quiz.correct_index
                          ? "bg-green-500 text-white"
                          : index === selected
                          ? "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-400"
                      }
                    `}
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {choice}
                  </span>
                  {/* 正誤アイコン */}
                  {selected !== null && (
                    <span className="ml-auto flex-shrink-0 text-lg">
                      {index === quiz.correct_index
                        ? "✅"
                        : index === selected
                        ? "❌"
                        : ""}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 解説エリア（回答後に表示） */}
        {selected !== null && (
          <div className="space-y-4">
            {/* 正誤バナー */}
            <div
              className={`rounded-2xl p-5 ${
                isCorrect
                  ? "bg-green-100 border border-green-200"
                  : "bg-red-100 border border-red-200"
              }`}
            >
              <p className="text-xl font-extrabold mb-1">
                {isCorrect ? "✅ 正解！" : "❌ 不正解..."}
              </p>
              <p className="text-sm font-bold text-gray-700 mb-3">
                正解は 選択肢{quiz.correct_index + 1} です
              </p>

              {/* 全選択肢解説 */}
              <div className="space-y-2">
                {quiz.explanations?.map((exp, i) => (
                  <div
                    key={i}
                    className={`text-sm rounded-lg p-2 ${
                      i === quiz.correct_index
                        ? "bg-green-50 text-green-800 font-bold"
                        : "text-gray-600"
                    }`}
                  >
                    <span className="font-bold mr-1">選択肢{i + 1}：</span>
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            {/* アドバイスエリア */}
            {quiz.advice && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-5 shadow-sm">
                <h3 className="font-extrabold text-yellow-800 mb-2 flex items-center gap-2">
                  <span>💡</span> 合格者アドバイス
                </h3>
                <p className="text-yellow-900 text-sm leading-relaxed">
                  {quiz.advice}
                </p>
              </div>
            )}

            {/* 次の問題ボタン */}
            <button
              onClick={handleNext}
              className="w-full bg-red-600 text-white font-extrabold py-4 rounded-2xl hover:bg-red-700 active:scale-95 transition-all shadow-lg text-base"
            >
              次の問題へ →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
