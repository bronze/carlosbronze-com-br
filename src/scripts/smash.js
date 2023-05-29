const autoLoadDuration=5,
  eventList=["keydown", "mousemove", "wheel", "touchmove", "touchstart", "touchend"],
  autoLoadTimeout=setTimeout(runScripts, 5e3);

function triggerScripts() {
  runScripts(), clearTimeout(autoLoadTimeout), eventList.forEach(function (t) {
    window.removeEventListener(t, triggerScripts, {
      passive: !0
    })
  })
}

function runScripts() {
  document.querySelectorAll("script [delay]").forEach(function (t) {
    t.setAttribute("src", t.getAttribute("delay"))
  })
}
eventList.forEach(function (t) {
  window.addEventListener(t, triggerScripts, {
    passive: !0
  })
});
