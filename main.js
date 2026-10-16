(function () {
  var D = window.DATOS;
  if (!D) return;

  function fechaHTML(f) {
    return f
      ? '<span class="fecha">' + f + '</span>'
      : '<span class="fecha pendiente">[fecha]</span>';
  }

  function rolHTML(r) {
    return '<details class="rol"><summary>' +
      '<span class="cargo">' + r.cargo + '</span>' +
      '<span class="meta"><span class="org">' + r.org + '</span>' + fechaHTML(r.fecha) + '</span>' +
      '<span class="res">' + r.res + '</span>' +
      '</summary><p class="mas">' + r.mas + '</p></details>';
  }

  document.getElementById('cifras').innerHTML = D.cifras
    .map(function (c) { return '<li><strong>' + c.n + '</strong>' + c.t + '</li>'; })
    .join('');

  document.getElementById('destacado').innerHTML = rolHTML(D.destacado);

  document.getElementById('grupos').innerHTML = D.grupos
    .map(function (g) {
      return '<div class="grupo" style="--punto:' + g.color + '"><h3>' + g.titulo + '</h3>' +
        g.roles.map(rolHTML).join('') + '</div>';
    })
    .join('');

  document.getElementById('anio').textContent = new Date().getFullYear();

  // Las estrellas decorativas aparecen cuando entran en pantalla
  var assets = document.querySelectorAll('.asset');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    assets.forEach(function (a) { io.observe(a); });
  } else {
    assets.forEach(function (a) { a.classList.add('visto'); });
  }
})();
