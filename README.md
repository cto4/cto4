# Next Starter Kit

A pre-configured Next.js template for faster project setup.

## Features

- [Bun](https://bun.sh) - A fast JavaScript all-in-one toolkit.
- [NextJS](https://nextjs.org) - Full-Stack React framework.
- [Mantine UI](https://mantine.dev) - Awesome React component library.
- [Iconify](https://icon-sets.iconify.design) - Largest vector icons library.
- [SASS](https://sass-lang.com) - Syntactically Awesome Style Sheets.
- [Typescript](https://typescriptlang.org) - JavaScript with syntax for types.
- [Zod](https://zod.dev) - TypeScript-first schema validation with types.
- [Pocketbase](http://pocketbase.io) - Open Source realtime backend in 1 file.
- [Dev Container](https://containers.dev) - Sandboxed development process.
- [Docker](https://www.docker.com) - Awesome project deployment tool.
- [Workflow](https://github.com/features/actions) - Github Actions CI builds.

## Get Started

Clone template

```bash
git clone https://github.com/cto4/next-kit.git
```

Install deps

```bash
npm i
```

## Avilable scripts

- `dev` - next dev
- `build` - next build
- `bundle` - standalone bundle
- `start` - next start
- `type-check` - fast type check with tsc

## Project structure

```yml
├── app # next app router
│   ├── about
│   │   └── page.tsx # page #2
│   ├── layout.tsx # root layout
│   ├── not-found.tsx
│   └── page.tsx # page #1
├── Dockerfile # docker logic
├── next.config.mjs # customize next
├── package.json # project defintion
├── src # project source
│   ├── assets # static files
│   │   ├── images # banners, logos etc...
│   │   ├── res # json, xml etc...
│   │   └── styles # scss
│   ├── components # react parts
│   ├── hooks # front-end logic
│   └── lib # back-end logic
│       ├── actions # next server actions
│       ├── db # pocketbase
│       └── utils # extra logic
├── .env # env variables
└── tsconfig.json # compiler options
```

## Deploy

- [Docker](https://www.docker.com) - recommended
- [Vercel](https://vercel.com) with [Pockethost](https://pockethost.io)

## ToDo
- add i18n
- add eslint
- add next auth
- add testing

## Contribution guide

- Any contributions must be proposed via a GitHub issue for discussion before being worked on.
- You should also use git commit -s and follow the [DCO](https://developercertificate.org).

## License

[MIT License](https://github.com/cto4/next-kit/blob/main/LICENSE)
