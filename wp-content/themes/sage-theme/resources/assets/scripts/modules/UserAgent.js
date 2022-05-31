
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
  $(document).ready(function(){
    $(".nut2").click(function(){
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
  }
}

new UserAgent().init()
