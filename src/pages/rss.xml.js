import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blogs = (await getCollection('blogs', ({ data }) => !data.draft));

    const sortedBlogs = (blogs.sort((a, b) => b.data.publishedOn.getTime() - a.data.publishedOn.getTime())).slice(0, 10);

    return rss({
        title: 'Fenils Blog',
        description: '',
        site: context.site,
        items: sortedBlogs.map((blog) => ({
          title: blog.data.title,
          pubDate: blog.data.publishedOn,
          description: '',
          link: `/blog/${blog.data.slug}/`,
        })),
    });
}
