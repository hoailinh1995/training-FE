
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
    $('.slickSlide').slick({
      appendArrows: '.buttonSlide',
      nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right1"></span></button>',
      prevArrow: '<button class="previous w-25"><span class="icomoon icon-chevron-left1 "></span></button>'
    });
  }
}

new UserAgent().init()
