$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }
  // sessionStorage.removeItem('count');
  if (!sessionStorage.count)
    sessionStorage.count = 0;
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);

  var owl = $('#BSeen');
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

  // sessionStorage.removeItem('mangXe');
  if (!sessionStorage.mangXe)
    for (var i = 0; i < AllProd.length; i++) {
      var xe = {
        tenxe: AllProd[i].ten,
        num: 0,
        gia: parseInt(AllProd[i].gia)
      };
      mang.push(xe);
      sessionStorage.mangXe = JSON.stringify(mang);
    }

  document.SignIn.reset();
  document.SignUp.reset();
});

var mang = [];

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

var BSeenArr = [{
    ten: 'Aston Martin DB11',
    gia: '4829000000',
    hang: 'Aston Martin',
    dong: 'Cabriolet'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1116000000',
    hang: 'BMW',
    dong: 'Cabriolet'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3200000000',
    hang: 'Chevrolet',
    dong: 'Coupe'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1600000000',
    hang: 'Volkswagen',
    dong: 'Coupe'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400000000',
    hang: 'Huyndai',
    dong: 'Sedan'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649000000',
    hang: 'Mazda',
    dong: 'Sedan'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639000000',
    hang: 'KIA',
    dong: 'Sedan'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648000000',
    hang: 'Ford',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700000000',
    hang: 'Audi',
    dong: 'Coupe'
  }
]

var BSellArr = [{
    ten: 'Aston Martin DB11',
    gia: '4829000000',
    hang: 'Aston Martin',
    dong: 'Cabriolet'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1116000000',
    hang: 'BMW',
    dong: 'Cabriolet'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3200000000',
    hang: 'Chevrolet',
    dong: 'Coupe'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1600000000',
    hang: 'Volkswagen',
    dong: 'Coupe'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400000000',
    hang: 'Huyndai',
    dong: 'Sedan'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649000000',
    hang: 'Mazda',
    dong: 'Sedan'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639000000',
    hang: 'KIA',
    dong: 'Sedan'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648000000',
    hang: 'Ford',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700000000',
    hang: 'Audi',
    dong: 'Coupe'
  }
]

var NewProdArr = [{
    ten: 'Aston Martin DB11',
    gia: '4829000000',
    hang: 'Aston Martin',
    dong: 'Cabriolet'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1116000000',
    hang: 'BMW',
    dong: 'Cabriolet'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3200000000',
    hang: 'Chevrolet',
    dong: 'Coupe'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1600000000',
    hang: 'Volkswagen',
    dong: 'Coupe'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400000000',
    hang: 'Huyndai',
    dong: 'Sedan'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649000000',
    hang: 'Mazda',
    dong: 'Sedan'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639000000',
    hang: 'KIA',
    dong: 'Sedan'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648000000',
    hang: 'Ford',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700000000',
    hang: 'Audi',
    dong: 'Coupe'
  }
]

var AllProd = [{
    ten: 'Aston Martin DB11',
    gia: '4829000000',
    hang: 'Aston Martin',
    dong: 'Cabriolet'
  },
  {
    ten: 'BMW 4 Series Convertible',
    gia: '1116000000',
    hang: 'BMW',
    dong: 'Cabriolet'
  },
  {
    ten: 'Chevrolet Camaro LS 2017',
    gia: '3200000000',
    hang: 'Chevrolet',
    dong: 'Coupe'
  },
  {
    ten: 'Volkswagen Scirocco R 2017',
    gia: '1600000000',
    hang: 'Volkswagen',
    dong: 'Coupe'
  },
  {
    ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
    gia: '400000000',
    hang: 'Huyndai',
    dong: 'Sedan'
  },
  {
    ten: 'Mazda 3 1.5 AT Sedan 2018',
    gia: '649000000',
    hang: 'Mazda',
    dong: 'Sedan'
  },
  {
    ten: 'KIA Cerato 2.0 AT 2018',
    gia: '639000000',
    hang: 'KIA',
    dong: 'Sedan'
  },
  {
    ten: 'Ford EcoSport Titanium 1.5L AT 2018',
    gia: '648000000',
    hang: 'Ford',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Peugeot-5008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Audi TT 2.0 2007',
    gia: '700000000',
    hang: 'Audi',
    dong: 'Coupe'
  },
  // //////////////////////////
  {
    ten: 'Hyundai Genesis Coupe 2.0T',
    gia: '630000000',
    hang: 'Huyndai',
    dong: 'Coupe'
  },
  {
    ten: 'BMW 6-series Gran Coupe',
    gia: '1867000000',
    hang: 'BMW',
    dong: 'Coupe'
  },
  {
    ten: 'BMW 4-series Gran Coupe',
    gia: '1000000000',
    hang: 'BMW',
    dong: 'Coupe'
  },
  {
    ten: 'Mercedes C200 Cabriolet',
    gia: '2800000000',
    hang: 'Mercedes',
    dong: 'Cabriolet'
  },
  {
    ten: 'BMW 420i Cabriolet',
    gia: '2700000000',
    hang: 'BMW',
    dong: 'Cabriolet'
  },
  {
    ten: 'Audi A3 Cabriolet',
    gia: '1900000000',
    hang: 'Audi',
    dong: 'Cabriolet'
  },
  {
    ten: 'Mercedes Benz CLK 320 Cabriolet',
    gia: '650000000',
    hang: 'Mercedes',
    dong: 'Cabriolet'
  },
  {
    ten: 'Volkswagen Beetle R-Line',
    gia: '1500000000',
    hang: 'Volkswagen',
    dong: 'Coupe'
  },
  {
    ten: 'KIA-Sorento-DATH-2WD',
    gia: '949000000',
    hang: 'KIA',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Mazda-CX-5-2-5L-AWD',
    gia: '999000000',
    hang: 'Mazda',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Honda-CR-V-E',
    gia: '958000000',
    hang: 'Honda',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'Peugeot-3008-1-6L-Turbo',
    gia: '1399000000',
    hang: 'Peugeot',
    dong: 'SUV/Crossover'
  },
  {
    ten: 'KIA Optima 2.4 GT Line',
    gia: '915000000',
    hang: 'KIA',
    dong: 'Sedan'
  },
  {
    ten: 'Toyota Corolla Altis 1.8G CVT',
    gia: '731000000',
    hang: 'Toyota',
    dong: 'Sedan'
  },
  {
    ten: 'Toyota Vios 1.5E MT',
    gia: '500000000',
    hang: 'Toyota',
    dong: 'Sedan'
  },
  //
  {
      ten: 'Aston Martin DB11',
      gia: '4829000000',
      hang: 'Aston Martin',
      dong: 'Cabriolet'
    },
    {
      ten: 'BMW 4 Series Convertible',
      gia: '1116000000',
      hang: 'BMW',
      dong: 'Cabriolet'
    },
    {
      ten: 'Chevrolet Camaro LS 2017',
      gia: '3200000000',
      hang: 'Chevrolet',
      dong: 'Coupe'
    },
    {
      ten: 'Volkswagen Scirocco R 2017',
      gia: '1600000000',
      hang: 'Volkswagen',
      dong: 'Coupe'
    },
    {
      ten: 'Hyundai Grand i10 Sedan 1.2 MT 2018',
      gia: '400000000',
      hang: 'Huyndai',
      dong: 'Sedan'
    },
    {
      ten: 'Mazda 3 1.5 AT Sedan 2018',
      gia: '649000000',
      hang: 'Mazda',
      dong: 'Sedan'
    },
    {
      ten: 'KIA Cerato 2.0 AT 2018',
      gia: '639000000',
      hang: 'KIA',
      dong: 'Sedan'
    },
    {
      ten: 'Ford EcoSport Titanium 1.5L AT 2018',
      gia: '648000000',
      hang: 'Ford',
      dong: 'SUV/Crossover'
    },
    {
      ten: 'Peugeot-5008-1-6L-Turbo',
      gia: '1399000000',
      hang: 'Peugeot',
      dong: 'SUV/Crossover'
    },
    {
      ten: 'Audi TT 2.0 2007',
      gia: '700000000',
      hang: 'Audi',
      dong: 'Coupe'
    },
    // //////////////////////////
    {
      ten: 'Hyundai Genesis Coupe 2.0T',
      gia: '630000000',
      hang: 'Huyndai',
      dong: 'Coupe'
    },
    {
      ten: 'BMW 6-series Gran Coupe',
      gia: '1867000000',
      hang: 'BMW',
      dong: 'Coupe'
    },
    {
      ten: 'BMW 4-series Gran Coupe',
      gia: '1000000000',
      hang: 'BMW',
      dong: 'Coupe'
    },
    {
      ten: 'Mercedes C200 Cabriolet',
      gia: '2800000000',
      hang: 'Mercedes',
      dong: 'Cabriolet'
    },
    {
      ten: 'BMW 420i Cabriolet',
      gia: '2700000000',
      hang: 'BMW',
      dong: 'Cabriolet'
    },
    {
      ten: 'Audi A3 Cabriolet',
      gia: '1900000000',
      hang: 'Audi',
      dong: 'Cabriolet'
    },
    {
      ten: 'Mercedes Benz CLK 320 Cabriolet',
      gia: '650000000',
      hang: 'Mercedes',
      dong: 'Cabriolet'
    },
    {
      ten: 'Volkswagen Beetle R-Line',
      gia: '1500000000',
      hang: 'Volkswagen',
      dong: 'Coupe'
    },
    {
      ten: 'KIA-Sorento-DATH-2WD',
      gia: '949000000',
      hang: 'KIA',
      dong: 'SUV/Crossover'
    },
    {
      ten: 'Mazda-CX-5-2-5L-AWD',
      gia: '999000000',
      hang: 'Mazda',
      dong: 'SUV/Crossover'
    },
    {
      ten: 'Honda-CR-V-E',
      gia: '958000000',
      hang: 'Honda',
      dong: 'SUV/Crossover'
    },
    {
      ten: 'Peugeot-3008-1-6L-Turbo',
      gia: '1399000000',
      hang: 'Peugeot',
      dong: 'SUV/Crossover'
    },
    {
      ten: 'KIA Optima 2.4 GT Line',
      gia: '915000000',
      hang: 'KIA',
      dong: 'Sedan'
    },
    {
      ten: 'Toyota Corolla Altis 1.8G CVT',
      gia: '731000000',
      hang: 'Toyota',
      dong: 'Sedan'
    },
    {
      ten: 'Toyota Vios 1.5E MT',
      gia: '500000000',
      hang: 'Toyota',
      dong: 'Sedan'
    }
]

function AddBestSeendProd(ten, gia) {
  var price = PriceToSring(gia);
  var boxHinh = $('#BSeen');
  boxHinh.owlCarousel('add', `<div class="product-box">
    <div class="product-thumbnail">
      <a href="javascript:;" title="` + ten + `">
        <img src="./image/BestSeen/` + ten + `.jpg" alt="` + ten + `">
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
          <a class="btn btn-gray hvr-rectangle-out" name="button" title="Chi tiết" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </a>
        </div>
      </form>
    </div>
  </div>`).owlCarousel('update');
  boxHinh.find('.owl-nav').removeClass('disabled');
}

function AddNewProd(ten, gia) {
  var price = PriceToSring(gia);
  var boxHinh = $('#NewProd');
  boxHinh.owlCarousel('add', `<div class="product-box">
    <div class="product-thumbnail">
      <a href="javascript:;" title="` + ten + `">
        <img src="./image/NewProduct/` + ten + `.jpg" alt="` + ten + `">
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

          <a class="btn btn-gray hvr-rectangle-out" name="button" title="Chi tiết" style="float: right">
            <i class="fa fa-eye"></i>
            Chi tiết
          </a>
        </div>
      </form>
    </div>
  </div>`).owlCarousel('update');
  boxHinh.find('.owl-nav').removeClass('disabled');
}

function AddBestSellProd(ten, gia) {
  var price = PriceToSring(gia);
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
            ` + price + `
          </span>
        </div>
      </div>
    </div>
    <form class="products-view-grid" action="" method="post" data-id="">
      <div class="group">
        <a class="button square hvr-rectangle-out" name="button-Buy-` + ten + `" data-toggle="modal" data-target="#QuickBuy">
          <i class="fa fa-shopping-cart"></i>
        </a>
        <a class="button square hvr-rectangle-out" name="Detail">
        <i class="fa fa-eye"></i>
        </a>
      </div>
    </form>
  </div>`).owlCarousel('update');
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

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(10.764122, 106.682473),
    zoom: 17,
  };

  var map = new google.maps.Map(document.getElementById("contact_map"), mapProp);
  var marker = new google.maps.Marker({
    position: mapProp.center
  });

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
  if ($(input_name).val() > 1) {
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
        AddCart(temp[i].tenxe, temp[i].gia, temp[i].num);
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
  if (!sessionStorage.mangXe)
    for (var i = 0; i < AllProd.length; i++) {
      var xe = {
        tenxe: AllProd[i].ten,
        num: 0,
        gia: parseInt(AllProd[i].gia)
      };
      mang.push(xe);
      sessionStorage.mangXe = JSON.stringify(mang);
    }
  if(!sessionStorage.Hang)
      sessionStorage.Hang = "";
  if(!sessionStorage.Dong)
      sessionStorage.Dong = "";
  CartUpdate();
  var dem = $(document).find('.cartCount');
  dem.text("" + sessionStorage.count);
  $('.sort-by').prop('selectedIndex', 0);
  LoadProd(0);
  CreateCompanyList();
  CreateTypeList();
});

$('#btnSI').on('click', function() {
//  var username = 'Xin chào ' + $('#txtID').val();
//  $('#SignInModal').modal('toggle');
//  $('#SignUpNavBtn').css('display', 'none');
//  $('#SignInNavBtn').css('display', 'none');
//  $('#InfoUserBtn').text(username);
//  $('#InfoUserBtn').css('display', 'block');
  $('#SignOutNavBtn').css('display', 'block');
//});
//
$('#SignOutNavBtn').on('click', function() {
//  $('#SignUpNavBtn').css('display', 'block');
//  $('#SignInNavBtn').css('display', 'block');
//  $('#InfoUserBtn').css('display', 'none');
//  $('#SignOutNavBtn').css('display', 'none');
//});

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
    <div class="product-action clearfix" style="margin-top: 15px>
      <form class="products-view-grid" action="" method="post" data-id="">
        <div>
          <a class="btn btn-gray hvr-rectangle-out" name="button-Buy-` + ten + `" title="Mua hàng" data-toggle="modal" data-target="#QuickBuy">
            <i class="fa fa-shopping-cart"></i>
            Mua hàng
          </a>
          <a class="btn btn-gray hvr-rectangle-out" name="button" title="Chi tiết" style="float: right">
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
var Type = ["Cabriolet", "Coupe", "HatchBack", "Limousine", "Sedan", "SUV/Crossover", "Truck", "Van/Minivan", "Wagon"];

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

function SetCompany(str)
{
  sessionStorage.Hang = str;
  sessionStorage.Dong = "";
}

function SetType(str)
{
  sessionStorage.Dong = str;
  sessionStorage.Hang = "";
}

$('.sort-by').on('change', function() {
  var x = $(this).prop('selectedIndex');
  // alert(x);
  $('.products-view').find('.row').find('div').remove();
  $('.pagination').find('li').remove();
  LoadProd(x);
});
