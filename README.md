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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzhangyu1818%2Fblog&env=GITHUB_TOKEN&envDescription=GitHub%20Token%20is%20used%20to%20fetch%20data%20from%20GitHub&envLink=https%3A%2F%2Fdocs.github.com%2Fen%2Fauthentication%2Fkeeping-your-account-and-data-secure%2Fmanaging-your-personal-access-tokens&demo-title=Personal%20Blog&demo-description=Personal%20Blog&demo-url=https%3A%2F%2Fzhangyu.dev)
