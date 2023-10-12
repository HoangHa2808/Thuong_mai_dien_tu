$(document).ready(function() {

/* ---------------- start TemplateBunch link more menu ----------------------*/
    var max_link = 5;
    var moretext= "More";
    var items = $('.main-category-list .tb-menu > ul.ul-top-items > li.li-top-item');
    var surplus = items.slice(max_link, items.length);
    surplus.wrapAll('<li class="dropdown more-menu li-top-item"><div class="dropdown-menu"><ul class="list-unstyled childs_1 single-dropdown-menu"></div>');
    $('.more-menu').prepend('<a href="#" class="a-top-link">'+moretext+'</a>');
        if($( window ).width() > 992) { 
            $('.dropdown.more-menu .dropdown-menu li').addClass('TB-Sub-List1').removeClass('TB-Sub-List');
        }
        var tbcat_count = $('.more-menu ul > li.TB-Sub-List1 .CAT').length;
        if (tbcat_count > 2) {
            $('.more-menu > ul').addClass('tb-sub-auto');
   }
    $(".main-category-list .tb-menu > ul.ul-top-items > li.li-second-items").hover(
        function () {
            $("body").addClass("menu_hover");
        },
        function () {
            $("body").removeClass("menu_hover");
        }
    );

/* ---------------- End TemplateBunch link more menu ----------------------*/

    /* --------------- TB Go to Top Start---------------*/	
    $( "body" ).append( "<div id='tb-goToTop' title='Top' class='tb-goToTop btn-primary'></div>" );
    $("#tb-goToTop").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.tb-goToTop').fadeIn();
                } else {
                    $('.tb-goToTop').fadeOut();
                }
            });
        
            // scroll body to 0px on click
            $('.tb-goToTop').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        });
    /* --------------- TB Go to Top End---------------*/	

    /* --------------- Header fixed Start---------------*/	
    function header() {
        if (jQuery(window).width() > 1199){
            if (jQuery(this).scrollTop() > 120) {
            jQuery('.full-header').addClass("fixed");
            }else{
            jQuery('.full-header').removeClass("fixed");
            }
        } else {
            jQuery('.full-header').removeClass("fixed");
        }
    }
``
    $(document).ready(function(){header();});
    jQuery(window).resize(function() {header();});
    jQuery(window).scroll(function() {header();});
    /* --------------- Header fixed End---------------*/
    
    /* --------------- Footer 992 Accordion Start---------------*/

   function footerToggle() {
        if($( window ).width() < 992) {
            $("#tb-footer .footer-commen h5").addClass( "toggle" );
            $("#tb-footer .footer-commen h5.toggle").unbind("click");
                var Accordions = function(el, multiple) {
                    this.el = el || {};
                    this.multiple = multiple || false;
            
                    // Variables privadas
                    var link = this.el.find('.toggle');
                    // Evento
                    link.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
                }
            
                Accordions.prototype.dropdown = function(e) {
                    var $el = e.data.el;
                    $this = $(this),
                    $next = $this.next();
            
                    $next.slideToggle();
                    $this.parent().toggleClass('active');
            
                    if (!e.data.multiple) {
                    $el.find('ul.list-unstyled').not($next).slideUp().parent().removeClass('active');
                    };
                }   
            
                var accordions = new Accordions($('.footer-commen'), false);
        } else {
            $("#tb-footer .footer-commen h5.toggle").unbind("click");
            $("#tb-footer .footer-commen h5").removeClass('toggle');
        }
    }
    $(document).ready(function() {footerToggle();});
    $(window).resize(function() {footerToggle();});

    /* --------------- Footer 992 Accordion End---------------*/
	
	

    /* --------------- Top Product Tab owl Start---------------*/
        initialize_owl($('#owl1'));
            
            $('a[href="#tab-latest-0"]').on('shown.bs.tab', function () {
                initialize_owl($('#owl1'));
            }).on('hide.bs.tab', function () {
                destroy_owl($('#owl1'));
            });

        initialize_owl($('#owl2'));

            $('a[href="#tab-featured-0"]').on('shown.bs.tab', function () {
                initialize_owl($('#owl2'));
            }).on('hide.bs.tab', function () {
                destroy_owl($('#owl2'));
            });

        initialize_owl($('#owl3'));

            $('a[href="#tab-bestseller-0"]').on('shown.bs.tab', function () {
                initialize_owl($('#owl3'));
            }).on('hide.bs.tab', function () {
                destroy_owl($('#owl3'));
            });

        initialize_owl($('#owl4'));

            $('a[href="#tab-special-0"]').on('shown.bs.tab', function () {
                initialize_owl($('#owl4'));
            }).on('hide.bs.tab', function () {
                destroy_owl($('#owl4'));
            });
    /* --------------- Top Product Tab owl End---------------*/


    /* --------------- 5 inner page Grip Filter Start---------------*/


    $('#grid-view').click(function() {
        $('#list-view').removeClass('active');
        $('#short-view').removeClass('active');
        $('#grid-view1').removeClass('active');
        $('#grid-view2').removeClass('active');
        $('#grid-view').addClass('active');

        $('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
        $('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');

        $(".product-layout.product-grid .product-thumb .caption .product-countdown").each(function(){
            $(this).appendTo($(this).parent().parent().parent().parent().find(".image"));
        });
        $(".product-layout.product-grid .product-thumb .thumb-description .caption .button-group").each(function(){
            $(this).appendTo($(this).parent().parent().parent().find(".image"));
        });
        $(".product-layout.product-grid .product-thumb .thumb-description .button-group").each(function(){
            $(this).appendTo($(this).parent().parent().parent().find(".image"));
        });
        $(".product-layout.product-grid .product-thumb .thumb-description .caption .rating").each(function(){
            $(this).appendTo($(this).parent().parent().parent().parent().find(".image"));
        });


    });

    $('#list-view').click(function() {
        $('#grid-view').removeClass('active');
        $('#short-view').removeClass('active');
        $('#grid-view1').removeClass('active');
        $('#grid-view2').removeClass('active');
        $('#list-view').addClass('active');
        $('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-4 col-sm-4 col-md-4');
        $('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-8 col-sm-8 col-md-8');


        $(".product-layout.product-list .product-thumb .image .product-countdown").each(function(){
            $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
        });
        $(".product-layout.product-list .product-thumb .image .button-group").each(function(){
            $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
        });
        $(".product-layout.product-list .product-thumb .thumb-description .product-price-and-shipping").each(function(){
            $(this).insertAfter($(this).parent().parent().parent().find(".thumb-description .caption .description"));
        });
        $(".product-layout.product-list .product-thumb .image .rating").each(function(){
            $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
        });
        $(".product-layout.product-list .product-thumb .thumb-description .caption .rating").each(function(){
            $(this).insertAfter($(this).parent().parent().parent().find(".thumb-description h4"));
        });
    });
    
    if (localStorage.getItem('display') == 'grid') {
        jQuery('#grid-view').trigger('click');
    } 
    else if (localStorage.getItem('display') == 'list'){
        jQuery('#list-view').trigger('click');
    }
    else{
        jQuery('#grid-view').trigger('click');
    }  

    /* --------------- 5 inner page Grip Filter End---------------*/


    /* --------------- column-left & column-Right 992 Div up & Down---------------*/

            function optionFilter(){

                if ($(window).width() <= 991) {
                    $('#column-left .option-filter-box').appendTo('#content .category-description');
                    $('#column-right .option-filter-box').appendTo('#content .category-description');
            
                } else {
                    $('#content .category-description .option-filter-box').appendTo('#column-left .option-filter');
                    $('#content .category-description .option-filter-box').appendTo('#column-right .option-filter');
                }
            }
            $(document).ready(function(){ optionFilter(); });
            $(window).resize(function(){ optionFilter(); });
            
            
            function columnToggle() {
                if($( window ).width() < 992) {
                    $("#column-left .panel-heading").addClass( "toggle" );
                    $("#column-left .list-group").css( 'display', 'none' );
                    $("#column-left .panel-default.active .list-group").css( 'display', 'block' );
                    $("#column-left .panel-heading.toggle").unbind("click");
                    $("#column-left .panel-heading.toggle").click(function() {
                    $(this).parent().toggleClass('active').find('.list-group').slideToggle( "fast" );
                    });
                    
                    $("#column-left .box-heading").addClass( "toggle" );
                    $("#column-left .products-carousel").css( 'display', 'none' );
                    $("#column-left .products-list.active .products-carousel").css( 'display', 'block' );
                    $("#column-left .box-heading.toggle").unbind("click");
                    $("#column-left .box-heading.toggle").click(function() {
                    $(this).parent().toggleClass('active').find('.products-carousel').slideToggle( "fast" );
                    });
                    
                    $("#column-right .panel-heading").addClass( "toggle" );
                    $("#column-right .list-group").css( 'display', 'none' );
                    $("#column-right .panel-default.active .list-group").css( 'display', 'block' );
                    $("#column-right .panel-heading.toggle").unbind("click");
                    $("#column-right .panel-heading.toggle").click(function() {
                    $(this).parent().toggleClass('active').find('.list-group').slideToggle( "fast" );
                    });
                    
                    $("#column-right .box-heading").addClass( "toggle" );
                    $("#column-right .products-carousel").css( 'display', 'none' );
                    $("#column-right .products-list.active .products-carousel").css( 'display', 'block' );
                    $("#column-right .box-heading.toggle").unbind("click");
                    $("#column-right .box-heading.toggle").click(function() {
                    $(this).parent().toggleClass('active').find('.products-carousel').slideToggle( "fast" );
                    });
                                
                } else {
                    $("#column-left .panel-heading").unbind("click");
                    $("#column-left .panel-heading").removeClass( "toggle" );
                    $("#column-left .list-group").css( 'display', 'block' );
            
                    $("#column-left .box-heading").unbind("click");
                    $("#column-left .box-heading").removeClass( "toggle" );
                    $("#column-left .products-carousel").css( 'display', 'block' );
                    
                    $("#column-right .panel-heading").unbind("click");
                    $("#column-right .panel-heading").removeClass( "toggle" );
                    $("#column-right .list-group").css( 'display', 'block' );
            
                    $("#column-right .box-heading").unbind("click");
                    $("#column-right .box-heading").removeClass( "toggle" );
                    $("#column-right .products-carousel").css( 'display', 'block' );
            
                }
            }
            
            $(document).ready(function() {columnToggle();});
            $(window).resize(function() {columnToggle();});
            
            
            function responsivecolumn()
            {
                if ($(window).width() <= 991)
                {
                    $('#page > .container > .row > #column-left').appendTo('#page > .container > .row');
                    $('#page > .container > .row > #column-right').appendTo('#page > .container > .row');
                }
                else if($(window).width() >= 992)
                {
                    $('#page > .container > .row > #column-left').prependTo('#page > .container > .row');
                    $('#page > .container > .row > #column-right').appendTo('#page > .container > .row');
                }
            }
            $(window).resize(function(){responsivecolumn();});
            $(window).ready(function(){responsivecolumn();});
    /* --------------- column-left & column-Right 992 Div up & Down---------------*/

    /* --------------- column-left & column-Right Start---------------*/

    function contentwidth() {
        colsWidth = $('#column-right, #column-left').length;
        if($( window ).width() >= 1300) {
            $( "#content" ).addClass( "Cwidth" );
            $( "#column-left" ).addClass( "Lwidth" );
            $( "#column-right" ).addClass( "Rwidth" );
            if (colsWidth == 2) {
                $('.Cwidth').css('width', '60%');
                $('.Lwidth').css('width', '20%');
                $('.Rwidth').css('width', '20%');
            } else if (colsWidth == 1) {
                $('.Cwidth').css('width', '78%');
                $('.Lwidth').css('width', '22%');
                $('.Rwidth').css('width', '22%');
            } else {
                $('.Cwidth').css('width', '100%');
            }
        } else if($( window ).width() >= 1199) {
            $( "#content" ).addClass( "Cwidth" );
            $( "#column-left" ).addClass( "Lwidth" );
            $( "#column-right" ).addClass( "Rwidth" );
        if (colsWidth == 2) {
            $('.Cwidth').css('width', '60%');
            $('.Lwidth').css('width', '20%');
            $('.Rwidth').css('width', '20%');
            $("#column-left" ).addClass("Rtoggle" );
            $("#column-left h1.text-uppercase").click(function() {
                $(this).parent().toggleClass('active').find('.rightcolumn-toggle').slideToggle( "200" );
            });
        } else if (colsWidth == 1) {
            $('.Cwidth').css('width', '75%');
            $('.Lwidth').css('width', '25%');
            $('.Rwidth').css('width', '25%');
        } else {
            $('.Cwidth').css('width', '100%');
        }
        } else {
        $("#content").removeClass("Cwidth");
        $("#column-left").removeClass("Lwidth");
        $("#column-right").removeClass("Rwidth");
        $("#column-right" ).removeClass("Rtoggle" );
        $('#content').removeAttr("style");
        $('#column-left').removeAttr("style");
        $('#column-right').removeAttr("style");
        } 
    }
    $(document).ready(function(){contentwidth();});
    $(window).resize(function() {contentwidth();});


    colsCarousel = $('#column-right, #column-left').length;
    if (colsCarousel == 1) {
        ci=1;
    } else if (colsCarousel == 0) {
        ci=4;
    } else {
        ci=4;
    }

    /* --------------- column-left & column-Right End---------------*/

    /* --------------- Header & default JS Start---------------*/	

        $(".tbsearch_button").click(function() {
            $('.tbsearchtoggle').parent().toggleClass('active');
            $('.tbsearchtoggle').toggle('fast', function() {
            });
            $('.tbsearchtoggle .input-lg').attr('autofocus', 'autofocus').focus();
            $(".account-link-toggle").slideUp("slow");
            $(".header-cart-toggle").slideUp("slow");
            $(".currency-toggle").slideUp("slow");
            $(".language-toggle").slideUp("slow");
            $("body").removeClass("user-open");
            $("body").toggleClass("search-open");
            $("body").removeClass("cart-open");
        });
        
        $("#top-links a.dropdown-toggle").click(function(){
            $( ".account-link-toggle" ).slideToggle( "2000" );
            $(".currency-toggle").slideUp("slow");
            $(".language-toggle").slideUp("slow");

            $(".header-cart-toggle").slideUp("slow");
            $('.tbsearchtoggle').parent().removeClass("active");
            $('.tbsearchtoggle').hide('fast');
            $("body").removeClass("search-open");
            $("body").toggleClass("user-open");
            $("body").removeClass("cart-open");
        });
            
        $("#cart button.dropdown-toggle").click(function(){
            $( ".header-cart-toggle" ).slideToggle( "2000" );														 
            $(".account-link-toggle").slideUp("slow");
            $(".language-toggle").slideUp("slow");
            $(".currency-toggle").slideUp("slow");
            $('.tbsearchtoggle').parent().removeClass("active");
            $('.tbsearchtoggle').hide('fast');
            $("body").toggleClass("cart-open");
            $("body").removeClass("user-open");
            $("body").removeClass("search-open");
        });
        
        $("#form-currency button.dropdown-toggle").click(function(){
            $( ".currency-toggle" ).slideToggle( "2000" );	
            $(".language-toggle").slideUp("slow");
            $(".account-link-toggle").slideUp("slow");
            $(".header-cart-toggle").slideUp("slow");
            $("body").removeClass("language-open");
            $("body").removeClass("user-open");
            $("body").toggleClass("currency-open");
            $("body").removeClass("search-open");

        $('.tbsearchtoggle').parent().removeClass("active");
            $('.tbsearchtoggle').hide('fast');
        });
        
        $("#form-language button.dropdown-toggle").click(function(){
            $( ".language-toggle" ).slideToggle( "2000" );																  
            $(".currency-toggle").slideUp("fast");
            $(".account-link-toggle").slideUp("slow");
            $(".header-cart-toggle").slideUp("slow");
            $("body").removeClass("currency-open");
            $("body").removeClass("user-open");
            $("body").toggleClass("language-open");
            $("body").removeClass("search-open");

            $('.tbsearchtoggle').parent().removeClass("active");
            $('.tbsearchtoggle').hide('fast');
        }); 
        $(".option-filter .list-group-items a").click(function() {
            $(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
        });

        $("ul.breadcrumb li:nth-last-child(1) a").addClass('last-breadcrumb').removeAttr('href');

        $("#column-left .products-list .product-thumb, #column-right .products-list .product-thumb").unwrap();

        $("#content > h1, .account-wishlist #content > h2, .account-address #content > h2, .account-download #content > h2").first().addClass("page-title");
        
        $("#content > .page-title").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
        $(".page-title-wrapper .container .breadcrub").append($("ul.breadcrumb"));
        $(".page-title-wrapper").prependTo($(".header-content-title .parallex"));
        
        $("#account-order #content > h2").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
        $("#account-address #content > h2").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
        $(".page-title-wrapper .container .breadcrub").append($("ul.breadcrumb"));
        $("#content > .page-title-wrapper").appendTo($("#page > .header-content-title"));
        
        $('#column-left .product-thumb .image, #column-right .product-thumb .image').attr('class', 'image col-xs-5 col-sm-4 col-md-4');
        $('#column-left .product-thumb .thumb-description, #column-right .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-8 col-md-8');

        $('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-3 col-sm-3 col-md-4');
        $('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-8 col-sm-8 col-md-8');
        $('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
        $('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');

        $('select.form-control').wrap("<div class='select-wrapper'></div>");
        $('input[type="checkbox"]').wrap("<span class='checkbox-wrapper'></span>");
        $('input[type="checkbox"]').attr('class','checkboxid');
        $('input[type="radio"]').wrap("<span class='radio-wrapper'></span>");
        $('input[type="radio"]').attr('class','radioid');
        
        $('#column-left .products-list .btn-cart').removeAttr('data-original-title');
        $("#column-left .product-thumb .button-group, #column-right .product-thumb .button-group").each(function(){
            $(this).appendTo($(this).parent().parent().find(".caption"));
        });
        
    /* --------------- Header & default JS End---------------*/
	
	/*---------------------- Inputtype Js Start -----------------------------*/
		$('.checkboxid').change(function(){
		if($(this).is(":checked")) {
		$(this).addClass("chkactive");
		$(this).parent().addClass('active');
		} else {
		$(this).removeClass("chkactive");
		$(this).parent().removeClass('active');
		}
		});

		$(function() {
		var $radioButtons = $('input[type="radio"]');
		$radioButtons.click(function() {
		$radioButtons.each(function() {
		$(this).parent().toggleClass('active', this.checked);
		});
		});
		});
	/*---------------------- Inputtype Js End -----------------------------*/


    /*---------------------- image-additional img Start -----------------------------*/
        $('.image-additional img').on(
              'click',
              (event) => {
                $('.product-image img').attr('src',$(event.target).data('image-large-src'));
                $('.selected').removeClass('selected');
                $(event.target).addClass('selected');
                $('.product-image img').prop('src', $(event.currentTarget).data('image-large-src'));
            }
        );


    /*---------------------- image-additional img End -----------------------------*/

    /*------------- Slider Loader Js Strat ---------------*/
        $(window).load(function() 
        { 
        $(".tbloading-bg").fadeOut("slow");
        })
        $(window).load(function() { 
            $("#flexslider .tbloading-bg").removeClass("tbloader");
        });
    /*------------- Slider Loader Js End ---------------*/

    /*------------ left-main-menu Start ---------------*/
        function menuClass() {
            if($( window ).width() > 1199) {
                $( ".left-main-menu" ).addClass( "left-menu" );
            }
            else {
                $( ".left-main-menu" ).removeClass( "left-menu" );
            }
        }
        $(document).ready(function(){menuClass();});
        $(window).resize(function() {menuClass();});

        
        function left() {
            $('.leftbar').click(function(event) {
                $('.left-right-inner').addClass("nav-open");
                $('body').addClass("open");
            });

            $(".close-filter").click(function(){
                $(".left-right-inner").removeClass("nav-open");
                $('body').removeClass("open");
            });
        }

        $(document).ready(function() {
            left();
        });
        jQuery(window).resize(function() {
            left();
        });
        jQuery(window).scroll(function() {
            left();
        });
    /*------------ left-main-menu End ---------------*/

    /*------------ TB-cmsgallery  Start ---------------*/
        $( "#tb-gallery-cms .tbgallery-img .galleryicons .icon" ).attr( "data-lightbox", "example-1" );   
        $( "#tb-gallery-cms .tbgallery-img a" ).attr( "data-lightbox", "example-1" );
    /*------------ TB-cmsgallery  End ---------------*/

    /*-----------start menu toggle ------------*/
        $('.left-main-menu .TB-panel-heading').click(function() { 
            $('.left-main-menu .TB-panel-heading').toggleClass('active'); 
            $('.left-main-menu ul.dropmenu').slideToggle("2000"); 
        });  
    /*-----------End menu toggle ------------*/
    /* ------------ Start TemplateBunch Parallax JS ------------ */
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
        if(!isMobile) {
        if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
        }else{
        $(".parallex").sitManParallex({  invert: true });
        }   
        /* ------------ End TemplateBunch Parallax JS ------------ */
        $(".tbpopupclose").click(function() {
            $("#dialog").removeClass("in");
            $("#dialog").css('display', 'none');
            $(".b-modal.__b-popup1__").remove();
            $(".newletter-popup").css('display', 'none');
        });

    /* ------------ End TemplateBunch Parallax JS ------------ */

        /* ------------ Extra JS Start ------------ */

        function initialize_owl(el) {
            var mydir = $("html").attr("dir");

                if (mydir == 'rtl') {
                  var rtlVal=true
                }
                else{
                var rtlVal=false
            }
            el.owlCarousel({
                items : 4, //1 items above 1000px browser width
                nav : true,
                dots : false,
                loop: false,
                autoplay: false,
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

            $(".customNavigation .next").click(function(){
                $(this).parent().parent().find(".products-carousel").trigger('next.owl.carousel',[700]);
            })
            $(".customNavigation .prev").click(function(){
                $(this).parent().parent().find(".products-carousel").trigger('prev.owl.carousel',[700]);
            })

            $(".products-list .customNavigation").addClass('owl-navigation');
        }

        function destroy_owl(el) {
            if(typeof el.data('owlCarousel') != 'undefined') {
                el.data('owlCarousel').destroy();
                el.removeClass('owl-carousel');
            }
        }

        /* category-treeview Start */
        function categoryListTreeView() {
            $(".category-treeview li.category-li").find("ul").parent().prepend("<div class='list-tree'></div>").find("ul").css('display','none');

            $(".category-treeview li.category-li.category-active").find("ul").css('display','block');
            $(".category-treeview li.category-li.category-active").toggleClass('active');
        }
        $(document).ready(function() {categoryListTreeView();});


        /* category-treeview End */
        function categoryListTreeViewToggle() {
            $(".category-treeview li.category-li .list-tree").click(function() {
                $(this).parent().toggleClass('active').find('ul').slideToggle();
            });
        }
        $(document).ready(function() {categoryListTreeViewToggle();});

        $(".product-total-review, .product-write-review").click(function() {
            $('html, body').animate({ scrollTop: $(".product-tabs").offset().top }, 1000);
        });


    /* ------------ Extra JS End ------------ */

});
