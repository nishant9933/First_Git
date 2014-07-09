(function ($) {

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
        function about_toggle() {
            $(".about-toggle").hide();
            $(".about-toggle.home_arrow").hide();
        };
        function product_toggle() {
            $(".products-toggle").hide();
            $(".products-toggle.home_arrow").hide();
        };
        var tggle = $('[data-toggle^=nav]');
        var product = 1;
        var resource = 1;
        var about = 1;
        var community = 1;

        tggle.on("click", function (e) {
            var val = $(this).attr("data-toggle");

            if (val == "nav-products") {
                product++;
                if (product % 2 == 0) {
                    $(".products-toggle.home_arrow").show();
                    $('.arrow-product').unbind("hover");
                    $('.arrow-product').off("mouseenter mouseleave");
                    $(".products-toggle.home_arrow").show();
                    $(".content-section").html($(".product-content").html());
                    $(".content-section").slideDown(200);
                    about = 1; community = 1; resource = 1;
                    $('#signup-section').addClass("margin-top-60");
                }
                else {
                    $('#signup-section').removeClass("margin-top-60");
                    $(".content-section").slideUp(200);
                    $(".products-toggle.home_arrow").hide();
                    product = 1;
                    $('.arrow-product').on({
                        mouseenter: function () {
                            $(this).find('.arrow-img').show();
                        },
                        mouseleave: function () {
                            $(this).find('.arrow-img').hide();
                        }
                    });
                }
            }
            else {
                $(".products-toggle.home_arrow").hide();
                if (about == 1 && community == 1 && resource == 1) {
                    about = 1; community = 1; resource = 1;

                }

            }
            if (val == "nav-about") {
                about++;
                if (about % 2 == 0) {
                    $(".about-toggle.home_arrow").show();
                    $('.arrow-about').unbind("hover");
                    $('.arrow-about').off("mouseenter mouseleave");
                    $(".about-toggle.home_arrow").show();
                    $(".content-section").html($(".about-content").html());
                    $(".content-section").slideDown(200);
                    product = 1; community = 1; resource = 1;
                    $('#signup-section').addClass("margin-top-60");
                }
                else {
                    $('#signup-section').removeClass("margin-top-60");
                    $(".content-section").slideUp(200);
                    $(".about-toggle.home_arrow").hide();
                    about = 1;
                    $('.arrow-about').on({
                        mouseenter: function () {
                            $(this).find('.arrow-img').show();
                        },
                        mouseleave: function () {
                            $(this).find('.arrow-img').hide();
                        }
                    });
                }
            }
            else {
                $(".about-toggle.home_arrow").hide();
                if (product == 1 && community == 1 && resource == 1) {
                    product = 1; community = 1; resource = 1;

                }

            }
            if (val == "nav-resource") {
                resource++;
                if (resource % 2 == 0) {
                    $('#signup-section').addClass("margin-top-60");
                    $(".resource-toggle.home_arrow").show();
                    $('.arrow-resource').unbind("hover");
                    $('.arrow-resource').off("mouseenter mouseleave");
                    $(".resource-toggle.home_arrow").show();
                    $(".content-section").html($(".resource-content").html());
                    $(".content-section").slideDown(200);
                    about = 1; community = 1; product = 1;
                }
                else {
                    $('#signup-section').removeClass("margin-top-60");
                    $(".content-section").slideUp(200);
                    $(".resource-toggle.home_arrow").hide();
                    resource = 1;
                    $('.arrow-resource').on({
                        mouseenter: function () {
                            $(this).find('.arrow-img').show();
                        },
                        mouseleave: function () {
                            $(this).find('.arrow-img').hide();
                        }
                    });
                }
            }
            else {
                $(".resource-toggle.home_arrow").hide();
                if (about == 1 && community == 1 && product == 1) {
                    about = 1; community = 1; product = 1;

                }
            }
            if (val == "nav-community") {
                community++;
                if (community % 2 == 0) {
                    $('#signup-section').addClass("margin-top-60");
                    $(".community-toggle.home_arrow").show();
                    $('.arrow-community').unbind("hover");
                    $('.arrow-community').off("mouseenter mouseleave");
                    $(".community-toggle.home_arrow").show();
                    $(".content-section").html($(".community-content").html());
                    $(".content-section").slideDown(200);
                    about = 1; product = 1; resource = 1;
                }
                else {
                    $('#signup-section').removeClass("margin-top-60");
                    $(".content-section").slideUp(200);
                    $(".community-toggle.home_arrow").hide();
                    community = 1;
                    $('.arrow-community').on({
                        mouseenter: function () {
                            $(this).find('.arrow-img').show();
                        },
                        mouseleave: function () {
                            $(this).find('.arrow-img').hide();
                        }
                    });
                }
            }
            else {
                $(".community-toggle.home_arrow").hide();
                if (about == 1 && product == 1 && resource == 1) {
                    about = 1; product = 1; resource = 1;

                }

            }

            if (val != "nav-products") {
                $('.arrow-product').on({
                    mouseenter: function () {
                        $(this).find('.arrow-img').show();
                    },
                    mouseleave: function () {
                        $(this).find('.arrow-img').hide();
                    }
                });
            }
            if (val != "nav-about") {
                $('.arrow-about').on({
                    mouseenter: function () {
                        $(this).find('.arrow-img').show();
                    },
                    mouseleave: function () {
                        $(this).find('.arrow-img').hide();
                    }
                });
            }
            if (val != "nav-resource") {
                $('.arrow-resource').on({
                    mouseenter: function () {
                        $(this).find('.arrow-img').show();
                    },
                    mouseleave: function () {
                        $(this).find('.arrow-img').hide();
                    }
                });
            }
            if (val != "nav-community") {
                $('.arrow-community').on({
                    mouseenter: function () {
                        $(this).find('.arrow-img').show();
                    },
                    mouseleave: function () {
                        $(this).find('.arrow-img').hide();
                    }
                });
            }

            e.preventDefault();
            return false;
        })

        $('.home_arrow').hide();

        $(".arrow-product").hover(function () {
            $(this).find('.arrow-img').show();
        }, function () {
            $(this).find('.arrow-img').hide();
        });
        $(".arrow-resource").hover(function () {
            $(this).find('.arrow-img').show();
        }, function () {
            $(this).find('.arrow-img').hide();
        });
        $(".arrow-about").hover(function () {
            $(this).find('.arrow-img').show();
        }, function () {
            $(this).find('.arrow-img').hide();
        });
        $(".arrow-community").hover(function () {
            $(this).find('.arrow-img').show();
        }, function () {
            $(this).find('.arrow-img').hide();
        });
        $(".arrow-signup").hover(function () {
            $(this).find('.arrow-img').show();
        }, function () {
            $(this).find('.arrow-img').hide();
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