# 星轨节拍 / Orbit Beats

An original small browser instrument: edit four 16-step tracks, see a constellation, preview synthesized sound and export PCM WAV or a matching PNG. No AI API, samples, microphone or network.

打开 `index.html`，点亮节拍格，再点击“试听一段”。请先调低设备音量。可以导出4轮节拍加尾音的22050Hz单声道16位WAV，或800×800星轨PNG。修改会立即停止旧试听，导出用最新节拍。试听音量只影响预览；WAV使用固定限幅，不替代设备音量控制。

全部代码与声音为本轮独立实现。节拍不自动保存；关闭页面丢失编辑。不是专业DAW、真实天文数据、医疗或收入工具。

## References / research

- https://github.com/madmonk13/modal-16 — existing browser sequencer with Tone.js and richer performance features. No source or samples copied.
- https://github.com/glebis/generative-sequencer — radial visualization inspiration, not a dependency.
- https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode — one source node per playback.
- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume — explicit audio initialization.

Research checked 2026-09-22. These precedents mean this is not an original market category or proven commercial opportunity. This experiment deliberately stays dependency-free with mathematical tones and deterministic PCM export.

No reuse license chosen for initial publication. System fonts only. See TEST_RESULTS.md for actual verification and limitations.
