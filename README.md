# Blog

My personal blog.

[zhangyu.dev](zhangyu.dev)

Using [Next.js](https://nextjs.org/) v14 App Router and React Server Components. Styling with [TailwindCSS](https://tailwindcss.com/).

Using [@discublog/api](https://github.com/discublog/api) to query GitHub repository discussions and rendering Markdown with [@mdx-js/mdx](https://github.com/mdx-js/mdx).

## Fork Guide

1. Modify file `blog-config.ts` in root folder.
2. Make sure you have the GitHub Profile repository like [`zhangyu1818/zhangyu1818`](https://github.com/zhangyu1818/zhangyu1818).
3. Modify site [metadata](https://github.com/zhangyu1818/blog/blob/next14/src/app/layout.tsx#L40).
4. Modify Google verification [here](https://github.com/zhangyu1818/blog/blob/next14/src/app/layout.tsx#L65).
5. Modify the Giscus script [here](https://github.com/zhangyu1818/blog/blob/next14/src/components/giscus/index.tsx#L17-L18).
6. Modify the [resume page](https://github.com/zhangyu1818/blog/blob/next14/src/app/resume/page.tsx).
7. Put your avatar file in `src/images/avatar.webp`.
8. Put your favicon file in `src/app/favicon.ico`.
9. Put your icons in `public/icon`.

### Env

create `.env` file in root folder.

```text
GITHUB_TOKEN=<required>
OPENAI_API_KEY=<optional>
```

### Summary

If you need Open AI to generate your article summaries, delete `summary.json` in root folder and paste your `OPENAI_API_KEY` in `.env`.
