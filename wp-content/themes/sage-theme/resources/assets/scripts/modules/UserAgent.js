
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
    $('.slickSlide').slick({
      appendArrows: '.buttonSlide',
      nextArrow: '<button class="next w-25 hover:bg-blue-600 hover:text-black"><span class="icomoon icon-chevron-right1"></span></button>',
      prevArrow: '<button class="previous w-25 hover:bg-blue-600 hover:text-black"><span class="icomoon icon-chevron-left1 "></span></button>'
    });    
    $('.slickSlide2').slick({
      appendArrows: '.butSlide',
      nextArrow: '<button class="next hover:text-black"><span class="icomoon icon-chevron-right1"></span></button>',
      prevArrow: '<button class="previous hover:text-black"><span class="icomoon icon-chevron-left1"></span></button>'
    });
    $('.slickSlide3').slick({
      appendArrows: '.butSlide2',
      nextArrow: '<button class="next hover:text-black"><span class="icomoon icon-chevron-right1"></span></button>',
      prevArrow: '<button class="previous hover:text-black"><span class="icomoon icon-chevron-left1"></span></button>'
    });
  }
}

new UserAgent().init()
