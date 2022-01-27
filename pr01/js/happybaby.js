$(function(){
// --------------------------------------------------
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.main_slider').on('afterChange', function(e,s,c){
    // console.log(c); 슬라이더 순서의 숫자가 나온다.
    $('.slider_dots ul li').eq(c).addClass('on').siblings().removeClass('on');
});














// --------------------------------------------------
})