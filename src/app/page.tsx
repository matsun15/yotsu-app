import Image from "next/image";

export default function Home() {
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

        {/* プレミアムセクション（全選択肢解説付き） */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight">プレミアム学習</h2>
          </div>
          <p className="mb-6 text-center text-sm text-red-600 font-semibold">
            「解きごたえ」と「全選択肢解説」で合格を確実に。
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "分野別：消防法令", type: "特化演習" },
              { title: "基礎的な物理・化学", type: "計算攻略" },
              { title: "危険物の性質と消火", type: "暗記徹底" },
              { title: "本番形式：模擬試験", type: "35問フル" },
            ].map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500">{item.type}</span>
                    <h3 className="mt-1 text-lg font-bold text-zinc-800">{item.title}</h3>
                  </div>
                  <span className="text-zinc-300 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
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