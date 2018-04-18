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
          <button class="btn btn-gray hvr-rectangle-out" type="button" name="button" title="Ch�?n sản phẩm" style="float: right">
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
          <button class="btn btn-gray hvr-rectangle-out" type="button" name="button" title="Ch�?n sản phẩm" style="float: right">
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

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(10.764122,106.682473),
    zoom:17,
};

var map=new google.maps.Map(document.getElementById("contact_map"),mapProp);
var marker = new google.maps.Marker({position: mapProp.center});

marker.setMap(map);
}

function PriceToSring(price) {
  var str = "" + price;
  var dot = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    dot++;
    if (dot == 3 && i != 0) {
      str = insert(str, i, '.');
      dot = 0;
    }
  }
  str += '₫';
  return str;
}

function Inc(input_name) {
  var value = $(input_name).val();
  $(input_name).val(++value);
  IncreaseNumCar();
}

function Dec(input_name) {
  var value = $(input_name).val();
  if ($(input_name).val() > 1)
  {
    $(input_name).val(--value);
    DecreaseNumCar();
  }
}

function AddCart(ten, price, sluong) {
  var gia = PriceToSring(price);
  var item = $(`<div class="car-image" style="width: 17%" data-name="` + ten + `">
    <a href="javascript:;" class="product-image" title="` + ten + `">
      <img src="./image/all/` + ten + `.jpg" alt="` + ten + `">
    </a>
  </div>
  <div class="fix-flex" style="width: 33%" data-name="` + ten + `">
    <h2 class="car-name">
      <a href="javascript:;" title="` + ten + `">` + ten + `</a>
    </h2>
  </div>
  <div class="fix-flex" style="width: 15%" data-name="` + ten + `">
    <input type="hidden" name="price_` + ten + `" value="` + price + `">
    <span class="item-price">` + gia + `</span>
  </div>
  <div style="width: 14%" data-name="` + ten + `">
    <div class="input_qty_pr">
      <button class="items-count btn-minus" type="button" name="minus_` + ten + `">-</button>
      <input class="number-sidebar" type="text" disabled="disabled" size="4" min="0" maxlength="12" value="` + sluong + `" name="num_` + ten + `">
      <button class="items-count btn-plus" type="button" name="plus_` + ten + `">+</button>
    </div>
  </div>
  <div class="fix-flex" style="width: 15%" data-name="` + ten + `">
    <input type="hidden" name="eachTotalPrice" value="` + price + `">
    <span class="total-price">` + gia + `</span>
  </div>
  <div class="fix-flex" style="width: 6%; padding: 10px 0 6px; position: relative" data-name="` + ten + `">
    <a href="javascript:;" class="btn-remove remove-item" title="Xóa" data-name="delete_` + ten + `"></a>
  </div>
</div>`);
  var item_mobile = $(`<div class="item-product" data-name="` + ten + `">
  <div class="item-product-cart-mobile">
    <a href="javascript:;" title="` + ten + `"><img src="./image/all/` + ten + `.jpg" alt="` + ten + `"></a>
  </div>
  <div class="title-product-cart-mobile">
    <h3><a href="javascript:;" title="` + ten + `">` + ten + `</a></h3>
    <p>Giá: <span class="item-price">` + gia + `</span></p>
  </div>
  <div class="select-item-qty-mobile">
    <div class="txt_center">
      <button class="items-count btn-minus" type="button" name="minus_` + ten + `">-</button>
      <input class="number-sidebar" type="text" disabled="disabled"  name="num_` + ten + `" size="4" min="0" maxlength="12" value="` + sluong + `">
      <button class="items-count btn-plus" type="button" name="plus_` + ten + `">+</button>
    </div>
    <a href="javascript:;" class="btn-remove remove-item" title="Xóa" data-name="delete_` + ten + `"></a>
  </div>
</div>`);
  UpdateTotalPrice();

  $('.item-cart').append(item);
  $('.content-product-list').append(item_mobile);
  $(document).on('click', 'button[name="minus_' + ten + '"]', function() {
    var value = $(document).find('input[name="num_' + ten + '"]');
    Dec(value);
    var giaItem = parseInt($(document).find('input[name="price_' + ten + '"]').val());
    var soluong = parseInt($(document).find('input[name="num_' + ten + '"]').val());
    var tong = giaItem * soluong;
    $(document).find('div[data-name="' + ten + '"]').find('input[name="eachTotalPrice"]').val(tong);
    var chuoiTong = PriceToSring(tong);
    $(document).find('div[data-name="' + ten + '"]').find('.total-price').text(chuoiTong);

    UpdateListCar(ten, soluong);
    UpdateTotalPrice();
  });

  $(document).on('click', 'button[name="plus_' + ten + '"]', function() {
    var value = $(document).find('input[name="num_' + ten + '"]');
    Inc(value);
    var giaItem = parseInt($(document).find('input[name="price_' + ten + '"]').val());
    var soluong = parseInt($(document).find('input[name="num_' + ten + '"]').val());
    var tong = giaItem * soluong;
    $(document).find('div[data-name="' + ten + '"]').find('input[name="eachTotalPrice"]').val(tong);
    var chuoiTong = PriceToSring(tong);
    $(document).find('div[data-name="' + ten + '"]').find('.total-price').text(chuoiTong);

    UpdateListCar(ten, soluong);
    UpdateTotalPrice();
  });

  $(document).on('click', 'a[data-name="delete_' + ten + '"]', function() {
    var bigiam = parseInt(sessionStorage.count);
    var giam = $('input[name="num_' + ten + '"]').val();
    bigiam -= giam;
    sessionStorage.count = bigiam;

    var dem = $(document).find('.cartCount');
    dem.text("" + sessionStorage.count);

    UpdateListCar(ten, 0);
    $(document).find('div[data-name="' + ten + '"]').remove();
    UpdateTotalPrice();
  });
}

function DecreaseNumCar()
{
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) - 1;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

function IncreaseNumCar()
{
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) + 1;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

function UpdateListCar(ten, sluong)
{
  var temp = JSON.parse(sessionStorage.mangXe);
  for (var i = 0; i < temp.length; i++)
    if (temp[i].tenxe == ten)
      temp[i].num = sluong;
  sessionStorage.mangXe = JSON.stringify(temp);

}

function UpdateTotalPrice()
{
  var eachItem = $('input[name="eachTotalPrice"]');
  var total = 0;
  for(var i = 0; i < eachItem.length; i++)
  {
    total += parseInt(eachItem[i].value);
  }
  $('input[name="totalprice"]').val(total);
  total = PriceToSring(total);
  $('.all-total-price').text(total);
}

function CartUpdate() {
  var isHave = parseInt(sessionStorage.count);
  if (isHave == 0) {
    $('.cart-page').find('div:first').find('p:first').css('display', 'block');
    $('.cart').css('display', 'none');
    $('.cart-mobile').css('display', 'none');
    $('.cart-submit-desktop').css('display', 'none');
    $('.cart-price-mobile').css('display', 'none');
  } else {
    $('.cart-page').find('div:first').find('p:first').css('display', 'none');
    $('.cart').css('display', 'block');
    $('.cart-mobile').css('display', 'block');
    $('.cart-submit-desktop').css('display', 'block');
    $('.cart-price-mobile').css('display', 'block');
    var temp = JSON.parse(sessionStorage.mangXe);
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].num > 0)
        AddCart(temp[i].tenxe, temp[i].gia, temp[i].num);
    }
  }
  var eachItem = $('input[name="eachTotalPrice"]');
  var total = 0;
  for(var i = 0; i < eachItem.length; i++)
  {
    total += parseInt(eachItem[i].value);
  }
  $('input[name="totalprice"]').val(total);
  total = PriceToSring(total);
  $('.all-total-price').text(total);
}

$(document).ready(function() {
  CartUpdate();
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
});

$('#btnSI').on('click', function(){
  var username = 'Xin chào ' + $('#txtID').val();
  $('#SignUpNavBtn').css('display', 'none');
  $('#SignInNavBtn').css('display', 'none');

  // $('#SignUpNavBtn').fadeOut('normal');
  // $('#SignInNavBtn').fadeOut('normal');
  $('#InfoUserBtn').text(username);
  $('#InfoUserBtn').css('display', 'block');
  // $('#InfoUserBtn').fadeIn('normal');
  // $('#SignOutNavBtn').fadeIn('normal');
   $('#SignOutNavBtn').css('display', 'block');
});

$('#SignOutNavBtn').on('click', function(){
  $('#SignInModal').modal('toggle');
  $('#SignUpNavBtn').css('display', 'block');
  $('#SignInNavBtn').css('display', 'block');
  $('#InfoUserBtn').css('display', 'none');
  $('#SignOutNavBtn').css('display', 'none');

  // $('#InfoUserBtn').fadeOut('fast');
  // $('#SignOutNavBtn').fadeOut('fast');
  // $('#SignUpNavBtn').fadeIn('fast');
  // $('#SignInNavBtn').fadeIn('fast');
});
