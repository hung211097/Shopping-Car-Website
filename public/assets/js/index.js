$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }
  // sessionStorage.removeItem('count');
  if (!sessionStorage.count)
    sessionStorage.count = 0;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);

if (!sessionStorage.mangXe)
  sessionStorage.mangXe = "[]";
  document.SignIn.reset();
  document.SignUp.reset();
});

var mang = [];

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

var MaxCar = 10;

function AddToCarousel(id, ten, gia, contain) {
  var price = PriceToSring(gia);
  var boxHinh = $(contain);
  boxHinh.owlCarousel('add', `<div class="product-box">
    <div class="product-thumbnail">
      <a href="/products/` + ten +`" title="` + ten + `">
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
        <a href="/products/` + ten +`" title="` + ten + `">` + ten + `</a>
      </h3>
    </div>
    <div class="product-action clearfix ">
      <form class="products-view-grid" action="" method="post" data-id="">
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
    var hinh = $('#QuickBuy').find('div.thumb-1x1').find('img');
    hinh.attr('src', '/image/all/' + ten + '.jpg');
    hinh.attr('alt', ten);
    $('#QuickBuy').find('.product-title').text(ten);
    $('#QuickBuy').find('input[name="product-new-price"]').val(gia);
    $('#QuickBuy').find('div.product-new-price').find('span').text(price);

    IncreaseNumCar();
    var temp = JSON.parse(sessionStorage.mangXe);
    var isFind = false;
    for(var i = 0; i < temp.length; i++)
      if(temp[i].maxe == id)
      {
        temp[i].num += 1;
        isFind = true;
        break;
      }
    if(isFind == false)
      temp.push({maxe: id, tenxe: ten, giaxe: gia, num: 1})
    sessionStorage.mangXe = JSON.stringify(temp);
  });

  $('a[name="button-Detail-' + ten +'"]').on('click', function(){
    sessionStorage.detailXe = ten;
    var temp = JSON.parse(sessionStorage.mangXe);
    for (var i = 0; i < temp.length; i++)
      if (temp[i].tenxe == ten)
        temp[i].xem += 1;
    sessionStorage.mangXe = JSON.stringify(temp);
  });
}

function AddBestSellProd(id, ten, gia) {
  var price = PriceToSring(gia);
  var boxHinh = $('#BSell');
  boxHinh.owlCarousel('add', `<div class="prod-grid">
    <a href="javascript:;" title="` + ten + `">
      <img src="/image/all/` + ten + `.jpg" data-lazyload="./image/BestSell/` + ten + `.jpg" alt="` + ten + `">
    </a>
    <div class="infoBestSell">
      <h3><a href="/products/` + ten +`">` + ten + `</a></h3>
      <div class="clearfix">
        <div class="special-price">
          <span class="price product-price">
            ` + price + `
          </span>
        </div>
      </div>
    </div>
    <form class="products-view-grid" action="" method="post" data-id="">
      <div class="group">
        <a class="button square hvr-rectangle-out" name="BSell-button-Buy-` + ten + `" data-toggle="modal" data-target="#QuickBuy">
          <i class="fa fa-shopping-cart"></i>
        </a>
        <a href="/products/detail/` + ten + `" class="button square hvr-rectangle-out" name="button-Detail-` + ten +`">
        <i class="fa fa-eye"></i>
        </a>
      </div>
    </form>
  </div>`).owlCarousel('update');
  $('a[name="BSell-button-Buy-' + ten + '"]').on('click', function() {
    var hinh = $('#QuickBuy').find('div.thumb-1x1').find('img');
    hinh.attr('src', '/image/all/' + ten + '.jpg');
    hinh.attr('alt', ten);
    $('#QuickBuy').find('.product-title').text(ten);
    $('#QuickBuy').find('input[name="product-new-price"]').val(gia);
    $('#QuickBuy').find('div.product-new-price').find('span').text(price);

    IncreaseNumCar();
    var temp = JSON.parse(sessionStorage.mangXe);
    var isFind = false;
    for(var i = 0; i < temp.length; i++)
      if(temp[i].maxe == id)
      {
        temp[i].num += 1;
        isFind = true;
        break;
      }
    if(isFind == false)
      temp.push({maxe: id, tenxe: ten, giaxe: gia, num: 1})
    sessionStorage.mangXe = JSON.stringify(temp);
  });

  $('a[name="button-Detail-' + ten +'"]').on('click', function(){
    sessionStorage.detailXe = ten;
  });
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

function Inc(input_name) {
  var value = $(input_name).val();
  $(input_name).val(++value);
  IncreaseNumCar();
}

function Dec(input_name) {
  var value = $(input_name).val();
  if ($(input_name).val() > 1) {
    $(input_name).val(--value);
    DecreaseNumCar();
  }
}

function AddCart(ten, price, sluong) {
  var gia = PriceToSring(price);
  var item = $(`<div class="car-image" style="width: 17%" data-name="` + ten + `">
    <a href="javascript:;" class="product-image" title="` + ten + `">
      <img src="/image/all/` + ten + `.jpg" alt="` + ten + `">
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
    <input type="hidden" name="eachTotalPrice" data-name="eachTotalPrice_`+ten+`" value="` + price + `">
    <span class="total-price" data-name="total-price-`+ten+`">` + gia + `</span>
  </div>
  <div class="fix-flex" style="width: 6%; padding: 10px 0 6px; position: relative" data-name="` + ten + `">
    <a href="javascript:;" class="btn-remove remove-item" title="Xóa" data-name="delete_` + ten + `"></a>
  </div>
</div>`);

  var item_mobile = $(`<div class="item-product" data-name="` + ten + `">
  <div class="item-product-cart-mobile">
    <a href="javascript:;" title="` + ten + `"><img src="/image/all/` + ten + `.jpg" alt="` + ten + `"></a>
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

  $('.item-cart').append(item);
  var num = parseInt($('input[name="num_'+ ten +'"]').val());
  var priceItem = parseInt($('input[name="price_' + ten +'"]').val());
  var temp = num * priceItem;
  var totalPriceItem = $('input[data-name="eachTotalPrice_' + ten +'"]').val(temp);
  $('span[data-name="total-price-'+ten+'"]').text(PriceToSring(temp));

  UpdateTotalPrice();

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

function DecreaseNumCar() {
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) - 1;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

function IncreaseNumCar() {
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) + 1;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

function UpdateListCar(ten, sluong) {
  var temp = JSON.parse(sessionStorage.mangXe);
  for (var i = 0; i < temp.length; i++)
    if (temp[i].tenxe == ten)
      temp[i].num = sluong;
  sessionStorage.mangXe = JSON.stringify(temp);
}

function UpdateTotalPrice() {
  var eachItem = $('input[name="eachTotalPrice"]');
  var total = 0;
  for (var i = 0; i < eachItem.length; i++) {
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
        AddCart(temp[i].tenxe, temp[i].giaxe, temp[i].num);
    }
  }

  var eachItem = $('input[name="eachTotalPrice"]');
  var total = 0;
  for (var i = 0; i < eachItem.length; i++) {
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

$('#btn-Search').on('click', function() {
  sessionStorage.search = $('input#find').val();
  sessionStorage.SearchPrice = 0;
  sessionStorage.SearchBrand = 0;
  sessionStorage.SearchType = 0;
  var keyword = sessionStorage.search;
  if(keyword == "")
    sessionStorage.SearchResult = AllProd.length;
  else
  {
    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for(var i = 0; i < AllProd.length; i++)
      if(AllProd[i].ten.search(key) > -1)
        dem++;
    sessionStorage.SearchResult = dem;
  }
});

$('#btn-Search-Collapse').on('click', function() {
  sessionStorage.search = $('input#findCollapse').val();
  sessionStorage.SearchPrice = 0;
  sessionStorage.SearchBrand = 0;
  sessionStorage.SearchType = 0;
  var keyword = sessionStorage.search;
  if(keyword == "")
    sessionStorage.SearchResult = AllProd.length;
  else
  {
    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for(var i = 0; i < AllProd.length; i++)
      if(AllProd[i].ten.search(key) > -1)
        dem++;
    sessionStorage.SearchResult = dem;
  }
});

$('#btn-Search-Foot').on('click', function() {
  sessionStorage.search = "";
  sessionStorage.SearchPrice = 0;
  sessionStorage.SearchBrand = 0;
  sessionStorage.SearchType = 0;
  var keyword = sessionStorage.search;
  if(keyword == "")
    sessionStorage.SearchResult = AllProd.length;
  else
  {
    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for(var i = 0; i < AllProd.length; i++)
      if(AllProd[i].ten.search(key) > -1)
        dem++;
    sessionStorage.SearchResult = dem;
  }
});

$('input[name="search"]').bind('keypress', function(e) {
  if(e.keyCode == 13)
  {
    $('form[name="SearchForm"]').submit();
  }
});

$('input[name="searchCollapse"]').bind('keypress', function(e) {
  if(e.keyCode == 13)
  {
    $('form[name="SearchFormCollapse"]').submit();
  }
});
