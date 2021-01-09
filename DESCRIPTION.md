# Shortcodes for the Hugo Framework
In the following, the single shortcodes are described with their parameters.

### `img`
`img` includes a single audio file.

#### Parameters
##### `src`
URL to the image file.

##### `alt`
Alternate text for the image if the image cannot be displayed.

#### Example
```
{{< img src="path_to_file.jpg" alt="Alternate text" >}}
```


### `gallery`
`gallery` includes an image gallery which has been adapted from [w3schools](https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp).

#### Parameters
##### `id`
Unique ID in content file.

##### `src`
URL to the image file of current entry.

##### `alt`
Alternate text for the image if the image cannot be displayed. This text is also shown as caption for the full image.

##### `caption`
Caption of the image that is shown next to the thumbnail view.

#### Example
```
{{< gallery id="galleryID" >}}
  {{< img src="path_to_image01.jpg" alt="Long description of 1st image" caption="Caption 01" >}}
  {{< img src="path_to_image02.jpg" alt="Long description of 2nd image" caption="Caption 02" >}}
{{< /gallery >}}
```


### `audio`
`audio` includes a single audio file.

#### Parameters
##### `mp3` or `wav` or `ogg`
Path to audio file according to type. More than one of these parameters can be provided.

##### `preload`
This parameter tells the browser whether to load the files when loading the page or not. Possible values are `auto`, `metadata` and `none`.

#### Example
```
{{< audio mp3="path_to_file.mp3" preload="auto" >}}
```


### `playlist`
`playlist` includes an audio player with a playlist of different tracks. The direct download link is also shown to the user.

#### Parameters
##### `id`
Unique ID in content file.

##### `mp3` or `wav` or `ogg`
Path to audio file according to type. Only one of these parameters can be provided for each playlist entry.

##### `title`
Title of the corresponding audio file that is shown in the playlist.

##### `preload`
This parameter tells the browser whether to load the files when loading the page or not. Possible values are `auto`, `metadata` and `none`.

#### Example
```
{{< playlist id="playlistID" >}}
  {{< audio mp3="path_to_file01.mp3" title="Audio 01" preload="none" >}}
  {{< audio mp3="path_to_file02.mp3" title="Audio 02" preload="none" >}}
  {{< audio wav="path_to_file02.wav" title="Audio 03" preload="none" >}}
{{< /playlist >}}
```


### `accordion`
`accordion` includes a single collapsible text area that can be used e.g. for FAQs.

#### Parameters
There is only one unnamed parameter which is the title of the accordion, i.e. the text or question that is shown when the text field is closed.

#### Example
```
{{< accordion "title or question" >}}
  full text
{{< /accordion >}}
```