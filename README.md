# s2speak

Highlight the text and press "s" to speak; after including a script tag.

```html
<script src="https://patarapolw.github.io/s2speak/speak.js">
```

Try highlighting this text, and press "s"

范例文字，请取代此段落文字。此段落文字为范例文字内容，请务必取代。范例文字，请取代此段落文字。此段落文字为范例文字内容，请务必取代。范例文字，请取代此段落文字。此段落文字为范例文字内容，请务必取代。范例文字，请取代此段落文字。此段落文字为范例文字内容，请务必取代。

## Options

Please set the options in the script's query string. All are optional.

- key -- Keyboard trigger to speak (default: `s`)
- lang -- Speaking language, according to `speechSynthesis.getVoices()`, optionally two characters. Will be fixed for mobile, which `speechSynthesis.getVoices()` might yield different results.

## Usage

I plan to use this with <https://reveal-md.herokuapp.com>, and add YAML front matter,

```yaml
---
js:
  - https://patarapolw.github.io/s2speak/speak.js?key=x
---
```
