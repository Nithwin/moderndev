![Modern Dev - Lab for Mobile & Web](image.png)

# Modern Dev

> Modern Dev is a student-run lab where we design and build mobile and web applications together — a place to learn, collaborate, and ship projects.

We are a group of college students working on real apps, helping each other grow, and keeping everything open-source so other students can learn and contribute.

## Demo (animated preview)

Click the preview below to open a short demo video. If your browser supports it, the file will play in-place on GitHub.

[![Modern Dev demo](image.png)](public/hero.mp4)

Notes:
- The thumbnail above links to `public/hero.mp4` (a short demo of our site).
- For an in-repo animated preview you can add an animated GIF (e.g. `public/demo.gif`) and replace the thumbnail.

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

## Code contract (short)

- Inputs: PRs with focused changes and passing lint/tests
- Outputs: review, CI, and merge into `master` or feature branches
- Error modes: CI failures block merge; use small commits and descriptive PRs

## How to contribute (student-friendly)

> We welcome contributions from students of all levels. If you're new to open source, follow the easy path below.

1. Fork the repo and create a branch from `master` named `feat/<short-name>` or `fix/<short-name>`.
2. Open an issue describing what you want to change (optional but helpful).
3. Make a small, focused change. Add tests or notes when relevant.
4. Push your branch and open a Pull Request describing the change and how to test it.

Good PR checklist:

- [ ] Descriptive title and summary
- [ ] References an issue (if available)
- [ ] Includes screenshots or short demo (GIF/MP4) for UI changes
- [ ] No sensitive data committed
- [ ] Follows existing code style (look at `components/` for examples)

Label guidance: add `good first issue` to tasks aimed at beginners. Maintainers will try to leave helpful review comments.

## Project structure (quick)

- `app/` — Next.js app routes and pages
- `components/` — UI components used across pages
- `public/` — static assets (images, video, fonts)
- `README.md` — this file

## Code of conduct

Be kind and respectful. We want a welcoming, harassment-free space for students. If you need help, open an issue or reach out to project maintainers.

## License

This project is open-source. See the [LICENSE](./LICENSE) file for details (MIT License).

