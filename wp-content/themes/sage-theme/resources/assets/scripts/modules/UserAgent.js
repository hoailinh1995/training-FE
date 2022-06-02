
export default class UserAgent {
  constructor () {
    this.$html = $('html')
  }
  init () {
    console.log('test')
    this.function()
  }
  function () {
    $(".flip").click(function(){
      $(".more").slideToggle("slow");
    });
    $('.slick_slide').slick({
      appendArrows: '.button_slick',
      nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow: '<button class="back w-25"><span class="icomoon icon-chevron-left"></span></button>'
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
