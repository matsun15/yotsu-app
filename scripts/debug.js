// scripts/debug.js
const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

console.log('URL:', url ? '✅ あり' : '❌ なし（undefinedです）');
console.log('KEY:', key ? '✅ あり（先頭5文字: ' + key.slice(0,5) + '）' : '❌ なし（undefinedです）');

if (!url || !key) {
  console.log('\n⚠️ 環境変数が読めていません。原因は以下のどちらかです：');
  console.log('  A) .envファイルが存在しない or 場所が違う');
  console.log('  B) dotenvが読み込まれていない');
  process.exit(1);
}

const supabase = createClient(url, key);

async function debug() {
  // テスト1: 接続確認
  const { data, error } = await supabase.from('quiz').select('id').limit(1);
  
  if (error) {
    console.log('\n❌ 接続エラー:', error.message);
    console.log('コード:', error.code);
  } else {
    console.log('\n✅ 接続成功。現在の件数確認中...');
    const { count } = await supabase.from('quiz').select('*', { count: 'exact', head: true });
    console.log('現在のレコード数:', count);
  }

  // テスト2: 1件だけinsert
  const testRow = {
    question: "テスト問題",
    choices: ["A", "B", "C", "D", "E"],
    correct_index: 0,
    explanations: ["解説A", "解説B", "解説C", "解説D", "解説E"],
    advice: "テストアドバイス",
    category_id: "L01",
    source: "debug",
    format: "五肢択一"
  };

  const { error: insertError } = await supabase.from('quiz').insert(testRow);
  
  if (insertError) {
    console.log('\n❌ insertエラー:', insertError.message);
    console.log('詳細:', insertError.details);
    console.log('ヒント:', insertError.hint);
  } else {
    console.log('✅ insert成功！seed-quiz.jsをそのまま実行してOKです。');
  }
}

debug();