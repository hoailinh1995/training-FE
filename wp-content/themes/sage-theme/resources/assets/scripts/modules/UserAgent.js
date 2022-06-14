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
    $(".flip1").click(function(){
      $(".more1").slideToggle("slow");
    });
  });
}

asc1(){
  $(document).ready(function(){
    $(".flip2").click(function(){
      $(".more2").slideToggle("slow");
    });
  });
}

asc2(){
  $(document).ready(function(){
    $(".flip3").click(function(){
      $(".more3").slideToggle("slow");
    });
  });
}

asc3(){
  $(document).ready(function(){
    $("slick_slide").click(function(){
      $("").toggle();
    });
  });
}
asc4(){
  $(document).ready(function(){
    $("p-46").click(function(){
      $("").toggle();
    });
  });
}
asc5(){
  $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    });
  });

}



  init () {
    console.log('test')
   // this.clikshow()
    this.asc()
    this.asc1()
    this.asc2()
    this.asc3()
    this.asc4()
    this.asc5()
    this.function()
    this.function1()
  }
function(){

    $('.slick_slide').slick({
      appendArrows: '.button_slick',
      nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow: '<button class="back w-25"><span class="icomoon icon-chevron-left"></span></button>'
    });
  }
function1(){
  $('.slick_slide1').slick({
    appendArrows: '.button_slick1',
    nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right"></span></button>',
    prevArrow: '<button class="back w-25"><span class="icomoon icon-chevron-left"></span></button>'
  });
}
}

new UserAgent().init()

