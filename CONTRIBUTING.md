# Contributing to Modern Dev — complete beginner's guide

Welcome — this file walks you through every command and step from scratch so you can contribute confidently.

If you're new to Git or GitHub, follow this guide step-by-step. All terminal commands below use PowerShell syntax for Windows.

Table of contents
- Prerequisites (what you need locally)
- Fork, clone, and initial setup
- Create a branch and run the app locally
- Make changes, run linters and build
- Commit, push, and open a Pull Request (PR)
- Keep your fork up to date (syncing with upstream)
- Resolving merge conflicts (basic)
- Adding yourself to `MEMBERS.md`
- Tips, troubleshooting, and etiquette

--------------------------------------------------------------------------------

Prerequisites
- A GitHub account (sign up at github.com)
- Git installed (https)
- Node.js (LTS recommended) and npm. To check installed versions in PowerShell:

```powershell
git --version
node --version
npm --version
```

If Node is missing, download and install the LTS from nodejs.org, or use a version manager (nvm-windows).

--------------------------------------------------------------------------------

1) Fork the repository on GitHub

- Go to https://github.com/Nithwin/moderndev and click "Fork" (top-right). This creates `github.com/YOUR_USERNAME/moderndev`.

2) Clone your fork locally

```powershell
# replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/moderndev.git
cd moderndev
```

3) Add the upstream remote (so you can pull future changes from the original repo)

```powershell
git remote add upstream https://github.com/Nithwin/moderndev.git
git fetch upstream
git remote -v
```

You should see `origin` pointing to your fork and `upstream` pointing to the original repo.

4) Install dependencies and run the dev server

Install node modules and start the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The site should hot-reload on changes.

If `npm install` fails, check your Node version and network. On slow networks try `npm ci` (if package-lock.json is present).

5) Create a branch for your work

Always create a branch — don't work on `master` directly.

```powershell
# Good branch names: feat/add-contact-form, fix/typo-readme, chore/update-deps
git checkout -b feat/short-description
```

6) Make changes and test locally (primary workflow)

- Edit files in `app/` or `components/` as required.
- Start the Next.js development server and test in the browser. This is the primary workflow for development:

```powershell
# install deps (if not already done)
npm install
# start dev server with hot reload
npm run dev
# open http://localhost:3000 in your browser and verify your changes
```

Notes:
- `npm run dev` is the command you will use most. It hot-reloads as you save and is enough for most UI and behaviour testing.
- If you want to check code quality or prepare for a production build, see the optional steps below.

Optional: linting and production build (for PRs or release checks)

- Run the linter to detect style or common errors (recommended before opening a PR):

```powershell
npm run lint
# auto-fix fixable issues
npm run lint -- --fix
```

- You can run a production build as a smoke test (not required for every small change):

```powershell
npm run build
# then (optional) run the production server locally to smoke-test:
npm start
```

If `npm run build` fails, inspect the error output and fix the reported issues (often imports, missing files, or type errors).

7) Stage and commit changes

Keep commits focused and write clear commit messages. Use the conventional prefix:

- `feat:` for new features
- `fix:` for bug fixes
- `chore:` for non-functional changes

Example commit flow:

```powershell
git add .
git commit -m "feat: add contact form with validation"
```

If you have multiple small commits you can squash or rebase later; maintainers may request a clean history.

8) Push your branch to your fork

```powershell
git push -u origin feat/short-description
```

9) Open a Pull Request

- Go to your fork on GitHub. GitHub usually shows a "Compare & pull request" button for recently pushed branches. Click it.
- Make sure the base repo is `Nithwin/moderndev` and the base branch is `master`.
- Fill the PR template (the `.github/PULL_REQUEST_TEMPLATE.md` will be pre-filled). Provide:
	- Short summary of the change
	- How to test locally (commands + steps)
	- Screenshots if the UI changed

PR checklist (add to PR body):

- [ ] Builds and runs locally
- [ ] Linted and formatted
- [ ] Tests added or manual test steps provided

10) Respond to review

- Reviewers may request changes. Make them on your branch, commit, and push — the PR updates automatically.
- If asked, rebase or squash commits to keep history tidy (see "Keeping your fork up to date").

--------------------------------------------------------------------------------

Keeping your fork up to date (recommended)

Regularly bring changes from upstream into your fork to avoid conflicts:

```powershell
# switch to your local master/main
git checkout master
# fetch upstream master
git fetch upstream
# merge or rebase (merge is simple and safe):
git merge upstream/master
# push merged master to your fork
git push origin master

# if you have a feature branch and want to update it:
git checkout feat/short-description
git rebase master
# or merge master into your branch:
# git merge master
```

If you rebase and have already pushed your branch, push with force (careful):

```powershell
git push --force-with-lease
```

Use `--force-with-lease` rather than `--force` to reduce the chance of overwriting others' work.

Resolving merge conflicts (basic)

- If `git rebase` or `git merge` reports conflicts, open the conflicted files and look for markers `<<<<<<<`, `=======`, `>>>>>>>`.
- Edit the file to keep the correct sections, remove markers, then:

```powershell
git add <file-with-conflict>
git rebase --continue    # if rebasing
# or
git commit               # if merging and conflict resolved
```

If you're unsure, open an issue or ask a maintainer for help in resolving tricky conflicts.

--------------------------------------------------------------------------------

Adding yourself to `MEMBERS.md`

To be listed as a contributor, add a single line to `MEMBERS.md` using this format and open a PR:

```markdown
- [Your Name](https://github.com/yourusername/)
```

Or open an issue titled `Add member: Your Name` with the same line and a maintainer will add you.

--------------------------------------------------------------------------------

Tips, etiquette, and troubleshooting

- Keep PRs small and focused — they get reviewed faster.
- Don't commit secrets or large binaries.
- If `npm install` fails, try clearing npm cache: `npm cache clean --force` and re-run `npm install`.
- If you see type or lint errors, run the linter and fix the reported issues before opening a PR.
- If you're new to Git, common commands:

```powershell
git status       # see staged and unstaged files
git diff         # see changes
git add <file>   # stage a file
git commit -m "msg"  # commit staged changes
git log --oneline    # short history
```

If something breaks, don't panic — open an issue describing the problem and what you tried.

--------------------------------------------------------------------------------

Thanks for contributing — we welcome learners and regular contributors alike. If you'd like, we can add a short "good first issue" checklist or an automated GitHub Action to run linting on every PR.


