---
title: "電験三種 理論の基礎「直流回路」超入門——オームの法則とキルヒホッフの法則を整理する"
description: "電験三種・理論科目の土台となる直流回路の基礎を解説。オームの法則V=IR、直列・並列の合成抵抗、キルヒホッフの第一法則・第二法則、電力の公式を、図と例題で丁寧に整理します。"
pubDate: 2026-09-13
category: "科目別攻略"
tags: ["科目別攻略", "電験三種", "理論", "直流回路", "基礎"]
eyecatch: "/denken-blog/images/eyecatch/riron-chokuryu.svg"
---

これまで[静電気](/denken-blog/blog/denken3-riron-seidenki-kiso/)と[磁気・電磁誘導](/denken-blog/blog/denken3-riron-jiki-denjiyudou-kiso/)を整理してきました。今回は、理論科目のあらゆる計算問題の**土台**になる、直流回路の基礎です。

すでに知っている内容も多いかもしれませんが、電験三種の計算問題は、結局のところ**この基本に戻ってくる**ことがほとんどです。ここで一度きちんと整理しておきましょう。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0;font-size:0.85rem;color:var(--text-muted);">
📌 本記事は基礎概念の整理を目的としています。試験対策としての網羅性より、「意味を理解すること」を優先して構成しています。
</div>

---

## オームの法則——すべての基本

直流回路の出発点は、オームの法則です。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">V = IR</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">V：電圧 [V]　I：電流 [A]　R：抵抗 [Ω]</p>
</div>

シンプルな式ですが、**V・I・Rのどれか2つが分かれば、残り1つを求められる**という汎用性の高さが重要です。電験三種の計算問題の多くは、この式を土台にして、回路がどんどん複雑になっていく構成になっています。

---

## 合成抵抗——直列と並列で計算方法が変わる

複数の抵抗をつなぐとき、直列つなぎと並列つなぎでは、合成抵抗の求め方が異なります。

![直列接続と並列接続の合成抵抗の違い](/denken-blog/images/diagrams/chokuretsu-heiretsu.svg)

<p style="text-align:center;font-size:0.78rem;color:var(--text-muted);margin-top:-1.25rem;">直列接続では抵抗値をそのまま足し算、並列接続では逆数の和の逆数で求める。</p>

### 直列接続——単純に足し算

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">R = R₁ + R₂ + R₃ + …</p>
</div>

直列つなぎでは、電流の通り道が一本道になるため、**抵抗値をそのまま足すだけ**で合成抵抗が求まります。

### 並列接続——逆数の和の逆数

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">1/R = 1/R₁ + 1/R₂ + 1/R₃ + …</p>
</div>

並列つなぎでは、電流の通り道が複数に分かれるため、**「流れやすさ（コンダクタンス）」を足し算してから、最後にもう一度ひっくり返す**という手順が必要になります。抵抗が2つだけの場合は、次の簡略式もよく使われます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">R = R₁R₂ / (R₁＋R₂)</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">抵抗が2つのときだけ使える「和分の積」の形</p>
</div>

---

## キルヒホッフの法則——複雑な回路を解くための2つのルール

抵抗が複雑に組み合わさった回路では、オームの法則だけでは解けない場合があります。そこで登場するのが、キルヒホッフの2つの法則です。

### 第一法則（電流則）——流れ込む電流と流れ出る電流は等しい

回路のある一点（節点）に注目したとき、**そこに流れ込む電流の合計と、流れ出る電流の合計は必ず等しくなります。** 電流が「途中で消えたり増えたりしない」という、当たり前のようで重要な性質です。

### 第二法則（電圧則）——閉回路の電圧の合計はゼロになる

回路の中の一周（閉回路）に注目したとき、**起電力の合計と、抵抗による電圧降下の合計は等しくなります。** 一周してもとの場所に戻ってくれば、電位も元通りになる、という考え方です。

<div style="background:var(--bg-card);border-left:4px solid var(--accent);padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 8px 8px 0;">
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">2つの法則の使い分け</p>
<p style="font-size:0.88rem;margin:0;line-height:1.9;">第一法則は「分岐点」に注目するルール。<br>第二法則は「一周する経路」に注目するルール。<br>複雑な回路では、この2つを連立方程式として組み合わせて解きます。</p>
</div>

---

## 電力の公式——3つの表し方を使い分ける

電力(P)は、オームの法則と組み合わせることで、3通りの式で表せます。

| 公式 | 使う場面 |
|------|---------|
| P = VI | 電圧と電流の両方が分かっているとき |
| P = I²R | 電流と抵抗が分かっているとき |
| P = V²/R | 電圧と抵抗が分かっているとき |

この3つは、すべて同じオームの法則（V=IR）から導かれる式です。**どれか1つを覚えれば、あとはV=IRを使って自分で導き出せる**という理解をしておくと、丸暗記の負担が減ります。

---

## 簡単な例題で確認する

**問題**：抵抗10Ωに、電圧が20V加わっている。流れる電流Iと、消費される電力Pを求めよ。

**解答**：
I = V / R = 20 [V] ÷ 10 [Ω] = 2 [A]
P = VI = 20 [V] × 2 [A] = 40 [W]

このように、**オームの法則で電流を求めてから、電力の公式に代入する**という2段階の流れは、理論の計算問題全体で繰り返し登場するパターンです。

---

## まとめ

- オームの法則 **V = IR** が、直流回路すべての土台
- 合成抵抗は、直列なら**足し算**、並列なら**逆数の和の逆数**
- キルヒホッフの第一法則は**電流**に、第二法則は**電圧**に注目するルール
- 電力は **P = VI = I²R = V²/R** の3通りで表せる

次回は、交流回路の基礎——インピーダンスや共振回路を整理していきます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1rem 0;">
<p style="font-weight:700;margin:0 0 0.5rem;">🔗 あわせて読みたい</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.75rem;">静電気・磁気の基礎解説もあわせてご覧ください。</p>
<a href="/denken-blog/blog/denken3-riron-seidenki-kiso/" style="display:inline-block;background:var(--accent);color:#fff;padding:0.45rem 1.1rem;border-radius:6px;font-size:0.85rem;font-weight:700;text-decoration:none;">静電気の基礎を読む →</a>
</div>

<p style="font-size:0.75rem;color:var(--text-muted);margin-top:1.5rem;">※本記事は基礎概念の整理を目的とした情報提供記事です。試験範囲の詳細・出題傾向は、必ず市販の過去問集や公式の試験情報でご確認ください。</p>
