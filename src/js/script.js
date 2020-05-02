$(document).ready(function () {
   $('.carousel__inner').slick(
      {
         speed: 1500,
         // adaptiveHeight: true,
         prevArrow: '<button type = "button" class = "slick-prev" ><img src="icons/left.svg"></button>',
         nextArrow: '<button type = "button" class = "slick-next" ><img src="icons/right.svg"></button>',
         responsive:[
            {
               breakpoint: 992,
               settings: {
                  dots: true,
                  arrows: false,
               }
            }
         ]
      }
   );

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toogleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };

   // function toogleSlide(item) {
   //    $(item).each(function (i) {
   //       $(this).on('click', function (e) {
   //          e.preventDefault();
   //          for (let q = 0; q < $(item).length; q++) {
   //             if (q === i) {
   //                continue;
   //             }
   //             $('.catalog-item__content').eq(q).addClass('catalog-item__content_active');
   //             $('.catalog-item__list').eq(q).removeClass('catalog-item__list_active');
   //          }
   //          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
   //          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
   //       });
   //    });
   // }

   toogleSlide('.catalog-item__link');
   toogleSlide('.catalog-item__back');

   // Modal

   $('[data-modal=consultation').on('click', function () {
      $('.overlay, #consultation').fadeIn("slow");
   });
   $(".modal__close").on("click", function () {
      $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
   });

   $(".button_mini").each(function (i) {
      $(this).on("click", function () {
         $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
         $(".overlay, #order").fadeIn("slow");
      })
   })

   function validateForm(form) {
      $(form).validate({
         rules: {
            name: "required",
            phone: "required",
            email: {
               required: true,
               email: true,
            }
         },

         messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
               required: "Пожалуйста, введите свой E-mail адресс",
               email: "Неправильно введён адрес почты"
            }
         }
      });
   }

   validateForm("#consultation-form");
   validateForm("#order form");
   validateForm("#consultation form");

   $("input[name=phone]").mask("+7 (999) 999-99-99");

});