export default class UserAgent {
  constructor () {
    this.$html = $('html')
  }
  clikshow () {
    console.log(111)
    let img = $('.module-duydt2').find('button')
    img.on('click', () =>{
      console.log(111)
    })
  }
asc(){
  $(document).ready(function(){
    $(".button1").click(function(){
      $(".more1").slideToggle();
    });
  });
}

asc1(){
  $(document).ready(function(){
    $(".button2").click(function(){
      $(".more2").slideToggle();
    });
  });
}
asc3(){
  $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    });
  });

}



asc2(){
  $(document).ready(function(){
    $(".button3").click(function(){
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
    this.asc3()
    this.function()
  }
  function(){
     $('.slick_slide').slick({
       appendArrows: '.button_slick',
       nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right"></span></button>',
       prevArrow: '<button class="back w-25"><span class="icomoon icon-chevron-left"></span></button>'
     });
    $('.slick_slide_2').slick({
      slidesToShow: 1,
      rows: 0,
      appendArrows: '.nut',
      nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right"></span></button>',
      prevArrow: '<button class="back w-25"><span class="icomoon icon-chevron-left"></span></button>'
  });
    $('.slick_slide3').slick({
      slidesToShow: 6,
      slideToScroll: 1,
      nextArrow: '.next',
      prevArrow: '.back'
  });
  

  }
}

new UserAgent().init()