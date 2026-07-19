import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: '電験ロードナビ — 電気主任技術者の資格取得から就職までをサポート',
    description: '電気主任技術者（電験）の勉強法・難易度・転職ガイド・年収相場を発信するメディアです。',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags ?? [],
    })),
    customData: `<language>ja</language>`,
  });
}
