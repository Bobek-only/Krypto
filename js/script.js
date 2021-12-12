$('.hero6__slider').slick({
    slidesToShow: 3,
    arrows:true,
    responsive:[
        {
            breakpoint: 992,
            settings:{
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 3}
        },
        {
            breakpoint:767,

            settings:{
                arrows: false,
                centerPadding: '40px',

                slidesToShow:2}
        },
        {
            breakpoint: 580,
            settings: {
                arrows: false,
                centerPadding: '20px',
                slidesToShow: 1

            },

        }]
})

$('.hero3__slider').slick({
    slidesToShow: 3,
    arrows:true,

  responsive:[
      {
        breakpoint: 992,
      settings:{
            arrows: false,
          centerPadding: '40px',
          slidesToShow: 3}
      },
      {
          breakpoint:800,

          settings:{
              arrows: false,
              centerPadding: '40px',

              slidesToShow:2}
          },
      {
          breakpoint: 580,
          settings: {
              arrows: false,
              centerPadding: '20px',
              slidesToShow: 1

          }
  }]
})

