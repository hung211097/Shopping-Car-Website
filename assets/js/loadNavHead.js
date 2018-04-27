/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function changeSignIn()
{
  var username = localStorage.getItem('username');
  $('#SignUpNavBtn').css('display', 'none');
  $('#SignInNavBtn').css('display', 'none');
  $('#InfoUserBtn').text(username);
  $('#InfoUserBtn').css('display', 'block');
  $('#SignOutNavBtn').css('display', 'block');
  $('#footerSignIn').fadeOut('fast');
  $('#footerSignUp').fadeOut('fast');
  $('#footerForgetPass').fadeOut('fast');
  $('#footerSignOut').fadeIn('fast');
};

function changeSignOut()
{
  $('#SignUpNavBtn').css('display', 'block');
  $('#SignInNavBtn').css('display', 'block');
  $('#InfoUserBtn').css('display', 'none');
  $('#SignOutNavBtn').css('display', 'none');
  $('#footerSignOut').fadeOut('fast');
  $('#footerSignIn').fadeIn('fast');
  $('#footerSignUp').fadeIn('fast');
  $('#footerForgetPass').fadeIn('fast');
};

$(document).ready(function() {
  var isSI = localStorage.getItem('isSI');
  if (isSI == 1)
  {
    changeSignIn();
  }
  else
    changeSignOut();
  $('#CartBtn').fadeIn('fast');
});

$('#btnSI').on('click', function(){
  var username = 'Xin chào ' + $('#txtID').val() + '!';
  localStorage.setItem('username', username);
  localStorage.setItem('isSI', 1);
  $('#SignInModal').modal('toggle');
  changeSignIn();
});

$('#SignOutNavBtn').on('click', function(){ 
  localStorage.setItem('isSI', 0);
  changeSignOut();
});

$('#footerSignOut').on('click', function(){ 
  localStorage.setItem('isSI', 0);
  changeSignOut();
});

$('#btnSU').on('click', function(){
  var username = 'Xin chào ' + $('#DKID').val() + '!';
  localStorage.setItem('username', username);
  localStorage.setItem('isSI', 1);
  $('#SignUpModal').modal('toggle');
  changeSignIn();
});
