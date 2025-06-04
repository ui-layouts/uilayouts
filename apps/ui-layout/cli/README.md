## uilayouts CLI

A simple CLI tool to scaffold UI components from a shared registry directly into your project. Supports both TypeScript (`.tsx`) and JavaScript (`.jsx`) and installs necessary dependencies automatically.

---

### 📝 Usage Guide

#### 1. List Available Components (optional if needed)

```bash
npx uilayouts list
```
#### 2. Run the CLI

```bash
npx uilayouts add <component-name>

# Example
npx uilayouts add phone-input
```

#### 3. Select Language

You'll be prompted to choose:

- TypeScript (.tsx)
- JavaScript (.jsx)

#### 4. Done!

Your component will be downloaded and placed at:

```bash
components/ui-layouts/<component-name>
```

### 🛠️ Features

- 📁 Instantly downloads UI components into your project.

- 🔀 Choose between TypeScript or JavaScript.

- 🔄 Converts .tsx to .jsx if JavaScript is selected.

- 📦 Installs required dependencies based on your package manager.

- 🧠 Smart detection of npm, yarn, pnpm, or bun.

- 💾 Components saved under components/ui-layouts/<component-name>.

### 📁 folder structure

```bash
cli/
├── src/
│   └── index.js         ← your main CLI script
├── test/                ← Test files directory
├── .npmignore
├── package.json
└── README.md
```
