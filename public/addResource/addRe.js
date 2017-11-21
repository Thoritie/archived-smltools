$(document).ready(function () {
    var selector = document.querySelector(".toggle");
    
    selector.addEventListener("click", function() {
      if (this.classList.contains("active")) {
        this.className = "toggle";
      } else {
        this.className += " active";
      }
    });
});    