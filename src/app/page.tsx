"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type QuizRow = {
  id: number;
  question: string;
  choices: string[];
  correct_index: number;
  explanations: string[];
};

export default function Home() {
  const [quiz, setQuiz] = useState<QuizRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  async function loadRandomQuiz() {
    setLoading(true);
    setSelectedIndex(null);
    setAnswered(false);

    const { data, error } = await supabase
      .from("quiz")
      .select("id, question, choices, correct_index, explanations");

    if (error) {
      console.error(error);
      setQuiz(null);
      setLoading(false);
      return;
    }

    if (!data || data.length === 0) {
      setQuiz(null);
      setLoading(false);
      return;
    }

    const random = data[Math.floor(Math.random() * data.length)] as QuizRow;
    setQuiz(random);
    setLoading(false);
  }

  useEffect(() => {
    loadRandomQuiz();
  }, []);

  function handleSelect(index: number) {
    if (answered) return;
    setSelectedIndex(index);
  }

  function handleSubmit() {
    if (selectedIndex === null) return;
    setAnswered(true);
  }

  const isCorrect = answered && selectedIndex !== null && quiz && selectedIndex === quiz.correct_index;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-slate-900">
      {/* ヘッダー（Matchuda風の黒背景） */}
      <header className="bg-zinc-900 py-12 px-4 text-center text-white">
        <p className="mb-2 text-sm font-light tracking-widest text-zinc-400">
          最短合格を叶える乙4学習プラットフォーム
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          危険物取扱者は <span className="text-red-500">乙4.jp</span>
        </h1>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* カテゴリ選択（タブ風） */}
        <div className="mb-10 flex justify-center gap-2">
          {["全体", "法令", "物理化学", "性質消火"].map((tab, i) => (
            <button
              key={tab}
              className={`rounded-sm px-6 py-2 text-sm font-medium transition-colors ${
                i === 0 ? "bg-zinc-900 text-white" : "bg-white text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* クイズエリア */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">プレミアム学習</h2>
            <button
              onClick={loadRandomQuiz}
              disabled={loading}
              className="rounded-sm bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
            >
              {loading ? "読込中..." : "次の問題"}
            </button>
          </div>
          <p className="mb-6 text-center text-sm font-semibold text-red-600">
            「解きごたえ」と「全選択肢解説」で合格を確実に。
          </p>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            {loading && !quiz ? (
              <p className="py-12 text-center text-zinc-500">読み込み中...</p>
            ) : !quiz ? (
              <p className="py-12 text-center text-zinc-500">
                問題が見つかりません。Supabaseのquizテーブルを確認してください。
              </p>
            ) : (
              <>
                <p className="mb-6 text-lg font-medium text-zinc-800">{quiz.question}</p>

                <div className="space-y-3">
                  {quiz.choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={answered}
                      className={`block w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        selectedIndex === i
                          ? "border-red-400 bg-red-50 text-zinc-800"
                          : answered
                            ? i === quiz.correct_index
                              ? "border-green-400 bg-green-50 text-zinc-800"
                              : "border-zinc-200 bg-zinc-50 text-zinc-500"
                            : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
                      }`}
                    >
                      <span className="mr-2 font-bold text-zinc-500">{["①", "②", "③", "④"][i]}</span>
                      {choice}
                    </button>
                  ))}
                </div>

                {!answered && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleSubmit}
                      disabled={selectedIndex === null}
                      className="rounded-sm bg-red-500 px-8 py-3 font-bold text-white transition-colors hover:bg-red-600 disabled:bg-zinc-300 disabled:text-zinc-500"
                    >
                      判定する
                    </button>
                  </div>
                )}

                {answered && selectedIndex !== null && (
                  <div className="mt-8 space-y-4 border-t border-zinc-200 pt-6">
                    <p
                      className={`text-center text-lg font-bold ${
                        isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isCorrect ? "正解！" : "不正解"}
                    </p>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-zinc-700">全選択肢の解説</p>
                      {quiz.explanations.map((exp, i) => (
                        <div
                          key={i}
                          className={`rounded-lg border px-4 py-3 text-sm ${
                            i === quiz.correct_index
                              ? "border-green-200 bg-green-50"
                              : "border-zinc-200 bg-zinc-50"
                          }`}
                        >
                          <span className="mb-1 block font-bold text-zinc-600">
                            {["①", "②", "③", "④"][i]} {quiz.choices[i]}
                          </span>
                          <p className="text-zinc-700">{exp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* 一般セクション（過去問アーカイブ） */}
        <section>
          <div className="mb-6 flex items-center justify-center border-t border-zinc-200 pt-12">
            <h2 className="text-2xl font-bold tracking-tight">過去問題集</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["2025年度", "2024年度", "2023年度", "2022年度", "R3年度", "R2年度", "H31年度", "H30年度"].map(
              (year) => (
                <button
                  key={year}
                  className="rounded border border-zinc-200 bg-zinc-100 py-4 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200"
                >
                  {year}
                </button>
              )
            )}
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-zinc-200 bg-white py-10 text-center text-xs text-zinc-400">
        © 2026 乙4.jp (Matchuda-inspired MVP Project)
      </footer>
    </div>
  );
}
