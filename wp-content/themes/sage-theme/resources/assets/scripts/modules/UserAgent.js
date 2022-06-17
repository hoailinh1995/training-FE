
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
      nextArrow: '<button class="btn-slideno text-4xl"><span class="icomoon icon-chevron-right1 absolute z-2 2xl:right-92 2xl:top-37 lg:right-11 lg:top-29 md:top-27 md:right-2"></span></button>',
      prevArrow: '<button class="btn-slideno text-4xl"><span class="icomoon icon-chevron-left1 absolute z-2 2xl:left-98 2xl:top-37 lg:left-10 lg:top-29 md:top-27 md:left-2"></span></button>'
    });
  }
}

new UserAgent().init()
