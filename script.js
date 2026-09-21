// Pause / play the hero loop
var hero = document.getElementById('hero');
var pauseBtn = document.getElementById('pause');
if (hero && pauseBtn) {
  pauseBtn.addEventListener('click', function () {
    var p = hero.classList.toggle('paused');
    pauseBtn.textContent = p ? 'Play loop' : 'Pause loop';
    pauseBtn.setAttribute('aria-pressed', String(p));
  });
}

// Highlight current section in nav
var links = document.querySelectorAll('nav a');
var map = {};
links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.classList.remove('active'); });
        if (map[e.target.id]) map[e.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main > section').forEach(function (s) { io.observe(s); });
}

// Form: front-end only in this prototype
var interestForm = document.getElementById('interest');
if (interestForm) {
  interestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, msg = document.getElementById('formMsg');
    if (!f.name.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value)) {
      msg.textContent = 'Enter your name and a valid email address.';
      return;
    }
    msg.textContent = 'Thanks, ' + f.name.value.trim() + '. This prototype does not send messages yet.';
  });
}

