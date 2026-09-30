(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-btn');

  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paint() { btn.textContent = current() === 'dark' ? '라이트 모드' : '다크 모드'; }

  paint();
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });
})();
