const galleryData = {
  t2v: {
    label: "Text to Video",
    cases: [
      {
        benchmark: "DynamicBench · Wan2.2-14B",
        prompt: "A salsa dancer spins their partner rapidly, dips them low, pauses for a beat, then pulls them back up.",
        media: [
          { type: "video", label: "Base CFG", src: "assets/videos/t2v/dance/base.mp4" },
          { type: "video", label: "CFG-Map", src: "assets/videos/t2v/dance/cfg-map.mp4" },
          { type: "video", label: "TrajCFG", src: "assets/videos/t2v/dance/trajcfg.mp4", featured: true }
        ]
      },
      {
        benchmark: "VBench · Wan2.1-13B",
        prompt: "Iron Man plays an electric guitar mid-air on a futuristic stage, with sparks and neon-lit New York skyscrapers behind him.",
        media: [
          { type: "video", label: "Base CFG", src: "assets/videos/t2v/ironman/base.mp4" },
          { type: "video", label: "CFG-Map", src: "assets/videos/t2v/ironman/cfg-map.mp4" },
          { type: "video", label: "TrajCFG", src: "assets/videos/t2v/ironman/trajcfg.mp4", featured: true }
        ]
      }
    ]
  },
  i2v: {
    label: "Image to Video",
    cases: [
      {
        benchmark: "VBench-I2V · Cosmos",
        prompt: "A large wave crashes into a lighthouse.",
        media: [
          { type: "image", label: "Input", src: "assets/videos/i2v/wave/input.jpeg", alt: "Input image of a lighthouse facing a large ocean wave." },
          { type: "video", label: "CFG-Map", src: "assets/videos/i2v/wave/cfg-map.mp4" },
          { type: "video", label: "TrajCFG", src: "assets/videos/i2v/wave/trajcfg.mp4", featured: true }
        ]
      },
      {
        benchmark: "PAI-G · Wan2.2-14B",
        prompt: "A sleek modern monorail glides through a lush forest toward a tunnel as the camera follows its motion.",
        media: [
          { type: "image", label: "Input", src: "assets/videos/i2v/monorail/input.jpeg", alt: "Input image of a modern monorail traveling through a green forest." },
          { type: "video", label: "CFG-Map", src: "assets/videos/i2v/monorail/cfg-map.mp4" },
          { type: "video", label: "TrajCFG", src: "assets/videos/i2v/monorail/trajcfg.mp4", featured: true }
        ]
      }
    ]
  },
  t2av: {
    label: "Text to Audio-Video",
    hint: "Use the video controls to unmute and compare synchronized audio.",
    cases: [
      {
        benchmark: "T2AV-Compass · Ovi",
        prompt: "A gamer panics when combat audio cuts out and a low-battery controller begins to beep.",
        media: [
          { type: "video", label: "Base", src: "assets/videos/t2av/controller/base.mp4", controls: true },
          { type: "video", label: "TrajCFG", src: "assets/videos/t2av/controller/trajcfg.mp4", controls: true, featured: true }
        ]
      },
      {
        benchmark: "VABench · Ovi",
        prompt: "A hand squeezes a plastic bottle until it caves in with crisp crunching, groaning, and a dull thud.",
        media: [
          { type: "video", label: "Base", src: "assets/videos/t2av/bottle/base.mp4", controls: true },
          { type: "video", label: "TrajCFG", src: "assets/videos/t2av/bottle/trajcfg.mp4", controls: true, featured: true }
        ]
      }
    ]
  },
  t2i: {
    label: "Text to Image",
    cases: [
      {
        benchmark: "Text-to-Image · FLUX.1-dev",
        prompt: "Cross-prompt comparisons show that the same trajectory feedback transfers naturally to image generation.",
        media: [
          { type: "image", label: "Qualitative comparisons", src: "assets/images/results-t2i.png", alt: "Text-to-image qualitative results comparing Base CFG, guidance baselines and TrajCFG across prompts.", featured: true }
        ]
      }
    ]
  },
  i23d: {
    label: "Image to 3D",
    cases: [
      {
        benchmark: "Image-to-3D · Hunyuan3D",
        prompt: "Trajectory-adaptive guidance improves image-conditioned 3D generation without changing the backbone.",
        media: [
          { type: "image", label: "Input", src: "assets/media/i2-3d/input.jpeg", alt: "Input image for image-to-3D generation." },
          { type: "image", label: "Base CFG", src: "assets/media/i2-3d/base.gif", alt: "Rotating 3D result generated with the base sampler." },
          { type: "image", label: "TrajCFG", src: "assets/media/i2-3d/trajcfg.gif", alt: "Rotating 3D result generated with TrajCFG.", featured: true }
        ]
      }
    ]
  }
};

const state = { task: "t2v", caseIndex: 0 };
const panel = document.querySelector("[data-gallery-panel]");
const comparison = document.querySelector("[data-media-comparison]");
const promptEl = document.querySelector("[data-gallery-prompt]");
const benchmarkEl = document.querySelector("[data-gallery-benchmark]");
const hintEl = document.querySelector("[data-gallery-hint]");
const countEl = document.querySelector("[data-case-count]");
const tabs = [...document.querySelectorAll("[data-task]")];

function mediaMarkup(item) {
  const featured = item.featured ? " featured" : "";
  if (item.type === "video") {
    const controls = item.controls ? " controls" : "";
    return `<div class="media-cell${featured}">
      <span class="media-label">${item.label}</span>
      <video src="${item.src}" autoplay muted loop playsinline preload="metadata"${controls} aria-label="${item.label} generated result"></video>
    </div>`;
  }
  return `<div class="media-cell${featured}">
    <span class="media-label">${item.label}</span>
    <img src="${item.src}" alt="${item.alt || item.label}" loading="lazy">
  </div>`;
}

function synchronizeVideos() {
  const videos = [...comparison.querySelectorAll("video")];
  if (videos.length < 2) return;

  videos.forEach((video) => {
    video.play().catch(() => {});
    video.addEventListener("play", () => {
      videos.forEach((peer) => {
        if (peer !== video && peer.paused) peer.play().catch(() => {});
      });
    });
    video.addEventListener("seeking", () => {
      videos.forEach((peer) => {
        if (peer !== video && Math.abs(peer.currentTime - video.currentTime) > 0.18) {
          peer.currentTime = Math.min(video.currentTime, Number.isFinite(peer.duration) ? peer.duration : video.currentTime);
        }
      });
    });
  });
}

function renderGallery(animate = true) {
  const task = galleryData[state.task];
  const item = task.cases[state.caseIndex];
  benchmarkEl.textContent = item.benchmark;
  promptEl.textContent = item.prompt;
  hintEl.textContent = task.hint || "Videos loop automatically and stay aligned for side-by-side inspection.";
  countEl.textContent = `${String(state.caseIndex + 1).padStart(2, "0")} / ${String(task.cases.length).padStart(2, "0")}`;

  comparison.className = `media-comparison cols-${item.media.length} ${state.task}`;
  comparison.innerHTML = item.media.map(mediaMarkup).join("");
  panel.setAttribute("aria-labelledby", `tab-${state.task}`);

  if (animate) {
    panel.classList.remove("is-switching");
    void panel.offsetWidth;
    panel.classList.add("is-switching");
  }
  synchronizeVideos();
}

function selectTask(task, moveFocus = false) {
  if (!galleryData[task]) return;
  state.task = task;
  state.caseIndex = 0;
  tabs.forEach((tab) => {
    const active = tab.dataset.task === task;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && moveFocus) tab.focus();
  });
  renderGallery();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTask(tab.dataset.task));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    selectTask(tabs[next].dataset.task, true);
  });
});

document.querySelector("[data-prev-case]").addEventListener("click", () => {
  const length = galleryData[state.task].cases.length;
  state.caseIndex = (state.caseIndex - 1 + length) % length;
  renderGallery();
});

document.querySelector("[data-next-case]").addEventListener("click", () => {
  const length = galleryData[state.task].cases.length;
  state.caseIndex = (state.caseIndex + 1) % length;
  renderGallery();
});

const header = document.querySelector("[data-header]");
function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navLinks.classList.toggle("open", !open);
});
navLinks.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("open");
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const copyButton = document.querySelector("[data-copy-bibtex]");
const copyLabel = document.querySelector("[data-copy-label]");
const toast = document.querySelector("[data-toast]");
let toastTimer;
copyButton.addEventListener("click", async () => {
  const text = document.querySelector("#bibtex").textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector("#bibtex"));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  }
  copyLabel.textContent = "Copied";
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    copyLabel.textContent = "Copy";
    toast.classList.remove("show");
  }, 1800);
});

renderGallery(false);
