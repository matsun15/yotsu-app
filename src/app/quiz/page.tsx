"use client";

import { useState } from "react";
import { quizQuestions } from "@/constants/questions";
import { Choice } from "@/types/quiz";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  if (!quizQuestions || quizQuestions.length === 0) {
    return <div className="p-10 text-center">問題データを読み込んでいます...</div>;
  }

  const currentQuestion = quizQuestions[currentIndex];
  // 正解の選択肢の番号を取得
  const correctChoiceNumber = currentQuestion.choices.find(c => c.is_correct)?.order_index;

  // --------------------------------------------------------
  // イベントハンドラ
  // --------------------------------------------------------
  const handleChoiceClick = (index: number) => {
    if (showExplanation) return;
    setSelectedChoice(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setShowExplanation(false);
    setCurrentIndex((prev) => (prev + 1) % quizQuestions.length);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ★修正③：画面トップへ戻る
  };

  const handlePrev = () => {
    setSelectedChoice(null);
    setShowExplanation(false);
    setCurrentIndex((prev) => (prev - 1 + quizQuestions.length) % quizQuestions.length);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ★修正③：画面トップへ戻る
  };

  const handleReset = () => {
    // ※今回は簡易的にリセットのみ。後日確認ダイアログ（⑧）を追加予定
    setSelectedChoice(null);
    setShowExplanation(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --------------------------------------------------------
  // スタイル制御（Machuda式）
  // --------------------------------------------------------
  const getRowStyle = (choice: Choice) => {
    if (!showExplanation) return "bg-transparent hover:bg-gray-50";
    if (choice.is_correct && selectedChoice === choice.order_index) return "bg-green-50"; 
    if (!choice.is_correct && selectedChoice === choice.order_index) return "bg-red-50"; 
    return "bg-transparent"; 
  };

  const getCircleStyle = (choice: Choice) => {
    if (!showExplanation) return "border border-gray-400 text-gray-700 bg-white";
    if (choice.is_correct) return "bg-green-500 text-white border-none"; 
    if (selectedChoice === choice.order_index) return "bg-red-400 text-white border-none"; 
    return "border border-gray-400 text-gray-700 bg-white"; 
  };

  // --------------------------------------------------------
  // テキスト加工関数
  // --------------------------------------------------------
  const renderQuestionText = (text: string) => {
    const keyword = "\\[Ima" + "ge of (.*?)\\]";
    const imageRegex = new RegExp(keyword, "g");
    const parts = text.split(imageRegex);

    return (
      <div className="space-y-4">
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 my-4 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-2 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="text-xs font-bold tracking-wider">【図解エリア】</span>
                <span className="text-[10px] mt-1 text-center px-4">{part}</span>
              </div>
            );
          }
          return (
            <div key={index}>
              {part.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== part.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  const getHintData = (text: string) => {
    if (text.startsWith("💡ここがポイント：")) return { label: "ここがポイント", content: text.replace("💡ここがポイント：", "") };
    if (text.startsWith("💡考え方のヒント：")) return { label: "考え方のヒント", content: text.replace("💡考え方のヒント：", "") };
    if (text.startsWith("💡")) return { label: "ヒント", content: text.replace("💡", "") };
    return { label: "ポイント", content: text };
  };

  const getPitfallText = (text: string) => {
    return text.replace("🐾よくある落とし穴：", "").replace("🐾", "");
  };

  const hintData = currentQuestion.hint_text ? getHintData(currentQuestion.hint_text) : null;
  const pitfallText = currentQuestion.pitfall_text ? getPitfallText(currentQuestion.pitfall_text) : null;

  return (
    <div className="min-h-screen bg-white pb-24 font-sans text-gray-800">
      
      {/* ★修正②：上部ヘッダーの固定（sticky top-0 z-50 bg-white を追加） */}
      <header className="sticky top-0 z-50 bg-white flex items-center p-4 border-b border-gray-200 shadow-sm">
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h1 className="flex-1 text-center font-bold text-lg tracking-wider text-gray-800">練習モード</h1>
        {/* ブックマーク等のダミーアイコン */}
        <div className="flex gap-3 text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
        </div>
      </header>
      
      {/* メインコンテンツ */}
      <main className="p-4 max-w-2xl mx-auto">
        
        {/* メタ情報 */}
        <div className="mb-6 text-sm text-gray-700 flex justify-between items-start">
          <div>
            <p className="font-bold text-gray-800 text-base">{currentQuestion.category}</p>
            <p className="text-xs text-gray-500 mt-1">第{currentQuestion.exam_term}回 - {currentQuestion.subcategory}</p>
          </div>
        </div>

        {/* 問題文 */}
        <div className="mb-8 text-[16px] leading-relaxed font-medium">
          <div className="mb-3 text-xl font-bold text-gray-800">{currentIndex + 1}。</div>
          {renderQuestionText(currentQuestion.question_text)}
        </div>

        {/* 選択肢リスト */}
        <div className="border-t border-gray-200">
          {currentQuestion.choices.map((choice) => (
            <button
              key={choice.order_index}
              onClick={() => handleChoiceClick(choice.order_index)}
              disabled={showExplanation}
              className={`w-full text-left flex items-start gap-4 p-4 border-b border-gray-200 transition-all duration-200 ${getRowStyle(choice)}`}
            >
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[15px] font-bold transition-colors ${getCircleStyle(choice)}`}>
                {choice.order_index}
              </div>
              <div className="pt-[4px] leading-relaxed text-[15px]">
                {choice.choice_text}
              </div>
            </button>
          ))}
        </div>

        {/* 解説エリア */}
        {showExplanation && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            {/* ★修正⑤：あなたの回答と正解の明示エリア */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200 flex flex-col sm:flex-row justify-around items-center gap-2 shadow-sm">
              <div className="text-sm font-medium text-gray-600 flex items-center gap-2">
                あなたの回答：
                <span className={`text-lg font-bold ${selectedChoice === correctChoiceNumber ? 'text-green-600' : 'text-red-500'}`}>
                  {selectedChoice === correctChoiceNumber ? '✅' : '❌'} {selectedChoice}番
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div> {/* PC用の区切り線 */}
              <div className="text-sm font-medium text-gray-600 flex items-center gap-2">
                正解：
                <span className="text-lg font-bold text-green-600">✅ {correctChoiceNumber}番</span>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-6 tracking-wide border-l-4 border-gray-800 pl-3">解説</h2>
            
            {/* ヒント＆落とし穴エリア */}
            <div className="mb-8 space-y-4">
              {hintData && (
                <div className="leading-relaxed bg-yellow-50/50 p-4 rounded-lg border border-yellow-100">
                  <span className="inline-block bg-yellow-300 text-gray-900 text-[11px] font-black px-2 py-1 rounded-sm mr-2 align-middle tracking-wider mb-1 sm:mb-0">
                    {hintData.label}
                  </span>
                  {/* ★修正①：青文字を廃止し、ダークグレーの太字に変更 */}
                  <span className="font-bold text-gray-800 text-[15px] align-middle">
                    {hintData.content}
                  </span>
                </div>
              )}
              
              {pitfallText && (
                <div className="flex gap-2 items-start pl-2 pt-2">
                  <span className="text-lg leading-none mt-0.5">🐾</span>
                  <p className="text-gray-500 text-[14px] italic leading-relaxed">
                    {pitfallText}
                  </p>
                </div>
              )}
            </div>

            {/* 選択肢ごとの解説 */}
            <div className="space-y-4 bg-gray-50/50 p-5 rounded-xl border border-gray-100">
              {currentQuestion.choices.map((choice) => (
                <div key={choice.order_index} className="flex gap-3 text-[14px] leading-relaxed text-gray-700">
                  <span className="font-bold text-gray-900 shrink-0 mt-0.5 w-[1.2rem] text-center">{choice.order_index}.</span>
                  <p>{choice.explanation_detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 画面下部固定のナビゲーションバー */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex justify-between items-center px-4 z-50 pb-safe">
        <button 
          onClick={handleReset} 
          className="shrink-0 w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-md active:scale-95 transition-transform hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
        
        <div className="flex justify-center items-center gap-2 sm:gap-6 flex-1 px-2">
          <button onClick={handlePrev} className="text-gray-400 hover:text-gray-900 px-2 active:scale-90 transition-all shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          
          <span className="font-bold text-base sm:text-lg min-w-[3rem] text-center tracking-widest text-gray-800 shrink-0">
            {currentIndex + 1}/{quizQuestions.length}
          </span>
          
          {/* ★修正④：スマホで文字が縦書きに潰れるのを防ぐ whitespace-nowrap */}
          <button className="border border-gray-300 rounded px-2 sm:px-3 py-1.5 text-[12px] sm:text-[13px] font-bold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors whitespace-nowrap shrink-0">
            問題を選択
          </button>
          
          <button onClick={handleNext} className="text-gray-400 hover:text-gray-900 px-2 active:scale-90 transition-all shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
        
        <div className="w-10 shrink-0"></div>
      </div>
    </div>
  );
}