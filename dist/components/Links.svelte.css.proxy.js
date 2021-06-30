// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".links.svelte-gfpvw6.svelte-gfpvw6{margin-top:5px;width:100%}.links.svelte-gfpvw6>a.svelte-gfpvw6{display:block}.links.svelte-gfpvw6>a.svelte-gfpvw6:before{content:\"・\";display:inline-block;text-decoration:none}@media screen and (min-width: 430px){.links.svelte-gfpvw6.svelte-gfpvw6{margin-top:16px;text-align:center;display:inline-flex;justify-content:space-between;flex-wrap:wrap}.links.svelte-gfpvw6>a.svelte-gfpvw6{flex-grow:1;flex:1}.links.svelte-gfpvw6>a.svelte-gfpvw6:before{content:none}}.links-icon.svelte-gfpvw6.svelte-gfpvw6{width:64px;height:64px;border-radius:8px}.links-icon.svelte-gfpvw6.svelte-gfpvw6{box-shadow:0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);transition:.3s}.links.svelte-gfpvw6 a:hover .links-icon.svelte-gfpvw6{box-shadow:0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);transform:translateY(-4px)}.links.svelte-gfpvw6 a:not(:hover) .title.svelte-gfpvw6{display:none}.title-wrapper.svelte-gfpvw6.svelte-gfpvw6{height:16px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}