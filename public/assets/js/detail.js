$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }

  document.SignIn.reset();
  document.SignUp.reset();
});

function AddMoreImage(x, count) {
  mySwiper.appendSlide(`<div class="swiper-slide bethua">
  <a href="javascript:;" name="more-`+ x +`-`+ count +`" class="thumb-link">
    <img src="/image/all/` + x + `/` + x + `_` + count + `.jpg" alt="`+  x +`" onerror="this.parentNode.style.display = 'none'">
  </a>
  </div>`);
  mySwiper.update();

  $('a[name="more-' + x + '-' + count +'"]').on('click', function() {
    var a = $('#zoom');
    a.attr('href', '/image/all/' + x + '/' + x + '_' + count + '.jpg');
    var image = a.find('img');
    image.attr('src', '/image/all/' + x + '/' + x + '_' + count + '.jpg');
    image.attr('alt',  x);
  });
}

$('.qtyminus').on('click', function() {
  var temp = $('#qty').val();
  if(temp > 1)
    $('#qty').val(--temp);
});

$('.qtyplus').on('click', function() {
  var temp = $('#qty').val();
  $('#qty').val(++temp);
});

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

$('#SignUpNavBtn').on('click', function() {
  document.SignUp.reset();
});

$('#SignInNavBtn').on('click', function() {
  document.SignIn.reset();
});

$('#OptionBtn').on('click', function() {
  document.SignUp.reset();
  document.SignIn.reset();
  document.ForgetPass.reset();
});

$('#OptionBtnForget').on('click', function() {
  $('body').css('padding-right', '-17px !important');
  document.ForgetPass.reset();
});

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

function DecreaseNumCar() {
  var cartcount = $(document).find('.cartCount');
  var dem = parseInt(cartcount.text());
  dem--;
  cartcount.text("" + dem);
}

function IncreaseNumCar(x) {
  var cartcount = $(document).find('.cartCount');
  var dem = parseInt(cartcount.text());
  dem += x;
  cartcount.text("" + dem);
}

function AddToCarousel(id, ten, gia, contain) {
  var price = PriceToSring(gia);
  var boxHinh = $(contain);
  // var tempName = ten.split(' ').join('_');
  boxHinh.owlCarousel('add', `<div class="product-box">
    <div class="product-thumbnail">
      <a href="/products/detail/` + ten +`" title="` + ten + `">
        <img src="/image/all/` + ten + `.jpg" alt="` + ten + `">
      </a>
      <div class="price-box clearfix">
        <div class="special-price">
          <span class="price product-price">
            ` + price + `
          </span>
        </div>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">
        <a href="/products/detail/` + ten +`" title="` + ten + `">` + ten + `</a>
      </h3>
    </div>
    <div class="product-action clearfix ">
      <form class="products-view-grid" action="/cart/add" method="post" data-id="">
        <input type="hidden" name="proId" value="`+id+`">
        <input type="hidden" name="quantity" value="1">
        <div>
          <a class="btn btn-gray hvr-rectangle-out" name="`+contain+`-button-Buy-` + ten + `" title="Mua hàng" data-toggle="modal" data-target="#QuickBuy">
            <i class="fa fa-shopping-cart"></i>
            Mua hàng
          </a>

          <a href="/products/detail/` + ten +`" class="btn btn-gray hvr-rectangle-out" name="button-Detail-` + ten +`" title="Chi tiết" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </a>
        </div>
      </form>
    </div>
  </div>`).owlCarousel('update');

  boxHinh.find('.owl-nav').removeClass('disabled');
  $('a[name="'+contain+'-button-Buy-' + ten + '"]').on('click', function() {

    var form = $(this).parents('form');
    $.ajax({
      type: 'POST',
      url: '/cart/add',
      async: false,
      data: form.serialize(),
      dataType: 'json',
      error: function() {
        $('#QuickBuy').find('h4.modal-title').html('<span><i class="fas fa-times"></i></span> Thêm vào giỏ hàng thất bại');
        $('.OutofStock').show();

        var hinh = $('#QuickBuy').find('div.thumb-1x1').find('img');
        hinh.attr('src', '/image/all/' + ten + '.jpg');
        hinh.attr('alt', ten);
        $('#QuickBuy').find('.product-title').text(ten);
        $('#QuickBuy').find('input[name="product-new-price"]').val(gia);
        $('#QuickBuy').find('div.product-new-price').find('span').text(price);
      },
      beforeSend: function() {},
      success: function() {
        $('#QuickBuy').find('h4.modal-title').html('<span><i class="fa fa-check"></i></span> Thêm vào giỏ hàng thành công');
        $('.OutofStock').hide();

        var hinh = $('#QuickBuy').find('div.thumb-1x1').find('img');
        hinh.attr('src', '/image/all/' + ten + '.jpg');
        hinh.attr('alt', ten);
        $('#QuickBuy').find('.product-title').text(ten);
        $('#QuickBuy').find('input[name="product-new-price"]').val(gia);
        $('#QuickBuy').find('div.product-new-price').find('span').text(price);
        IncreaseNumCar();
      },
      cache: false
    });
  });
}

$('input[name="search"]').bind('keypress', function(e) {
  if(e.keyCode == 13)
  {
    $('form[name="SearchForm"]').submit();
  }
});

$('input[name="searchCollapse"]').bind('keypress', function(e) {
  if(e.keyCode == 13)
  {
    $('form[name="SearchForm"]').submit();
  }
});
