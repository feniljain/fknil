import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogs = await getCollection('blogs');
  return rss({
    title: 'Fenils Blog',
    description: '',
    site: context.site,
    items: blogs.map((blog) => ({
      title: blog.data.title,
      pubDate: blog.data.publishedOn,
      description: '',
      link: `/blog/${blog.data.slug}/`,
    })),
  });
}
