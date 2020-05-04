const r = require('../README.md')
const converter = new showdown.Converter();
converter.setFlavor("github");
document.getElementById("App").innerHTML = converter.makeHtml(r);
hljs.initHighlightingOnLoad();