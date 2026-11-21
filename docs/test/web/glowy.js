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
      // the aufguss "figure 8": the arm swings side to side while it reaches out and back, the towel trails behind
      "@keyframes glO{0.0%{transform:rotate(-14.0deg) scale(1.000)}6.25%{transform:rotate(-1.0deg) scale(1.156)}12.5%{transform:rotate(10.0deg) scale(1.220)}18.75%{transform:rotate(17.4deg) scale(1.156)}25.0%{transform:rotate(20.0deg) scale(1.000)}31.25%{transform:rotate(17.4deg) scale(0.844)}37.5%{transform:rotate(10.0deg) scale(0.780)}43.75%{transform:rotate(-1.0deg) scale(0.844)}50.0%{transform:rotate(-14.0deg) scale(1.000)}56.25%{transform:rotate(-27.0deg) scale(1.156)}62.5%{transform:rotate(-38.0deg) scale(1.220)}68.75%{transform:rotate(-45.4deg) scale(1.156)}75.0%{transform:rotate(-48.0deg) scale(1.000)}81.25%{transform:rotate(-45.4deg) scale(0.844)}87.5%{transform:rotate(-38.0deg) scale(0.780)}93.75%{transform:rotate(-27.0deg) scale(0.844)}100.0%{transform:rotate(-14.0deg) scale(1.000)}}" +
      "@keyframes glOt{0.0%{transform:rotate(28.0deg)}6.25%{transform:rotate(25.9deg)}12.5%{transform:rotate(19.8deg)}18.75%{transform:rotate(10.7deg)}25.0%{transform:rotate(0.0deg)}31.25%{transform:rotate(-10.7deg)}37.5%{transform:rotate(-19.8deg)}43.75%{transform:rotate(-25.9deg)}50.0%{transform:rotate(-28.0deg)}56.25%{transform:rotate(-25.9deg)}62.5%{transform:rotate(-19.8deg)}68.75%{transform:rotate(-10.7deg)}75.0%{transform:rotate(-0.0deg)}81.25%{transform:rotate(10.7deg)}87.5%{transform:rotate(19.8deg)}93.75%{transform:rotate(25.9deg)}100.0%{transform:rotate(28.0deg)}}" +
      "@keyframes glO2{0.0%{transform:rotate(-14.0deg) scale(1.000)}0.94%{transform:rotate(-1.0deg) scale(1.156)}1.88%{transform:rotate(10.0deg) scale(1.220)}2.81%{transform:rotate(17.4deg) scale(1.156)}3.75%{transform:rotate(20.0deg) scale(1.000)}4.69%{transform:rotate(17.4deg) scale(0.844)}5.62%{transform:rotate(10.0deg) scale(0.780)}6.56%{transform:rotate(-1.0deg) scale(0.844)}7.5%{transform:rotate(-14.0deg) scale(1.000)}8.44%{transform:rotate(-27.0deg) scale(1.156)}9.38%{transform:rotate(-38.0deg) scale(1.220)}10.31%{transform:rotate(-45.4deg) scale(1.156)}11.25%{transform:rotate(-48.0deg) scale(1.000)}12.19%{transform:rotate(-45.4deg) scale(0.844)}13.12%{transform:rotate(-38.0deg) scale(0.780)}14.06%{transform:rotate(-27.0deg) scale(0.844)}15.0%{transform:rotate(-14.0deg) scale(1.000)}15.94%{transform:rotate(-1.0deg) scale(1.156)}16.88%{transform:rotate(10.0deg) scale(1.220)}17.81%{transform:rotate(17.4deg) scale(1.156)}18.75%{transform:rotate(20.0deg) scale(1.000)}19.69%{transform:rotate(17.4deg) scale(0.844)}20.62%{transform:rotate(10.0deg) scale(0.780)}21.56%{transform:rotate(-1.0deg) scale(0.844)}22.5%{transform:rotate(-14.0deg) scale(1.000)}23.44%{transform:rotate(-27.0deg) scale(1.156)}24.38%{transform:rotate(-38.0deg) scale(1.220)}25.31%{transform:rotate(-45.4deg) scale(1.156)}26.25%{transform:rotate(-48.0deg) scale(1.000)}27.19%{transform:rotate(-45.4deg) scale(0.844)}28.12%{transform:rotate(-38.0deg) scale(0.780)}29.06%{transform:rotate(-27.0deg) scale(0.844)}30.0%{transform:rotate(-14.0deg) scale(1.000)}100%{transform:rotate(-14.0deg) scale(1.000)}}" +
      "@keyframes glOt2{0.0%{transform:rotate(28.0deg)}0.94%{transform:rotate(25.9deg)}1.88%{transform:rotate(19.8deg)}2.81%{transform:rotate(10.7deg)}3.75%{transform:rotate(0.0deg)}4.69%{transform:rotate(-10.7deg)}5.62%{transform:rotate(-19.8deg)}6.56%{transform:rotate(-25.9deg)}7.5%{transform:rotate(-28.0deg)}8.44%{transform:rotate(-25.9deg)}9.38%{transform:rotate(-19.8deg)}10.31%{transform:rotate(-10.7deg)}11.25%{transform:rotate(-0.0deg)}12.19%{transform:rotate(10.7deg)}13.12%{transform:rotate(19.8deg)}14.06%{transform:rotate(25.9deg)}15.0%{transform:rotate(28.0deg)}15.94%{transform:rotate(25.9deg)}16.88%{transform:rotate(19.8deg)}17.81%{transform:rotate(10.7deg)}18.75%{transform:rotate(0.0deg)}19.69%{transform:rotate(-10.7deg)}20.62%{transform:rotate(-19.8deg)}21.56%{transform:rotate(-25.9deg)}22.5%{transform:rotate(-28.0deg)}23.44%{transform:rotate(-25.9deg)}24.38%{transform:rotate(-19.8deg)}25.31%{transform:rotate(-10.7deg)}26.25%{transform:rotate(-0.0deg)}27.19%{transform:rotate(10.7deg)}28.12%{transform:rotate(19.8deg)}29.06%{transform:rotate(25.9deg)}30.0%{transform:rotate(28.0deg)}100%{transform:rotate(28.0deg)}}" +
      ".glowy .ga{transform-box:fill-box;transform-origin:0% 100%;animation:glO2 11s linear infinite}" +
      ".glowy .gt{transform-box:fill-box;transform-origin:50% 0%;animation:glOt2 11s linear infinite}" +
      ".glowy-btn:hover .glowy .ga,.glowy.osm .ga{animation:glO 1.6s linear infinite}.glowy-btn:hover .glowy .gt,.glowy.osm .gt{animation:glOt 1.6s linear infinite}" +
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
  function glowyPostava(h) {   // the whole character, h = height in px
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
        '<g class="ga"><path d="M65 76q10-4 12-16" stroke="url(#' + i + 'k)" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="77" cy="59" r="3.6" fill="#E0338A"/>' +
          '<g class="gt"><path d="M69 60h17l2 30c-4 2-17 2-21 0z" fill="#FFE2B8"/><path d="M71 62q1 14-1 27" stroke="#F2C894" stroke-width="1.4" fill="none" opacity=".7"/>' +
            '<path d="M69.6 66h15.8M69.2 70h16.4M68.6 83h17.4M68.4 86.5h17.8" stroke="#FF8A3D" stroke-width="1.8"/>' +
            '<path d="M70 91v3M73 91.4v3M76 91.6v3M79 91.6v3M82 91.4v3M85 91v3" stroke="#F2C894" stroke-width="1.2" stroke-linecap="round"/>' +
            '<rect x="69" y="58" width="17" height="3.4" rx="1.7" fill="#F6D2A2"/></g></g>' +
        // head
        '<g transform="translate(18 1)">' + glowyHlava(i) + '</g>' +
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
  window.Glowy = { postava: glowyPostava, poza: glowyPoza, pracuje: glowyPracuje, hlava: glowy };
  function vykresli() {
    document.querySelectorAll("[data-glowy]").forEach(function (el) {
      var t = el.getAttribute("data-glowy"), h = +el.getAttribute("data-h") || 120;
      el.innerHTML = t === "postava" ? glowyPostava(h) : t === "pracuje" ? glowyPracuje(h) : t === "hlava" ? glowy(h) : glowyPoza(t, h);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", vykresli); else vykresli();
})();
