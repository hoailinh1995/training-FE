
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
slickslide(){
  $('.chuyencanh').slick({
    appendArrows: '.button_slick',
    nextArrow: '<button class="next w-25"><span class="icomoon icon-chevron-right"></span></button>',
    prevArrow: '<button class="back w-25"><span class="icomoon icon-chevron-left"></span></button>'
  });
}
slickslide1(){
  $('.slick_slide1').slick({
    appendArrows: '.button_slick1',
    nextArrow: '<button class="next1 w-1/2 h-10 "><span class="icomoon icon-Group-2455"></span></button>',
    prevArrow: '<button class="back2 w-1/2 h-10"><span class="icomoon icon-Group-2454"></span></button>'
  });
}

  init () {
    console.log('test')
   // this.clikshow()
    this.asc()
    this.asc1()
    this.asc2()
    this.slickslide()
    this.slickslide1()
    
  }

  
  
}

new UserAgent().init()
