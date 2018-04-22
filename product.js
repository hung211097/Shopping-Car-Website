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
    for (var i = 0; i < AllProd.length; i++) {
      var xe = {
        tenxe: AllProd[i].ten,
        num: 0,
        gia: parseInt(AllProd[i].gia),
        xem: parseInt(AllProd[i].xem),
        ban: parseInt(AllProd[i].ban),
        nlieu: AllProd[i].nlieu,
        mau: AllProd[i].mau,
        hopso: AllProd[i].hopso,
        cua: AllProd[i].cua,
        cho: AllProd[i].cho
      };
      mang.push(xe);
      sessionStorage.mangXe = JSON.stringify(mang);
    }
  if(!sessionStorage.detailXe)
    sessionStorage.detailXe = "";

  if(!sessionStorage.Hang)
      sessionStorage.Hang = "";
  if(!sessionStorage.Dong)
      sessionStorage.Dong = "";

  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
  $('.sort-by').prop('selectedIndex', 0);

  LoadProd(0);
  CreateCompanyList();
  CreateTypeList();

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

var NumPerPage = 12;

function CreatePagination(arrXe) {
  var paginate = $('.products-view').find('.pagination');
  var NumPage;
  if (arrXe.length % 12 == 0)
    NumPage = parseInt(arrXe.length / 12);
  else
    NumPage = parseInt(arrXe.length / 12) + 1;

  for (var i = 0; i < NumPerPage && i < arrXe.length; i++)
    AddProduct(arrXe[i].ten, arrXe[i].gia);

  paginate.append('<li class="disabled"><a href="#" id="first" class="page-link">&laquo;</a></li>');
  if (arrXe.length <= 12)
    paginate.append('<li class="active page-item"><a href="#" class="page-link" id="page-first">1</a></li>');
  else
  if (arrXe.length > 12 && arrXe.length <= 24) {
    paginate.append('<li class="active page-item"><a href="#" class="page-link" id="page-first">1</a></li>');
    paginate.append('<li class="page-item"><a href="#" class="page-link" id="page-second">2</a></li>');
  } else {
    paginate.append('<li class="active page-item"><a href="#" class="page-link" id="page-first">1</a></li>');
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
  if(arrXe.length <= 12)
  {
    last.parents().addClass('disabled');
    last.bind('click', false);
    page_first.on('click', function() {
      var contain = $('.products-view').find('.row');
      var n1 = parseInt(page_first.text());
      contain.find('div').remove();
      for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
    });
  }
  else
  if(arrXe.length > 12 && arrXe.length <= 24)
  {
    first.on('click', function() {
      var contain = $('.products-view').find('.row');
      contain.find('div').remove();
      for (var i = 0; i < NumPerPage && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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

      contain.find('div').remove();
      for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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
      contain.find('div').remove();
      for (var i = (n2 - 1) * NumPerPage; i < NumPerPage * n2 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    last.on('click', function() {
      var contain = $('.products-view').find('.row');
      contain.find('div').remove();
      for (var i = (NumPage - 1) * NumPerPage; i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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
    first.on('click', function() {
      var contain = $('.products-view').find('.row');
      contain.find('div').remove();
      for (var i = 0; i < NumPerPage && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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
      contain.find('div').remove();
      for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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
      contain.find('div').remove();
      for (var i = (n2 - 1) * NumPerPage; i < NumPerPage * n2 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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
      contain.find('div').remove();
      for (var i = (n3 - 1) * NumPerPage; i < NumPerPage * n3 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
    });

    last.on('click', function() {
      var contain = $('.products-view').find('.row');
      contain.find('div').remove();
      for (var i = (NumPage - 1) * NumPerPage; i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
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

var Company = ["Aston Martin", "Audi", "BMW", "Chevrolet", "Ford", "Honda", "Huyndai", "KIA", "Mazda", "Mercedes", "Peugeot", "Toyota", "Volkswagen"];
var Type = ["Cabriolet", "Coupe", "Hatchback", "Limousine", "Sedan", "SUV/Crossover", "Truck", "Van/Minivan", "Wagon"];

function AddCompany(com) {
  var item = $(`<li><a href="product.html" name="` + com +`">` + com +`</a></li>`);
  $('.list-cate').append(item);
  $(document).on('click', 'a[name="' + com + '"]', function() {
    sessionStorage.Hang = com;
    sessionStorage.Dong = "";
  });
}

function CreateCompanyList() {
  for(var i = 0; i < Company.length; i++)
  {
    AddCompany(Company[i]);
  }
}

function AddType(type) {
  var item = $(`<li><a href="product.html" name="` + type +`">` + type +`</a></li>`);
  $('.list-type').append(item);
  $(document).on('click', 'a[name="' + type + '"]', function() {
    sessionStorage.Dong = type;
    sessionStorage.Hang= "";
  });
}

function CreateTypeList() {
  for(var i = 0; i < Type.length; i++)
  {
    AddType(Type[i]);
  }
}

$('#prodHid').on('click', function() {
  sessionStorage.Hang = "";
  sessionStorage.Dong = "";
});

$('#prod').on('click', function() {
  sessionStorage.Hang = "";
  sessionStorage.Dong = "";
});

$('#prodFoot').on('click', function() {
  sessionStorage.Hang = "";
  sessionStorage.Dong = "";
});

$('#allproduct').on('click', function() {
  sessionStorage.Hang = "";
  sessionStorage.Dong = "";
});

$('#breadPro').on('click', function() {
  sessionStorage.Hang = "";
  sessionStorage.Dong = "";
});

function SetCompany(str) {
  sessionStorage.Hang = str;
  sessionStorage.Dong = "";
}

function SetType(str) {
  sessionStorage.Dong = str;
  sessionStorage.Hang = "";
}

$('.sort-by').on('change', function() {
  var x = $(this).prop('selectedIndex');
  $('.products-view').find('.row').find('div').remove();
  $('.pagination').find('li').remove();
  LoadProd(x);
});


var mang = [];
var AllProd = [{
    ten: 'Aston Martin DB11',
    gia: '4829000000',
    hang: 'Aston Martin',
    dong: 'Cabriolet',
    ban: '4',
    xem: '1203',
    nlieu: 'Xăng',
    hopso: 'Số tự động',
    mau: 'Vàng nâu',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1116000000',
    hang: 'BMW',
    dong: 'Cabriolet',
    ban: '10',
    xem: '2903',
    nlieu: 'Xăng',
    hopso: 'Số tự động',
    mau: 'Trắng',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3200000000',
    hang: 'Chevrolet',
    dong: 'Coupe',
    ban: '20',
    xem: '3203',
    nlieu: 'Xăng',
    hopso: 'Sàn 6 cấp',
    mau: 'Đen',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1600000000',
    hang: 'Volkswagen',
    dong: 'Coupe',
    ban: '5',
    xem: '1093',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xanh dương',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400000000',
    hang: 'Huyndai',
    dong: 'Sedan',
    ban: '52',
    xem: '11093',
    nlieu: 'Xăng',
    hopso: 'Sàn 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649000000',
    hang: 'Mazda',
    dong: 'Sedan',
    ban: '8',
    xem: '10293',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639000000',
    hang: 'KIA',
    dong: 'Sedan',
    ban: '24',
    xem: '7093',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648000000',
    hang: 'Ford',
    dong: 'SUV/Crossover',
    ban: '5',
    xem: '2893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover',
    ban: '25',
    xem: '3216',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700000000',
    hang: 'Audi',
    dong: 'Coupe',
    ban: '15',
    xem: '17483',
    nlieu: 'Xăng',
    hopso: 'Tự động 7 cấp',
    mau: 'Đỏ',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'Hyundai Genesis Coupe 2.0T',
    gia: '630000000',
    hang: 'Huyndai',
    dong: 'Coupe',
    ban: '9',
    xem: '8093',
    nlieu: 'Xăng',
    hopso: 'Sàn 6 cấp',
    mau: 'Vàng',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'BMW 6-series Gran Coupe',
    gia: '1867000000',
    hang: 'BMW',
    dong: 'Coupe',
    ban: '40',
    xem: '993',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'BMW 4-series Gran Coupe',
    gia: '1000000000',
    hang: 'BMW',
    dong: 'Coupe',
    ban: '65',
    xem: '7693',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Mercedes C200 Cabriolet',
    gia: '2800000000',
    hang: 'Mercedes',
    dong: 'Cabriolet',
    ban: '13',
    xem: '2193',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xanh dương',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'BMW 420i Cabriolet',
    gia: '2700000000',
    hang: 'BMW',
    dong: 'Cabriolet',
    ban: '5',
    xem: '1093',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '2',
    cho: '5'
  },
  {
    ten: 'Audi A3 Cabriolet',
    gia: '1900000000',
    hang: 'Audi',
    dong: 'Cabriolet',
    ban: '72',
    xem: '101293',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'Mercedes Benz CLK 320 Cabriolet',
    gia: '650000000',
    hang: 'Mercedes',
    dong: 'Cabriolet',
    ban: '21',
    xem: '9893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'Volkswagen Beetle R-Line',
    gia: '1500000000',
    hang: 'Volkswagen',
    dong: 'Coupe',
    ban: '26',
    xem: '17826',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'KIA-Sorento-DATH-2WD',
    gia: '949000000',
    hang: 'KIA',
    dong: 'SUV/Crossover',
    ban: '5',
    xem: '1093',
    nlieu: 'Dầu 2.2L',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Mazda-CX-5-2-5L-AWD',
    gia: '999000000',
    hang: 'Mazda',
    dong: 'SUV/Crossover',
    ban: '59',
    xem: '14193',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xanh dương',
    cua: '5',
    cho: '5'
  },
  {
    ten: 'Honda-CR-V-E',
    gia: '958000000',
    hang: 'Honda',
    dong: 'SUV/Crossover',
    ban: '51',
    xem: '26093',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Peugeot-3008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover',
    ban: '31',
    xem: '34093',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'KIA Optima 2.4 GT Line',
    gia: '915000000',
    hang: 'KIA',
    dong: 'Sedan',
    ban: '35',
    xem: '61793',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Toyota Corolla Altis 1.8G CVT',
    gia: '731000000',
    hang: 'Toyota',
    dong: 'Sedan',
    ban: '41',
    xem: '24093',
    nlieu: 'Xăng',
    hopso: 'Tự động vô cấp',
    mau: 'Nâu',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Toyota Vios 1.5E MT',
    gia: '500000000',
    hang: 'Toyota',
    dong: 'Sedan',
    ban: '18',
    xem: '23893',
    nlieu: 'Xăng',
    hopso: 'Sàn 5 cấp',
    mau: 'Xám',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'Aston Martin One 77',
    gia: '47000000000',
    hang: 'Aston Martin',
    dong: 'Cabriolet',
    ban: '4',
    xem: '249893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'Audi A4',
    gia: '1400000000',
    hang: 'Audi',
    dong: 'Sedan',
    ban: '22',
    xem: '39893',
    nlieu: 'Dầu 1.8L',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '4'
  },
  {
    ten: 'Chevrolet Captiva',
    gia: '3500000000',
    hang: 'Chevrolet',
    dong: 'SUV/Crossover',
    ban: '34',
    xem: '47893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Aston Martin Rapide S',
    gia: '4700000000',
    hang: 'Aston Martin',
    dong: 'Coupe',
    ban: '10',
    xem: '28893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '4',
    cho: '4'
  },
  {
    ten: 'Aston Martin Vanquish S Ultimate Edition',
    gia: '38000000000',
    hang: 'Aston Martin',
    dong: 'Coupe',
    ban: '7',
    xem: '29923',
    nlieu: 'Xăngg',
    hopso: 'Tự động  cấp',
    mau: 'Đen',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'Aston Martin Vulcan',
    gia: '52000000000',
    hang: 'Aston Martin',
    dong: 'Coupe',
    ban: '3',
    xem: '329893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'Audi RS6 Avant Performance',
    gia: '3510000000',
    hang: 'Audi',
    dong: 'Wagon',
    ban: '12',
    xem: '35893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xanh dương',
    cua: '5',
    cho: '5'
  },
  {
    ten: 'Audi S6 Avant',
    gia: '1100000000',
    hang: 'Audi',
    dong: 'Wagon',
    ban: '27',
    xem: '8893',
    nlieu: 'Dầu 1.8L',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '5',
    cho: '5'
  },
  {
    ten: 'BMW 700 Series',
    gia: '1400000000',
    hang: 'BMW',
    dong: 'Coupe',
    ban: '25',
    xem: '23903',
    nlieu: 'Xăng',
    hopso: 'Tự động 7 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Chevrolet Spark 1.2 LS 2018',
    gia: '400000000',
    hang: 'Chevrolet',
    dong: 'Hatchback',
    ban: '64',
    xem: '761893',
    nlieu: 'Xăng',
    hopso: 'Sàn 5 cấp',
    mau: 'Xanh chuối',
    cua: '5',
    cho: '5'
  },
  {
    ten: 'Chevrolet Trailblazer 2018',
    gia: '1000000000',
    hang: 'Chevrolet',
    dong: 'SUV/Crossover',
    ban: '32',
    xem: '64893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Chevrolet Traverse',
    gia: '2900000000',
    hang: 'Chevrolet',
    dong: 'SUV/Crossover',
    ban: '51',
    xem: '98893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Ford Focus 1.5L Ecoboost Sport 2018',
    gia: '760000000',
    hang: 'Ford',
    dong: 'Hatchback',
    ban: '22',
    xem: '39893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xanh dương',
    cua: '5',
    cho: '5'
  },
  {
    ten: 'Ford Fiesta 2018',
    gia: '1300000000',
    hang: 'Ford',
    dong: 'Hatchback',
    ban: '14',
    xem: '12093',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xanh dương',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Ford Ranger WILDTRAK 3.2 4X4 AT',
    gia: '909000000',
    hang: 'Ford',
    dong: 'Truck',
    ban: '12',
    xem: '49823',
    nlieu: 'Dầu 3.2L',
    hopso: 'Tự động 6 cấp',
    mau: 'Cam nâu',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Ford Ranger XLS 2.2 4x2 MT',
    gia: '700000000',
    hang: 'Ford',
    dong: 'Truck',
    ban: '56',
    xem: '75893',
    nlieu: 'Dầu 2.2L',
    hopso: 'Sàn 6 cấp',
    mau: 'Xám',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Honda Civic LX',
    gia: '190000000',
    hang: 'Honda',
    dong: 'Coupe',
    ban: '87',
    xem: '172893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Honda Jazz RS 2018',
    gia: '650000000',
    hang: 'Honda',
    dong: 'Hatchback',
    ban: '46',
    xem: '65293',
    nlieu: 'Xăng',
    hopso: 'Tự động vô cấp',
    mau: 'Trắng',
    cua: '5',
    cho: '5'
  },
  {
    ten: 'Honda Odyssey 2018',
    gia: '1990000000',
    hang: 'Honda',
    dong: 'Van/Minivan',
    ban: '44',
    xem: '87893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '4',
    cho: '7'
  },
  {
    ten: 'Honda Ridgeline 2017',
    gia: '700000000',
    hang: 'Honda',
    dong: 'Truck',
    ban: '19',
    xem: '10893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Hyundai Elantra Hatchback',
    gia: '750000000',
    hang: 'Huyndai',
    dong: 'Hatchback',
    ban: '53',
    xem: '98893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Hyundai Entourage Limited',
    gia: '750000000',
    hang: 'Huyndai',
    dong: 'Van/Minivan',
    ban: '35',
    xem: '57893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Vàng nhạt',
    cua: '4',
    cho: '7'
  },
  {
    ten: 'Hyundai Veloster Hatchback',
    gia: '700000000',
    hang: 'Huyndai',
    dong: 'Hatchback',
    ban: '76',
    xem: '97893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Cam',
    cua: '2',
    cho: '4'
  },
  {
    ten: 'KIA Cerato 1.6MT',
    gia: '800000000',
    hang: 'KIA',
    dong: 'Sedan',
    ban: '45',
    xem: '67323',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '4',
    cho: '4'
  },
  {
    ten: 'KIA Morning 2016',
    gia: '550000000',
    hang: 'KIA',
    dong: 'Hatchback',
    ban: '24',
    xem: '71893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'KIA Sedona EX',
    gia: '700000000',
    hang: 'KIA',
    dong: 'Van/Minivan',
    ban: '41',
    xem: '61603',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Nâu',
    cua: '4',
    cho: '7'
  },
  {
    ten: 'Mazda 3 1.5 HATCHBACK FACELIFT 2018',
    gia: '700000000',
    hang: 'Mazda',
    dong: 'Hatchback',
    ban: '37',
    xem: '32403',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '5',
    cho: '7'
  },
  {
    ten: 'Mazda 5',
    gia: '620000000',
    hang: 'Mazda',
    dong: 'Van/Minivan',
    ban: '31',
    xem: '23623',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '4',
    cho: '7'
  },
  {
    ten: 'Mazda BT-50 2.2 AT 2WD 2017',
    gia: '700000000',
    hang: 'Mazda',
    dong: 'Truck',
    ban: '36',
    xem: '42890',
    nlieu: 'Dầu 2.2L',
    hopso: 'Tự động 6 cấp',
    mau: 'Nâu',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Mazda Miata Convertible',
    gia: '700000000',
    hang: 'Mazda',
    dong: 'Cabriolet',
    ban: '20',
    xem: '35403',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'Mercedes-AMG C63 S AMG',
    gia: '1500000000',
    hang: 'Mercedes',
    dong: 'Wagon',
    ban: '73',
    xem: '219809',
    nlieu: 'Xăng',
    hopso: 'Tự động 7 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Mercedes-AMG CLA45',
    gia: '2800000000',
    hang: 'Mercedes',
    dong: 'Wagon',
    ban: '26',
    xem: '68473',
    nlieu: 'Xăng',
    hopso: 'Tự động 7 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Mercedes-AMG E63 S',
    gia: '2600000000',
    hang: 'Mercedes',
    dong: 'Wagon',
    ban: '40',
    xem: '392073',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đen',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Peugeot 508',
    gia: '1300000000',
    hang: 'Peugeot',
    dong: 'Sedan',
    ban: '50',
    xem: '490893',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Xám',
    cua: '4',
    cho: '4'
  },
  {
    ten: 'Peugeot 208',
    gia: '850000000',
    hang: 'Peugeot',
    dong: 'Hatchback',
    ban: '19',
    xem: '2609',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Cam',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Peugeot RCZ',
    gia: '1900000000',
    hang: 'Peugeot',
    dong: 'Cabriolet',
    ban: '25',
    xem: '31809',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '2',
    cho: '2'
  },
  {
    ten: 'Toyota Camry',
    gia: '1300000000',
    hang: 'Toyota',
    dong: 'Sedan',
    ban: '100',
    xem: '987209',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Toyota Corolla Verso Minivens 2002',
    gia: '2400000000',
    hang: 'Toyota',
    dong: 'Van/Minivan',
    ban: '36',
    xem: '74109',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Trắng',
    cua: '4',
    cho: '7'
  },
  {
    ten: 'Toyota Hilux 2018',
    gia: '800000000',
    hang: 'Toyota',
    dong: 'Truck',
    ban: '43',
    xem: '62109',
    nlieu: 'Dầu 4L',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '4',
    cho: '5'
  },
  {
    ten: 'Volkswagen Passat 2018',
    gia: '1600000000',
    hang: 'Volkswagen',
    dong: 'Sedan',
    ban: '51',
    xem: '143709',
    nlieu: 'Xăng',
    hopso: 'Tự động 7 cấp',
    mau: 'Đen',
    cua: '4',
    cho: '4'
  },
  {
    ten: 'Volkswagen Polo Sedan',
    gia: '1500000000',
    hang: 'Volkswagen',
    dong: 'Sedan',
    ban: '20',
    xem: '31809',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Vàng nhạt',
    cua: '4',
    cho: '4'
  },
  {
    ten: 'Volkswagen Tiguan Allspace',
    gia: '1400000000',
    hang: 'Volkswagen',
    dong: 'SUV/Crossover',
    ban: '29',
    xem: '43526',
    nlieu: 'Xăng',
    hopso: 'Tự động 6 cấp',
    mau: 'Đỏ',
    cua: '4',
    cho: '5'
  }
]
