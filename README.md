# Shortcodes for the Hugo Framework

Within the [Hugo framework](https://gohugo.io/) small code snippets, so called shortcodes, can be included in the content files while the parser includes corresponding pre-defined templates. Shortcodes are a powerful feature since they expand the possibilities far from what is possible with plain markdown language. Besides the built-in templates, it is possible to define custom templates like they are provided in this repository.

## Installation
The installation of the provided shortcodes and its dependencies is straight forward. Everything located in the `static`-folder in this repository must be copied to the static folder of the Hugo installation. Make sure that the folder structure is maintained. The shortcodes themselves can be found in the folder `shortcodes`. The content of this folder has to be copied to the folder `layouts/shortcodes` of the Hugo installation.

Furthermore, the template file has to be adapted such that the CSS and JavaScript files are included on the single pages. An easy way is described by [this](https://discourse.gohugo.io/t/best-way-to-include-javascript-libraries-in-hugo-sites/13614/2) blog post.
First, the partial of the template must be found that contains the HTML header. In this file the following code must be added to the `<head>`-section:
```html
{{ if .Params.css }}
<link rel="stylesheet" href="{{ .Params.css }}">
{{ end }}
{{ if .Params.js }}
<script src="{{ .Params.js }}"></script>
{{ end }}
```

This change in the template enables that the CSS and JavaScript files can be included in the frontmatter of the content pages as:
```markup
---
title: The title of the page
js: path/to/js_file.js
css: path/to/css_file.css
---
```


## Shortcodes
A description of the shortcodes and their parameters can be found in [DESCRIPTION](./DESCRIPTION.md). Example posts which use the shortcodes are provided in the `examples`-folder.

## License
This project is licensed under the [MIT](./LICENSE.md) license.