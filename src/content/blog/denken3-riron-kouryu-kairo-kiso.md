---
title: "電験三種 理論の基礎「交流回路」超入門——インピーダンスと共振回路を整理する"
description: "電験三種・理論科目の交流回路の基礎を解説。誘導性リアクタンスXL、容量性リアクタンスXC、RLC直列回路のインピーダンスZ、共振周波数の考え方を、図と例題で丁寧に整理します。"
pubDate: 2026-09-20
category: "科目別攻略"
tags: ["科目別攻略", "電験三種", "理論", "交流回路", "基礎"]
eyecatch: "/denken-blog/images/eyecatch/riron-kouryu.svg"
---

[静電気](/denken-blog/blog/denken3-riron-seidenki-kiso/)・[磁気](/denken-blog/blog/denken3-riron-jiki-denjiyudou-kiso/)・[直流回路](/denken-blog/blog/denken3-riron-chokuryu-kairo-kiso/)ときて、理論科目の基礎シリーズも今回で4回目です。最後に整理するのは、多くの人が「急に難しくなった」と感じる**交流回路**です。

直流回路の「抵抗」に相当する考え方が、交流回路では**インピーダンス**に置き換わります。この対応関係を軸に整理していきます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0;font-size:0.85rem;color:var(--text-muted);">
📌 本記事は基礎概念の整理を目的としています。試験対策としての網羅性より、「意味を理解すること」を優先して構成しています。
</div>

---

## なぜ交流では「抵抗」だけでは足りないのか

直流回路では、電流の流れにくさは抵抗(R)だけで決まりました。しかし交流回路では、電流や電圧が時間とともに向きを変えるため、**コイル(L)やコンデンサ(C)も、電流の流れにくさに影響を与える**ようになります。

この「Lによる流れにくさ」「Cによる流れにくさ」を表すのが、リアクタンスという考え方です。

---

## 誘導性リアクタンス XL——コイルによる流れにくさ

コイル(インダクタンスL)は、交流電流の変化を妨げようとする性質があります。この流れにくさを表すのが、誘導性リアクタンスです。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">XL = ωL = 2πfL</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">XL：誘導性リアクタンス [Ω]　ω：角周波数 [rad/s]　f：周波数 [Hz]　L：インダクタンス [H]</p>
</div>

**周波数fが高いほど、XLは大きくなります。** コイルは「急な変化」を嫌う性質があるため、変化が速い（周波数が高い）ほど、電流を妨げる力が強くなるとイメージすると理解しやすくなります。

---

## 容量性リアクタンス XC——コンデンサによる流れにくさ

一方、コンデンサ(静電容量C)による流れにくさは、容量性リアクタンスと呼ばれます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">XC = 1 / ωC = 1 / 2πfC</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">XC：容量性リアクタンス [Ω]　C：静電容量 [F]</p>
</div>

XLとは逆に、**周波数fが高いほど、XCは小さくなります。** コンデンサは、周波数が高い（変化が速い）ほど、かえって電流を通しやすくなる性質を持っているためです。**「LとCでは、周波数に対する反応が逆になる」** という対比で覚えておくと、混同しにくくなります。

---

## インピーダンス Z——交流回路の「合成抵抗」

抵抗R、誘導性リアクタンスXL、容量性リアクタンスXCを直列につないだRLC回路全体の「流れにくさ」を、インピーダンスZと呼びます。

![RLC直列回路とインピーダンス三角形の関係](/denken-blog/images/diagrams/impedance-triangle.svg)

<p style="text-align:center;font-size:0.78rem;color:var(--text-muted);margin-top:-1.25rem;">インピーダンス三角形。RとXの直角三角形の斜辺がZになる。</p>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">Z = √( R² + (XL − XC)² )</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">Z：インピーダンス [Ω]</p>
</div>

この式は、**三平方の定理（ピタゴラスの定理）と同じ形**をしています。Rを底辺、(XL−XC)を高さとする直角三角形の斜辺が、そのままZになるとイメージすると覚えやすくなります。

---

## 共振回路——XLとXCが打ち消し合う特別な状態

周波数を変化させていくと、ある特定の周波数で **XL と XC がちょうど等しくなる瞬間**が訪れます。このとき、インピーダンスの式の(XL−XC)がゼロになるため、Z=Rとなり、**インピーダンスが最小**になります。この状態を共振と呼びます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">f₀ = 1 / (2π√(LC))</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">f₀：共振周波数 [Hz]（XL = XC となる周波数）</p>
</div>

<div style="background:var(--bg-card);border-left:4px solid var(--accent);padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 8px 8px 0;">
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">共振のイメージ</p>
<p style="font-size:0.88rem;margin:0;line-height:1.9;">コイルは周波数が上がるほど流れにくく、コンデンサは周波数が上がるほど流れやすくなる。<br>この2つの性質がちょうど釣り合う周波数が共振周波数。<br>直列共振では、その瞬間だけ抵抗Rだけの回路のように電流が流れやすくなる。</p>
</div>

---

## 簡単な例題で確認する

**問題**：抵抗3Ω、誘導性リアクタンス4Ωを直列につないだ回路がある（容量性リアクタンスはなし）。インピーダンスZを求めよ。

**解答**：
Z = √( R² + XL² ) = √( 3² + 4² ) = √( 9 + 16 ) = √25 = 5 [Ω]

3・4・5という数字の並びは、直角三角形の代表例（三平方の定理）としてもよく使われる組み合わせです。インピーダンスの計算に三平方の定理が使われている感覚を、この例題でつかんでおきましょう。

---

## まとめ

- コイルによる流れにくさが **XL = 2πfL**、コンデンサによる流れにくさが **XC = 1/2πfC**
- 周波数が上がると、**XLは増加・XCは減少**という逆の反応をする
- RLC直列回路のインピーダンスは **Z = √(R² + (XL−XC)²)**（三平方の定理と同じ形）
- XLとXCが等しくなる周波数が**共振周波数**で、そのときZは最小になる

この基礎シリーズでは、静電気・磁気・直流回路・交流回路という理論科目の主要分野を一通り整理しました。次は、三相交流や電子理論など、さらに踏み込んだテーマも扱っていく予定です。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1rem 0;">
<p style="font-weight:700;margin:0 0 0.5rem;">🔗 シリーズを最初から読む</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.75rem;">理論の基礎シリーズは、静電気の記事からどうぞ。</p>
<a href="/denken-blog/blog/denken3-riron-seidenki-kiso/" style="display:inline-block;background:var(--accent);color:#fff;padding:0.45rem 1.1rem;border-radius:6px;font-size:0.85rem;font-weight:700;text-decoration:none;">静電気の基礎を読む →</a>
</div>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1.5rem 0;text-align:center;">
<span style="display:inline-block;background:var(--accent-warm);color:#fff;font-size:0.65rem;font-weight:700;padding:0.15em 0.6em;border-radius:4px;margin:0 0 0.6rem;letter-spacing:0.05em;">PR</span>
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">📘 理論科目のフルカラー教科書</p>
<p style="font-size:0.85rem;color:var(--text-muted);margin:0 0 0.9rem;line-height:1.7;">「みんなが欲しかった！電験三種 理論の教科書&問題集」なら、交流回路もイラストで直感的に理解できます。</p>
<a href="https://www.amazon.co.jp/dp/4300108811?tag=ima3burukku2-22" rel="nofollow sponsored noopener" target="_blank" style="display:inline-block;background:var(--accent-warm);color:#fff;padding:0.5rem 1.2rem;border-radius:8px;font-size:0.85rem;font-weight:700;text-decoration:none;">理論の教科書&問題集をAmazonで見る →</a>
</div>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1.5rem 0;">
<span style="display:inline-block;background:var(--accent-warm);color:#fff;font-size:0.65rem;font-weight:700;padding:0.15em 0.6em;border-radius:4px;margin:0 0 0.6rem;letter-spacing:0.05em;">PR</span>
<p style="font-weight:700;margin:0 0 0.5rem;font-size:1rem;">〰️ インピーダンスの計算、独学の限界を感じたら</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.9rem;line-height:1.7;">交流回路は理論の中でも特につまずきやすい分野です。電験三種に特化したオンライン講座「資格合格支援スクール【能セン】」の解説動画で、理解を補強するのもおすすめです。</p>
<a href="https://px.a8.net/svt/ejp?a8mat=4B84X1+2QU322+5TS8+5YJRM" rel="nofollow sponsored noopener" target="_blank" style="display:inline-block;background:var(--accent-warm);color:#fff;padding:0.5rem 1.2rem;border-radius:8px;font-size:0.85rem;font-weight:700;text-decoration:none;margin:0.2rem;">資格合格支援スクール【能セン】を見る →</a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B84X1+2QU322+5TS8+5YJRM" alt="">
</div>

<p style="font-size:0.75rem;color:var(--text-muted);margin-top:1.5rem;">※本記事は基礎概念の整理を目的とした情報提供記事です。アフィリエイトプログラムを利用しています。試験範囲の詳細・出題傾向は、必ず市販の過去問集や公式の試験情報でご確認ください。</p>
