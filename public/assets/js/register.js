
$(document).ready(function() {
  if ($('input[name="SUEmail"]').val() != "" && re.test($('input[name="SUEmail"]').val())) {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-email').find('.glyphicon-ok').show();
    $('.form-email').find('.glyphicon-remove').hide();
    $('.email-null').hide();
    $('.email-format').hide();
  }
  if ($('input[name="SUHoTen"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-name').find('.glyphicon-ok').show();
    $('.form-name').find('.glyphicon-remove').hide();
    $('.name-null').hide();
  }
  if ($('input[name="SUID"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-account').find('.glyphicon-ok').show();
    $('.form-account').find('.glyphicon-remove').hide();
    $('.account-null').hide();
  }
  if ($('input[name="SUPass"]').val() != "") {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-password').find('.glyphicon-ok').show();
    $('.form-password').find('.glyphicon-remove').hide();
    $('.password-null').hide();
  }
});

var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('input[name="SUEmail"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-email').find('.glyphicon-ok').hide();
    $('.form-email').find('.glyphicon-remove').show();
    $('.email-format').hide();
    $('.email-null').show();
  } else if (!re.test($(this).val())) {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-email').find('.glyphicon-ok').hide();
    $('.form-email').find('.glyphicon-remove').show();
    $('.email-format').show();
    $('.email-null').hide();
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-email').find('.glyphicon-ok').show();
    $('.form-email').find('.glyphicon-remove').hide();
    $('.email-null').hide();
    $('.email-format').hide();
  }
});

$('input[name="SUHoTen"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-name').find('.glyphicon-ok').hide();
    $('.form-name').find('.glyphicon-remove').show();
    $('.name-null').show();
  } else {
    $(this).parent().removeClass('has-error');
    $(this).parent().addClass('has-success');
    $('.form-name').find('.glyphicon-ok').show();
    $('.form-name').find('.glyphicon-remove').hide();
    $('.name-null').hide();
  }
});

$('input[name="SUID"]').on('blur', function() {
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

$('input[name="SUPass"]').on('blur', function() {
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

$('#registerBtn').on('click', function() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var correct = true;
  if (!re.test($('input[id="email"]').val())) {
    correct = false;
  }

  if ($('input[id="fullname"]').val() === "" || $('input[id="account"]').val() === "" || $('input[id="password"]').val() === "") {
    correct = false;
  }

  if (correct) {
      swal({
        type: 'success',
        title: 'Đăng ký thành công',
        showConfirmButton: false,
        timer: 1500
      });
  }
  else
  {
    swal("Đăng ký thất bại", "Hãy kiểm tra lại thông tin!", "error");
    event.preventDefault();
  }
});

function isCallBack()
{
    $('#registerBtn').removeAttr('disabled');
};