const mainSlider = $('.main_slider');
let mainSlideOption = {
   autoplay: true,
   autoplaySpeed: 6000,
   pauseOnHover: false,
   pauseOnFocus: false,
   arrows: false,
   appendDots: $('.main_dots_wrap'),
   dots: true,
   prevArrow: $('.prev-visual'),
   nextArrow: $('.next-visual'),
   customPaging: function (slick, index) {
      return '<div class="circle_wrap"><div class="circle-line"></div><div class="circle circle1"><span class="circle-inner"></span></div><div class="circle circle2"><span class="circle-inner"></span></div></div>';
   },
};

mainSlider.slick(mainSlideOption);

const ppBtn = $('.pp_btn_wrap');
const prevArrow = $('.prev_arrow');
const nextArrow = $('.next_arrow');

ppBtn.on('click', function () {
   $(this).toggleClass('active');

   if ($(this).hasClass('active')) {
      mainSlider.slick('slickPause');
   } else {
      mainSlider.slick('slickPlay');
   }
});
prevArrow.on('click', function () {
   mainSlider.slick('slickPrev');
});
nextArrow.on('click', function () {
   mainSlider.slick('slickNext');
});
