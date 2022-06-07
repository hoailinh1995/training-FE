
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
    $('.slick_slide').slick({
      appendArrows: '.button_slick',
      nextArrow: '<button class="next w-25 hover:bg-yellow"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow: '<button class="back w-25 hover:bg-yellow"><span class="icomoon icon-chevron-left"></span></button>'
    });
    $('.slick_slide2').slick({
      appendArrows: '.button_slick2',
      nextArrow:  '<button class="next hover:text-blue-700"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow:  '<button class="previous hover:text-blue-700"><span class="icomoon icon-chevron-left"></span></button>'
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
