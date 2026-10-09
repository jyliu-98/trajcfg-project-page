# Browser verification index

## Core smoke checks

- Page returns HTTP 200 through a local server.
- Local stylesheet, script, figures, and selected media paths resolve.
- Hero, Overview, Method, Results, Gallery, Citation, and Footer are present.
- Every modality exposes keyboard-accessible backbone tabs and independent case navigation.
- Paper and Code visibly remain in the `Coming soon` state.
- No empty image `src`, video `src`, or anchor `href` attributes are emitted.

Run:

```bash
bash tests/browser/smoke.test.sh
```

## Manual responsive checks

- Desktop: 1440 × 900
- Tablet: 820 × 1180
- Mobile: 390 × 844
- Keyboard: tab through navigation, task tabs, gallery arrows, and BibTeX copy action
- Motion: enable `Reduce motion` and confirm reveal and gallery transitions are suppressed
