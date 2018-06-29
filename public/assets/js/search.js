$(document).ready(function() {
  if ($(window).scrollTop() >= 86) {
    $('.modal-dialog').css('z-index', '9999 !important');
  }
});

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
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
