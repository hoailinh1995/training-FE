
export default class UserAgent
 {
  constructor () 
  {
    this.$html = $('html')
  }
check1()
{
  $(document).ready(function(){
    $(".nut1").click(function(){
      $(".more1").slideToggle();
    });
  });
}

check2()
{
  $(document).ready(function()
  {
    $(".nut2").click(function()
    {
      $(".more2").slideToggle();
    });
  });
}

check3()
{
  $(document).ready(function()
  {
    $(".nut3").click(function(){
      $(".more3").slideToggle();
    });
  });
}
init () 
  {
    console.log('test')
    this.check1()
    this.check2()
    this.check3()
    this.function()
    this.functions()
    this.slick_slide3()
  
  }
function() {
  // $(".flip").click(function(){
  //   $(".more").slideToggle("slow");
  // });
  $('.slick_slide').slick({
    appendArrows:'.btt',
    nextArrow: '<button class="next w-25 h-6"><span class="icon-Group-2530"></span></button>',
    prevArrow: '<button class="prev w-25 h-6"><span class="icon-Group-2454"></span></button>'
  });
}
  
functions() {
  $(".flip").click(function(){
   $(".more").slideToggle("slow");
  });
  $('.Picture').slick({
    appendArrows:'.but',
    nextArrow: '<button class="next w-25 h-6 "><span class="icon-Group-2530"></span></button>',
    prevArrow: '<button class="prev w-25 h-6"><span class="icon-Group-2454"></span></button>'
  });
}


slick_slide3(){
  $('.slick_slide3').slick({
    dots: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: '.next1',
    nextArrow: '.prev2',
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          dots: true
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}


}

new UserAgent().init()
