"use client";

import { useState, useEffect } from "react";
import { quizQuestions } from "@/constants/questions";
import { Choice } from "@/types/quiz";

type AnswerState = {
  selectedChoice: number | null;
  isCorrect: boolean | null;
};

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [showModal, setShowModal] = useState(false);

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
    if (hasAnswered) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = { selectedChoice: choiceIndex, isCorrect };
    setAnswers(newAnswers);
  };

  const jumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => jumpToQuestion((currentIndex + 1) % quizQuestions.length);
  const handlePrev = () => jumpToQuestion((currentIndex - 1 + quizQuestions.length) % quizQuestions.length);

  const handleClose = () => {
    window.confirm("トップページへ戻りますか？（※現在はダミーです）");
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
    if (currentAnswer.selectedChoice === choice.order_index) return "bg-[#EF4444] text-white border-none"; 
    return "border border-gray-400 text-gray-700 bg-white"; 
  };

  const renderQuestionText = (text: string) => {
    const keyword = "\\[Ima" + "ge of (.*?)\\]";
    const imageRegex = new RegExp(keyword, "g");
    const parts = text.split(imageRegex);

    return (
      <span className="inline">
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 my-3 shadow-inner block">
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

  const pitfallText = currentQuestion.pitfall_text ? currentQuestion.pitfall_text.replace("🐾よくある落とし穴：", "").replace("🐾", "") : null;
  const hintData = currentQuestion.hint_text ? getHintData(currentQuestion.hint_text) : null;

  return (
    <div className="min-h-screen bg-white pb-24 font-sans text-gray-800">
      
      {/* 上部ヘッダー */}
      <header className="sticky top-0 z-40 bg-white flex items-center px-4 py-3 border-b border-gray-200 text-[15px]">
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-900 p-1 -ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex-1 text-center font-bold text-gray-800 text-sm sm:text-base">
          {currentQuestion.category} 第{currentQuestion.exam_term}回 {currentIndex + 1}番
        </div>
        <div className="w-6"></div>
      </header>
      
      <main className="p-4 max-w-2xl mx-auto">
        
        {/* 問題文 */}
        <div className="mb-6 text-[15px] leading-relaxed font-medium text-gray-800">
          <span className="mr-1">{currentIndex + 1}.</span>
          {renderQuestionText(currentQuestion.question_text)}
        </div>

        {/* 選択肢エリア */}
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
            
            {/* 正解・不正解の表示エリア */}
            {currentAnswer.isCorrect ? (
              <div className="bg-white rounded-lg py-3 px-4 mb-6 border border-gray-200 flex justify-center items-center shadow-sm">
                <div className="text-[15px] font-bold text-gray-800">
                  正解: <span className="ml-1 text-[17px] text-green-600">✅ {correctChoiceNumber}</span>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg py-3 px-4 mb-6 border border-gray-200 flex justify-center items-center gap-6 shadow-sm">
                <div className="text-[14px] font-bold text-gray-600">
                  回答: <span className="ml-1 text-[16px] text-[#EF4444]">❌ {currentAnswer.selectedChoice}</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="text-[14px] font-bold text-gray-600">
                  正解: <span className="ml-1 text-[16px] text-green-600">✅ {correctChoiceNumber}</span>
                </div>
              </div>
            )}

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

      {/* 画面下部固定ナビ（Machuda仕様） */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-[60px] flex justify-between items-center px-4 z-40 pb-safe">
        
        {/* 左：戻るボタン */}
        <button onClick={handlePrev} className="p-2 text-gray-400 hover:text-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        
        {/* 中央：進捗 ＋ 問題選択ボタン */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-[16px] text-gray-900 tracking-wide">
            {currentIndex + 1} / {quizQuestions.length}
          </span>
          <button 
            onClick={() => setShowModal(true)} 
            className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-md text-[13px] font-bold shadow-sm active:bg-gray-50 transition-colors"
          >
            問題選択
          </button>
        </div>
        
        {/* 右：次へボタン */}
        <button onClick={handleNext} className="p-2 text-gray-400 hover:text-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>
      </div>

      {/* 全問題一覧モーダル */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 px-4">
          <div className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start p-5 pb-3">
              <div>
                <h3 className="font-bold text-[18px] text-gray-900">問題全体を見る</h3>
                <p className="text-[13px] text-gray-500 mt-1">番号を押すと該当問題へ移動します</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-1 -mr-2 -mt-1 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-5 pt-2 overflow-y-auto">
              <div className="grid grid-cols-5 gap-3 sm:gap-4">
                {quizQuestions.map((_, i) => {
                  const ans = answers[i];
                  let bgClass = "bg-white border border-gray-400 text-gray-800"; // 未解答（白）
                  if (ans?.isCorrect === true) bgClass = "bg-[#10B981] text-white border-none"; // 正解（緑）
                  else if (ans?.isCorrect === false) bgClass = "bg-[#EF4444] text-white border-none"; // 不正解（赤）
                  
                  // ★余計なringClass（二重丸）を完全に削除しました
                  return (
                    <button 
                      key={i} 
                      onClick={() => jumpToQuestion(i)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-[15px] mx-auto active:scale-90 transition-all ${bgClass}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}