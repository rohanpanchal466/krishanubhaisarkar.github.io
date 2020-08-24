window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom'
    });

    sr.reveal('#aims', {
      delay: 1000,
      duration: 2000,
      origin: 'left',
      distance: '300px',
    });

    sr.reveal('#courses', {
      delay: 1000,
      duration: 2000,
      origin: 'right',
      distance: '300px',
    });

    sr.reveal('.title-image', {
      delay: 1000,
      duration: 1000,
      origin: 'top',
      distance: '300px',
    });

    sr.reveal('.brand-header', {
      delay: 1000,
      duration: 2000,
      origin: 'right',
      distance: '300px'
    });

    sr.reveal('#results', {
      delay: 1000,
      duration: 2000,
      origin: 'top',
      distance: '300px'
    });

    sr.reveal('#team', {
      delay: 1000,
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
    });

    sr.reveal('#testimonials', {
      delay: 1000,
      duration: 2000,
      origin: 'left',
      distance: '300px'
    });

    sr.reveal('.head-about-us', {
      delay: 1000,
      duration: 2000,
      origin: 'top',
      distance: '300px'
    });

    sr.reveal('.head-about-us', {
      delay: 1000,
      duration: 2000,
      origin: 'top',
      distance: '300px'
    });

    sr.reveal('.about-us-p', {
      delay: 1000,
      duration: 2000,
      origin: 'left',
      distance: '300px'
    });

    sr.reveal('.about-us-image', {
      delay: 1000,
      duration: 2000,
      origin: 'right',
      distance: '300px'
    });

    sr.reveal('.about-us-p-2', {
      delay: 1000,
      duration: 2000,
      origin: 'right',
      distance: '300px'
    });

    sr.reveal('.about-us-image-2', {
      delay: 1000,
      duration: 2000,
      origin: 'left',
      distance: '300px'
    });

    sr.reveal('.goals', {
      delay: 1000,
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
    });

    sr.reveal('.goals-p', {
      delay: 1000,
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
    });

    sr.reveal('#contact', {
      delay: 1000,
      duration: 2000,
      origin: 'left',
      distance: '200px'
    });

    sr.reveal('#footer', {
      delay: 1000,
      duration: 2000,
      origin: 'bottom',
      distance: '200px'
    });




    $(function () {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });