jQuery(document).ready(function($) {
    'use strict'
    $(function(){
        $(".menu-icon").click(function(){
            $(this).toggleClass("active");
            $(".overlay-menu").toggleClass('open');
        });
        var modBtn=$('#modBtn'),
        modal=$('#modal'),
        close=modal.find('.close-btn img'),
        modContent=modal.find('.modal-content');
//open modal
        modBtn.on('click',function(){
            modal.css('display','block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
        });
//close modal 
        $(document).on('click',function(e){
            var target=$(e.target);
            if(target.is(modal)||target.is(close)){
                modContent.removeClass('model-animated-in').addClass('modal-animated-out').delay(300).queue(function(next){
                    modal.css('display','none');
                    next();
                });
            }
        });
        });
    // on click event for scroll effect

    $('a.scrollTo').on('click',function(){
        var scrollTo=$(this).attr('data-scrollTo');
        $('a.scrollTo').each(function(){
            if(scrollTo==$(this).attr('data-scrollTo')){
                $(this).addClass('active');
            }
            else{
                $(this).removeClass('active');
            }
        });
       // /animate scroll
       $('body,html').animate({
        "scrollTop":$('#'+ scrollTo).offset().top

       },1000);
       return false;
    })
});
