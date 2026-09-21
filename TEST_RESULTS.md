# Verification — 2026-09-22

V1.1 actual local Chromium browser and Node checks: 15 groups passed (8 existing + 7 project persistence). Run `PLAYWRIGHT_MODULE=<installed playwright module> node test.cjs` and `node test-project.cjs` with the same environment variable (set it using your shell's syntax). No production dependencies are required by the tool.

- Deterministic synthesis, silence, full-density peak bound and duration.
- Invalid inputs rejected; independent PCM WAV header/length checks.
- All 64 toggles and keyboard Space; no autoplay.
- Real AudioContext start/stop/replay; tempo edits stop stale playback.
- Downloaded WAV decoded by browser: mono, 22050 Hz, correct sample count and nonzero PCM. Preview volume zero does not mute exported WAV.
- Downloaded PNG is 800 × 800 and byte-equal to preview canvas serialization.
- Clear exports zero-valued PCM; reset restores the example.
- 390px narrow layout, offline operation, no HTTP requests, no storage and no page errors.

Additional V1.1 checks passed:

- JSON round trip, BOM handling and defensive deep copy.
- Schema bounds, unknown/prototype fields, sparse arrays and malformed data rejected.
- Actual JSON download and reimport restores the exact UI state without autoplay.
- Cancel, malformed JSON, wrong version, oversized file and unsupported extension preserve current work.
- Valid import stops old playback and replaces controls.
- Delayed read plus intervening edit refuses stale import.
- 390px layout, offline zero HTTP requests, no storage or page errors.

V1 narrow-screen repair was retained. Both test suites were executed against the V1.1 candidate; the project desktop screenshot was visually inspected, including the deliberate stale-import rejection. Quality method: deterministic tests plus same-agent source/visual review. No cross-model review claimed. Only documentation changed after the passing run.

Not verified: physical speaker output, human listening quality, Android/iOS hardware, Safari or Firefox. A browser AudioContext test is not an acoustic listening test. No commercial demand or customer acceptance is claimed. This was a deterministic test plus same-agent source/visual inspection, not independent cross-model review.
