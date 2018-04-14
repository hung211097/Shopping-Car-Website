$(document).ready(function() {
  if($(window).scrollTop() >= 86)
  {
    $('.modal-dialog').css('z-index', '9999 !important');
  }

  var owl = $('#BSeen');
  // owl.on('initialize.owl.carousel initialized.owl.carousel ' +
  //   'initialize.owl.carousel initialize.owl.carousel ' +
  //   'resize.owl.carousel resized.owl.carousel ' +
  //   'refresh.owl.carousel refreshed.owl.carousel ' +
  //   'update.owl.carousel updated.owl.carousel ' +
  //   'drag.owl.carousel dragged.owl.carousel ' +
  //   'translate.owl.carousel translated.owl.carousel ' +
  //   'to.owl.carousel changed.owl.carousel',
  //   function(e) {
  //     $('.' + e.type)
  //       .removeClass('secondary')
  //       .addClass('success');
  //     window.setTimeout(function() {
  //       $('.' + e.type)
  //         .removeClass('success')
  //         .addClass('secondary');
  //     }, 500);
  //   });
  owl.owlCarousel({
    loop: true,
    nav: true,
    items: 10,
    dots: false,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    lazyLoad: false,
    margin: 30,
    video: false,
    autoWidth: false,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      970: {
        items: 2
      },
      1175: {
        items: 3
      },
      1366: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  });

  var owl2 = $('#NewProd');
  owl2.owlCarousel({
    loop: true,
    nav: true,
    items: 10,
    dots: false,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    lazyLoad: false,
    margin: 30,
    video: false,
    autoWidth: false,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      970: {
        items: 2
      },
      1175: {
        items: 3
      },
      1366: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  });

  var owl3 = $('#BSell');
  owl3.owlCarousel({
    loop: true,
    nav: false,
    items: 10,
    dots: false,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    lazyLoad: false,
    margin: 30,
    video: false,
    autoWidth: false,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      970: {
        items: 2
      },
      1175: {
        items: 3
      },
      1366: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  });

  var owl4 = $('#Opinion');
  owl4.owlCarousel({
    items: 3,
    dots: true,
    lazyLoad: false,
    margin: 30,
    video: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 2
      },
      1140: {
        items: 2
      },
      1366: {
        items: 2
      }
    }
  });

  var owl5 = $('#owl-brands');
  owl5.owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    items: 11,
    dots: false,
    lazyLoad: false,
    margin: 10,
    video: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 1
      },
      980: {
        items: 4
      },
      1366: {
        items: 6
      }
    }
  });

  for (var i = 0; i < BSeenArr.length; i++)
    AddBestSeendProd(BSeenArr[i].ten, BSeenArr[i].gia);

  for (var i = 0; i < NewProdArr.length; i++)
    AddNewProd(NewProdArr[i].ten, NewProdArr[i].gia);

  for (var i = 0; i < NewProdArr.length; i++)
    AddBestSellProd(BSellArr[i].ten, BSellArr[i].gia);


      document.SignIn.reset();
      document.SignUp.reset();
});

var BSeenArr = [{
    ten: 'Aston Martin DB11',
    gia: '4.829.000.000'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1.116.000.000'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3.200.000.000'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1.600.000.000'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400.000.000'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649.000.000'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639.000.000'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648.000.000'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1.399.000.000'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700.000.000'
  }
]

var BSellArr = [{
    ten: 'Aston Martin DB11',
    gia: '4.829.000.000'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1.116.000.000'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3.200.000.000'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1.600.000.000'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400.000.000'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649.000.000'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639.000.000'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648.000.000'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1.399.000.000'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700.000.000'
  }
]

var NewProdArr = [{
    ten: 'Aston Martin DB11',
    gia: '4.829.000.000'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1.116.000.000'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3.200.000.000'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1.600.000.000'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400.000.000'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649.000.000'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639.000.000'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648.000.000'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1.399.000.000'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700.000.000'
  }
]

function AddBestSeendProd(ten, gia) {
  var boxHinh = $('#BSeen');
  boxHinh.owlCarousel('add', `<div class="product-box">
    <div class="product-thumbnail">
      <a href="javascript:;" title="` + ten + `">
        <img src="./image/BestSeen/` + ten + `.jpg" alt="` + ten + `">
      </a>
      <div class="price-box clearfix">
        <div class="special-price">
          <span class="price product-price">
            ` + gia + `₫
          </span>
        </div>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">
        <a href="javascript:;" title="` + ten + `">` + ten + `</a>
      </h3>
    </div>
    <div class="product-action clearfix ">
      <form class="products-view-grid" action="" method="post" data-id="">
        <div>
          <button class="btn btn-gray hvr-rectangle-out" type="button" name="button" title="Mua sản phẩm">
            <i class="fa fa-shopping-cart"></i>
            Mua hàng
          </button>
          <button class="btn btn-gray hvr-rectangle-out" type="button" name="button" title="Chọn sản phẩm" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </button>
        </div>
      </form>
    </div>
  </div>`).owlCarousel('update');
  boxHinh.find('.owl-nav').removeClass('disabled');
}

function AddBestSellProd(ten, gia) {
  var boxHinh = $('#BSell');
  boxHinh.owlCarousel('add', `<div class="prod-grid">
    <a href="javascript:;" title="` + ten + `">
      <img src="./image/BestSell/` + ten + `.jpg" data-lazyload="./image/BestSell/` + ten + `.jpg" alt="` + ten + `">
    </a>
    <div class="infoBestSell">
      <h3><a href="javascript:;">` + ten + `</a></h3>
      <div class="clearfix">
        <div class="special-price">
          <span class="price product-price">
            ` + gia + `₫
          </span>
        </div>
      </div>
    </div>
    <form class="products-view-grid" action="" method="post" data-id="">
      <div class="group">
        <button type="button" class="button square hvr-rectangle-out" name="Purchase">
          <i class="fa fa-shopping-cart"></i>
        </button>
        <button type="button" class="button square hvr-rectangle-out" name="Detail">
        <i class="fa fa-eye"></i>
        </button>
      </div>
    </form>
  </div>`).owlCarousel('update');
}

function AddNewProd(ten, gia) {
  var boxHinh = $('#NewProd');
  boxHinh.owlCarousel('add', `<div class="product-box">
    <div class="product-thumbnail">
      <a href="javascript:;" title="` + ten + `">
        <img src="./image/NewProduct/` + ten + `.jpg" alt="` + ten + `">
      </a>
      <div class="price-box clearfix">
        <div class="special-price">
          <span class="price product-price">
            ` + gia + `₫
          </span>
        </div>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">
        <a href="javascript:;" title="` + ten + `">` + ten + `</a>
      </h3>
    </div>
    <div class="product-action clearfix ">
      <form class="products-view-grid" action="" method="post" data-id="">
        <div>
          <button class="btn btn-gray hvr-rectangle-out" type="button" name="button" title="Mua sản phẩm">
            <i class="fa fa-shopping-cart"></i>
            Mua hàng
          </button>
          <button class="btn btn-gray hvr-rectangle-out" type="button" name="button" title="Chọn sản phẩm" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </button>
        </div>
      </form>
    </div>
  </div>`).owlCarousel('update');
  boxHinh.find('.owl-nav').removeClass('disabled');
}

$('#SignUpNavBtn').on('click', function(){
  document.SignUp.reset();
});

$('#SignInNavBtn').on('click', function(){
  document.SignIn.reset();
});

$('#OptionBtn').on('click', function(){
  document.SignUp.reset();
  document.SignIn.reset();
  document.ForgetPass.reset();
});


$('#OptionBtnForget').on('click', function(){
  $('body').css('padding-right', '-17px !important');
  document.ForgetPass.reset();
});
