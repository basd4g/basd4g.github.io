// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#app.svelte-1wonys6{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}a{color:#5da4de}footer.svelte-1wonys6{margin-top:50px;color:#777777}h2{margin-top:50px;margin-bottom:10px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}