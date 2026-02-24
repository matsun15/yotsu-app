// ヘッダー部分（固定）- 徹底的にシンプルに
<div className="flex-none flex items-center justify-between px-4 py-3 border-b bg-white">
  <button 
    onClick={prevQuestion}
    disabled={currentIndex === 0}
    className="text-xl text-gray-400 disabled:opacity-30"
  >
    ←
  </button>
  
  <span className="text-sm font-medium text-gray-600">
    {currentIndex + 1} / {totalQuestions}
  </span>
  
  <button 
    onClick={nextQuestion}
    disabled={currentIndex === totalQuestions - 1}
    className="text-xl text-gray-400 disabled:opacity-30"
  >
    →
  </button>
</div>

{/* 問題文（Sticky Header） */}
<div className="sticky top-0 bg-white z-10 px-4 py-3 border-b shadow-sm">
  <h2 className="text-base font-bold leading-relaxed">
    {quiz.question}
  </h2>
</div>

{/* 選択肢エリア */}
<div className="px-4 py-3 space-y-2 flex-1 overflow-y-auto">
  {quiz.choices.map((choice, index) => (
    <button 
      key={index} 
      onClick={() => handleAnswer(index)}
      className={`w-full text-left p-3 rounded border-2 transition-all ${
        selected === index
          ? isCorrect 
            ? 'bg-green-50 border-green-400'
            : 'bg-red-50 border-red-400'
          : 'border-gray-200 hover:border-gray-400'
      }`}
    >
      <div className="font-medium">{String.fromCharCode(65 + index)}.</div>
      <div className="text-sm">{choice}</div>
    </button>
  ))}
</div>

{/* 回答後のフィードバック */}
{selected !== null && (
  <div className="flex-none px-4 py-3 border-t bg-gray-50">
    <p className={`font-bold mb-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
      {isCorrect ? '✅ 正解' : '❌ 不正解'}
    </p>
    <p className="text-sm text-gray-700 mb-2">
      💡 {quiz.advice}
    </p>
    
    <button 
      onClick={() => setShowDetails(!showDetails)}
      className="text-blue-600 text-xs underline"
    >
      {showDetails ? '解説を閉じる ▲' : '詳しい解説を見る ▼'}
    </button>
    
    {showDetails && (
      <div className="mt-2 text-xs space-y-1 text-gray-700 border-t pt-2">
        {quiz.explanations.map((exp, i) => (
          <p key={i} className={i === quiz.correct_index ? "font-bold" : ""}>
            {String.fromCharCode(65 + i)}. {exp}
          </p>
        ))}
      </div>
    )}
  </div>
)}
```

---


```
┌─────────────────────────────────┐
│  ←  3/20  →                    │ ← Matchuda流のシンプルナビ
├─────────────────────────────────┤
│ Q. 次のうち、指定数量の組合せ    │ ← 問題文（固定）
│    として正しいものはどれか。     │
├─────────────────────────────────┤
│ A. ガソリン200L、灯油1000L       │Build Error



Parsing ecmascript source code failed
./src/app/page.tsx (85:1)

Parsing ecmascript source code failed

