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
      "【正解】沸点が40～200℃のため、常温で液体を保ちながら蒸気を発生させる危険物です。",
      "【不正解】ガソリンは非水溶性で、電気の不良伝導体（静電気がたまりやすい）です。",
      "【不正解】ガソリンの引火点は-40℃以下ですが、これは「正しい」性質です。ただし、より正確な説明は①にあります。",
      "【不正解】蒸気比重は空気より重いため、蒸気が低いところに溜まります。",
      "【不正解】自動酸化は灯油や軽油より進みやすいですが、主要な性質ではありません。"
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
      "【不正解】ガソリンの指定数量は200Lです。",
      "【正解】灯油の指定数量は1000Lです。第4類危険物の中でも、特に指定数量が大きい物質です。",
      "【不正解】軽油の指定数量は2000Lです。灯油より引火点が高いため、指定数量も大きくなります。",
      "【不正解】アセトンの指定数量は200Lで、単位はL（リットル）です。",
      "【不正解】メタノールの指定数量は200Lです。"
    ]
  },
  {
    id: 3,
    category: "消火方法・問3",
    question: "消火活動時の注意点として、正しいのはどれか？",
    options: [
      "ガソリン火災には水を大量に使用する",
      "油火災に対して泡消火剤は効果がない",
      "引火性液体の火災には泡消火、粉末消火、CO2消火などが用いられる",
      "二酸化炭素は酸素を遮断するだけで、冷却効果がある",
      "ポリ泡は水溶性液体火災に用いられる"
    ],
    correctIndex: 2,
    advice: "泡・粉末・CO2が有効",
    explanations: [
      "【不正解】ガソリン火災に水を使うと、ガソリンが拡散し危険です。泡消火が標準です。",
      "【不正解】泡消火剤は油火災に対して極めて有効です。油面を覆い、冷却と酸素遮断の両効果があります。",
      "【正解】引火性液体（第4類危険物）の火災には、泡消火剤・粉末消火剤・二酸化炭素消火剤が用いられます。",
      "【不正解】二酸化炭素は酸素遮断が主機能で、冷却効果はほぼありません。",
      "【不正解】ポリ泡は一般の油火災（非水溶性液体）に用いられます。水溶性液体火災には専用泡が必要です。"
    ]
  }
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const quiz = useMemo(() => dummyQuestions[currentIndex], [currentIndex]);
  const isCorrect = selected !== null && selected === quiz.correctIndex;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelected(null);
      setShowDetails(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < dummyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setShowDetails(false);
    }
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setShowDetails(false);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-white overflow-hidden">
      
      {/* ===== 上部：問題情報（固定） ===== */}
      <div className="flex-none px-4 py-3 bg-gray-50 border-b">
        <div className="text-xs text-gray-600 mb-1">
          {quiz.category}
        </div>
        <h2 className="text-sm font-bold text-gray-900 leading-relaxed">
          {quiz.question}
        </h2>
      </div>

      {/* ===== 中部：選択肢＋結果＋解説（スクロール可能） ===== */}
      <div className="flex-1 overflow-y-auto px-4 py-3 min-h-0">
        
        {/* 選択肢 */}
        <div className="space-y-2 mb-4">
          {quiz.options.map((option, index) => {
            const isThisCorrect = selected !== null && index === quiz.correctIndex;
            const isThisSelected = selected === index;
            const shouldHighlight = selected !== null && isThisSelected;
            const isWrong = shouldHighlight && !isCorrect;
            const isRight = shouldHighlight && isCorrect && isThisCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all flex items-start gap-3 ${
                  isRight
                    ? 'bg-green-50 border-green-500'
                    : isWrong
                    ? 'bg-red-50 border-red-400'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {/* 番号（丸で囲む） */}
                <div className={`flex-none w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  isRight
                    ? 'bg-green-500 text-white'
                    : isWrong
                    ? 'bg-red-400 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                {/* 選択肢テキスト */}
                <span className="text-xs text-gray-800 pt-0.5">{option}</span>
              </button>
            );
          })}
        </div>

        {/* 回答後のフィードバック */}
        {selected !== null && (
          <div className="mb-4">
            <p className={`text-sm font-bold mb-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '✅ 正解！' : '❌ 不正解'}
            </p>

            <p className="text-xs text-gray-700 mb-2 bg-blue-50 p-2 rounded">
              💡 {quiz.advice}
            </p>

            {/* 詳細解説 */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 text-xs font-medium underline mb-2"
            >
              {showDetails ? '▲ 解説を閉じる' : '▼ 詳しい解説を見る'}
            </button>

            {showDetails && (
              <div className="mt-2 pt-2 border-t space-y-1">
                {quiz.explanations.map((exp, i) => (
                  <p
                    key={i}
                    className={`text-xs leading-relaxed p-2 rounded ${
                      i === quiz.correctIndex
                        ? 'font-bold text-green-700 bg-green-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}. {exp}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===== 下部：ナビゲーション（固定・常に見える） ===== */}
      <div className="flex-none flex items-center justify-between px-6 py-4 border-t bg-white">
        
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`text-2xl font-bold transition-colors ${
            currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 active:text-blue-600'
          }`}
        >
          &lt;
        </button>

        <span className="text-sm font-semibold text-gray-700">
          {currentIndex + 1} / {dummyQuestions.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === dummyQuestions.length - 1}
          className={`text-2xl font-bold transition-colors ${
            currentIndex === dummyQuestions.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 active:text-blue-600'
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}