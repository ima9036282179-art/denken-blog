---
title: "電験三種 理論の基礎「静電気」超入門——電位・電界・電束密度の関係を整理する"
description: "電験三種・理論科目でつまずきやすい静電気の基礎を、ゼロから丁寧に解説。電位はスカラ量であること、電界の強さE=V/d、電束密度D、静電容量Cの関係を、図と例題を交えて整理します。"
pubDate: 2026-08-30
category: "科目別攻略"
tags: ["科目別攻略", "電験三種", "理論", "静電気", "基礎"]
eyecatch: "/denken-blog/images/eyecatch/riron-seidenki.svg"
---

理論科目の学習は、多くの人が「静電気」の分野からスタートします。しかし、電位・電界・電束密度など、似たような用語が立て続けに出てくるため、**最初のつまずきポイントになりやすい分野**でもあります。

この記事では、静電気の基礎を、できるだけ図とセットでゼロから整理します。「なんとなく公式を覚えている」状態から、「意味を理解して使える」状態を目指す内容です。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0;font-size:0.85rem;color:var(--text-muted);">
📌 本記事は基礎概念の整理を目的としています。試験対策としての網羅性より、「意味を理解すること」を優先して構成しています。
</div>

---

## まず全体像——3つの量を混同しないことが最初の関門

静電気の分野で最初に整理すべきは、次の3つの量です。

| 量 | 記号 | 種類 | 単位 |
|------|------|------|------|
| 電位 | V | スカラ量（大きさのみ） | V（ボルト） |
| 電界の強さ | E | ベクトル量（大きさ＋向き） | V/m |
| 電束密度 | D | ベクトル量（大きさ＋向き） | C/m² |

この3つを混同したまま公式を暗記しようとすると、**どの式がどの量を表しているのか分からなくなり、迷子になります**。まずは「電位だけがスカラ量で、電界と電束密度はベクトル量」という区別を、最初にはっきりさせておきましょう。

---

## 電位はスカラ量——「高さ」のイメージで理解する

電位(V)は、**大きさだけを持ち、向きを持たない量**です。これは、日常の感覚に置き換えると理解しやすくなります。

たとえば「標高」を考えてみてください。ある地点の標高が100mというとき、そこに「向き」の情報は含まれていません。標高はあくまで「基準点（海抜0m）からどれだけ高いか」という大きさだけの情報です。

電位もこれと同じで、**基準点からの電気的な高さ**のようなものだとイメージすると分かりやすくなります。電位差（＝電圧）があるところに電流が流れるのは、高低差があるところを水が流れるのと同じイメージです。

---

## 電界の強さ E = V/d——「傾き」のイメージで理解する

一方、電界(E)は**ベクトル量**です。電界の強さは、平行平板電極（コンデンサの基本形）の間では、次の式で表されます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">E = V / d</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">E：電界の強さ [V/m]　V：極板間の電圧 [V]　d：極板間の距離 [m]</p>
</div>

先ほどの「標高」の例えを続けるなら、電界は**傾き（勾配）** に近いイメージです。同じ標高差（電圧V）でも、距離(d)が短ければ傾きは急になり、距離が長ければ傾きは緩やかになります。これが「電圧を距離で割る」という式の意味です。

![平行平板電極における電位・電界・電束密度の関係](/denken-blog/images/diagrams/heikou-heiban.svg)

<p style="text-align:center;font-size:0.78rem;color:var(--text-muted);margin-top:-1.25rem;">平行平板電極のイメージ。電圧Vを距離dで割ると電界の強さEが求まる。</p>

---

## 電束密度 D——「電気力線の混み具合」を表す量

電束密度(D)は、**単位面積あたりを通り抜ける電束の量**を表すベクトル量です。平行平板電極の場合、次の式で定義されます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">D = Q / S</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">D：電束密度 [C/m²]　Q：電荷 [C]　S：極板の面積 [m²]</p>
</div>

ここで重要なポイントが一つあります。**平行平板電極では、両方の極板の電束密度Dは等しくなります。** これは、電極間に何もない場合でも、間に誘電体（絶縁物）を挟んだ場合でも変わりません。電束密度は「電荷そのものの量」に対応する量であり、間の物質の種類（誘電率）に左右されないためです。

一方、電界の強さEは、間に挟む物質（誘電率ε）によって変化します。この違いが、DとEを区別して覚えるべき理由です。両者の関係は、次の式で結ばれます。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin:1.5rem 0;text-align:center;">
<p style="font-size:1.3rem;font-weight:900;margin:0 0 0.5rem;">D = εE</p>
<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">ε：誘電率（真空の誘電率 ε₀ × 比誘電率 εr）</p>
</div>

---

## 静電容量 C とあわせて整理する

静電気の分野では、静電容量(C)もセットで登場します。コンデンサに蓄えられる電荷Qと電圧Vの関係、そして静電容量Cの公式は次の通りです。

| 公式 | 意味 |
|------|------|
| Q = CV | 電荷は静電容量と電圧に比例する |
| C = εS / d | 静電容量は、極板面積に比例し、極板間の距離に反比例する |

「面積が大きいほど、距離が近いほど、静電容量は大きくなる」という関係は、コンデンサの構造をイメージすると直感的に理解しやすくなります。

---

## 全体を整理する一覧表

ここまでの内容を、一度整理しておきます。

| 量 | 記号 | 種類 | 公式 | イメージ |
|------|------|------|------|---------|
| 電位 | V | スカラ量 | — | 基準点からの「高さ」 |
| 電界の強さ | E | ベクトル量 | E = V/d | 電位の「傾き」 |
| 電束密度 | D | ベクトル量 | D = Q/S、D = εE | 電気力線の「混み具合」 |
| 静電容量 | C | スカラ量 | C = εS/d、Q = CV | 電荷の「溜めやすさ」 |

<div style="background:var(--bg-card);border-left:4px solid var(--accent);padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 8px 8px 0;">
<p style="font-weight:700;margin:0 0 0.5rem;font-size:0.95rem;">覚え方のコツ</p>
<p style="font-size:0.88rem;margin:0;line-height:1.9;">「V（電位）は高さ、E（電界）は傾き、D（電束密度）は密度」とイメージで結びつけておくと、公式を丸暗記しなくても、式の意味から思い出せるようになります。</p>
</div>

---

## 簡単な例題で確認する

最後に、簡単な数値で確認してみましょう。

**問題**：極板間の距離が2mm、電圧が100Vの平行平板電極がある。電界の強さEを求めよ。

**解答**：
E = V / d = 100 [V] ÷ 0.002 [m] = 50,000 [V/m]

単位をそろえること（mmをmに変換すること）を忘れなければ、公式に当てはめるだけで解ける問題です。理論の計算問題の多くは、**この「公式を正確に覚え、単位に注意して代入する」という基本の積み重ね**でできています。

---

## まとめ

- **電位(V)はスカラ量**、電界(E)と電束密度(D)は**ベクトル量**という違いをまず区別する
- 電界の強さは **E = V/d**。「電位差(高さ)÷距離」で「傾き」を表す
- 電束密度は **D = Q/S**。平行平板電極では両極板で等しい
- 電界と電束密度の関係は **D = εE**
- 静電容量は **C = εS/d**、電荷との関係は **Q = CV**

静電気の分野は、一つひとつの用語を「イメージ」と結びつけて理解すると、暗記の負担がぐっと減ります。このシリーズでは、今後も理論科目の基礎を科目別に整理していく予定です。

<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:1.25rem;margin:1rem 0;">
<p style="font-weight:700;margin:0 0 0.5rem;">🔗 あわせて読みたい</p>
<p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 0.75rem;">運営者自身が実際にこれらの公式でつまずいた記録は、学習ログでも紹介しています。</p>
<a href="/denken-blog/blog/denken3-gakushu-log-02/" style="display:inline-block;background:var(--accent);color:#fff;padding:0.45rem 1.1rem;border-radius:6px;font-size:0.85rem;font-weight:700;text-decoration:none;">学習ログ②を読む →</a>
</div>

<p style="font-size:0.75rem;color:var(--text-muted);margin-top:1.5rem;">※本記事は基礎概念の整理を目的とした情報提供記事です。試験範囲の詳細・出題傾向は、必ず市販の過去問集や公式の試験情報でご確認ください。</p>
