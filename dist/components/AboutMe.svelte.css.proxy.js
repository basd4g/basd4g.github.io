// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".about-me.svelte-1fs1oyf.svelte-1fs1oyf{text-align:left;max-width:800px;margin:0 auto}.links.svelte-1fs1oyf.svelte-1fs1oyf{margin-top:5px;width:100%}.links.svelte-1fs1oyf>a.svelte-1fs1oyf{display:block}.links.svelte-1fs1oyf>a.svelte-1fs1oyf:before{content:\"・\";display:inline-block;text-decoration:none}@media screen and (min-width: 430px){.links.svelte-1fs1oyf.svelte-1fs1oyf{text-align:center;display:inline-flex;justify-content:space-between;flex-wrap:wrap}.links.svelte-1fs1oyf>a.svelte-1fs1oyf{flex-grow:1;border-style:solid;border-color:#777777;border-width:0 1px 0 0}.links.svelte-1fs1oyf>a.svelte-1fs1oyf:first-child{border-width:0 1px}.links.svelte-1fs1oyf>a.svelte-1fs1oyf:before{content:none}}table.svelte-1fs1oyf.svelte-1fs1oyf{border:none}td.svelte-1fs1oyf.svelte-1fs1oyf{padding:5px 0}td.svelte-1fs1oyf.svelte-1fs1oyf:first-child{padding-right:20px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}