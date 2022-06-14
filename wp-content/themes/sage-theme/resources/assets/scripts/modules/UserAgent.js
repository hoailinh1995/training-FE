
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
    prevArrow: '<button class="back1 w-1/2 h-10 "><span class="icomoon icon-Group-2454"></span></button>'
  });
}
slick_slide3(){
  $('.slick_slide3').slick({
    speed: 300,
    nextArrow: '.next2',
    prevArrow: '.prev2',
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
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
// slick2() {
//   $('.phan2').slick({
//     slidesToShow: 6,
//     slidesToSroll: 1,
//     prevArrow: '.next2',
//     nextArrow: '.prev2',
//     responsive: [
//       {
//         breakpoint: 1441,
//         settings: {
//           slidesToShow: 6,
//           slidesToScroll: 6,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 1025,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 5
//         }
//       },
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4
//         }
//       }
//     ]
// });
// }
  init () {
    console.log('test')
   // this.clikshow()
    this.asc()
    this.asc1()
    this.asc2()
    this.slickslide()
    this.slickslide1()  
    this.slick_slide3()
    // this.slick2()
  }

  
  
}

new UserAgent().init()
