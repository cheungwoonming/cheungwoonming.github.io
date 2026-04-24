/*
 * Post UI: 回到顶部按钮 + 阅读进度条
 * 两个特性共用一次 scroll 事件 + rAF 节流，避免重复计算。
 * ========================================================================== */
(function () {
  var btn = document.getElementById('back-to-top');
  var bar = document.getElementById('reading-progress');
  if (!btn && !bar) return;

  var threshold = 100; // 滚动超过该像素值就显示按钮
  var ticking = false;

  function getScrollTop() {
    return window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0;
  }

  function getMaxScroll() {
    var doc = document.documentElement;
    var body = document.body;
    var scrollHeight = Math.max(
      doc.scrollHeight, body ? body.scrollHeight : 0,
      doc.offsetHeight, body ? body.offsetHeight : 0,
      doc.clientHeight
    );
    return Math.max(scrollHeight - window.innerHeight, 0);
  }

  function update() {
    var y = getScrollTop();

    if (btn) {
      if (y > threshold) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }

    if (bar) {
      var max = getMaxScroll();
      var ratio = max > 0 ? (y / max) : 0;
      if (ratio < 0) ratio = 0;
      if (ratio > 1) ratio = 1;
      bar.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  // 同时监听 window 和 document，兼容不同滚动宿主
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  // 图片等异步资源加载完成后，页面总高度变化，需要再计算一次
  window.addEventListener('load', onScroll);

  if (btn) {
    btn.addEventListener('click', function () {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    });
  }

  // 首屏立即判定一次（避免刷新后已在页面中部时按钮/进度条不同步）
  update();
})();
