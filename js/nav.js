/* nav.js — shared header for all pages
   Usage: <script src="../js/nav.js" data-works="works/index.html"></script>
   Set data-root to the path prefix to reach site root, e.g. "" or "../"
*/
(function () {
  const script = document.currentScript;
  const root = script.getAttribute('data-root') || '';

  const works = [
    { title: 'Interwoven', slug: 'interwoven' },
    /* Add more works here as { title, slug } */
  ];

  function workLinks() {
    return works.map(w =>
      `<a href="${root}works/${w.slug}.html"><li>${w.title}</li></a>`
    ).join('\n');
  }

  const html = `
<header class="header">
  <div class="mirel">
    <a href="${root}works/index.html"><li>Works</li></a>
    <hr>
  </div>
  <div class="mirer">
    <a href="${root}about.html"><li>Contact</li></a>
    <hr>
  </div>
</header>

<div class="workindex">
  <ul class="albums">
    ${workLinks()}
  </ul>
</div>

<div class="mobileworkindex">
  <ul class="albums">
    ${workLinks()}
  </ul>
</div>
`;

  document.write(html);
})();
