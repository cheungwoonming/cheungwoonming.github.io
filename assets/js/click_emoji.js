var emj_arr = ["&#129409", "&#8986", "&#8987", "&#9200", "&#9748", "&#9749", "&#9800", "&#9801", "&#9802", "&#9803", "&#9804", "&#9805", "&#9806", "&#9807", "&#9808", "&#9809", "&#9810", "&#9811", "&#9875", "&#9889", "&#9917", "&#9918", "&#9924", "&#9925", "&#9940", "&#9962", "&#9970", "&#9971", "&#9973", "&#10024", "&#10160", "&#11088", "&#126980", "&#127183", "&#127378", "&#127379", "&#127380", "&#127381", "&#127382", "&#127383", "&#127384", "&#127385", "&#127538", "&#127539", "&#127542", "&#127568", "&#127752", "&#127753", "&#127754", "&#127755", "&#127756", "&#127759", "&#127769", "&#127774", "&#127789", "&#127790", "&#127794", "&#127795", "&#127796", "&#127797", "&#127800", "&#127801", "&#127808", "&#127809", "&#127810", "&#127812", "&#127813", "&#127814", "&#127815", "&#127816", "&#127817", "&#127821", "&#127825", "&#127826", "&#127827", "&#127828", "&#127829", "&#127830", "&#127831", "&#127834", "&#127836", "&#127839", "&#127844", "&#127846", "&#127847", "&#127848", "&#127849", "&#127856", "&#127859", "&#127865", "&#127866", "&#127868", "&#127872", "&#127876", "&#127880", "&#127891", "&#127904", "&#127905", "&#127906", "&#127910", "&#127912", "&#127914", "&#127918", "&#127919", "&#127920", "&#127922", "&#127927", "&#127928", "&#127929", "&#127931", "&#127934", "&#127936", "&#127941", "&#127942", "&#127946", "&#127952", "&#127955", "&#127973", "&#127977", "&#127979", "&#127981", "&#127984", "&#127992", "&#127993", "&#128007", "&#128009", "&#128010", "&#128011", "&#128012", "&#128025", "&#128029", "&#128030", "&#128032", "&#128051", "&#128062", "&#128081", "&#128083", "&#128082", "&#128127", "&#128146", "&#128150", "&#128152", "&#128163", "&#128164", "&#128175", "&#128190", "&#128191", "&#128197", "&#128202", "&#128204", "&#128208", "&#128214", "&#128230", "&#128273", "&#128295", "&#128296", "&#128338", "&#128341", "&#128344", "&#128347", "&#128373", "&#128512", "&#128516", "&#128525", "&#128526", "&#128565", "&#128567", "&#128579", "&#128640", "&#128641", "&#128641", "&#128657", "&#128658", "&#128679", "&#128677", "&#128692", "&#128760", "&#129381", "&#129385"],emj_arr2 = [];
// emj数值参考：https://www.runoob.com/charsets/ref-emoji.html
!function(e, t, a) {
  function n() {
    c(".heart{width:1px;user-select:none;height:1px;position:fixed;cursor:default;font-size:20px;}"),
    o(),
    r()
  }
  function r() {
    for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";z-index:99999");
    requestAnimationFrame(r)
  }
  function o() {
    var t = "function" == typeof e.onclick && e.onclick;
    e.onclick = function(e) {
      t && t(),
      i(e)
    }
  }
  function rf() {
    emj_arr.length <= 0 && (emj_arr = emj_arr2, emj_arr2 = []);
    let idx = Math.round(Math.random() * emj_arr.length - 1);
    idx = idx < 0 ? 0 : idx;
    let ths = emj_arr[idx];
    return emj_arr.splice(idx, 1),
    emj_arr2.push(ths),
    ths
  }
  function i(e) {
    var a = t.createElement("div");
    a.innerHTML = rf(),
    a.className = "heart",
    d.push({
      el: a,
      x: e.clientX - 10,
      y: e.clientY - 15,
      scale: 1,
      alpha: 1
    }),
    t.body.appendChild(a)
  }
  function c(e) {
    var a = t.createElement("style");
    a.type = "text/css";
    try {
      a.appendChild(t.createTextNode(e))
    } catch(n) {
      a.styleSheet.cssText = e
    }
    t.getElementsByTagName("head")[0].appendChild(a)
  }
  var d = [];
  e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
  function(e) {
    setTimeout(e, 1e3 / 60)
  },
  n()
} (window, document);
