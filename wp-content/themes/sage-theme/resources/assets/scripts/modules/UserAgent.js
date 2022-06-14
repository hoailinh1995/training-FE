
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
    $(".flipa").click(function(){
      $(".morea").slideToggle("slow");
    });
    $(".flipb").click(function(){
      $(".moreb").slideToggle("slow");
    });
    $(".flipc").click(function(){
      $(".morec").slideToggle("slow");
    });
    $('.slickSlide').slick({
      appendArrows: '.buttonSlide',
      nextArrow: '<button class="btn-red w-1/2"><span class="icomoon icon-chevron-right1"></span></button>',
      prevArrow: '<button class="btn-red w-1/2"><span class="icomoon icon-chevron-left1 "></span></button>'
    });    
    $('.slickSlide2').slick({
      appendArrows: '.butSlide',
      nextArrow: '<button class="btn-slideno"><span class="icomoon icon-chevron-right1"></span></button>',
      prevArrow: '<button class="btn-slideno"><span class="icomoon icon-chevron-left1"></span></button>'
    });
    $('.slickSlide3').slick({
      // appendArrows: '.butSlide2',
      nextArrow: '<button class="btn-slideno text-4xl"><span class="icomoon icon-chevron-right1 absolute z-2 right-92 top-37"></span></button>',
      prevArrow: '<button class="btn-slideno text-4xl"><span class="icomoon icon-chevron-left1 absolute z-2 left-98 top-37"></span></button>'
    });
  }
}

new UserAgent().init()
