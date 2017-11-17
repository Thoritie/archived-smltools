$(document).ready(function () {
$('.resource__add-icon').on("click",function(){
    $(this).toggleClass('icon-is-rotated');
    $(this).children('.resource--add__iconcircle').toggleClass('card-is-active');
  });
});