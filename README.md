# Tailkit

[SvelteKit](https://kit.svelte.dev/) and [TailwindCSS](https://tailwindcss.com/) starter template. For the most basic SvelteKit starter template, see [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Features

Tailkit expands on the default SvelteKit template by including [TailwindCSS](https://tailwindcss.com/). It also comes with a couple of nifty dependencies to kickstart your development:
- [@sveltejs/adapter-node](https://www.npmjs.com/package/@sveltejs/adapter-node) allows SvelteKit to run in a nodejs environment
- [PostCSS](https://www.npmjs.com/package/postcss) transforms css programatically with plugins
  - [autoprefixer](https://www.npmjs.com/package/autoprefixer) adds browser prefixes
  - [postcss-import](https://www.npmjs.com/package/postcss-import) enables familiar sass-like importing (*instead of referencing*)
  - [postcss-nested](https://www.npmjs.com/package/postcss-nested) enables familiar sass-like nesting
  - [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) allows you to use future CSS features today

## Install

If you're seeing this, you've probably already done this step. Congrats!

```bash
# Clone the repository to the current directory
git clone https://github.com/Conceptiks/tailkit.git

# Install all dependencies
npm install
```

> Note: Tailkit currently uses `@sveltejs/kit@next`, which at the time of writing, has not yet reached v1.0.0.

## Usage

Start developing locally right away by using: 

```bash
npm run dev
```

When trying to deploy, `build` and then `preview` your output like so:
```bash
# Build output with adapter-node first
npm run build

# Preview your build (works regardless of presence of an adapter)
npm run preview
```

> Note from SvelteKit repo: You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
