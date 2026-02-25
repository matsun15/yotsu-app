'use client';

import { useState } from 'react';

const questions = [
  {
    id: 1,
    category: "基礎化学",
    question: "次のうち、ガソリンの性質として正しいものはどれか。",
    options: [
      "常温常圧で液体であり、沸点は40〜200℃の範囲にある",
      "水に溶けやすく、電気の良好な伝導体である",
      "引火点は-40℃以下である",
      "蒸気比重は空気より軽い",
      "時間経過とともに自動酸化する"
    ],
    correctIndex: 0,
    point: "ガソリンの沸点は40〜200℃。常温で液体だが揮発しやすく、蒸気は空気より重い。",
    explanations: [
      "沸点40〜200℃は正しい。常温で液体を保ちながら蒸気を発生させる。",
      "ガソリンは非水溶性で、電気の不良伝導体。静電気が溜まりやすい。",
      "引火点-40℃以下は事実だが、沸点の方が出題頻度が高い。",
      "蒸気比重は空気より重い（約3〜4）。低所に溜まり引火リスクが高い。",
      "自動酸化は起こるが、主要な性質とは言えない。"
    ]
  },
  {
    id: 2,
    category: "指定数量",
    question: "危険物の指定数量に関する記述として、正しいものはどれか。",
    options: [
      "ガソリンの指定数量は200Lである",
      "灯油の指定数量は1000Lである",
      "軽油の指定数量は500Lである",
      "アセトンの指定数量は200kgである",
      "メタノールの指定数量は400Lである"
    ],
    correctIndex: 1,
    point: "灯油1000L、ガソリン200L、軽油2000L。「ガソ200・灯油1000・軽油2000」",
    explanations: [
      "ガソリン200Lは正しいが、この問題の正解は灯油1000L。",
      "灯油の指定数量は1000L。引火点が高いためガソリンより多い。",
      "軽油は2000L。灯油より引火点が高く指定数量も大きい。",
      "アセトンは第一石油類（水溶性）で、単位はL。指定数量は400L。",
      "メタノールはアルコール類で、指定数量は400L。"
    ]
  },
  {
    id: 3,
    category: "消火方法",
    question: "火災時の消火活動において、引火性液体の火災処理に関する以下の説明について、最も適切なものはどれか。消防活動では、ガソリン、灯油、軽油などの第4類危険物の火災が発生する可能性があり、これらの火災の特性を理解した上で、適切な消火剤を選択することが極めて重要である。",
    options: [
      "ガソリン火災には水を大量に使用する",
      "油火災に対して泡消火剤は効果がない",
      "引火性液体の火災には泡消火、粉末消火、CO2消火などが用いられる",
      "二酸化炭素消火は高い冷却効果も有する",
      "ポリ泡（AFFF）は水溶性液体火災でも使用できる"
    ],
    correctIndex: 2,
    point: "油火災に水はNG。泡・粉末・CO2から状況で選択する。",
    explanations: [
      "水を使うと油が飛散し火災が拡大する。絶対NG。",
      "泡消火剤は油火災に極めて有効。油面を覆い酸素を遮断する。",
      "泡・粉末・CO2の3つが油火災の基本。状況で使い分ける。",
      "CO2の主作用は酸素遮断。冷却効果はほぼない。",
      "AFFFは非水溶性油用。水溶性液体には耐アルコール泡が必要。"
    ]
  }
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const quiz = questions[currentIndex];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index !== quiz.correctIndex) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelected(null);
      setShowDetails(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setShowDetails(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* 上部：カテゴリのみ（薄く） */}
      <div style={{
        flexShrink: 0,
        padding: '12px 16px',
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: '#fff'
      }}>
        <div style={{ 
          fontSize: '13px', 
          color: '#6b7280',
          fontWeight: '500'
        }}>
          {quiz.category}
        </div>
      </div>

      {/* 中央スクロール：問題文 + 選択肢 + 解説 */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        
        {/* 問題文（スクロールエリア内） */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #f3f4f6'
        }}>
          <div style={{ 
            fontSize: '15px', 
            fontWeight: '500', 
            lineHeight: '1.7',
            color: '#111827'
          }}>
            {currentIndex + 1}. {quiz.question}
          </div>
        </div>

        {/* 選択肢 */}
        {quiz.options.map((option, index) => {
          // Matchuda式の色分け
          let bgColor = '#fff';
          let numBg = '#fff';
          let numColor = '#374151';
          let numBorder = '1px solid #6b7280';
          
          if (selected !== null) {
            if (index === selected && index !== quiz.correctIndex) {
              // 自分が選んだ間違い
              bgColor = '#fae8e8';       
              numBg = '#eb6a6a';         
              numColor = '#ffffff';      
              numBorder = '1px solid #eb6a6a';
            } else if (index === quiz.correctIndex) {
              // 正解
              bgColor = '#fff';
              numBg = '#50b875';         
              numColor = '#ffffff';      
              numBorder = '1px solid #50b875';
            } else {
              // その他
              bgColor = '#fff';
              numBg = '#fff';
              numColor = '#9ca3af';
              numBorder = '1px solid #d1d5db';
            }
          }

          return (
            <div
              key={index}
              onClick={() => handleAnswer(index)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '16px',
                backgroundColor: bgColor,
                borderBottom: '1px solid #f3f4f6',
                cursor: selected === null ? 'pointer' : 'default',
                transition: 'background-color 0.15s ease'
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: numBg,
                color: numColor,
                border: numBorder,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                {index + 1}
              </div>
              <span style={{ 
                fontSize: '15px', 
                lineHeight: '1.6',
                color: selected !== null && index !== quiz.correctIndex && index !== selected ? '#9ca3af' : '#374151',
                paddingTop: '4px'
              }}>
                {option}
              </span>
            </div>
          );
        })}

        {/* 解説エリア */}
        {selected !== null && (
          <div style={{ 
            padding: '20px 16px',
            backgroundColor: '#fafafa',
            borderTop: '1px solid #e5e7eb'
          }}>
            
            {/* 解説ヘッダー */}
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '12px'
            }}>
              解説
            </div>

            {/* 第1層：Point */}
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px 14px',
              marginBottom: '16px'
            }}>
              <div style={{ 
                fontSize: '14px', 
                lineHeight: '1.6',
                color: '#374151'
              }}>
                {quiz.point}
              </div>
            </div>

            {/* 詳しく見るボタン */}
            {!showDetails && (
              <button
                onClick={() => setShowDetails(true)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6b7280',
                  cursor: 'pointer'
                }}
              >
                ▼ 各選択肢の解説を見る
              </button>
            )}

            {/* 第2層：全選択肢解説 */}
            {showDetails && (
              <div>
                <button
                  onClick={() => setShowDetails(false)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#f3f4f6',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#6b7280',
                    cursor: 'pointer',
                    marginBottom: '12px'
                  }}
                >
                  ▲ 閉じる
                </button>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {quiz.explanations.map((exp, i) => {
                    // 解説内もMatchudaスタイルに合わせる
                    let expBg = '#fff';
                    let expNumBg = '#fff';
                    let expNumColor = '#6b7280';
                    let expNumBorder = '1px solid #6b7280';
                    let expBoxBorder = '#e5e7eb';
                    
                    if (i === quiz.correctIndex) {
                      expNumBg = '#50b875';
                      expNumColor = '#fff';
                      expNumBorder = '1px solid #50b875';
                      expBoxBorder = '#bbf7d0';
                    } else if (i === selected) {
                      expBg = '#fae8e8';
                      expNumBg = '#eb6a6a';
                      expNumColor = '#fff';
                      expNumBorder = '1px solid #eb6a6a';
                      expBoxBorder = '#fecaca';
                    }
                    
                    return (
                      <div 
                        key={i}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          padding: '12px',
                          backgroundColor: expBg,
                          borderRadius: '8px',
                          border: `1px solid ${expBoxBorder}`
                        }}
                      >
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: expNumBg,
                          color: expNumColor,
                          border: expNumBorder,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}>
                          {i + 1}
                        </div>
                        <div style={{
                          fontSize: '14px',
                          lineHeight: '1.6',
                          color: '#4b5563'
                        }}>
                          {exp}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* 下部余白 */}
        <div style={{ height: '80px' }} />
      </div>

      {/* 下部固定：ナビゲーション */}
      <div style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#fff'
      }}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'transparent',
            color: currentIndex === 0 ? '#d1d5db' : '#374151',
            fontSize: '24px',
            cursor: currentIndex === 0 ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ‹
        </button>

        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ 
            fontSize: '18px', 
            fontWeight: '700',
            color: '#111827'
          }}>
            {currentIndex + 1} / {questions.length}
          </span>
          <button
            style={{
              padding: '6px 12px',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#374151',
              cursor: 'pointer'
            }}
          >
            問題選択
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'transparent',
            color: currentIndex === questions.length - 1 ? '#d1d5db' : '#374151',
            fontSize: '24px',
            cursor: currentIndex === questions.length - 1 ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}