'use client';

import { useState, useMemo } from 'react';

const dummyQuestions = [
  {
    id: 1,
    category: "基礎化学・問1",
    question: "次のうち、ガソリンの性質として正しいのはどれか？",
    options: [
      "常温常圧で液体であり、沸点は40～200℃の範囲にある",
      "水に溶けやすく、電気の良好な伝導体である",
      "引火点は-40℃以下である",
      "蒸気比重は空気より軽い",
      "時間経過とともに自動酸化する"
    ],
    correctIndex: 0,
    advice: "ガソ200℃以下",
    explanations: [
      "沸点が40～200℃のため、常温で液体を保ちながら蒸気を発生させる危険物です。",
      "ガソリンは非水溶性で、電気の不良伝導体（静電気がたまりやすい）です。",
      "ガソリンの引火点は-40℃以下ですが、これは「正しい」性質です。ただし、より正確な説明は①にあります。",
      "蒸気比重は空気より重いため、蒸気が低いところに溜まります。",
      "自動酸化は灯油や軽油より進みやすいですが、主要な性質ではありません。"
    ]
  },
  {
    id: 2,
    category: "指定数量・問2",
    question: "危険物の指定数量に関する説明として、正しいのはどれか？",
    options: [
      "ガソリンの指定数量は200Lである",
      "灯油の指定数量は1000Lである",
      "軽油の指定数量は500Lである",
      "アセトンの指定数量は200kgである",
      "メタノールの指定数量は400Lである"
    ],
    correctIndex: 1,
    advice: "ガソ200、灯油1000、軽油2000",
    explanations: [
      "ガソリンの指定数量は200Lです。",
      "灯油の指定数量は1000Lです。第4類危険物の中でも、特に指定数量が大きい物質です。",
      "軽油の指定数量は2000Lです。灯油より引火点が高いため、指定数量も大きくなります。",
      "アセトンの指定数量は200Lで、単位はL（リットル）です。",
      "メタノールの指定数量は200Lです。"
    ]
  },
  {
    id: 3,
    category: "消火方法・問3",
    question: "火災時の消火活動において、引火性液体の火災処理に関する以下の説明について、最も適切なのはどれか？消防活動では、ガソリン、灯油、軽油などの第4類危険物の火災が発生する可能性があり、これらの火災の特性を理解した上で、適切な消火剤を選択することが極めて重要である。特に、引火性液体の火災に対しては、水そのものの使用は避けるべき場合が多く、代わりに泡消火剤、粉末消火剤、二酸化炭素消火剤などの専門的な消火剤の使用が求められる。また、火災現場の状況、液体の種類、周囲の環境などを考慮した上で、最適な消火剤を選択する必要がある。",
    options: [
      "ガソリン火災には水を大量に使用する。これにより油が冷却され、火災は鎮火する。",
      "油火災に対して泡消火剤は効果がない。むしろ、泡消火剤は導電性液体火災にのみ有効である。",
      "引火性液体の火災には泡消火、粉末消火、CO2消火などの複数の消火方法が用いられ、状況に応じて最適な方法を選択する必要がある。",
      "二酸化炭素消火は酸素を遮断するだけでなく、同時に高い冷却効果も有する。したがって、あらゆる引火性液体火災に最適である。",
      "ポリ泡（AFFF）は一般的な油火災に用いられる泡であり、水溶性液体火災でも問題なく使用できる。"
    ],
    correctIndex: 2,
    advice: "泡・粉末・CO2が有効、状況に応じて選択",
    explanations: [
      "ガソリン火災に水を使うことは危険です。ガソリンと水は混ざらず（非水溶性）、水を注ぐと、ガソリンが水の上に浮いて拡散し、火災がさらに広がる可能性があります。また、熱せられた油に冷たい水を注ぐと、激しい蒸気爆発（スチームエクスプロージョン）が発生し、火災がより激しくなる危険性があります。",
      "泡消火剤は油火災に対して極めて有効です。泡消火剤は、油の表面に泡の膜を形成することで、酸素の供給を遮断し、同時に泡自体の冷却効果によって油の温度を低下させます。導電性液体火災には、特に水フィルム形成泡（AFFF）などの導電性泡が用いられます。",
      "引火性液体（第4類危険物）の火災には、泡消火剤、粉末消火剤、二酸化炭素消火剤の三種類の消火方法が用いられます。泡消火は最も一般的で、酸素遮断と冷却効果が期待できます。粉末消火は小規模火災に有効で、CO2消火は密閉空間や電気火災にも対応できます。火災の規模、場所、周囲環境に応じて最適な方法を選択する必要があります。",
      "二酸化炭素消火の主機能は酸素遮断です。冷却効果はほぼありません。むしろ、CO2は液化ガスとして放出されるため、放出時に気化する際に吸熱（周囲の熱を奪う）がわずかに発生しますが、主作用ではありません。CO2は密閉空間での使用に適していますが、屋外での大規模油火災には不向きです。",
      "ポリ泡（AFFF）は一般的な非水溶性油火災に用いられます。水溶性液体火災（アルコール、ケトン、エステルなど）には、専用の水溶性液体用泡（FFFP など）を使用する必要があります。ポリ泡をそのまま水溶性液体火災に使用すると、泡が溶けてしまい、消火効果が得られません。"
    ]
  }
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const quiz = useMemo(() => dummyQuestions[currentIndex], [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelected(null);
    }
  };

  const handleNext = () => {
    if (currentIndex < dummyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    }
  };

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
  };

  const handleBackToMenu = () => {
    alert("後でここに「トップメニューに戻る機能」を作ります！");
  };

  const handleSelectQuestion = () => {
    alert("後でここに「全問題の一覧（グリッド）から好きな問題にジャンプする機能」を作ります！");
  };

  return (
    // h-[100dvh] に変更し、スマホのアドレスバー等に隠れないようにしています
    <div className="flex flex-col h-[100dvh] w-screen bg-white overflow-hidden text-gray-900">
      
      {/* ===== 上部：スマホ風ヘッダー（※ここだけ固定） ===== */}
      <div className="flex-none sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={handleBackToMenu}
            className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h1 className="text-base font-bold text-gray-900">
            {quiz.category.split('・')[0]}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* ===== 中部：問題文＋選択肢＋解説（すべて一緒にスクロール） ===== */}
      <div className="flex-1 overflow-y-auto min-h-0">
        
        {/* ▼▼ 問題文をスクロールエリアに移動しました ▼▼ */}
        <div className="px-5 pt-6 pb-4">
          <div className="text-xs text-gray-500 mb-2 font-medium">
            {quiz.category}
          </div>
          <h2 className="text-base font-semibold leading-relaxed text-gray-900">
            {currentIndex + 1}. {quiz.question}
          </h2>
        </div>
        {/* ▲▲ ここまで ▲▲ */}

        {/* 選択肢リスト */}
        <div className="flex flex-col border-t border-gray-100">
          {quiz.options.map((option, index) => {
            const isThisSelected = selected === index;
            const isThisCorrect = index === quiz.correctIndex;
            
            let rowClass = "w-full text-left px-5 py-4 transition-all flex items-start gap-4 border-b border-gray-100 ";
            let badgeClass = "flex-none w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-colors ";
            
            if (selected === null) {
              rowClass += "bg-white active:bg-gray-50";
              badgeClass += "bg-white text-gray-600 border border-gray-400";
            } else {
              if (isThisSelected && !isThisCorrect) {
                rowClass += "bg-red-50";
                badgeClass += "bg-red-500 text-white border-transparent";
              } else if (isThisCorrect) {
                rowClass += isThisSelected ? "bg-green-50" : "bg-white";
                badgeClass += "bg-green-500 text-white border-transparent";
              } else {
                rowClass += "bg-white opacity-50";
                badgeClass += "bg-white text-gray-400 border border-gray-300";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
                className={rowClass}
              >
                <div className={badgeClass}>
                  {index + 1}
                </div>
                <span className="text-sm pt-0.5 leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>

        {/* 回答後の解説エリア */}
        {selected !== null && (
          <div className="px-5 py-6 mb-8 animate-fade-in">
            <h3 className="text-base font-bold mb-4">解説</h3>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600 mr-2">💡 Point</span>
                {quiz.advice}
              </p>
            </div>

            <div className="space-y-4">
              {quiz.explanations.map((exp, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`flex-none w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                    i === quiz.correctIndex ? 'bg-green-100 text-green-700 font-bold' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {i + 1}
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    i === quiz.correctIndex ? 'text-gray-900 font-medium' : 'text-gray-600'
                  }`}>
                    {exp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== 下部：ナビゲーション（固定） ===== */}
      <div className="flex-none flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        
        {/* 左矢印 */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`p-2 transition-colors ${
            currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800 active:bg-gray-100 rounded-full'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* 中央エリア：大きな数字 ＋ 「問題選択」ボタン */}
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-gray-900 tracking-widest">
            {currentIndex + 1} / {dummyQuestions.length}
          </span>
          
          <button
            onClick={handleSelectQuestion}
            className={`border border-gray-300 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-gray-50 active:bg-gray-100 transition-colors`}
          >
            問題選択
          </button>
        </div>

        {/* 右矢印 */}
        <button
          onClick={handleNext}
          disabled={currentIndex === dummyQuestions.length - 1}
          className={`p-2 transition-colors ${
            currentIndex === dummyQuestions.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800 active:bg-gray-100 rounded-full'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        
      </div>
    </div>
  );
}