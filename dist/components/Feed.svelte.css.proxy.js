// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "a.svelte-11sfkhu.svelte-11sfkhu{text-decoration:none}.feed.svelte-11sfkhu.svelte-11sfkhu{text-align:left}.feed.svelte-11sfkhu .description.svelte-11sfkhu{color:#2c3e50;font-size:16px}.feed.svelte-11sfkhu .date_and_site.svelte-11sfkhu{margin:5px 0;color:#777777}.feed.svelte-11sfkhu h3.title.svelte-11sfkhu{text-decoration:underline;margin-bottom:0;font-weight:normal;margin-top:30px}.feed.svelte-11sfkhu h3.isFirst.svelte-11sfkhu{margin-top:0px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}