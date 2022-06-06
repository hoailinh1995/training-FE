
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
  }
function() {
  // $(".flip").click(function(){
  //   $(".more").slideToggle("slow");
  // });
  $('.slick_slide').slick({
    appendArrows:'.btt',
    nextArrow: '<button class="next"><span class="icomoon icon-chevron-right"></span></button>',
    prevArrow: '<button class="prev"><span class="icomoon icon-chevron-left"></span></button>'
  });
}
  
}

new UserAgent().init()
