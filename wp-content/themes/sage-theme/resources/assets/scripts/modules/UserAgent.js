
export default class UserAgent {
  constructor () {
    this.$html = $('html')
  }
  init () {
    console.log('test')
    this.function()
  }
  function () {
    $(".flip1").click(function(){
      $(".more1").slideToggle("slow");
    });
    $(".flip2").click(function(){
      $(".more2").slideToggle("slow");
    });
    $(".flip3").click(function(){
      $(".more3").slideToggle("slow");
    });
    $(".flip_a").click(function(){
      $(".explore1").slideToggle("slow");
    });
    $(".flip_b").click(function(){
      $(".explore2").slideToggle("slow");
    });
    $(".flip_c").click(function(){
      $(".explore3").slideToggle("slow");
    });
    $('.slick_slide').slick({
      appendArrows: '.button_slick',
      nextArrow: '<button class="btn-red w-1/2"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow: '<button class="btn-red w-1/2"><span class="icomoon icon-chevron-left"></span></button>'
    });
    $('.slick_slide2').slick({
      appendArrows: '.button_slick2',
      nextArrow:  '<button class="btn-slick-none"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow:  '<button class="btn-slick-none"><span class="icomoon icon-chevron-left"></span></button>'
    });
    $('.slick_slide3').slick({
      nextArrow:  '<button class="btn-slick-none absolute 2xl:right-18 lg:-right-21 top-11 text-4xl z-2"><span class="icomoon icon-chevron-right""></span></button>',
      prevArrow:  '<button class="btn-slick-none absolute 2xl:left-10 lg:-left-8 top-11 text-4xl z-2"><span class="icomoon icon-chevron-left"></span></button>'
    });
  }
}

new UserAgent().init()

// $(document).ready(function(){
//   $("a").click(function(){
//     $(".more").animate({
//       height: 'toggle'
//     });
//   });
// });
