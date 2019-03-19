var historySupport = Boolean(history && history.pushState);
var extraPadding = 100;
var validHash = /^#[a-z0-9%_-]+$/g;

window.addEventListener("DOMContentLoaded", skipNow);
window.addEventListener("hashchange", skipNow);
document.body.addEventListener("click", linkLimiter);

function skipNow() {
  skipLink(window.location.hash, false);
}

function skipLink(target, pushHistory) {
  var targetElement;

  if (!validHash.test(target)) {
    return false;
  }

  targetElement = document.getElementById(target.slice(1));

  if (targetElement) {
    window.scrollTo(window.pageXOffset, yPadded(targetElement, extraPadding));
    fullFocus(targetElement);
  }

  if (historySupport && pushHistory) {
    history.pushState({}, document.title, location.pathname + target);
  }

  return Boolean(targetElement);
}

function linkLimiter(event) {
  var source = event.target;

  if (source.nodeName === "A" && skipLink(source.getAttribute("href"), true)) {
    event.preventDefault();
  }
}

function fullFocus(element) {
  if (!(/^(?:a|select|input|button|textarea)$/i).test(element.tagName)) {
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
