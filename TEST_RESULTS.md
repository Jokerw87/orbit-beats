# Verification — 2026-09-22

Actual local Chromium browser and Node checks: 8 groups passed. Run `PLAYWRIGHT_MODULE=<installed playwright module> node test.cjs` (set environment variables using your shell's syntax). No production dependencies are required by the tool.

- Deterministic synthesis, silence, full-density peak bound and duration.
- Invalid inputs rejected; independent PCM WAV header/length checks.
- All 64 toggles and keyboard Space; no autoplay.
- Real AudioContext start/stop/replay; tempo edits stop stale playback.
- Downloaded WAV decoded by browser: mono, 22050 Hz, correct sample count and nonzero PCM. Preview volume zero does not mute exported WAV.
- Downloaded PNG is 800 × 800 and byte-equal to preview canvas serialization.
- Clear exports zero-valued PCM; reset restores the example.
- 390px narrow layout, offline operation, no HTTP requests, no storage and no page errors.

First browser run found narrow-screen overflow. Repair round 1 added `min-width:0` to grid children; rerun passed. Desktop screenshot visually inspected. No source changes after passing run except this report.

Not verified: physical speaker output, human listening quality, Android/iOS hardware, Safari or Firefox. A browser AudioContext test is not an acoustic listening test. No commercial demand or customer acceptance is claimed. This was a deterministic test plus same-agent source/visual inspection, not independent cross-model review.
