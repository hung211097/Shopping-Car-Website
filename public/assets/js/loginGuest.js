$(document).ready(function() {
  if ($('input[name="email"]').val() != "" && re.test($('input[name="email"]').val())) {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-email').find('.glyphicon-ok').show();
    $('.form-email').find('.glyphicon-remove').hide();
    $('.email-null').hide();
    $('.email-format').hide();
  }
  if ($('input[name="account"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-account').find('.glyphicon-ok').show();
    $('.form-account').find('.glyphicon-remove').hide();
    $('.account-null').hide();
  }
  if ($('input[name="password"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-password').find('.glyphicon-ok').show();
    $('.form-password').find('.glyphicon-remove').hide();
    $('.password-null').hide();
  }
});

var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('input[name="email"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-email').find('.glyphicon-ok').hide();
    $('.form-email').find('.glyphicon-remove').show();
    $('.email-format').hide();
    $('.email-null').show();
    $('#forgetBtn').css('margin-top', '-8px');
  } else if (!re.test($(this).val())) {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-email').find('.glyphicon-ok').hide();
    $('.form-email').find('.glyphicon-remove').show();
    $('.email-format').show();
    $('.email-null').hide();
    $('#forgetBtn').css('margin-top', '-8px');
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-email').find('.glyphicon-ok').show();
    $('.form-email').find('.glyphicon-remove').hide();
    $('.email-null').hide();
    $('.email-format').hide();
    $('#forgetBtn').css('margin-top', '20px');
  }
});

$('input[name="account"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-account').find('.glyphicon-ok').hide();
    $('.form-account').find('.glyphicon-remove').show();
    $('.account-null').show();
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-account').find('.glyphicon-ok').show();
    $('.form-account').find('.glyphicon-remove').hide();
    $('.account-null').hide();
  }
});

$('input[name="password"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-password').find('.glyphicon-ok').hide();
    $('.form-password').find('.glyphicon-remove').show();
    $('.password-null').show();
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-password').find('.glyphicon-ok').show();
    $('.form-password').find('.glyphicon-remove').hide();
    $('.password-null').hide();
  }
});

$('#loginBtn').on('click', function() {
  var correct = true;
  if ($('input[name="account"]').val() == "") {
    $('input[name="account"]').parent().removeClass('has-success');
    $('input[name="account"]').parent().addClass('has-error');
    $('.form-account').find('.glyphicon-ok').hide();
    $('.form-account').find('.glyphicon-remove').show();
    $('.account-null').show();
    correct = false;
  }

  if ($('input[name="password"]').val() == "") {
    $('input[name="password"]').parent().removeClass('has-success');
    $('input[name="password"]').parent().addClass('has-error');
    $('.form-password').find('.glyphicon-ok').hide();
    $('.form-password').find('.glyphicon-remove').show();
    $('.password-null').show();
    correct = false;
  }

  if (correct) {

  }
});

$('#forgetBtn').on('click', function() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var correct = true;
  if ($('input[name="email"]').val() == "") {
    $('input[name="email"]').parent().removeClass('has-success');
    $('input[name="email"]').parent().addClass('has-error');
    $('.form-email').find('.glyphicon-ok').hide();
    $('.form-email').find('.glyphicon-remove').show();
    $('.email-format').hide();
    $('.email-null').show();
    $('#forgetBtn').css('margin-top', '-8px');
    correct = false;
  }
  else
  if (!re.test($('input[name="email"]').val())) {
    $('input[name="email"]').parent().removeClass('has-success');
    $('input[name="email"]').parent().addClass('has-error');
    $('.form-email').find('.glyphicon-ok').hide();
    $('.form-email').find('.glyphicon-remove').show();
    $('.email-format').show();
    $('.email-null').hide();
    $('#forgetBtn').css('margin-top', '-8px');
    correct = false;
  }

  if (correct) {
    $('#forgetBtn').css('margin-top', '20px');

  }
});
