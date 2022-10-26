# skiplink.js

Skip links + a little headroom and focus.

## Install

```
npm install @communicatehealth/skiplink.js
```

## Demo page

[https://communicatehealth.github.io/skiplink.js/](https://communicatehealth.github.io/skiplink.js/)

## Optional target attributes

`data-skiplink-scroll-from`: specifies a selector for an element that is used as
the basis for caclulating headroom. For example, if the target is the last element
in a responsive form, the first element in the form could be specified here to ensure
the entire form is on-screen.

`data-skiplink-padding`: specifies the headroom padding (in pixels) above the
element in the viewport. Defaults to 100. If used in combination with
`data-skiplink-scroll-from`, the attribute should be applied to the element
specified in the selector.

## Inspired by

- [**Ian Clark’s**](http://www.ianclark.me/) [answer to _offsetting an html anchor to adjust for fixed header_](https://stackoverflow.com/a/13067009)
- [**Anika Henke’s**](https://accessibility.blog.gov.uk/author/anikahenke/) [skip link focus fix with blur tabindex reset](https://github.com/selfthinker/dokuwiki_template_writr/blob/master/js/skip-link-focus-fix.js)

## Additional reading

- [**Axess Lab** — _Your skip links are broken_](https://axesslab.com/skip-links/)
- [**Terrill Thompson** — _Back to Basics: Skip to Main Content Links_](http://terrillthompson.com/blog/161)
- [**Human Who Codes** — _Fixing “Skip to content” links_](https://humanwhocodes.com/blog/2013/01/15/fixing-skip-to-content-links/)
- [**Nicolas Gallagher** — _Jump links and viewport positioning_](http://nicolasgallagher.com/jump-links-and-viewport-positioning/)
