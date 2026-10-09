const video = (label, src, featured = false, controls = false) => ({ type: "video", label, src, featured, controls });
const image = (label, src, alt, featured = false) => ({ type: "image", label, src, alt, featured });

const galleryData = [
  {
    id: "t2v", order: "01", short: "T2V", title: "Text-to-Video",
    description: "Motion, physical interaction, and prompt fidelity across three video backbones.",
    hint: "Base CFG, CFG-Map, and TrajCFG are synchronized automatically.",
    backbones: [
      {
        id: "wan22-14b", label: "Wan2.2-14B", scale: "14B",
        cases: [
          {
            benchmark: "VBench",
            prompt: "A person plays an acoustic guitar gently in a candlelit living room with a warm, nostalgic atmosphere.",
            media: [video("Base CFG", "assets/gallery/t2v/vbench_wan22_14b/base.mp4"), video("CFG-Map", "assets/gallery/t2v/vbench_wan22_14b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/t2v/vbench_wan22_14b/trajcfg.mp4", true)]
          },
          {
            benchmark: "DynamicBench",
            prompt: "A knife slices through a ripe tomato; the separated slice falls flat while juice spreads across the cutting board.",
            media: [video("Base CFG", "assets/gallery/t2v/dynamic_bench_wan22_14b/base.mp4"), video("CFG-Map", "assets/gallery/t2v/dynamic_bench_wan22_14b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/t2v/dynamic_bench_wan22_14b/trajcfg.mp4", true)]
          }
        ]
      },
      {
        id: "wan21-13b", label: "Wan2.1-1.3B", scale: "1.3B",
        cases: [
          {
            benchmark: "VBench",
            prompt: "A vintage black-and-white film still of a suited man with a suitcase, reflecting beside an old brick building.",
            media: [video("Base CFG", "assets/gallery/t2v/vbench_wan21_13b/base.mp4"), video("CFG-Map", "assets/gallery/t2v/vbench_wan21_13b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/t2v/vbench_wan21_13b/trajcfg.mp4", true)]
          },
          {
            benchmark: "DynamicBench",
            prompt: "A car drives through a large puddle, splashing water high onto the sidewalk and drenching a nearby fire hydrant.",
            media: [video("Base CFG", "assets/gallery/t2v/dynamic_bench_wan21_13b/base.mp4"), video("CFG-Map", "assets/gallery/t2v/dynamic_bench_wan21_13b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/t2v/dynamic_bench_wan21_13b/trajcfg.mp4", true)]
          }
        ]
      },
      {
        id: "wan22-5b", label: "Wan2.2-5B", scale: "5B",
        cases: [
          {
            benchmark: "VBench",
            prompt: "A sleek black motorcycle glides through a vast snowy field on a crisp winter morning as snow falls gently.",
            media: [video("Base CFG", "assets/gallery/t2v/vbench_wan22_5b/base.mp4"), video("CFG-Map", "assets/gallery/t2v/vbench_wan22_5b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/t2v/vbench_wan22_5b/trajcfg.mp4", true)]
          },
          {
            benchmark: "DynamicBench",
            prompt: "A cat paws at a dangling yarn ball, making it swing like a pendulum while the cat reaches for it again.",
            media: [video("Base CFG", "assets/gallery/t2v/dynamic_bench_wan22_5b/base.mp4"), video("CFG-Map", "assets/gallery/t2v/dynamic_bench_wan22_5b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/t2v/dynamic_bench_wan22_5b/trajcfg.mp4", true)]
          }
        ]
      }
    ]
  },
  {
    id: "i2v", order: "02", short: "I2V", title: "Image-to-Video",
    description: "Condition preservation and dynamic consistency from a single input image.",
    hint: "The input image is shown beside Base CFG, CFG-Map, and TrajCFG.",
    backbones: [
      {
        id: "wan22-14b", label: "Wan2.2-14B", scale: "14B",
        cases: [
          {
            benchmark: "VBench-I2V", prompt: "A living room with a couch, table, and window; the camera smoothly zooms out.",
            media: [image("Input", "assets/gallery/i2v/vbench_i2v_wan22_14b/input.jpeg", "Input living-room image."), video("Base CFG", "assets/gallery/i2v/vbench_i2v_wan22_14b/base.mp4"), video("CFG-Map", "assets/gallery/i2v/vbench_i2v_wan22_14b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/i2v/vbench_i2v_wan22_14b/trajcfg.mp4", true)]
          },
          {
            benchmark: "PAI-G", prompt: "A white robotic arm carefully picks up and tilts a ceramic bowl beside a kitchen sink.",
            media: [image("Input", "assets/gallery/i2v/pai_g_wan22_14b/input.jpeg", "Input image of a robotic arm beside a kitchen sink."), video("Base CFG", "assets/gallery/i2v/pai_g_wan22_14b/base.mp4"), video("CFG-Map", "assets/gallery/i2v/pai_g_wan22_14b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/i2v/pai_g_wan22_14b/trajcfg.mp4", true)]
          }
        ]
      },
      {
        id: "cosmos", label: "Cosmos-Predict2.5-2B", scale: "2B",
        cases: [
          {
            benchmark: "VBench-I2V", prompt: "A woman with curly hair drinks a beer while preserving the source identity and scene.",
            media: [image("Input", "assets/gallery/i2v/vbench_i2v_cosmos/input.jpeg", "Input image of a woman with curly hair."), video("Base CFG", "assets/gallery/i2v/vbench_i2v_cosmos/base.mp4"), video("CFG-Map", "assets/gallery/i2v/vbench_i2v_cosmos/cfg_map.mp4"), video("TrajCFG", "assets/gallery/i2v/vbench_i2v_cosmos/trajcfg.mp4", true)]
          },
          {
            benchmark: "PAI-G", prompt: "Thick translucent honey drips slowly onto a glossy honeycomb structure against a black background.",
            media: [image("Input", "assets/gallery/i2v/pai_g_cosmos/input.jpeg", "Input close-up image of a golden honeycomb-like material."), video("Base CFG", "assets/gallery/i2v/pai_g_cosmos/base.mp4"), video("CFG-Map", "assets/gallery/i2v/pai_g_cosmos/cfg_map.mp4"), video("TrajCFG", "assets/gallery/i2v/pai_g_cosmos/trajcfg.mp4", true)]
          }
        ]
      },
      {
        id: "wan22-5b", label: "Wan2.2-5B", scale: "5B",
        cases: [
          {
            benchmark: "VBench-I2V", prompt: "A lighthouse stands at the edge of the water as the image comes to life.",
            media: [image("Input", "assets/gallery/i2v/vbench_i2v_wan22_5b/input.jpeg", "Input image of a lighthouse by the water."), video("Base CFG", "assets/gallery/i2v/vbench_i2v_wan22_5b/base.mp4"), video("CFG-Map", "assets/gallery/i2v/vbench_i2v_wan22_5b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/i2v/vbench_i2v_wan22_5b/trajcfg.mp4", true)]
          },
          {
            benchmark: "PAI-G", prompt: "A woman smoothly takes a festive red cup from a robotic hand in a bright modern indoor space.",
            media: [image("Input", "assets/gallery/i2v/pai_g_wan22_5b/input.jpeg", "Input image of robotic arms holding a red cup."), video("Base CFG", "assets/gallery/i2v/pai_g_wan22_5b/base.mp4"), video("CFG-Map", "assets/gallery/i2v/pai_g_wan22_5b/cfg_map.mp4"), video("TrajCFG", "assets/gallery/i2v/pai_g_wan22_5b/trajcfg.mp4", true)]
          }
        ]
      }
    ]
  },
  {
    id: "t2av", order: "03", short: "T2AV", title: "Text-to-Audio-Video",
    description: "Joint visual, sound, and speech alignment on two audio-video backbones.",
    hint: "Use the native video controls to unmute and compare synchronized audio.",
    backbones: [
      {
        id: "ovi", label: "Ovi", scale: "A/V",
        cases: [
          { benchmark: "T2AV-Compass", prompt: "A gamer panics when combat audio cuts out and a low-battery controller starts beeping: “My controller died! Revive me!”", media: [video("Base", "assets/gallery/t2av/t2av_compass_ovi/base.mp4", false, true), video("TrajCFG", "assets/gallery/t2av/t2av_compass_ovi/trajcfg.mp4", true, true)] },
          { benchmark: "VABench", prompt: "A hand squeezes a plastic bottle until it caves in with crisp crunching, groaning, and a dull thud.", media: [video("Base", "assets/gallery/t2av/vabench_ovi/base.mp4", false, true), video("TrajCFG", "assets/gallery/t2av/vabench_ovi/trajcfg.mp4", true, true)] }
        ]
      },
      {
        id: "ltx23", label: "LTX-Video 2.3", scale: "A/V",
        cases: [
          { benchmark: "T2AV-Compass", prompt: "A rain-soaked young man knocks three times; a lock clicks and the wooden door slowly creaks open.", media: [video("Base", "assets/gallery/t2av/t2av_compass_ltx23/base.mp4", false, true), video("TrajCFG", "assets/gallery/t2av/t2av_compass_ltx23/trajcfg.mp4", true, true)] },
          { benchmark: "VABench", prompt: "A kitten curls lazily in the sunlight and lets out a soft, gentle, nasal meow.", media: [video("CFG-Map", "assets/gallery/t2av/vabench_ltx23/cfg_map.mp4", false, true), video("TrajCFG", "assets/gallery/t2av/vabench_ltx23/trajcfg.mp4", true, true)] }
        ]
      }
    ]
  },
  {
    id: "t2i", order: "04", short: "T2I", title: "Text-to-Image",
    description: "Prompt adherence, counting, spatial relations, colors, and attribute binding.",
    hint: "Each figure pairs Base and TrajCFG on GenEval and DPG-Bench prompts.",
    backbones: [
      { id: "qwen-image", label: "Qwen-Image", scale: "20B", cases: [{ benchmark: "GenEval · DPG-Bench", prompt: "TrajCFG better preserves requested identities, counts, relations, colors, and attribute bindings.", media: [image("Base / TrajCFG", "assets/gallery/t2i/qwen-image/comparison.png", "Qwen-Image qualitative comparisons on GenEval and DPG-Bench.", true)] }] },
      { id: "sd3-medium", label: "SD3-Medium", scale: "2B", cases: [{ benchmark: "GenEval · DPG-Bench", prompt: "Trajectory feedback improves compositional correctness while maintaining visual quality.", media: [image("Base / TrajCFG", "assets/gallery/t2i/sd3-medium/comparison.png", "SD3-Medium qualitative comparisons on GenEval and DPG-Bench.", true)] }] }
    ]
  },
  {
    id: "i23d", order: "05", short: "I2-3D", title: "Image-to-3D",
    description: "Shape and texture preservation across every qualitative GSO example.",
    hint: "Input, Base, and TrajCFG rotations are shown side by side.",
    backbones: [{
      id: "hunyuan3d", label: "Hunyuan3D 2.0", scale: "Shape + Texture",
      cases: ["143", "209", "386"].map((sample) => ({
        benchmark: `GSO · Sample ${sample}`,
        prompt: "Image-conditioned 3D reconstruction with improved shape and texture consistency.",
        media: [image("Input", `assets/gallery/i2-3d/${sample}.jpeg`, `Input image for GSO sample ${sample}.`), image("Base", `assets/gallery/i2-3d/${sample}_base.gif`, `Rotating Base result for GSO sample ${sample}.`), image("TrajCFG", `assets/gallery/i2-3d/${sample}_trajcfg.gif`, `Rotating TrajCFG result for GSO sample ${sample}.`, true)]
      }))
    }]
  }
];

const backbonePriority = {
  t2v: ["wan22-14b", "wan22-5b", "wan21-13b"],
  i2v: ["wan22-14b", "wan22-5b", "cosmos"]
};
galleryData.forEach((modality) => {
  const priority = backbonePriority[modality.id];
  if (priority) modality.backbones.sort((a, b) => priority.indexOf(a.id) - priority.indexOf(b.id));
});

const galleryState = Object.fromEntries(galleryData.map((modality) => [modality.id, { backbone: 0, case: 0 }]));
const galleryRoot = document.querySelector("[data-gallery-root]");

function mediaMarkup(item) {
  const featured = item.featured ? " featured" : "";
  if (item.type === "video") {
    const controls = item.controls ? " controls" : "";
    return `<div class="media-cell${featured}"><span class="media-label">${item.label}</span><video src="${item.src}" autoplay muted loop playsinline preload="metadata"${controls} aria-label="${item.label} generated result"></video></div>`;
  }
  return `<div class="media-cell${featured}"><span class="media-label">${item.label}</span><img src="${item.src}" alt="${item.alt}" loading="lazy"></div>`;
}

function modalityMarkup(modality, animate = false) {
  const state = galleryState[modality.id];
  const backbone = modality.backbones[state.backbone];
  const currentCase = backbone.cases[state.case];
  const panelId = `${modality.id}-backbone-panel`;
  const controlsDisabled = backbone.cases.length === 1 ? " disabled" : "";
  const backboneTabs = modality.backbones.map((item, index) => {
    const selected = index === state.backbone;
    return `<button type="button" role="tab" id="${modality.id}-tab-${item.id}" aria-controls="${panelId}" aria-selected="${selected}" tabindex="${selected ? 0 : -1}" data-backbone-index="${index}"><span>${item.label}</span><small>${item.scale}</small></button>`;
  }).join("");

  return `<section class="modality-block" data-modality="${modality.id}" aria-labelledby="${modality.id}-title">
    <header class="modality-header"><div class="modality-title-row"><span class="modality-number">${modality.order}</span><div><span class="modality-short">${modality.short}</span><h3 id="${modality.id}-title">${modality.title}</h3></div></div><p>${modality.description}</p></header>
    <div class="backbone-nav"><span class="backbone-label">Backbone <i>strongest first</i></span><div class="backbone-tabs" role="tablist" aria-label="${modality.title} backbones">${backboneTabs}</div></div>
    <div class="gallery-frame${animate ? " is-switching" : ""}" id="${panelId}" role="tabpanel" aria-labelledby="${modality.id}-tab-${backbone.id}" tabindex="0">
      <div class="gallery-meta"><div><span class="gallery-benchmark">${currentCase.benchmark} · ${backbone.label}</span><p class="gallery-prompt">${currentCase.prompt}</p><p class="gallery-hint">${modality.hint}</p></div>
        <div class="case-controls" aria-label="${modality.title} example navigation"><button type="button" data-case-action="prev" aria-label="Previous ${modality.title} example"${controlsDisabled}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg></button><span aria-live="polite">${String(state.case + 1).padStart(2, "0")} / ${String(backbone.cases.length).padStart(2, "0")}</span><button type="button" data-case-action="next" aria-label="Next ${modality.title} example"${controlsDisabled}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></button></div>
      </div>
      <div class="media-comparison cols-${currentCase.media.length} ${modality.id}">${currentCase.media.map(mediaMarkup).join("")}</div>
    </div>
  </section>`;
}

function synchronizeVideos(scope) {
  const videos = [...scope.querySelectorAll("video")];
  if (videos.length < 2) return;
  videos.forEach((item) => {
    item.play().catch(() => {});
    item.addEventListener("play", () => videos.forEach((peer) => { if (peer !== item && peer.paused) peer.play().catch(() => {}); }));
    item.addEventListener("seeking", () => videos.forEach((peer) => { if (peer !== item && Math.abs(peer.currentTime - item.currentTime) > 0.18) peer.currentTime = item.currentTime; }));
  });
}

function renderAllGalleries() {
  galleryRoot.innerHTML = galleryData.map((modality) => modalityMarkup(modality)).join("");
  galleryRoot.querySelectorAll("[data-modality]").forEach(synchronizeVideos);
}

function rerenderModality(modalityId, focusBackbone = false) {
  const modality = galleryData.find((item) => item.id === modalityId);
  galleryRoot.querySelector(`[data-modality="${modalityId}"]`).outerHTML = modalityMarkup(modality, true);
  const newSection = galleryRoot.querySelector(`[data-modality="${modalityId}"]`);
  synchronizeVideos(newSection);
  if (focusBackbone) newSection.querySelector('[aria-selected="true"]').focus();
}

galleryRoot.addEventListener("click", (event) => {
  const section = event.target.closest("[data-modality]");
  if (!section) return;
  const modalityId = section.dataset.modality;
  const modality = galleryData.find((item) => item.id === modalityId);
  const state = galleryState[modalityId];
  const backboneButton = event.target.closest("[data-backbone-index]");
  if (backboneButton) {
    state.backbone = Number(backboneButton.dataset.backboneIndex);
    state.case = 0;
    rerenderModality(modalityId, true);
    return;
  }
  const caseButton = event.target.closest("[data-case-action]");
  if (!caseButton) return;
  const length = modality.backbones[state.backbone].cases.length;
  state.case = caseButton.dataset.caseAction === "next" ? (state.case + 1) % length : (state.case - 1 + length) % length;
  rerenderModality(modalityId);
});

galleryRoot.addEventListener("keydown", (event) => {
  const target = event.target.closest("[data-backbone-index]");
  if (!target || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const modalityId = target.closest("[data-modality]").dataset.modality;
  const modality = galleryData.find((item) => item.id === modalityId);
  let index = Number(target.dataset.backboneIndex);
  if (event.key === "ArrowRight") index = (index + 1) % modality.backbones.length;
  if (event.key === "ArrowLeft") index = (index - 1 + modality.backbones.length) % modality.backbones.length;
  if (event.key === "Home") index = 0;
  if (event.key === "End") index = modality.backbones.length - 1;
  galleryState[modalityId] = { backbone: index, case: 0 };
  rerenderModality(modalityId, true);
});

renderAllGalleries();
window.addEventListener("load", () => {
  if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
}, { once: true });

const header = document.querySelector("[data-header]");
function updateHeader() { header.classList.toggle("scrolled", window.scrollY > 18); }
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
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px" });
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
  try { await navigator.clipboard.writeText(text); }
  catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector("#bibtex"));
    selection.removeAllRanges(); selection.addRange(range); document.execCommand("copy"); selection.removeAllRanges();
  }
  copyLabel.textContent = "Copied";
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { copyLabel.textContent = "Copy"; toast.classList.remove("show"); }, 1800);
});
