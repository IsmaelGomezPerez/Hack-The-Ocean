$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (index*500));
    });
    if($(window).width() > 800){
        $('header .textos').css({
            opacity:0,
            marginTop:0,
        });
        $('header .textos').animate({
            opacity:1,
            marginTop:'-52px'
        },1500);


    };
     
    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:700
        },500);
    });
    $('#btn-equipo').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:2300
        },500);
    });
});