// Glowy, the Glowguss mascot. Copied 1:1 from the app (app/app.js, glowyStyl … glowyPracuje) so the website and app show the same character.
(function () {
  var glN = 0;
  function glowyStyl() {
    if (document.getElementById("glowy-css")) return;
    var st = document.createElement("style"); st.id = "glowy-css";
    st.textContent = "@keyframes glF{0%,100%{transform:scale(1,1) skewX(0)}30%{transform:scale(.97,1.05) skewX(-3deg)}65%{transform:scale(1.02,.97) skewX(2deg)}}" +
      "@keyframes glI{0%,100%{transform:scale(1)}50%{transform:scale(.9,1.12)}}" +
      "@keyframes glE{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}" +
      "@keyframes glA{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(16deg)}}" +
      "@keyframes glT{0%,100%{transform:rotate(14deg)}50%{transform:rotate(-16deg)}}" +
      "@keyframes glB{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.5px)}}" +
      ".glowy .gf{transform-box:fill-box;transform-origin:50% 100%;animation:glF 1.7s ease-in-out infinite}" +
      ".glowy .gi{transform-box:fill-box;transform-origin:50% 100%;animation:glI 1.1s ease-in-out infinite}" +
      ".glowy .ge{transform-box:fill-box;transform-origin:50% 50%;animation:glE 4.2s infinite}" +
      "@keyframes glA2{0%,14%,100%{transform:rotate(-6deg)}3.5%,10.5%{transform:rotate(16deg)}7%{transform:rotate(-6deg)}}" +
      "@keyframes glT2{0%,14%,100%{transform:rotate(0)}2%,9%{transform:rotate(14deg)}5.5%,12.5%{transform:rotate(-16deg)}}" +
      "@keyframes glS{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(var(--sx,3px),16px);opacity:0}}" +
      "@keyframes glK{to{transform:rotate(360deg)}}" +
      "@keyframes glQ{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}" +
      "@keyframes glN{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(-8px,-26px);opacity:0}}" +
      "@keyframes glP{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}" +
      "@keyframes glR{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}" +
      ".glowy .gs{transform-box:fill-box;animation:glS 1.6s ease-in infinite}" +
      ".glowy .gk{transform-box:fill-box;transform-origin:50% 50%;animation:glK 2.4s linear infinite}" +
      ".glowy .gq{transform-box:fill-box;transform-origin:50% 100%;animation:glQ .64s ease-in-out infinite}" +
      ".glowy .gn{transform-box:fill-box;animation:glN 2.6s ease-out infinite}" +
      ".glowy .gp{animation:glP .32s ease-in-out infinite}" +
      ".glowy .gr{animation:glR 1.28s ease-in-out infinite}" +
      "@keyframes glH{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}" +
      "@keyframes glZ{0%,100%{opacity:0}10%,30%{opacity:1}}" +
      ".glowy .gh{animation:glH .32s ease-in-out infinite}" +
      ".glowy .gz{animation:glZ .9s steps(1) infinite}" +
      ".glowy .gb{animation:glB 2.2s ease-in-out infinite}" +
      ".glowy-btn:hover .glowy .gf{animation-duration:.8s}" +
      "@media (prefers-reduced-motion:reduce){.glowy *{animation:none!important}}";
    document.head.appendChild(st);
  }
  function glowyHlava(i, vyraz) {   // flame head in a 64x64 box; vyraz: "spi" (eyes shut), "smutny", "slavi" (open laugh), "premysli"
    if (vyraz) return glowyHlavaV(i, vyraz);
    return '<g class="gf"><path d="M32 6C38 16 52 22 52 39a20 20 0 0 1-40 0c0-9 5-14 9-19 1 5 4 8 7 8-3-8 0-15 4-22z" fill="url(#' + i + 'b)"/>' +
      '<path class="gi" d="M32 30c4 4 10 6 10 12a10 10 0 0 1-20 0c0-4 2-6 4-8 1 2 3 3 4 3-1-3 0-5 2-7z" fill="url(#' + i + 'c)" opacity=".9"/></g>' +
      '<g class="ge"><ellipse cx="26" cy="40" rx="3.2" ry="4" fill="#1A1220"/><ellipse cx="38" cy="40" rx="3.2" ry="4" fill="#1A1220"/>' +
      '<circle cx="27" cy="38.6" r="1.1" fill="#fff"/><circle cx="39" cy="38.6" r="1.1" fill="#fff"/></g>' +
      '<path d="M28 47q4 3.5 8 0" fill="none" stroke="#1A1220" stroke-width="2" stroke-linecap="round"/>' +
      '<ellipse cx="21" cy="46" rx="2.6" ry="1.6" fill="#FF6FA8" opacity=".55"/><ellipse cx="43" cy="46" rx="2.6" ry="1.6" fill="#FF6FA8" opacity=".55"/>';
  }
  function glowyHlavaV(i, v) {
    var oci = v === "spi" ? '<path d="M22.5 41q3.5 3 7 0M34.5 41q3.5 3 7 0" stroke="#1A1220" stroke-width="2" fill="none" stroke-linecap="round"/>'
      : v === "smutny" ? '<g class="ge"><ellipse cx="26" cy="41" rx="3" ry="3.4" fill="#1A1220"/><ellipse cx="38" cy="41" rx="3" ry="3.4" fill="#1A1220"/><circle cx="27" cy="40" r="1" fill="#fff"/><circle cx="39" cy="40" r="1" fill="#fff"/></g><path d="M21.5 35.5l7 2M42.5 35.5l-7 2" stroke="#1A1220" stroke-width="1.8" stroke-linecap="round"/>'
      : v === "slavi" ? '<path d="M22.5 41q3.5-4.5 7 0M34.5 41q3.5-4.5 7 0" stroke="#1A1220" stroke-width="2.2" fill="none" stroke-linecap="round"/>'
      : '<g class="ge"><ellipse cx="27" cy="39" rx="3.2" ry="4" fill="#1A1220"/><ellipse cx="39" cy="39" rx="3.2" ry="4" fill="#1A1220"/><circle cx="28.2" cy="37.4" r="1.1" fill="#fff"/><circle cx="40.2" cy="37.4" r="1.1" fill="#fff"/></g>';
    var pusa = v === "spi" ? '<ellipse cx="32" cy="48" rx="2" ry="1.6" fill="#1A1220"/>'
      : v === "smutny" ? '<path d="M28 49q4-3.5 8 0" fill="none" stroke="#1A1220" stroke-width="2" stroke-linecap="round"/><path class="gs" d="M23 45q2 3 0 4.4q-2-1.4 0-4.4z" fill="#7FD3FF" style="--sx:0px;animation-duration:2.4s"/>'
      : v === "slavi" ? '<path d="M26 46q6 8 12 0z" fill="#1A1220"/><path d="M29 49.5q3 2 6 0" stroke="#FF6FA8" stroke-width="2" fill="none"/>'
      : '<path d="M29 48q3 1 6-1" fill="none" stroke="#1A1220" stroke-width="2" stroke-linecap="round"/>';
    var sv = v === "spi" || v === "smutny";
    return '<g class="gf"' + (sv ? ' style="animation-duration:3.4s"' : '') + '><path d="M32 6C38 16 52 22 52 39a20 20 0 0 1-40 0c0-9 5-14 9-19 1 5 4 8 7 8-3-8 0-15 4-22z" fill="url(#' + i + 'b)"' + (sv ? ' opacity=".8"' : '') + '/>' +
      '<path class="gi" d="M32 30c4 4 10 6 10 12a10 10 0 0 1-20 0c0-4 2-6 4-8 1 2 3 3 4 3-1-3 0-5 2-7z" fill="url(#' + i + 'c)" opacity="' + (sv ? '.6' : '.9') + '"/></g>' + oci + pusa +
      '<ellipse cx="21" cy="46" rx="2.6" ry="1.6" fill="#FF6FA8" opacity=".55"/><ellipse cx="43" cy="46" rx="2.6" ry="1.6" fill="#FF6FA8" opacity=".55"/>';
  }
  // Glowy's poses for the app and the brand: vita (waves the towel), premysli, slavi, smutny, spi, palec (thumbs up)
  function glowyPoza(typ, h) {
    if (typ === "vita" || !typ) return glowyPostava(h);
    glowyStyl(); var i = "gl" + (++glN), K = 'url(#' + i + 'k)';
    var ruka = function (d) { return '<path d="' + d + '" stroke="' + K + '" stroke-width="6" fill="none" stroke-linecap="round"/>'; };
    var dlan = function (x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="3.6" fill="#E0338A"/>'; };
    var nohy = typ === "slavi" ? '<path d="M43 100l-4 12M57 100l4 12" stroke="' + K + '" stroke-width="6" stroke-linecap="round"/><ellipse cx="38" cy="114" rx="6" ry="3.2" fill="#7B2FF7"/><ellipse cx="62" cy="114" rx="6" ry="3.2" fill="#7B2FF7"/>'
      : typ === "spi" ? '<path d="M40 104h-12M60 104h12" stroke="' + K + '" stroke-width="6" stroke-linecap="round"/><ellipse cx="26" cy="104" rx="3.4" ry="5" fill="#7B2FF7"/><ellipse cx="74" cy="104" rx="3.4" ry="5" fill="#7B2FF7"/>'
      : '<path d="M43 100v13M57 100v13" stroke="' + K + '" stroke-width="6" stroke-linecap="round"/><ellipse cx="41" cy="115" rx="6" ry="3.2" fill="#7B2FF7"/><ellipse cx="59" cy="115" rx="6" ry="3.2" fill="#7B2FF7"/>';
    var telo = '<path d="M34 72c0-6 7-10 16-10s16 4 16 10v22c0 6-7 10-16 10s-16-4-16-10z" fill="' + K + '"/>' +
      '<path d="M32 86c6 3 30 3 36 0l1 12c-7 4-31 4-38 0z" fill="#FFE2B8"/><path d="M32 89c6 3 30 3 36 0" stroke="#FF8A3D" stroke-width="2" fill="none"/><path d="M60 90l3 12" stroke="#F2C894" stroke-width="2" stroke-linecap="round"/>';
    var ruce = "", navic = "", hlava = '<g transform="translate(18 1)">' + glowyHlava(i, typ === "palec" ? null : typ) + '</g>', tg = "gb";
    if (typ === "premysli") {
      ruce = ruka("M35 74q-9 6-4 14") + dlan(31, 88) + ruka("M65 74q8 2 2 -10") + dlan(58, 58);
      navic = '<g class="gn" style="animation-duration:3.4s"><circle cx="78" cy="24" r="2" fill="#fff" opacity=".7"/></g><circle cx="84" cy="15" r="3" fill="#fff" opacity=".8"/><rect x="82" y="-6" width="20" height="16" rx="8" fill="#fff"/><text x="92" y="6.5" text-anchor="middle" font-size="12" font-weight="800" fill="#7B2FF7" font-family="sans-serif">?</text>';
    } else if (typ === "slavi") {
      ruce = '<g class="gh" style="animation-duration:.5s">' + ruka("M35 74q-10-6-12-20") + dlan(23, 53) + ruka("M65 74q10-6 12-20") + dlan(77, 53) + '</g>';
      var cf = ["#FFD27A", "#E0338A", "#7FD3FF", "#FF8A3D", "#7B2FF7", "#9BE38A"];
      for (var q = 0; q < 10; q++) navic += '<rect class="gs" x="' + (10 + q * 9) + '" y="' + (-4 + (q * 7) % 16) + '" width="3.4" height="5" rx="1" fill="' + cf[q % cf.length] + '" style="animation-duration:' + (1.4 + (q % 3) * 0.3).toFixed(1) + 's;animation-delay:' + ((q * 0.23) % 1.2).toFixed(2) + 's;--sx:' + ((q % 2 ? 1 : -1) * (2 + q % 4)) + 'px"/>';
      tg = "gh";
    } else if (typ === "smutny") {
      ruce = ruka("M35 74q-6 10-5 20") + dlan(30, 95) + ruka("M65 74q6 10 5 20") + dlan(70, 95);
      hlava = '<g transform="translate(18 4) rotate(-8 32 40)">' + glowyHlava(i, "smutny") + '</g>';
    } else if (typ === "spi") {
      ruce = ruka("M35 76q-6 8 2 14") + ruka("M65 76q6 8-2 14");
      navic = '<g class="gn" style="animation-duration:3s"><text x="74" y="22" font-size="13" font-weight="800" fill="#B9A7FF" font-family="sans-serif">z</text></g><g class="gn" style="animation-duration:3s;animation-delay:1.5s"><text x="82" y="10" font-size="10" font-weight="800" fill="#B9A7FF" font-family="sans-serif">z</text></g>';
      hlava = '<g transform="translate(18 5) rotate(10 32 40)">' + glowyHlava(i, "spi") + '</g>'; tg = "gp";
    } else if (typ === "palec") {
      ruce = ruka("M35 74q-9 6-4 14") + dlan(31, 88) + ruka("M65 76q9-2 11-12") +
        '<rect x="72" y="58" width="9" height="9" rx="3" fill="#E0338A"/><rect x="74.2" y="50" width="4.4" height="10" rx="2.2" fill="#E0338A"/>';
      navic = '<path class="gn" d="M88 40l2 4 4 1-4 1-2 4-2-4-4-1 4-1z" fill="#FFD27A" style="animation-duration:2.2s"/>';
    }
    return '<svg class="glowy" width="' + Math.round(h * 0.8) + '" height="' + h + '" viewBox="0 0 100 125" aria-hidden="true" style="flex:none;display:block;overflow:visible">' + glowyDefs(i) +
      '<ellipse cx="50" cy="121" rx="22" ry="3" fill="#000" opacity=".3"/><circle cx="50" cy="40" r="38" fill="url(#' + i + 'g)"' + (typ === "spi" || typ === "smutny" ? ' opacity=".5"' : '') + '/>' +
      navic + '<g class="' + tg + '"' + (typ === "spi" ? ' style="animation-duration:3.2s"' : '') + '>' + nohy + telo + ruce + hlava + '</g></svg>';
  }
  function glowyDefs(i) {
    return '<defs><radialGradient id="' + i + 'g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FFD27A" stop-opacity=".5"/><stop offset="1" stop-color="#FF8A3D" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="' + i + 'b" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7B2FF7"/><stop offset=".55" stop-color="#E0338A"/><stop offset="1" stop-color="#FF8A3D"/></linearGradient>' +
      '<linearGradient id="' + i + 'c" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FF8A3D"/><stop offset="1" stop-color="#FFD27A"/></linearGradient>' +
      '<linearGradient id="' + i + 'k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E0338A"/><stop offset="1" stop-color="#7B2FF7"/></linearGradient></defs>';
  }
  function glowy(px) {   // just the head (small icons)
    glowyStyl(); var i = "gl" + (++glN);
    return '<svg class="glowy" width="' + px + '" height="' + px + '" viewBox="0 0 64 64" aria-hidden="true" style="flex:none;display:block;overflow:visible">' + glowyDefs(i) +
      '<circle cx="32" cy="38" r="26" fill="url(#' + i + 'g)"/>' + glowyHlava(i) + '</svg>';
  }
  // the aufguss "figure 8" (from Milan's video): one hand holds a big bath towel folded in half, about 20 % from its end.
  // The hand rises past the far side, goes over the head with the towel spread flat above (like a pizzaiolo's dough),
  // comes down on its own side and sweeps low across the front, the towel always flying outwards from the circle.
  // Driven from JS (SMIL does not start in SVG added after load); in the corner two turns every ~11 s, stale = non-stop
  var G8 = { S: [65, 76], C: [62, 46], R: 31, klid: [80, 92], bezi: false };
  function g8Ruka(a) { return [G8.C[0] + G8.R * Math.cos(a), G8.C[1] - G8.R * 1.05 * Math.sin(a)]; }
  function g8Rucnik(fl) {   // towel in its own plane: grip at (0,0); x = out from the circle (-8..40), y = trailing side (0..30); two layers
    var a = -10, b = 48, w = 36, e = fl, q = function (v) { return v.toFixed(1); };
    var tel = "M" + a + " 0Q" + q((a + b) / 2) + " " + q(-2 + e * 0.3) + " " + b + " " + q(e * 0.4) + "Q" + q(b + 2 + e) + " " + q(w / 2) + " " + q(b + e * 0.6) + " " + q(w + e * 0.5) +
      "Q" + q((a + b) / 2) + " " + q(w + 3 + e) + " " + a + " " + w + "Q" + (a - 2) + " " + q(w / 2) + " " + a + " 0z";
    var pr = "M" + (a + 5) + " 1V" + (w - 1) + "M" + (b - 7) + " " + q(1 + e * 0.3) + "Q" + q(b - 6 + e * 0.5) + " " + q(w / 2) + " " + q(b - 7 + e * 0.6) + " " + q(w - 1 + e * 0.5);
    var sv = "M" + (a + 1) + " 4Q" + q((a + b) / 2) + " " + q(2.5 + e * 0.3) + " " + q(b - 1 + e * 0.2) + " " + q(4 + e * 0.4);   // the fold along the held edge
    return [tel, pr, sv];
  }
  function g8Snimek(c, po, tt) {   // c = 0..1 within one turn, po 0..1 = how much he is swinging (0 = towel hangs at rest)
    var a = 1.25 * Math.PI - 2 * Math.PI * c, h = g8Ruka(a), h2 = g8Ruka(a - 0.05);   // starts low on the far side, goes up, over, down
    var x = G8.klid[0] + (h[0] - G8.klid[0]) * po, y = G8.klid[1] + (h[1] - G8.klid[1]) * po;
    var rx = Math.cos(a), ry = -Math.sin(a), vx = h2[0] - h[0], vy = h2[1] - h[1], vl = Math.hypot(vx, vy) || 1, tx = -vx / vl, ty = -vy / vl;
    var sr = 1 - 0.65 * Math.max(0, Math.sin(a));   // overhead the towel lies flat (seen from below): short outwards
    // at rest: hanging straight down from the hand, the held edge on the left
    var X = [rx * sr * po + 0 * (1 - po), ry * sr * po + 1 * (1 - po)], Y = [tx * po + 1 * (1 - po), ty * po + 0 * (1 - po)];
    var mx = (G8.S[0] + x) / 2 + 6, my = (G8.S[1] + y) / 2 + 6, q = function (v) { return v.toFixed(3); };
    return { ruka: "M" + G8.S[0] + " " + G8.S[1] + "Q" + mx.toFixed(1) + " " + my.toFixed(1) + " " + x.toFixed(1) + " " + y.toFixed(1), predni: y > 70 && po > 0.5,
      tr: "matrix(" + q(X[0]) + " " + q(X[1]) + " " + q(Y[0] * 0.8) + " " + q(Y[1] * 0.8) + " " + x.toFixed(1) + " " + y.toFixed(1) + ")", R: g8Rucnik((1.2 + 3 * po) * Math.sin(tt * 9)) };
  }
  function g8Tik(now) {
    var els = document.querySelectorAll(".g8"); if (!els.length) { G8.bezi = false; return; }
    var T = now / 1000;
    for (var k = 0; k < els.length; k++) {
      var el = els[k], btn = el.closest(".glowy-btn"), stale = el.getAttribute("data-s") === "1" || (btn && btn.matches(":hover")), t, po;
      if (stale) { t = (T % 1.6) / 1.6; po = 1; }
      else { var c = T % 11; t = c < 3.2 ? (c % 1.6) / 1.6 : 0; po = c < 3.2 ? Math.min(1, c / 0.4, (3.2 - c) / 0.4) : 0; }
      var f = g8Snimek(t, po, T), ch = el.children;
      ch[0].setAttribute("d", f.ruka); ch[1].setAttribute("transform", f.tr);
      var tw = ch[1].children; tw[0].setAttribute("d", f.R[0]); tw[1].setAttribute("d", f.R[1]); tw[2].setAttribute("d", f.R[2]);
      var hl = el.parentNode.querySelector(".g8h");   // low in front the towel covers his body, otherwise it flies behind his head
      if (hl) { var vpredu = el.compareDocumentPosition(hl) & 2; if (f.predni && !vpredu) el.parentNode.appendChild(el); else if (!f.predni && vpredu) el.parentNode.insertBefore(el, hl); }
    }
    requestAnimationFrame(g8Tik);
  }
  function glowyOsmicka(i, stale) {
    var f = g8Snimek(0, 0, 0);
    if (!G8.bezi && !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) { G8.bezi = true; setTimeout(function () { requestAnimationFrame(g8Tik); }, 0); }
    return '<g class="g8" data-s="' + (stale ? 1 : 0) + '"><path d="' + f.ruka + '" stroke="url(#' + i + 'k)" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<g transform="' + f.tr + '"><path d="' + f.R[0] + '" fill="#FFE8C6" stroke="#EBC08E" stroke-width="1"/><path d="' + f.R[1] + '" stroke="#FF8A3D" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
        '<path d="' + f.R[2] + '" stroke="#E2AE77" stroke-width="1.4" fill="none" stroke-linecap="round"/><circle r="4" fill="#E0338A"/></g></g>';
  }
  function glowyPostava(h, stale) {   // the whole character, h = height in px
    glowyStyl(); var i = "gl" + (++glN);
    return '<svg class="glowy" width="' + Math.round(h * 0.8) + '" height="' + h + '" viewBox="0 0 100 125" aria-hidden="true" style="flex:none;display:block;overflow:visible">' + glowyDefs(i) +
      '<ellipse cx="50" cy="121" rx="22" ry="3" fill="#000" opacity=".3"/><circle cx="50" cy="40" r="38" fill="url(#' + i + 'g)"/>' +
      '<g class="gb">' +
        // legs and feet
        '<path d="M43 100v13M57 100v13" stroke="url(#' + i + 'k)" stroke-width="6" stroke-linecap="round"/>' +
        '<ellipse cx="41" cy="115" rx="6" ry="3.2" fill="#7B2FF7"/><ellipse cx="59" cy="115" rx="6" ry="3.2" fill="#7B2FF7"/>' +
        // body
        '<path d="M34 72c0-6 7-10 16-10s16 4 16 10v22c0 6-7 10-16 10s-16-4-16-10z" fill="url(#' + i + 'k)"/>' +
        // sauna towel round the waist
        '<path d="M32 86c6 3 30 3 36 0l1 12c-7 4-31 4-38 0z" fill="#FFE2B8"/><path d="M32 89c6 3 30 3 36 0" stroke="#FF8A3D" stroke-width="2" fill="none"/>' +
        '<path d="M60 90l3 12" stroke="#F2C894" stroke-width="2" stroke-linecap="round"/>' +
        // left arm on the hip
        '<path d="M35 74q-9 6-4 14" stroke="url(#' + i + 'k)" stroke-width="6" fill="none" stroke-linecap="round"/>' +
        // right arm waving an aufguss towel
        glowyOsmicka(i, stale) +
        // head
        '<g class="g8h" transform="translate(18 1)">' + glowyHlava(i) + '</g>' +
      '</g></svg>';
  }
  // Glowy at work while the AI designs: sweating like in a sauna, hammering the keyboard, steam rising off his head
  function glowyPracuje(h) {
    glowyStyl(); var i = "gl" + (++glN), kl = "";
    var barvy = ["#7B2FF7", "#E0338A", "#FF8A3D", "#FFD27A"];
    for (var r = 0; r < 3; r++) for (var q = 0; q < 10; q++) {
      var x = 42 + q * 8.6 + r * 2.2, y = 98 + r * 6, d = ((q * 7 + r * 13) % 17) / 17 * 0.9;
      kl += '<rect x="' + x.toFixed(1) + '" y="' + y + '" width="7" height="4.6" rx="1.2" fill="#3A2E48"/>' +
        ((q * 3 + r) % 4 === 0 ? '<rect class="gz" x="' + x.toFixed(1) + '" y="' + y + '" width="7" height="4.6" rx="1.2" fill="' + barvy[(q + r) % 4] + '" style="animation-delay:' + d.toFixed(2) + 's"/>' : '');
    }
    var kap = function (x, y, d, sx) { return '<path class="gs" d="M' + x + ' ' + y + 'q2 3 0 4.4q-2-1.4 0-4.4z" fill="#7FD3FF" style="animation-delay:' + d + 's;--sx:' + sx + 'px"/>'; };
    var para = function (x, d) { return '<path class="gn" d="M' + x + ' 12q-4-4 0-8q4-4 0-8" stroke="#fff" stroke-width="2" fill="none" opacity=".5" stroke-linecap="round" style="animation-delay:' + d + 's"/>'; };
    var ruka = function (x0, x1, cls, d) { return '<g class="' + cls + '" style="animation-delay:' + d + 's"><path d="M' + x0 + ' 80q' + ((x1 - x0) / 2) + ' 4 ' + (x1 - x0) + ' 18" stroke="url(#' + i + 'k)" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="' + x1 + '" cy="98" r="4" fill="#E0338A"/></g>'; };
    return '<svg class="glowy" width="' + Math.round(h * 1.4) + '" height="' + h + '" viewBox="0 0 168 120" aria-hidden="true" style="flex:none;display:block;overflow:visible">' + glowyDefs(i) +
      '<circle cx="84" cy="46" r="44" fill="url(#' + i + 'g)"/>' +
      '<g class="gp">' +
        '<path d="M66 82c0-7 8-11 18-11s18 4 18 11v14H66z" fill="url(#' + i + 'k)"/>' +
        // towel round the neck (sauna!)
        '<path d="M72 74q12 8 24 0l2 5q-14 9-28 0z" fill="#FFE2B8"/><path d="M73 77q11 7 22 0" stroke="#FF8A3D" stroke-width="1.6" fill="none"/>' +
        '<g transform="translate(52 12)">' + glowyHlava(i) + kap(16, 30, 0, -5) + kap(47, 28, 0.6, 5) + kap(30, 22, 1.1, -1) + kap(40, 34, 0.35, 3) + '</g>' +
        para(70, 0) + para(98, 1.1) +
      '</g>' +
      // keyboard
      '<path d="M34 94h100l8 24H26z" fill="#2A2036" stroke="#4A3C5C"/>' + kl +
      // arms hammering the keys, one after the other
      ruka(69, 58, "gh", 0) + ruka(99, 110, "gh", 0.16) +
      '</svg>';
  }
  var GLOWY_PRACE = ["Poslouchám tvou hudbu…", "Hledám silné údery…", "Čtu tvůj příběh…", "Míchám barvy…", "Ťukám jak o život…", "Ladím nálady k jednotlivým částem…", "Potím se jak v sauně, ale bude to stát za to…", "Kontroluju, ať nic nesvítí bíle…", "Ještě chvilku, dolaďuju detaily…"];

  // Web only: Glowy on the "how it works" cards (headphones, pencil and paper, tablet preview, download)
  function glowyKarta(typ, h) {
    glowyStyl(); var i = "gl" + (++glN), K = 'url(#' + i + 'k)';
    var ruka = function (d) { return '<path d="' + d + '" stroke="' + K + '" stroke-width="6" fill="none" stroke-linecap="round"/>'; };
    var dlan = function (x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="3.6" fill="#E0338A"/>'; };
    var nohy = '<path d="M43 100v13M57 100v13" stroke="' + K + '" stroke-width="6" stroke-linecap="round"/><ellipse cx="41" cy="115" rx="6" ry="3.2" fill="#7B2FF7"/><ellipse cx="59" cy="115" rx="6" ry="3.2" fill="#7B2FF7"/>';
    var telo = '<path d="M34 72c0-6 7-10 16-10s16 4 16 10v22c0 6-7 10-16 10s-16-4-16-10z" fill="' + K + '"/>' +
      '<path d="M32 86c6 3 30 3 36 0l1 12c-7 4-31 4-38 0z" fill="#FFE2B8"/><path d="M32 89c6 3 30 3 36 0" stroke="#FF8A3D" stroke-width="2" fill="none"/>';
    var hlava = '<g transform="translate(18 1)">' + glowyHlava(i) + '</g>', pred = "", po = "", navic = "", tg = "gb";
    if (typ === "sluchatka") {
      po = '<path d="M30 44Q30 6 50 6T70 44" stroke="#2A2036" stroke-width="4" fill="none"/>' +
        '<rect x="24" y="34" width="10" height="17" rx="5" fill="#7B2FF7" stroke="#2A2036" stroke-width="2"/><rect x="66" y="34" width="10" height="17" rx="5" fill="#7B2FF7" stroke="#2A2036" stroke-width="2"/>' +
        '<rect x="27" y="38" width="3" height="9" rx="1.5" fill="#FFD27A"/><rect x="70" y="38" width="3" height="9" rx="1.5" fill="#FFD27A"/>' +
        ruka("M35 74q-9 6-4 14") + dlan(31, 88) + ruka("M65 74q12-8 8-24") + dlan(73, 50);
      navic = '<text class="gn" x="82" y="30" font-size="15" font-weight="800" fill="#FFD27A" font-family="sans-serif" style="animation-duration:2.4s">♪</text>' +
        '<text class="gn" x="8" y="34" font-size="12" font-weight="800" fill="#E0338A" font-family="sans-serif" style="animation-duration:2.4s;animation-delay:1.2s">♫</text>';
      tg = "gb wk-tep";
    } else if (typ === "pise") {
      po = '<g transform="rotate(-8 30 82)"><rect x="14" y="66" width="30" height="34" rx="3" fill="#FFF3DF"/>' +
        '<path d="M19 74h18M19 80h14M19 86h18M19 92h10" stroke="#C9B9A6" stroke-width="1.6" stroke-linecap="round"/>' +
        '<rect x="17" y="72" width="5" height="4" rx="1" fill="#7B2FF7"/><rect x="17" y="78" width="5" height="4" rx="1" fill="#E0338A"/><rect x="17" y="84" width="5" height="4" rx="1" fill="#FF8A3D"/></g>' +
        ruka("M35 74q-6 4-8 12") + dlan(26, 86) +
        '<g class="wk-pis">' + ruka("M65 76q-2 12-22 12") + dlan(42, 88) + '<path d="M42 88l9-15" stroke="#FFD27A" stroke-width="3.4" stroke-linecap="round"/><path d="M42 88l-1.6 3" stroke="#2A2036" stroke-width="2" stroke-linecap="round"/></g>';
      hlava = '<g transform="translate(18 3) rotate(-6 32 40)">' + glowyHlava(i) + '</g>';
    } else if (typ === "divase") {
      po = '<rect x="28" y="64" width="44" height="30" rx="4" fill="#2A2036" stroke="#4A3C5C" stroke-width="2"/>' +
        '<g class="wk-scr"><rect x="31" y="67" width="38" height="24" rx="2" fill="#7B2FF7"/><rect class="wk-s2" x="31" y="67" width="38" height="24" rx="2" fill="#E0338A"/><rect class="wk-s3" x="31" y="67" width="38" height="24" rx="2" fill="#FF8A3D"/></g>' +
        '<path d="M35 88l8-10 8 10M47 88l8-12 10 12" stroke="#1A1220" stroke-width="2" fill="none" opacity=".45"/>' +
        ruka("M35 74q-8 6-6 14") + dlan(29, 86) + ruka("M65 74q8 6 6 14") + dlan(71, 86);
    } else if (typ === "stahuje") {
      po = '<path d="M28 78h14l4 4h26v20H28z" fill="#FFC14D"/><path d="M28 84h44v18H28z" fill="#FFD27A"/>' +
        '<text x="50" y="97" text-anchor="middle" font-size="8" font-weight="800" fill="#8A4B00" font-family="sans-serif">.zip</text>' +
        '<g class="wk-sip"><path d="M50 58v14M44 66l6 6 6-6" stroke="#7EE2B0" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>' +
        ruka("M35 74q-8 6-6 14") + dlan(29, 88) + ruka("M65 74q8 6 6 14") + dlan(71, 88);
    }
    return '<svg class="glowy" width="' + Math.round(h * 0.8) + '" height="' + h + '" viewBox="0 0 100 125" aria-hidden="true" style="flex:none;display:block;overflow:visible">' + glowyDefs(i) +
      '<ellipse cx="50" cy="121" rx="22" ry="3" fill="#000" opacity=".3"/><circle cx="50" cy="40" r="38" fill="url(#' + i + 'g)"/>' +
      navic + '<g class="' + tg + '">' + nohy + telo + pred + hlava + po + '</g></svg>';
  }
  window.Glowy = { postava: glowyPostava, poza: glowyPoza, pracuje: glowyPracuje, hlava: glowy };
  function vykresli() {
    document.querySelectorAll("[data-glowy]").forEach(function (el) {
      var t = el.getAttribute("data-glowy"), h = +el.getAttribute("data-h") || 120;
      el.innerHTML = /^(sluchatka|pise|divase|stahuje)$/.test(t) ? glowyKarta(t, h) : t === "postava" ? glowyPostava(h) : t === "pracuje" ? glowyPracuje(h) : t === "hlava" ? glowy(h) : glowyPoza(t, h);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", vykresli); else vykresli();
})();
