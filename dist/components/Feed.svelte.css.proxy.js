// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "a.svelte-vfz1k7.svelte-vfz1k7{text-decoration:none}.feed.svelte-vfz1k7.svelte-vfz1k7{text-align:left}.feed.svelte-vfz1k7 .description.svelte-vfz1k7{color:#2c3e50e0;font-size:16px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-height:48px}.feed.svelte-vfz1k7 .date_and_site.svelte-vfz1k7{margin:5px 0;color:#777777}.feed.svelte-vfz1k7 h3.title.svelte-vfz1k7{text-decoration:underline;margin-bottom:0;font-weight:normal;margin-top:30px}.feed.svelte-vfz1k7 h3.isFirst.svelte-vfz1k7{margin-top:0px}.feed.svelte-vfz1k7.svelte-vfz1k7:hover{background:#f8f8f8;border-radius:8px}.feed.svelte-vfz1k7:hover .description.svelte-vfz1k7{color:#222222}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}