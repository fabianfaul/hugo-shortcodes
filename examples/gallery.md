---
author: "Fabian Faul"
date: 2020-11-05
title: Test Article
tags: ["shortcodes", "test"]
css: /css/shortcodes.css
js: /js/shortcodes.js
---

Include a single image.
{{< img src="http://files.faullab.com/testfiles/images/img01_1024x768.jpg" alt="Small diaphragm condenser microphones included in the test" caption="C" >}}

Include a gallery with three images.
{{< gallery id="imagegallery" >}}
  {{< img src="http://files.faullab.com/testfiles/images/img02_1024x683.jpg" alt="Window of a castle" caption="Window" >}}
  {{< img src="http://files.faullab.com/testfiles/images/img04_1024x683.jpg" alt="Cow lying on a meadow" caption="Cow" >}}
  {{< img src="http://files.faullab.com/testfiles/images/img05_1024x683.jpg" alt="Electronics and LEDs" caption="Electronics" >}}
{{< /gallery >}}