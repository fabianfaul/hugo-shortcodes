---
author: "Fabian Faul"
date: 2020-11-05
title: Test Article
tags: ["shortcodes", "test"]
css: /css/shortcodes.css
js: /js/shortcodes.js
---

Include a single audio files.
{{< audio mp3="http://files.faullab.com/testfiles/audio/audio02.mp3" preload="none" >}}

Include a playlist with multiple audio files.
{{< playlist id="audioplay" >}}
  {{< audio mp3="http://files.faullab.com/testfiles/audio/audio02.mp3" title="Meine Hoffnung und meine Freude" preload="none" >}}
  {{< audio wav="http://files.faullab.com/testfiles/audio/audio03.wav" title="Organ Toccata (BWV 564)" preload="none" >}}
{{< /playlist >}}