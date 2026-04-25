(function () {
  const script = document.currentScript;
  const root = script.getAttribute('data-root') || '';

  const works = [
    { title: 'Interwoven', slug: 'interwoven' },
    { title: 'let me breathe', slug: 'let-me-breathe' },
    { title: 'Netz', slug: 'netz' },
    { title: 'Numb', slug: 'numb' },
    { title: 'shame is an isolating emotion (working title)', slug: 'shame' },
  ];

  function workLinks() {
    return works.map(w =>
      `<a href="${root}works/${w.slug}.html"><li>${w.title}</li></a>`
    ).join('\n');
  }

  document.write(`
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
`);

  window.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend',
      '<footer class="footer">' +
      '\u00a9 2026 Chiara Bulang. Alle Rechte vorbehalten.<br>' +
      'Der gesamte Inhalt dieser Website (einschlie\u00dflich Code, Videos, Bilder, Texte und Design) ' +
      'darf ohne ausdr\u00fcckliche schriftliche Genehmigung nicht kopiert, ver\u00e4ndert, ' +
      'verbreitet oder anderweitig genutzt werden.' +
      '</footer>'
    );
  });
})();
