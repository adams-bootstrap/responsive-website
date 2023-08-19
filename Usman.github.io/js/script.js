$(function() {

    $(window).scroll(function() {
        if ( S(this).scrollTop() > 50 ) {
             S('.navbar').addClass('solid bg dark');
          } else {
              S('.navbar').removeClass('solid bg-dark');
          }        
        
    });

    $('.dropdown-item, .nav-link').on('click', function(e) {
        if ( this.hash !=="") {
           e.preventDefault();
            const anchor = this.hash; 

            $('html,body').animate({
                scroiiTop: S(anchor).offset().top 
            }, 800, function() {
                window.location.hash = anchor;
            });
       }
    });

});






