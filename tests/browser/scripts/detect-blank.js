(() => {
  const bodyText = document.body?.innerText?.trim() || "";
  const visibleRoot = document.querySelector("main");
  if (!visibleRoot || bodyText.length < 300) {
    throw new Error("Page appears blank or incomplete.");
  }
  return {
    title: document.title,
    textLength: bodyText.length,
    videos: document.querySelectorAll("video").length,
    images: document.querySelectorAll("img").length
  };
})();
