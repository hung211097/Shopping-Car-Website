/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//$('#InfoUserBtn').text(localStorage.getItem('username'));

//$('#infoName').html(localStorage.getItem('username').substring(9, localStorage.getItem('username').length - 1)
//        + `<a href="javascript:;" data-toggle="modal" data-target="#editIDNameModal" id="editIDNameBtn"><span class="fas fa-edit" aria-hidden="true" style="float: right;"></span></a>`);

$('.vertical-menu li a').on('click', function() {
    $('.vertical-menu a').removeClass();
    $(this).addClass('active');
});


$('#btnEN').on('click', function(){
    if ($('#txtRealName').val() === "") {
      $('#txtRealName').parent().removeClass('has-success');
      $('#txtRealName').parent().addClass('has-error');
      $('.form-name').find('.glyphicon-ok').hide();
      $('.form-name').find('.glyphicon-remove').show();
      $('.name-null').show();
      event.preventDefault();
    } 
    else {
      $('#txtName').parent().removeClass('has-error');
      $('#txtName').parent().addClass('has-success');
      $('.form-name').find('.glyphicon-ok').show();
      $('.form-name').find('.glyphicon-remove').hide();
      $('.name-null').hide();
    }
});

$('#editNameBtn').on('click', function(){
  $('#txtRealName').attr('placeholder', $('#realName').html()); 
  $('#txtRealName').val($('#realName').html());
  $('#txtRealName').parent().removeClass('has-success');
  $('#txtRealName').parent().removeClass('has-error');
  $('.form-name').find('.glyphicon-ok').hide();
  $('.form-name').find('.glyphicon-remove').hide();
  $('.name-null').hide();
});

$('#btnEP').on('click', function(){
    if ($('#txtUserOldPass').val() === "") {
      $('#txtUserOldPass').parent().removeClass('has-success');
      $('#txtUserOldPass').parent().addClass('has-error');
      $('.form-oldpass').find('.glyphicon-ok').hide();
      $('.form-oldpass').find('.glyphicon-remove').show();
      $('.oldpass-null').show();
      event.preventDefault();
    } 
    else {
        $('#txtUserOldPass').parent().removeClass('has-error');
        $('#txtUserOldPass').parent().addClass('has-success');
        $('.form-oldpass').find('.glyphicon-ok').show();
        $('.form-oldpass').find('.glyphicon-remove').hide();
        $('.oldpass-null').hide();
    
        if ($('#txtUserNewPass').val() === "") {
          $('#txtUserNewPass').parent().removeClass('has-success');
          $('#txtUserNewPass').parent().addClass('has-error');
          $('.form-newpass').find('.glyphicon-ok').hide();
          $('.form-newpass').find('.glyphicon-remove').show();
          $('.newpass-null').show();
          event.preventDefault();
        } 
        else {
            $('#txtUserNewPass').parent().removeClass('has-error');
            $('#txtUserNewPass').parent().addClass('has-success');
            $('.form-newpass').find('.glyphicon-ok').show();
            $('.form-newpass').find('.glyphicon-remove').hide();
            $('.newpass-null').hide();
        
            if ($('#txtUserReNewPass').val() === "") {
              $('#txtUserReNewPass').parent().removeClass('has-success');
              $('#txtUserReNewPass').parent().addClass('has-error');
              $('.form-renewpass').find('.glyphicon-ok').hide();
              $('.form-renewpass').find('.glyphicon-remove').show();
              $('.renewpass-null').show();
              $('.renewpass2-null').hide();
              event.preventDefault();
            }
            else
            {
                if($('#txtUserReNewPass').val() !== $('#txtUserNewPass').val())
                {
                    $('#txtUserReNewPass').parent().removeClass('has-success');
                    $('#txtUserReNewPass').parent().addClass('has-error');
                    $('.form-renewpass').find('.glyphicon-ok').hide();
                    $('.form-renewpass').find('.glyphicon-remove').show();
                    $('.renewpass-null').hide();
                    $('.renewpass2-null').show();
                    event.preventDefault();
                }
                else {
                  $('#txtUserReNewPass').parent().removeClass('has-error');
                  $('#txtUserReNewPass').parent().addClass('has-success');
                  $('.form-renewpass').find('.glyphicon-ok').show();
                  $('.form-renewpass').find('.glyphicon-remove').hide();
                  $('.renewpass-null').hide();
                  $('.renewpass2-null').hide();
                }
            }
        }
    }
});

$('#editPassBtn').on('click', function(){
//  $('#txtUserOldPass').attr('placeholder', $('#realName').html()); 
//  $('#txtUserOldPass').val($('#realName').html());
  $('#txtUserOldPass').parent().removeClass('has-success');
  $('#txtUserOldPass').parent().removeClass('has-error');
  $('.form-oldpass').find('.glyphicon-ok').hide();
  $('.form-oldpass').find('.glyphicon-remove').hide();
  $('.oldpass-null').hide();
  $('#txtUserNewPass').parent().removeClass('has-success');
  $('#txtUserNewPass').parent().removeClass('has-error');
  $('.form-newpass').find('.glyphicon-ok').hide();
  $('.form-newpass').find('.glyphicon-remove').hide();
  $('.newpass-null').hide();
  $('#txtUserReNewPass').parent().removeClass('has-success');
  $('#txtUserReNewPass').parent().removeClass('has-error');
  $('.form-renewpass').find('.glyphicon-ok').hide();
  $('.form-renewpass').find('.glyphicon-remove').hide();
  $('.renewpass-null').hide();
  $('.renewpass2-null').hide();
});

$('#editEmailBtn').on('click', function(){
  $('#txtEmail').attr('placeholder', $('#Email').html()); 
  $('#txtEmail').val($('#Email').html());
  $('#txtEmail').parent().removeClass('has-success');
  $('#txtEmail').parent().removeClass('has-error');
  $('.form-email').find('.glyphicon-ok').hide();
  $('.form-email').find('.glyphicon-remove').hide();
  $('.email-null').hide();
  $('.email2-null').hide();
});

$('#btnEM').on('click', function(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var correct = true;
    if (!re.test($('#txtEmail').val())) {
      correct = false;
    }
    
    if (correct === false)
    {
        $('#txtEmail').parent().removeClass('has-success');
        $('#txtEmail').parent().addClass('has-error');
        $('.form-email').find('.glyphicon-ok').hide();
        $('.form-email').find('.glyphicon-remove').show();
        $('.email-null').show();
        event.preventDefault();
    }
    else
    {
        $('#txtEmail').parent().removeClass('has-error');
        $('#txtEmail').parent().addClass('has-success');
        $('.form-email').find('.glyphicon-ok').show();
        $('.form-email').find('.glyphicon-remove').hide();
        $('.email-null').hide();
    }
});

$('#historyBuying').on('click', function(){
  $('#BodyInfo div').hide();
  $('#HistoryBuying').show();
  $('#HistoryBuying div').show(); 
});

$('#infoUser').on('click', function(){
  $('#BodyInfo div').hide();
  $('#InfoUser').show(); 
  $('#InfoUser div').show(); 
});

$('#sliderDS').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        5000:{
            items:3,
            nav:false
        },
        10000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

function AddDetail(ten, gia)
{
    var price = PriceToSring(gia);
    
    $('#sliderDS').owlCarousel('add',
                `<div class="item">
                    <div class="containerUI">
                        <div class="imageUI">
                            <a href="javascript:;" title="` + ten + `"><img src="./image/all/` + ten + `/` + ten + `_1.jpg" alt="` + ten + `"></a>
                            
                        </div>
    
                        <div class="product-info clearfix" style="text-align: center;">
                            <h3 class="product-name">
                              <a href="javascript:;" title="` + ten + `">` + ten + `</a>
                            </h3>
                        </div>
    
                        <div class="clearfix priceArea">
                            <div class="special-price">
                                <span class="price product-price">
                                    <i class="fas fa-money-bill-alt"></i>
                                    : ` + price + `  
                                </span>
                            </div>
                        </div>
                
                        <div class=" middleUI">
                            <a href="detail.html" class="button square hvr-rectangle-out" name="Detail-` + ten + `">
                                <i class="fa fa-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>`).owlCarousel('update');
				
	$('a[name="Detail-' + ten +'"]').on('click', function(){
		sessionStorage.detailXe = ten;
	});
};

$('.billDetailBtn').on('click', function(){    
    for (var i=0; i<$('.item').length; i++) 
    {
        $("#sliderDS").trigger('remove.owl.carousel', [i])
                                  .trigger('refresh.owl.carousel');
    }
    
    var index = $(this).text();
    
    //alert($(this).parent().parent().find('td:nth-child(3)').text());
    //alert($('#tenhoadon0_0').val());
//    if ($(this).text() === '#001')
//    {
//        AddDetail('Aston Martin DB11', '4829000000');  
//        AddDetail('BMW 4 Series Convertible', '1116000000');
//    }
//    else
//    {
//        AddDetail('Chevrolet Camaro LS 2017', '3200000000');
//    }
});

