export type Choice = {
  order_index: number;
  choice_text: string;
  is_correct: boolean;
  explanation_detail: string;
};

export type Question = {
  question_id: number;
  exam_term: number;
  category: string;
  subcategory: string;
  difficulty: number;
  question_text: string;
  hint_text: string | null;
  mnemonic_text?: string | null;
  pitfall_text: string | null;
  choices: Choice[];
};