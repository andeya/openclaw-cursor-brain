# Contributing

Thank you for helping improve this community fork of **openclaw-cursor-brain**.

## Before you start

- This repo is a **community-maintained fork** of [andeya/openclaw-cursor-brain](https://github.com/andeya/openclaw-cursor-brain).
- Please keep attribution to the original author in commits and docs.
- **Do not commit** secrets, API keys, personal phone numbers, chat IDs, or machine-specific paths.

## Development

```bash
npm install
npm run build
npm run typecheck
CURSOR_PROXY_SELFTEST=1 node mcp-server/streaming-proxy.mjs
```

## Pull requests

1. Fork the repo and create a feature branch.
2. Keep changes focused; include a short note in `CHANGELOG.md` under `[Unreleased]` when user-facing.
3. Run `npm run typecheck` and the proxy self-test before opening a PR.
4. Describe which OpenClaw version you tested against.

## Reporting issues

Include:

- OpenClaw version (`openclaw --version`)
- Plugin version (`package.json`)
- OS and Node.js version
- Relevant log excerpts (redact tokens and personal IDs)
