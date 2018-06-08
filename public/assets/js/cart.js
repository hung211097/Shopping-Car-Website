$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }

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

function Inc(input_name) {
  var value = $(input_name).val();
  $(input_name).val(++value);
  IncreaseNumCar();
}

function Dec(input_name) {
  var value = $(input_name).val();
  if ($(input_name).val() > 1) {
    $(input_name).val(--value);
    DecreaseNumCar(1);
  }
}

function DecreaseNumCar(x) {
  var cartcount = $(document).find('.cartCount');
  var dem = parseInt(cartcount.text());
  dem -= x;
  cartcount.text("" + dem);
}

function IncreaseNumCar() {
  var cartcount = $(document).find('.cartCount');
  var dem = parseInt(cartcount.text());
  dem++;
  cartcount.text("" + dem);
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
