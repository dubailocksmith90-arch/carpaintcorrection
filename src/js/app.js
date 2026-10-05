/* Car Paint Correction — vanilla JS: nav, before/after slider, quote→WhatsApp */
(function(){
  "use strict";

  /* Mobile nav */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function(e){
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  /* Before / after sliders */
  document.querySelectorAll("[data-ba]").forEach(function(ba){
    var range = ba.querySelector('input[type="range"]');
    if (!range) return;
    var set = function(){ ba.style.setProperty("--pos", range.value + "%"); };
    range.addEventListener("input", set);
    set();
  });

  /* Quote builder -> WhatsApp (no backend) */
  var form = document.querySelector("[data-quote-form]");
  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var get = function(name){
        var el = form.elements[name];
        return el ? String(el.value).trim() : "";
      };
      var name = get("name"), phone = get("phone"), car = get("car"),
          service = get("service"), notes = get("notes");
      if (!name || !phone || !car) {
        var firstMissing = !name ? form.elements["name"] : (!phone ? form.elements["phone"] : form.elements["car"]);
        firstMissing.focus();
        return;
      }
      var lines = [
        "Hi, I'd like a paint correction quote.",
        "Name: " + name,
        "Phone: " + phone,
        "Car: " + car,
        "Service: " + (service || "Not sure — please advise")
      ];
      if (notes) lines.push("Notes: " + notes);
      lines.push("— sent from carpaintcorrection.co.uk");
      window.open("https://wa.me/447482225323?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    });
  }
})();
