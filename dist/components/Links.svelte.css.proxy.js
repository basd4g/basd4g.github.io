// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".links.svelte-rf8wzc.svelte-rf8wzc{margin-top:5px;width:100%}.links.svelte-rf8wzc>a.svelte-rf8wzc{display:block}.links.svelte-rf8wzc>a.svelte-rf8wzc:before{content:\"・\";display:inline-block;text-decoration:none}@media screen and (min-width: 430px){.links.svelte-rf8wzc.svelte-rf8wzc{margin-top:16px;text-align:center;display:inline-flex;justify-content:space-between;flex-wrap:wrap}.links.svelte-rf8wzc>a.svelte-rf8wzc{flex-grow:1;flex:1}.links.svelte-rf8wzc>a.svelte-rf8wzc:before{content:none}}.links-icon.svelte-rf8wzc.svelte-rf8wzc{width:64px;height:64px;border-radius:8px}.links-icon.svelte-rf8wzc.svelte-rf8wzc{box-shadow:0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);transition:.1s}.links.svelte-rf8wzc a:hover .links-icon.svelte-rf8wzc{box-shadow:0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);transform:translateY(-4px)}.links.svelte-rf8wzc a:not(:hover) .title.svelte-rf8wzc{display:none}.title-wrapper.svelte-rf8wzc.svelte-rf8wzc{height:16px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}