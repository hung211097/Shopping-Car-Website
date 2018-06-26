$(document).ready(function() {
  $('.phone-null').hide();
  $('.address-null').hide();
  $('.glyphicon-ok').hide();
  $('.glyphicon-remove').hide();

  if ($('input[name="phone"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-phone').find('.glyphicon-ok').show();
    $('.form-phone').find('.glyphicon-remove').hide();
    $('.phone-null').hide();
  }
  if ($('input[name="address"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-address').find('.glyphicon-ok').show();
    $('.form-address').find('.glyphicon-remove').hide();
    $('.address-null').hide();
  }
});

var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('.summary-product').on('scroll', function() {
  $(this).removeClass('order-summary--is-scrollable');
});

$('input[name="phone"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-phone').find('.glyphicon-ok').hide();
    $('.form-phone').find('.glyphicon-remove').show();
    $('.phone-null').show();
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-phone').find('.glyphicon-ok').show();
    $('.form-phone').find('.glyphicon-remove').hide();
    $('.phone-null').hide();
  }
});

$('input[name="address"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-address').find('.glyphicon-ok').hide();
    $('.form-address').find('.glyphicon-remove').show();
    $('.address-null').show();
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-address').find('.glyphicon-ok').show();
    $('.form-address').find('.glyphicon-remove').hide();
    $('.address-null').hide();
  }
});

$('.btn-checkout').on('click', function() {
  var inform = $('.sidebar__content').find('div.form-group.has-error').find('ul');
  var correct = true;

  if ($('input[name="phone"]').val() == "" || $('input[name="address"]').val() == "") {
    correct = false;
    inform.html('<li>Hãy điền đầy đủ thông tin vào form!</li>');
  }

  if (correct) {
      inform.html('<li>Đã viết hóa đơn!</li>');
  }
});
