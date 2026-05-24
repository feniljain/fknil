import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = (new MarkdownIt()).disable('image');

export async function GET(context) {
    const blogs = (await getCollection('blogs', ({ data }) => !data.draft));

    const sortedBlogs = (blogs.sort((a, b) => b.data.publishedOn.getTime() - a.data.publishedOn.getTime())).slice(0, 10);

    return rss({
        title: 'Fenils Blog',
        description: 'What does it mean to be strong Takamura-san?',
        site: context.site,
        items: sortedBlogs.map((blog) => ({
            title: blog.data.title,
            pubDate: blog.data.publishedOn,
            description: '',
            link: `/blog/${blog.data.slug}/`,
            content: sanitizeHtml(parser.render(blog.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
        })),
    });
}
