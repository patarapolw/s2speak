const script = document.currentScript || (() => {
  const scripts = document.getElementsByTagName("script");
  return scripts[scripts.length - 1];
})() as HTMLScriptElement;
const q = new URL(script.getAttribute("src") || "", location.href).searchParams;

window.addEventListener("keydown", (ev) => {
  if (ev.key === (q.get("key") || "s")) {
    const lang = q.get('lang') || 'zh'
    const s = window.getSelection()!.toString();
    if (s) {
      speak(s, lang);
    }
  }
});

const allVoices: Record<string, string> = {}
speechSynthesis.getVoices().map(v => {
  allVoices[v.lang] = v.lang
})
speechSynthesis.onvoiceschanged = () => {
  speechSynthesis.getVoices().map(v => {
    allVoices[v.lang] = v.lang
  })
}

function speak (s: string, lang: string) {
  const voices = Object.keys(allVoices)
  const stage1 = () => voices.filter((v) => v === lang)[0]
  const stage2 = () => {
    const m1 = lang.substr(0, 2)
    const m2 = lang.substr(3, 2)
    const r1 = new RegExp(`^${m1}[-_]${m2}`, 'i')
    return voices.filter((v) => r1.test(v))[0]
  }
  const stage3 = () => {
    const m1 = lang.substr(0, 2).toLocaleLowerCase()
    return voices.filter((v) => v.toLocaleLowerCase().startsWith(m1))[0]
  }

  lang = stage1() || stage2() || stage3() || ''

  if (lang) {
    const utterance = new SpeechSynthesisUtterance(s)
    utterance.lang = lang
    speechSynthesis.speak(utterance)
  }
}
