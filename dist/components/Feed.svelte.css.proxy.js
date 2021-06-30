// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "a.svelte-1ksjnk4.svelte-1ksjnk4{text-decoration:none}.feed.svelte-1ksjnk4.svelte-1ksjnk4{text-align:left}.feed.svelte-1ksjnk4 .description.svelte-1ksjnk4{color:#2c3e50e0;font-size:16px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-height:48px}.feed.svelte-1ksjnk4 .date_and_site.svelte-1ksjnk4{margin:5px 0;color:#777777}.feed.svelte-1ksjnk4 h3.title.svelte-1ksjnk4{text-decoration:underline;margin-bottom:0;font-weight:normal;margin-top:30px}.feed.svelte-1ksjnk4 h3.isFirst.svelte-1ksjnk4{margin-top:0px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}