
export default class UserAgent {
  constructor () {
    this.$html = $('html')
  }
  clikshow () {
    console.log(111)
    let img = $('.mod_abcd').find('button')
    img.on('click', () =>{
      console.log(111)
    })
  }

  clean(){
  $(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
}

clean1(){
  $(document).ready(function(){
    $("#hid").click(function(){
      $("t").animate({right:"250px"});
    });
    $("#sho").click(function(){
      $("t").show();
    });
  });
}

  init () {
    console.log('test')
    this.clikshow()
    this.clean()
    this.clean1()
  }

  
}

new UserAgent().init()
