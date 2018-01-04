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

  //fade: true,
  //cssEase: 'linear'
  });

  //FULL SCREEN VIDEO
  vpw = window.innerWidth;
  vph = $(window).height();
  utih= $('.utility-header-top').outerHeight();
  menh = $('#main-nav').outerHeight();
  toth = (utih + menh)
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
    menh = $('#main-nav').outerHeight();
    toth = (utih + menh)
    heroh = (vph - toth);
    $('#home-hero').height(heroh);
      $('.home-slider').height(heroh);
    console.log(vph);
    console.log(toth);
    console.log(heroh);

  });

});
