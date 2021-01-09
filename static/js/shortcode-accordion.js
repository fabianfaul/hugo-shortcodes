// adapted from https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "block";
    }
  });
}