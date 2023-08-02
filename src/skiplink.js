(function skiplink() {
  "use strict";

  var extraPadding = 100;

  window.addEventListener("DOMContentLoaded", skipNow);
  window.addEventListener("hashchange", skipNow);

  function skipNow() {
    skipLink(window.location.hash);
  }

  function skipLink(target) {
    var targetElement,
      validHash = /^#[a-zA-Z0-9%_-]+$/g;

    if (!validHash.test(target)) {
      return;
    }

    targetElement = document.getElementById(target.slice(1));

    if (targetElement) {
      window.scrollTo(window.pageXOffset, yPadded(targetElement, extraPadding));
      fullFocus(targetElement);
    }
  }

  function fullFocus(element) {
    var fTabindex = false;
    if (
      !/^(?:a|select|input|button|textarea)$/i.test(element.tagName) &&
      !element.hasAttribute("tabindex")
    ) {
      element.setAttribute("tabindex", -1);
      fTabindex = true;
    }
    element.focus();
    if (fTabindex) {
      element.removeAttribute("tabindex");
      fTabindex = false;
    }
  }

  function yPadded(element, padding) {
    var elementPosition = element.getBoundingClientRect();

    return window.pageYOffset + elementPosition.top - padding;
  }
})();
