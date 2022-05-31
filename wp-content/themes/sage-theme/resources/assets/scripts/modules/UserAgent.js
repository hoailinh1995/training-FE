
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
asc(){
  $(document).ready(function(){
    $(".nut1").click(function(){
      $(".more1").slideToggle();
    });
  });
}

asc1(){
  $(document).ready(function(){
    $(".nut2").click(function(){
      $(".more2").slideToggle();
    });
  });
}

asc2(){
  $(document).ready(function(){
    $(".nut3").click(function(){
      $(".more3").slideToggle();
    });
  });
}
  init () {
    console.log('test')
   // this.clikshow()
    this.asc()
    this.asc1()
    this.asc2()
  }

  
}

new UserAgent().init()
