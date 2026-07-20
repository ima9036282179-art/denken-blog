---
title: "電験三種 理論の基礎「三相交流回路」超入門——スター結線・デルタ結線と三相電力を整理する"
description: "電験三種・理論科目の三相交流回路を解説。スター結線（Y結線）とデルタ結線（Δ結線）における相電圧と線電圧の関係、三相電力の公式P=√3VIcosθを、図と例題で丁寧に整理します。"
pubDate: 2026-09-27
category: "科目別攻略"
tags: ["科目別攻略", "電験三種", "理論", "三相交流", "基礎"]
eyecatch: "/denken-blog/images/eyecatch/riron-sansou.svg"
---

[交流回路の基礎](/denken-blog/blog/denken3-riron-kouryu-kairo-kiso/)では、単相の交流回路を扱いました。理論科目の総仕上げとして、今回は**三相交流回路**を整理します。実際の発電所や工場の受変電設備は、ほとんどがこの三相交流で成り立っています。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0;font-size:0.85rem;color:var(--text-muted);">
📌 本記事は基礎概念の整理を目的としています。試験対策としての網羅性より、「意味を理解すること」を優先して構成しています。
</div>

---

## 三相交流とは——3つの単相交流を組み合わせたもの

三相交流は、**位相が120度ずつずれた3つの単相交流を組み合わせたもの**です。発電機の内部で、3組のコイルを120度ずつずらして配置することで作られます。

この3つの交流をつなぐ方法には、**スター結線（Y結線）** と **デルタ結線（Δ結線）** の2種類があります。どちらの結線方法かによって、「相電圧」と「線電圧」の関係が変わる点が、最初の整理ポイントです。

![スター結線とデルタ結線における相電圧・線電圧の関係](/denken-blog/images/diagrams/star-delta.svg)

<p style="text-align:center;font-size:0.78rem;color:var(--text-muted);margin-top:-1.25rem;">スター結線は線間電圧が相電圧の√3倍、デルタ結線は線間電圧と相電圧が等しい。</p>

---

## スター結線（Y結線）——線間電圧は相電圧の√3倍

スター結線は、3つの巻線の一端を1点（中性点）に集め、星（Y）の形につなぐ方法です。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">V₃ = √3 × Vₚ</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">V₃：線間電圧 [V]　Vₚ：相電圧 [V]</p>
</div>

**電流については、線電流と相電流は同じ値になります。** 中性点があることで、単相の電圧（相電圧）と、三相としての電圧（線間電圧）を両方取り出せるのが、スター結線の実用上のメリットです（例：三相200Vと単相100Vを同時に取り出す配電など）。

---

## デルタ結線（Δ結線）——線間電圧と相電圧が等しい

デルタ結線は、3つの巻線を三角形（Δ）の形につなぐ方法です。スター結線とは、電圧・電流の関係がちょうど逆になります。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">V₃ = Vₚ　　I₃ = √3 × Iₚ</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">V₃：線間電圧　Vₚ：相電圧　I₃：線電流　Iₚ：相電流</p>
</div>

<div style="background:var(--bg-card);border-left:4px solid var(--accent);padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 8px 8px 0;">
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">覚え方のコツ</p>
<p style="font-size:0.88rem;margin:0;line-height:1.9;">スター結線は「電圧」に√3がつく（線間電圧＝相電圧×√3）。<br>デルタ結線は「電流」に√3がつく（線電流＝相電流×√3）。<br>この対比で覚えると、2つの結線を混同しにくくなります。</p>
</div>

---

## 三相電力の公式——結線方法によらず同じ形になる

三相回路全体の消費電力は、結線方法（スター・デルタ）によらず、**線間電圧と線電流を使うと同じ形の式**で表せます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">P = √3 × V₃ × I₃ × cosθ</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">P：三相電力 [W]　V₃：線間電圧 [V]　I₃：線電流 [A]　cosθ：力率</p>
</div>

**この式に結線方法（Y・Δ）の情報は含まれていません。** 線間電圧V₃と線電流I₃さえ分かれば、内部がスター結線でもデルタ結線でも、同じ式で三相電力を求められます。この「結線を意識しなくていい」という点が、実務上・試験対策上、非常に便利なポイントです。

---

## V結線について——変圧器2台で三相を作る方法

発展的な内容として、**V結線**にも簡単に触れておきます。V結線は、単相変圧器2台だけで三相電力を供給する結線方法です。変圧器3台分の設備を2台に減らせる一方、**得られる出力は理論上86.6%（√3/2）程度に低下する**という特徴があります。単相変圧器が1台故障した場合の緊急対応や、需要が少ない地域での経済的な配電方式として使われます。

---

## 簡単な例題で確認する

**問題**：線間電圧200V、線電流10A、力率0.8の三相回路がある。消費電力Pを求めよ。

**解答**：
P = √3 × V₃ × I₃ × cosθ = 1.73 × 200 [V] × 10 [A] × 0.8 ≈ 2,769 [W]

√3 ≈ 1.73 という近似値は、電験三種の計算問題で繰り返し登場するため、**覚えておくと計算がスムーズ**になります。

---

## まとめ

- 三相交流は、位相が120度ずつずれた3つの単相交流の組み合わせ
- スター結線は **V₃ = √3 × Vₚ**（電圧に√3）、デルタ結線は **I₃ = √3 × Iₚ**（電流に√3）
- 三相電力は結線方法によらず **P = √3 × V₃ × I₃ × cosθ**
- V結線は変圧器2台で三相を作る方法。出力は理論上86.6%に低下する

これで、静電気・磁気・直流回路・交流回路・三相交流回路と、理論科目の主要分野を一通り整理しました。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1rem 0;">
<p style="font-weight:700;margin:0 0 0.5rem;">🔗 シリーズを最初から読む</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.75rem;">理論の基礎シリーズは、静電気の記事からどうぞ。</p>
<a href="/denken-blog/blog/denken3-riron-seidenki-kiso/" style="display:inline-block;background:var(--accent);color:#fff;padding:0.45rem 1.1rem;border-radius:6px;font-size:0.85rem;font-weight:700;text-decoration:none;">静電気の基礎を読む →</a>
</div>

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1.5rem 0;">
<span style="display:inline-block;background:var(--accent-warm);color:#fff;font-size:0.65rem;font-weight:700;padding:0.15em 0.6em;border-radius:4px;margin:0 0 0.6rem;letter-spacing:0.05em;">PR</span>
<p style="font-weight:700;margin:0 0 0.5rem;font-size:1rem;">🔺 理論5分野を一通り学び終えたら、次のステップへ</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.9rem;line-height:1.7;">ここまでの基礎を土台に、過去問演習へ進む段階です。電験三種に特化したオンライン講座「資格合格支援スクール【能セン】」で、実践力を仕上げるのもおすすめです。</p>
<a href="https://px.a8.net/svt/ejp?a8mat=4B84X1+2QU322+5TS8+5YJRM" rel="nofollow sponsored noopener" target="_blank" style="display:inline-block;background:var(--accent-warm);color:#fff;padding:0.5rem 1.2rem;border-radius:8px;font-size:0.85rem;font-weight:700;text-decoration:none;margin:0.2rem;">資格合格支援スクール【能セン】を見る →</a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B84X1+2QU322+5TS8+5YJRM" alt="">
</div>

<p style="font-size:0.75rem;color:var(--text-muted);margin-top:1.5rem;">※本記事は基礎概念の整理を目的とした情報提供記事です。アフィリエイトプログラムを利用しています。試験範囲の詳細・出題傾向は、必ず市販の過去問集や公式の試験情報でご確認ください。</p>
