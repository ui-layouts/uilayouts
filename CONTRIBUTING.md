# Contributing

Thanks for your interest in contributing to uilayouts. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@naymur](https://x.com/naymur_dev).

## About this repository

This is a monorepo managed with [Turborepo](https://turborepo.dev/).

- We use [Bun](https://bun.sh) as the package manager
- For animations, we use [Motion](https://motion.dev)
- For MDX, we use [next-mdx](https://nextjs.org/docs/pages/guides/mdx)

## Development

### Fork this repo

Click the **Fork** button in the top right corner of this page to create your own copy.

### Clone your fork

```bash
git clone https://github.com/<YOUR_USERNAME>/uilayouts.git
```

### Navigate to the project directory

```bash
cd uilayouts
```

### Create a new branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun dev
```

## Folder Structure

```text
uilayouts/
├── apps/
│   └── ui-layout/               # Main Next.js application
│       ├── app/                 # Next.js App Router pages
│       │   ├── (docs-page)/     # Documentation routes
│       │   ├── blocks/          # Block showcase pages
│       │   ├── live-components/ # Live component previews
│       │   └── page.tsx         # Home page
│       ├── assets/              # Static assets and preview images
│       ├── components/
│       │   ├── ui/              # Base UI primitives
│       │   └── website/         # Site-specific components
│       ├── configs/             # App configuration files
│       ├── content/
│       │   └── components/      # MDX documentation files
│       ├── hooks/               # Custom React hooks
│       ├── lib/                 # Utility functions and helpers
│       ├── registry/
│       │   └── components/      # Component source registry
│       ├── public/              # Static public assets
│       ├── types/               # TypeScript type definitions
│       ├── next.config.ts
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── blocks/                  # Reusable section block components
│   ├── eslint-config/           # Shared ESLint configuration
│   ├── shadcn/                  # Shared shadcn/ui components
│   ├── typescript-config/       # Shared TypeScript configuration
│   └── ui/                     # Shared UI primitives
├── biome.json                   # Biome linter/formatter config
├── bun.lock
├── package.json
├── turbo.json
└── CONTRIBUTING.md
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention `category(scope or module): message` using one of the following categories:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code-related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or CLI usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. GitHub Actions, CI system)
- `chore`: all changes to the repository that do not fit into any of the above categories

Example: `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit [conventionalcommits.org](https://www.conventionalcommits.org/) or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
