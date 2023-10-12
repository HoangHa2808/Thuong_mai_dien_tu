$(document).ready(function() {
        var mydir = $("html").attr("dir");

            if (mydir == 'rtl') {
              var rtlVal=true
            }
            else{
            var rtlVal=false
        }
        // ------------------- TB_Services_CMS Start -------------------
        var tb_services_cms = $('#tb-services-cms .tb-services-cms-wrapper').owlCarousel({
            items : 4, //1 items above 1000px browser width
            nav: false,
            dots: false,
            loop: false,
            center: false,
            autoplayHoverPause: true,
            autoplay:true,
            rtl:rtlVal,
            responsive: {
                    0:{
                        items:1
                    },
                    551:{
                        items:2
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
        });
        // ------------------- TB_Services_CMS End -------------------

        // ------------------- TB_Testimonial-CMS Start -------------------
        var tb_testimonial_cms = $('#testimonial').owlCarousel({
            items : 1, //1 items above 1000px browser width
            nav: false,
            dots: true,
            loop: false,
            autoplayHoverPause: true,
            autoplay:true,
            rtl:rtlVal,
            responsive: {
                    0:{
                        items:1
                    },
                    544:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    992:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
        });
        // ------------------- TB_Testimonial-CMS End -------------------

        // ------------------- TB_Gallery-CMS Start -------------------
        var tb_gallery = $('#gallery').owlCarousel({
            items : 6, //1 items above 1000px browser width
            nav: false,
            dots: false,
            loop: false,
            autoplayHoverPause: false,
            autoplay:false,
            rtl:rtlVal,
            responsive: {
                    0:{
                        items:2
                    },
                    544:{
                        items:3
                    },
                    768:{
                        items:4
                    },
                    992:{
                        items:5
                    },
                    1400:{
                        items:7
                    }
                }
        });
        // ------------------- TB_Gallery-CMS End -------------------

        // ------------------- TB-top-Product-Tab Start -------------------

        var products_carousel = $('#TB-top-product-tab .tb-top-product-carousel').owlCarousel({
                items : 4, //1 items above 1000px browser width
                nav : true,
                dots : false,
                loop: false,
                autoplay:false,	
                rtl:rtlVal,
                responsive: {
                    0:{
                        items:1
                    },
                    544:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });
            // ------------------- TB-top-Product-Tab End -------------------



         

            /* ---------------- TB-Category Featured More categories Start ----------------------*/
            $('#TB-category-featured .content .caption .tb-content .tb-sub-cat > ul').each(function(){	
                var subcat = $(this).find('li');	
                var mainul = $(this).parent().closest('.caption').find('.cat-title > h4 > a');
                var ahref = mainul.attr('href');
                var max_link = 4;	
                if ( subcat.length > max_link ) {
                $(this).append('<li class="viewall"><div class="tb-view-all"><span class="categories"><a class="btn-primary" href="'+ahref+'">View All</a></span></div></li>');
                }
                subcat.each(function(j) {
                if ( j >= max_link ) { 
                $(this).css('display', 'none');
                $(this).addClass('disable');
                }
                });
            });
        /* ---------------- TB-Category Featured More categories End ----------------------*/


        // ------------------- TB Additional Images-Carousel Start -------------------

        var TB_Additional_Images = $('.additional-images').owlCarousel({
            items : 4, //1 items above 1000px browser width
            nav :true,
            dots : false,
            loop: false,
            autoplay:true,
            autoplayHoverPause: true,
            rtl:rtlVal,
            responsive: {
                0:{
                    items:2
                },
                361:{
                    items:3
                },
                481:{
                    items:3
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

    // ------------------- TB Additional Images-Carousel End -------------------

    // ------------------- TB Related Product Start -------------------

        var TB_Related_Product = $('.related-items').owlCarousel({
            items : 4, //1 items above 1000px browser width
            nav :true,
            dots : false,
            loop: false,
            autoplay:true,
            autoplayHoverPause: true,
            rtl:rtlVal,
            responsive: {
                0:{
                    items:1
                },
                544:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

        // ------------------- TB Related Product End -------------------

});