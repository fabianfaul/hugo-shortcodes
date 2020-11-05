function expandImage(gallery, imgs) {
  var expandImg = document.getElementById(gallery.concat("-expanded"));
  var imgText = document.getElementById(gallery.concat("-expanded-imgtext"));

  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";
}