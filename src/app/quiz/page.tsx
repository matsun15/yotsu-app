"use client";

import { useState, useEffect } from "react";
import { quizQuestions } from "@/constants/questions";
import { Choice } from "@/types/quiz";

// 全問題の解答状態を管理するための型
type AnswerState = {
  selectedChoice: number | null;
  isCorrect: boolean | null;
};

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 全75問の解答状態を記憶する配列
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [showModal, setShowModal] = useState(false);

  // 初回マウント時に配列を初期化
  useEffect(() => {
    if (quizQuestions) {
      setAnswers(new Array(quizQuestions.length).fill({ selectedChoice: null, isCorrect: null }));
    }
  }, []);

  if (!quizQuestions || quizQuestions.length === 0 || answers.length === 0) {
    return <div className="p-10 text-center text-gray-500">問題データを読み込んでいます...</div>;
  }

  const currentQuestion = quizQuestions[currentIndex];
  const correctChoiceNumber = currentQuestion.choices.find(c => c.is_correct)?.order_index;
  const currentAnswer = answers[currentIndex];
  const hasAnswered = currentAnswer.selectedChoice !== null;

  // --------------------------------------------------------
  // イベントハンドラ
  // --------------------------------------------------------
  const handleChoiceClick = (choiceIndex: number, isCorrect: boolean) => {
    if (hasAnswered) return; // 既に解答済みの場合は無効化

    const newAnswers = [...answers];
    newAnswers[currentIndex] = { selectedChoice: choiceIndex, isCorrect };
    setAnswers(newAnswers);
  };

  const jumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    jumpToQuestion((currentIndex + 1) % quizQuestions.length);
  };

  const handlePrev = () => {
    jumpToQuestion((currentIndex - 1 + quizQuestions.length) % quizQuestions.length);
  };

  const handleReset = () => {
    if (window.confirm("進行状況をリセットして最初からやり直しますか？")) {
      setAnswers(new Array(quizQuestions.length).fill({ selectedChoice: null, isCorrect: null }));
      jumpToQuestion(0);
    }
  };

  // --------------------------------------------------------
  // スタイル制御
  // --------------------------------------------------------
  const getRowStyle = (choice: Choice) => {
    if (!hasAnswered) return "bg-transparent hover:bg-gray-50";
    if (choice.is_correct && currentAnswer.selectedChoice === choice.order_index) return "bg-green-50"; 
    if (!choice.is_correct && currentAnswer.selectedChoice === choice.order_index) return "bg-red-50"; 
    return "bg-transparent"; 
  };

  const getCircleStyle = (choice: Choice) => {
    if (!hasAnswered) return "border border-gray-400 text-gray-700 bg-white";
    if (choice.is_correct) return "bg-green-500 text-white border-none"; 
    if (currentAnswer.selectedChoice === choice.order_index) return "bg-red-400 text-white border-none"; 
    return "border border-gray-400 text-gray-700 bg-white"; 
  };

  const renderQuestionText = (text: string) => {
    const keyword = "\\[Ima" + "ge of (.*?)\\]";
    const imageRegex = new RegExp(keyword, "g");
    const parts = text.split(imageRegex);

    return (
      <span className="space-y-3 block mt-1">
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 my-3 shadow-inner">
                <span className="text-xs font-bold tracking-wider">【図解エリア】</span>
                <span className="text-[10px] mt-1 text-center px-4">{part}</span>
              </div>
            );
          }
          return (
            <span key={index}>
              {part.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== part.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
          );
        })}
      </span>
    );
  };

  const getHintData = (text: string) => {
    if (text.startsWith("💡ここがポイント：")) return { label: "ここがポイント", content: text.replace("💡ここがポイント：", "") };
    if (text.startsWith("💡考え方のヒント：")) return { label: "考え方のヒント", content: text.replace("💡考え方のヒント：", "") };
    if (text.startsWith("💡")) return { label: "ヒント", content: text.replace("💡", "") };
    return { label: "ポイント", content: text };
  };

  const getPitfallText = (text: string) => text.replace("🐾よくある落とし穴：", "").replace("🐾", "");

  const hintData = currentQuestion.hint_text ? getHintData(currentQuestion.hint_text) : null;
  const pitfallText = currentQuestion.pitfall_text ? getPitfallText(currentQuestion.pitfall_text) : null;

  return (
    <div className="min-h-screen bg-white pb-24 font-sans text-gray-800">
      
      {/* ★改善1：ヘッダーの1行圧縮（-60px） */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm flex items-center justify-between px-4 py-3 border-b border-gray-200 shadow-sm text-[15px]">
        <button onClick={handleReset} className="text-gray-500 hover:text-gray-900 transition-colors p-1 -ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex-1 text-center font-bold text-gray-700 flex justify-center items-center gap-2">
          <span className="truncate max-w-[100px] sm:max-w-none">{currentQuestion.category}</span>
          <span className="text-gray-300">|</span>
          <span>第{currentQuestion.exam_term}回</span>
        </div>
        <div className="font-bold tracking-widest text-gray-800 w-12 text-right">
          {currentIndex + 1}/{quizQuestions.length}
        </div>
      </header>
      
      <main className="p-4 max-w-2xl mx-auto">
        
        {/* ★改善2：問題番号の統合（-24px）とフォントサイズ調整 */}
        <div className="mb-6 text-[15px] leading-relaxed font-medium text-gray-800">
          <span className="font-bold text-lg mr-1">{currentIndex + 1}.</span>
          {renderQuestionText(currentQuestion.question_text)}
        </div>

        {/* ★改善3：選択肢の余白を削減（-40px） */}
        <div className="border-t border-gray-200 mb-6">
          {currentQuestion.choices.map((choice) => (
            <button
              key={choice.order_index}
              onClick={() => handleChoiceClick(choice.order_index, choice.is_correct)}
              disabled={hasAnswered}
              className={`w-full text-left flex items-start gap-3 py-3 px-2 border-b border-gray-200 transition-all duration-200 ${getRowStyle(choice)}`}
            >
              <div className={`shrink-0 w-7 h-7 mt-0.5 rounded-full flex items-center justify-center text-[14px] font-bold transition-colors ${getCircleStyle(choice)}`}>
                {choice.order_index}
              </div>
              <div className="leading-relaxed text-[14px] pt-[2px]">
                {choice.choice_text}
              </div>
            </button>
          ))}
        </div>

        {/* 解説エリア（解答後のみ表示） */}
        {hasAnswered && (
          <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            {/* ★改善4：回答/正解を1行コンパクトに（中央揃え） */}
            <div className="bg-gray-50 rounded-lg py-3 px-4 mb-6 border border-gray-200 flex justify-center items-center gap-6 shadow-sm">
              <div className="text-[14px] font-bold text-gray-600">
                回答: <span className={`ml-1 text-base ${currentAnswer.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                  {currentAnswer.isCorrect ? '✅' : '❌'} {currentAnswer.selectedChoice}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-[14px] font-bold text-gray-600">
                正解: <span className="ml-1 text-base text-green-600">✅ {correctChoiceNumber}</span>
              </div>
            </div>

            <h2 className="text-lg font-bold mb-4 tracking-wide border-l-4 border-gray-800 pl-3">解説</h2>
            
            <div className="mb-6 space-y-4">
              {hintData && (
                <div className="leading-relaxed bg-yellow-50/70 p-4 rounded-lg border border-yellow-100">
                  <span className="inline-block bg-yellow-300 text-gray-900 text-[11px] font-black px-2 py-1 rounded-sm mr-2 align-middle tracking-wider mb-1 sm:mb-0">
                    {hintData.label}
                  </span>
                  <span className="font-bold text-gray-800 text-[14px] align-middle">
                    {hintData.content}
                  </span>
                </div>
              )}
              
              {pitfallText && (
                <div className="flex gap-2 items-start pl-2">
                  <span className="text-base leading-none mt-0.5">🐾</span>
                  <p className="text-gray-500 text-[13px] italic leading-relaxed">
                    {pitfallText}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-3 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
              {currentQuestion.choices.map((choice) => (
                <div key={choice.order_index} className="flex gap-3 text-[13px] leading-relaxed text-gray-700">
                  <span className="font-bold text-gray-900 shrink-0 mt-[1px] w-[1rem] text-center">{choice.order_index}.</span>
                  <p>{choice.explanation_detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 画面下部固定のナビゲーションバー */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 h-14 flex justify-between items-center px-2 sm:px-4 z-40 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        
        <button onClick={handlePrev} className="flex flex-col items-center justify-center w-16 h-full text-gray-500 hover:text-gray-900 active:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        
        {/* ★改善5：「問題を選択」モーダル起動ボタン */}
        <button 
          onClick={() => setShowModal(true)} 
          className="flex-1 mx-2 max-w-[200px] py-2 bg-gray-800 text-white rounded-lg text-[14px] font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
          問題一覧
        </button>
        
        <button onClick={handleNext} className="flex flex-col items-center justify-center w-16 h-full text-gray-500 hover:text-gray-900 active:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>

      </div>

      {/* ★実装：全問題モーダル（ナンバーパッド） */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl w-full max-h-[85vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-lg text-gray-800">問題一覧</h3>
                <p className="text-[12px] text-gray-500 mt-0.5">番号をタップすると該当問題へ移動します</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-90 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-5 overflow-y-auto">
              <div className="grid grid-cols-5 gap-3 sm:gap-4 max-w-md mx-auto">
                {quizQuestions.map((_, i) => {
                  const ans = answers[i];
                  let bgClass = "bg-white border border-gray-300 text-gray-700"; // 未解答（白）
                  if (ans?.isCorrect === true) bgClass = "bg-green-500 text-white border-none shadow-sm"; // 正解（緑）
                  else if (ans?.isCorrect === false) bgClass = "bg-red-500 text-white border-none shadow-sm"; // 不正解（赤）
                  
                  // 現在見ている問題はリングをつけて強調
                  const ringClass = currentIndex === i ? "ring-2 ring-offset-2 ring-gray-800" : "";

                  return (
                    <button 
                      key={i} 
                      onClick={() => jumpToQuestion(i)}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-lg mx-auto active:scale-90 transition-all ${bgClass} ${ringClass}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* モーダル下部の安全余白 */}
            <div className="h-safe pb-8"></div>
          </div>
        </div>
      )}

    </div>
  );
}