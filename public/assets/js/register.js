
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

  $('input[name="SURePass"]').parent().removeClass('has-error');
  $('input[name="SURePass"]').parent().removeClass('has-success');
  $('.form-repassword').find('.glyphicon-ok').hide();
  $('.form-repassword').find('.glyphicon-remove').hide();
  $('.repassword-null').hide();
  $('.repassword2-null').hide();
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

$('input[name="SURePass"]').on('blur', function() {
  if ($(this).val() == "") {
    $(this).parent().removeClass('has-success');
    $(this).parent().addClass('has-error');
    $('.form-repassword').find('.glyphicon-ok').hide();
    $('.form-repassword').find('.glyphicon-remove').show();
    $('.repassword-null').show();
    $('.repassword2-null').hide();
  }
  else {
        if ($(this).val() !== $('input[id="password"]').val()) {
          $(this).parent().removeClass('has-success');
          $(this).parent().addClass('has-error');
          $('.form-repassword').find('.glyphicon-ok').hide();
          $('.form-repassword').find('.glyphicon-remove').show();
          $('.repassword-null').hide();
          $('.repassword2-null').show();
        } else {
          $(this).parent().removeClass('has-error');
          $(this).parent().addClass('has-success');
          $('.form-repassword').find('.glyphicon-ok').show();
          $('.form-repassword').find('.glyphicon-remove').hide();
          $('.repassword-null').hide();
          $('.repassword2-null').hide();
        }
  }
});

$('#registerBtn').on('click', function() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var correct = true;
  if (!re.test($('input[id="email"]').val())) {
    correct = false;
  }

  if ($('input[id="fullname"]').val() === "" || $('input[id="account"]').val() === "" || $('input[id="password"]').val() === ""  || ($('input[id="password"]').val() !== $('input[id="repassword"]').val())) {
    correct = false;
  }

  if (!correct) {    
      swal("Đăng ký thất bại", "Hãy kiểm tra lại thông tin!", "error");
      event.preventDefault();
  }
});

function isCallBack()
{
    $('#registerBtn').removeAttr('disabled');
};

$(window).on('resize', function() {
  if($(window).width() <= 1010)
    $('.rePass').html(`<div class="col-md-6">
      <fieldset class="form-group">
        <label for="repassword">Nhập lại mật khẩu
          <span class="required">*</span>
        </label>
        <div class="form-group form-repassword has-feedback">
          <input type="password" name="SURePass" id="repassword"  value="" class="form-control form-control-lg">
          <p class="help-block repassword-null">Vui lòng điền thông tin vào đây!</p>
          <p class="help-block repassword2-null">Không trùng khớp mật khẩu!</p>
          <span class="glyphicon glyphicon-ok form-control-feedback"></span>
          <span class="glyphicon glyphicon-remove form-control-feedback"></span>
        </div>
      </fieldset>
    </div>

    <div class="col-md-6">
      <div class="g-recaptcha" data-sitekey="6LdhdlQUAAAAAClavUgx9vWtbjf8sa-bTH8Goty7" data-callback="isCallBack"></div>
      <div class="col-xs-12 text-xs-left" style="margin-top:10px; padding: 0; margin-bottom: 30px">
          <button type="submit" class="btn btn-primary" id="registerBtn" disabled>Đăng ký</button>
        <p style="margin-top: 15px;">Nếu bạn có tài khoản, hãy <a href="login" id="toLogin">Đăng nhập</a></p>
      </div>
    </div>`);
    else
    $('.rePass').html(`
      <div class="col-md-6">
        <div class="g-recaptcha" data-sitekey="6LdhdlQUAAAAAClavUgx9vWtbjf8sa-bTH8Goty7" data-callback="isCallBack"></div>
        <div class="col-xs-12 text-xs-left" style="margin-top:10px; padding: 0; margin-bottom: 30px">
            <button type="submit" class="btn btn-primary" id="registerBtn" disabled>Đăng ký</button>
          <p style="margin-top: 15px;">Nếu bạn có tài khoản, hãy <a href="login" id="toLogin">Đăng nhập</a></p>
        </div>
      </div>

      <div class="col-md-6">
      <fieldset class="form-group">
        <label for="repassword">Nhập lại mật khẩu
          <span class="required">*</span>
        </label>
        <div class="form-group form-repassword has-feedback">
          <input type="password" name="SURePass" id="repassword"  value="" class="form-control form-control-lg">
          <p class="help-block repassword-null">Vui lòng điền thông tin vào đây!</p>
          <p class="help-block repassword2-null">Không trùng khớp mật khẩu!</p>
          <span class="glyphicon glyphicon-ok form-control-feedback"></span>
          <span class="glyphicon glyphicon-remove form-control-feedback"></span>
        </div>
      </fieldset>
    </div>`);
})
