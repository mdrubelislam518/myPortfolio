//mixitUp js-------->
var mixer = mixitup('.grid-portfolio-content');


//scrollify----->
$(function() {
  $.scrollify({
      section : ".scroll-btm",
      setHeights: false,
      updateHash: false,
      scrollSpeed: 50,
    });
  });

//hamburger manu------>
function openMenu() {
  document.getElementById('navbar').style.height = "100%";
}
function closeMenu() {
  document.getElementById('navbar').style.height = "0";
}

//smooth scroll----->
$(function(){
  $('.menu-item a, .scroll-down a').on('click', function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top,
    }, 700);
    return false;
  });
});
