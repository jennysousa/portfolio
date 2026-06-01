/* Jennifer Sousa — Portfolio · interactions */
(function () {
  "use strict";
  var root = document.documentElement;
  var animOff = function () { return root.getAttribute("data-anim") === "off"; };

  /* ---- Scroll reveal ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  // Manual fallback: reveal anything within (or above) the viewport.
  // Runs on load + on scroll so content never stays hidden even if
  // IntersectionObserver is unavailable or sluggish in some embeds.
  function revealInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = revealEls.length - 1; i >= 0; i--) {
      var el = revealEls[i];
      if (el.classList.contains("in")) { revealEls.splice(i, 1); continue; }
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add("in");
        revealEls.splice(i, 1);
      }
    }
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
    // safety net in case the observer never fires
    window.addEventListener("load", function () { setTimeout(revealInView, 500); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    revealEls = [];
  }

  /* ---- Count-up for stats ---- */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-to"), 10) || 0;
    if (animOff()) { el.textContent = String(to); return; }
    var dur = 1100, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = String(to);
    }
    requestAnimationFrame(step);
  }
  var counts = Array.prototype.slice.call(document.querySelectorAll(".count"));
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); io2.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counts.forEach(function (el) { io2.observe(el); });
  } else {
    counts.forEach(function (el) { el.textContent = el.getAttribute("data-to"); });
  }

  /* ---- Nav + progress + parallax on scroll ---- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("progress");
  var hero = document.querySelector(".hero__inner");
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (revealEls.length) revealInView();
    if (nav) nav.classList.toggle("scrolled", y > 24);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    if (hero && !animOff() && y < window.innerHeight) {
      hero.style.transform = "translateY(" + (y * 0.14) + "px)";
      hero.style.opacity = String(Math.max(0, 1 - (y / window.innerHeight) * 1.1));
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---- Back to top ---- */
  var toTop = document.getElementById("toTop");
  if (toTop) toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: animOff() ? "auto" : "smooth" });
  });

  /* ---- Lightbox / slideshow ---- */
  var lb = document.getElementById("lightbox");
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  if (lb && triggers.length) {
    var lbImg = document.getElementById("lbImg");
    var lbCap = document.getElementById("lbCap");
    var lbCount = document.getElementById("lbCount");
    var items = triggers.map(function (t) {
      return { src: t.getAttribute("data-lightbox"), cap: t.getAttribute("data-cap") || "" };
    });
    var current = 0;
    var lastFocused = null;

    function render() {
      var it = items[current];
      lbImg.src = it.src;
      lbImg.alt = it.cap;
      lbCap.textContent = it.cap;
      lbCount.textContent = (current + 1) + " / " + items.length;
    }
    function openAt(i) {
      current = i;
      lastFocused = document.activeElement;
      lb.hidden = false;
      render();
      // next frame so the transition runs
      requestAnimationFrame(function () { lb.classList.add("open"); });
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      window.setTimeout(function () {
        lb.hidden = true;
        lbImg.removeAttribute("src");
        if (lastFocused && lastFocused.focus) lastFocused.focus();
      }, 320);
    }
    function go(dir) {
      current = (current + dir + items.length) % items.length;
      // brief fade for slide change
      lbImg.style.opacity = "0";
      lbImg.style.transform = "scale(.97)";
      window.setTimeout(function () {
        render();
        requestAnimationFrame(function () {
          lbImg.style.opacity = "";
          lbImg.style.transform = "";
        });
      }, 130);
    }

    triggers.forEach(function (t, i) {
      t.addEventListener("click", function () { openAt(i); });
    });
    lb.querySelector(".lb__close").addEventListener("click", close);
    lb.querySelector(".lb__prev").addEventListener("click", function () { go(-1); });
    lb.querySelector(".lb__next").addEventListener("click", function () { go(1); });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb__stage")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    });

    /* swipe on touch */
    var sx = null;
    lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      sx = null;
    }, { passive: true });
  }
})();
