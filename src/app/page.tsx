'use client';

import { useState } from 'react';

const questions = [
  {
    id: 1,
    category: "危険物の定義",
    question: "消防法の別表第1に危険物として掲げられていないものはどれか。",
    options: [
      "プロパン",
      "硫黄",
      "過酸化水素",
      "ナトリウム",
      "黄りん"
    ],
    correctIndex: 0,
    point: "プロパンは「気体」なので消防法の危険物ではない。危険物は固体・液体のみ。気体は高圧ガス保安法の管轄。\n\n【⚠️ よくある勘違い】\n「燃えるもの＝危険物」ではない。消防法の危険物は固体と液体だけ。プロパン、水素、アセチレンなどの気体は対象外。",
    explanations: [
      "正解。 ガスボンベでおなじみ。「燃える＝危険物」と思いがちだが、気体は消防法の対象外。",
      "第2類（可燃性固体）。黄色い粉、火山や温泉のイメージ。",
      "第6類（酸化性液体）。オキシドールの濃いもの。自身は燃えないが、他を燃やす。",
      "第3類（禁水性）。水と激しく反応して発火。理科の実験でおなじみ。",
      "第3類（自然発火性）。空気に触れると自然に燃え出す。水中保存が必要。"
    ]
  },
  {
    id: 2,
    category: "指定数量の計算",
    question: "メタノール100Lを貯蔵している場所に、次の危険物を追加で貯蔵した場合、指定数量以上となるものはどれか。",
    options: [
      "酢酸 200L",
      "アセトン 300L",
      "トルエン 90L",
      "グリセリン 500L",
      "アセトアルデヒド 20L"
    ],
    correctIndex: 1,
    point: "メタノール100L ÷ 400L = 0.25。残り0.75で指定数量に達する。アセトン300L ÷ 400L = 0.75。ピッタリ1.0になる。\n\n【⚠️ よくある勘違い】\nアセトアルデヒドは指定数量が小さい（50L）ので倍数が大きくなりやすいが、20Lでは0.4止まり。計算ミスに注意。",
    explanations: [
      "200 ÷ 2000 = 0.1。合計0.35で足りない。酢酸は第2石油類（水溶性）で指定数量が大きい。",
      "正解。 300 ÷ 400 = 0.75。合計1.0でちょうど指定数量に達する。",
      "90 ÷ 200 = 0.45。合計0.70で足りない。トルエンは第1石油類（非水溶性）。",
      "500 ÷ 4000 = 0.125。合計0.375で全然足りない。第3石油類は指定数量が大きい。",
      "20 ÷ 50 = 0.4。合計0.65で足りない。特殊引火物で指定数量は最小の50L。"
    ]
  },
  {
    id: 3,
    category: "行政命令",
    question: "市町村長等から出される「使用停止命令」に該当しないものはどれか。",
    options: [
      "完成検査済証の交付前に使用した",
      "定期点検を実施していない",
      "危険物取扱者が免状の返納命令を受けた",
      "位置・構造・設備を無許可で変更した",
      "保安監督者に監督させていない"
    ],
    correctIndex: 2,
    point: "使用停止命令は「製造所等（施設）」に対するもの。免状の返納命令は「個人」に対するもの。対象が違う。\n\n【⚠️ よくある勘違い】\n「返納命令を受けた人がいる施設は使用停止？」と思いがちだが、それは人事の問題。別の有資格者を配置すれば施設は使える。",
    explanations: [
      "該当する。検査前の使用は違法。仮使用の承認が必要。",
      "該当する。点検義務違反は使用停止の対象。",
      "正解（該当しない）。 返納命令は「人」への処分。施設の使用停止とは無関係。",
      "該当する。変更許可なしの改造は重大違反。",
      "該当する。形だけ選任して業務をさせないのは違反。"
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
      
      {/* 上部：カテゴリのみ */}
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

      {/* 中央スクロール */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        
        {/* 問題文 */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #f3f4f6'
        }}>
          <div style={{ 
            fontSize: '15px', 
            fontWeight: '500', 
            lineHeight: '1.7',
            color: '#111827',
            whiteSpace: 'pre-wrap'
          }}>
            {currentIndex + 1}. {quiz.question}
          </div>
        </div>

        {/* 選択肢 */}
        {quiz.options.map((option, index) => {
          let bgColor = '#fff';
          let numBg = '#fff';
          let numColor = '#374151';
          let numBorder = '1px solid #6b7280';
          
          if (selected !== null) {
            if (index === selected && index !== quiz.correctIndex) {
              // 自分が選んだ間違い → 全体ピンク
              bgColor = '#fae8e8';       
              numBg = '#eb6a6a';         
              numColor = '#ffffff';      
              numBorder = '1px solid #eb6a6a';
            } else if (index === quiz.correctIndex) {
              // 正解 → 全体薄緑（修正箇所）
              bgColor = '#e8f5e9';
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
            
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '12px'
            }}>
              解説
            </div>

            {/* Point */}
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
                color: '#374151',
                whiteSpace: 'pre-wrap'
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

            {/* 全選択肢解説 */}
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
                    let expBg = '#fff';
                    let expNumBg = '#fff';
                    let expNumColor = '#6b7280';
                    let expNumBorder = '1px solid #6b7280';
                    let expBoxBorder = '#e5e7eb';
                    
                    if (i === quiz.correctIndex) {
                      // 正解 → 薄緑背景
                      expBg = '#e8f5e9';
                      expNumBg = '#50b875';
                      expNumColor = '#fff';
                      expNumBorder = '1px solid #50b875';
                      expBoxBorder = '#a5d6a7';
                    } else if (i === selected) {
                      // 自分が選んだ間違い → ピンク背景
                      expBg = '#fae8e8';
                      expNumBg = '#eb6a6a';
                      expNumColor = '#fff';
                      expNumBorder = '1px solid #eb6a6a';
                      expBoxBorder = '#f5b0b0';
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
