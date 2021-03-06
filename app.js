﻿(function ($) {

    var App = {

        /**
        * Init Function
        */
        init: function () {
            App.HomeOpacity();
            App.ScrollToContact();
            App.ScrollBack();
            App.Preloader();
            App.Animations();
            App.Carousel();
            App.Lightbox();
        },


        HomeOpacity: function () {
            var h = window.innerHeight;
            $(window).on('scroll', function () {
                var st = $(this).scrollTop();
                $('#home').css('opacity', (1 - st / h));
            });
        },



        /**
        * Scroll To Contact
        */
        ScrollToContact: function () {
            $('#button_more').click(function () { $.scrollTo('#about', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#about_arrow_back').click(function () { $.scrollTo('0px', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#about_arrow_next').click(function () { $.scrollTo('#features_1', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#features_1_arrow_back').click(function () { $.scrollTo('#about', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#features_1_arrow_next').click(function () { $.scrollTo('#features_2', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#features_2_arrow_back').click(function () { $.scrollTo('#features_1', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#features_2_arrow_next').click(function () { $.scrollTo('#features_3', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#features_3_arrow_back').click(function () { $.scrollTo('#features_2', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#features_3_arrow_next').click(function () { $.scrollTo('#gallery', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#gallery_arrow_back').click(function () { $.scrollTo('#features_3', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#gallery_arrow_next').click(function () { $.scrollTo('#dev_blog', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
            $('#dev_blog_arrow_back').click(function () { $.scrollTo('0px', 1000, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' }); });
        },



        /**
        * Scroll Back
        */
        ScrollBack: function () {
            $('#arrow_back').click(function () {
                $.scrollTo('#home', 1500, { easing: 'easeInOutExpo', offset: 0, 'axis': 'y' });
            });
        },


        /**
        * Preloader
        */
        Preloader: function () {
            $(window).load(function () {
                $('#status').delay(100).fadeOut('slow');
                $('#preloader').delay(500).fadeOut('slow');
                $('body').delay(500).css({ 'overflow': 'visible' });
                setTimeout(function () { $('#logo').addClass('animated fadeInDown') }, 500);
                setTimeout(function () { $('#logo_header').addClass('animated fadeInDown') }, 600);
                setTimeout(function () { $('#slogan').addClass('animated fadeInDown') }, 700);
                setTimeout(function () { $('#home_image').addClass('animated fadeInUp') }, 900);
            })
        },


        /**
        * Animations
        */
        Animations: function () {
            //$('#home').waypoint(function () {
            //    setTimeout(function () { $('#slogan').addClass('animated fadeInDown') }, 0);
            //    setTimeout(function () { $('#webskills').addClass('animated fadeInDown') }, 300);
            //    setTimeout(function () { $('#iphone').addClass('animated fadeInDown') }, 500);
            //    setTimeout(function () { $('#samsung').addClass('animated fadeInDown') }, 700);
            //    setTimeout(function () { $('#nokia').addClass('animated fadeInDown') }, 900);
            //    setTimeout(function () { $('#motrola').addClass('animated fadeInDown') }, 1100);
            //}, { offset: '50%' });

            //$('#features_1').waypoint(function () {
            //    setTimeout(function () { $('#features_1_content').addClass('animated fadeInDown') }, 0);
            //    setTimeout(function () { $('#features1a_image').addClass('animated fadeInRight') }, 1100);
            //    setTimeout(function () { $('#features1b_image').addClass('animated fadeInRight') }, 600);
            //}, { offset: '50%' });

            //$('#features_2').waypoint(function () {
            //    setTimeout(function () { $('#features_2_content').addClass('animated fadeInDown') }, 0);
            //    setTimeout(function () { $('#features2a_image').addClass('animated fadeInLeft') }, 1100);
            //    setTimeout(function () { $('#features2b_image').addClass('animated fadeInLeft') }, 600)
            //}, { offset: '50%' });

            //$('#features_3').waypoint(function () {
            //    setTimeout(function () { $('#features_3_intro').addClass('animated fadeInDown') }, 0);
            //    setTimeout(function () { $('#features_3_content_left, #features_3_content_right').addClass('animated fadeInUp') }, 700);
            //    setTimeout(function () { $('#features_3_content_center').addClass('animated fadeInDown') }, 600)
            //}, { offset: '50%' });

            //$('#gallery').waypoint(function () {
            //    setTimeout(function () { $('#gallery_intro').addClass('animated fadeInDown') }, 0);
            //    setTimeout(function () { $('#gallery_carousel').addClass('animated fadeInUp') }, 700)
            //}, { offset: '50%' });

            //$('#dev_blog').waypoint(function () {
            //    setTimeout(function () { $('#dev_blog_intro').addClass('animated fadeInDown') }, 0);
            //    setTimeout(function () { $('#dev_blog_content').addClass('animated fadeInDown') }, 700)
            //}, { offset: '50%' });

            //$('#blog_header').waypoint(function () {
            //    setTimeout(function () { $('#title').addClass('animated fadeInDown') }, 0);
            //}, { offset: '50%' });

        },


        /**
        * Carousel
        */
        Carousel: function () {
           
        },

        /**
        * Nivo Lightbox
        */
        Lightbox: function () {
            //$('#owl-gallery a').nivoLightbox({
            //    effect: 'fall',                             // The effect to use when showing the lightbox
            //});
        },


    }

    $(function () {
        function about_toggle(){
            $(".about-toggle").hide();
            $(".about-toggle.home_arrow").hide();
        };
        function product_toggle() {
            $(".poducts-toggle").hide();
            $(".poducts-toggle.home_arrow").hide();
        };
        var tggle = $('[data-toggle^=nav]');
        tggle.on("click", function (e) {
            var val = $(this).attr("data-toggle");
           
            if (val == "nav-products") {
                about_toggle();
               
                if ($(".poducts-toggle").is(":hidden")) {
                    //$('.arrow-hover').unbind("hover");
                    $('.arrow-hover').off("mouseenter mouseleave");
                    $(".poducts-toggle.home_arrow").show();
                    $(".poducts-toggle").slideDown(1000);
                } else {
                    $(".poducts-toggle").hide();
                    $('.arrow-hover').on({
                        mouseenter: function () {
                            $(this).find('.about-img').show();
                            $(this).find('.home-img').show();
                        },
                        mouseleave: function () {
                            $(this).find('.about-img').hide();
                            $(this).find('.home-img').hide();
                        }
                    });
                }
                
            }
            if (val == "nav-about") {
                product_toggle();
               
                if ($(".about-toggle").is(":hidden")) {
                    $('.arrow-hover').off("mouseenter mouseleave");
                    $(".about-toggle.home_arrow").show();
                    $(".about-toggle").slideDown(1000);
                } else {
                    $(".about-toggle").hide();
                    $('.arrow-hover').on({
                        mouseenter: function () {
                            $(this).find('.about-img').show();
                            $(this).find('.home-img').show();
                        },
                        mouseleave: function () {
                            $(this).find('.about-img').hide();
                            $(this).find('.home-img').hide();
                        }
                    });
                }
            }
           
            $('.dropdown-toggle').toggleClass("pricng-style");
          
            $("#toppanel").toggleClass("toppanel-expand");
            e.preventDefault();
            return false;
        })

        $('.home_arrow').hide();

        $(".arrow-hover").hover(function () {
            $(this).find('.about-img').show();
            $(this).find('.home-img').show();
        }, function () {
            $(this).find('.about-img').hide();
            $(this).find('.home-img').hide();
        });
       
        $("[data-customtoggle='questions']").click(function () {
            $("[data-customtoggle='questions']").removeClass('hide');
            $("[data-customtoggle='answer']").addClass('hide');
            $(this).toggleClass('hide');
            $(this).next().toggleClass('hide');
        });
        
        App.init();
    });
    
})(jQuery);