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
  },
  {
    id: 4,
    category: "許可権者",
    question: "製造所等の設置許可権者について、誤っている組み合わせはどれか。",
    options: [
      "消防本部のある市町村内の移送取扱所 → 市町村長",
      "消防本部のない市町村内の製造所 → 都道府県知事",
      "2つの市町村にまたがる移送取扱所 → 都道府県知事",
      "2つの都道府県にまたがる移送取扱所 → 総務大臣",
      "消防本部のない市町村内の屋内貯蔵所 → 市町村長"
    ],
    correctIndex: 4,
    point: "消防本部がない市町村では、市町村長に許可権限がない。都道府県知事が代わりに許可する。\n\n【⚠️ よくある勘違い】\n「市町村の施設だから市町村長」と思いがち。しかし消防本部がない小さな村では、許可権限自体が知事に移る。",
    explanations: [
      "正しい。消防本部があれば市町村長が許可。",
      "正しい。消防本部がなければ知事が許可。",
      "正しい。複数市町村にまたがるパイプラインは知事。",
      "正しい。県をまたぐ大規模パイプラインは国（総務大臣）。",
      "正解（誤り）。 消防本部がなければ都道府県知事が許可する。"
    ]
  },
  {
    id: 5,
    category: "仮使用",
    question: "製造所等の「仮使用」について、正しいものはどれか。",
    options: [
      "譲渡前に市町村長の承認なく仮に使用すること",
      "変更工事中、工事部分以外を承認を受けて使用すること",
      "品名や数量を変更して承認前に仮に使用すること",
      "変更工事が終わった部分を順次使用すること",
      "工事部分以外を10日以内の期間だけ使用すること"
    ],
    correctIndex: 1,
    point: "仮使用＝「工事してない部分」を「承認を受けて」「完成検査前に」使うこと。この3要素がポイント。\n\n【⚠️ よくある勘違い】\n「工事が終わった部分」を選ぶトラップに注意。「工事が終わった部分」ではなく、「工事と関係ない部分」を使うのが仮使用。",
    explanations: [
      "誤り。仮使用は「変更工事」の場面。譲渡とは無関係。",
      "正解。 これが仮使用の定義そのもの。",
      "誤り。品名・数量の変更は別の届出。仮使用とは違う。",
      "誤り。工事が「終わった部分」ではなく、工事「していない部分」を使う。",
      "誤り。「10日以内」という期間制限はない。承認があれば使える。"
    ]
  },
  {
    id: 6,
    category: "取扱作業",
    question: "甲種または乙種危険物取扱者が、無資格者の危険物取扱作業に立ち会う際の義務として、消防法上定められている[ A ]および[ B ]に当てはまる語句の組合せで、正しいものはどれか。\n\n「取扱作業に従事する者が、法の定める[ A ]の技術上の基準を遵守するように監督するとともに、[ B ]これらの者に指示を与えなければならない。」",
    options: [
      "A=位置、構造又は設備　B=保安の確保に支障を生ずる場合は",
      "A=貯蔵又は取扱　B=災害の未然防止のため",
      "A=貯蔵又は取扱　B=必要に応じて",
      "A=位置、構造又は設備　B=災害の未然防止のため",
      "A=貯蔵又は取扱　B=保安の確保に支障を生ずる場合は"
    ],
    correctIndex: 2,
    point: "立会いで監督するのは、日々の「どう貯蔵し、どう扱うか」というソフト面のルール。指示は「必要に応じて」その都度行う。\n\n【⚠️ よくある勘違い】\n「位置、構造又は設備」と「貯蔵又は取扱」は乙4の2大キーワード。施設を「造る時」か、日々「使う時」か、主語を意識して読み分ける。",
    explanations: [
      "Aが誤り。「位置、構造又は設備」は、施設を建築・改造する際のハード面の基準。日々の作業立会いとは無関係。",
      "Bが誤り。いかにもそれらしい「災害の未然防止のため」などの言葉に騙されないこと。",
      "正解。無資格者が「貯蔵・取扱」のルールを守るよう監督し、「必要に応じて」的確な指示を出す義務がある。",
      "A、Bともに誤り。",
      "Bが誤り。法律上はシンプルに「必要に応じて」と定められている。"
    ]
  },
  {
    id: 7,
    category: "免状",
    question: "都道府県知事による危険物取扱者免状の「返納命令」の対象となる事由として、正しいものはどれか。",
    options: [
      "危険物取扱者が、心身の故障により危険物の取扱作業ができなくなったとき",
      "消防法または消防法に基づく命令の規定に違反したとき",
      "免状の交付を受けてから、危険物の取扱作業に3年以上従事しなかったとき",
      "危険物保安監督者に選任されることを、正当な理由なく拒んだとき",
      "誤って免状を汚損または破損してしまったとき"
    ],
    correctIndex: 1,
    point: "返納命令（いわゆる免許取り消し）は、消防法違反という「悪いこと（法律違反）」をした時だけの重いペナルティ。\n\n【⚠️ よくある勘違い】\n「3年以上従事しなかった」は運転免許のイメージに引っ張られやすいトラップ。ペーパードライバーで失効することはない。",
    explanations: [
      "誤り。病気やケガで作業ができなくなっても、免状を取り上げられることはない。",
      "正解。法違反は一発で免状返納命令（免許取り消し）の対象になり得る。",
      "誤り。危険物の免状は一度取れば一生モノ。更新制度や放置による失効はない。",
      "誤り。保安監督者を引き受けるかどうかは本人の自由。ペナルティの対象ではない。",
      "誤り。汚損・破損した場合は、ペナルティではなく「再交付の申請」をすれば新しいものがもらえる。"
    ]
  },
  {
    id: 8,
    category: "保安監督者",
    question: "貯蔵または取り扱う危険物の品名や「指定数量の倍数にかかわりなく」、常に危険物保安監督者を定めなければならない施設はどれか。",
    options: [
      "屋内貯蔵所",
      "販売取扱所",
      "屋外貯蔵所",
      "移動タンク貯蔵所",
      "給油取扱所"
    ],
    correctIndex: 4,
    point: "不特定多数の一般客が訪れる「ガソリンスタンド（給油取扱所）」は、規模に関係なく絶対に保安監督者が必要。",
    explanations: [
      "誤り。屋内貯蔵所は、原則として指定数量の倍数などが一定以上の場合に選任が必要となる。",
      "誤り。販売取扱所（ホームセンターなど）も、倍数などの条件によって選任が必要になる。",
      "誤り。屋外貯蔵所も、指定数量の倍数等に応じて選任要否が決まる。",
      "誤り。移動タンク貯蔵所（タンクローリー）は、そもそも保安監督者を置くルールがない（有資格者が乗車すればOK）。",
      "正解。給油取扱所は火災リスクが高いため、扱う量に関わらず全店で保安監督者の選任が必須。"
    ]
  },
  {
    id: 9,
    category: "保有空地",
    question: "製造所等の周囲に確保すべき「保有空地」に関する記述として、正しいものはどれか。なお、特例基準が適用される場合は除く。",
    options: [
      "簡易タンク貯蔵所を屋外に設置する場合、周囲に1m以上の保有空地が必要である。",
      "屋外貯蔵所は、施設の敷地面積に応じた幅の保有空地が必要である。",
      "屋内貯蔵所は、建物の壁・柱・床を耐火構造とすれば保有空地は不要になる。",
      "屋外タンク貯蔵所は、タンクの水平断面の半径と等しい距離の保有空地が必要である。",
      "移動タンク貯蔵所を屋外に駐車する場合、専用の保有空地を確保しなければならない。"
    ],
    correctIndex: 0,
    point: "保有空地は「延焼防止のための空き地」。屋外に置く簡易タンクには「1m以上」の空地が必要と覚えよう。",
    explanations: [
      "正解。屋外の簡易タンク貯蔵所には、周囲に1m以上の空地が必要。",
      "誤り。保有空地の幅は、敷地面積ではなく「指定数量の倍数」によって広さが決まる。",
      "誤り。耐火構造であっても、指定数量が一定数を超えれば保有空地は必要。",
      "誤り。屋外タンクの空地は「指定数量の倍数」や「直径・高さ」等の複雑な計算で決まる。単なる半径ではない。",
      "誤り。移動タンク貯蔵所には常置場所（駐車スペース）は必要だが、建物を守るための「保有空地」という概念はない。"
    ]
  },
  {
    id: 10,
    category: "消火設備",
    question: "製造所等に設置する消火設備は第1種から第5種に区分されている。「第5種の消火設備」に該当するものはどれか。",
    options: [
      "スプリンクラー設備",
      "ハロゲン化物消火設備",
      "泡を放射する小型の消火器",
      "屋内消火栓設備",
      "泡を放射する大型の消火器"
    ],
    correctIndex: 2,
    point: "消火設備は、大掛かりなもの（第1種）から身近なもの（第5種）の順。一番手軽な「小型消火器」や「水バケツ」が第5種。\n\n【⚠️ よくある勘違い】\n「第1種＝小さい」ではなく、「第1種＝一番デカい」です。数字が大きくなるほど手軽なものになります。",
    explanations: [
      "誤り。スプリンクラー設備は【第2種】。固定式の大型設備。",
      "誤り。ハロゲン化物消火設備など（粉末、CO2などの固定設備）は【第3種】。",
      "正解。持ち運びできる「小型消火器」や、乾燥砂、水バケツなどは最も簡易的な【第5種】。",
      "誤り。屋内・屋外消火栓設備は、消防ポンプを使う強力な【第1種】。",
      "誤り。「大型」の消火器（車輪がついていて引っ張るようなサイズ）は【第4種】。"
    ]
  },
  {
    id: 11,
    category: "販売取扱所",
    question: "第1種販売取扱所の位置、構造及び設備の技術上の基準について、誤っているものはどれか。",
    options: [
      "危険物を配合する室の床面積は、6m2以上10m2以下としなければならない。",
      "第1種販売取扱所の用に供する部分には、窓を設けてはならない。",
      "建築物の1階に設置しなければならない。",
      "危険物を配合する室には、可燃性の蒸気又は可燃性の微粉を屋根上に排出する設備を設けなければならない。",
      "見やすい箇所に、第1種販売取扱所である旨を表示した標識及び防火に関し必要な事項を掲示した掲示板を設けなければならない。"
    ],
    correctIndex: 1,
    point: "窓を作ることは禁止されていません。ただし、延焼を防ぐために窓や出入口には「防火設備（網入ガラスなど）」を設ける必要があります。\n\n【⚠️ よくある勘違い】\n「絶対に窓を作ってはいけない」という「〜してはならない」系の全否定は、誤り選択肢（引っかけ）である確率が非常に高いです。",
    explanations: [
      "正しい。「6m2以上10m2以下」は試験で超頻出の数字です。必ず暗記しましょう。",
      "正解（誤り）。「窓を設けてはならない」という極端な制限はありません。網入ガラス等にすれば設置可能です。",
      "正しい。ガソリンスタンドなどと同様に、避難や消火がしやすい「1階」に設置する義務があります。",
      "正しい。蒸気が部屋に溜まると引火・爆発の危険があるため、屋根上への排出設備が必須です。",
      "正しい。標識と掲示板の設置は、すべての危険物施設における基本ルールです。"
    ]
  },
  {
    id: 12,
    category: "屋外貯蔵所",
    question: "次のうち、屋外貯蔵所に貯蔵できないものはどれか。",
    options: [
      "硫黄",
      "軽油（第2石油類）",
      "エチルアルコール（アルコール類）",
      "重油（第3石油類）",
      "ガソリン（第1石油類）"
    ],
    correctIndex: 4,
    point: "「屋外貯蔵所（ドラム缶などの野積み）」には、引火点が0℃未満の極めて危険な液体（ガソリンなど）は置けません。",
    explanations: [
      "貯蔵できる。硫黄（第2類）は屋外貯蔵が認められています。",
      "貯蔵できる。軽油など第2石油類（引火点21℃以上）は屋外貯蔵可能です。",
      "貯蔵できる。アルコール類も屋外貯蔵が認められています。",
      "貯蔵できる。重油など第3石油類（引火点70℃以上）も屋外貯蔵可能です。",
      "正解（貯蔵できない）。ガソリンは引火点が-40℃以下と非常に低く、屋外に置くと常に引火のリスクがあるため貯蔵不可です。"
    ]
  },
  {
    id: 13,
    category: "取扱いの基準",
    question: "製造所等における危険物の貯蔵及び取扱いのすべてに共通する技術上の基準について、誤っているものはどれか。",
    options: [
      "可燃性の液体や可燃性の蒸気等が漏れ又は滞留するおそれのある場所では、電線と電気工具とを完全に接続し、かつ火花を発する工具等を使用してはならない。",
      "危険物を貯蔵し、又は取り扱う建築物その他の工作物又は設備は、危険物の性質に応じ、遮光又は換気を行わなければならない。",
      "危険物が残存している設備、機械器具又は容器等を修理する場合は、必ず危険物保安監督者の立会いのもとに行わなければならない。",
      "危険物は、温度計や湿度計等を監視して、危険物の性質に応じた適正な温度又は湿度を保つように貯蔵し、又は取り扱わなければならない。",
      "危険物を貯蔵し、又は取り扱う場合には、危険物が漏れ、あふれ又は飛散しないように必要な措置を講じなければならない。"
    ],
    correctIndex: 2,
    point: "修理をする時は「立会い」以前の問題として、まず「安全な場所で、危険物を完全に除去してから」行うのが絶対のルールです。",
    explanations: [
      "正しい。火花による引火を防ぐための当然の措置です。",
      "正しい。直射日光を避け、蒸気を逃がすための遮光・換気は基本です。",
      "正解（誤り）。修理は危険物を「完全に除去した後」に行います。また、立会いは「甲種または乙種の取扱者」であり、保安監督者が必須なわけではありません。",
      "正しい。計器による温度・湿度の適切な管理は法令上の義務です。",
      "正しい。漏えいや飛散の防止は、貯蔵・取扱いの大原則です。"
    ]
  },
  {
    id: 14,
    category: "消火設備区分",
    question: "製造所等に設置する消火設備の区分について、正しいものはどれか。",
    options: [
      "消火設備は、危険物の類別に対応して第1類から第6類までに区分されている。",
      "第4類の危険物に適応する消火設備を、第4種消火設備という。",
      "泡を放射する大型の消火器は、第3種の消火設備である。",
      "乾燥砂は、第5種の消火設備である。",
      "小型の消火器は、第4種の消火設備である。"
    ],
    correctIndex: 3,
    point: "消火設備は規模の大きさで「第1種（一番デカい）〜第5種（一番手軽）」に分かれます。バケツや砂、小型消火器は「第5種」です。",
    explanations: [
      "誤り。消火設備は「1種〜5種」の5区分です。危険物の「第1類〜第6類」という分類とは無関係です。",
      "誤り。上記と同じく、設備の「種別」と危険物の「類別」は連動していません。",
      "誤り。大型の消火器（車輪がついて引っ張るサイズ）は【第4種】です。",
      "正解。乾燥砂、水バケツ、膨張ひる石などは、最もアナログで簡易的な【第5種】に該当します。",
      "誤り。持ち運びできる一般的な小型の消火器は【第5種】です。"
    ]
  },
  {
    id: 15,
    category: "運搬の基準",
    question: "危険物を収納した運搬容器を車両で運搬する場合の積載方法等の基準について、誤っているものはどれか。",
    options: [
      "指定数量以上の危険物を運搬する場合には、車両に「危」と表示した標識を掲げなければならない。",
      "指定数量以上の危険物を運搬する場合において、休憩のため車両を一時停止させるときは、安全な場所を選び、保安に注意しなければならない。",
      "運搬容器の外部に品名、数量などを表示して積載しなければならない。",
      "類を異にする危険物の混載は、いかなる場合であってもすべて禁止されている。",
      "指定数量以上の危険物を運搬する場合には、当該危険物に適応する消火設備を備えなければならない。"
    ],
    correctIndex: 3,
    point: "違う類同士でも、安全な組み合わせ（第4類と第2類・第3類など）であれば混載（一緒に積むこと）が特例として認められています。\n\n【⚠️ よくある勘違い】\n混載の組み合わせは「指定数量の1/10以下ならすべてOK」という特例もあります。これも本番でよく出るので併せて覚えておきましょう。",
    explanations: [
      "正しい。「危」の標識は、指定数量以上の運搬時に必須です（車両の前後両方）。",
      "正しい。長距離輸送時の休憩などでは、一時停止場所の安全確保が義務付けられています。",
      "正しい。何がどれだけ積まれているか、容器外部への表示義務があります。",
      "正解（誤り）。「すべて禁止」ではありません。「4と2・3」「5と2・4」などの特定の組み合わせは混載可能です。",
      "正しい。万が一に備え、積んでいる危険物に有効な消火設備を載せる義務があります。"
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
            color: '#111827',
            whiteSpace: 'pre-wrap'
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
            if (index === selected && index === quiz.correctIndex) {
              // 自分が選んだ正解 → 全体薄緑
              bgColor = '#e8f5e9';
              numBg = '#50b875';
              numColor = '#ffffff';
              numBorder = '1px solid #50b875';
            } else if (index === selected && index !== quiz.correctIndex) {
              // 自分が選んだ間違い → 全体ピンク
              bgColor = '#fae8e8';
              numBg = '#eb6a6a';
              numColor = '#ffffff';
              numBorder = '1px solid #eb6a6a';
            } else if (index === quiz.correctIndex) {
              // 選んでないが正解 → 背景白、数字だけ緑
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