/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#InfoUserBtn').text(localStorage.getItem('username'));

$('#infoName').html(localStorage.getItem('username').substring(9, localStorage.getItem('username').length - 1)
        + `<a href="javascript:;"><span class="fas fa-edit" aria-hidden="true" style="float: right;"></span></a>`);

$('.vertical-menu li a').on('click', function() {
    $('.vertical-menu a').removeClass();
    $(this).addClass('active');
});