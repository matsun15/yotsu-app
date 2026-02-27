// src/types/quiz.ts

// ▼選択肢（Choice）1つ分の設計図
export type Choice = {
  order_index: number;         // 選択肢の番号（1〜5）
  choice_text: string;         // 選択肢のテキスト
  is_correct: boolean;         // 正解かどうか（true / false）
  explanation_detail: string;  // 各選択肢の解説（○×付き）
};

// ▼問題（Question）1問分の設計図
export type Question = {
  exam_term: number;           // 第何回か（1, 2, 3）
  category: string;            // 大分類（法令、物理・化学、性質・消火）
  subcategory: string;         // 小分類タグ（L01など）
  difficulty: number;          // 難易度（1〜5）
  question_text: string;       // 問題文
  hint_text: string;           // 💡ここがポイント（S+仕様！）
  pitfall_text: string;        // 🐾よくある落とし穴（S+仕様！）
  choices: Choice[];           // 上で作ったChoiceの配列（5択）
};