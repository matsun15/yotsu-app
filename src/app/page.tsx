'use client';

import { useState, useMemo } from 'react';

const dummyQuestions = [
  {
    id: 1,
    category: "基礎化学",
    question: "ガソリンの性質として正しいのはどれか？",
    options: [
      "常温常圧で液体であり、沸点は40〜200℃の範囲にある",
      "水に溶けやすく、電気の良好な伝導体である",
      "引火点は-40℃以下である",
      "蒸気比重は空気より軽い",
      "時間経過とともに自動酸化する"
    ],
    correctIndex: 0,
    advice: "ガソリンの沸点は40〜200℃。常温で液体だが蒸気を発生させる。",
    explanations: [
      "正解。沸点40〜200℃で、常温で液体を保ちながら蒸気を発生させます。",
      "誤り。ガソリンは非水溶性で、電気の不良伝導体です。",
      "引火点は-40℃以下ですが、沸点の説明がより正確です。",
      "誤り。蒸気比重は空気より重く、低所に溜まります。",
      "誤り。自動酸化はしますが、主要な性質ではありません。"
    ]
  },
  {
    id: 2,
    category: "指定数量",
    question: "危険物の指定数量として正しいのはどれか？",
    options: [
      "ガソリン：200L",
      "灯油：1000L",
      "軽油：500L",
      "アセトン：200kg",
      "メタノール：400L"
    ],
    correctIndex: 1,
    advice: "ガソリン200L、灯油1000L、軽油2000L",
    explanations: [
      "ガソリンの指定数量は200Lで正しいですが、問題の正解は灯油です。",
      "正解。灯油の指定数量は1000Lです。",
      "誤り。軽油の指定数量は2000Lです。",
      "誤り。アセトンの単位はL（リットル）で、200Lです。",
      "誤り。メタノールの指定数量は400Lではなく200Lです。"
    ]
  },
  {
    id: 3,
    category: "消火方法",
    question: "引火性液体の火災に最も適切な消火方法はどれか？",
    options: [
      "水を大量に使用する",
      "泡消火剤は効果がない",
      "泡・粉末・CO2など状況に応じて選択する",
      "CO2は高い冷却効果がある",
      "AFFF泡は水溶性液体にも使える"
    ],
    correctIndex: 2,
    advice: "油火災には泡・粉末・CO2が有効。水は危険。",
    explanations: [
      "誤り。水を使うと油が拡散し、火災が広がります。",
      "誤り。泡消火剤は油火災に極めて有効です。",
      "正解。状況に応じて泡・粉末・CO2から選択します。",
      "誤り。CO2の主機能は酸素遮断で、冷却効果は低いです。",
      "誤り。AFFFは非水溶性油用。水溶性には専用泡が必要です。"
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

  return (
    <div className="fixed inset-0 flex flex-col bg-white text-gray-900">
      
      {/* 上部固定：問題 */}
      <div className="flex-shrink-0 px-4 py-3 bg-white border-b border-gray-200">
        <div className="text-xs text-blue-600 font-medium mb-1">
          {quiz.category}
        </div>
        <h2 className="text-sm font-semibold leading-relaxed">
          問{currentIndex + 1}. {quiz.question}
        </h2>
      </div>

      {/* 中央スクロール：選択肢＋解説 */}
      <div className="flex-1 overflow-y-auto">
        
        {/* 選択肢 */}
        {quiz.options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = index === quiz.correctIndex;
          
          let bgColor = "bg-white";
          let badgeBg = "bg-gray-100 text-gray-600 border border-gray-300";
          
          if (selected !== null) {
            if (isSelected && !isCorrect) {
              bgColor = "bg-red-50";
              badgeBg = "bg-red-500 text-white";
            } else if (isCorrect) {
              bgColor = "bg-green-50";
              badgeBg = "bg-green-500 text-white";
            } else {
              bgColor = "bg-gray-50 opacity-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 border-b border-gray-100 ${bgColor}`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${badgeBg}`}>
                {index + 1}
              </div>
              <span className="text-sm leading-relaxed">{option}</span>
            </button>
          );
        })}

        {/* 解説（回答後のみ表示） */}
        {selected !== null && (
          <div className="px-4 py-4 bg-gray-50">
            <h3 className="text-sm font-bold mb-3 text-gray-800">解説</h3>
            
            <div className="bg-blue-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-blue-900">
                <span className="font-bold">💡 </span>{quiz.advice}
              </p>
            </div>

            <div className="space-y-2">
              {quiz.explanations.map((exp, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    i === quiz.correctIndex 
                      ? 'bg-green-500 text-white font-bold' 
                      : 'bg-gray-200 text-gray-500'
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

      {/* 下部固定：ナビゲーション */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 bg-white border-t border-gray-200">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
            currentIndex === 0 
              ? 'text-gray-300' 
              : 'text-gray-700 bg-gray-100 active:bg-gray-200'
          }`}
        >
          ←
        </button>

        <span className="text-sm font-bold text-gray-700">
          {currentIndex + 1} / {dummyQuestions.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === dummyQuestions.length - 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
            currentIndex === dummyQuestions.length - 1 
              ? 'text-gray-300' 
              : 'text-gray-700 bg-gray-100 active:bg-gray-200'
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}
```

---

**Step 3: GitHubにプッシュ**
```
git add src/app/page.tsx
```
```
git commit -m "Fix layout and remove Korean text"
```
```
git push origin main