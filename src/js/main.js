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
    var acercaDe=$('#acerca-de').offset().top;
    var menu=$('#platillos').offset().top;
    var galeria=$('#galeria').offset().top;
    var ubicacion=$('#ubicacion').offset().top;
        
    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:380
        },500);
    });
    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:menu
        },500);
    });
    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:galeria
        },500);
    });
    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:ubicacion
        },500);    
    });
    $(window).scroll(function(){
        var windowWidt=$(window).width();
        if(windowWidt>800){
            var scroll=$(window).scrollTop();
            $('header .textos').css({
                'transform':'translate(0px,'+scroll/2+'%)'
            });
            $('.acerca-de article').css({
                'transform':'translate(0px,-'+scroll/4+'%)'
            });
        }
    });
    $(window).resize(function(){
        if($(window).width()<800){
            $('.acerca-de article').css({
                'transform':'translate(0px,0px)'
            })
        }
    })
});