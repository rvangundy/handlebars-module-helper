handlebars-module-helper
========================

A helper for Handlebars that loads and inserts modules in to the DOM. Modules include HTML, CSS, and JavaScript that are loaded in to the app. Each module resides in its own folder inside ```/modules```. HTML is defined as a Handlebars template. CSS is defined using the [Styl](https://github.com/visionmedia/styl) procompiler. The JavaScript defined for the module is a single function that accepts an HTML element and an options object as its parameters.
