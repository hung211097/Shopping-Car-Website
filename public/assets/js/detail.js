$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }
  // sessionStorage.removeItem('count');
  if (!sessionStorage.count)
    sessionStorage.count = 0;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);

  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);



  document.SignIn.reset();
  document.SignUp.reset();
});

var mang = [];

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





$('.btn-cart').on('click', function() {
  $(this).blur();
});

$('.qtyminus').on('click', function() {
  var temp = $('#qty').val();
  if(temp > 1)
    $('#qty').val(--temp);
});

$('.qtyplus').on('click', function() {
  var temp = $('#qty').val();
  $('#qty').val(++temp);
});

$('.btn-cart').on('click', function() {
  var price = PriceToSring(gia);
  var hinh = $('#QuickBuy').find('div.thumb-1x1').find('img');
  hinh.attr('src', './image/all/' + ten + '.jpg');
  hinh.attr('alt', ten);
  $('#QuickBuy').find('.product-title').text(ten);
  $('#QuickBuy').find('input[name="product-new-price"]').val(gia);
  $('#QuickBuy').find('div.product-new-price').find('span').text(price);
  var num = parseInt($('#qty').val());
  IncreaseNumCar(num);
  var temp = JSON.parse(sessionStorage.mangXe);
  for (var i = 0; i < temp.length; i++)
    if (temp[i].tenxe == ten)
      temp[i].num += num;
  sessionStorage.mangXe = JSON.stringify(temp);
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
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) - 1;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

function IncreaseNumCar(x) {
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) + x;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

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
    $('form[name="SearchForm"]').submit();
  }
});
