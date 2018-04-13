jQuery(document).ready(function($) {
  var owl = $('.owl-carousel');
  owl.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl.owlCarousel({
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText:['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    lazyLoad: false,
    margin: 30,
    video: false,
    autoWidth: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   600: {
    //     items: 2
    //   },
    //   950: {
    //     items: 2
    //   },
    //   1185: {
    //     items: 2
    //   },
    //   1300: {
    //     items: 4
    //   }
    // }
  });
});
