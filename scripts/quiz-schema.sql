-- quizテーブルの作成（Supabase SQL Editorで実行）
-- 乙4クイズ用: 4択、正解インデックス、各選択肢の解説

create table if not exists quiz (
  id bigint generated always as identity primary key,
  question text not null,
  choices jsonb not null default '[]',      -- 選択肢4つの配列 ["A", "B", "C", "D"]
  correct_index smallint not null check (correct_index >= 0 and correct_index <= 3),
  explanations jsonb not null default '[]' -- 各選択肢の解説4つの配列
);

-- RLSを有効にする場合（任意）
-- alter table quiz enable row level security;
