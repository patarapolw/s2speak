const script = document.currentScript || (() => {
  const scripts = document.getElementsByTagName("script");
  return scripts[scripts.length - 1];
})() as HTMLScriptElement;
const q = new URL(script.getAttribute("src") || "", location.href).searchParams;

window.addEventListener("keydown", (ev) => {
  if (ev.key === (q.get("key") || "s")) {
    const s = window.getSelection()!.toString();
    if (s) {
      speak(s);
    }
  }
});

function speak(s: string) {
  const lang = q.get("lang") || "zh-CN";
  const rate = parseInt(q.get("rate") || "") || (lang === "zh-CN" ? 0.8 : 1);

  const allVoices = speechSynthesis.getVoices();
  let vs = allVoices.filter((v) => v.lang === lang);
  if (vs.length === 0) {
    const m1 = lang.substr(0, 2);
    const m2 = lang.substr(3, 2);
    const r1 = new RegExp(`^${m1}[-_]${m2}`, "i");

    vs = allVoices.filter((v) => r1.test(v.lang));
    if (vs.length === 0) {
      const r2 = new RegExp(`^${m1}`, "i");
      vs = allVoices.filter((v) => r2.test(v.lang));
    }
  }

  if (vs.length > 0) {
    const u = new SpeechSynthesisUtterance(s);
    u.lang = vs[0].lang;
    u.rate = rate || 0.8;
    speechSynthesis.speak(u);
  }
}