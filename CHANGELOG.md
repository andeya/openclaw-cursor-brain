# Changelog

All notable changes to this community-maintained fork are documented here.

This project is based on [andeya/openclaw-cursor-brain](https://github.com/andeya/openclaw-cursor-brain).

## [1.6.1] - 2026-08-07

### Added

- **System prompt forwarding** in `streaming-proxy.mjs`: OpenClaw `system`/`developer` messages from `/v1/chat/completions` are prepended to cursor-agent stdin (config `forwardSystemPrompt`, default on; env `CURSOR_FORWARD_SYSTEM_PROMPT=0` to disable).
- **`systemPromptMaxChars`** config (default 120000) with truncation logging.
- **Session invalidation on persona change**: cursor `--resume` mapping cleared when the system prompt hash changes for a session key.
- Self-tests for system extraction and stdin wrapping.
- README / README_ZH documentation for system prompt forwarding.

### Security / Privacy

- Proxy self-test is config-independent again (generic temp dirs / `demo-agent` fixtures; no personal paths, phone numbers, or group JIDs).

## [1.6.0] - 2026-08-03

### Added

- **Per-agent workspace routing** in `streaming-proxy.mjs`: each request resolves `cursor-agent` cwd from explicit headers/body, `agent:<id>:…` session keys, system-prompt workdir, channel bindings, then `agents.defaults.workspace`.
- **Agent-scoped session keys** so Cursor `--resume` never crosses agents/workspaces.
- **Doctor check** for per-agent workspace overrides in `openclaw.json`.
- **Config-independent proxy self-test** via `CURSOR_PROXY_SELFTEST=1` (no personal paths or live config required).

### Changed

- Compatibility fixes for **OpenClaw 2026.x** (gateway, plugin SDK, runtime context handling).
- README fork notice and community maintenance notes.

### Security / Privacy

- Removed environment-specific self-test fixtures (personal paths, phone numbers, group JIDs) from the published source tree.

## [1.5.4] - upstream baseline

Baseline from [andeya/openclaw-cursor-brain](https://github.com/andeya/openclaw-cursor-brain) v1.5.4.
