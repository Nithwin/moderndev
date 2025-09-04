# Modern Dev

[![Contributors](https://img.shields.io/github/contributors/Nithwin/moderndev?style=flat-square)](https://github.com/Nithwin/moderndev/graphs/contributors)

**Contributors:** See the full list in [MEMBERS.md](./MEMBERS.md). To add yourself, follow the steps in [CONTRIBUTING.md](./CONTRIBUTING.md).

> Modern Dev is a student-run lab where we design and build mobile and web applications together — a place to learn, collaborate, and ship projects.

We are a group of college students working on real apps, helping each other grow, and keeping everything open-source so other students can learn and contribute.
## Vision

We believe in learning by doing. Modern Dev provides a platform for students to:

- **Collaborate** on real-world projects.
- **Learn** modern development practices.
- **Ship** impactful applications.
- **Grow** as developers and team members.
## Demo (Screenshot preview)

This is how the app looks

![Modern Dev demo](image.png)

## What we build

- Cross-platform mobile apps
- Progressive web apps and responsive websites
- Small tools, utilities, and prototypes used in coursework
- UI components, shared libraries, and design systems

## Highlights

- Student-first: mentors + learners collaborating
- Open-source: contributions welcome from college students
- Modern stack: Next.js, React, Tailwind/PostCSS (see `package.json` and `app/`)


## Quick start (developer)

1. Install dependencies

```powershell
npm install
```

2. Run the development server

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser. Edit `app/page.tsx` or components in `components/` and watch the site update.

## How to contribute (student-friendly)

This quick, step-by-step guide shows exactly what to run (PowerShell) from cloning to opening a PR. Follow the commands and replace placeholders (UPPERCASE words) with your values.

1) Fork the repo on GitHub

- Open the repository page on GitHub and click "Fork" (top-right). This creates `github.com/YOUR_USERNAME/moderndev`.

2) Clone your fork locally

```powershell
# replace YOUR_USERNAME
git clone https://github.com/YOUR_USERNAME/moderndev.git
cd moderndev
```

3) Add the upstream remote (original repo)

```powershell
git remote add upstream https://github.com/Nithwin/moderndev.git
git fetch upstream
```

4) Create a feature branch

```powershell
# choose a short name for your change
git checkout -b feat/short-description
```

5) Install dependencies and run the site

```powershell
npm install
npm run dev
```

Open http://localhost:3000 to test your changes.

6) Make your change

- Edit files in `app/` or `components/`.
- Keep changes focused to one idea per branch.

7) Stage and commit

```powershell
git add .
git commit -m "feat: short summary of change"
```

8) Push your branch to your fork

```powershell
git push -u origin feat/short-description
```

9) Open a Pull Request on GitHub

- Go to your fork on GitHub. You should see a prompt to "Compare & pull request". Click it.
- Make sure the base repo is `Nithwin/moderndev` and the base branch is `master`.
- In the PR body include:
  - Short summary
  - How to test
  - Any screenshots or a short GIF for UI changes
  - The PR checklist from `CONTRIBUTING.md`

10) Add yourself to `MEMBERS.md` (optional)

If you'd like to be listed as a contributor, add one line to `MEMBERS.md` using this format and open a small PR:

```markdown
- [Your Name](https://github.com/yourusername/)
```

Or open an issue titled `Add member: Your Name` and paste the same line; a maintainer will add you.

11) Keep your fork up to date (optional but recommended)

```powershell
# fetch latest changes from upstream master
git fetch upstream
git checkout master
git merge upstream/master
# push updated master to your fork
git push origin master
```

12) Notes and etiquette

- Make small, focused PRs — they get reviewed faster.
- Add screenshots or a short demo for UI work.
- Do not commit secrets or large files.
- If you're unsure what to work on, open an issue and ask for guidance (label it `help wanted`).

---

Next: I can add a pre-filled `PULL_REQUEST_TEMPLATE.md` and `ISSUE_TEMPLATE.md` to make PRs and issues even easier — say the word and I will add them.

## Project structure (quick)

- `app/` — Next.js app routes and pages
- `components/` — UI components used across pages
- `public/` — static assets (images, video, fonts)
- `README.md` — this file

## Code of conduct

Be kind and respectful. We want a welcoming, harassment-free space for students. If you need help, open an issue or reach out to project maintainers.

## License

This project is open-source. See the [LICENSE](./LICENSE) file for details (MIT License).

