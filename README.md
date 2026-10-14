# TrajCFG Project Page

Static, dependency-free project page for **TrajCFG: Token-Wise Classifier-Free Guidance via Denoising Trajectory Feedback**.

- Paper: https://arxiv.org/abs/2610.14153
- Code: https://github.com/jyliu-98/TrajCFG
- Project page: https://jyliu-98.github.io/trajcfg-project-page/

## Preview locally

From this directory, run:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Publish with GitHub Pages

1. Create a GitHub repository and copy this directory to its root.
2. Commit and push all files, including `.nojekyll` and `assets/`.
3. In **Settings → Pages**, select **Deploy from a branch**.
4. Choose the default branch and `/ (root)`.

All URLs are relative, so the page works both at a user site and under a repository subpath.

## Structure

- `index.html` — page content and metadata
- `styles.css` — responsive design and motion
- `script.js` — gallery, navigation, synchronized playback, and copy interaction
- `assets/images/` — paper figures rendered for the web
- `assets/gallery/` — complete appendix gallery across five modalities and all backbones
- `assets/videos/` and `assets/media/` — original landing-page selections retained for compatibility
- `tests/browser/` — lightweight smoke-check documentation and script
