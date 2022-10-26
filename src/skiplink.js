(function skiplink() {
  "use strict";

  var extraPadding = 100;

  window.addEventListener("DOMContentLoaded", skipLink);
  window.addEventListener("hashchange", skipLink);

  function skipLink() {
    var target = window.location.hash,
      targetElement,
      scrollFromElement,
      validHash = /^#[a-zA-Z0-9%_-]+$/g;

    if (!validHash.test(target)) {
      return;
    }

    targetElement = document.querySelector(target);

    if (targetElement) {
      scrollFromElement =
        document.querySelector(targetElement.dataset.skiplinkScrollFrom) ||
        targetElement;
      setTimeout(function () {
        window.scrollTo(window.pageXOffset, yPadded(scrollFromElement));
        fullFocus(targetElement);
      }, 10);
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

  function yPadded(element) {
    var elementPosition = element.getBoundingClientRect(),
      padding = element.dataset.skiplinkPadding || extraPadding;
    return window.pageYOffset + elementPosition.top - padding;
  }
})();
