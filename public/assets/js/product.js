$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }
  // sessionStorage.removeItem('count');
  if (!sessionStorage.count)
    sessionStorage.count = 0;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);

  // if (!sessionStorage.mangXe)
  //   for (var i = 0; i < AllProd.length; i++) {
  //     var xe = {
  //       tenxe: AllProd[i].ten,
  //       num: 0,
  //       gia: parseInt(AllProd[i].gia),
  //       xem: parseInt(AllProd[i].xem),
  //       ban: parseInt(AllProd[i].ban),
  //       nlieu: AllProd[i].nlieu,
  //       mau: AllProd[i].mau,
  //       hopso: AllProd[i].hopso,
  //       cua: AllProd[i].cua,
  //       cho: AllProd[i].cho
  //     };
  //     mang.push(xe);
  //     sessionStorage.mangXe = JSON.stringify(mang);
  //   }
  // if(!sessionStorage.detailXe)
  //   sessionStorage.detailXe = "";
  //
  // if(!sessionStorage.Hang)
  //     sessionStorage.Hang = "";
  // if(!sessionStorage.Dong)
  //     sessionStorage.Dong = "";
  // if(!sessionStorage.search)
  //     sessionStorage.search = "";

  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);

  document.SignIn.reset();
  document.SignUp.reset();
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

function IncreaseNumCar() {
  if (sessionStorage.count)
    sessionStorage.count = Number(sessionStorage.count) + 1;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
}

// function UpdateListCar(ten, sluong) {
//   var temp = JSON.parse(sessionStorage.mangXe);
//   for (var i = 0; i < temp.length; i++)
//     if (temp[i].tenxe == ten)
//       temp[i].num = sluong;
//   sessionStorage.mangXe = JSON.stringify(temp);
// }
//
// function UpdateTotalPrice() {
//   var eachItem = $('input[name="eachTotalPrice"]');
//   var total = 0;
//   for (var i = 0; i < eachItem.length; i++) {
//     total += parseInt(eachItem[i].value);
//   }
//   $('input[name="totalprice"]').val(total);
//   total = PriceToSring(total);
//   $('.all-total-price').text(total);
// }

var NumPerPage = 12;

function CreatePagination(total) {
  var paginate = $('.products-view').find('.pagination');
  var NumPage;
  if (total % NumPerPage == 0)
    NumPage = parseInt(total / NumPerPage);
  else
    NumPage = parseInt(total / NumPerPage) + 1;

  // for (var i = 0; i < NumPerPage && i < total; i++)
  //   AddProduct(arrXe[i].TenXe, arrXe[i].Gia);

  paginate.append('<li class="disabled"><a href="/products?page=1" id="first" class="page-link">&laquo;</a></li>');
  if (total <= NumPerPage)
    paginate.append('<li class="active page-item"><a href="/products" class="page-link" id="page-first">1</a></li>');
  else
  if (total > NumPerPage && total <= NumPerPage * 2) {
    paginate.append('<li class="active page-item"><a href="/products" class="page-link" id="page-first">1</a></li>');
    paginate.append('<li class="page-item"><a href="#" class="page-link" id="page-second">2</a></li>');
  } else {
    paginate.append('<li class="active page-item"><a href="/products?page=1" class="page-link" id="page-first">1</a></li>');
    paginate.append('<li class="page-item"><a href="#" class="page-link" id="page-second">2</a></li>');
    paginate.append('<li class="page-item"><a href="#" class="page-link" id="page-third">3</a></li>');
  }
  paginate.append('  <li><a href="#" class="page-link" id="last">&raquo;</a></li>');

  var first = $('#first');
  first.bind('click', false);

  var page_first = $('#page-first');
  var page_second = $('#page-second');
  var page_third = $('#page-third');
  var last = $('#last');
  if(total <= NumPerPage)
  {
    last.parents().addClass('disabled');
    last.bind('click', false);
    page_first.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n1 = parseInt(page_first.text());
      //contain.find('div').remove();
      // for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
    });
  }
  else
  if(total > NumPerPage && total <= NumPerPage * 2)
  {
    first.on('click', function() {
      var contain = $('.products-view').find('.row');
    //  contain.find('div').remove();
      // for (var i = 0; i < NumPerPage && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
      page_first.parent().addClass('active');
      page_second.parent().removeClass('active');
      $(this).parent().addClass('disabled');
      $(this).bind('click', false);
      last.parents().removeClass('disabled');
      last.unbind('click', false);
    });

    page_first.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n1 = parseInt(page_first.text());
      last.parent().removeClass('disabled');
      last.unbind('click', false);

      first.parent().addClass('disabled');
      first.bind('click', false);
      $(this).parent().addClass('active');
      page_second.parent().removeClass('active');

      //contain.find('div').remove();
      // for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    page_second.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n2 = parseInt(page_second.text());
      first.parent().removeClass('disabled');
      first.unbind('click', false);
      last.parent().addClass('disabled');
      last.bind('click', false);
      $(this).parent().addClass('active');
      page_first.parent().removeClass('active');
      //contain.find('div').remove();
      // for (var i = (n2 - 1) * NumPerPage; i < NumPerPage * n2 && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    last.on('click', function() {
      var contain = $('.products-view').find('.row');
      //contain.find('div').remove();
      // for (var i = (NumPage - 1) * NumPerPage; i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
      page_first.parent().removeClass('active');
      page_second.parent().addClass('active');
      $(this).parent().addClass('disabled');
      $(this).bind('click', false);
      first.parent().removeClass('disabled');
      first.unbind('click', false);
    });
  }
  else
  {
    page_first.attr('href', '/products?page=' +  page_first.text());
    page_second.attr('href', '/products?page=' +  page_second.text())
    page_third.attr('href', '/products?page=' +  page_third.text())

    first.on('click', function() {
      var contain = $('.products-view').find('.row');
      //contain.find('div').remove();
      // for (var i = 0; i < NumPerPage && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
      page_first.text('1');
      page_first.parent().addClass('active');
      page_second.parent().removeClass('active');
      page_third.parent().removeClass('active');
      page_second.text('2');
      page_third.text('3');
      $(this).parent().addClass('disabled');
      $(this).bind('click', false);
      last.parents().removeClass('disabled');
      last.unbind('click', false);
    });

    page_first.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n1 = parseInt(page_first.text());
      last.parent().removeClass('disabled');
      last.unbind('click', false);
      $(this).blur();
      if (n1 == 1) {
        first.parent().addClass('disabled');
        first.bind('click', false);
        $(this).parent().addClass('active');
        page_second.parent().removeClass('active');
        page_third.parent().removeClass('active');
      } else {
        var n2 = parseInt(page_second.text());
        $(this).parent().removeClass('active');
        page_second.parent().addClass('active');
        page_third.parent().removeClass('active');
        page_third.text(n2 + '');
        page_second.text(n1 + '');
        var temp = n1 - 1;
        page_first.text(temp + '');
      }
      //contain.find('div').remove();
      // for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    page_second.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n2 = parseInt(page_second.text());
      first.parent().removeClass('disabled');
      first.unbind('click', false);
      last.parent().removeClass('disabled');
      last.unbind('click', false);
      $(this).parent().addClass('active');
      $(this).blur();
      page_first.parent().removeClass('active');
      page_third.parent().removeClass('active');
      //contain.find('div').remove();
      // for (var i = (n2 - 1) * NumPerPage; i < NumPerPage * n2 && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    page_third.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n3 = parseInt(page_third.text());
      first.parent().removeClass('disabled');
      first.unbind('click', false);
      $(this).blur();
      if (n3 == NumPage) {
        last.parent().addClass('disabled');
        $(this).parent().addClass('active');
        last.bind('click', false);
        page_second.parent().removeClass('active');
        page_first.parent().removeClass('active');
      } else {
        var n2 = parseInt(page_second.text());
        $(this).parent().removeClass('active');
        page_second.parent().addClass('active');
        page_third.parent().removeClass('active');
        page_first.parent().removeClass('active');
        page_first.text(n2 + '');
        page_second.text(n3 + '');
        var temp = n3 + 1;
        page_third.text(temp + '');
      }
      //contain.find('div').remove();
      // for (var i = (n3 - 1) * NumPerPage; i < NumPerPage * n3 && i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    last.on('click', function() {
      var contain = $('.products-view').find('.row');
      //contain.find('div').remove();
      // for (var i = (NumPage - 1) * NumPerPage; i < total; i++)
      //   AddProduct(arrXe[i].ten, arrXe[i].gia);
      page_first.text((NumPage - 2) + '');
      page_first.parent().removeClass('active');
      page_second.parent().removeClass('active');
      page_third.parent().addClass('active');
      page_second.text((NumPage - 1) + '');
      page_third.text(NumPage + '');
      $(this).parent().addClass('disabled');
      $(this).bind('click', false);
      first.parent().removeClass('disabled');
      first.unbind('click', false);
    });
  }
}

function AddProduct(ten, gia) {
  var price = PriceToSring(gia);
  var item = $(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" style="float: left">
  <div class="product-box">
    <div class="product-thumbnail">
      <a href="javascript:;" title="` + ten + `">
        <img src="./image/all/` + ten + `.jpg" alt="` + ten + `">
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
        <a href="javascript:;" title="` + ten + `">` + ten + `</a>
      </h3>
    </div>
    <div class="product-action clearfix ">
      <form class="products-view-grid" action="" method="post" data-id="">
        <div>
          <a class="btn btn-gray hvr-rectangle-out" name="button-Buy-` + ten + `" title="Mua hàng" data-toggle="modal" data-target="#QuickBuy">
            <i class="fa fa-shopping-cart"></i>
            Mua hàng
          </a>

          <a href="detail.html" class="btn btn-gray hvr-rectangle-out" name="button-Detail-` + ten +`" title="Chi tiết" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </a>
        </div>
      </form>
    </div>
  </div>
  </div>`);

  $('.products-view').find('.row').append(item);
  $('a[name="button-Buy-' + ten + '"]').on('click', function() {
    var hinh = $('#QuickBuy').find('div.thumb-1x1').find('img');
    hinh.attr('src', './image/all/' + ten + '.jpg');
    hinh.attr('alt', ten);
    $('#QuickBuy').find('.product-title').text(ten);
    $('#QuickBuy').find('input[name="product-new-price"]').val(gia);
    $('#QuickBuy').find('div.product-new-price').find('span').text(price);

    IncreaseNumCar();
    var temp = JSON.parse(sessionStorage.mangXe);
    for (var i = 0; i < temp.length; i++)
      if (temp[i].tenxe == ten)
        temp[i].num += 1;
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

function LoadProd(isSort) {
  if(sessionStorage.Hang == "" && sessionStorage.Dong == "")
  {
    var temp = AllProd.slice(0);
    if(isSort != 0)
    {
      switch(isSort)
      {
        case 1:
          temp.sort(function(a, b){
            return parseInt(a.gia) > parseInt(b.gia);
          });
          break;
        case 2:
          temp.sort(function(a, b){
            return parseInt(a.gia) < parseInt(b.gia);
          });
          break;
        case 3:
          temp.sort(function(a, b){
            return a.ten > b.ten;
          });
          break;
        case 4:
          temp.sort(function(a, b){
            return a.ten < b.ten;
          });
          break;
      }
    }
    CreatePagination(temp);
  }
  else
  {
    var temp = [];
    if(sessionStorage.Hang != "" && sessionStorage.Dong == "")
    {
      for(var i = 0; i < AllProd.length;i++)
        if(AllProd[i].hang == sessionStorage.Hang)
          temp.push(AllProd[i]);
      $('.breadcrumb').find('li:eq(1)').text("Hãng xe " + sessionStorage.Hang);
      $('.title-head').text('HÃNG XE ' + sessionStorage.Hang.toUpperCase());
    }
    else
    if(sessionStorage.Hang == "" && sessionStorage.Dong != "")
    {
      for(var i = 0; i < AllProd.length;i++)
        if(AllProd[i].dong == sessionStorage.Dong)
          temp.push(AllProd[i]);
      $('.breadcrumb').find('li:eq(1)').text("Dòng xe " + sessionStorage.Dong);
      $('.title-head').text('DÒNG XE ' + sessionStorage.Dong.toUpperCase());
    }

    if(isSort != 0)
    {
      switch(isSort)
      {
        case 1:
          temp.sort(function(a, b){
            return parseInt(a.gia) > parseInt(b.gia);
          });
          break;
        case 2:
          temp.sort(function(a, b){
            return parseInt(a.gia) < parseInt(b.gia);
          });
          break;
        case 3:
          temp.sort(function(a, b){
            return a.ten > b.ten;
          });
          break;
        case 4:
          temp.sort(function(a, b){
            return a.ten < b.ten;
          });
          break;
      }
    }
    CreatePagination(temp);
  }
}

$('.sort-by').on('change', function() {
  var x = $('.sort-by :selected').val();
  var p = $('input[name="pageTemp"]').val();

  if(window.location.search == "")
    $('form.filterForm').attr('action', window.location.pathname + window.location.search + "?page=" + p + "&sortBox=" + x);
  else
  $('form.filterForm').attr('action', window.location.pathname + window.location.search +  "&sortBox=" + x);
  $('form.filterForm').submit();
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

$('#find').bind('keypress', function(e) {
  if(e.keyCode == 13)
  {
    sessionStorage.search = $(this).val();
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
  }
});

$('#findCollapse').bind('keypress', function(e) {
  if(e.keyCode == 13)
  {
    sessionStorage.search = $(this).val();
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
  }
});
