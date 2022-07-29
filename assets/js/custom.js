$( document ).ready(function() {
    
    setTimeout(() => {
        var sidebar_height = $('#sidebar').outerHeight();
        var rightbar_height = $('.cm_right_content').outerHeight();

        if(rightbar_height >= sidebar_height){
            stick_bar();
            $('body').removeClass('fixed');
        }
        else{
            $('body').addClass('fixed');
        }
    }, 300);

    $( window ).on('resize load', function() {
        // stick_bar();

        setTimeout(() => {
            var sidebar_height = $('#sidebar').outerHeight();
            var rightbar_height = $('.cm_right_content').outerHeight();
    
            if(rightbar_height >= sidebar_height){
                stick_bar();
                $('body').removeClass('fixed');
            }
            else{
                $('body').addClass('fixed');
            }
        }, 300);
    });
    
    //Menu Toggle Js
    $('.menu_toggle_btn').click(function(){
        $('.header-wrapper').toggleClass('menu_open');
        $('body').toggleClass('cm-overflow');
    });
    // $('.menu_close_trigger, .overlay_bg').click(function(){
    //     $('.header-wrapper').removeClass('menu_open');
    //     $('body').removeClass('cm-overflow');
    // });

    //Menu  Js
    $(".dropdown_text").click(function(){
        $(".dropdown_menu").slideToggle();
        $(".dropdown_text").toggleClass('active');
    });
    
    //Modal Js
    $('.show_modal, .slider_images').click(function(){
        $('body').addClass('modal_open');
    })

    $('.modal_close_btn').click(function(){
        $('body').removeClass('modal_open');
    });
    
    //Accordion Js
    $('.accordion-button').click(function(){
        var img_set = $(this).attr('data-src');
        $('.services_mandate_image img').attr('src', img_set);

        $(this).parents('.accordion-item').siblings().find('.accordion-button').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
        //$(this).parents('.faq-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        
        $(this).siblings().find('.accordion-collapse').slideUp();
        $(this).parents('.accordion-item').siblings().find('.accordion-collapse').slideUp();
        //$(this).parents('.faq-col').siblings().find('.ct_accordion_info').slideUp();
        
        $(this).parents('.accordion-item').find('.accordion-collapse').slideToggle();
    });

    //Dropdownbox Js
    $(".drop_down_arrow").click(function(){
        $(this).parents('.common_drop_down').find('.common_drop_down_list').slideToggle();
        $(this).toggleClass("showMenu");


        $(this).parents('.common_drop_down').siblings().find('.common_drop_down_list').slideUp();
        $(this).parents('.common_drop_down').siblings().find('.drop_down_arrow').removeClass("showMenu");

        $(".common_drop_down_list li").click(function(){
            $(this).parents('.common_drop_down').find('.drop_down_arrow span').text($(this).text());
            $(this).parents('.common_drop_down').find('.common_drop_down_list').slideUp();
            $(this).parents('.common_drop_down').find('.drop_down_arrow').removeClass("showMenu");
        });
    });

    
    // Tab mrnu
    $('ul.tabs li').click(function(){
        $('html, body').animate({scrollTop:0});
        var tab_id = $(this).attr('data-tab');
        var navigate_text = $(this).prev().find('a.common_tabs_title').text();
        $('.navigator_text').text(navigate_text)

        $('ul.tabs li > a').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active').siblings().removeClass('active');
        $("#"+tab_id).addClass('active');
        $('body').attr('data-tab', tab_id);

        setTimeout(() => {
            var sidebar_height = $('#sidebar').outerHeight();
            var rightbar_height = $('.cm_right_content').outerHeight();
    
            if(rightbar_height >= sidebar_height){
                stick_bar();
                $('body').removeClass('fixed');
            }
            else{
                $('body').addClass('fixed');
            }
        }, 300);
    })

    $('.planning_navigator .navigator_text').click(function(){
        $('body').attr('data-tab', $('.tabs .tab-link.active').prev().attr('data-tab'))
        $('.tabs .tab-link.active').removeClass('active').prev().addClass('active');
        $('.tabs_data .tab-content.active').removeClass('active').prev().addClass('active');
        var navigate_text = $('.tabs .tab-link.active').prev().find('a.common_tabs_title').text()
        $(this).text(navigate_text);
    })


});

$(document).on("click", function(event){
    var $trigger = $(".dropdown_text");
    
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown_menu").slideUp();
        $(".dropdown_text").removeClass('active');
    }
});

function stick_bar() {
    var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#sidebar').outerHeight() - 100;

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop() + 100;
        console.log(top)
        console.log(y)
        if (y > top) {
            
    //Quand scroll, ajoute une classe ".fixed" et supprime le Css existant 
            if (y < maxY) {
                $('#sidebar').addClass('fixed').removeAttr('style');
            } else {
                
    //Quand la sidebar arrive au footer, supprime la classe "fixed" précèdement ajouté
                $('#sidebar').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#sidebar').removeClass('fixed');
        }
    });
}
