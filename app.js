$(function() {
    
/*Fixed Header*/
    
   let header = $("header");
   let intro = $("#intro");
   let introH = intro.innerHeight();
         
   let scrollPos = $(window).scrollTop();
   
    console.log(scrollPos);
    console.log(introH); 
    
    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
        
    });    
    
/* Smoth scroll*/  
    $("[data-scroll]").on("click", function(event){
       event.preventDefault();
        
        let elementId = $(this).data('scroll');
          console.log(elementId);
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 800);
        
      
        
        
    });
 /* Slider* https://kenwheeler.github.io/slick/*/   
    let slider = $("#reviewsSlider");
    
    slider.slick({
    
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false

          
    

    });
    /*         navToggle;*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        
    });

});