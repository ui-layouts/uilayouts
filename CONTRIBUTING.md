# Contributing

Thanks for your interest in contributing to ui-layout. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull request to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@naymur](https://x.com/naymur_dev).

## About this repository

- We use [npm](https://docs.npmjs.com).
- For animation [framer](https://www.framer.com/motion)
- For Mdx [next-mdx](https://nextjs.org/docs/pages/guides/mdx)

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/ui-layouts/uilayout.git
```

### Navigate to project directory

```bash
cd uilayout
```

`Don't work on old-ui-layout`

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

# Folder Structure

```
├── .eslintrc.json
├── .example.env
├── .gitignore
├── README.md
├── app
|     ├── (docs-page)
|     |     ├── components
|     |     |     ├── [...slug]
|     |     |     |     ├── page.tsx
|     |     |     ├── page.tsx
|     |     ├── get-started
|     |     |     ├── page.mdx
|     |     ├── layout.tsx
|     ├── favicon.ico
|     ├── globals.css
|     ├── layout.tsx
|     ├── live-components
|     |     ├── [componentName]
|     |     |     ├── error.tsx
|     |     |     ├── loading.tsx
|     |     |     ├── page.tsx
|     ├── page.tsx
├── assets
|     ├── index.ts
|     ├── preview
|     |     ├── buttons.svg
|     |     ├── card.svg
|     |     ├── clip-path.svg
|     |     ├── horizontal-scrolling.svg
|     |     ├── index.tsx
|     |     ├── motion-number.svg
|     ├── preview_bg.png
├── components
|     ├── core
|     |     ├── blur-vignette.tsx
|     |     ├── cursor-follow-text.tsx
|     |     ├── drawer
|     |     |     ├── vaul-main.tsx
|     |     ├── numbersuffle.tsx
|     ├── labs
|     |     ├── preview-tab.tsx
|     ├── website
|     |     ├── code-components
|     |     |     ├── code-block.tsx
|     |     |     ├── component-block.tsx
|     |     |     ├── component-code-preview.tsx
|     |     |     ├── component-preview.tsx
|     |     |     ├── copy-button.tsx
|     |     |     ├── copy-npm-button.tsx
|     |     |     ├── drawer-code-preview.tsx
|     |     |     ├── iframe-component-preview.tsx
|     |     |     ├── iframe-tab-codepreview.tsx
|     |     |     ├── pagination.tsx
|     |     |     ├── pre-code.tsx
|     |     |     ├── pre-coded.tsx
|     |     |     ├── tab-codepreview.tsx
|     |     ├── constant.tsx
|     |     ├── dropdown-menu.tsx
|     |     ├── header.tsx
|     |     ├── hero-sec.tsx
|     |     ├── icons
|     |     |     ├── github.tsx
|     |     |     ├── x.tsx
|     |     ├── searchbar.tsx
|     |     ├── sidebar.tsx
|     |     ├── tableof-compoents.tsx
|     |     ├── theme-provider.tsx
|     |     ├── theme-switch.tsx
|     |     ├── ui
|     |     |     ├── button.tsx
|     |     |     ├── dialog.tsx
|     |     |     ├── drawer.tsx
|     |     |     ├── dropdown.tsx
|     |     |     ├── navigation-menu.tsx
|     |     |     ├── scroll-area.tsx
|     |     |     ├── tabs.tsx
├── configs
|     ├── docs.ts
├── content
|     ├── components
|     |     ├── blur-vignette.mdx
|     |     ├── buttons.mdx
|     |     ├── clip-path.mdx
|     |     ├── footers.mdx
|     |     ├── horizontal-scroll.mdx
|     |     ├── motion-number.mdx
|     |     ├── product-cards.mdx
├── hooks
|     ├── use-media-query.tsx
|     ├── useClickOutside.tsx
|     ├── useClipBoarard.tsx
|     ├── useZustStore.tsx
├── lib
|     ├── code.ts
|     ├── docs.tsx
|     ├── progressbar.tsx
|     ├── toc.ts
|     ├── utils.ts
├── mdx-components.tsx
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── prettier.config.js
├── public
|     ├── og.jpg
├── registry
|     ├── components
|     |     ├── blurvignette
|     |     |     ├── blurvignettecard.tsx
|     |     |     ├── blurvignetteimg.tsx
|     |     |     ├── blurvignettevideo.tsx
|     |     ├── button
|     |     |     ├── btn-bg-shine.tsx
|     |     |     ├── btn-bg-spotlight.tsx
|     |     |     ├── btn-hover-active.tsx
|     |     |     ├── btn-hover1.tsx
|     |     |     ├── btn-hover2.tsx
|     |     |     ├── creative-btn1.tsx
|     |     |     ├── creative-btn2.tsx
|     |     ├── card
|     |     |     ├── product-card1.tsx
|     |     |     ├── product-card2.tsx
|     |     ├── clip-path
|     |     |     ├── clip-path-creative.tsx
|     |     ├── footers
|     |     |     ├── footer1.tsx
|     |     |     ├── hover-footer.tsx
|     |     ├── motion-number
|     |     |     ├── motion-number-after.tsx
|     |     |     ├── motion-number-before.tsx
|     |     |     ├── motion-number-last.tsx
|     |     |     ├── motion-number-start.tsx
|     |     |     ├── motion-number.tsx
|     |     ├── scroll-animation
|     |     |     ├── framer-horizontal-scroll.tsx
├── tsconfig.json
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
