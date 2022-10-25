(function skiplink() {
  "use strict";

  var historySupport = Boolean(history && history.pushState),
    extraPadding = 100;

  window.addEventListener("DOMContentLoaded", skipNow);
  window.addEventListener("hashchange", skipNow);
  document.body.addEventListener("click", linkLimiter);

  function skipNow() {
    skipLink(window.location.hash, false);
  }

  function skipLink(target, pushHistory) {
    var targetElement,
      validHash = /^#[a-zA-Z0-9%_-]+$/g;

    if (!validHash.test(target)) {
      return false;
    }

    targetElement = document.getElementById(target.slice(1));

    if (targetElement) {
      window.scrollTo(window.pageXOffset, yPadded(targetElement, extraPadding));
      fullFocus(targetElement);
    }

    if (historySupport && pushHistory) {
      history.pushState(
        {},
        document.title,
        location.pathname + location.search + target
      );
    }

    return Boolean(targetElement);
  }

  function linkLimiter(event) {
    var source = event.target;

    if (
      source.nodeName === "A" &&
      skipLink(source.getAttribute("href"), true)
    ) {
      event.preventDefault();
    }
  }

  function fullFocus(element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.setAttribute("tabindex", -1);
      element.addEventListener("blur", removeTabindex, true);
    }
    element.focus();
  }

  function removeTabindex(event) {
    event.target.removeAttribute("tabindex");
  }

  function yPadded(element, padding) {
    var elementPosition = element.getBoundingClientRect();

    return window.pageYOffset + elementPosition.top - padding;
  }
})();
