
document.addEventListener('DOMContentLoaded', function () {
  // Prepare BackgroundCheck
  BackgroundCheck.init({
    targets: '.page-title',
    images: '.page-header',
    debug:true
  });
});

$(document).foundation();


var stickySidebar = $('.sticky');

if (stickySidebar.length > 0) {
  var stickyHeight = stickySidebar.height(),
      sidebarTop = stickySidebar.offset().top;
}

// on scroll move the sidebar
$(window).scroll(function () {
  if (stickySidebar.length > 0) {
    var scrollTop = $(window).scrollTop();

    if (sidebarTop < scrollTop) {
      stickySidebar.css('position', 'fixed');
      stickySidebar.css('top', '0');


    }
    else {
      stickySidebar.css('position', 'absolute');
      stickySidebar.css('top', 'auto');
    }
  }
});

$(window).resize(function () {
  if (stickySidebar.length > 0) {
    var scrollTop = $(window).scrollTop();

    if (sidebarTop < scrollTop) {
      stickySidebar.css('position', 'fixed');
      stickySidebar.css('top', '0');


    }
    else {
      stickySidebar.css('position', 'absolute');
      stickySidebar.css('top', 'auto');
    }
  }
});


$(document).ready(function(){



  $('.hha-slider').slick({
    //setting-name: setting-value
    dots: true,
    autoplay:true,
    autoplaySpeed:6000,
     speed: 1300,
     arrows: false,

  //fade: true,
  //cssEase: 'linear'
});
var $status = $('.slide-count');
var $slickElement = $('.gallery-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});
$('.gallery-slider').slick({
  //setting-name: setting-value
  dots: false,
  arrows: true,
//fade: true,
//cssEase: 'linear'
});
$('.gallery-slider').slick('setPosition');

$('.gallery').on('click', function (e) {
    $('.gallery-slider').resize();
});
$('[data-reveal]').on('open.zf.reveal', function() {
	var modal = $(this);
  $('.gallery-slider').resize();
	console.log(modal);
});






  //FULL SCREEN VIDEO
  vpw = window.innerWidth;
  vph = $(window).height();
  utih= $('.utility-header-top').outerHeight();
  corh= $('.corporate-header').outerHeight();
  menh = $('#main-nav').outerHeight();
  toth = (utih + menh + corh)
  heroh = (vph - toth);
  $('#home-hero').height(heroh);
  $('.home-slider').height(heroh);
  console.log(vph);
  console.log(toth);
  console.log(heroh);

  $(window).on('resize', function () {
    vpw = window.innerWidth;
    vph = $(window).height();
    utih= $('.utility-header-top').outerHeight();
    corh= $('.corporate-header').outerHeight();
    menh = $('#main-nav').outerHeight();
    toth = (utih + menh + corh)
    heroh = (vph - toth);
    $('#home-hero').height(heroh);
      $('.home-slider').height(heroh);
    console.log(vph);
    console.log(toth);
    console.log(heroh);

  });

});
