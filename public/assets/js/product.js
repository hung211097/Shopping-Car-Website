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

function DecreaseNumCar() {
  var cartcount = $(document).find('.cartCount');
  var dem = parseInt(cartcount.text());
  dem--;
  cartcount.text("" + dem);
}

function IncreaseNumCar() {
  var cartcount = $(document).find('.cartCount');
  var dem = parseInt(cartcount.text());
  dem++;
  cartcount.text("" + dem);
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
