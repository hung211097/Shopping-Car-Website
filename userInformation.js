/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#InfoUserBtn').text(localStorage.getItem('username'));

$('#infoName').html(localStorage.getItem('username').substring(9, localStorage.getItem('username').length - 1)
        + `<a href="javascript:;" data-toggle="modal" data-target="#editIDNameModal" id="editIDNameBtn"><span class="fas fa-edit" aria-hidden="true" style="float: right;"></span></a>`);

$('.vertical-menu li a').on('click', function() {
    $('.vertical-menu a').removeClass();
    $(this).addClass('active');
});

$('#btnEI').on('click', function(){
  username = 'Xin chào ' + $('#txtIDName').val() + '!';
  localStorage.setItem('username', username);
  $('#InfoUserBtn').text(localStorage.getItem('username'));
  $('#infoName').html(localStorage.getItem('username').substring(9, localStorage.getItem('username').length - 1)
        + `<a href="javascript:;" data-toggle="modal" data-target="#editIDNameModal" id="editIDNameBtn"><span class="fas fa-edit" aria-hidden="true" style="float: right;"></span></a>`);
  $('#editIDNameModal').modal('toggle');  
});

$('#editIDNameBtn').on('click', function(){
  var infoname = localStorage.getItem('username').substring(9, localStorage.getItem('username').length - 1);
  $('#txtIDName').attr(infoname); 
  $('#txtIDName').val(infoname);
});

$('#btnEN').on('click', function(){
  $('#realName').text($('#txtRealName').val());
  $('#editNameModal').modal('toggle');  
});

$('#editNameBtn').on('click', function(){
  $('#txtRealName').attr('placeholder', $('#realName').html()); 
  $('#txtRealName').val($('#realName').html());
});

$('#btnEP').on('click', function(){
  $('#editPassModal').modal('toggle');  
});

$('#btnEPh').on('click', function(){
  $('#editPhoneModal').modal('toggle');  
});

$(document).ready(function() {
    $('#txtOldPhone,#txtNewPhone').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
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
                            <a href="javascript:;" title="` + ten + `"><img src="./image/BestSeen/` + ten + `.jpg" alt="` + ten + `"></a>
                            
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
                            <a type="button" class="button square hvr-rectangle-out" name="Detail" class="DetailBtn">
                                <i class="fa fa-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>`).owlCarousel('update');
};

$('.billDetailBtn').on('click', function(){    
    for (var i=0; i<$('.item').length; i++) 
    {
        $("#sliderDS").trigger('remove.owl.carousel', [i])
                                  .trigger('refresh.owl.carousel');
    }
    
    if ($(this).text() === '#001')
    {
        AddDetail('Aston Martin DB11', '4829000000');  
        AddDetail('BMW 4 Series Convertible', '1116000000');
    }
    else
    {
        AddDetail('Chevrolet Camaro LS 2017', '3200000000');
    }
});
