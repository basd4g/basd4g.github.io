// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "table.svelte-18jjhzd{border:none}td.svelte-18jjhzd{padding:5px 0}td.svelte-18jjhzd:first-child{padding-right:20px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}