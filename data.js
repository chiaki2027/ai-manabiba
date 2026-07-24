// ============================================================
// AIまなびば コンテンツデータ
// 動画や記事を追加するときは、このファイルだけを編集すれば
// ページに自動で反映されます。index.html は触らなくてOKです。
//
// ▼動画1本の書き方（項目がないものは null または [] にする）
// {
//   title:   "動画タイトル",
//   category:"教務事務系" または "授業系",
//   stars:   1〜3,
//   video:   "SharePointの動画URL"（準備中なら null）,
//   forms:   "課題FormsのURL"（課題なしなら null）,
//   samples: [ { label: "表示名", url: "URL" }, ... ]（なければ []）,
//   demo:    { label: "表示名", url: "URL" }（なければ null）,
//   thumb:   "thumbs/vXX.webp",
//   isNew:   true を付けるとNEW!バッジが出る（古くなったら行ごと削除）
// }
// ============================================================

const DATA = {
  updated: "2026-07-17", // 全14本公開（準備中3本→公開に切替）

  // AI活用ガイドライン（タイトル横のボタン）。url を空にするとボタンは非表示。
  // SharePointにPDFを置いて共有リンクをここに貼る。
  guideline: { label: "AI活用ガイドライン", url: "https://isiglobal000.sharepoint.com/:b:/s/a_byUser-AI_2026/IQDC_hn8zWGtT4nkWi0lV5EbATNUSczp1JimpCTg675ssiE?e=5jL5zl" },

  videos: [
    // ---------- 教務事務系 ----------
    {
      title: "いろいろなAIの使い分け",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQDokbMyFwoORrYzY0cwIRtiAZOfH6KoZ6b_A_gHb9URPiQ?e=kxETQ3",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UMkpKSDZOQ1MzRUwxVVZMMFo4SFExTktPWS4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v01.webp"
    },
    {
      title: "AIに指示するときの基本",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQAX0Kn4KLp2Rq6Zat-IIKG7ARUBQ9A43ktiidcxfCXRi30?e=QxDP0T",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UQzNTMVdFSElXMjNJRldXUFNJVE1XNEczNy4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v02.webp"
    },
    {
      title: "MS365とClaudeをつなげる（MCP）",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQCNm4nApLu1RoUsuafrzp5QASM306jyMYKu21yQ4G75wgY?e=DHXYdS",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UMlo1REs4TjFLSDZIWFhLQjhISTI4MTJCQy4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v03.webp"
    },
    {
      title: "Coworkでフォルダを整理する",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQBw5JxfR_PnQbgAQJN9kOF2AZYAW4OPkxkI_nGyXVs2vS0?e=nBi9uy",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UNTBDMkRNWFhCWUtMSExJRTFJT0s3VVNHRC4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v04.webp"
    },
    {
      title: "プロジェクト機能を使う",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQDGAT-DGldNRLn5IE75EaLvAefSAU1D5i-UYA9nKPkuHIM?e=CSadtj",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UMjMzWVY0NUJDRDNCRFQzT0NNTjBFS0lCNi4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v05.webp"
    },
    {
      title: "Claude in Excel 基本編",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQCyGVzT6R31QY7m_gmDsQKZAfh8fwq-0NCCrOKeAs6fpPE?e=6OLj9V",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5URElWTkk0WlIxSlVFWU5UTzNPNlVaVU9CRC4u",
      samples: [
        { label: "名簿サンプル（デモ1）", url: "https://isiglobal000.sharepoint.com/:x:/s/a_byUser-AI_2026/IQBbTEjMM_M7T7d8_bM_8l4QAQGQFky7W0p-_90gUN_ON-I?e=4NSsdg" },
        { label: "アンケートサンプル（デモ2・3）", url: "https://isiglobal000.sharepoint.com/:x:/s/a_byUser-AI_2026/IQDNjlrk-w-fSoQS3hqmm4NfAXwWqIbdO6vrWgyi2IYjfuo?e=bN8hww" }
      ],
      demo: null,
      thumb: "thumbs/v06.webp"
    },
    {
      title: "テストの成績データ分析",
      category: "教務事務系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQDTekw6I7YKRqa35fUooxatAemMkYmIOA9NmP826UvKK_4?e=bWeK4W",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UN0RTNFZJVlI1NTdEWDJSUkQzREkyVTFaWS4u",
      samples: [
        { label: "練習用サンプルファイル", url: "https://isiglobal000.sharepoint.com/:x:/s/a_byUser-AI_2026/IQDHLaEg3Z_yT7LW7qOhyQYRAWiMN5hveEZaHMiFkehzI1Y?e=uyQvgB" }
      ],
      demo: { label: "AIの出力結果", url: "https://isiglobal000.sharepoint.com/:x:/s/a_byUser-AI_2026/IQBnK9bPpVIQRqIZaEvmPli5AZVkT7H5p8bCvjzTIpaWiys?e=GZoTVC" },
      thumb: "thumbs/v07.webp"
    },

    // ---------- 授業系 ----------
    {
      title: "日本語教育でAIを使う際の注意点",
      category: "授業系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQBEfYcHHzkOSItf7tZetEBuAUgNF_CmpB-keNS9BlOOCZw?e=yqeZ81",
      forms: null,
      samples: [],
      demo: null,
      thumb: "thumbs/v08.webp"
    },
    {
      title: "AIを使わない判断",
      category: "授業系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQBtPAHIZt56SJE9yidqbXHqAbWPuGswjzSkLGyYg5iXzS0?e=AY8VBs",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UN0pOSlhBVTZOWjdPU1RQWjlEVEdOWFRaVi4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v09.webp"
    },
    {
      title: "アーティファクト機能で簡易ツールをつくる",
      category: "授業系",
      stars: 1,
      isNew: true,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQAKFJkrMryBR7wWEkN75vCBAXlRrK1-r6oOGDhXOfatLtc?e=vE97Mx",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UNVlHUEw1T1lGMTRSQ0FTNUc2OTJCN0QwUS4u",
      samples: [],
      demo: { label: "会話お題ルーレット", url: "apps/roulette.html" },
      thumb: "thumbs/v10.webp"
    },
    {
      title: "練習問題の選択肢を鍛える",
      category: "授業系",
      stars: 1,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQD05CKkd7SsTLXkJbHZmD_TAbdpkvxTYSJRFtN_dzqGlVs?e=kUUZEr",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UME5aOE4zNlZBU1RWSUdJRlE0S1NVMkw5Ni4u",
      samples: [],
      demo: null,
      thumb: "thumbs/v11.webp"
    },
    {
      title: "手書きの作文を自動添削する",
      category: "授業系",
      stars: 2,
      isNew: true,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQAK-NUyJYfYT64r3ZO9Pc6KAQ4LKbk6VN8BALwLj1-Vu98?e=tAT2Hu",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UOFZUUkNOMFoyNEIzVE9XSUhQNkNDNjhLSi4u",
      samples: [],
      demo: { label: "AIの出力結果", url: "https://isiglobal000.sharepoint.com/:b:/s/a_byUser-AI_2026/IQB1MVMPYkEoTKXyM5F0KVtfASWdgpRxVfkw8h97qZV-mRw?e=vQXJ9N" },
      thumb: "thumbs/v12.webp"
    },
    {
      title: "漢字の成り立ちやコロケーションを視覚的に提示する",
      category: "授業系",
      stars: 3,
      isNew: true,
      video: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQAXt78tYMS7SpUOrTlZhGvTAYRA-uENXMoVRRIqlQG9q8I?e=SwdMN7",
      forms: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UQ1QzM0FHSzZCN1EwQ1RYVE8zTDMzRFNDMi4u",
      samples: [],
      demo: { label: "アプリデモ動画", url: "https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQDq2fVAjAZjQYWYTuDmI2AGAd864_1VJYrYv-_vPR48_Hs?e=W0yfwE" },
      thumb: "thumbs/v13.webp"
    }
    // ※「学生にも共有できるHTMLアプリをつくる」(v14)は、学生配布アプリの事前申請運用化に伴い2026-07-17に非表示化。
    //   動画・七夕体験アプリ本体は残存。運用が変われば下記を復活させる：
    //   { title:"学生にも共有できるHTMLアプリをつくる", category:"授業系", stars:3, isNew:true,
    //     video:"https://isiglobal000.sharepoint.com/:v:/s/a_byUser-AI_2026/IQCeGUFCU4RTSokDD9bzf529AcMfXK2ImheJMnGa3pezuwA?e=rcCxfn",
    //     forms:"https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=rUgncyEqgkGgeCc_SIN6ZqmWniSElbhPq_377FiwKS5UNjFFQlk5RjEwTE9aNVpMRzlQSzQ3WU9ZNS4u",
    //     samples:[], demo:{ label:"七夕体験アプリ", url:"https://chiaki2027.github.io/Claude/" }, thumb:"thumbs/v14.webp" }
  ],

  articles: [
    { source: "iPortal", title: "AI×授業①~AIを外国語教育に使わない選択肢はもうない~", url: "https://isiglobal000.sharepoint.com/:u:/s/faqbeta_byUser/IQB_iKav2PWMT6gCpP9eHZ6DAe2iXiF3Qjpw7ZJIP-S3ZbU?e=kIhPjF" },
    { source: "iPortal", title: "AI×授業②~教育現場でのAI授業実践例~", url: "https://isiglobal000.sharepoint.com/:u:/s/faqbeta_byUser/IQD19GJupGdjSKp6neAjbPV1AZjvpP_5pMPVblgE98HAcBw?e=9ni3wV" },
    { source: "iPortal", title: "AI×授業③~教育現場でのAI授業実践例~", url: "https://isiglobal000.sharepoint.com/:u:/s/faqbeta_byUser/IQDHOoQuZ8FVQKgiPNuE3PeoASEnZtya8ibCsED5INT_9B4?e=gZ1ldl" },
    { source: "note", title: "Claudeでジグソーリーディングの教材をつくる", url: "https://note.com/nihongo_momoiro/n/n3550c22f017f" },
    { source: "note", title: "訂正フィードバックの科学 そのさり気ない｢言い直し｣届いてますか？", url: "https://note.com/nihongo_momoiro/n/n5e2fcd0fe7af" },
    { source: "note", title: "Google AI Studio × TTS でJLPTの聴解音声を簡単作成", url: "https://note.com/nihongo_momoiro/n/nbd078bb2a598" },
    { source: "note", title: "chatGPT 漢字の授業で学生の主体性を高める", url: "https://note.com/nihongo_momoiro/n/nd412bf0dfff5" },
    { source: "note", title: "なぜ伝わらないの？を授業にする 異文化インシデント·ディスカッション", url: "https://note.com/nihongo_momoiro/n/n82f89c3d0677" }
  ]
};
