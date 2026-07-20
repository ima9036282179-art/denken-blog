---
title: "電験三種 理論の基礎「磁気・電磁誘導」超入門——起電力 e=vBl とインダクタンスを整理する"
description: "電験三種・理論科目の磁気・電磁誘導分野を、静電気分野との対応関係を使って整理。フレミングの右手の法則、起電力e=vBl、磁気回路とインダクタンスL=N²/Rの意味を、図と例題で丁寧に解説します。"
pubDate: 2026-09-06
category: "科目別攻略"
tags: ["科目別攻略", "電験三種", "理論", "磁気", "電磁誘導", "基礎"]
eyecatch: "/denken-blog/images/eyecatch/riron-jiki.svg"
---

[前回の記事](/denken-blog/blog/denken3-riron-seidenki-kiso/)では、静電気分野の電位・電界・電束密度を整理しました。今回は、多くの人が2つ目のつまずきポイントにする**磁気・電磁誘導**の分野です。

実はこの分野、**静電気の考え方とセットで理解すると、驚くほどスムーズに頭に入ります**。両者を対応させながら整理していきます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0;font-size:0.85rem;color:var(--text-muted);">
📌 本記事は基礎概念の整理を目的としています。試験対策としての網羅性より、「意味を理解すること」を優先して構成しています。
</div>

---

## 静電気と磁気は「対応関係」で覚えると楽になる

静電気分野で登場した「電位・電界・電束密度」には、磁気分野に**そっくりな対応物**が存在します。

| 静電気の量 | 磁気の対応物 |
|-----------|-------------|
| 電位 V | 起磁力 NI（コイルの巻数×電流） |
| 電界の強さ E | 磁界の強さ H |
| 電束密度 D | 磁束密度 B |
| 静電容量 C | インダクタンス L |

一つひとつを完全に別物として覚えるのではなく、**「静電気の親戚」として磁気の公式を捉える**と、暗記量を大きく減らせます。

---

## 起電力 e = vBl——導体棒が磁界を横切るとき

導体棒が磁界の中を動くと、導体棒には**起電力（誘導起電力）** が生じます。これを表す式が次の通りです。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">e = vBl</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">e：起電力 [V]　v：導体棒の速度 [m/s]　B：磁束密度 [T]　l：導体棒の長さ [m]</p>
</div>

この式が成り立つ理由は、フレミングの右手の法則で理解できます。

![フレミングの右手の法則と起電力e=vBlの関係](/denken-blog/images/diagrams/fleming-right-hand.svg)

<p style="text-align:center;font-size:0.78rem;color:var(--text-muted);margin-top:-1.25rem;">フレミングの右手の法則。親指＝速度v、人差し指＝磁束密度B、中指＝起電力eの向きを表す。</p>

右手の**親指・人差し指・中指を、それぞれ直角に開いた形**をイメージしてください。

- 親指：導体棒の**速度 v** の向き
- 人差し指：**磁束密度 B** の向き
- 中指：発生する**起電力 e** の向き

この法則は「なぜこの3つの向きの関係になるのか」を丸暗記するより、**指の形そのものを覚えてしまう**方が、試験本番で素早く使えるようになります。

---

## 磁気回路とインダクタンス L = N²/R

コイルに電流を流すと磁束が発生します。この「電流のかけやすさと磁束のできやすさ」の関係を表すのが、磁気回路という考え方です。

静電気回路にオームの法則(E=RI)があるように、**磁気回路にもオームの法則に似た関係**があります。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">NI = ΦR</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">NI：起磁力 [A]（コイルの巻数N×電流I）　Φ：磁束 [Wb]　R：磁気抵抗 [A/Wb]</p>
</div>

この関係式から、コイルのインダクタンス(L)は次の式で表されます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">L = N² / R</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">L：インダクタンス [H]　N：コイルの巻数　R：磁気回路の磁気抵抗 [A/Wb]</p>
</div>

**巻数Nが多いほど、磁気抵抗Rが小さいほど、インダクタンスLは大きくなります。** 巻数を2倍にすると、インダクタンスは2乗、つまり4倍になる点は、計算問題でよく問われるポイントです。

<div style="background:var(--bg-card);border-left:4px solid var(--accent);padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 8px 8px 0;">
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">静電容量との対応で覚える</p>
<p style="font-size:0.88rem;margin:0;line-height:1.9;">静電容量 C は「電荷の溜めやすさ」。インダクタンス L は「磁束の作りやすさ」。<br>どちらも、電気・磁気エネルギーを蓄える働きを持つ量として対応しています。</p>
</div>

---

## 全体を整理する一覧表

| 用語 | 記号・公式 | イメージ |
|------|-----------|---------|
| 起電力（導体棒） | e = vBl | 磁界を横切る動きが電気を生む |
| 向きの判定 | フレミングの右手の法則 | 親指・人差し指・中指の関係 |
| 磁気回路のオームの法則 | NI = ΦR | 起磁力＝磁束×磁気抵抗 |
| インダクタンス | L = N²/R | 巻数の2乗に比例 |

---

## 簡単な例題で確認する

**問題**：磁束密度0.5T の磁界の中を、長さ0.4mの導体棒が2m/sの速度で、磁界に対して垂直に動いている。発生する起電力eを求めよ。

**解答**：
e = vBl = 2 [m/s] × 0.5 [T] × 0.4 [m] = 0.4 [V]

静電気の例題と同じく、**単位を意識しながら、公式にそのまま数値を代入するだけ**で答えにたどり着けます。

---

## まとめ

- 磁気分野は、静電気分野との**対応関係**で理解すると暗記の負担が減る（V⇔NI、E⇔H、D⇔B、C⇔L）
- 起電力は **e = vBl**。向きはフレミングの右手の法則で判定する
- 磁気回路のオームの法則は **NI = ΦR**
- インダクタンスは **L = N²/R**。巻数Nの2乗に比例する

次回は、直流回路の基礎——オームの法則やキルヒホッフの法則を整理していきます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1rem 0;">
<p style="font-weight:700;margin:0 0 0.5rem;">🔗 あわせて読みたい</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.75rem;">静電気分野の電位・電界・電束密度の整理は、前回の記事で解説しています。</p>
<a href="/denken-blog/blog/denken3-riron-seidenki-kiso/" style="display:inline-block;background:var(--accent);color:#fff;padding:0.45rem 1.1rem;border-radius:6px;font-size:0.85rem;font-weight:700;text-decoration:none;">静電気の基礎を読む →</a>
</div>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1.5rem 0;text-align:center;">
<span style="display:inline-block;background:var(--accent-warm);color:#fff;font-size:0.65rem;font-weight:700;padding:0.15em 0.6em;border-radius:4px;margin:0 0 0.6rem;letter-spacing:0.05em;">PR</span>
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">📘 理論科目のフルカラー教科書</p>
<p style="font-size:0.85rem;color:var(--text-muted);margin:0 0 0.9rem;line-height:1.7;">「みんなが欲しかった！電験三種 理論の教科書&問題集」なら、磁気分野もイラスト付きで理解しやすくなります。</p>
<a href="https://www.amazon.co.jp/dp/4300108811?tag=ima3burukku2-22" rel="nofollow sponsored noopener" target="_blank" style="display:inline-block;background:var(--accent-warm);color:#fff;padding:0.5rem 1.2rem;border-radius:8px;font-size:0.85rem;font-weight:700;text-decoration:none;">理論の教科書&問題集をAmazonで見る →</a>
</div>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1.5rem 0;">
<span style="display:inline-block;background:var(--accent-warm);color:#fff;font-size:0.65rem;font-weight:700;padding:0.15em 0.6em;border-radius:4px;margin:0 0 0.6rem;letter-spacing:0.05em;">PR</span>
<p style="font-weight:700;margin:0 0 0.5rem;font-size:1rem;">🧲 フレミングの法則、頭の中だけで整理しきれないときは</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.9rem;line-height:1.7;">磁気分野は独学だと特に混乱しやすいところです。電験三種に特化したオンライン講座「資格合格支援スクール【能セン】」で、体系立てて学び直してみるのもおすすめです。</p>
<a href="https://px.a8.net/svt/ejp?a8mat=4B84X1+2QU322+5TS8+5YJRM" rel="nofollow sponsored noopener" target="_blank" style="display:inline-block;background:var(--accent-warm);color:#fff;padding:0.5rem 1.2rem;border-radius:8px;font-size:0.85rem;font-weight:700;text-decoration:none;margin:0.2rem;">資格合格支援スクール【能セン】を見る →</a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B84X1+2QU322+5TS8+5YJRM" alt="">
</div>

<p style="font-size:0.75rem;color:var(--text-muted);margin-top:1.5rem;">※本記事は基礎概念の整理を目的とした情報提供記事です。アフィリエイトプログラムを利用しています。試験範囲の詳細・出題傾向は、必ず市販の過去問集や公式の試験情報でご確認ください。</p>
