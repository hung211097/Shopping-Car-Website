$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }
  // sessionStorage.removeItem('count');
  if (!sessionStorage.count)
    sessionStorage.count = 0;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);

  // $('select[name="SearchWithPrice"]').prop('selectedIndex', parseInt(sessionStorage.SearchPrice));
  // $('select[name="SearchWithBrand"]').prop('selectedIndex', parseInt(sessionStorage.SearchBrand));
  // $('select[name="SearchWithType"]').prop('selectedIndex', parseInt(sessionStorage.SearchType));

  // LoadProd();
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

var NumPerPage = 16;

function CreatePagination(arrXe) {
  var paginate = $('.products-view-grid').find('.pagination');
  var NumPage;
  if (arrXe.length % NumPerPage == 0)
    NumPage = parseInt(arrXe.length / NumPerPage);
  else
    NumPage = parseInt(arrXe.length / NumPerPage) + 1;

  for (var i = 0; i < NumPerPage && i < arrXe.length; i++)
    AddProduct(arrXe[i].ten, arrXe[i].gia);

  paginate.append('<li class="disabled"><a href="#" id="first" class="page-link">&laquo;</a></li>');
  if (arrXe.length <= NumPerPage)
    paginate.append('<li class="active page-item"><a href="#" class="page-link" id="page-first">1</a></li>');
  else
  if (arrXe.length > NumPerPage && arrXe.length <= NumPerPage * 2) {
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
  if (arrXe.length <= NumPerPage) {
    last.parents().addClass('disabled');
    last.bind('click', false);
    page_first.on('click', function() {
      var contain = $('.products-view-grid').find('.row');
      var n1 = parseInt(page_first.text());
      contain.find('div').remove();
      for (var i = (n1 - 1) * NumPerPage; i < NumPerPage * n1 && i < arrXe.length; i++)
        AddProduct(arrXe[i].ten, arrXe[i].gia);
    });
  } else
  if (arrXe.length > NumPerPage && arrXe.length <= NumPerPage * 2) {
    first.on('click', function() {
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
  } else {
    first.on('click', function() {
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
      var contain = $('.products-view-grid').find('.row');
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
  var item = $(`<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
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

          <a href="detail.html" class="btn btn-gray hvr-rectangle-out" name="button-Detail-` + ten + `" title="Chi tiết" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </a>
        </div>
      </form>
    </div>
  </div>
  </div>`);

  $('.products-view-grid').find('.row').append(item);
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

  $('a[name="button-Detail-' + ten + '"]').on('click', function() {
    sessionStorage.detailXe = ten;
    var temp = JSON.parse(sessionStorage.mangXe);
    for (var i = 0; i < temp.length; i++)
      if (temp[i].tenxe == ten)
        temp[i].xem += 1;
    sessionStorage.mangXe = JSON.stringify(temp);
  });
}

function LoadProd() {
  if (sessionStorage.search == "") {
    if (sessionStorage.SearchPrice == '0' && sessionStorage.SearchBrand == '0' && sessionStorage.SearchType == '0') {
      CreatePagination(AllProd);
      sessionStorage.SearchResult = AllProd.length;
    } else {
      var temp = [];
      var temp2 = [];
      var temp3 = [];
      var res = [];
      var price = parseInt(sessionStorage.SearchPrice);
      var brand = parseInt(sessionStorage.SearchBrand);
      var type = parseInt(sessionStorage.SearchType);

      if (price != 0) {
        switch (price) {
          case 1:
            for (var i = 0; i < AllProd.length; i++)
              if (parseInt(AllProd[i].gia) < 500000000)
                temp.push(AllProd[i]);
            break;
          case 2:
            for (var i = 0; i < AllProd.length; i++)
              if (parseInt(AllProd[i].gia) >= 500000000 && parseInt(AllProd[i].gia) <= 1000000000)
                temp.push(AllProd[i]);
            break;
          case 3:
            for (var i = 0; i < AllProd.length; i++)
              if (parseInt(AllProd[i].gia) >= 1000000000 && parseInt(AllProd[i].gia) <= 2000000000)
                temp.push(AllProd[i]);
            break;
          case 4:
            for (var i = 0; i < AllProd.length; i++)
              if (parseInt(AllProd[i].gia) > 2000000000)
                temp.push(AllProd[i]);
            break;
        }
        if (brand != 0) {
          var tmp = $('select[name="SearchWithBrand"] :selected').val();
          for (var i = 0; i < temp.length; i++)
            if (temp[i].hang != tmp) {
              temp.splice(i, 1);
              i--;
            }
        }
        if (type != 0) {
          var tmp = $('select[name="SearchWithType"] :selected').val();
          for (var i = 0; i < temp.length; i++)
            if (temp[i].dong != tmp) {
              temp.splice(i, 1);
              i--;
            }
        }
        res = temp;
        sessionStorage.SearchResult = res.length;
      } else
      if (brand != 0) {
        var tmp = $('select[name="SearchWithBrand"] :selected').val();
        for (var i = 0; i < AllProd.length; i++)
          if (AllProd[i].hang == tmp)
            temp2.push(AllProd[i]);

        if (price != 0) {
          switch (price) {
            case 1:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) >= 500000000) {
                  temp2.splice(i, 1);
                  i--;
                }
              break;
            case 2:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) < 500000000 || parseInt(temp2[i].gia) > 1000000000) {
                  temp2.splice(i, 1);
                  i--;
                }
              break;
            case 3:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) < 1000000000 || parseInt(temp2[i].gia) > 2000000000) {
                  i--;
                  temp2.splice(i, 1);
                }
              break;
            case 4:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) <= 2000000000) {
                  temp2.splice(i, 1);
                  i--;
                }
              break;
          }
        }

        if (type != 0) {
          var tmp2 = $('select[name="SearchWithType"] :selected').val();
          for (var i = 0; i < temp2.length; i++)
            if (temp2[i].dong != tmp2) {
              temp2.splice(i, 1);
              i--;
            }
        }
        res = temp2;
        sessionStorage.SearchResult = res.length;
      } else
      if (type != 0) {
        var tmp = $('select[name="SearchWithType"] :selected').val();
        for (var i = 0; i < AllProd.length; i++)
          if (AllProd[i].dong == tmp)
            temp3.push(AllProd[i]);


        if (price != 0) {
          switch (price) {
            case 1:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) >= 500000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
            case 2:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) < 500000000 || parseInt(temp3[i].gia) > 1000000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
            case 3:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) < 1000000000 || parseInt(temp3[i].gia) > 2000000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
            case 4:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) <= 2000000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
          }
        }

        if (brand != 0) {
          var tmp2 = $('select[name="SearchWithBrand"] :selected').val();
          for (var i = 0; i < temp3.length; i++)
            if (temp3[i].hang != tmp2) {
              temp3.splice(i, 1);
              i--;
            }
        }
        res = temp3;
        sessionStorage.SearchResult = res.length;
      }

      CreatePagination(res);
    }
  } else {
    var array = [];
    var keyword = sessionStorage.search;

    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for (var i = 0; i < AllProd.length; i++)
      if (AllProd[i].ten.search(key) > -1)
        array.push(AllProd[i]);
    sessionStorage.SearchResult = array.length;
    if (sessionStorage.SearchPrice == '0' && sessionStorage.SearchBrand == '0' && sessionStorage.SearchType == '0') {
      CreatePagination(array);
    } else {
      var temp = [];
      var temp2 = [];
      var temp3 = [];
      var res = [];
      var price = parseInt(sessionStorage.SearchPrice);
      var brand = parseInt(sessionStorage.SearchBrand);
      var type = parseInt(sessionStorage.SearchType);

      if (price != 0) {
        switch (price) {
          case 1:
            for (var i = 0; i < array.length; i++)
              if (parseInt(array[i].gia) < 500000000)
                temp.push(array[i]);
            break;
          case 2:
            for (var i = 0; i < array.length; i++)
              if (parseInt(array[i].gia) >= 500000000 && parseInt(array[i].gia) <= 1000000000)
                temp.push(array[i]);
            break;
          case 3:
            for (var i = 0; i < array.length; i++)
              if (parseInt(array[i].gia) >= 1000000000 && parseInt(array[i].gia) <= 2000000000)
                temp.push(array[i]);
            break;
          case 4:
            for (var i = 0; i < array.length; i++)
              if (parseInt(array[i].gia) > 2000000000)
                temp.push(array[i]);
            break;
        }
        if (brand != 0) {
          var tmp = $('select[name="SearchWithBrand"] :selected').val();
          for (var i = 0; i < temp.length; i++)
            if (temp[i].hang != tmp) {
              temp.splice(i, 1);
              i--;
            }
        }
        if (type != 0) {
          var tmp = $('select[name="SearchWithType"] :selected').val();
          for (var i = 0; i < temp.length; i++)
            if (temp[i].dong != tmp) {
              temp.splice(i, 1);
              i--;
            }
        }
        res = temp;
        sessionStorage.SearchResult = res.length;
      } else
      if (brand != 0) {
        var tmp = $('select[name="SearchWithBrand"] :selected').val();
        for (var i = 0; i < array.length; i++)
          if (array[i].hang == tmp)
            temp2.push(array[i]);

        if (price != 0) {
          switch (price) {
            case 1:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) >= 500000000) {
                  temp2.splice(i, 1);
                  i--;
                }
              break;
            case 2:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) < 500000000 || parseInt(temp2[i].gia) > 1000000000) {
                  temp2.splice(i, 1);
                  i--;
                }
              break;
            case 3:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) < 1000000000 || parseInt(temp2[i].gia) > 2000000000) {
                  i--;
                  temp2.splice(i, 1);
                }
              break;
            case 4:
              for (var i = 0; i < temp2.length; i++)
                if (parseInt(temp2[i].gia) <= 2000000000) {
                  temp2.splice(i, 1);
                  i--;
                }
              break;
          }
        }

        if (type != 0) {
          var tmp2 = $('select[name="SearchWithType"] :selected').val();
          for (var i = 0; i < temp2.length; i++)
            if (temp2[i].dong != tmp2) {
              temp2.splice(i, 1);
              i--;
            }
        }
        res = temp2;
        sessionStorage.SearchResult = res.length;
      } else
      if (type != 0) {
        var tmp = $('select[name="SearchWithType"] :selected').val();
        for (var i = 0; i < array.length; i++)
          if (array[i].dong == tmp)
            temp3.push(array[i]);


        if (price != 0) {
          switch (price) {
            case 1:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) >= 500000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
            case 2:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) < 500000000 || parseInt(temp3[i].gia) > 1000000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
            case 3:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) < 1000000000 || parseInt(temp3[i].gia) > 2000000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
            case 4:
              for (var i = 0; i < temp3.length; i++)
                if (parseInt(temp3[i].gia) <= 2000000000) {
                  temp3.splice(i, 1);
                  i--;
                }
              break;
          }
        }

        if (brand != 0) {
          var tmp2 = $('select[name="SearchWithBrand"] :selected').val();
          for (var i = 0; i < temp3.length; i++)
            if (temp3[i].hang != tmp2) {
              temp3.splice(i, 1);
              i--;
            }
        }
        res = temp3;
        sessionStorage.SearchResult = res.length;
      }

      CreatePagination(res);
    }
  }
  $('#keyword').text(sessionStorage.search);
  if (parseInt(sessionStorage.SearchResult) > 0)
    $('#resultFind').text('Có ' + sessionStorage.SearchResult + ' kết quả tìm kiếm phù hợp');
  else if (parseInt(sessionStorage.SearchResult) == 0) {
    $('#resultFind').text('Không tìm thấy bất kỳ kết quả nào với yêu cầu trên.');
    $('.products-view-grid').css('display', 'none');
  }
}

function SetCompany(str) {
  sessionStorage.Hang = str;
  sessionStorage.Dong = "";
}

function SetType(str) {
  sessionStorage.Dong = str;
  sessionStorage.Hang = "";
}

$('#btn-Search').on('click', function() {
  sessionStorage.search = $('input#find').val();
  sessionStorage.SearchPrice = 0;
  sessionStorage.SearchBrand = 0;
  sessionStorage.SearchType = 0;
  var keyword = sessionStorage.search;
  if (keyword == "")
    sessionStorage.SearchResult = AllProd.length;
  else {
    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for (var i = 0; i < AllProd.length; i++)
      if (AllProd[i].ten.search(key) > -1)
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
  if (keyword == "")
    sessionStorage.SearchResult = AllProd.length;
  else {
    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for (var i = 0; i < AllProd.length; i++)
      if (AllProd[i].ten.search(key) > -1)
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
  if (keyword == "")
    sessionStorage.SearchResult = AllProd.length;
  else {
    var dem = 0;
    var key = new RegExp(keyword, 'i');
    for (var i = 0; i < AllProd.length; i++)
      if (AllProd[i].ten.search(key) > -1)
        dem++;
    sessionStorage.SearchResult = dem;
  }
});

$('input[name="search"]').bind('keypress', function(e) {
  if (e.keyCode == 13) {
    $('form[name="SearchForm"]').submit();
  }
});

$('input[name="searchCollapse"]').bind('keypress', function(e) {
  if (e.keyCode == 13) {
    $('form[name="SearchForm"]').submit();
  }
});

$('#query').bind('keypress', function(e) {
  if (e.keyCode == 13) {
    $('form[name="Query"]').submit();
  }
});

$('a[name="button-Search"]').on('click', function() {
  sessionStorage.search = $('#query').val();
});

$('select[name="SearchWithPrice"]').on('change', function() {
  sessionStorage.SearchPrice = $(this).prop('selectedIndex');
});

$('select[name="SearchWithBrand"]').on('change', function() {
  sessionStorage.SearchBrand = $(this).prop('selectedIndex');
});

$('select[name="SearchWithType"]').on('change', function() {
  sessionStorage.SearchType = $(this).prop('selectedIndex');
});
