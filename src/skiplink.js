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
