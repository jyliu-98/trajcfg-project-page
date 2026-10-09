# TrajCFG Project Page

Static, dependency-free project page for **TrajCFG: Token-Wise Classifier-Free Guidance via Denoising Trajectory Feedback**.

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

## Add paper and code links

When the URLs are available, replace the two disabled buttons in `index.html` with links:

```html
<a class="button button-primary" href="ARXIV_URL">Paper</a>
<a class="button button-secondary" href="CODE_URL">Code</a>
```

Also update the BibTeX entry with the final arXiv identifier.

## Structure

- `index.html` — page content and metadata
- `styles.css` — responsive design and motion
- `script.js` — gallery, navigation, synchronized playback, and copy interaction
- `assets/images/` — paper figures rendered for the web
- `assets/videos/` — selected qualitative comparisons
- `assets/media/` — image-to-3D comparison media
- `tests/browser/` — lightweight smoke-check documentation and script

