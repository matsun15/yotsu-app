// src/constants/questions.ts

// ★ここを追加：さっき作った「Question」という設計図を読み込む
import { Question } from "../types/quiz";

// ★ここを変更：「: Question[]」をつけて、このデータがQuestion型のリストであることを宣言する
export const quizQuestions: Question[] = [

  // =========================================================
  // 🟢 第1回：法令（15問）
  // ※コピー元の最初にある [ と 最後にある ] を消して、中身だけを貼る
  // =========================================================
  // ↓↓↓ ここから下にコピペ ↓↓↓

  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L02",
    "difficulty": 3,
    "question_text": "消防法における「危険物」の定義として、法令上正しい記述はどれか。",
    "hint_text": "💡ここがポイント：危険物の条件は「別表に名前がある＋その性質を持つ」こと。「危険物に気体ない」の語呂通り、固体と液体だけでガス（気体）は含まれません！",
    "pitfall_text": "🐾よくある落とし穴：「指定数量以上のもの」を選びたくなりますよね。実は量が少なくても危険物は危険物です。量によって変わるのは「規制の厳しさ」なんですよ。",
    "choices": [
      { "order_index": 1, "choice_text": "消防法別表で定められた品名に該当し、かつ、指定数量以上の量が存在する物品をいう。", "is_correct": false, "explanation_detail": "△惜しい！量が指定数量未満であっても、危険物であることには変わりありません。" },
      { "order_index": 2, "choice_text": "消防法別表の品名欄に掲げられている物品であって、同表に定められた性質を有するものをいう。", "is_correct": true, "explanation_detail": "✅そのとおり！「別表の品名」＋「性質」の2つが揃って初めて危険物と定義されます。" },
      { "order_index": 3, "choice_text": "各都道府県の火災予防条例によって、特別に危険であると指定された物品をいう。", "is_correct": false, "explanation_detail": "×危険物は国の法律（消防法）で全国一律に決められています。条例ではありません。" },
      { "order_index": 4, "choice_text": "常温において気体または液体であり、引火や爆発の危険性が高い物質を総称していう。", "is_correct": false, "explanation_detail": "×気体（ガス）は消防法ではなく、高圧ガス保安法という別の法律の管轄になります。" },
      { "order_index": 5, "choice_text": "総務大臣が告示によって、特に火災予防上の注意が必要であると定めた物品をいう。", "is_correct": false, "explanation_detail": "×告示ではなく、消防法という法律の「別表」で最初からバッチリ決められています。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L01",
    "difficulty": 3,
    "question_text": "メタノール100Lを貯蔵している場所に、次の危険物を追加で貯蔵した場合、指定数量以上となるものはどれか。",
    "hint_text": "💡ここがポイント：「特殊な50の兄さん(200)はよく(400)アルコールを飲んで」で指定数量を思い出しましょう！メタノール(アルコール類)＝400L、アセトアルデヒド(特殊引火物)＝50Lです。（※アセトンは第1水溶性なので2倍の400L）",
    "pitfall_text": "🐾よくある落とし穴：アセトアルデヒドは指定数量が小さい（50L）ですが、20Lだとまだ0.4倍止まりなので引っかけです。",
    "choices": [
      { "order_index": 1, "choice_text": "酢酸 200L", "is_correct": false, "explanation_detail": "×200÷2000=0.1倍。合計0.35倍でまだまだ足りません。" },
      { "order_index": 2, "choice_text": "アセトン 300L", "is_correct": true, "explanation_detail": "✅正解。300÷400=0.75倍。メタノールの0.25倍と合わせてちょうど1.0倍になります。" },
      { "order_index": 3, "choice_text": "トルエン 90L", "is_correct": false, "explanation_detail": "×90÷200=0.45倍。合計0.70倍で足りません。" },
      { "order_index": 4, "choice_text": "グリセリン 500L", "is_correct": false, "explanation_detail": "×500÷4000=0.125倍。合計0.375倍で足りません。" },
      { "order_index": 5, "choice_text": "アセトアルデヒド 20L", "is_correct": false, "explanation_detail": "×20÷50=0.4倍。合計0.65倍で足りません。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L03",
    "difficulty": 4,
    "question_text": "製造所等の設置許可権者について、誤っている組み合わせはどれか。",
    "hint_text": "💡ここがポイント：原則として施設関係は「市町村長等」ですが、小さな村（消防本部がない）では「都道府県知事」が代わりに許可を出します。「面倒な制止（免状＝知事、製造所等＝市町村長等）」の例外パターンです！",
    "pitfall_text": "🐾よくある落とし穴：「市町村の施設だから市町村長だろう」という思い込みが狙われます。本部がなければ知事です。",
    "choices": [
      { "order_index": 1, "choice_text": "消防本部のある市町村内の移送取扱所 → 市町村長", "is_correct": false, "explanation_detail": "○正しい。消防本部があれば市町村長が許可します。" },
      { "order_index": 2, "choice_text": "消防本部のない市町村内の製造所 → 都道府県知事", "is_correct": false, "explanation_detail": "○正しい。消防本部がなければ知事が許可します。" },
      { "order_index": 3, "choice_text": "2つの市町村にまたがる移送取扱所 → 都道府県知事", "is_correct": false, "explanation_detail": "○正しい。複数市町村にまたがるパイプライン等は知事です。" },
      { "order_index": 4, "choice_text": "2つの都道府県にまたがる移送取扱所 → 総務大臣", "is_correct": false, "explanation_detail": "○正しい。県をまたぐ大規模なものは国（総務大臣）です。" },
      { "order_index": 5, "choice_text": "消防本部のない市町村内の屋内貯蔵所 → 市町村長", "is_correct": true, "explanation_detail": "✅誤り。消防本部がない場合、許可を出すのは市町村長ではなく「都道府県知事」です。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L04",
    "difficulty": 3,
    "question_text": "屋内貯蔵所の位置、構造及び設備の技術上の基準について、正しい記述はどれか。",
    "hint_text": "💡ここがポイント：屋内貯蔵所は「床面積1,000m²以下」「軒高6m未満」「天井は作らない」という3つの絶対ルールがあります。",
    "pitfall_text": "🐾よくある落とし穴：「燃えにくい断熱材で天井を作るべきだ」と思いがちですが、爆発時に屋根だけが吹き飛んで力を逃がせるように「天井は設けてはならない」のが正解です。",
    "choices": [
      { "order_index": 1, "choice_text": "貯蔵倉庫は、事務所などの他の建築物と複合した造りにすることができる。", "is_correct": false, "explanation_detail": "×屋内貯蔵所は、他の建物とはくっつけず「独立した専用の建物」にしなければなりません。" },
      { "order_index": 2, "choice_text": "貯蔵倉庫の床面積は、最大で2,000m²以下に制限されている。", "is_correct": false, "explanation_detail": "×床面積の上限は「1,000m²以下」です。よく出る数字なので注意しましょう。" },
      { "order_index": 3, "choice_text": "地盤面から軒までの高さは、8m未満の平屋建てにしなければならない。", "is_correct": false, "explanation_detail": "×軒の高さは「6m未満」がルールです。" },
      { "order_index": 4, "choice_text": "引火点が70℃未満の危険物を貯蔵する場合は、内部の蒸気を屋根の上に排出する設備が必要である。", "is_correct": true, "explanation_detail": "✅そのとおり！ガソリンなど引火点が低い油の蒸気が部屋に溜まると爆発するため、排出設備が必須です。" },
      { "order_index": 5, "choice_text": "屋根は不燃材料で造り、火災時の熱を防ぐために内部に天井を設けなければならない。", "is_correct": false, "explanation_detail": "△惜しい！爆発時の圧力を上に逃がすため、逆に「天井は設けてはならない」のがルールなんです。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L05",
    "difficulty": 3,
    "question_text": "屋外タンク貯蔵所の構造や防油堤に関する基準として、正しいものはどれか。",
    "hint_text": "💡ここがポイント：屋外タンクの周囲にあるブロック塀のような「防油堤」は、油が漏れた時に乗り越えられないよう「高さ0.5m以上」必要です。",
    "pitfall_text": "🐾よくある落とし穴：防油堤の容量は、タンクの中身が全部漏れても溢れないように「110%以上」必要です。100%ギリギリだと危険なんです。",
    "choices": [
      { "order_index": 1, "choice_text": "防油堤の容量は、タンク容量の80%以上確保すればよい。", "is_correct": false, "explanation_detail": "×80%では漏れた時に溢れてしまいます。「110%以上」が正解です。" },
      { "order_index": 2, "choice_text": "防油堤の高さは0.5m以上としなければならない。", "is_correct": true, "explanation_detail": "✅そのとおり！0.5m（50cm）以上の高さにすることで、漏れた油の勢いで乗り越えられるのを防ぎます。" },
      { "order_index": 3, "choice_text": "タンクの内側には、サビを防ぐための塗装をしなければならない。", "is_correct": false, "explanation_detail": "△惜しい！サビ止め塗装が必要なのは、雨風に晒される「外側」です。" },
      { "order_index": 4, "choice_text": "タンク本体は、厚さ1.2mm以上の鋼板で造らなければならない。", "is_correct": false, "explanation_detail": "×1.2mmでは薄すぎます。正しくは「3.2mm以上」の鋼板です。" },
      { "order_index": 5, "choice_text": "圧力タンクには通気管を設けなければならない。", "is_correct": false, "explanation_detail": "×逆です。圧力タンクには「安全装置」を、それ以外のタンクに「通気管」を設けます。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L06",
    "difficulty": 3,
    "question_text": "第1種販売取扱所の技術上の基準について、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：「絶対に窓を設けてはならない」のような極端な全否定は、誤り（ひっかけ）であることが多いです。",
    "pitfall_text": "🐾よくある落とし穴：窓を作ってはいけないわけではなく、網入ガラスなどの「防火設備」にすればOKです。",
    "choices": [
      { "order_index": 1, "choice_text": "危険物を配合する室の床面積は、6m²以上10m²以下としなければならない。", "is_correct": false, "explanation_detail": "○正しい。この数字は試験で超頻出の必須暗記項目です。" },
      { "order_index": 2, "choice_text": "第1種販売取扱所の用に供する部分には、窓を設けてはならない。", "is_correct": true, "explanation_detail": "✅誤り。網入ガラスなどの防火設備にすれば窓の設置は可能です。" },
      { "order_index": 3, "choice_text": "建築物の1階に設置しなければならない。", "is_correct": false, "explanation_detail": "○正しい。避難や消火がしやすい「1階」に設置する義務があります。" },
      { "order_index": 4, "choice_text": "危険物を配合する室には、蒸気を屋根上に排出する設備を設けなければならない。", "is_correct": false, "explanation_detail": "○正しい。蒸気が溜まると引火・爆発の危険があるため排出設備が必須です。" },
      { "order_index": 5, "choice_text": "標識及び掲示板を見やすい箇所に設けなければならない。", "is_correct": false, "explanation_detail": "○正しい。標識・掲示板の設置はすべての危険物施設における基本ルールです。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L07",
    "difficulty": 3,
    "question_text": "消火設備の分類において、「第3種消火設備」に該当するものは次のうちどれか。",
    "hint_text": "💡ここがポイント：消火設備は「扇子（せんす）セット大小」で覚えましょう！栓(1種)=消火栓、す(2種)=スプリンクラー、セット(3種)=固定設備、大(4種)=大型消火器、小(5種)=小型消火器・バケツなどです。",
    "pitfall_text": "🐾よくある落とし穴：「二酸化炭素＝ガスだから第3種かな？」と思いがちですが、手で持ち運べる「消火器」になった時点で第4種か第5種に格下げされます。",
    "choices": [
      { "order_index": 1, "choice_text": "固定式のハロゲン化物消火設備", "is_correct": true, "explanation_detail": "✅そのとおり！ハロゲンや粉末、CO2などの「固定式のガス・粉末設備」が第3種に分類されます。" },
      { "order_index": 2, "choice_text": "二酸化炭素を放射する持ち運び式の消火器", "is_correct": false, "explanation_detail": "×消火器は、大型なら第4種、小型なら第5種になります。" },
      { "order_index": 3, "choice_text": "消防ホースを使用する屋内消火栓設備", "is_correct": false, "explanation_detail": "×消火栓設備は水を使う最も強力な設備なので【第1種】です。" },
      { "order_index": 4, "choice_text": "消火用の水を入れた水バケツや水槽", "is_correct": false, "explanation_detail": "×水バケツや乾燥砂は最も簡易的な【第5種】です。" },
      { "order_index": 5, "choice_text": "天井から水を撒くスプリンクラー設備", "is_correct": false, "explanation_detail": "×スプリンクラー設備は【第2種】に該当します。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L07",
    "difficulty": 2,
    "question_text": "一定規模以上の製造所等に設置が義務付けられている「警報設備（5種類）」に該当するものはどれか。",
    "hint_text": "💡ここがポイント：警報設備は「火事だ！」と周囲や消防に知らせるためのものです。マイクとスピーカーで知らせる「拡声装置」はこれに含まれます。",
    "pitfall_text": "🐾よくある落とし穴：単なる「内線電話」や、車に積んである「発煙筒」などは、法定の警報設備にはカウントされません。",
    "choices": [
      { "order_index": 1, "choice_text": "拡声装置", "is_correct": true, "explanation_detail": "✅そのとおり！自動火災報知設備、消防機関に報知できる電話、非常ベル、拡声装置、警鐘の5つが法定の警報設備です。" },
      { "order_index": 2, "choice_text": "赤色回転灯", "is_correct": false, "explanation_detail": "×パトランプのようなものは法定の警報設備ではありません。" },
      { "order_index": 3, "choice_text": "内線電話", "is_correct": false, "explanation_detail": "△惜しい！ただの内線ではなく「消防機関に報知できる電話」である必要があります。" },
      { "order_index": 4, "choice_text": "携帯用サイレン", "is_correct": false, "explanation_detail": "×サイレンではなく「非常ベル装置」が規定されています。" },
      { "order_index": 5, "choice_text": "発煙筒", "is_correct": false, "explanation_detail": "×車に積むものであり、施設の設備ではありません。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L08",
    "difficulty": 2,
    "question_text": "次の文の[　　]内に当てはまる温度として、正しいものはどれか。\n「移動貯蔵タンク（タンクローリー）に、引火点が[　　]未満の危険物を注入する場合には、静電気等による引火を防ぐため、車両の原動機（エンジン）を停止しなければならない。」",
    "hint_text": "💡考え方のヒント：ガソリンなどのように「常温でも引火しやすい危ない油」を積み下ろしする時は、エンジンの火花が飛ぶと大爆発するのでエンジンを切るルールです。",
    "pitfall_text": "🐾よくある落とし穴：第2石油類の境界線「21℃」と迷いやすいですが、少し余裕を持たせた「40℃」が正解の基準ラインです。",
    "choices": [
      { "order_index": 1, "choice_text": "21℃", "is_correct": false, "explanation_detail": "△惜しい！第1石油類の定義温度ですが、このルールの基準はもう少し高い温度です。" },
      { "order_index": 2, "choice_text": "30℃", "is_correct": false, "explanation_detail": "×基準温度とは異なります。" },
      { "order_index": 3, "choice_text": "40℃", "is_correct": true, "explanation_detail": "✅そのとおり！引火点「40℃未満」の油を扱う時は、必ずエンジンを切る義務があります。" },
      { "order_index": 4, "choice_text": "70℃", "is_correct": false, "explanation_detail": "×これは第3石油類の定義温度であり、今回の基準とは異なります。" },
      { "order_index": 5, "choice_text": "100℃", "is_correct": false, "explanation_detail": "×基準温度とは異なります。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 3,
    "question_text": "市町村長等から出される「使用停止命令」に該当しないものはどれか。",
    "hint_text": "💡ここがポイント：ペナルティが「施設」に行くか「個人」に行くかを切り分けるのがコツです。",
    "pitfall_text": "🐾よくある落とし穴：免状の返納は「人への罰」です。別の有資格者を連れてくれば施設はそのまま使えます。",
    "choices": [
      { "order_index": 1, "choice_text": "完成検査済証の交付前に使用した", "is_correct": false, "explanation_detail": "×該当する。検査前のフライング使用は施設への重大な違反です。" },
      { "order_index": 2, "choice_text": "定期点検を実施していない", "is_correct": false, "explanation_detail": "×該当する。点検義務違反は施設の使用停止対象です。" },
      { "order_index": 3, "choice_text": "危険物取扱者が免状の返納命令を受けた", "is_correct": true, "explanation_detail": "✅正解（該当しない）。返納命令は「人」への処分であり、施設自体が停止されるわけではありません。" },
      { "order_index": 4, "choice_text": "位置・構造・設備を無許可で変更した", "is_correct": false, "explanation_detail": "×該当する。無許可での改造は重大なルール違反です。" },
      { "order_index": 5, "choice_text": "保安監督者に監督させていない", "is_correct": false, "explanation_detail": "×該当する。名前だけ借りて業務をさせない状態はNGです。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 3,
    "question_text": "施設の位置や構造は一切変更せず、貯蔵する危険物の「品名」や「数量（指定数量の倍数）」だけを変更する場合の手続きとして、正しいものはどれか。",
    "hint_text": "💡ここがポイント：中身（油の種類や量）を変えるときは、「変更する日の10日前まで」に「市町村長等」へ届け出るルールです。",
    "pitfall_text": "🐾よくある落とし穴：実務では消防署の窓口に出しますが、法律上の宛先は「消防長」ではなく「市町村長等」になるのが引っかけの鉄板です。",
    "choices": [
      { "order_index": 1, "choice_text": "変更しようとする日の10日前までに、消防長または消防署長に届け出る。", "is_correct": false, "explanation_detail": "△惜しい！「10日前」は合っていますが、提出先が「市町村長等」でなければなりません。" },
      { "order_index": 2, "choice_text": "変更しようとする日の7日前までに、市町村長等に届け出る。", "is_correct": false, "explanation_detail": "×「7日前」ではありません。10日前です。" },
      { "order_index": 3, "choice_text": "変更した日から遅滞なく（速やかに）、市町村長等に届け出る。", "is_correct": false, "explanation_detail": "×事後報告ではダメです。危険物が変わるので事前審査が必要です。" },
      { "order_index": 4, "choice_text": "変更しようとする日の10日前までに、市町村長等に届け出る。", "is_correct": true, "explanation_detail": "✅そのとおり！「10日前まで」に「市町村長等」への事前届出が正解です。" },
      { "order_index": 5, "choice_text": "事前に都道府県知事の「変更許可」を受けなければならない。", "is_correct": false, "explanation_detail": "×建物をいじるわけではないので「許可」までは不要で、「届出」で足ります。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L10",
    "difficulty": 3,
    "question_text": "危険物保安監督者の選任に関する記述として、法令上誤っているものはどれか。",
    "hint_text": "💡ここがポイント：保安監督者になれるのは「甲種」か「乙種」の免状を持っていて、実務経験が6ヶ月以上ある人だけです。丙種は絶対になれません。",
    "pitfall_text": "🐾よくある落とし穴：「実務経験6ヶ月」という数字が合っているので騙されやすいですが、丙種ではダメなんです。",
    "choices": [
      { "order_index": 1, "choice_text": "選任または解任した際は、遅滞なく市町村長等に届け出なければならない。", "is_correct": false, "explanation_detail": "○正しい記述です。辞めた時（解任）も届出が必要です。" },
      { "order_index": 2, "choice_text": "6ヶ月以上の実務経験を持つ「丙種危険物取扱者」を保安監督者に選任した。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！丙種危険物取扱者は、どんなに経験を積んでも保安監督者にはなれません。" },
      { "order_index": 3, "choice_text": "タンクローリー（移動タンク貯蔵所）には、危険物保安監督者を選任しなくてもよい。", "is_correct": false, "explanation_detail": "○正しい記述です。トラックにずっと監督者が乗っているわけにはいかないからです。" },
      { "order_index": 4, "choice_text": "保安監督者は、施設を所有・管理・占有している者が選任する。", "is_correct": false, "explanation_detail": "○正しい記述です。" },
      { "order_index": 5, "choice_text": "必要な指示を与えなかった場合など、市町村長等から解任を命じられることがある。", "is_correct": false, "explanation_detail": "○正しい記述です。仕事をしていないと解任命令が出ます。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L11",
    "difficulty": 3,
    "question_text": "危険物の取扱作業の保安に関する講習（保安講習）について、正しい記述はどれか。",
    "hint_text": "💡ここがポイント：保安講習は「危険物の取扱作業に【従事している】人」が、「3年以内ごと」に受ける義務がある講習です。",
    "pitfall_text": "🐾よくある落とし穴：運転免許の更新みたいに「免状の種類（甲乙丙）」で期間が変わると思いがちですが、全員一律で「3年」です。",
    "choices": [
      { "order_index": 1, "choice_text": "危険物保安監督者に選任されている者は、ベテランであるため講習を受講する義務が免除される。", "is_correct": false, "explanation_detail": "×保安監督者もガッツリ作業に従事しているので、当然受講義務があります。" },
      { "order_index": 2, "choice_text": "免状を持っている者は、現在危険物の業務に就いていなくても、全員が定期的に受講しなければならない。", "is_correct": false, "explanation_detail": "×受講義務があるのは「現在、取扱作業に従事している人」だけです。" },
      { "order_index": 3, "choice_text": "受講義務があるのに講習を受けなかった場合、その場で直ちに免状が取り消される。", "is_correct": false, "explanation_detail": "×直ちにではありません。「免状返納命令」の対象にはなりますが、即一発アウトというわけではありません。" },
      { "order_index": 4, "choice_text": "甲種取扱者は5年に1回、乙種および丙種取扱者は3年に1回受講することが定められている。", "is_correct": false, "explanation_detail": "×免状の種類に関係なく、受講義務者は全員「3年以内ごと」です。" },
      { "order_index": 5, "choice_text": "免状の交付を受けた都道府県とは別の都道府県で開催されている講習を受講しても有効である。", "is_correct": true, "explanation_detail": "✅そのとおり！保安講習は全国どこで受けてもOKという親切なシステムになっています。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L12",
    "difficulty": 3,
    "question_text": "製造所等における危険物の貯蔵及び取扱いの技術上の基準について、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：修理をするときは、立会いの有無よりも前に「危険物を完全に抜いて安全にする」のが大前提です。",
    "pitfall_text": "🐾よくある落とし穴：「保安監督者の立会い」というそれっぽい言葉に騙されないように。まずは油を抜くのが常識です。",
    "choices": [
      { "order_index": 1, "choice_text": "可燃性蒸気が滞留するおそれのある場所では、火花を発する工具等を使用してはならない。", "is_correct": false, "explanation_detail": "○正しい。火花による引火を防ぐための当然の措置です。" },
      { "order_index": 2, "choice_text": "危険物を貯蔵する建築物は、危険物の性質に応じ、遮光又は換気を行わなければならない。", "is_correct": false, "explanation_detail": "○正しい。直射日光を避け、蒸気を逃がすための遮光・換気は基本です。" },
      { "order_index": 3, "choice_text": "危険物が残存している容器等を修理する場合は、必ず危険物保安監督者の立会いのもとに行わなければならない。", "is_correct": true, "explanation_detail": "✅誤り。修理は危険物を「完全に除去した後」に行います。立会いは必須ではありません。" },
      { "order_index": 4, "choice_text": "危険物は、温度計や湿度計等を監視して、適正な温度又は湿度を保つように取り扱わなければならない。", "is_correct": false, "explanation_detail": "○正しい。計器による適切な温度・湿度管理は法令上の義務です。" },
      { "order_index": 5, "choice_text": "危険物が漏れ、あふれ又は飛散しないように必要な措置を講じなければならない。", "is_correct": false, "explanation_detail": "○正しい。漏えいや飛散の防止は、貯蔵・取扱いの大原則です。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "法令",
    "subcategory": "L12",
    "difficulty": 3,
    "question_text": "車両で危険物を運搬する際、容器の外部に表示すべき「注意事項」の組み合わせとして、正しいものはどれか。",
    "hint_text": "💡ここがポイント：第2類（可燃性固体）の中の「引火性固体」と、第4類（引火性液体）は、どちらも引火しやすいので「火気厳禁」のラベルを貼ります。",
    "pitfall_text": "🐾よくある落とし穴：第3類は「自然発火性」と「禁水性」の2つの顔を持っているので、注意事項も複数あるんです。",
    "choices": [
      { "order_index": 1, "choice_text": "第2類（引火性固体） ── 「火気厳禁」", "is_correct": true, "explanation_detail": "✅そのとおり！引火性固体は第4類と同じく、火を近づけるのが絶対NGなので「火気厳禁」になります。" },
      { "order_index": 2, "choice_text": "第3類（自然発火性物質） ── 「火気厳禁」のみ", "is_correct": false, "explanation_detail": "×「空気接触厳禁」なども併せて表示する必要があります。" },
      { "order_index": 3, "choice_text": "第4類（引火性液体） ── 「可燃物接触注意」", "is_correct": false, "explanation_detail": "×ガソリンなどには「火気厳禁」を表示します。" },
      { "order_index": 4, "choice_text": "第5類（自己反応性物質） ── 「注水注意」", "is_correct": false, "explanation_detail": "×第5類は「火気厳禁」と「衝撃注意」のラベルを貼ります。" },
      { "order_index": 5, "choice_text": "第6類（酸化性液体） ── 「禁水」", "is_correct": false, "explanation_detail": "×第6類は他の物を燃やす性質なので「可燃物接触注意」になります。" }
    ]
  },



  // ↑↑↑ ここまで ↑↑↑
  // ★重要：次のデータに続くので、すぐ上の最後の } の後ろにカンマ「,」を必ず付けてください！


  // =========================================================
  // 🔵 第1回：物理・化学 ＆ 性質・消火（10問）
  // =========================================================
  // ↓↓↓ ここから下にコピペ ↓↓↓

  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P02",
    "difficulty": 3,
    "question_text": "「水」の一般的な物理的・化学的性質に関する記述として、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：水は他の物質と違って、「4℃」のときに一番重く（密度が最大に）なるという不思議な性質を持っています。だから冬の湖でも、底の方は4℃の水が溜まっていて魚が生きられるんです。",
    "pitfall_text": "🐾よくある落とし穴：「氷になる直前の0℃が一番重いんじゃないの？」と思いがちですよね。実は0℃になると氷の結晶を作り始めて少し膨らむ（軽くなる）んです。",
    "choices": [
      { "order_index": 1, "choice_text": "水分子（H₂O）の分子量は、およそ18である。", "is_correct": false, "explanation_detail": "○正しい記述です。水素(1)×2＋酸素(16)＝18です。" },
      { "order_index": 2, "choice_text": "水の気化熱（蒸発熱）は非常に大きいため、消火の際の冷却効果に優れている。", "is_correct": false, "explanation_detail": "○正しい記述です。水が火事の熱を奪って蒸発してくれます。" },
      { "order_index": 3, "choice_text": "水に食塩などの不揮発性の物質を溶かすと、純粋な水よりも沸点が高くなる。", "is_correct": false, "explanation_detail": "○正しい記述です。これを「沸点上昇」と呼びます。" },
      { "order_index": 4, "choice_text": "水の密度は温度が下がるにつれて大きくなり、0℃のときに最大となる。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！水の密度が最大（一番重くなる）のは「約4℃」のときです。" },
      { "order_index": 5, "choice_text": "山の上など、周囲の気圧が低い場所では、水は100℃より低い温度で沸騰する。", "is_correct": false, "explanation_detail": "○正しい記述です。圧力が下がると沸点も下がります。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "燃焼・消火",
    "subcategory": "F02",
    "difficulty": 3,
    "question_text": "粉じん爆発の特徴や条件に関する記述のうち、不適切なものはどれか。",
    "hint_text": "💡考え方のヒント：粉じん爆発は、小麦粉やアルミ粉などが空中に舞い上がって爆発する現象です。ガス爆発と同じように「燃えやすい濃度の範囲（燃焼範囲）」が存在します。",
    "pitfall_text": "🐾よくある落とし穴：「ホコリが浮いていればいつでも爆発する」と思いがちですが、濃すぎても薄すぎても爆発しません。適度な濃度が必要です。",
    "choices": [
      { "order_index": 1, "choice_text": "粉じんが空気中に浮遊していれば、その濃度がどれほど薄くても（または濃くても）常に爆発の危険性がある。", "is_correct": true, "explanation_detail": "✅ここが誤りです！粉じん爆発にもガスと同じように「爆発可能な濃度の範囲（上限と下限）」があります。" },
      { "order_index": 2, "choice_text": "一度爆発が起きると、その爆風で床の粉じんが舞い上がり、さらに大規模な二次爆発を引き起こすことがある。", "is_correct": false, "explanation_detail": "○正しい記述です。これが粉じん爆発が甚大な被害をもたらす理由です。" },
      { "order_index": 3, "choice_text": "一般に、ガス爆発と比べて着火させるために大きなエネルギー（火種）を必要とするため、着火自体はしにくい。", "is_correct": false, "explanation_detail": "○正しい記述です。ガスよりは火がつきにくいですが、一度つくと大爆発します。" },
      { "order_index": 4, "choice_text": "有機物の粉じん爆発では、酸素が足りずに不完全燃焼を起こし、大量の一酸化炭素が発生する危険がある。", "is_correct": false, "explanation_detail": "○正しい記述です。一酸化炭素中毒の危険も伴います。" },
      { "order_index": 5, "choice_text": "粉じんの粒子が大きい（粗い）ほど、空中に長く浮遊できないため爆発は起こりにくくなる。", "is_correct": false, "explanation_detail": "○正しい記述です。細かいパウダー状であるほど危険です。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P04",
    "difficulty": 2,
    "question_text": "静電気の発生や蓄積（帯電）に関する記述として、事実に反するものはどれか。",
    "hint_text": "💡ここがポイント：静電気は「火花」を散らして火事の原因（点火源）にはなりますが、物質そのものを化学的に分解するような魔法の力はありません。",
    "pitfall_text": "🐾よくある落とし穴：「電気＝電気分解」と連想しがちですよね。でも、静電気のパチッとしたショックで液体の成分が変わることはないんです。",
    "choices": [
      { "order_index": 1, "choice_text": "湿度が低く空気が乾燥している環境ほど、電気が逃げにくいため帯電しやすい。", "is_correct": false, "explanation_detail": "○正しい記述です。冬の乾燥した日に静電気が多い理由です。" },
      { "order_index": 2, "choice_text": "ガソリンなどの引火性液体に静電気が蓄積すると、電気分解が起こって可燃性ガスが発生する。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！静電気が蓄積しても、液体が電気分解されることはありません。" },
      { "order_index": 3, "choice_text": "電気を通しにくい「不導体（絶縁体）」の物質ほど、静電気が逃げずに蓄積しやすい。", "is_correct": false, "explanation_detail": "○正しい記述です。第4類危険物の多くは電気を通さないため、静電気が溜まりやすいんです。" },
      { "order_index": 4, "choice_text": "ナイロンやポリエステルなどの合成繊維の衣類は、木綿の衣類と比べて帯電しやすい。", "is_correct": false, "explanation_detail": "○正しい記述です。フリースなどを脱ぐ時にパチパチ鳴るのはこのためです。" },
      { "order_index": 5, "choice_text": "帯電を防ぐための最も基本的で有効な対策は、設備を接地（アース）して電気を大地に逃がすことである。", "is_correct": false, "explanation_detail": "○正しい記述です。ガソリンスタンドの給油機などにアース線が繋がれています。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P05",
    "difficulty": 3,
    "question_text": "物質の分類（単体・化合物・混合物）の組み合わせとして、正しいものはどれか。",
    "hint_text": "💡ここがポイント：単体＝1つの元素（鉄や酸素）、化合物＝複数くっついたもの（水など）、混合物＝色々混ざったもの（油全般）です。",
    "pitfall_text": "🐾よくある落とし穴：ガソリンや重油などの「〜油」は、色々な成分が混ざっているので、すべて「混合物」になります。ここが一番の狙い目です。",
    "choices": [
      { "order_index": 1, "choice_text": "硫黄(化合物)・水(単体)・灯油(混合物)", "is_correct": false, "explanation_detail": "×硫黄(S)は「単体」、水(H₂O)は「化合物」です。" },
      { "order_index": 2, "choice_text": "酸素(単体)・メタン(混合物)・プロパン(化合物)", "is_correct": false, "explanation_detail": "×メタン(CH₄)は純粋な「化合物」です。" },
      { "order_index": 3, "choice_text": "鉄(単体)・塩化ナトリウム(化合物)・ガソリン(混合物)", "is_correct": true, "explanation_detail": "✅そのとおり！鉄(Fe)は単体、塩化ナトリウム(食塩)は化合物、ガソリンは色々な油の「混合物」で完璧な組み合わせです。" },
      { "order_index": 4, "choice_text": "水素(単体)・エタノール(化合物)・アルミニウム(混合物)", "is_correct": false, "explanation_detail": "×アルミニウム(Al)は「単体」です。" },
      { "order_index": 5, "choice_text": "ガソリン(単体)・二酸化炭素(化合物)・軽油(混合物)", "is_correct": false, "explanation_detail": "×ガソリンは「混合物」です。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "燃焼・消火",
    "subcategory": "F04",
    "difficulty": 3,
    "question_text": "動植物油類（アマニ油やヤシ油など）の「自然発火」のメカニズムに関する記述として、最も適切なものはどれか。",
    "hint_text": "💡考え方のヒント：天ぷらを揚げた後の天かすや、油を拭いた布を放置すると、油が空気中の酸素と結びつく「酸化熱」が溜まって発火します。ヨウ素価が大きい（乾きやすい）油ほど危険です。",
    "pitfall_text": "🐾よくある落とし穴：ヨウ素価が「小さい」方が危険な気がしてしまいますが、実はヨウ素価が「大きい（130以上）」油のことを乾性油と呼び、これが一番自然発火しやすいんです。",
    "choices": [
      { "order_index": 1, "choice_text": "油が空気中の水分と反応して加水分解を起こし、その際に発生する熱が蓄積することで自然発火に至る。", "is_correct": false, "explanation_detail": "×水分との反応ではなく、空気中の「酸素」との反応（酸化）が原因です。" },
      { "order_index": 2, "choice_text": "油が空気中で「酸化」され、その酸化熱が蓄積して発火点に達すると起こる。ヨウ素価が「大きい」乾性油ほど起こりやすい。", "is_correct": true, "explanation_detail": "✅そのとおり！酸化熱の蓄積が原因であり、乾きやすい（ヨウ素価が大きい）アマニ油などで特に起こりやすい現象です。" },
      { "order_index": 3, "choice_text": "油が空気中で「還元」され、その還元熱が蓄積して発火点に達すると起こる。ヨウ素価が「小さい」不乾性油ほど起こりやすい。", "is_correct": false, "explanation_detail": "×還元ではなく「酸化」であり、ヨウ素価は「大きい」ほど危険です。" },
      { "order_index": 4, "choice_text": "油が周囲から熱を吸収する吸熱反応によって温度が上がり、ヨウ素価に関係なく一定の温度で自然発火する。", "is_correct": false, "explanation_detail": "×吸熱（熱を奪う）では温度は上がりません。熱を出す「発熱反応」です。" },
      { "order_index": 5, "choice_text": "油が空気中で「酸化」されて発熱するが、自然発火のしやすさはヨウ素価が「小さい」油ほど起こりやすい。", "is_correct": false, "explanation_detail": "△惜しい！前半は合っていますが、ヨウ素価は「大きい」ほうが自然発火しやすいんです。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P06",
    "difficulty": 3,
    "question_text": "基礎的な化学用語の説明として、適切でないものはどれか。",
    "hint_text": "💡ここがポイント：同素体は、スコップ（S硫黄・C炭素・O酸素・Pリン）の4つが有名です。これらは「同じ元素からできているのに、全く違う性質を持つ物質」のことです。",
    "pitfall_text": "🐾よくある落とし穴：「同」という漢字から「同じ性質」だと思いがちですよね。黒鉛（鉛筆の芯）とダイヤモンドのように、性質は「違う」のが正解です。",
    "choices": [
      { "order_index": 1, "choice_text": "酸化：物質が酸素と結びつく反応や、水素を失う反応のことである。", "is_correct": false, "explanation_detail": "○正しい説明です。" },
      { "order_index": 2, "choice_text": "単体：酸素や鉄のように、ただ1種類の元素だけでできている物質である。", "is_correct": false, "explanation_detail": "○正しい説明です。" },
      { "order_index": 3, "choice_text": "中和：酸性の水溶液と塩基性の水溶液が反応し、塩（えん）と水ができる反応である。", "is_correct": false, "explanation_detail": "○正しい説明です。" },
      { "order_index": 4, "choice_text": "化合物：水や二酸化炭素のように、2種類以上の元素が結びついてできた物質である。", "is_correct": false, "explanation_detail": "○正しい説明です。" },
      { "order_index": 5, "choice_text": "同素体：同じ種類の元素から構成されており、化学的・物理的性質も全く同じ物質のことである。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！同素体は、同じ元素でも結合の仕方が違うため「全く違う性質」を持つ物質になります。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P11",
    "difficulty": 4,
    "question_text": "地中に埋設された鉄製の配管を電気化学的な腐食（サビ）から守るため、配管に別の金属をつないで「身代わりとしてサビさせる」防食法（犠牲陽極法）がある。この身代わりとして適切な、鉄よりも「イオン化傾向の大きい金属」の組み合わせはどれか。",
    "hint_text": "💡ここがポイント：イオン化傾向（サビやすさ）は、「貸そう(K)か(Ca)な(Na)ま(Mg)あ(Al)あ(Zn)て(Fe)...」の順番です。「て(鉄)」よりも前に来る金属を選びます。",
    "pitfall_text": "🐾よくある落とし穴：銅(Cu)や銀(Ag)などの「高価な金属」はイオン化傾向が小さく、サビにくいんです。サビにくいものを身代わりにしても意味がないですよね。",
    "choices": [
      { "order_index": 1, "choice_text": "ニッケル と 銅", "is_correct": false, "explanation_detail": "×どちらも鉄よりイオン化傾向が小さいため、身代わりになりません。" },
      { "order_index": 2, "choice_text": "鉛 と 銀", "is_correct": false, "explanation_detail": "×どちらも鉄よりイオン化傾向が小さい（サビにくい）金属です。" },
      { "order_index": 3, "choice_text": "マグネシウム と 亜鉛", "is_correct": true, "explanation_detail": "✅大正解！マグネシウムと亜鉛は鉄よりもイオン化傾向が大きく、鉄の身代わりとなって優先的にサビてくれます。" },
      { "order_index": 4, "choice_text": "白金（プラチナ） と 金", "is_correct": false, "explanation_detail": "×最もサビにくい最強の金属コンビです。身代わりには全く適していません。" },
      { "order_index": 5, "choice_text": "亜鉛 と 銅", "is_correct": false, "explanation_detail": "△惜しい！亜鉛（Zn）は鉄より前なのでOKですが、銅（Cu）は鉄より後ろなのでNGです。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P09",
    "difficulty": 4,
    "question_text": "標準状態（0℃、1気圧）において、体積が「11.2L」の空気がある。この空気の質量として最も近いものはどれか。\n※空気は「窒素（N₂）」と「酸素（O₂）」が体積比【4：1】で混合した気体とし、原子量は N=14、O=16 とする。",
    "hint_text": "💡考え方のヒント：標準状態の気体は「22.4L で 1mol（基準の重さ）」になります。今回は 11.2L なので「0.5mol（半分の重さ）」になるのが計算のポイントです。",
    "pitfall_text": "🐾よくある落とし穴：N₂（28g）とO₂（32g）を 4：1 の割合で混ぜると「22.4L分の重さ（28.8g）」が出ます。ここで安心して答えを選んでしまう人が多いですが、今回は体積が半分（11.2L）なので、重さも半分にするのを忘れないでくださいね！",
    "choices": [
      { "order_index": 1, "choice_text": "7.2g", "is_correct": false, "explanation_detail": "×計算が合いません。" },
      { "order_index": 2, "choice_text": "14.4g", "is_correct": true, "explanation_detail": "✅大正解！\n① 窒素(28)×4/5 ＋ 酸素(32)×1/5 ＝ 28.8g（これが22.4Lの重さ）\n② 今回は11.2Lなので半分。28.8g ÷ 2 ＝ 14.4g となります。" },
      { "order_index": 3, "choice_text": "17.6g", "is_correct": false, "explanation_detail": "×計算が合いません。" },
      { "order_index": 4, "choice_text": "28.8g", "is_correct": false, "explanation_detail": "△惜しい！それは体積が「22.4L」だった場合の重さです。引っかかりましたね！" },
      { "order_index": 5, "choice_text": "32.0g", "is_correct": false, "explanation_detail": "×計算が合いません。純粋な酸素（O₂）1mol分の重さです。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "燃焼・消火",
    "subcategory": "F01",
    "difficulty": 4,
    "question_text": "可燃物が「より燃焼しやすくなる（着火しやすくなる）」条件として、事実に反する記述はどれか。",
    "hint_text": "💡ここがポイント：熱伝導率（熱の伝わりやすさ）が「小さい（熱を逃がしにくい）」物質ほど、熱がその場にこもって一気に温度が上がるため、火がつきやすくなります。",
    "pitfall_text": "🐾よくある落とし穴：「熱がよく伝わる＝燃えやすい」と逆のイメージを持ちやすいですが、鉄板（熱が伝わりやすい）より、木や紙（熱が伝わりにくい）の方が簡単に燃えますよね。",
    "choices": [
      { "order_index": 1, "choice_text": "物質が燃えるときに発生する「燃焼熱」が大きい物質ほど、燃焼が継続しやすくなる。", "is_correct": false, "explanation_detail": "○正しい記述です。熱が熱を生んでどんどん燃えます。" },
      { "order_index": 2, "choice_text": "固体の物質は、粉末状にして空気（酸素）との接触面積を大きくするほど燃焼しやすくなる。", "is_correct": false, "explanation_detail": "○正しい記述です。丸太よりおがくずの方が燃えやすいのと同じです。" },
      { "order_index": 3, "choice_text": "粉じん爆発において、着火に必要なエネルギーの大きさは、空気中の粉じんの濃度によって変化する。", "is_correct": false, "explanation_detail": "○正しい記述です。濃すぎても薄すぎても着火しにくくなります。" },
      { "order_index": 4, "choice_text": "固体の可燃物は、熱伝導率が「大きい」ものほど熱が全体に早く行き渡り、着火しやすくなる。", "is_correct": true, "explanation_detail": "✅ここが誤りです！熱伝導率が「小さい」ほど、熱が一点に集中して逃げないため、すぐに発火点に達して着火しやすくなるんです。" },
      { "order_index": 5, "choice_text": "可燃性ガスと酸素の混合気体は、圧力を高くするほど分子同士がぶつかりやすくなり、燃焼しやすくなる。", "is_correct": false, "explanation_detail": "○正しい記述です。圧力が高いと反応スピードが上がります。" }
    ]
  },
  {
    "exam_term": 1,
    "category": "物理・化学",
    "subcategory": "P02",
    "difficulty": 3,
    "question_text": "物質の「比重」や「密度」の一般的な性質について、適切でないものはどれか。",
    "hint_text": "💡考え方のヒント：二酸化炭素は空気より「重い」です。だからこそ、火事の時にドライアイスや消火器から出たCO2が火の根元（床）に溜まって消火できるんです。",
    "pitfall_text": "🐾よくある落とし穴：二酸化炭素＝気体＝ふわふわ浮く、というイメージに騙されがちです。空気より重いから足元に溜まると覚えておきましょう！",
    "choices": [
      { "order_index": 1, "choice_text": "ガソリンは水よりも比重が小さいため、水と混ざらずに水面に浮く。", "is_correct": false, "explanation_detail": "○正しい記述です。だからガソリン火災に水をかけると火の海が広がって危険なんです。" },
      { "order_index": 2, "choice_text": "エチルアルコールは水よりも比重が小さいが、水によく溶けるため分離して浮くことはない。", "is_correct": false, "explanation_detail": "○正しい記述です。お酒に水を入れても層には分かれませんよね。" },
      { "order_index": 3, "choice_text": "水の密度（比重）は温度によって変化し、約4℃のときに最大となる。", "is_correct": false, "explanation_detail": "○正しい記述です。0℃（氷になる直前）ではなく、4℃で一番重くなるのが水の不思議な特徴です。" },
      { "order_index": 4, "choice_text": "酸素ガスは、同じ体積の空気と比較するとわずかに重い。", "is_correct": false, "explanation_detail": "○正しい記述です。空気の平均分子量（約28.8）より、酸素（32）の方が少し重いです。" },
      { "order_index": 5, "choice_text": "二酸化炭素は空気よりも比重が小さいため、火災時には天井付近に滞留しやすい。", "is_correct": true, "explanation_detail": "✅ここが誤りです！二酸化炭素（分子量44）は空気より「重い」ため、床などの低い場所に溜まります。" }
    ]
  },



  // ↑↑↑ ここまで ↑↑↑
  // ★重要：すぐ上の最後の } の後ろにカンマ「,」を必ず付けてください！


  // =========================================================
  // 🟢 第2回：法令（15問）
  // =========================================================
  // ↓↓↓ ここから下にコピペ ↓↓↓

  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L02",
    "difficulty": 2,
    "question_text": "消防法の別表第1に危険物として掲げられていないものはどれか。",
    "hint_text": "💡ここがポイント：「危険物に気体ない」と覚えましょう！消防法の危険物は「固体」と「液体」だけで、プロパンなどのガス（気体）は対象外なんです。",
    "pitfall_text": "🐾よくある落とし穴：「燃える＝危険物」ではありません。プロパンは気体なので引っかけです。",
    "choices": [
      { "order_index": 1, "choice_text": "プロパン", "is_correct": true, "explanation_detail": "✅正解（対象外）。ガスボンベでおなじみですが、気体は消防法上の危険物ではありません。" },
      { "order_index": 2, "choice_text": "硫黄", "is_correct": false, "explanation_detail": "×第2類（可燃性固体）。黄色い粉、火山や温泉のイメージです。" },
      { "order_index": 3, "choice_text": "過酸化水素", "is_correct": false, "explanation_detail": "×第6類（酸化性液体）。自身は燃えませんが、他を燃やす性質があります。" },
      { "order_index": 4, "choice_text": "ナトリウム", "is_correct": false, "explanation_detail": "×第3類（禁水性）。水と激しく反応して発火する固体です。" },
      { "order_index": 5, "choice_text": "黄りん", "is_correct": false, "explanation_detail": "×第3類（自然発火性）。空気に触れると燃え出すため、水中に保存する固体です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L01",
    "difficulty": 3,
    "question_text": "ある事業所で以下の危険物を同じ倉庫内に貯蔵している。この場合、指定数量の倍数の合計として正しい数値はどれか。\n・ガソリン：600L\n・灯油：1,500L\n",
    "hint_text": "💡ここがポイント：指定数量は「兄さん(200)」「十二回(1000)」の語呂で覚えましょう！ガソリン(第1石油類)は200L、灯油(第2石油類)は1,000Lです。それぞれ割り算をしてから足し合わせます。",
    "pitfall_text": "🐾よくある落とし穴：灯油の指定数量をガソリンと同じ「200L」だと思い込んで計算してしまうミスがとても多いです。",
    "choices": [
      { "order_index": 1, "choice_text": "3.5倍", "is_correct": false, "explanation_detail": "×計算が合いません。それぞれの指定数量を確認しましょう。" },
      { "order_index": 2, "choice_text": "4.0倍", "is_correct": false, "explanation_detail": "×計算が合いません。" },
      { "order_index": 3, "choice_text": "4.5倍", "is_correct": true, "explanation_detail": "✅そのとおり！ガソリン（600÷200=3倍）＋灯油（1500÷1000=1.5倍）＝合計4.5倍になります。" },
      { "order_index": 4, "choice_text": "5.0倍", "is_correct": false, "explanation_detail": "△惜しい！灯油の計算などを少し勘違いしているかもしれません。" },
      { "order_index": 5, "choice_text": "6.0倍", "is_correct": false, "explanation_detail": "×計算が合いません。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L02",
    "difficulty": 3,
    "question_text": "危険物の分類や性質に関する記述として、事実に反するものはどれか。",
    "hint_text": "💡ここがポイント：第4類（引火性液体）の分類は、「引火点が何℃か」で厳密に分けられています。アルコール類だけは「炭素数1〜3の成分」で決まります。",
    "pitfall_text": "🐾よくある落とし穴：「アルコール類＝引火点70℃〜200℃」という引っかけが超頻出です！その温度枠は「第3石油類（重油など）」のことですよ。",
    "choices": [
      { "order_index": 1, "choice_text": "ガソリンは引火点が-40℃以下であり、第1石油類に分類される。", "is_correct": false, "explanation_detail": "○正しい記述です。ガソリンは第1石油類の代表選手です。" },
      { "order_index": 2, "choice_text": "アルキルアルミニウムは、空気に触れても水に触れても発火するため、第3類危険物に分類される。", "is_correct": false, "explanation_detail": "○正しい記述です。自然発火性かつ禁水性の極めて危険な物質です。" },
      { "order_index": 3, "choice_text": "消防法におけるアルコール類とは、1気圧において引火点が70℃以上200℃未満の液体を指す。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！アルコール類は引火点ではなく「炭素数1〜3の飽和1価アルコール」という成分で定義されています。" },
      { "order_index": 4, "choice_text": "クレオソート油は、第3石油類に該当する。", "is_correct": false, "explanation_detail": "○正しい記述です。防腐剤などに使われる油です。" },
      { "order_index": 5, "choice_text": "二硫化炭素は特殊引火物であり、非常に低い温度で引火する。", "is_correct": false, "explanation_detail": "○正しい記述です。特殊引火物の中で最も出題されやすい物質です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L03",
    "difficulty": 3,
    "question_text": "周囲の建物を火災から守るための「保有空地」を確保しなければならない製造所等の組み合わせとして、正しいものはどれか。\n",
    "hint_text": "💡考え方のヒント：保有空地が「不要」な施設は『移動と同じ半球（はんきゅう）』で覚えましょう！移動(移動タンク)、同(屋内タンク)、じ(地下タンク)、半(販売取扱所)、球(給油取扱所)は空地ゼロでOKです。",
    "pitfall_text": "🐾よくある落とし穴：簡易タンク貯蔵所は名前が「簡易」なので空地がいらなそうですが、実は屋外に置く場合は「1m以上」の保有空地が必要なんです！",
    "choices": [
      { "order_index": 1, "choice_text": "製造所、地下タンク貯蔵所、屋外タンク貯蔵所", "is_correct": false, "explanation_detail": "×地下タンク貯蔵所は地面の中にあるため、保有空地は不要です。" },
      { "order_index": 2, "choice_text": "屋内タンク貯蔵所、屋内貯蔵所、一般取扱所", "is_correct": false, "explanation_detail": "×屋内タンク貯蔵所は専用の部屋に守られているため、保有空地は不要です。" },
      { "order_index": 3, "choice_text": "製造所、屋内貯蔵所、屋外貯蔵所", "is_correct": true, "explanation_detail": "✅そのとおり！この3つはすべて周囲に延焼を防ぐための保有空地が必要な施設です。" },
      { "order_index": 4, "choice_text": "給油取扱所、販売取扱所、移動タンク貯蔵所", "is_correct": false, "explanation_detail": "×この3つはすべて、保有空地が「不要」な施設の組み合わせです。" },
      { "order_index": 5, "choice_text": "簡易タンク貯蔵所、地下タンク貯蔵所、第1種販売取扱所", "is_correct": false, "explanation_detail": "×地下タンクと販売取扱所は不要ですが、簡易タンク貯蔵所は保有空地が必要です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L04",
    "difficulty": 3,
    "question_text": "危険物を扱う「製造所等の区分」に関する説明として、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：販売取扱所（ホームセンターなど）の「第1種」と「第2種」は、扱っている危険物の『量（指定数量の倍数）』でクラス分けされています。",
    "pitfall_text": "🐾よくある落とし穴：「第1種はガソリン、第2種は灯油」のように、扱う『品名（種類）』で分かれているという引っかけが超定番です。",
    "choices": [
      { "order_index": 1, "choice_text": "ガソリンスタンドは、自動車等の燃料タンクに直接給油する「給油取扱所」に該当する。", "is_correct": false, "explanation_detail": "○正しい記述です。身近なガソリンスタンドの正式名称です。" },
      { "order_index": 2, "choice_text": "第1種販売取扱所と第2種販売取扱所は、取り扱う危険物の「類（第1類〜第6類）」によって区別されている。", "is_correct": true, "explanation_detail": "✅ここが誤りです！類（種類）ではなく、扱う「指定数量の倍数（15倍以下か、15倍超か）」で区別されます。" },
      { "order_index": 3, "choice_text": "地下タンク貯蔵所とは、地盤面下に埋設されたタンクにおいて危険物を貯蔵する施設である。", "is_correct": false, "explanation_detail": "○正しい記述です。GSの地下にあるタンクもこれです。" },
      { "order_index": 4, "choice_text": "屋外貯蔵所では、第4類危険物のほかに、硫黄などの第2類危険物も貯蔵することができる。", "is_correct": false, "explanation_detail": "○正しい記述です。一部の危険物は屋外での野積みが認められています。" },
      { "order_index": 5, "choice_text": "移動タンク貯蔵所とは、車両に固定されたタンクで危険物を移送する施設（タンクローリー）のことである。", "is_correct": false, "explanation_detail": "○正しい記述です。トラック自体がひとつの「施設」として扱われます。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L05",
    "difficulty": 3,
    "question_text": "地下タンク貯蔵所の構造や設備の基準について、正しい記述はどれか。\n",
    "hint_text": "💡ここがポイント：地下タンクは土に埋まっているので、安全基準が独特です。「頂部は0.6m以上深く」「通気管は地上4m以上」という数字を押さえましょう。",
    "pitfall_text": "🐾よくある落とし穴：タンク室のフタは、上に車が乗っても潰れないように「鉄板」ではなく「厚さ0.3m以上の鉄筋コンクリート」にする必要があります。",
    "choices": [
      { "order_index": 1, "choice_text": "火災時の延焼を防ぐため、周囲に一定の保有空地を確保しなければならない。", "is_correct": false, "explanation_detail": "×土の中にあるため延焼の恐れがなく、保有空地も保安距離も「不要」です。" },
      { "order_index": 2, "choice_text": "タンクの最も高い部分（頂部）は、地盤面から0.8m以上深い位置に埋めなければならない。", "is_correct": false, "explanation_detail": "×0.8mという数字が引っかけです。正しくは「0.6m（60cm）以上」深くします。" },
      { "order_index": 3, "choice_text": "タンク内の圧力を逃がす通気管の先端は、地上5m以上の高さに設置する。", "is_correct": false, "explanation_detail": "×5mではなく、正しくは「地上4m以上」の高さが必要です。" },
      { "order_index": 4, "choice_text": "タンクを収めるタンク室のふたは、厚さ0.3m以上の丈夫な鉄板で造らなければならない。", "is_correct": false, "explanation_detail": "△惜しい！鉄板では重さに耐えられないため、厚さ0.3m以上の「鉄筋コンクリート造」にします。" },
      { "order_index": 5, "choice_text": "タンクの周囲には、油の漏れを早期に発見するための漏洩検査管を4箇所以上設ける。", "is_correct": true, "explanation_detail": "✅そのとおり！実務でも、この管の中に専用の棒を差し込んで、油が漏れ出していないかを定期的にチェックします。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L07",
    "difficulty": 2,
    "question_text": "製造所等に設置する消火設備で、「第5種の消火設備」に該当するものはどれか。\n",
    "hint_text": "💡ここがポイント：消火設備は『扇子（せんす）セット大小』で覚えましょう！栓(1種)=消火栓、す(2種)=スプリンクラー、セット(3種)=固定設備、大(4種)=大型消火器、小(5種)=小型消火器・バケツなどです。",
    "pitfall_text": "🐾よくある落とし穴：第1種が「一番ショボい」と思いがちですが、逆です！第1種は消防ポンプなどの最強設備です。",
    "choices": [
      { "order_index": 1, "choice_text": "スプリンクラー設備", "is_correct": false, "explanation_detail": "×誤り。スプリンクラー等の固定式大型設備は【第2種】です。" },
      { "order_index": 2, "choice_text": "ハロゲン化物消火設備", "is_correct": false, "explanation_detail": "×誤り。ハロゲン等の固定設備は【第3種】です。" },
      { "order_index": 3, "choice_text": "泡を放射する小型の消火器", "is_correct": true, "explanation_detail": "✅正解。持ち運びできる「小型消火器」や乾燥砂などは最も簡易的な【第5種】です。" },
      { "order_index": 4, "choice_text": "屋内消火栓設備", "is_correct": false, "explanation_detail": "×誤り。消防ポンプを使う強力な設備は【第1種】です。" },
      { "order_index": 5, "choice_text": "泡を放射する大型の消火器", "is_correct": false, "explanation_detail": "×誤り。車輪がついていて引っ張るサイズの大型消火器は【第4種】です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 4,
    "question_text": "製造所等の「仮使用」について、正しいものはどれか。",
    "hint_text": "💡ここがポイント：仮使用とは「工事していない安全な部分」を「承認をもらって」「完成前に」使うための特例です。",
    "pitfall_text": "🐾よくある落とし穴：工事が「終わった部分」は、検査に合格するまで絶対に使えません！",
    "choices": [
      { "order_index": 1, "choice_text": "譲渡前に市町村長の承認なく仮に使用すること", "is_correct": false, "explanation_detail": "×誤り。施設の譲渡（売買など）とは無関係の制度です。" },
      { "order_index": 2, "choice_text": "変更工事中、工事部分以外を承認を受けて使用すること", "is_correct": true, "explanation_detail": "✅正解。これが仮使用の正しい定義です。" },
      { "order_index": 3, "choice_text": "品名や数量を変更して承認前に仮に使用すること", "is_correct": false, "explanation_detail": "×誤り。品名や数量の変更はまた別の届出ルールになります。" },
      { "order_index": 4, "choice_text": "変更工事が終わった部分を順次使用すること", "is_correct": false, "explanation_detail": "×誤り。工事した部分は、完成検査で安全が確認されるまで使用禁止です。" },
      { "order_index": 5, "choice_text": "工事部分以外を10日以内の期間だけ使用すること", "is_correct": false, "explanation_detail": "×誤り。「10日以内」という期間の制限は特にありません。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 4,
    "question_text": "液体の危険物を貯蔵するタンクを有する製造所等において、その位置や設備を変更する工事を行う場合の手続きとして、正しいものはどれか。",
    "hint_text": "💡ここがポイント：液体タンクの工事は非常に危険なので、「許可をもらう → 工程ごとに検査（完成検査前検査） → 全体の完成検査 → 使用開始」という厳しい順番を守ります。",
    "pitfall_text": "🐾よくある落とし穴：「完成検査だけでいいだろう」と思いがちですが、タンクの場合は土に埋めたりすると後から見えなくなるので、作っている途中の「前検査」が必須なんです。",
    "choices": [
      { "order_index": 1, "choice_text": "工事を着工した後に、速やかに市町村長等へ変更許可の申請を提出すればよい。", "is_correct": false, "explanation_detail": "×許可が下りる前に工事を始めるのは違法（フライング）です。" },
      { "order_index": 2, "choice_text": "変更工事に関係しない部分を工事中に使い続ける場合は、都道府県知事の承認を受けなければならない。", "is_correct": false, "explanation_detail": "×仮使用の承認を出すのは知事ではなく、許可を出したのと同じ「市町村長等」です。" },
      { "order_index": 3, "choice_text": "液体タンクの変更に関わる部分は、全体の完成検査を受ける前に、工程ごとに市町村長等の検査を受けなければならない。", "is_correct": true, "explanation_detail": "✅そのとおり！これを「完成検査前検査」と呼び、液体タンク特有の厳しいルールです。" },
      { "order_index": 4, "choice_text": "工事が完了すれば、完成検査を受けなくても直ちにタンクの使用を開始することができる。", "is_correct": false, "explanation_detail": "×完成検査に合格して「完成検査済証」をもらうまで、絶対に使用してはいけません。" },
      { "order_index": 5, "choice_text": "工事に伴って予防規程の内容を変更した場合は、市町村長等への届出のみでよく、認可は不要である。", "is_correct": false, "explanation_detail": "×予防規程は作成する時も変更する時も、必ず「認可」が必要です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L10",
    "difficulty": 3,
    "question_text": "指定数量の倍数にかかわりなく、常に危険物保安監督者を定めなければならない施設はどれか。",
    "hint_text": "💡ここがポイント：ガソリンスタンド（給油取扱所）は不特定多数の人が来るため、規模に関係なく「全店」で監督者が必要です。",
    "pitfall_text": "🐾よくある落とし穴：他の施設は「一定の規模（倍数）を超えたら」必要になります。GSだけが例外です。",
    "choices": [
      { "order_index": 1, "choice_text": "屋内貯蔵所", "is_correct": false, "explanation_detail": "×誤り。原則として指定数量の倍数等が一定以上の場合に必要です。" },
      { "order_index": 2, "choice_text": "販売取扱所", "is_correct": false, "explanation_detail": "×誤り。倍数などの条件によって選任が必要になります。" },
      { "order_index": 3, "choice_text": "屋外貯蔵所", "is_correct": false, "explanation_detail": "×誤り。倍数等に応じて選任要否が決まります。" },
      { "order_index": 4, "choice_text": "移動タンク貯蔵所", "is_correct": false, "explanation_detail": "×誤り。タンクローリーにはそもそも保安監督者を置くルールがありません。" },
      { "order_index": 5, "choice_text": "給油取扱所", "is_correct": true, "explanation_detail": "✅正解。火災リスクが高いため、扱う量に関わらず全店で保安監督者の選任が必須です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L10",
    "difficulty": 3,
    "question_text": "地下タンクを有する一般的なガソリンスタンド（給油取扱所）において、法令で義務付けられているものはいくつあるか。\nA：予防規程の作成\nB：危険物保安監督者の選任\nC：定期点検の実施\nD：危険物施設保安員の選任\nE：自衛消防組織の設置",
    "hint_text": "💡ここがポイント：普通のガソリンスタンドに必要なのは、マニュアル（予防規程）、責任者（保安監督者）、点検（定期点検）の3点セットです。",
    "pitfall_text": "🐾よくある落とし穴：「施設保安員」や「自衛消防組織」は、コンビナートなどの超巨大施設にだけ要求される大掛かりなものです。街のGSには不要ですよ。",
    "choices": [
      { "order_index": 1, "choice_text": "1つ", "is_correct": false, "explanation_detail": "×数が違います。" },
      { "order_index": 2, "choice_text": "2つ", "is_correct": false, "explanation_detail": "×数が違います。" },
      { "order_index": 3, "choice_text": "3つ", "is_correct": true, "explanation_detail": "✅そのとおり！義務付けられているのは A(予防規程)、B(保安監督者)、C(定期点検) の「3つ」です。" },
      { "order_index": 4, "choice_text": "4つ", "is_correct": false, "explanation_detail": "×数が違います。" },
      { "order_index": 5, "choice_text": "5つ", "is_correct": false, "explanation_detail": "×数が違います。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L11",
    "difficulty": 2,
    "question_text": "都道府県知事による危険物取扱者免状の「返納命令」の対象となる事由として、正しいものはどれか。",
    "hint_text": "💡ここがポイント：免状の返納命令は、消防法違反という「重大なルール違反」に対する重いペナルティです。",
    "pitfall_text": "🐾よくある落とし穴：「3年使わなかったら失効」は運転免許などのイメージに引っ張るトラップです。乙4は一生モノです。",
    "choices": [
      { "order_index": 1, "choice_text": "心身の故障により取扱作業ができなくなったとき", "is_correct": false, "explanation_detail": "×誤り。病気やケガで免許を取り上げられることはありません。" },
      { "order_index": 2, "choice_text": "消防法または消防法に基づく命令の規定に違反したとき", "is_correct": true, "explanation_detail": "✅正解。法違反は免状返納命令（免許取り消し）の対象になり得ます。" },
      { "order_index": 3, "choice_text": "免状交付後、取扱作業に3年以上従事しなかったとき", "is_correct": false, "explanation_detail": "×誤り。危険物の免状に更新制度や放置による失効はありません。" },
      { "order_index": 4, "choice_text": "保安監督者に選任されることを拒んだとき", "is_correct": false, "explanation_detail": "×誤り。引き受けるかどうかは本人の自由です。" },
      { "order_index": 5, "choice_text": "免状を汚損または破損してしまったとき", "is_correct": false, "explanation_detail": "×誤り。汚損・破損した場合はペナルティではなく「再交付の手続き」をします。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L11",
    "difficulty": 3,
    "question_text": "製造所等における「定期点検」のルールについて、正しい記述はどれか。（漏れ点検などを除く）",
    "hint_text": "💡ここがポイント：定期点検の記録は「3年間」ファイル等に綴じて保存しておくだけでOKです。役所に提出する必要はありません。",
    "pitfall_text": "🐾よくある落とし穴：「毎年やってるんだから、毎年役所に報告するんだろう」と思いがちですよね。報告義務がないというのが最大の引っかけポイントです。",
    "choices": [
      { "order_index": 1, "choice_text": "定期点検を実施できるのは、実務経験のある甲種危険物取扱者に限定されている。", "is_correct": false, "explanation_detail": "×甲種・乙種・丙種、さらに危険物施設保安員であれば誰でも実施可能です。" },
      { "order_index": 2, "choice_text": "丙種危険物取扱者は、自身の免状では定期点検を実施することができない。", "is_correct": false, "explanation_detail": "×丙種であっても、自ら定期点検を実施することができます。" },
      { "order_index": 3, "choice_text": "危険物施設保安員が点検を行う際は、必ず甲種または乙種取扱者の立会いが必要である。", "is_correct": false, "explanation_detail": "×施設保安員は、誰の立会いもなしに単独で点検を実施できます。" },
      { "order_index": 4, "choice_text": "定期点検を実施した結果の記録は、原則として3年間保存しなければならない。", "is_correct": true, "explanation_detail": "✅そのとおり！点検記録は「3年間保存」が法令のルールです。" },
      { "order_index": 5, "choice_text": "定期点検の結果は、実施するごとに管轄の消防署長または市町村長等へ報告しなければならない。", "is_correct": false, "explanation_detail": "△そう思いがちですが、保存するだけで「報告（提出）」の義務はないんです。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L11",
    "difficulty": 3,
    "question_text": "危険物取扱者免状の交付制限に関する以下の文章の空欄[ A ]〜[ C ]に入る語句の組み合わせとして、正しいものはどれか。\n「[ A ]は、法に違反して免状の[ B ]日から起算して[ C ]を経過しない者には、新たな免状の交付を行わないことができる。」",
    "hint_text": "💡ここがポイント：権限者は『面倒な制止（せいし）』で覚えましょう！面(免状)・倒(都道府県知事)、制(製造所等)・止(市町村長等)です。そしてペナルティの期間は「1年」です。",
    "pitfall_text": "🐾よくある落とし穴：自分から「返納した」わけではなく、悪いことをして「返納を命ぜられた」という事実がペナルティのスタート地点になります。",
    "choices": [
      { "order_index": 1, "choice_text": "A=市町村長　B=返納をした　C=1年", "is_correct": false, "explanation_detail": "×免状の権限は市町村長にはありません。" },
      { "order_index": 2, "choice_text": "A=都道府県知事　B=返納をした　C=2年", "is_correct": false, "explanation_detail": "×「返納をした」という自発的な表現と、2年という期間が誤りです。" },
      { "order_index": 3, "choice_text": "A=都道府県知事　B=返納を命ぜられた　C=1年", "is_correct": true, "explanation_detail": "✅そのとおり！「知事」が「返納命令」から「1年」は再交付を拒否できる、というのが正しいルールです。" },
      { "order_index": 4, "choice_text": "A=消防長　B=返納を命ぜられた　C=1年", "is_correct": false, "explanation_detail": "×免状の権限は消防長にはありません。" },
      { "order_index": 5, "choice_text": "A=都道府県知事　B=返納を命ぜられた　C=2年", "is_correct": false, "explanation_detail": "△惜しい！ペナルティの期間は2年ではなく1年です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "法令",
    "subcategory": "L12",
    "difficulty": 3,
    "question_text": "タンクローリー（移動タンク貯蔵所）で危険物を移送する際のルールとして、正しいものはどれか。\n",
    "hint_text": "💡考え方のヒント：ガソリンや軽油など、丙種免状で扱える危険物であれば、丙種取得者がトラックに乗って移送しても全く問題ありません。",
    "pitfall_text": "🐾よくある落とし穴：免状は「コピーでいいだろう」と思いがちですが、警察官に止められた時に提示できるよう必ず「原本」を携帯しなければなりません。",
    "choices": [
      { "order_index": 1, "choice_text": "丙種危険物取扱者であっても、ガソリンや軽油など自分が扱える危険物であれば乗車して移送できる。", "is_correct": true, "explanation_detail": "✅そのとおり！自分の免状で扱える品目なら、丙種でも移送が可能です。" },
      { "order_index": 2, "choice_text": "車の所有者が甲種免状を持っていれば、運転手が無資格でも単独で移送できる。", "is_correct": false, "explanation_detail": "×社長が持っていても意味がありません。実際に車に「乗車」する人が有資格者でなければなりません。" },
      { "order_index": 3, "choice_text": "免状のコピーを携帯していれば、原本は事務所に保管しておいてよい。", "is_correct": false, "explanation_detail": "×コピーは不可です。必ず「免状（原本）」を携帯する義務があります。" },
      { "order_index": 4, "choice_text": "完成検査済証は紛失を防ぐため、車両には積まずに安全な金庫に保管する。", "is_correct": false, "explanation_detail": "×完成検査済証は、事務所ではなく「車両（タンクローリー）」に常に備え付けておく必要があります。" },
      { "order_index": 5, "choice_text": "警察官から免状の提示を求められても、消防職員でなければ拒否できる。", "is_correct": false, "explanation_detail": "×消防職員だけでなく、警察官からの提示要求にも応じる義務があります。" }
    ]
  },



  // ↑↑↑ ここまで ↑↑↑
  // ★重要：すぐ上の最後の } の後ろにカンマ「,」を必ず付けてください！


  // =========================================================
  // 🔵 第2回：物理・化学 ＆ 性質・消火（10問）
  // =========================================================
  // ↓↓↓ ここから下にコピペ ↓↓↓

  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P06",
    "difficulty": 3,
    "question_text": "塩（えん）の加水分解に関する記述として、適切でないものはどれか。",
    "hint_text": "💡ここがポイント：強酸と強塩基からできた塩（食塩など）は、「強い者同士」でバランスが取れているため、水に溶けても分解しません。",
    "pitfall_text": "🐾よくある落とし穴：「強いから何か激しい反応が起きそう」と思いがちですよね。実は強い者同士だと安定して、何も起きないんです。",
    "choices": [
      { "order_index": 1, "choice_text": "弱酸と強塩基の反応でできた塩は、水に溶けると加水分解する。", "is_correct": false, "explanation_detail": "○正しい記述です。強弱が混ざっているとバランスが崩れて加水分解します。" },
      { "order_index": 2, "choice_text": "弱酸と弱塩基からなる塩は、水溶液中で加水分解する。", "is_correct": false, "explanation_detail": "○正しい記述です。弱い者同士の組み合わせも加水分解を起こします。" },
      { "order_index": 3, "choice_text": "強酸と強塩基の中和によって生じた塩は、水に溶かすと加水分解を起こす。", "is_correct": true, "explanation_detail": "✅ここが誤りです！強い者同士（強酸と強塩基）の組み合わせは安定しているので、加水分解はしません。" },
      { "order_index": 4, "choice_text": "カルボン酸とアルコールの反応で生じるエステルは、加水分解反応を起こすことができる。", "is_correct": false, "explanation_detail": "○正しい記述です。エステルは加水分解の代表例です。" },
      { "order_index": 5, "choice_text": "強酸と弱塩基から生成した塩は、水に溶かすと加水分解する。", "is_correct": false, "explanation_detail": "○正しい記述です。強弱が混ざっている組み合わせは加水分解します。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P03",
    "difficulty": 2,
    "question_text": "ある物質の質量を m、比熱を c としたとき、その物質の「熱容量 C」を求める式として正しいものはどれか。",
    "hint_text": "💡ここがポイント：熱容量（C）を求める公式は「質量（m）× 比熱（c）」です。単なる掛け算と覚えましょう！",
    "pitfall_text": "🐾よくある落とし穴：アルファベットが並ぶと難しく見えますが、2乗（c²など）や割り算は一切出てきません。シンプルな掛け算を選ぶだけです。",
    "choices": [
      { "order_index": 1, "choice_text": "C = m ÷ c²", "is_correct": false, "explanation_detail": "×割り算や2乗は不要です。" },
      { "order_index": 2, "choice_text": "C = c ÷ m", "is_correct": false, "explanation_detail": "×割り算は不要です。" },
      { "order_index": 3, "choice_text": "C = m² × c", "is_correct": false, "explanation_detail": "×2乗は不要です。" },
      { "order_index": 4, "choice_text": "C = m × c", "is_correct": true, "explanation_detail": "✅そのとおり！これが熱容量を求める正しい公式です。" },
      { "order_index": 5, "choice_text": "C = m × c²", "is_correct": false, "explanation_detail": "×2乗は不要です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P07",
    "difficulty": 4,
    "question_text": "400gの水に、20gの食塩を完全に溶かして食塩水を作った。この食塩水の質量パーセント濃度として最も近いものはどれか。",
    "hint_text": "💡考え方のヒント：濃度(％) ＝「溶けているもの」÷「全体の重さ(水＋溶けているもの)」× 100 です。",
    "pitfall_text": "🐾よくある落とし穴：「20 ÷ 400」で計算して5.0％を選びたくなりますよね。必ず「全体の重さ（400g＋20g＝420g）」で割るのがポイントです！",
    "choices": [
      { "order_index": 1, "choice_text": "約 4.0%", "is_correct": false, "explanation_detail": "×計算が合いません。" },
      { "order_index": 2, "choice_text": "約 4.5%", "is_correct": false, "explanation_detail": "×計算が合いません。" },
      { "order_index": 3, "choice_text": "約 4.8%", "is_correct": true, "explanation_detail": "✅そのとおり！20g ÷ (400g ＋ 20g) ＝ 20 ÷ 420 ≒ 0.0476... となり、約4.8%が正解です。" },
      { "order_index": 4, "choice_text": "約 5.0%", "is_correct": false, "explanation_detail": "△惜しい！水だけの重さ（400g）で割ってしまうとこの間違えた数字になります。" },
      { "order_index": 5, "choice_text": "約 5.3%", "is_correct": false, "explanation_detail": "×計算が合いません。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "燃焼・消火",
    "subcategory": "F03",
    "difficulty": 2,
    "question_text": "水を使った消火方法に関する記述のうち、適切でないものはどれか。",
    "hint_text": "💡ここがポイント：水と油は絶対に混ざりません。つまり、水で油を「薄める（希釈する）」ことはできないんです。",
    "pitfall_text": "🐾よくある落とし穴：油火災に水をかけると、水が油を弾き飛ばして火の海が広がってしまいます。水が効くのは冷却と窒息（蒸気）の効果です。",
    "choices": [
      { "order_index": 1, "choice_text": "水は比熱が大きいため、周囲の熱を大量に吸収して温度を下げる冷却効果がある。", "is_correct": false, "explanation_detail": "○正しい説明です。水は温まりにくいため、熱をたくさん奪ってくれます。" },
      { "order_index": 2, "choice_text": "水が火熱によって水蒸気になるときに大きな蒸発熱を奪うため、強い冷却効果を発揮する。", "is_correct": false, "explanation_detail": "○正しい説明です。" },
      { "order_index": 3, "choice_text": "水は油と混ざりやすいため、ガソリン火災の際に放水すると油の濃度を薄めて（希釈して）消火することができる。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！油は水に溶けないため、「薄める（希釈する）」効果は一切ありません。" },
      { "order_index": 4, "choice_text": "発生した大量の水蒸気が火元を覆い隠すことで、酸素の供給を遮断する窒息効果も期待できる。", "is_correct": false, "explanation_detail": "○正しい説明です。大量の水蒸気が酸素を追い出す効果があります。" },
      { "order_index": 5, "choice_text": "水蒸気が周囲に広がることで、空気中の可燃性ガスの濃度を相対的に下げる効果がある。", "is_correct": false, "explanation_detail": "○正しい説明です。水蒸気が混ざることで、燃えるガスの濃度が下がります。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P01",
    "difficulty": 3,
    "question_text": "物質の「三態（固体・液体・気体）」とその変化の名称に関する記述として、事実に反するものはどれか。",
    "hint_text": "💡ここがポイント：「融解」は氷が水になるように「固体が液体になる」ことです。言葉のイメージと実際の変化を結びつけましょう。",
    "pitfall_text": "🐾よくある落とし穴：「融（と）ける＝水になる」まではイメージできても、気体が水になることだと勘違いしやすいんです。気体が液体に戻るのは「凝縮（液化）」と言いますよ。",
    "choices": [
      { "order_index": 1, "choice_text": "液体が冷やされて固体に変わる変化を「凝固（ぎょうこ）」という。", "is_correct": false, "explanation_detail": "○正しい記述です。水が凍って氷になることですね。" },
      { "order_index": 2, "choice_text": "液体が熱を吸収して気体へと変わる変化を「蒸発（じょうはつ）」という。", "is_correct": false, "explanation_detail": "○正しい記述です。お湯が沸騰して湯気になる状態です。" },
      { "order_index": 3, "choice_text": "気体が冷やされて液体に変わる変化を「融解（ゆうかい）」という。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！気体が液体になるのは「凝縮（または液化）」です。「融解」は固体が液体になる（氷が溶ける）ことです。" },
      { "order_index": 4, "choice_text": "ドライアイスのように、液体を経ずに固体から直接気体になる変化を「昇華（しょうか）」という。", "is_correct": false, "explanation_detail": "○正しい記述です。氷にならずに白い煙になるアレです。" },
      { "order_index": 5, "choice_text": "物質は温度や圧力の条件が変わることで、固体、液体、気体の3つの状態を行き来する。", "is_correct": false, "explanation_detail": "○正しい記述です。これを状態変化と呼びます。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P02",
    "difficulty": 3,
    "question_text": "次の物質とその比重（水に対するおおよその値）の組み合わせのうち、事実と異なるものはどれか。",
    "hint_text": "💡考え方のヒント：水（1.0）を基準にして、それより重いか軽いかを見ます。第4類の危険物（油）は水より軽いのが基本です。",
    "pitfall_text": "🐾よくある落とし穴：ベンゼンは「水より軽い油（約0.88）」なんですが、引っかけで「1.5」などと水より重く書かれることが多いです！",
    "choices": [
      { "order_index": 1, "choice_text": "金 ----- 約19.3", "is_correct": false, "explanation_detail": "○正しいです。金は非常に重い金属です。" },
      { "order_index": 2, "choice_text": "ベンゼン ----- 約1.50", "is_correct": true, "explanation_detail": "✅ここが誤りですね。ベンゼンは油の仲間なので水より軽く、正しくは「約0.88」です。" },
      { "order_index": 3, "choice_text": "水 ----- 1.00", "is_correct": false, "explanation_detail": "○正しいです。比重は水を「1.00」として基準にしています。" },
      { "order_index": 4, "choice_text": "エチルアルコール ----- 約0.80", "is_correct": false, "explanation_detail": "○正しいです。アルコールも水より少し軽いです。" },
      { "order_index": 5, "choice_text": "銀 ----- 約10.5", "is_correct": false, "explanation_detail": "○正しいです。銀も水よりずっと重い金属です。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P08",
    "difficulty": 2,
    "question_text": "危険物を容器に入れて運搬する際、容器を完全に満タンにせず、上部に一定の「空間容積」を設けることが法令で義務付けられている。その最大の理由はどれか。",
    "hint_text": "💡ここがポイント：液体は温度が上がると「膨らむ（体積が大きくなる）」性質があります。その膨らむ分の「逃げ道」を作っておく必要があるんです。",
    "pitfall_text": "🐾よくある落とし穴：「中でチャプチャプ揺らすため（混ざりやすくするため）」と深読みしてしまいがちですが、シンプルに「破裂防止」が正解です。",
    "choices": [
      { "order_index": 1, "choice_text": "運搬時の振動を利用して、危険物の成分がよく混ざり合うようにするため。", "is_correct": false, "explanation_detail": "×成分を混ぜる目的ではありません。" },
      { "order_index": 2, "choice_text": "容器全体の重量を軽くし、人力での運搬作業を容易にするため。", "is_correct": false, "explanation_detail": "×重量制限のためではなく、安全のためのスペースです。" },
      { "order_index": 3, "choice_text": "温度上昇によって液体の危険物が膨張した際、容器がパンパンになって破損するのを防ぐため。", "is_correct": true, "explanation_detail": "✅そのとおり！これが空間容積を設ける唯一にして最大の理由です。" },
      { "order_index": 4, "choice_text": "空間部分の空気（酸素）と危険物を少しずつ反応させ、品質を安定させるため。", "is_correct": false, "explanation_detail": "×危険物と空気を反応させるのは逆に危険です。" },
      { "order_index": 5, "choice_text": "工場での充填作業において、技術的に100%ギリギリまで液体を入れることが不可能だから。", "is_correct": false, "explanation_detail": "×技術の問題ではなく、意図的にスペースを空けています。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P09",
    "difficulty": 4,
    "question_text": "炭素（原子量12）を空気中で完全燃焼させると、二酸化炭素（分子量44）が発生する。では、「36g」の炭素を完全に燃焼させた場合、発生する二酸化炭素の質量として正しいものはどれか。",
    "hint_text": "💡考え方のヒント：C（12） ＋ O2（32） ＝ CO2（44）という関係です。炭素12gから44gのCO2ができるので、炭素が3倍（36g）になれば、CO2も3倍になります。",
    "pitfall_text": "🐾よくある落とし穴：「炭素と酸素の重さを足す」という基本を忘れて、単なる倍数計算をミスしてしまう方が多いです。落ち着いて比例計算しましょう！",
    "choices": [
      { "order_index": 1, "choice_text": "44g", "is_correct": false, "explanation_detail": "×これは炭素「12g」を燃やした時の量です。" },
      { "order_index": 2, "choice_text": "88g", "is_correct": false, "explanation_detail": "×これは炭素「24g」を燃やした時の量です。" },
      { "order_index": 3, "choice_text": "132g", "is_correct": true, "explanation_detail": "✅大正解！\n【計算の流れ】\n① 炭素12g → CO2 44g（基本）\n② 36g ÷ 12g = 3倍\n③ 44g × 3 = 132g" },
      { "order_index": 4, "choice_text": "176g", "is_correct": false, "explanation_detail": "×計算が合いません。これは4倍の量です。" },
      { "order_index": 5, "choice_text": "22g", "is_correct": false, "explanation_detail": "×計算が合いません。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "燃焼・消火",
    "subcategory": "F03",
    "difficulty": 2,
    "question_text": "一般的な火災における「酸素濃度と消火方法」の関係について、最も適切な記述はどれか。",
    "hint_text": "💡考え方のヒント：私たちが吸っている空気には、酸素が約「21%」含まれています。これを一定の数字まで下げると、火は酸欠になって消えます。",
    "pitfall_text": "🐾よくある落とし穴：酸素を減らして消す方法は「除去消火」ではなく「窒息消火」と呼びます。除去消火は「燃えるもの（ガスなど）」を元から断つ方法ですよ。",
    "choices": [
      { "order_index": 1, "choice_text": "空気中の酸素濃度は約21%であり、これを約14%以下に下げることで燃焼を止める方法を「窒息消火」という。", "is_correct": true, "explanation_detail": "✅そのとおり！酸素を14%以下に減らして火を酸欠にさせるのが「窒息消火」の正しいメカニズムです。" },
      { "order_index": 2, "choice_text": "空気中の酸素濃度は約50%であり、これを21%まで下げることで火災を消し止めることができる。", "is_correct": false, "explanation_detail": "×空気中の酸素は50%もありません（約21%です）。" },
      { "order_index": 3, "choice_text": "空気中の酸素を遮断して燃焼を停止させる消火方法のことを、専門用語で「除去消火」と呼ぶ。", "is_correct": false, "explanation_detail": "△惜しい！酸素を断つのは「窒息消火」です。除去消火はガスの元栓を閉めるような方法です。" },
      { "order_index": 4, "choice_text": "石油類の火災は酸素を必要としないため、酸素濃度をどれだけ下げても消火することはできない。", "is_correct": false, "explanation_detail": "×石油類（第4類）は空気中の酸素を使って燃えるため、窒息消火が極めて有効です。" },
      { "order_index": 5, "choice_text": "空気中の酸素濃度は約21%だが、これを完全に0%にしなければ火は絶対に消えない。", "is_correct": false, "explanation_detail": "×0%にしなくても、約14%（限界酸素濃度）を下回れば火は自然に消えます。" }
    ]
  },
  {
    "exam_term": 2,
    "category": "物理・化学",
    "subcategory": "P05",
    "difficulty": 3,
    "question_text": "物質の「物理変化」と「化学変化」の区別について、次のうち「物理変化」に該当する現象はどれか。",
    "hint_text": "💡考え方のヒント：物理変化は「形や状態（固体・液体・気体）が変わるだけ」で元の物質のままです。化学変化は「全く別の新しい物質に生まれ変わる」現象です。",
    "pitfall_text": "🐾よくある落とし穴：「とける」という言葉にご注意！「熱でドロドロにとける（融解）」は形が変わっただけなので物理変化ですが、「酸にジュワッととける」のは全く別の物質になる化学変化なんです。",
    "choices": [
      { "order_index": 1, "choice_text": "鉄板を屋外に放置していたら、表面が赤茶色にサビてしまった。", "is_correct": false, "explanation_detail": "×サビるのは鉄が酸素と結びついて「酸化鉄」という別物になる「化学変化」です。" },
      { "order_index": 2, "choice_text": "鉄板に塩酸を垂らすと、水素の泡を出しながら溶けていった。", "is_correct": false, "explanation_detail": "×酸に溶けるのは、化学反応を起こして別の物質になる「化学変化」です。" },
      { "order_index": 3, "choice_text": "固体のパラフィン（ロウソクの成分）を加熱したら、ドロドロの液体に溶けた。", "is_correct": true, "explanation_detail": "✅そのとおり！熱で状態が固体から液体に変わった（融解）だけなので、「物理変化」になります。" },
      { "order_index": 4, "choice_text": "マッチの軸を擦って火をつけると、炎を上げて燃え尽きた。", "is_correct": false, "explanation_detail": "×「燃焼」は物質が酸素と激しく結びつく代表的な「化学変化」です。" },
      { "order_index": 5, "choice_text": "ガソリンの蒸気に火花が散り、爆発的に燃焼した。", "is_correct": false, "explanation_detail": "×爆発も非常に激しい「化学変化」の一つです。" }
    ]
  },



  // ↑↑↑ ここまで ↑↑↑
  // ★重要：すぐ上の最後の } の後ろにカンマ「,」を必ず付けてください！


  // =========================================================
  // 🟢 第3回：法令（15問）
  // =========================================================
  // ↓↓↓ ここから下にコピペ ↓↓↓

  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L01",
    "difficulty": 3,
    "question_text": "ある工場で以下の危険物を同一場所で貯蔵している。指定数量の倍数の合計として正しいものはどれか。\n・ガソリン：300L\n・軽油：500L\n・アセトン：200L\n・重油：1,000L",
    "hint_text": "💡考え方のヒント：まずはそれぞれの指定数量（ガソリン200L、軽油1000L、アセトン(第1水溶)400L、重油2000L）を思い出し、割り算して足します。",
    "pitfall_text": "🐾よくある落とし穴：アセトンは「水溶性（水に溶ける）」なので、指定数量が通常の2倍（400L）になります。ここを見落とすと計算がズレてしまいます！",
    "choices": [
      { "order_index": 1, "choice_text": "2.5倍", "is_correct": false, "explanation_detail": "×計算が合いません。" },
      { "order_index": 2, "choice_text": "3.0倍", "is_correct": true, "explanation_detail": "✅そのとおり！ガソリン(300/200=1.5)＋軽油(500/1000=0.5)＋アセトン(200/400=0.5)＋重油(1000/2000=0.5) ＝ 合計3.0倍です。" },
      { "order_index": 3, "choice_text": "3.5倍", "is_correct": false, "explanation_detail": "△惜しい！アセトンを非水溶性（200L）で計算してしまうとこの数字になります。" },
      { "order_index": 4, "choice_text": "4.0倍", "is_correct": false, "explanation_detail": "×指定数量の暗記が少しズレているかもしれません。" },
      { "order_index": 5, "choice_text": "4.5倍", "is_correct": false, "explanation_detail": "×計算が合いません。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "C04",
    "difficulty": 3,
    "question_text": "消防法で定められている第4類危険物の品名と、その分類の組み合わせとして、誤っているものはどれか。",
    "hint_text": "💡考え方のヒント：第4石油類（引火点200℃以上）の代表格は、シリンダー油、ギヤー油、タービン油などのドロドロした機械用の油です。",
    "pitfall_text": "🐾よくある落とし穴：シリンダー油は「第4」石油類です。「シ（4）リンダー油」と語呂合わせで覚えてしまうと試験本番で迷いませんよ！",
    "choices": [
      { "order_index": 1, "choice_text": "二硫化炭素 ── 特殊引火物", "is_correct": false, "explanation_detail": "○正しい組み合わせです。二硫化炭素は最も危険な特殊引火物です。" },
      { "order_index": 2, "choice_text": "ガソリン ── 第1石油類", "is_correct": false, "explanation_detail": "○正しい組み合わせです。ガソリンは第1石油類の代表です。" },
      { "order_index": 3, "choice_text": "灯油 ── 第2石油類", "is_correct": false, "explanation_detail": "○正しい組み合わせです。軽油と一緒に第2石油類と覚えましょう。" },
      { "order_index": 4, "choice_text": "シリンダー油 ── 第3石油類", "is_correct": true, "explanation_detail": "✅ここが誤りですね！重油などは第3ですが、シリンダー油は引火点が200℃以上ある「第4石油類」になります。" },
      { "order_index": 5, "choice_text": "ギヤー油 ── 第4石油類", "is_correct": false, "explanation_detail": "○正しい組み合わせです。ギヤー油は第4石油類です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L03",
    "difficulty": 3,
    "question_text": "製造所等の周囲に確保すべき「保有空地」に関する記述として、正しいものはどれか。",
    "hint_text": "💡ここがポイント：保有空地は「延焼を防ぐためのバリア（空き地）」です。屋外の簡易タンクには「周囲1m以上」必要です。",
    "pitfall_text": "🐾よくある落とし穴：移動タンク貯蔵所（トラック）には、そもそも「空地」という概念がありません。",
    "choices": [
      { "order_index": 1, "choice_text": "簡易タンク貯蔵所を屋外に設置する場合、周囲に1m以上の保有空地が必要である。", "is_correct": true, "explanation_detail": "✅正解。屋外の簡易タンク貯蔵所には、周囲に1m以上の空地が必要です。" },
      { "order_index": 2, "choice_text": "屋外貯蔵所は、敷地面積に応じた保有空地が必要である。", "is_correct": false, "explanation_detail": "×誤り。空地の幅は、敷地面積ではなく「指定数量の倍数」によって広さが決まります。" },
      { "order_index": 3, "choice_text": "屋内貯蔵所は、耐火構造にすれば保有空地は不要になる。", "is_correct": false, "explanation_detail": "×誤り。耐火構造であっても、一定数を超えれば保有空地は必要です。" },
      { "order_index": 4, "choice_text": "屋外タンク貯蔵所は、タンクの半径と等しい距離の保有空地が必要である。", "is_correct": false, "explanation_detail": "×誤り。倍数やタンクの高さ等による複雑な計算で決まり、単なる半径ではありません。" },
      { "order_index": 5, "choice_text": "移動タンク貯蔵所を屋外に駐車する場合、保有空地を確保しなければならない。", "is_correct": false, "explanation_detail": "×誤り。駐車スペースは必要ですが、建物を守るための「保有空地」の概念はありません。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L04",
    "difficulty": 3,
    "question_text": "次のうち、屋外貯蔵所に貯蔵できないものはどれか。",
    "hint_text": "💡ここがポイント：ガソリンは引火点がマイナス40℃以下です。野ざらしの屋外に置くのは危険すぎるためNGです。",
    "pitfall_text": "🐾よくある落とし穴：同じ油でも、軽油や重油は屋外に置けます。引火点の違いがポイントです。",
    "choices": [
      { "order_index": 1, "choice_text": "硫黄", "is_correct": false, "explanation_detail": "○貯蔵できる。硫黄（第2類）は屋外貯蔵が認められています。" },
      { "order_index": 2, "choice_text": "軽油（第2石油類）", "is_correct": false, "explanation_detail": "○貯蔵できる。第2石油類（引火点21℃以上）は屋外貯蔵可能です。" },
      { "order_index": 3, "choice_text": "エチルアルコール（アルコール類）", "is_correct": false, "explanation_detail": "○貯蔵できる。アルコール類も屋外貯蔵が認められています。" },
      { "order_index": 4, "choice_text": "重油（第3石油類）", "is_correct": false, "explanation_detail": "○貯蔵できる。第3石油類（引火点70℃以上）も屋外貯蔵可能です。" },
      { "order_index": 5, "choice_text": "ガソリン（第1石油類）", "is_correct": true, "explanation_detail": "✅貯蔵できない。ガソリンは引火点が非常に低く危険なため屋外不可です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L06",
    "difficulty": 4,
    "question_text": "簡易タンク貯蔵所の技術上の基準について、事実に反する記述はどれか。",
    "hint_text": "💡考え方のヒント：簡易タンクは「容量600L以下」「最大3基まで」という小規模な施設です。屋外と屋内で、周囲に空けるスペース（空地）の広さが変わります。",
    "pitfall_text": "🐾よくある落とし穴：周囲の保有空地は、屋外なら「1m以上」、屋内の専用室なら「0.5m以上」です。この数字を逆にして引っかけ問題を作ってきます！",
    "choices": [
      { "order_index": 1, "choice_text": "学校や病院などから一定の距離を離す「保安距離」の規定は適用されない。", "is_correct": false, "explanation_detail": "○正しい記述です。簡易タンクに保安距離のルールはありません。" },
      { "order_index": 2, "choice_text": "タンクを屋内の専用室に設置する場合、タンクと壁との間に1m以上の間隔を保たなければならない。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！屋内の場合は「0.5m以上」の隙間でOKです。（屋外に置く場合は1m以上必要です）" },
      { "order_index": 3, "choice_text": "1つの簡易タンク貯蔵所に設置できるタンクの数は、最大で3基までと決められている。", "is_correct": false, "explanation_detail": "○正しい記述です。また、同じ種類の油を2基並べることはできません。" },
      { "order_index": 4, "choice_text": "タンク1基あたりの容量は、指定数量に関わらず600L以下に制限されている。", "is_correct": false, "explanation_detail": "○正しい記述です。「簡易＝600」とセットで覚えておきましょう。" },
      { "order_index": 5, "choice_text": "タンク本体は、厚さ3.2mm以上の鋼板を使用して気密に造る必要がある。", "is_correct": false, "explanation_detail": "○正しい記述です。この「3.2mm以上」は他の多くのタンクとも共通する基準の厚さです。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L07",
    "difficulty": 2,
    "question_text": "製造所等に設置する消火設備の区分について、正しいものはどれか。",
    "hint_text": "💡ここがポイント：「危険物の第1類〜第6類」と「消火設備の第1種〜第5種」は全く別の分類です。惑わされないように！",
    "pitfall_text": "🐾よくある落とし穴：第4類の危険物だから第4種消火設備、というような連動は一切ありません。",
    "choices": [
      { "order_index": 1, "choice_text": "消火設備は、危険物の類別に対応して第1類から第6類までに区分されている。", "is_correct": false, "explanation_detail": "×誤り。消火設備は「1種〜5種」。危険物の「第1類〜第6類」とは無関係です。" },
      { "order_index": 2, "choice_text": "第4類の危険物に適応する消火設備を、第4種消火設備という。", "is_correct": false, "explanation_detail": "×誤り。設備の「種別」と危険物の「類別」は連動していません。" },
      { "order_index": 3, "choice_text": "泡を放射する大型の消火器は、第3種の消火設備である。", "is_correct": false, "explanation_detail": "×誤り。車輪がついて引っ張るサイズの大型消火器は【第4種】です。" },
      { "order_index": 4, "choice_text": "乾燥砂は、第5種の消火設備である。", "is_correct": true, "explanation_detail": "✅正解。乾燥砂、水バケツ、膨張ひる石などは最もアナログで簡易的な【第5種】です。" },
      { "order_index": 5, "choice_text": "小型の消火器は、第4種の消火設備である。", "is_correct": false, "explanation_detail": "×誤り。持ち運びできる一般的な小型の消火器は【第5種】です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 3,
    "question_text": "製造所等の「完成検査」に関する記述として、事実に反するものはどれか。",
    "hint_text": "💡考え方のヒント：施設を作る時の全体の流れは「①許可の申請 → ②許可が下りる → ③工事 → ④完成検査 → ⑤使用開始」です。",
    "pitfall_text": "🐾よくある落とし穴：「完成検査が終わってから許可をもらう」と順番が逆になっている選択肢がよく出ます。家を建てる時と同じで、許可がないと工事自体できませんよね。",
    "choices": [
      { "order_index": 1, "choice_text": "完成検査は、製造所等の設置や変更の許可を与えた市町村長等が行う。", "is_correct": false, "explanation_detail": "○正しい記述です。許可を出した人が最後まで責任を持って検査します。" },
      { "order_index": 2, "choice_text": "完成検査に合格し、基準に適合していると認められた後でなければ、施設を使用してはならない。", "is_correct": false, "explanation_detail": "○正しい記述です。フライング使用は厳禁です。" },
      { "order_index": 3, "choice_text": "液体の危険物を扱うタンクの場合は、完成検査の前に、水張検査などの「完成検査前検査」を受ける必要がある。", "is_correct": false, "explanation_detail": "○正しい記述です。漏れがないか途中でチェックします。" },
      { "order_index": 4, "choice_text": "工事を行っている最中でも、工事と関係ない安全な部分は「仮使用の承認」を受ければ使うことができる。", "is_correct": false, "explanation_detail": "○正しい記述です。これが仮使用のルールです。" },
      { "order_index": 5, "choice_text": "完成検査に合格して安全が確認された後に、市町村長等に対して設置許可の申請を行う。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！設置許可の申請は一番最初（工事を始める前）に行うものです。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 3,
    "question_text": "市町村長等から「製造所等の使用停止命令（イエローカード）」を受ける事由に該当しないものはどれか。",
    "hint_text": "💡考え方のヒント：「施設への罰」と「個人への罰」をしっかり切り分けましょう。個人の資格に関する違反で、施設自体が止められることはありません。",
    "pitfall_text": "🐾よくある落とし穴：「従業員が免状を取り上げられたなら、お店も営業停止になりそう」と連想しがちですが、代わりの有資格者を雇えばお店は普通に営業できるんです。",
    "choices": [
      { "order_index": 1, "choice_text": "危険物保安監督者を定めなければならないのに、選任していなかったとき。", "is_correct": false, "explanation_detail": "×施設側の重大な保安違反なので、使用停止の対象になります。" },
      { "order_index": 2, "choice_text": "義務付けられている定期点検を、期限内に実施していなかったとき。", "is_correct": false, "explanation_detail": "×安全が担保できないため、使用停止の対象になります。" },
      { "order_index": 3, "choice_text": "施設で働く従業員が、消防法違反により危険物取扱者免状の返納命令を受けたとき。", "is_correct": true, "explanation_detail": "✅そのとおり！これは「個人への罰」なので、施設自体の「使用停止」の理由にはなりません。" },
      { "order_index": 4, "choice_text": "完成検査に合格していないのに、無断で施設を使い始めたとき。", "is_correct": false, "explanation_detail": "×安全確認前のフライング使用は、使用停止（または許可取消）の対象です。" },
      { "order_index": 5, "choice_text": "許可を受けずに、勝手に施設の位置や構造を変更したとき。", "is_correct": false, "explanation_detail": "×無断改造は極めて悪質なので、使用停止や許可取消の対象です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L09",
    "difficulty": 4,
    "question_text": "市町村長等が製造所等に対して出す行政命令のうち、「許可の取消し（最も重い処分）」の事由には該当せず、「使用停止命令」にとどまるものはどれか。",
    "hint_text": "💡ここがポイント：建物を勝手に改造したなどの「物理的なルール違反」は一発で許可取消し（レッドカード）になりますが、人の配置などの違反は一旦イエローカード（使用停止）で猶予が与えられます。",
    "pitfall_text": "🐾よくある落とし穴：保安監督者を置いていないというのは重大な違反ですが、施設自体を壊すほどの悪質さはないため、いきなり許可まで取り消されることはありません。",
    "choices": [
      { "order_index": 1, "choice_text": "選任義務があるにもかかわらず、危険物保安監督者を定めていなかったとき。", "is_correct": true, "explanation_detail": "✅そのとおり！保安監督者の未選任は「使用停止命令」の対象ですが、「許可の取消し」まではされません。" },
      { "order_index": 2, "choice_text": "施設の位置や構造を直すようにという行政からの「措置命令」を無視したとき。", "is_correct": false, "explanation_detail": "×行政の命令無視は極めて悪質なので、許可取消しの対象になります。" },
      { "order_index": 3, "choice_text": "市町村長等の変更許可を受けずに、勝手に施設を改造したとき。", "is_correct": false, "explanation_detail": "×無許可での改造は安全性を根本から揺るがすため、許可取消しの対象です。" },
      { "order_index": 4, "choice_text": "義務付けられている定期点検を実施していなかったり、虚偽の記録をしたとき。", "is_correct": false, "explanation_detail": "×点検サボりは大事故に直結するため、許可取消しの対象になり得ます。" },
      { "order_index": 5, "choice_text": "完成検査に合格していないのに、フライングして施設を使用し始めたとき。", "is_correct": false, "explanation_detail": "×安全確認前の使用も重大な違反であり、許可取消しの対象です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L10",
    "difficulty": 3,
    "question_text": "甲種または乙種危険物取扱者が、無資格者の取扱作業に立ち会う際の義務について、[ A ]と[ B ]に当てはまる語句の組合せで正しいものはどれか。\n「[ A ]の技術上の基準を遵守するように監督し、[ B ]指示を与えなければならない。」",
    "hint_text": "💡ここがポイント：立会いでは、ハード（建物の構造）ではなくソフト（日々の使い方）を監督します。",
    "pitfall_text": "🐾よくある落とし穴：「位置・構造・設備」は建物を造る時の基準なので、日々の作業とは無関係です。",
    "choices": [
      { "order_index": 1, "choice_text": "A=位置、構造又は設備　B=保安の確保に支障を生ずる場合は", "is_correct": false, "explanation_detail": "×Aが誤り。「位置・構造」は建築時の基準です。" },
      { "order_index": 2, "choice_text": "A=貯蔵又は取扱　B=災害の未然防止のため", "is_correct": false, "explanation_detail": "×Bが誤り。もっともらしい言葉に惑わされないようにしましょう。" },
      { "order_index": 3, "choice_text": "A=貯蔵又は取扱　B=必要に応じて", "is_correct": true, "explanation_detail": "✅正解。日々の「使い方（取扱）」を監督し、「必要に応じて」的確な指示を出します。" },
      { "order_index": 4, "choice_text": "A=位置、構造又は設備　B=災害の未然防止のため", "is_correct": false, "explanation_detail": "×両方誤りです。" },
      { "order_index": 5, "choice_text": "A=貯蔵又は取扱　B=保安の確保に支障を生ずる場合は", "is_correct": false, "explanation_detail": "×Bが誤り。法律上はシンプルに「必要に応じて」と定められています。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L10",
    "difficulty": 3,
    "question_text": "無資格者（免状を持たない者）が危険物を取り扱う際の「立会い」に関するルールとして、正しいものはどれか。",
    "hint_text": "💡ここがポイント：無資格者の作業に立ち会って監督できるのは「甲種」と「乙種」の取扱者だけです。丙種は立ち会えません。",
    "pitfall_text": "🐾よくある落とし穴：「乙種を持っていれば全種類の危険物に立ち会える」という引っかけに注意！乙種は「自分が持っている類の危険物」しか立ち会えません。",
    "choices": [
      { "order_index": 1, "choice_text": "甲種危険物取扱者がその施設に雇用されていれば、現場にいなくても無資格者が取り扱うことができる。", "is_correct": false, "explanation_detail": "×名前があるだけではダメです。文字通り、現場で「立ち会う」必要があります。" },
      { "order_index": 2, "choice_text": "乙種第4類の免状を持つ者が現場で立ち会えば、第4類に該当するすべての危険物を無資格者が取り扱える。", "is_correct": true, "explanation_detail": "✅そのとおり！乙種は自分の免状に対応する類（第4類ならガソリンや灯油など）であれば立会いが可能です。" },
      { "order_index": 3, "choice_text": "危険物保安監督者が選任されている施設であれば、誰も立ち会わずに無資格者が作業してもよい。", "is_correct": false, "explanation_detail": "×保安監督者がいても、無資格者が作業する時は必ず有資格者の立会いが必要です。" },
      { "order_index": 4, "choice_text": "丙種危険物取扱者は、ガソリンや灯油などの特定の危険物に限って、無資格者の作業に立ち会うことができる。", "is_correct": false, "explanation_detail": "×丙種は自分が扱うことはできますが、他人の作業に「立ち会う（監督する）」権限は一切ありません。" },
      { "order_index": 5, "choice_text": "危険物施設保安員に任命されている者であれば、免状を持っていなくても無資格者の作業に立ち会える。", "is_correct": false, "explanation_detail": "×施設保安員は施設のハード面を点検する係なので、立会いの権限はありません。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L10",
    "difficulty": 3,
    "question_text": "「予防規程」に関する記述のうち、適切なものだけを集めた組み合わせはどれか。\nA：指定数量の倍数に関わらず、すべての製造所等で作成しなければならない。\nB：作成または変更したときは、市町村長等の認可を受けなければならない。\nC：予防規程を守る義務があるのは従業員のみであり、所有者は対象外である。\nD：市町村長等は、火災予防上必要があるときは予防規程の変更を命ずることができる。",
    "hint_text": "💡考え方のヒント：予防規程（自社ルールのマニュアル）は、「一定規模以上の大きな施設」だけに作成義務があります。小さな施設には不要です。",
    "pitfall_text": "🐾よくある落とし穴：マニュアルなので「従業員だけが守ればいい」と思いがちですが、社長（所有者）も含めて全員に守る義務があります。",
    "choices": [
      { "order_index": 1, "choice_text": "A と B", "is_correct": false, "explanation_detail": "×Aが誤りです。すべての施設ではなく、一定規模以上の施設のみ義務付けられます。" },
      { "order_index": 2, "choice_text": "A と C", "is_correct": false, "explanation_detail": "×両方誤りです。Cについて、所有者や管理者も守る義務があります。" },
      { "order_index": 3, "choice_text": "B と C", "is_correct": false, "explanation_detail": "×Cが誤りです。" },
      { "order_index": 4, "choice_text": "B と D", "is_correct": true, "explanation_detail": "✅そのとおり！作成・変更時の「認可」と、行政からの「変更命令」の記述が正しいです。" },
      { "order_index": 5, "choice_text": "C と D", "is_correct": false, "explanation_detail": "×Cが誤りです。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L11",
    "difficulty": 3,
    "question_text": "製造所等の「定期点検」に関するルールとして、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：定期点検の記録は「3年間」ファイル等に綴じて保存しておくだけでOKです。役所に提出（報告）する必要はありません。",
    "pitfall_text": "🐾よくある落とし穴：「毎年やってるんだから、毎年役所に報告するんだろう」と思いがちですよね。報告義務がないというのが最大の引っかけポイントです。",
    "choices": [
      { "order_index": 1, "choice_text": "点検を実施した後は、その結果を速やかに市町村長等へ報告（提出）しなければならない。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！記録を「保存」する義務はありますが、役所へ「報告」する義務はありません。" },
      { "order_index": 2, "choice_text": "点検は原則として「1年に1回以上」実施しなければならない。", "is_correct": false, "explanation_detail": "○正しい記述です。年1回が原則です。" },
      { "order_index": 3, "choice_text": "点検を実施できるのは、危険物取扱者、施設保安員、または取扱者が立ち会った無資格者である。", "is_correct": false, "explanation_detail": "○正しい記述です。有資格者の監視下なら無資格者でも点検作業ができます。" },
      { "order_index": 4, "choice_text": "施設の「位置・構造・設備」が技術上の基準に適合しているかを確認するものである。", "is_correct": false, "explanation_detail": "○正しい記述です。取扱いの方法ではなく、ハード面を点検します。" },
      { "order_index": 5, "choice_text": "点検記録は、原則として3年間（漏れ点検などは除く）保存しなければならない。", "is_correct": false, "explanation_detail": "○正しい記述です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L12",
    "difficulty": 2,
    "question_text": "危険物の貯蔵および取扱いに共通する基準として、正しいものはどれか。",
    "hint_text": "💡考え方のヒント：危険物が染み込んだ布（ウエス）などは、放置すると酸化熱で自然発火する恐れがあります。そのため、こまめに（1日1回以上）捨てる必要があります。",
    "pitfall_text": "🐾よくある落とし穴：「工場内は絶対に火気厳禁」と思いがちですが、溶接など火を使う作業もあるため「みだりに使用しない」という少し柔らかい表現が正解になります。",
    "choices": [
      { "order_index": 1, "choice_text": "製造所等の敷地内では、いかなる理由があっても火気を使用してはならない。", "is_correct": false, "explanation_detail": "△惜しい！絶対に禁止されているわけではなく、正しくは「みだりに火気を使用しない」です。" },
      { "order_index": 2, "choice_text": "油分離装置に溜まった危険物は、週に1回まとめて汲み上げればよい。", "is_correct": false, "explanation_detail": "×雨などで溢れると危険なので、週1回ではなく「随時」汲み上げます。" },
      { "order_index": 3, "choice_text": "危険物を貯蔵する部屋は、蒸気が逃げないよう常に密閉して換気を行わないようにする。", "is_correct": false, "explanation_detail": "×逆です。蒸気が溜まると爆発するので、適切に「換気」を行うのが基本です。" },
      { "order_index": 4, "choice_text": "危険物が付着したウエス（布切れ）などのくずやかすは、1日に1回以上、安全な場所で適切に廃棄する。", "is_correct": true, "explanation_detail": "✅そのとおり！自然発火を防ぐため、1日に1回以上安全に処理するルールになっています。" },
      { "order_index": 5, "choice_text": "保護液の中に保存する危険物は、液面から少しだけ露出させておく。", "is_correct": false, "explanation_detail": "×空気に触れると燃える黄リンなどは、絶対に液面から「露出しないように（完全に沈めて）」保存します。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "法令",
    "subcategory": "L12",
    "difficulty": 3,
    "question_text": "危険物を運搬する場合の基準について、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：運搬時の混載は「すべて禁止」ではありません。安全な組み合わせ（4類と2・3類など）なら特例として認められます。",
    "pitfall_text": "🐾よくある落とし穴：「いかなる場合であっても」という強い全否定の言葉は、ダミーである確率が非常に高いです。",
    "choices": [
      { "order_index": 1, "choice_text": "指定数量以上の危険物を運搬する場合には、車両に「危」と表示した標識を掲げなければならない。", "is_correct": false, "explanation_detail": "○正しい。「危」の標識は指定数量以上の運搬時に必須です。" },
      { "order_index": 2, "choice_text": "休憩のため車両を一時停止させるときは、安全な場所を選び、保安に注意しなければならない。", "is_correct": false, "explanation_detail": "○正しい。安全な場所での休憩・一時停止が義務付けられています。" },
      { "order_index": 3, "choice_text": "運搬容器の外部に品名、数量などを表示して積載しなければならない。", "is_correct": false, "explanation_detail": "○正しい。品名や数量の表示義務があります。" },
      { "order_index": 4, "choice_text": "類を異にする危険物の混載は、いかなる場合であってもすべて禁止されている。", "is_correct": true, "explanation_detail": "✅誤り。「すべて禁止」ではありません。安全な組み合わせなら混載可能です。" },
      { "order_index": 5, "choice_text": "指定数量以上の危険物を運搬する場合には、当該危険物に適応する消火設備を備えなければならない。", "is_correct": false, "explanation_detail": "○正しい。万が一に備え、消火設備を載せる義務があります。" }
    ]
  },



  // ↑↑↑ ここまで ↑↑↑
  // ★重要：すぐ上の最後の } の後ろにカンマ「,」を必ず付けてください！


  // =========================================================
  // 🔵 第3回：物理・化学 ＆ 性質・消火（10問）
  // =========================================================
  // ↓↓↓ ここから下にコピペ ↓↓↓

  {
    "exam_term": 3,
    "category": "物理・化学",
    "subcategory": "P10",
    "difficulty": 3,
    "question_text": "金属の一般的な性質や、危険物としての特徴に関する記述として、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：鉄やアルミニウムなどの金属は、塊の時は燃えませんが、「細かい粉末（鉄粉やアルミ粉）」になると激しく燃える危険物（第2類）に変貌します。",
    "pitfall_text": "🐾よくある落とし穴：「金属は絶対に燃えない」という日常生活の常識が最大の罠です。危険物の試験では、金属の粉はバリバリ燃えるものとして扱われます。",
    "choices": [
      { "order_index": 1, "choice_text": "比重がおおむね4以下の比較的軽い金属を「軽金属」、それより重いものを「重金属」と呼ぶ。", "is_correct": false, "explanation_detail": "○正しい分類の仕方です。アルミニウムなどは軽金属ですね。" },
      { "order_index": 2, "choice_text": "アルカリ金属（ナトリウムやカリウムなど）の中には、水と接触するだけで激しく反応し、水素を発生するものがある。", "is_correct": false, "explanation_detail": "○正しい記述です。これらは第3類の禁水性物質に該当します。" },
      { "order_index": 3, "choice_text": "すべての金属は不燃性であり、火災の際に自ら燃焼して炎を上げることは絶対にない。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！マグネシウムや細かい鉄粉などは、一度火がつくと高温で激しく燃焼する「可燃性固体（第2類）」なんです。" },
      { "order_index": 4, "choice_text": "金属の中には、水銀のように常温（20℃）で液体として存在する珍しいものもある。", "is_correct": false, "explanation_detail": "○正しい記述です。水銀は常温で液体の金属です。" },
      { "order_index": 5, "choice_text": "金属粉末の中には、空気に触れて酸化する際の発熱が蓄積し、自然発火を起こす危険性があるものも存在する。", "is_correct": false, "explanation_detail": "○正しい記述です。使い捨てカイロの中身（鉄粉）が熱くなるのと同じ原理が暴走した状態です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "物理・化学",
    "subcategory": "P12",
    "difficulty": 3,
    "question_text": "気体の性質を表す法則のうち、「温度が一定のとき、一定量の気体の体積は、圧力に反比例する」という法則はどれか。",
    "hint_text": "💡ここがポイント：風船をギュッと押しつぶす（圧力をかける）と、小さくなる（体積が減る）法則です。「ボイルの法則」と呼びます。",
    "pitfall_text": "🐾よくある落とし穴：シャルルの法則とごっちゃになりやすいですよね。「温度で膨らむのがシャルル」「圧力で縮むのがボイル」と整理しておきましょう。",
    "choices": [
      { "order_index": 1, "choice_text": "シャルルの法則", "is_correct": false, "explanation_detail": "△惜しい！シャルルは「圧力が一定のとき、温度が上がると体積が増える」という法則です。" },
      { "order_index": 2, "choice_text": "アボガドロの法則", "is_correct": false, "explanation_detail": "×アボガドロは「同温・同圧・同体積なら、気体の種類が違っても分子の数は同じ」という法則です。" },
      { "order_index": 3, "choice_text": "ボイルの法則", "is_correct": true, "explanation_detail": "✅そのとおり！「圧力」と「体積」の反比例関係を示したのがボイルの法則です。" },
      { "order_index": 4, "choice_text": "定比例の法則", "is_correct": false, "explanation_detail": "×化合物を構成する成分の「質量の比」は常に一定であるという法則です。" },
      { "order_index": 5, "choice_text": "ヘンリーの法則", "is_correct": false, "explanation_detail": "×気体が水などに溶ける量に関する法則です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "物理・化学",
    "subcategory": "P13",
    "difficulty": 2,
    "question_text": "酸と塩基（アルカリ）の性質に関する説明として、誤っているものはどれか。",
    "hint_text": "💡考え方のヒント：酸性はレモン汁などのすっぱいもの、塩基（アルカリ）性は石けん水などのヌルヌルするものです。pHの値は「7（中性）」を基準にして考えます。",
    "pitfall_text": "🐾よくある落とし穴：pHの数字は「小さいほど酸性が強い」んです。「酸性が強い＝数字も大きい」と勘違いしやすいので気をつけてくださいね！",
    "choices": [
      { "order_index": 1, "choice_text": "酸とは、水に溶けたときに水素イオン（H⁺）を生じる物質のことである。", "is_correct": false, "explanation_detail": "○正しい記述です。酸性の正体はこの水素イオンです。" },
      { "order_index": 2, "choice_text": "酸性の水溶液は、pH（水素イオン指数）の値が 7 よりも大きくなる。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！pHは 7 が中性で、それより「小さい」と酸性、「大きい」と塩基（アルカリ）性になります。" },
      { "order_index": 3, "choice_text": "塩基とは、水に溶けたときに水酸化物イオン（OH⁻）を生じる物質のことである。", "is_correct": false, "explanation_detail": "○正しい記述です。塩基性の正体です。" },
      { "order_index": 4, "choice_text": "酸と塩基が反応して、互いの性質を打ち消し合い水と塩（えん）を作る反応を中和という。", "is_correct": false, "explanation_detail": "○正しい記述です。" },
      { "order_index": 5, "choice_text": "酸性の水溶液に青色のリトマス紙を浸すと、赤色に変化する。", "is_correct": false, "explanation_detail": "○正しい記述です。「酸は赤くなる」と覚えましょう。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "燃焼・消火",
    "subcategory": "F01",
    "difficulty": 2,
    "question_text": "燃焼の仕組みや条件に関する記述のうち、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：危険物の中には、自分の内部に「酸素」を持っているため、空気がなくても爆発的に燃えるヤバい物質（第5類など）が存在します。",
    "pitfall_text": "🐾よくある落とし穴：「空気がないと火は消える」というのは日常の常識ですが、危険物の世界では例外があるんです。",
    "choices": [
      { "order_index": 1, "choice_text": "燃焼が起こるためには、原則として「可燃物」「酸素供給源」「点火源」の3つの要素が必要である。", "is_correct": false, "explanation_detail": "○正しい説明です。この3つが揃うと火が起きます。" },
      { "order_index": 2, "choice_text": "第5類の自己反応性物質などのように、空気中の酸素が全くなくても燃焼や爆発を起こす物質は存在しない。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！第5類危険物のように「自ら酸素を持っている物質」は、空気がなくても激しく燃焼します。" },
      { "order_index": 3, "choice_text": "マッチの炎や静電気の火花などは、燃焼をスタートさせるための「点火源」になり得る。", "is_correct": false, "explanation_detail": "○正しい説明です。" },
      { "order_index": 4, "choice_text": "固体の可燃物は、細かく粉砕して空気と触れる面積を増やすと、より燃焼しやすくなる。", "is_correct": false, "explanation_detail": "○正しい説明です。空気に触れる表面積が広がるため燃えやすくなります。" },
      { "order_index": 5, "choice_text": "燃焼とは、熱や光の発生を伴う激しい酸化反応のことである。", "is_correct": false, "explanation_detail": "○正しい説明です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "燃焼・消火",
    "subcategory": "F03",
    "difficulty": 2,
    "question_text": "一般的な火災における「酸素濃度と消火方法」の関係について、最も適切な記述はどれか。",
    "hint_text": "💡考え方のヒント：私たちが吸っている空気には、酸素が約「21%」含まれています。これを一定の数字まで下げると、火は酸欠になって消えます。",
    "pitfall_text": "🐾よくある落とし穴：酸素を減らして消す方法は「除去消火」ではなく「窒息消火」と呼びます。除去消火は「燃えるもの（ガスなど）」を元から断つ方法ですよ。",
    "choices": [
      { "order_index": 1, "choice_text": "空気中の酸素濃度は約21%であり、これを約14%以下に下げることで燃焼を止める方法を「窒息消火」という。", "is_correct": true, "explanation_detail": "✅そのとおり！酸素を14%以下に減らして火を酸欠にさせるのが「窒息消火」の正しいメカニズムです。" },
      { "order_index": 2, "choice_text": "空気中の酸素濃度は約50%であり、これを21%まで下げることで火災を消し止めることができる。", "is_correct": false, "explanation_detail": "×空気中の酸素は50%もありません（約21%です）。" },
      { "order_index": 3, "choice_text": "空気中の酸素を遮断して燃焼を停止させる消火方法のことを、専門用語で「除去消火」と呼ぶ。", "is_correct": false, "explanation_detail": "△惜しい！酸素を断つのは「窒息消火」です。除去消火はガスの元栓を閉めるような方法です。" },
      { "order_index": 4, "choice_text": "石油類の火災は酸素を必要としないため、酸素濃度をどれだけ下げても消火することはできない。", "is_correct": false, "explanation_detail": "×石油類（第4類）は空気中の酸素を使って燃えるため、窒息消火が極めて有効です。" },
      { "order_index": 5, "choice_text": "空気中の酸素濃度は約21%だが、これを完全に0%にしなければ火は絶対に消えない。", "is_correct": false, "explanation_detail": "×0%にしなくても、約14%（限界酸素濃度）を下回れば火は自然に消えます。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "物理・化学",
    "subcategory": "P05",
    "difficulty": 3,
    "question_text": "次の物質を「単体」「化合物」「混合物」に分類したとき、その組み合わせとして誤っているものはどれか。",
    "hint_text": "💡考え方のヒント：化学式で書いた時に、1つのアルファベット（O2など）なら単体、2つ以上（CO2など）なら化合物。色々な成分が混ざって化学式で一つに表せない油などは「混合物」です。",
    "pitfall_text": "🐾よくある落とし穴：二酸化炭素（CO2）は炭素と酸素が「化合」したものなので化合物ですが、「混ざっているから混合物だろう」と勘違いしやすいんです。",
    "choices": [
      { "order_index": 1, "choice_text": "空気 ── 混合物", "is_correct": false, "explanation_detail": "○正しいです。空気は窒素や酸素など色々な気体が混ざった混合物です。" },
      { "order_index": 2, "choice_text": "二酸化炭素 ── 混合物", "is_correct": true, "explanation_detail": "✅ここが誤りですね！二酸化炭素（CO2）は、炭素と酸素が結びついてできた「化合物」になります。" },
      { "order_index": 3, "choice_text": "食塩（塩化ナトリウム） ── 化合物", "is_correct": false, "explanation_detail": "○正しいです。ナトリウムと塩素が結びついた化合物です。" },
      { "order_index": 4, "choice_text": "灯油やガソリン ── 混合物", "is_correct": false, "explanation_detail": "○正しいです。石油製品は様々な炭化水素が混ざった混合物です。" },
      { "order_index": 5, "choice_text": "酸素 ── 単体", "is_correct": false, "explanation_detail": "○正しいです。酸素（O2）は1つの元素だけでできているので単体です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "燃焼・消火",
    "subcategory": "F04",
    "difficulty": 3,
    "question_text": "燃焼や火災に関する用語の説明として、事実に反するものはどれか。",
    "hint_text": "💡ここがポイント：乙4の最重要ワード「引火点」と「発火点」の違いです。火（マッチ等）を近づけてボン！と燃えるのが「引火点」、火がないのに勝手に燃え出すのが「発火点」です。",
    "pitfall_text": "🐾よくある落とし穴：試験ではこの2つの意味をあべこべにして出題してきます。言葉の定義を正確にリンクさせておきましょう。",
    "choices": [
      { "order_index": 1, "choice_text": "燃焼とは、熱と光の発生を伴う急激な酸化反応のことである。", "is_correct": false, "explanation_detail": "○正しい説明です。ただサビるだけ（酸化）ではなく、熱と光が出るのが燃焼です。" },
      { "order_index": 2, "choice_text": "燃焼が起こるためには、「可燃物」「酸素供給源」「点火源」の3要素が必要である。", "is_correct": false, "explanation_detail": "○正しい説明です。燃焼の3要素と呼ばれます。" },
      { "order_index": 3, "choice_text": "発火点とは、可燃性の液体を加熱したとき、火種を近づけると瞬間的に引火する最低の温度のことである。", "is_correct": true, "explanation_detail": "✅ここが誤りですね！火種を近づけて燃えるのは「引火点」の説明です。「発火点」は火種がなくても勝手に燃え出す温度のことです。" },
      { "order_index": 4, "choice_text": "燃焼範囲とは、可燃性ガスが空気と混ざって燃焼（爆発）を起こすことができる濃度の範囲のことである。", "is_correct": false, "explanation_detail": "○正しい説明です。薄すぎても濃すぎても燃えません。" },
      { "order_index": 5, "choice_text": "自然発火とは、物質が常温の空気中で自然に発熱し、その熱が蓄積して発火点に達し燃え出す現象である。", "is_correct": false, "explanation_detail": "○正しい説明です。天ぷら油の拭きカスなどで起こります。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "燃焼・消火",
    "subcategory": "F02",
    "difficulty": 3,
    "question_text": "粉じん爆発の特徴や条件に関する記述のうち、不適切なものはどれか。",
    "hint_text": "💡考え方のヒント：粉じん爆発は、小麦粉やアルミ粉などが空中に舞い上がって爆発する現象です。ガス爆発と同じように「燃えやすい濃度の範囲（燃焼範囲）」が存在します。",
    "pitfall_text": "🐾よくある落とし穴：「ホコリが浮いていればいつでも爆発する」と思いがちですが、濃すぎても薄すぎても爆発しません。適度な濃度が必要です。",
    "choices": [
      { "order_index": 1, "choice_text": "粉じんが空気中に浮遊していれば、その濃度がどれほど薄くても（または濃くても）常に爆発の危険性がある。", "is_correct": true, "explanation_detail": "✅ここが誤りです！粉じん爆発にもガスと同じように「爆発可能な濃度の範囲（上限と下限）」があります。" },
      { "order_index": 2, "choice_text": "一度爆発が起きると、その爆風で床の粉じんが舞い上がり、さらに大規模な二次爆発を引き起こすことがある。", "is_correct": false, "explanation_detail": "○正しい記述です。これが粉じん爆発が甚大な被害をもたらす理由です。" },
      { "order_index": 3, "choice_text": "一般に、ガス爆発と比べて着火させるために大きなエネルギー（火種）を必要とするため、着火自体はしにくい。", "is_correct": false, "explanation_detail": "○正しい記述です。ガスよりは火がつきにくいですが、一度つくと大爆発します。" },
      { "order_index": 4, "choice_text": "有機物の粉じん爆発では、酸素が足りずに不完全燃焼を起こし、大量の一酸化炭素が発生する危険がある。", "is_correct": false, "explanation_detail": "○正しい記述です。一酸化炭素中毒の危険も伴います。" },
      { "order_index": 5, "choice_text": "粉じんの粒子が大きい（粗い）ほど、空中に長く浮遊できないため爆発は起こりにくくなる。", "is_correct": false, "explanation_detail": "○正しい記述です。細かいパウダー状であるほど危険です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "燃焼・消火",
    "subcategory": "F03",
    "difficulty": 3,
    "question_text": "各種消火剤と、それが持つ「主な消火効果」の組み合わせとして、誤っているものはどれか。",
    "hint_text": "💡ここがポイント：油火災（ガソリンなど）には、泡で覆って酸素を断つ「窒息消火」か、粉末で反応を止める「抑制効果」が有効です。二酸化炭素は酸素を押し出すから窒息効果ですね。",
    "pitfall_text": "🐾よくある落とし穴：二酸化炭素はドライアイスの仲間だから「冷却効果」がメインだと思われがちですが、実は「窒息効果」が一番の武器なんです。",
    "choices": [
      { "order_index": 1, "choice_text": "粉末消火剤 ── 燃焼の連鎖反応を化学的に断ち切る「抑制効果（負触媒効果）」と窒息効果", "is_correct": false, "explanation_detail": "○正しい組み合わせです。" },
      { "order_index": 2, "choice_text": "二酸化炭素消火剤 ── ドライアイスの冷気を利用して熱を奪う「冷却効果」が主である", "is_correct": true, "explanation_detail": "✅ここが誤りですね！二酸化炭素の主な消火原理は、酸素を追い出す「窒息効果」です。冷却はあくまでオマケ程度の効果しかありません。" },
      { "order_index": 3, "choice_text": "水溶性液体用泡消火剤 ── 油の表面を泡で覆い、酸素の供給を遮断する「窒息効果」", "is_correct": false, "explanation_detail": "○正しい組み合わせです。アルコール等には専用の泡を使います。" },
      { "order_index": 4, "choice_text": "強化液消火剤 ── 水分の蒸発を利用して熱源から熱を奪う「冷却効果」", "is_correct": false, "explanation_detail": "○正しい組み合わせです。強化液の主成分は水なので、メインは冷却です。" },
      { "order_index": 5, "choice_text": "乾燥砂 ── 燃えているものを物理的に覆い隠して酸素を断つ「窒息効果」", "is_correct": false, "explanation_detail": "○正しい組み合わせです。最も原始的で確実な窒息消火です。" }
    ]
  },
  {
    "exam_term": 3,
    "category": "物理・化学",
    "subcategory": "P05",
    "difficulty": 3,
    "question_text": "物質の「物理変化」と「化学変化」の区別について、次のうち「物理変化」に該当する現象はどれか。",
    "hint_text": "💡考え方のヒント：物理変化は「形や状態（固体・液体・気体）が変わるだけ」で元の物質のままです。化学変化は「全く別の新しい物質に生まれ変わる」現象です。",
    "pitfall_text": "🐾よくある落とし穴：「とける」という言葉にご注意！「熱でドロドロにとける（融解）」は形が変わっただけなので物理変化ですが、「酸にジュワッととける」のは全く別の物質になる化学変化なんです。",
    "choices": [
      { "order_index": 1, "choice_text": "鉄板を屋外に放置していたら、表面が赤茶色にサビてしまった。", "is_correct": false, "explanation_detail": "×サビるのは鉄が酸素と結びついて「酸化鉄」という別物になる「化学変化」です。" },
      { "order_index": 2, "choice_text": "鉄板に塩酸を垂らすと、水素の泡を出しながら溶けていった。", "is_correct": false, "explanation_detail": "×酸に溶けるのは、化学反応を起こして別の物質になる「化学変化」です。" },
      { "order_index": 3, "choice_text": "固体のパラフィン（ロウソクの成分）を加熱したら、ドロドロの液体に溶けた。", "is_correct": true, "explanation_detail": "✅そのとおり！熱で状態が固体から液体に変わった（融解）だけなので、「物理変化」になります。" },
      { "order_index": 4, "choice_text": "マッチの軸を擦って火をつけると、炎を上げて燃え尽きた。", "is_correct": false, "explanation_detail": "×「燃焼」は物質が酸素と激しく結びつく代表的な「化学変化」です。" },
      { "order_index": 5, "choice_text": "ガソリンの蒸気に火花が散り、爆発的に燃焼した。", "is_correct": false, "explanation_detail": "×爆発も非常に激しい「化学変化」の一つです。" }
    ]
  },



  // ↑↑↑ ここまで ↑↑↑
  // ※これが一番最後なので、最後の } の後ろにカンマ「,」はあってもなくても大丈夫です。

];